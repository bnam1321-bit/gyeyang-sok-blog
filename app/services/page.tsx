'use client';

const mainServices = [
    { 
        title: '위·대장 내시경', 
        desc: '대학병원급 최상위 내시경 장비인 올림푸스 CV-290을 도입하여, 미세한 병변까지 놓치지 않는 정밀한 검사와 당일 용종 절제술을 시행합니다.', 
        icon: '🔍', 
        color: 'bg-primary' 
    },
    { 
        title: '건강검진 센터', 
        desc: '5대 암 검진 및 생애전환기 검진 등 국가 지정 공식 건강검진 기관으로서 체계적인 맞춤형 종합 검진 프로그램을 운영합니다.', 
        icon: '📋', 
        color: 'bg-accent' 
    },
    { 
        title: '만성질환 클리닉', 
        desc: '고혈압, 당뇨, 고지혈증 등 평생 지속적인 관리가 필요한 만성 질환의 체계적이고 과학적인 맞춤 케어를 제공합니다.', 
        icon: '❤️', 
        color: 'bg-red-500' 
    },
    { 
        title: '영상진단 센터', 
        desc: '대학병원급 정밀 CT(컴퓨터 단층촬영) 장비와 고해상도 초음파를 활용하여 보이지 않는 장기까지 정밀하고 안전하게 진단합니다.', 
        icon: '🧪', 
        color: 'bg-blue-500' 
    },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-bg">
            {/* Header Section */}
            <section className="bg-primary py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">진료 안내</h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto break-keep font-medium leading-relaxed">
                        인천계양속편한내과는 대학병원급 최상위 내시경 장비인 <span className="text-white font-black">올림푸스 CV-290</span>과 <span className="text-white font-black">정밀 CT 촬영 장비</span>를 보유하고 있으며, 6인 전문의의 협진으로 수준 높은 진료 서비스를 제공합니다.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Main Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {mainServices.map((service, idx) => (
                        <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col justify-between">
                            <div>
                                <div className={`w-14 h-14 ${service.color} text-white rounded-2xl flex items-center justify-center text-2xl mb-6`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-black text-primary mb-4">{service.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed break-keep">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Final CTA */}
                <div className="bg-primary rounded-[40px] p-12 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <h2 className="text-3xl font-black mb-6">상담 및 예약 문의</h2>
                    <p className="text-slate-300 mb-10 max-w-xl mx-auto break-keep">
                        진료 및 검진 예약은 전화로 문의 주시면 대기 시간을 최소화하여 편리하게 안내해 드립니다.
                    </p>
                    <a 
                        href="tel:032-545-8837" 
                        className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-white font-black rounded-2xl hover:scale-105 transition-all shadow-xl"
                    >
                        <span>📞</span>
                        <span className="text-2xl">032.545.8837</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
