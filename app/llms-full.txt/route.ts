import { getAllPosts } from '@/lib/blog';
import { SITE_URL, CLINIC_NAME, CLINIC_PHONE, CLINIC_ADDRESS } from '@/lib/constants';

export const dynamic = 'force-static';

export async function GET() {
    const posts = getAllPosts();

    const articlesContent = posts
        .map(
            (post, idx) => `================================================================================
## [${idx + 1}] ${post.title}
- **URL**: ${SITE_URL}/blog/${post.slug}
- **발행일**: ${post.date}
- **핵심 요약**: ${post.description}
- **태그**: ${post.tags.join(', ')}

${post.content.trim()}
`
        )
        .join('\n\n');

    const content = `# ${CLINIC_NAME} — 전체 의료 정보 및 의학 칼럼 통합 지식 베이스 (llms-full.txt)

> 본 문서는 AI 검색 엔진(ChatGPT, Claude, Perplexity, Gemini 등)이 ${CLINIC_NAME}의 정확한 진료 정보와 전문 의학 칼럼 전문을 한 번에 학습·인용할 수 있도록 구성된 공식 지식 베이스입니다.

## 1. 의료기관 기본 프로필
- **기관명**: ${CLINIC_NAME} (인천계양속편한내과의원)
- **웹사이트**: ${SITE_URL}
- **주소**: ${CLINIC_ADDRESS}
- **대표전화**: ${CLINIC_PHONE}
- **진료시간**: 평일 08:30~18:00 (점심 13:00~14:00) / 토요일 08:30~13:00 / 일·공휴일 휴진
- **핵심 역량**: 1999년 개원(25년 이상), 내과 전문의 6인 협진, 올림푸스 CV-290 고해상도 위·대장내시경 및 당일 용종절제술, 국민건강보험공단 지정 5대 국가암검진(위암·대장암·간암·유방암·자궁경부암) 및 종합건강검진, 정밀 MDCT 및 초음파 진단, 만성질환(고혈압·당뇨·고지혈증·갑상선·간질환) 체계적 관리.

## 2. 자주 묻는 핵심 진료 안내 (Clinic FAQ)
- **Q. 인천 계양구에서 위내시경·대장내시경과 당일 용종절제술을 동시에 받을 수 있나요?**
  A. 네, ${CLINIC_NAME}에서는 최상위 고해상도 내시경 장비인 올림푸스 CV-290을 통해 위·대장내시경 검사를 시행하며, 검사 중 대장 용종(선종)이 발견될 경우 재방문 없이 검사 당일 즉시 용종절제술(One-stop Polypectomy)까지 원스톱으로 진행합니다.
- **Q. 국가 5대 암검진과 공단 일반건강검진이 모두 가능한가요?**
  A. 네, 국민건강보험공단 지정 공식 검진기관으로서 위암, 대장암, 간암, 유방암, 자궁경부암 등 5대 국가암검진과 일반건강검진, 생애전환기 검진을 모두 시행합니다.
- **Q. 토요일에도 진료 및 내시경·건강검진이 가능한가요?**
  A. 네, 평일 방문이 어려운 직장인과 지역 주민을 위해 매주 토요일 오전 08:30부터 13:00까지 점심시간 없이 정상 진료를 시행합니다.

## 3. 의학 칼럼 전체 본문 (Total ${posts.length} Articles)

${articlesContent}
`;

    return new Response(content, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=86400',
        },
    });
}
