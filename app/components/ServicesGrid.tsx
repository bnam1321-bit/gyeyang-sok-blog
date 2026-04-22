'use client';

const services = [
  { title: '위·대장 내시경', desc: '대학병원급 장비로 정확한 검사와 당일 용종 절제', icon: '🔍' },
  { title: '5대 암 검진', desc: '체계적인 맞춤형 종합 건강검진 서비스', icon: '📋' },
  { title: '만성질환 클리닉', desc: '고혈압, 당뇨, 이상지질혈증의 과학적 관리', icon: '❤️' },
  { title: '소화기 정밀 검사', desc: '복부 초음파 및 복부 CT 촬영을 통한 정밀 진단', icon: '🧪' },
  { title: '호흡기 질환', desc: '천식, 비염, 폐렴 등 호흡기 전문 진료', icon: '🫁' },
  { title: '수액·영양 클리닉', desc: '개인별 상태에 맞는 맞춤형 영양 수액 치료', icon: '💧' },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-accent font-black tracking-widest uppercase text-sm mb-4">Our Services</h2>
          <h3 className="text-3xl sm:text-4xl font-black text-primary break-keep">
            환자 중심의 <span className="text-accent">전문화된 의료 서비스</span>
          </h3>
          <div className="w-16 h-1 w-16 bg-accent mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-md mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                {service.icon}
              </div>
              <h4 className="text-xl font-black text-primary mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed break-keep mb-6">
                {service.desc}
              </p>
              <div className="flex items-center text-accent text-xs font-bold gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                자세히 보기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
