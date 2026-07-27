const fs = require('fs');
let content = fs.readFileSync('public/home.html', 'utf8');

// 1. Inject Favicon and JSON-LD SEO
const injectHead = `<head><link rel="icon" href="/icon.png" type="image/png" /><script type="application/ld+json">[{"@context":"https://schema.org","@type":"MedicalClinic","name":"인천계양속편한내과","image":"/logo.jpg","url":"https://www.sokgyeyang.co.kr","telephone":"032-545-8837","address":{"@type":"PostalAddress","streetAddress":"인천광역시 계양구 용종로 2","addressLocality":"Incheon","postalCode":"21040","addressCountry":"KR"}},{"@context":"https://schema.org","@type":"WebSite","name":"인천계양속편한내과","alternateName":["속편한내과","계양속편한내과"],"url":"https://www.sokgyeyang.co.kr/"}]</script>`;
if (!content.includes('rel="icon"')) {
    content = content.replace('<head>', injectHead);
}

// 2. Reorder services
const oldServices = `const services = [
  { icon: "🫁", title: "호흡기 클리닉", desc: "감기, 독감, 코로나19, 폐렴, 비염, 기관지염 등 호흡기 질환 진료" },
  { icon: "🫀", title: "만성질환 관리", desc: "고혈압, 당뇨, 고지혈증 체계적 관리 및 장기 처방" },
  { icon: "🩺", title: "소화기 클리닉", desc: "장염, 위염, 복통, 소화불량, 과민성장증후군 진료" },
  { icon: "💉", title: "예방접종", desc: "독감, HPV(가다실9), 대상포진, 간염 백신 접종" },
  { icon: "🔬", title: "건강검진", desc: "공단 일반건강검진, 암검진, 직장인 검진 시행" },
  { icon: "🦴", title: "기타 내과", desc: "통풍, 두통, 빈혈, 갑상선 등 내과 전반 진료" },
];`;

const newServices = `const services = [
  { icon: "🩺", title: "소화기 클리닉", desc: "장염, 위염, 복통, 소화불량, 과민성장증후군 진료" },
  { icon: "🫀", title: "만성질환 관리", desc: "고혈압, 당뇨, 고지혈증 체계적 관리 및 장기 처방" },
  { icon: "🫁", title: "호흡기 클리닉", desc: "감기, 독감, 코로나19, 폐렴, 비염, 기관지염 등 호흡기 질환 진료" },
  { icon: "🔬", title: "건강검진", desc: "공단 일반건강검진, 암검진, 직장인 검진 시행" },
  { icon: "💉", title: "예방접종", desc: "독감, HPV(가다실9), 대상포진, 간염 백신 접종" },
  { icon: "🦴", title: "기타 내과", desc: "통풍, 두통, 빈혈, 갑상선 등 내과 전반 진료" },
];`;

content = content.replace(oldServices, newServices);

fs.writeFileSync('public/home.html', content);
console.log('Update successful');
