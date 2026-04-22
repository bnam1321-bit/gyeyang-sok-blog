'use client';

export default function CTABanner() {
  return (
    <section className="bg-accent py-16 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full blur-2xl -ml-24 -mb-24"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 break-keep">
              언제나 정성을 다하는 <span className="text-primary-light font-black">인천계양속편한내과</span>입니다
            </h2>
            <p className="text-white/80 text-lg font-medium break-keep">
              예약 및 궁금하신 사항은 언제든 편하게 문의주세요.
            </p>
          </div>
          
          <a 
            href="tel:032-568-8275" 
            className="group px-10 py-6 bg-white text-accent font-black text-2xl rounded-2xl hover:scale-105 transition-all shadow-2xl flex items-center gap-4"
          >
            <span className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">📞</span>
            032.568.8275
          </a>
        </div>
      </div>
    </section>
  );
}
