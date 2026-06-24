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
            const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });
            const topicPrompt = `
            당신은 내과 병원 블로그 마케터입니다.
            기존에 작성된 블로그 글 제목들은 다음과 같습니다:
            ${JSON.stringify(existingTitles)}
    
            위 주제들과 겹치지 않는 새로운 건강 정보 주제 1가지만 추천해주세요.
            
            🚨 반드시 아래 허용된 범주 및 키워드 안에서만 주제를 선정하세요 (균등하게 다루어지도록 선택):
            - 소화기 질환 및 내시경 (올림푸스 CV-290 내시경 검사)
            - 만성질환 관리 (고혈압, 당뇨병, 고지혈증, 갑상선 등)
            - 비만 치료 및 관리 (위고비, 마운자로 및 비만 CT 정밀 촬영)
            - 대학병원급 MDCT 정밀 검사 (일반 로컬 의원 중 매우 드문 CT 보유의 강점 강조: 대학병원 대기 없이 당일 신속 두통/뇌 CT, 가슴/심장/폐 CT, 복부/췌장/담석 CT 촬영 및 판독)
            - 영양 수액 클리닉 (혈관영양수액, 태반주사, 마늘주사, 감초주사, 메가비타민C 주사)
            - 예방 접종 및 백신 (독감 백신, 대상포진 싱그릭스, 폐렴구균, A형·B형 간염 백신, Tdap 백신)
            
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
                model: "gemini-2.5-pro",
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
description: "(환자 검색어 기준, 160자 이내, 클리닉명 절대 포함 X)"
tags: ["태그1", "태그2", "태그3"]
author: "인천계양속편한내과"
coverImage: ""
---

**본문 구성:**

## 새로운 글쓰기 패턴 (매우 중요)
- **주제 내용**: [원장님 진료 경험에서 본 패턴] 1~2개를 반드시 포함하세요.
- **형식**: 자유롭게 구성하되 (질문 도입, 사례 도입, 통계 도입, 비교 도입) 중 랜덤으로 하나를 선택하여 시작하세요. 기계적인 H2 구조(원인, 증상, 치료 등)를 탈피하세요.
- **어조**: 진료실에서 환자에게 설명하듯 1인칭 표현("제가 진료를 보면서...", "저희 의원에 오시는 분들 중...")을 자연스럽게 일부 사용하세요.
- **메타 디스크립션**: 환자가 실제로 검색할 만한 검색어 기준으로 작성하고, 클리닉명(병원명)은 **절대 포함하지 마세요**.
- **글 끝부분 마무리**: 글의 마지막에는 자연스럽게 [원장님 약력 1줄 + 진료 가능 항목]을 포함하여 신뢰도를 높이세요.


## 주의사항
- 본문은 반드시 3,000자 이상 작성할 것 (핵심 정보를 충분히 포함)

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
        const slugModel = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });
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
