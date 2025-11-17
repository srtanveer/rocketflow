import { GadgetShopLanding } from '../../components';

export const metadata = {
  title: "Gadget Shop Marketing Automation | RocketFlow Bangladesh",
  description: "Dominate Bangladesh's tech market with RocketFlow's specialized gadget shop automation. Pre-order campaigns, smart segmentation, 24/7 AI support, and automated upselling for electronics retailers.",
  keywords: [
    "gadget shop automation", "electronics store marketing", "tech retail Bangladesh",
    "mobile phone marketing", "gadget pre-orders", "electronics inventory management",
    "smartphone marketing automation", "tech shop CRM", "gadget store sales automation",
    "electronics retail software", "mobile accessories marketing", "tech product launches",
    "gadget shop customer segmentation", "electronics upselling automation"
  ],
  openGraph: {
    title: "Gadget Shop Marketing Automation | RocketFlow Bangladesh",
    description: "Dominate Bangladesh's tech market with RocketFlow's specialized gadget shop automation. Pre-order campaigns, smart segmentation, 24/7 AI support, and automated upselling.",
    url: "https://rocketflow.com/gadget-shop",
    type: "website",
    images: [
      {
        url: "/techsho.png",
        width: 1200,
        height: 630,
        alt: "Gadget Shop Marketing Automation Dashboard",
        type: "image/png",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gadget Shop Marketing Automation | RocketFlow Bangladesh",
    description: "Dominate Bangladesh's tech market with RocketFlow's specialized gadget shop automation. Pre-order campaigns, smart segmentation, 24/7 AI support.",
    images: ["/techsho.png"],
  },
  alternates: {
    canonical: "https://rocketflow.com/gadget-shop",
  },
  category: "technology",
};

export default function GadgetShopPage() {
  return <GadgetShopLanding />;
}