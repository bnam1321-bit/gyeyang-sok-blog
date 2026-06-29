const fs = require('fs');

const homeHtmlPath = 'public/home.html';
let content = fs.readFileSync(homeHtmlPath, 'utf8');

// Normalize line endings to LF
const originalLineEndings = content.includes('\r\n') ? '\r\n' : '\n';
content = content.replace(/\r\n/g, '\n');

// 1. Variant A Hero Description
const targetHeroA = `          <p style={{ fontSize: "clamp(0.85rem, 1.3vw, 0.95rem)", color: "#4a5568", lineHeight: 1.7, marginBottom: 14 }}>
            1999년 개원 이래 인천 계양구를 지켜온 속편한내과는<br/>
            전문의 6인이 협진하여 정확하고 전문적인 진료를 제공합니다.
          </p>`;

const replacementHeroA = `          <p style={{ fontSize: "clamp(0.85rem, 1.3vw, 0.95rem)", color: "#4a5568", lineHeight: 1.7, marginBottom: 14 }}>
            인천 계양구 속편한내과는 대학병원급 최상위 내시경 <span style={{ fontWeight: 700, color: "#1a2a5e" }}>올림푸스 290</span>과<br/>
            <span style={{ fontWeight: 700, color: "#1a2a5e" }}>정밀 CT 장비</span>를 도입하여, 6인 전문의 협진으로 정확하고 정밀한 진료를 약속드립니다.
          </p>`;

// 2. Variant A Stats Bar
const targetStatsA = `          {[
            { num: "5대암 검진", label: "국가 지정 공식 건강검진 센터" },
            { num: "정밀 내시경", label: "위·대장 정밀 내시경 및 당일 용종 절제" },
            { num: "정밀 초음파", label: "간·유방·갑상선 등 정밀 초음파 검사" },
            { num: "수액 치료", label: "개인 맞춤형 영양 및 면역 수액 클리닉" },
          ].map((s, i) => (`;

const replacementStatsA = `          {[
            { num: "5대암 검진", label: "국가 지정 공식 건강검진 센터" },
            { num: "올림푸스 290", label: "최상위 내시경 정밀 검사 및 용종 절제" },
            { num: "정밀 CT · 초음파", label: "대학병원급 CT 및 고해상도 초음파 검사" },
            { num: "수액 치료", label: "개인 맞춤형 영양 및 면역 수액 클리닉" },
          ].map((s, i) => (`;

// 3. Variant B Stats Bar
const targetStatsB = `            {[
              { num: "5대암 검진", label: "국가 지정 공식 건강검진 센터" },
              { num: "정밀 내시경", label: "위·대장 정밀 내시경 및 당일 용종 절제" },
              { num: "정밀 초음파", label: "간·유방·갑상선 등 정밀 초음파 검사" },
              { num: "수액 치료", label: "개인 맞춤형 영양 및 면역 수액 클리닉" },
            ].map((s, i) => (`;

const replacementStatsB = `            {[
              { num: "5대암 검진", label: "국가 지정 공식 건강검진 센터" },
              { num: "올림푸스 290", label: "최상위 내시경 정밀 검사 및 용종 절제" },
              { num: "정밀 CT · 초음파", label: "대학병원급 CT 및 고해상도 초음파 검사" },
              { num: "수액 치료", label: "개인 맞춤형 영양 및 면역 수액 클리닉" },
            ].map((s, i) => (`;

let replaced = 0;

if (content.includes(targetHeroA)) { content = content.replace(targetHeroA, replacementHeroA); replaced++; } else { console.log('targetHeroA not found'); }
if (content.includes(targetStatsA)) { content = content.replace(targetStatsA, replacementStatsA); replaced++; } else { console.log('targetStatsA not found'); }
if (content.includes(targetStatsB)) { content = content.replace(targetStatsB, replacementStatsB); replaced++; } else { console.log('targetStatsB not found'); }

if (replaced > 0) {
  if (originalLineEndings === '\r\n') {
    content = content.replace(/\n/g, '\r\n');
  }
  fs.writeFileSync(homeHtmlPath, content, 'utf8');
  console.log(`Successfully completed ${replaced} replacements in public/home.html!`);
} else {
  console.log('No replacements were made in public/home.html.');
}
