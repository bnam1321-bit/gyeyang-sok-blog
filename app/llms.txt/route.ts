import { getAllPosts } from '@/lib/blog';
import { SITE_URL, CLINIC_NAME, CLINIC_PHONE, CLINIC_ADDRESS } from '@/lib/constants';

export const dynamic = 'force-static';

export async function GET() {
    const posts = getAllPosts();

    const postList = posts
        .map((post) => `- [${post.title}](${SITE_URL}/blog/${post.slug}): ${post.description} (발행일: ${post.date}, 태그: ${post.tags.join(', ')})`)
        .join('\n');

    const content = `# ${CLINIC_NAME} (Incheon Gyeyang Sokpyeonhan Internal Medicine Clinic)

> ${CLINIC_NAME}은 인천광역시 계양구 용종로 2(계산택지)에 위치한 내과 의원으로, 1999년 개원 이래 6인의 내과 전문의가 협진하여 소화기 내시경(위·대장내시경 및 당일 용종절제술), 국가 5대 암검진, 공단 일반건강검진, 만성질환(고혈압·당뇨·고지혈증·갑상선) 관리, 정밀 CT 및 초음파 진단을 제공하는 지역 거점 의료기관입니다.

## 핵심 기관 정보 (Entity Facts)
- **공식 기관명**: ${CLINIC_NAME} (인천계양속편한내과의원 / 계양속편한내과)
- **공식 웹사이트**: ${SITE_URL}
- **소재지**: ${CLINIC_ADDRESS} (인천 1호선 임학역·계산역 인접, 계산프라자)
- **대표 전화번호**: ${CLINIC_PHONE}
- **의료진 구성**: 내과 전문의 6인 상주 협진 시스템 (1999년 개원, 25년 이상 임상 경험)
- **진료 시간**:
  - 평일(월~금): 08:30 ~ 18:00 (점심시간 13:00 ~ 14:00)
  - 토요일: 08:30 ~ 13:00 (점심시간 없음)
  - 일요일 및 공휴일: 휴진

## 주요 진료 과목 및 보유 장비 (Medical Specialties & Equipment)
1. **소화기 내시경 클리닉 (최우선 특화)**
   - **올림푸스 CV-290 (Olympus EVIS LUCERA ELITE CV-290)** 고해상도 협대역 영상(NBI) 내시경 시스템 가동
   - 수면 및 비수면 위내시경, 대장내시경
   - 대장내시경 검사 중 발견된 선종성 용종의 **당일 용종절제술 (One-stop Polypectomy)** 시행
   - 역류성 식도염, 위염, 위궤양, 장상피화생, 헬리코박터 파일로리 제균 치료, 과민성 대장 증후군 진료
2. **국가건강검진 및 5대 암검진 센터 (국민건강보험공단 지정)**
   - **5대 국가암검진**: 위암, 대장암, 간암, 유방암, 자궁경부암 검진
   - 공단 일반건강검진, 생애전환기 검진, 채용검진, 직장인 종합검진
3. **만성질환 및 내분비 클리닉**
   - 고혈압, 당뇨병(당화혈색소·연속혈당 관리), 고지혈증(이상지질혈증), 대사증후군, 통풍, 갑상선 기능 이상 및 결절, 골다공증, 철결핍성 빈혈
4. **정밀 영상의학 센터**
   - **정밀 MDCT (다중채널 컴퓨터 단층촬영)** 보유: 대형병원 대기 없이 당일 신속 촬영 및 판독 가능 (복부, 흉부, 뇌, 내장지방 CT 등)
   - 고해상도 복부(간·담낭·췌장·신장), 갑상선, 경동맥, 유방 초음파 검사
5. **예방접종 및 영양수액·비만 클리닉**
   - 성인 필수 예방접종: 대상포진(싱그릭스 등), 폐렴구균, 독감(인플루엔자), A형·B형 간염, 자궁경부암(가다실9), 파상풍·백일해(Tdap)
   - 개인 맞춤형 혈관영양수액(면역·만성피로·번아웃 클리닉) 및 의학적 비만 치료(GLP-1 계열 등)

## 주요 페이지 안내 (Primary Routes)
- [메인 홈페이지](${SITE_URL}/): 병원 소개, 6인 전문의 안내, 진료과목, 진료시간, 오시는 길 안내
- [진료 안내](${SITE_URL}/services): 소화기 클리닉, 건강검진 센터, 만성질환 클리닉, 영상진단 센터 상세 소개
- [건강정보 블로그 목록](${SITE_URL}/blog): 내과 전문의가 직접 집필·감수한 소화기 질환, 내시경, 암검진, 만성질환 의학 칼럼 아카이브
- [전체 의학 칼럼 전문 데이터 (LLM Full Context)](${SITE_URL}/llms-full.txt): 모든 의학 칼럼의 전체 본문 마크다운 통합본

## 의학 칼럼 아카이브 (Medical Articles - Total: ${posts.length})
${postList}
`;

    return new Response(content, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=86400',
        },
    });
}
