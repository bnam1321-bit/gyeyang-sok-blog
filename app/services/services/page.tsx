const equipments = [
  {
    category: "내시경 검사 기기",
    name: "OLYMPUS EVIS EXERA III (CV-190)",
    features: [
      "NBI 기술로 혈관 및 점막 구조를 강조하여 병변 탐지율 향상",
      "Dual Focus로 정밀한 진단 가능",
      "시야 확보를 위한 워터젯 기능으로 청결한 검사 환경 유지"
    ],
    icon: "🔬",
    image: "/images/equipments/eq_cv190.png"
  },
  {
    category: "초음파 검사 기기",
    name: "GE LOGIQ P10",
    features: [
      "통증 없는 검사로 조기에 지방간 여부 확인 및 추적 관찰",
      "간경변, 만성 간염 등 조기 진단 및 치료 계획 수립 유용",
      "유방, 갑상선 등 다양한 질환의 높은 진단 정확도",
      "방사선 노출 없이 전 연령에 안전한 초음파 검사"
    ],
    icon: "🖥️",
    image: "/images/equipments/eq_ge_logiq.png"
  },
  {
    category: "대장내시경 보조 기기",
    name: "EndoCO2 HARMONY",
    features: [
      "시술 후 복부 팽창과 불편감을 줄여 빠른 회복 가능",
      "CO2 가스 사용으로 검사 후 통증 감소",
      "정밀한 조절과 안전 기능으로 합병증 위험 낮음",
      "복강을 효과적으로 확장하여 더 정확한 시술 가능"
    ],
    icon: "💨",
    image: "/images/equipments/eq_endoco2.png"
  },
  {
    category: "내시경 시술용 전기소작기",
    name: "Erbe VIO 200 S",
    features: [
      "출혈을 실시간으로 지혈하여 위험 요소 최소화",
      "정밀한 조절로 조직 손상 최소화",
      "시술 시간 단축으로 환자 부담 완화",
      "전 세계에서 신뢰받는 기술로 높은 안전성과 성능"
    ],
    icon: "⚡",
    image: "/images/equipments/eq_erbe.png"
  },
  {
    category: "신속 당화혈색소 측정기",
    name: "Abbott AFINION 2",
    features: [
      "소량의 혈액으로 약 3분 이내에 결과 확인",
      "대학병원 수준의 정확한 검사 가능",
      "지속적인 당뇨 관리에 탁월",
      "검사에 대한 심리적 부담 및 시간 최소화"
    ],
    icon: "🩸",
    image: "/images/equipments/eq_afinion.png"
  },
  {
    category: "골다공증 측정기",
    name: "OSTEOSYS Dexxum Quantum",
    features: [
      "자동 검사로 1분 30초 이내 전체 골밀도 측정",
      "첨단 센서와 영상 처리 기술로 대학병원급 정밀도",
      "골절 전 조기 진단 가능 (폐경기 여성, 고령자 권장)",
      "방사선량이 매우 낮아 안심하고 받을 수 있는 검사"
    ],
    icon: "🦴",
    image: "/images/equipments/eq_osteosys.png"
  },
  {
    category: "디지털 엑스레이",
    name: "디알텍 ESSENCE5",
    features: [
      "한 번의 촬영으로 수 초 내 선명한 영상 확보",
      "고해상도 이미지 센서로 뼈 미세 손상, 폐 병변 등 정확히 포착",
      "어린이, 고령자 등 다양한 환자가 편안하게 검사 가능",
      "기존 엑스레이 대비 방사선 노출을 줄여 안전한 촬영"
    ],
    icon: "🩻",
    image: "/images/equipments/eq_xray.png"
  },
  {
    category: "유방 촬영장치",
    name: "비멤스 PINKVIEW-BT",
    features: [
      "미세 석회화나 작은 종괴 정밀 확인으로 유방암 조기 발견률 향상",
      "여성 유방 구조를 고려한 곡선형 압박 패들로 통증 최소화",
      "수 초 내 촬영 완료 및 촬영 즉시 디지털 영상 확인",
      "저선량 촬영 기술로 방사선 걱정 최소화"
    ],
    icon: "👩‍⚕️",
    image: "/images/equipments/eq_pinkview.png"
  },
  {
    category: "심전도/폐기능 검사기",
    name: "BIONET CARDIO7S",
    features: [
      "다양한 호흡 파라미터로 COPD, 천식, 폐섬유증 진단",
      "심부정맥, 심근허혈, 부정맥 등 심장 이상 조기 발견",
      "페이스메이커 인식 및 치료 효과 확인으로 빠른 회복 지원",
      "국제 인증(CE, FDA 510K, KFDA)을 받은 안전한 의료장비"
    ],
    icon: "🫀",
    image: "/images/equipments/eq_bionet.png"
  },
  {
    category: "체성분 분석기",
    name: "INBODY-270S",
    features: [
      "30초 내 체지방률, 골격근량, 체수분, 기초대사율 측정",
      "다주파 BIA로 신체 5개 부위 정밀 분석",
      "신체 불균형 및 근감소증, 체수분 불균형 조기 발견",
      "체지방-근육 분석으로 목표 체중 및 조절 계획 수립"
    ],
    icon: "⚖️",
    image: "/images/equipments/eq_inbody.png"
  }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-black text-gray-900 mb-6">진료 안내</h1>
                    <p className="text-xl text-gray-600">영종속시원내과는 다음과 같은 서비스를 제공합니다</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* 위내시경 / 대장내시경 */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg hover-lift">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-3xl mb-6">
                            🔬
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">위내시경 / 대장내시경</h3>
                        <p className="text-gray-600 leading-relaxed">
                            최신 장비로 정확한 검사를 제공합니다
                        </p>
                    </div>

                    {/* 5대암 검진 */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg hover-lift">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-3xl mb-6">
                            🏥
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">5대암 검진</h3>
                        <p className="text-gray-600 leading-relaxed">
                            조기 발견을 위한 정기 검진
                        </p>
                    </div>

                    {/* 만성질환 관리 */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg hover-lift">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center text-3xl mb-6">
                            💊
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">만성질환 관리</h3>
                        <p className="text-gray-600 leading-relaxed">
                            고혈압, 당뇨, 고지혈증 등 체계적 관리
                        </p>
                    </div>

                    {/* 초음파 진료 */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg hover-lift">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-3xl mb-6">
                            📡
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">초음파 진료</h3>
                        <p className="text-gray-600 leading-relaxed">
                            복부, 갑상선 등 정밀 검사
                        </p>
                    </div>

                    {/* 수액 치료 */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg hover-lift">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center text-3xl mb-6">
                            💉
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">수액 치료</h3>
                        <p className="text-gray-600 leading-relaxed">
                            피로회복, 영양보충을 위한 수액 치료
                        </p>
                    </div>

                    {/* 예방접종 */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg hover-lift">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-3xl mb-6">
                            💉
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">예방접종</h3>
                        <p className="text-gray-600 leading-relaxed">
                            독감, 대상포진 등 각종 예방접종
                        </p>
                    </div>
                </div>

                {/* 첨단 의료 장비 안내 */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold mb-4">
                            Premium Equipment
                        </div>
                        <h2 className="text-4xl font-black text-gray-900 mb-4">첨단 의료 장비</h2>
                        <p className="text-xl text-gray-600">대학병원급 최신 의료 장비로 더 빠르고 정확한 진단을 약속드립니다</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {equipments.map((eq, idx) => (
                            <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                                {eq.image ? (
                                    <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center">
                                        <img src={eq.image} alt={eq.name} className="w-full h-full object-contain p-2" />
                                    </div>
                                ) : (
                                    <div className="text-4xl mb-6 bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center">{eq.icon}</div>
                                )}
                                <div className="text-sm font-bold text-blue-600 mb-2">{eq.category}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 break-keep">{eq.name}</h3>
                                <ul className="space-y-2">
                                    {eq.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="text-sm text-gray-600 flex items-start">
                                            <span className="text-blue-500 mr-2 mt-0.5">•</span>
                                            <span className="break-keep leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>



                {/* 진료 시간 */}
                <div className="bg-white rounded-3xl p-12 shadow-lg">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">진료 시간</h2>
                    <div className="max-w-2xl mx-auto space-y-4">
                        <div className="flex justify-between py-3 border-b border-gray-200">
                            <span className="font-semibold text-gray-700">평일</span>
                            <span className="text-gray-600 text-right">08:30 ~ 19:00</span>
                        </div>
                        <div className="flex justify-between py-3 border-b border-gray-200">
                            <span className="font-semibold text-gray-700">토요일</span>
                            <span className="text-gray-600 text-right">08:30 ~ 14:00 (점심시간 없음)</span>
                        </div>
                        <div className="flex justify-between py-3 border-b border-gray-200">
                            <span className="font-semibold text-gray-700">점심시간</span>
                            <span className="text-gray-600 text-right">13:00 ~ 14:00</span>
                        </div>
                        <div className="flex justify-between py-3">
                            <span className="font-semibold text-gray-700">일요일 및 공휴일</span>
                            <span className="text-gray-600 text-right">휴무</span>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-500 mb-6">
                            ※ 방문 전 전화로 예약하시면 더욱 편리한 진료가 가능합니다.
                        </p>
                        <a
                            href="tel:032-716-9575"
                            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all hover:scale-105 shadow-lg"
                        >
                            📞 전화 예약하기
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
