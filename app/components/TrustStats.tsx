'use client';

const stats = [
  {
    title: '5대암 검진',
    desc: '국가 지정 공식 건강검진 센터',
    icon: '🏥',
  },
  {
    title: '정밀 내시경',
    desc: '위·대장 정밀 내시경 및 당일 용종 절제',
    icon: '🔍',
  },
  {
    title: '정밀 초음파',
    desc: '간·유방·갑상선 등 정밀 초음파 검사',
    icon: '📡',
  },
  {
    title: '수액 치료',
    desc: '개인 맞춤형 영양 및 면역 수액 클리닉',
    icon: '💉',
  },
];

export default function TrustStats() {
  return (
    <section className="py-12 bg-bg -mt-20 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-start gap-4 hover-lift"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-2xl shadow-inner">
                {stat.icon}
              </div>
              <div>
                <h3 className="text-primary font-black text-lg mb-1">{stat.title}</h3>
                <p className="text-slate-500 text-sm leading-snug break-keep">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
