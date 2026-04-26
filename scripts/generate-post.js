const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { format } = require('date-fns');
const { SYSTEM_PROMPT, KEYWORDS, CLINIC_INFO } = require('./prompts');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

async function generatePost() {
    console.log('🤖 AI(Gemini) 의사선생님이 글을 쓸 준비를 하고 있습니다...');

    if (!process.env.GOOGLE_API_KEY) {
        console.error('❌ GOOGLE_API_KEY가 없습니다. .env 파일을 확인해주세요.');
        process.exit(1);
    }

    const postsDir = path.join(__dirname, '../content/posts');
    const existingTitles = [];

    if (fs.existsSync(postsDir)) {
        const files = fs.readdirSync(postsDir);
        files.forEach(file => {
            if (file.endsWith('.md')) {
                const content = fs.readFileSync(path.join(postsDir, file), 'utf-8');
                const match = content.match(/title: "(.*)"/);
                if (match) {
                    existingTitles.push(match[1]);
                }
            }
        });
    }

    let topic = "";

    if (process.argv[2]) {
        topic = process.argv[2];
        console.log(`🎯 지정된 주제: [${topic}]`);
    } else {
        try {
            const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
            const topicPrompt = `
            당신은 내과 병원 블로그 마케터입니다.
            기존에 작성된 블로그 글 제목들은 다음과 같습니다:
            ${JSON.stringify(existingTitles)}
    
            위 주제들과 겹치지 않는 새로운 건강 정보 주제 1가지만 추천해주세요.
            
            🚨 반드시 아래 허용된 범주 안에서만 주제를 선정하세요:
            - 소화기 질환: 위염, 위궤양, 역류성 식도염, 대장 용종 등
            - 건강검진 및 내과 검사: 위내시경·대장내시경 검사, 복부 초음파, 5대 국가암검진, CT 촬영 등
            - 만성질환: 고혈압, 당뇨병, 고지혈증, 갑상선 등
            
            출력 형식: 주제만 텍스트로 출력 (예: "헬리코박터균 감염과 위암 예방을 위한 제균 치료 가이드")
            `;

            const result = await model.generateContent(topicPrompt);
            topic = result.response.text().trim().replace(/"/g, '');
            console.log(`💡 AI 추천 주제: [${topic}]`);
        } catch (e) {
            topic = '속 쓰림과 명치 통증, 위내시경이 필요한 순간';
            console.log(`📝 랜덤 선택 주제: [${topic}]`);
        }
    }

    const kstDate = new Date(new Date().getTime() + 9 * 60 * 60 * 1000);
    const today = format(kstDate, 'yyyy-MM-dd');

    let content = "";
    const MAX_RETRIES = 3;

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        try {
            console.log(`🚀 Gemini 모델로 글 작성 시도 (${attempt}/${MAX_RETRIES})...`);
            const model = genAI.getGenerativeModel({
                model: "gemini-2.5-flash",
                generationConfig: {
                    temperature: 0.7,
                }
            });

            const fullPrompt = `${SYSTEM_PROMPT}

## 입력된 주제
- **주제**: "${topic}"
- **핵심 키워드**: ${KEYWORDS.join(', ')}

## 출력 요구사항

**반드시 다음 Frontmatter로 시작:**
---
title: "(매력적이고 검색 최적화된 제목)"
date: "${today}"
description: "(160자 이내 SEO 최적화 설명)"
tags: ["태그1", "태그2", "태그3"]
author: "인천계양속편한내과"
coverImage: ""
---

**그 다음 본문을 다음 구조로 작성 (마크다운 H2, H3 활용):**

## (H2: 감성적이고 공감되는 제목)
(도입부)

## 증상
(내용)

## 원인
(내용)

## 치료 및 예방
(내용)

## 25년 임상경험 내과 전문의 Q&A
(Q&A 3개)

## 마무리
(요약 및 진료 권유)

${CLINIC_INFO}

---

> 💡 **진료 안내 및 주의사항**  
> 본 게시물은 의료법 제56조 1항을 준수하여 의료 정보 제공 목적으로 작성되었습니다.  
> 제공된 의학 정보는 환자의 상태 및 체질에 따라 진료 결과가 다를 수 있으며, 부작용이 발생할 수 있으므로 시술 전 반드시 전문의와 충분한 상담을 진행하시기 바랍니다.
`;

            const result = await model.generateContent(fullPrompt);
            content = result.response.text();
            console.log("✨ 작성 성공!");
            break;

        } catch (apiError) {
            console.error(`❌ 오류 (시도 ${attempt}/${MAX_RETRIES}):`, apiError.message);
            if (attempt < MAX_RETRIES) {
                await new Promise(resolve => setTimeout(resolve, attempt * 2000));
            }
        }
    }

    if (!content) {
        console.error('📋 모든 재시도 실패.');
        return;
    }

    let slug = "";
    try {
        const slugModel = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        const slugResult = await slugModel.generateContent(`블로그 글 제목: "${topic}"\n\n위 제목에서 핵심 키워드 2~4개만 뽑아 영문 URL slug를 만들어주세요.\n규칙: 소문자, 하이픈(-) 구분, 최대 50자, slug만 출력.\n예시: fatty-liver-prevention-guide`);
        slug = slugResult.response.text().trim().toLowerCase().replace(/[^a-z0-9-]/g, '').substring(0, 60);
    } catch (e) {
        slug = Math.random().toString(36).substring(7);
    }

    const filename = `${today}-${slug}.md`;
    if (!fs.existsSync(postsDir)) fs.mkdirSync(postsDir, { recursive: true });

    fs.writeFileSync(path.join(postsDir, filename), content);
    console.log(`✅ 글 작성 완료: content/posts/${filename}`);
}

generatePost();
