import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import FloatingBar from "./components/FloatingBar";
import Footer from "./components/Footer";

// 구조화 데이터 (Schema.org JSON-LD)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "인천계양속편한내과",
  "image": "/logo.jpg",
  "url": "https://gyeyang-sok-blog.vercel.app",
  "telephone": "032-568-8275",
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
  "description": "25년 이상의 업력, 6인의 내과 전문의가 함께하는 인천 계양구 대표 내과 의원"
};

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: '--font-noto',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gyeyang-sok-blog.vercel.app'),
  title: "인천계양속편한내과 | 계양구 내과 전문의 6인 진료",
  description: "인천 계양구 속편한내과. 25년 이상 업력의 내과 전문의 6인 진료. 위대장내시경, 건강검진, 만성질환 관리, CT촬영까지.",
  keywords: "계양구 내과, 인천 계양 내과, 속편한내과, 계양구 위내시경, 계양구 대장내시경, 계양구 건강검진, 인천 내과 전문의",
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
