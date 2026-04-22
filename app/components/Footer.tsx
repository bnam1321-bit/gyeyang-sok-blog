'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-primary pt-20 pb-24 md:pb-12 text-slate-400 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-block mb-8">
                            <span className="text-2xl font-black text-white">인천계양속편한내과</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-md break-keep">
                            인천 계양구의 건강을 책임지는 인천계양속편한내과입니다. 
                            25년 이상의 풍부한 경험을 가진 6인의 전문의가 분야별 협진을 통해 최선의 진료를 제공합니다.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons Placeholder */}
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all">N</div>
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all">B</div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-black mb-6 uppercase tracking-wider text-sm">Quick Menu</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><Link href="/services" className="hover:text-white transition-colors">진료안내</Link></li>
                            <li><Link href="/blog" className="hover:text-white transition-colors">건강정보</Link></li>
                            <li><a href="#hours" className="hover:text-white transition-colors">진료시간</a></li>
                            <li><a href="#map" className="hover:text-white transition-colors">오시는길</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-black mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li className="flex items-start gap-3">
                                <span className="text-accent">📍</span>
                                <span className="break-keep">인천광역시 계양구 용종로 2,<br/>계산프라자 202·304·305호</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-accent">📞</span>
                                <span>032-568-8275</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em]">
                    <p>&copy; {new Date().getFullYear()} 인천계양속편한내과. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

