'use client';

export default function HoursMap() {
  return (
    <section id="hours" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Hours Table */}
          <div className="bg-bg p-8 sm:p-12 rounded-[40px] border border-slate-100 shadow-xl">
            <h3 className="text-2xl font-black text-primary mb-8 flex items-center gap-3">
              <span className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center text-lg">⏰</span>
              진료 시간 안내
            </h3>
            <div className="space-y-4">
              {[
                { day: '평 일', time: '08:00 ~ 18:00', note: '점심시간 13:00~14:00' },
                { day: '토 요 일', time: '08:00 ~ 13:00', note: '점심시간 없음' },
                { day: '일 / 공휴일', time: '휴 진', note: '응급 시 인근 응급실 이용' },
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center py-4 border-b border-slate-200 last:border-0">
                  <div>
                    <span className="text-primary font-black text-lg">{item.day}</span>
                    <p className="text-slate-400 text-xs mt-1 font-medium">{item.note}</p>
                  </div>
                  <span className={`text-xl font-bold ${item.time === '휴 진' ? 'text-danger' : 'text-primary'}`}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-10 p-5 bg-white rounded-2xl border border-primary/10">
              <p className="text-primary/70 text-sm font-medium leading-relaxed break-keep">
                * 접수 마감은 진료 종료 30분 전까지입니다.<br />
                * 검진 예약 및 상담은 전화로 문의 주시면 친절히 안내해 드립니다.
              </p>
            </div>
          </div>

          {/* Location Info */}
          <div id="map">
            <h2 className="text-accent font-black tracking-widest uppercase text-sm mb-4">Location</h2>
            <h3 className="text-3xl sm:text-4xl font-black text-primary mb-8 break-keep">
              오시는 길 안내
            </h3>
            <p className="text-lg text-slate-600 font-medium mb-10 leading-relaxed break-keep">
              인천광역시 계양구 용종로 2,<br />
              계산프라자 <span className="text-primary font-black underline decoration-accent decoration-4 underline-offset-4">202·304·305호</span>
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4 text-slate-700">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-lg">📞</div>
                <span className="text-xl font-bold">032-568-8275</span>
              </div>
              <div className="flex items-center gap-4 text-slate-700">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-lg">🚇</div>
                <span className="text-lg font-bold">인천 1호선 임학역 / 계산역 인근</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://map.naver.com/p/search/인천광역시%20계양구%20용종로%202" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#03C75A] text-white font-black rounded-xl hover:opacity-90 transition-all shadow-lg flex items-center gap-2"
              >
                네이버 지도에서 보기
              </a>
              <a 
                href="https://kko.to/search?q=인천광역시%20계양구%20용종로%202" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#FEE500] text-[#3c1e1e] font-black rounded-xl hover:opacity-90 transition-all shadow-lg flex items-center gap-2"
              >
                카카오맵으로 길찾기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
