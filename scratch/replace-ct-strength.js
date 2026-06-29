const fs = require('fs');

// 1. Update scripts/prompts.js
const promptsPath = 'scripts/prompts.js';
let promptsContent = fs.readFileSync(promptsPath, 'utf8');
promptsContent = promptsContent.replace(/\r\n/g, '\n');

const targetEquipment = `- **대학병원급 장비 언급**: 최상위 내시경 장비인 **올림푸스 CV-290**과 대학병원급 **정밀 CT** 촬영 장비, 고해상도 초음파 등을 보유하여 정확하고 안전하게 진단함을 강조하세요.`;
const replacementEquipment = `- **대학병원급 장비 언급**: 최상위 내시경 장비인 **올림푸스 CV-290**과 대학병원급 **정밀 CT** 촬영 장비, 고해상도 초음파 등을 보유하고 있음을 강조하세요. 특히 **일반 의원급(로컬)에서는 매우 보기 드문 CT 장비를 보유하고 있어 대학병원처럼 복잡한 예약이나 긴 대기 없이 신속하게 당일 촬영 및 정밀 판독이 가능하다는 차별화된 강점**을 본원에서만 누릴 수 있는 큰 강점으로 본문에 적극적으로 서술하세요.`;

if (promptsContent.includes(targetEquipment)) {
  promptsContent = promptsContent.replace(targetEquipment, replacementEquipment);
}
fs.writeFileSync(promptsPath, promptsContent, 'utf8');
console.log('Successfully updated scripts/prompts.js with CT strength!');

// 2. Update scripts/generate-post.js
const generatePostPath = 'scripts/generate-post.js';
let generatePostContent = fs.readFileSync(generatePostPath, 'utf8');
generatePostContent = generatePostContent.replace(/\r\n/g, '\n');

const targetTopic = `            - 비만 치료 및 관리 (위고비, 마운자로 및 비만 CT 정밀 촬영)
            - 영양 수액 클리닉 (혈관영양수액, 태반주사, 마늘주사, 감초주사, 메가비타민C 주사)
            - 예방 접종 및 백신 (독감 백신, 대상포진 싱그릭스, 폐렴구균, A형·B형 간염 백신, Tdap 백신)`;

const replacementTopic = `            - 비만 치료 및 관리 (위고비, 마운자로 및 비만 CT 정밀 촬영)
            - 대학병원급 MDCT 정밀 검사 (일반 로컬 의원 중 매우 드문 CT 보유의 강점 강조: 대학병원 대기 없이 당일 신속 두통/뇌 CT, 가슴/심장/폐 CT, 복부/췌장/담석 CT 촬영 및 판독)
            - 영양 수액 클리닉 (혈관영양수액, 태반주사, 마늘주사, 감초주사, 메가비타민C 주사)
            - 예방 접종 및 백신 (독감 백신, 대상포진 싱그릭스, 폐렴구균, A형·B형 간염 백신, Tdap 백신)`;

if (generatePostContent.includes(targetTopic)) {
  generatePostContent = generatePostContent.replace(targetTopic, replacementTopic);
}
fs.writeFileSync(generatePostPath, generatePostContent, 'utf8');
console.log('Successfully updated scripts/generate-post.js with CT category!');
