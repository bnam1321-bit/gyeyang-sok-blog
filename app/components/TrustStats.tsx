'use client';

const stats = [
  {
    title: '25년 업력',
    desc: '계양구에서 25년 이상 신뢰받아온 내과',
    icon: '🏥',
  },
  {
    title: '전문의 6인',
    desc: '분야별 세분화된 6인 전문의 협진 시스템',
    icon: '👨‍⚕️',
  },
  {
    title: '토요일 진료',
    desc: '평일 바쁜 분들을 위해 주말에도 진료합니다',
    icon: '🗓️',
  },
  {
    title: '최신 장비',
    desc: '대학병원급 올림푸스 내시경 및 첨단 CT 보유',
    icon: '🔬',
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
