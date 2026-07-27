const fs = require('fs');
let content = fs.readFileSync('public/home.html', 'utf8');

const p1 = '{ icon: "🫁", title: "호흡기 클리닉", desc: "감기, 독감, 코로나19, 폐렴, 비염, 기관지염 등 호흡기 질환 진료" }';
const p3 = '{ icon: "🩺", title: "소화기 클리닉", desc: "장염, 위염, 복통, 소화불량, 과민성장증후군 진료" }';

if (content.includes(p1) && content.includes(p3)) {
    content = content.replace(p1, 'PLACEHOLDER_P1');
    content = content.replace(p3, p1);
    content = content.replace('PLACEHOLDER_P1', p3);
    fs.writeFileSync('public/home.html', content);
    console.log('Swapped successfully');
} else {
    console.log('Strings not found');
}
