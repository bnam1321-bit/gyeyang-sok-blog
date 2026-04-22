"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  "/images/interior/lobby.jpg",
  "/images/interior/entrance.jpg",
  "/images/interior/endo_center.jpg",
  "/images/interior/recovery_open.jpg",
  "/images/interior/bone_density.jpg",
  "/images/interior/xray_room.jpg"
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gray-900 text-white min-h-[500px] flex items-center">
      {/* Background Images */}
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt="Clinic Interior"
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Subtle Overlay to preserve original photo colors while keeping text readable */}
      <div className="absolute inset-0 bg-black/10 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>

      {/* SVG Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGgxMnYxMkgzNnptMjQgMGgxMnYxMkg2MHpNMTIgMTQ2aDEydjEySDEyem0yNCAwaDEydjEySDM2em0yNCAwaDEydjEySDYweiIvPjwvZz48L2c+PC9zdmc+')] opacity-5"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full z-10">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-6 border border-white/30 shadow-lg">
            <span className="text-sm font-bold text-white drop-shadow-md">🏥 전문의가 전하는 의학정보</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] break-keep leading-tight sm:leading-snug lg:leading-normal">
            인천 중구 영종도 하늘신도시에 위치한<br />
            내과 전문의 진료 의원<br />
            영종속시원내과
          </h1>
          <p className="text-lg sm:text-xl text-gray-50 max-w-3xl mx-auto leading-relaxed break-keep mt-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium">
            영종도에서 고혈압, 당뇨, 고지혈증 등 만성질환 관리와<br className="hidden sm:block" /> 위·대장내시경 검사를 시행하고 있습니다.
          </p>
        </div>
      </div>

      {/* Bottom Gradient for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent z-10"></div>
    </div>
  );
}
