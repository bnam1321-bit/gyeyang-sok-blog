'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="sticky top-0 z-[1000] bg-white border-b border-slate-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-[100px]">
                    {/* Logo Area */}
                    <Link href="/" className="flex items-center">
                        <Image 
                            src="/images/extracted/61d273a3-b287-4754-94fe-8d90a61ddd1d.png"
                            alt="인천계양속편한내과"
                            width={240}
                            height={60}
                            style={{ height: '156px', width: 'auto' }}
                            className="object-contain"
                        />
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-10">
                        <Link href="/services" className="text-slate-600 hover:text-primary font-bold transition-colors">진료안내</Link>
                        <Link href="/blog" className="text-slate-600 hover:text-primary font-bold transition-colors">건강정보</Link>
                        <Link href="/#hours" className="text-slate-600 hover:text-primary font-bold transition-colors">진료시간</Link>
                        <Link href="/#map" className="text-slate-600 hover:text-primary font-bold transition-colors">오시는길</Link>
                    </nav>

                    {/* CTA Button */}
                    <div className="flex items-center gap-4">
                        <a 
                            href="tel:032-568-8275" 
                            className="bg-accent hover:bg-accent-dark text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <span className="hidden sm:inline">전화상담</span> 032.568.8275
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

