import RestaurantsComponent from '../../components/Restaurants';

export const metadata = {
  title: "Restaurant Marketing Automation | RocketFlow Bangladesh",
  description: "Boost your restaurant's revenue with RocketFlow's specialized automation platform. Automated reservations, customer engagement, order management, and loyalty programs for restaurants in Bangladesh.",
  keywords: [
    "restaurant marketing automation", "restaurant management software", "food business automation Bangladesh",
    "restaurant reservations", "food delivery automation", "restaurant CRM", "dining experience automation",
    "restaurant customer engagement", "food ordering system", "restaurant analytics", "hospitality automation",
    "restaurant loyalty program", "dining table booking", "restaurant social media automation"
  ],
  openGraph: {
    title: "Restaurant Marketing Automation | RocketFlow Bangladesh",
    description: "Boost your restaurant's revenue with RocketFlow's specialized automation platform. Automated reservations, customer engagement, and loyalty programs.",
    url: "https://rocketflow.com/restaurants",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Marketing Automation | RocketFlow Bangladesh",
    description: "Boost your restaurant's revenue with RocketFlow's specialized automation platform.",
  },
  alternates: {
    canonical: "https://rocketflow.com/restaurants",
  },
  category: "business",
};

export default function Restaurants() {
  return <RestaurantsComponent />;
}
