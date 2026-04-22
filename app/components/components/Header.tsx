'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="site-header">
            <div className="header-container">
                {/* Logo */}
                <Link href="/" className="logo">
                    <Image
                        src="/logo_v2.png"
                        alt="영종속시원내과"
                        width={180}
                        height={60}
                        priority
                        className="logo-image"
                    />
                </Link>

                {/* Navigation */}
                <nav className="main-nav">
                    <Link href="/services" className="nav-link">진료 안내</Link>
                    <Link href="/blog" className="nav-link">건강정보</Link>
                    <a href="https://maps.app.goo.gl/ZcRy4GWqMkrZoZy4A" target="_blank" rel="noopener noreferrer" className="nav-link">오시는 길</a>
                </nav>
            </div>
        </header>
    );
}
