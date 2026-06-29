const fs = require('fs');
const path = require('path');

// Helper to normalize content to LF
function normalizeAndReplace(filePath, target, replacement) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return false;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  const originalLineEndings = content.includes('\r\n') ? '\r\n' : '\n';
  content = content.replace(/\r\n/g, '\n');

  if (content.includes(target)) {
    content = content.replace(new RegExp(escapeRegExp(target), 'g'), replacement);
    if (originalLineEndings === '\r\n') {
      content = content.replace(/\n/g, '\r\n');
    }
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Successfully updated: ${filePath}`);
    return true;
  } else {
    console.log(`Target not found in: ${filePath}`);
    return false;
  }
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// 1. Update public/home.html
const homePath = 'public/home.html';
normalizeAndReplace(homePath, '올림푸스 290', '올림푸스 CV-290');

// 2. Update app/components/TrustStats.tsx
const trustStatsPath = 'app/components/TrustStats.tsx';
normalizeAndReplace(trustStatsPath, '올림푸스 290', '올림푸스 CV-290');

// 3. Update app/services/page.tsx
const servicesPagePath = 'app/services/page.tsx';
normalizeAndReplace(servicesPagePath, '올림푸스 290', '올림푸스 CV-290');

// 4. Update scripts/prompts.js
const promptsPath = 'scripts/prompts.js';
let promptsContent = fs.readFileSync(promptsPath, 'utf8');
promptsContent = promptsContent.replace(/\r\n/g, '\n');

// Update Olympus CV-290 references in prompts.js
promptsContent = promptsContent.replace(/올림푸스 290/g, '올림푸스 CV-290');

// Update 주요 진료 in prompts.js
const targetClinicInfo = `- **주요 진료**: 만성질환 관리, 5대 국가암검진, 올림푸스 CV-290 위·대장내시경, 정밀 CT 및 초음파 정밀검사`;
const replacementClinicInfo = `- **주요 진료**: 만성질환 관리, 5대 국가암검진, 올림푸스 CV-290 위·대장내시경, 정밀 CT(비만CT 포함) 및 초음파 정밀검사, 영양수액(태반·마늘·감초·메가비타민C), 예방접종(독감, 싱그릭스 대상포진, 폐렴구균, A/B형 간염, Tdap), 비만치료(위고비, 마운자로)`;

if (promptsContent.includes(targetClinicInfo)) {
  promptsContent = promptsContent.replace(targetClinicInfo, replacementClinicInfo);
}
fs.writeFileSync(promptsPath, promptsContent, 'utf8');
console.log('Successfully updated scripts/prompts.js');

// 5. Update scripts/generate-post.js
const generatePostPath = 'scripts/generate-post.js';
let generatePostContent = fs.readFileSync(generatePostPath, 'utf8');
generatePostContent = generatePostContent.replace(/\r\n/g, '\n');

const targetTopicPrompt = `            🚨 반드시 아래 허용된 범주 안에서만 주제를 선정하세요:
            - 소화기 질환: 위염, 위궤양, 역류성 식도염, 대장 용종 등
            - 건강검진 및 내과 검사: 위내시경·대장내시경 검사, 복부 초음파, 5대 국가암검진, CT 촬영 등
            - 만성질환: 고혈압, 당뇨병, 고지혈증, 갑상선 등`;

const replacementTopicPrompt = `            🚨 반드시 아래 허용된 범주 및 키워드 안에서만 주제를 선정하세요 (균등하게 다루어지도록 선택):
            - 소화기 질환 및 내시경 (올림푸스 CV-290 내시경 검사)
            - 만성질환 관리 (고혈압, 당뇨병, 고지혈증, 갑상선 등)
            - 비만 치료 및 관리 (위고비, 마운자로 및 비만 CT 정밀 촬영)
            - 영양 수액 클리닉 (혈관영양수액, 태반주사, 마늘주사, 감초주사, 메가비타민C 주사)
            - 예방 접종 및 백신 (독감 백신, 대상포진 싱그릭스, 폐렴구균, A형·B형 간염 백신, Tdap 백신)`;

if (generatePostContent.includes(targetTopicPrompt)) {
  generatePostContent = generatePostContent.replace(targetTopicPrompt, replacementTopicPrompt);
}
fs.writeFileSync(generatePostPath, generatePostContent, 'utf8');
console.log('Successfully updated scripts/generate-post.js');
