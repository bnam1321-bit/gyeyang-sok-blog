'use client';

const equipments = [
    {
        category: "내시경 검사 기기",
        name: "OLYMPUS EVIS EXERA III (CV-190)",
        features: [
            "NBI 기술로 혈관 및 점막 구조를 강조하여 병변 시인성 향상",
            "Dual Focus로 정밀한 진단 가능",
            "최상의 검사 환경 유지를 위한 세척 시스템 가동"
        ],
        icon: "🔍",
    },
    {
        category: "초음파 검사 기기",
        name: "GE LOGIQ P10",
        features: [
            "통증 없는 검사로 조기에 지방간 여부 확인 및 추적 관찰",
            "간경변, 만성 간염 등 조기 진단 및 치료 계획 수립",
            "유방, 갑상선 등 다양한 질환의 높은 진단 정확도"
        ],
        icon: "📡",
    },
    {
        category: "대장내시경 보조 기기",
        name: "EndoCO2 HARMONY",
        features: [
            "시술 후 복부 팽만감과 불편감을 줄여 빠른 회복 가능",
            "CO2 가스 사용으로 검사 중 통증 감소",
            "정밀한 조절 기능으로 합병증 위험 낮춤"
        ],
        icon: "💨",
    },
    {
        category: "내시경 시술용 전기소작기",
        name: "Erbe VIO 200 S",
        features: [
            "출혈을 실시간으로 지혈하여 위험 요소 최소화",
            "정밀한 조절로 조직 손상 최소화",
            "시술 시간 단축으로 환자 부담 완화"
        ],
        icon: "⚡",
    },
    {
        category: "신속 당화혈색소 측정기",
        name: "Abbott AFINION 2",
        features: [
            "소량의 혈액으로 단 3분 이내에 결과 확인",
            "대학병원 수준의 정확한 검사 가능",
            "지속적인 당뇨 관리에 탁월"
        ],
        icon: "🩸",
    },
    {
        category: "골다공증 측정기",
        name: "OSTEOSYS Dexxum Quantum",
        features: [
            "자동 검사로 1분 30초 이내 전체 골밀도 측정",
            "첨단 센서와 영상 처리 기술로 높은 정밀도",
            "방사선량이 매우 낮아 안심하고 검사 가능"
        ],
        icon: "🦴",
    },
];

const mainServices = [
    { title: '위·대장 내시경', desc: '분야별 전문의가 직접 시행하는 정밀 내시경 검사 및 당일 용종 절제술.', icon: '🔍', color: 'bg-primary' },
    { title: '건강검진 센터', desc: '5대 암 검진 및 생애전환기 검진 등 체계적인 맞춤형 검진 프로그램.', icon: '📋', color: 'bg-accent' },
    { title: '만성질환 클리닉', desc: '고혈압, 당뇨, 고지혈증 등 평생 관리가 필요한 질환의 과학적 케어.', icon: '❤️', color: 'bg-red-500' },
    { title: '영상진단 센터', desc: '최신 CT 및 초음파 장비를 활용한 정밀 진단 시스템.', icon: '🧪', color: 'bg-blue-500' },
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
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto break-keep">
                        인천계양속편한내과는 대학병원급 첨단 장비와 6인 전문의의 협진으로 수준 높은 의료 서비스를 제공합니다.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Main Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
                    {mainServices.map((service, idx) => (
                        <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
                            <div className={`w-14 h-14 ${service.color} text-white rounded-2xl flex items-center justify-center text-2xl mb-6`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-black text-primary mb-4">{service.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed break-keep">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Equipment Section */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <span className="text-accent font-black tracking-widest uppercase text-sm mb-4 block">Medical Technology</span>
                        <h2 className="text-3xl sm:text-4xl font-black text-primary mb-6">첨단 의료 장비 안내</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            정확한 진단이 올바른 치료의 시작입니다. 대학병원 수준의 최신 장비를 보유하고 있습니다.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {equipments.map((eq, idx) => (
                            <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-col">
                                <div className="text-4xl mb-6 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                                    {eq.icon}
                                </div>
                                <div className="text-xs font-bold text-accent mb-2 uppercase tracking-wider">{eq.category}</div>
                                <h3 className="text-xl font-black text-primary mb-6 break-keep leading-tight">{eq.name}</h3>
                                <ul className="space-y-3 mt-auto">
                                    {eq.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="text-sm text-slate-500 flex items-start gap-2">
                                            <span className="text-accent mt-1">•</span>
                                            <span className="break-keep leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final CTA */}
                <div className="bg-primary rounded-[40px] p-12 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <h2 className="text-3xl font-black mb-6">상담 및 예약 문의</h2>
                    <p className="text-slate-300 mb-10 max-w-xl mx-auto break-keep">
                        진료 및 검진 예약은 전화로 문의 주시면 대기 시간을 최소화하여 편리하게 안내해 드립니다.
                    </p>
                    <a 
                        href="tel:032-568-8275" 
                        className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-white font-black rounded-2xl hover:scale-105 transition-all shadow-xl"
                    >
                        <span>📞</span>
                        <span className="text-2xl">032.568.8275</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
