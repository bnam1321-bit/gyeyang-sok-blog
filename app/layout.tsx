import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import FloatingBar from "./components/FloatingBar";
import Footer from "./components/Footer";

// 구조화 데이터 (Schema.org JSON-LD)
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "인천계양속편한내과",
    "image": "/logo.jpg",
    "url": "https://www.sokgyeyang.co.kr",
    "telephone": "032-545-8837",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "인천광역시 계양구 용종로 2",
      "addressLocality": "Incheon",
      "postalCode": "21040",
      "addressCountry": "KR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.537,
      "longitude": 126.737
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "13:00"
      }
    ],
    "medicalSpecialty": "InternalMedicine",
    "description": "풍부한 임상 경험의 의료진이 진료하는 인천 계양구 대표 내과 의원"
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "인천계양속편한내과",
    "alternateName": ["속편한내과", "계양속편한내과"],
    "url": "https://www.sokgyeyang.co.kr/"
  }
];

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: '--font-noto',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sokgyeyang.co.kr'),
  title: "인천계양속편한내과 | 계양구 내과 정밀 진료",
  description: "인천 계양구 속편한내과. 위대장내시경, 5대 국가건강검진, 만성질환 관리, 정밀 CT/초음파 검사 등 체계적인 내과 진료 시스템을 제공합니다.",
  keywords: "계양구 내과, 인천 계양 내과, 속편한내과, 계양구 위내시경, 계양구 대장내시경, 계양구 건강검진",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.variable} font-sans antialiased bg-white`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingBar />
      </body>
    </html>
  );
}
