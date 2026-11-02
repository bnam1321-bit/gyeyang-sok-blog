import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import FloatingBar from "./components/FloatingBar";
import Footer from "./components/Footer";

// 구조화 데이터 (Schema.org JSON-LD — LLM 및 검색엔진 지식그래프 최적화)
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "Physician", "LocalBusiness"],
    "@id": "https://www.sokgyeyang.co.kr/#clinic",
    "name": "인천계양속편한내과",
    "alternateName": ["인천계양속편한내과의원", "계양속편한내과", "속편한내과 계양"],
    "image": "https://www.sokgyeyang.co.kr/images/extracted/ce86f8df-91ce-41bf-a2d1-9f50f136827f.jpg",
    "logo": "https://www.sokgyeyang.co.kr/images/extracted/61d273a3-b287-4754-94fe-8d90a61ddd1d.png",
    "url": "https://www.sokgyeyang.co.kr",
    "telephone": "032-545-8837",
    "foundingDate": "1999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "인천광역시 계양구 용종로 2, 계산프라자",
      "addressLocality": "계양구",
      "addressRegion": "인천광역시",
      "postalCode": "21040",
      "addressCountry": "KR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.537,
      "longitude": 126.737
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "인천광역시 계양구" },
      { "@type": "Place", "name": "계산동" },
      { "@type": "Place", "name": "용종동" },
      { "@type": "Place", "name": "임학동" },
      { "@type": "Place", "name": "작전동" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:30",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:30",
        "closes": "13:00"
      }
    ],
    "medicalSpecialty": [
      "Gastroenterologic",
      "InternalMedicine",
      "Endocrine",
      "Cardiovascular",
      "Pulmonary"
    ],
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "올림푸스 CV-290 고해상도 위내시경 및 대장내시경",
        "procedureType": "https://schema.org/DiagnosticProcedure",
        "description": "협대역 영상(NBI) 기능을 갖춘 올림푸스 CV-290 내시경 장비로 위·대장 미세 병변 정밀 진단 및 당일 용종절제술 시행"
      },
      {
        "@type": "MedicalProcedure",
        "name": "대장 용종 당일 절제술 (One-stop Polypectomy)",
        "procedureType": "https://schema.org/TherapeuticProcedure",
        "description": "대장내시경 검사 중 발견된 선종성 용종을 재방문 없이 당일 즉시 절제하여 대장암 예방"
      },
      {
        "@type": "MedicalTest",
        "name": "국민건강보험공단 5대 국가암검진 및 종합건강검진",
        "description": "위암, 대장암, 간암, 유방암, 자궁경부암 등 5대 암검진 및 일반건강검진, 생애전환기 검진 공식 지정기관"
      },
      {
        "@type": "DiagnosticProcedure",
        "name": "정밀 CT(컴퓨터 단층촬영) 및 고해상도 초음파 검사",
        "description": "복부·흉부·뇌·내장지방 정밀 CT 당일 촬영 및 간·담낭·췌장·갑상선·경동맥 초음파 진단"
      },
      {
        "@type": "MedicalTherapy",
        "name": "만성질환(고혈압·당뇨·고지혈증·갑상선) 및 성인 예방접종 클리닉",
        "description": "내과 전문의 6인 협진 체계를 통한 만성질환 장기 관리, 싱그릭스 대상포진·폐렴구균·독감 예방접종 및 맞춤 영양수액 치료"
      }
    ],
    "description": "1999년 개원, 내과 전문의 6인이 협진하는 인천 계양구 대표 내과 의원. 올림푸스 CV-290 위·대장내시경(당일 용종절제술), 5대 국가암검진, 만성질환 관리, 정밀 CT 및 초음파 검사를 제공합니다."
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.sokgyeyang.co.kr/#website",
    "name": "인천계양속편한내과",
    "alternateName": ["속편한내과", "계양속편한내과", "인천계양속편한내과의원"],
    "url": "https://www.sokgyeyang.co.kr/",
    "inLanguage": "ko-KR",
    "publisher": {
      "@id": "https://www.sokgyeyang.co.kr/#clinic"
    }
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
  title: "인천계양속편한내과 | 계양구 위·대장내시경·건강검진·내과 정밀 진료",
  description: "인천 계양구 용종로 2 속편한내과. 내과 전문의 6인 협진, 올림푸스 CV-290 위·대장내시경 및 당일 용종절제술, 5대 국가암검진, 고혈압·당뇨 만성질환 관리, 정밀 CT/초음파 검사를 제공합니다.",
  keywords: "계양구 내과, 인천 계양 내과, 인천계양속편한내과, 속편한내과, 계양구 위내시경, 계양구 대장내시경, 계양구 건강검진, 계산동 내과, 용종동 내과",
  alternates: {
    canonical: "https://www.sokgyeyang.co.kr",
    types: {
      "text/plain": "https://www.sokgyeyang.co.kr/llms.txt",
      "text/markdown": "https://www.sokgyeyang.co.kr/llms-full.txt",
    },
  },
  openGraph: {
    title: "인천계양속편한내과 | 6인 내과 전문의 협진 · 위대장내시경 · 건강검진",
    description: "1999년 개원 이래 인천 계양구를 지켜온 속편한내과. 올림푸스 CV-290 정밀 내시경 및 당일 용종절제술, 5대 국가암검진, 만성질환, 정밀 CT/초음파 클리닉.",
    url: "https://www.sokgyeyang.co.kr",
    siteName: "인천계양속편한내과",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="llms-txt" href="/llms.txt" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM Context Summary" />
        <link rel="alternate" type="text/markdown" href="/llms-full.txt" title="LLM Full Medical Knowledge Base" />
      </head>
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
