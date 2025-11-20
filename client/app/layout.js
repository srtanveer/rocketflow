import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ToastClientMount from '../components/ui/ToastClientMount'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://rocketflow.biz'),
  title: {
    default: "RocketFlow | All-in-One Marketing Automation Platform",
    template: "%s | RocketFlow"
  },
  description: "Transform your business with RocketFlow's powerful marketing automation platform. Boost revenue, engage customers, and streamline operations across all industries in Bangladesh.",
  keywords: [
    "marketing automation", "business growth", "customer engagement", 
    "digital marketing", "Bangladesh", "SMS marketing", "email marketing", 
    "social media automation", "CRM", "lead generation", "sales automation",
    "restaurant marketing", "retail automation", "hotel marketing", 
    "ecommerce automation", "gadget shop automation"
  ],
  authors: [{ name: "RocketFlow Team" }],
  creator: "RocketFlow",
  publisher: "RocketFlow",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rocketflow.biz',
    siteName: 'RocketFlow',
    title: 'RocketFlow | All-in-One Marketing Automation Platform',
    description: 'Transform your business with RocketFlow\'s powerful marketing automation platform. Boost revenue, engage customers, and streamline operations across all industries in Bangladesh.',
    images: [
      {
        url: '/RF-Long-logo.webp',
        width: 700,
        height: 110,
        alt: 'RocketFlow Marketing Automation Platform',
        type: 'image/webp',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RocketFlow | All-in-One Marketing Automation Platform',
    description: 'Transform your business with RocketFlow\'s powerful marketing automation platform. Boost revenue, engage customers, and streamline operations across all industries in Bangladesh.',
    images: ['/RF-Long-logo.webp'],
    creator: '@rocketflow',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://rocketflow.com',
  },
  category: 'technology',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ToastClientMount />
      </body>
    </html>
  );
}
