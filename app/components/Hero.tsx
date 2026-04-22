'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/real-doctors.jpg"
          alt="인천계양속편한내과 의료진"
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 bg-accent text-white text-sm font-bold rounded-full mb-6 shadow-lg">
            25년 업력의 신뢰, 계양구 대표 내과
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-8 break-keep">
            25년, 전문의 6인<br />
            한 자리에서 지켜온<br />
            <span className="text-accent">평생 건강 파트너</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed mb-10 break-keep">
            대학병원급 첨단 장비와 분야별 세분화된 6인 전문의 협진 시스템으로<br className="hidden sm:block" />
            정확한 진단과 따뜻한 진료를 약속드립니다.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="/services" 
              className="px-8 py-4 bg-white text-primary font-black rounded-xl hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl flex items-center gap-2 group"
            >
              진료안내 보기
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a 
              href="#hours" 
              className="px-8 py-4 bg-primary-light/50 backdrop-blur-md text-white border border-white/20 font-black rounded-xl hover:bg-primary-light transition-all flex items-center gap-2"
            >
              진료시간 안내
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom subtle edge */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg to-transparent"></div>
    </section>
  );
}
