const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, '../content/posts');
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

let modifiedCount = 0;

for (const file of files) {
    const filePath = path.join(postsDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    const originalContent = content;

    // 대표원장
    content = content.replace(/인천계양속편한내과 대표원장입니다\./g, "인천계양속편한내과 소속입니다.");
    content = content.replace(/대표원장/g, "의료진");
    
    // 전문의 숫자 등
    content = content.replace(/6인의 내과 전문의/g, "의료진");
    content = content.replace(/내과 전문의 6인/g, "의료진");
    content = content.replace(/6인의 전문의/g, "의료진");
    
    // 25년
    content = content.replace(/25년 이상/g, "풍부한");
    content = content.replace(/25년 업력/g, "풍부한 경험");
    content = content.replace(/25년 진료 경험/g, "풍부한 진료 경험");
    
    // 내과 전문의 -> 담당 의사 / 의료진
    content = content.replace(/내과 전문의와 충분한 상담/g, "담당 의사와 충분한 상담");
    content = content.replace(/전문의와 충분한 상담/g, "담당 의사와 충분한 상담");
    content = content.replace(/내과 전문의로서/g, "의료진으로서");
    content = content.replace(/내과 전문의 의원/g, "내과 의원");
    content = content.replace(/내과 전문의/g, "의료진");
    content = content.replace(/전문의의 진료/g, "담당 의사의 진료");
    content = content.replace(/전문의/g, "의료진");

    // 기관 유형 변경 in CLINIC INFO
    content = content.replace(/- \*\*기관 유형\*\*: 의료진 6인 진료 의원 \(풍부한 업력\)/g, "- **기관 유형**: 내과 의원");
    content = content.replace(/- \*\*기관 유형\*\*: 내과 전문의 6인 진료 의원 \(25년 업력\)/g, "- **기관 유형**: 내과 의원");
    content = content.replace(/- \*\*기관 유형\*\*: 의료진 진료 의원 \(풍부한 경험\)/g, "- **기관 유형**: 내과 의원");
    
    if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        modifiedCount++;
    }
}

console.log(`Modified ${modifiedCount} files.`);
