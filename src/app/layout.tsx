import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0D9488",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Jebastins Dental Clinic | Premium Dental Care in Velachery, Chennai",
  description:
    "Experience gentle, family-friendly, and modern dental care at Jebastins Dental Clinic in Velachery, Chennai. Root canals, dental implants, smile makeovers, teeth cleaning & restorative treatments.",
  keywords: [
    "Dentist in Velachery",
    "Dental Clinic Velachery Chennai",
    "Jebastins Dental Clinic",
    "Dental Implants Chennai",
    "Root Canal Treatment Velachery",
    "Teeth Whitening Velachery",
    "Pediatric Dentist Chennai",
    "Clear Aligners Chennai",
  ],
  authors: [{ name: "Dr. Jebastin & Associates" }],
  openGraph: {
    title: "Jebastins Dental Clinic | Velachery, Chennai",
    description:
      "Gentle dental care. Confident smiles. State-of-the-art dental clinic in Velachery providing painless root canal, implants, teeth cleaning and smile design.",
    url: "https://jebastinsdental.com",
    siteName: "Jebastins Dental Clinic",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://jebastinsdental.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Jebastins Dental Clinic",
    "image": "https://jebastinsdental.com/images/hero-patient.jpg",
    "telephone": "+91-98400-12345",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No. 14, 100 Feet Bypass Road, near Vijayanagar Bus Terminus",
      "addressLocality": "Velachery",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600042",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.9784",
      "longitude": "80.2184"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:30",
        "closes": "20:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "13:30"
      }
    ],
    "priceRange": "₹₹",
    "servesCuisine": "Dental Care, Orthodontics, Endodontics, Implantology",
  };

  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans min-h-screen bg-[#FBFBFA] text-slate-900 selection:bg-teal-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}
