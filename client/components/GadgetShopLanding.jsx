'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar, Footer, Button, Card, Section, Container, ShinyText, ProvideMoreSection } from '.';
import {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  CameraIcon,
  SpeakerWaveIcon,
  ClockIcon,
  TvIcon,
  HeartIcon,
  ShoppingCartIcon,
  StarIcon,
  TruckIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  BoltIcon,
  WifiIcon,
  Battery100Icon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  ChartBarSquareIcon,
  MegaphoneIcon,
  Cog6ToothIcon,
  PresentationChartLineIcon,
  BellAlertIcon,
  TagIcon,
  PhoneIcon,
  UserGroupIcon,
  ArchiveBoxIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  LightBulbIcon,
  FireIcon,
  ChartPieIcon,
  BuildingStorefrontIcon
} from '@heroicons/react/24/outline';

export default function GadgetShopLanding() {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const services = [
    {
      id: 'pre-order-campaigns',
      title: 'Run Powerful Pre-Order & "Notify Me" Campaigns',
      description: 'Build a hype list automatically. On "Coming Soon" posts, auto-reply to "price" comments: "Reply NOTIFY ME for first access to pre-order link." Launch day: broadcast to entire list and sell out in hours.',
      icon: BellAlertIcon,
      count: '500+ Pre-Orders',
      color: 'from-coral-600 to-red-400',
      benefits: ['Maximize sales during critical product launches', 'Build high-intent marketing list automatically', 'Create seamless and exclusive experience for eager customers']
    },
    {
      id: 'smart-segmentation',
      title: 'Smart Segmentation by Tech Preference',
      description: 'Understand your customers\' ecosystem. Segment by Brand Allegiance (Apple_Fan, Android_User), Product Category (Smartphone_Shopper, Laptop_Hunter), Purchase Intent (PreOrdered_S26, Abandoned_Cart_Laptop).',
      icon: TagIcon,
      count: 'Hyper-Targeted',
      color: 'from-blue-500 to-indigo-400',
      benefits: ['Send hyper-relevant offers (Pixel Watch only to Android_Users)', 'Identify trends and popular brands with your audience', 'Run targeted upgrade campaigns (trade-in for iPhone 16 users)']
    },
    {
      id: 'automated-upselling',
      title: 'Automated Upselling & Pre-Order Conversion',
      description: 'After smartphone purchase: "Congratulations! Protect your investment with top-rated cases. 15% off for 24 hours." Abandoned cart: "Still deciding on MacBook Air? Complete order now, get free laptop sleeve."',
      icon: CurrencyDollarIcon,
      count: '37% AOV Boost',
      color: 'from-purple-500 to-pink-400',
      benefits: ['Dramatically increase average order value with automated accessories', 'Convert hesitant buyers by reminding product value', 'Recover lost sales from abandoned carts']
    },
    {
      id: 'stock-alerts',
      title: 'Automated "Back-in-Stock" & Pre-Order Updates',
      description: 'Sold-out items get "Notify Me When Available" button. When restocked: "Good news! Sony WF-1000XM5 back in stock. Order now before sellout again." Keep pre-order customers updated proactively.',
      icon: ArchiveBoxIcon,
      count: '98% Recovery',
      color: 'from-green-500 to-emerald-400',
      benefits: ['Recapture sales you would have lost permanently', 'Build immense trust and reduce pre-order anxiety', 'Drastically reduce "When will item be back?" support messages']
    },
    {
      id: 'warranty-support',
      title: 'Proactive Warranty & Support Automation',
      description: 'After purchase: auto-email warranty registration link and setup guides. For complex products, send "Quick Start Guide" or tutorial video links. Build professional post-purchase experience.',
      icon: DocumentTextIcon,
      count: 'Seamless Support',
      color: 'from-orange-500 to-amber-400',
      benefits: ['Streamline warranty process and build customer database', 'Provide value beyond sale, position as helpful expert', 'Encourage positive reviews and word-of-mouth referrals']
    },
    {
      id: 'flash-sales',
      title: 'Targeted Tech Promotions & Flash Sales',
      description: '10:50 AM Wednesday flash sale: "Tech Refresh! Next 4 hours only, 40% OFF power banks, chargers, headphones." Brand-specific: Email Apple_Fan list about new AirPods Pro stock.',
      icon: FireIcon,
      count: 'Flash Sales',
      color: 'from-red-500 to-orange-400',
      benefits: ['Drive immediate sales and clear inventory with timely offers', 'Create excitement and urgency among customer base', 'Powerful tool for hitting weekly/monthly sales targets']
    },
    {
      id: 'ai-tech-expert',
      title: '24/7 AI-Powered Tech Expert',
      description: 'Handle endless questions: "Is this global version?" "Warranty/EMI policy?" "Compare iPhone 17 vs Samsung S26 camera?" "When new PlayStation?" Instant accurate answers build buyer confidence.',
      icon: PhoneIcon,
      count: '24/7 Available',
      color: 'from-teal-500 to-cyan-400',
      benefits: ['Provide instant, accurate answers 24/7, building buyer confidence', 'Free up knowledgeable staff for complex sales and support', 'Ensure every potential customer gets info to make purchase decision']
    },
    {
      id: 'sales-analytics',
      title: 'Sales & Trend Analytics',
      description: 'Get data to stay ahead in fast-moving tech market. Identify most profitable products/brands, track pre-order campaign success, analyze upsell automation effectiveness.',
      icon: ChartPieIcon,
      count: 'Smart Insights',
      color: 'from-indigo-500 to-purple-400',
      benefits: ['Make smarter inventory and purchasing decisions', 'Understand customers\' buying patterns', 'Optimize marketing to focus on what truly drives sales']
    },
    {
      id: 'omnichannel-experience',
      title: 'An Omnichannel Customer Experience',
      description: 'Unify entire journey: discover product on Facebook, ask via Messenger, get pre-order alert via SMS, receive invoice/warranty via email. RocketFlow connects all touchpoints seamlessly.',
      icon: GlobeAltIcon,
      count: 'Unified Journey',
      color: 'from-cyan-500 to-blue-400',
      benefits: ['Modern, professional experience rivaling major retailers', 'Builds immense trust, sets you apart from smaller competitors', 'Creates smooth path from discovery to post-purchase support']
    }
  ];

  const successStories = [
    {
      id: 1,
      name: 'TechZone Store',
      result: '400% Revenue Growth',
      timeframe: 'In 6 Months',
      image: '/RF-Long-logo.webp',
      rating: 4.9,
      reviews: 'Client Success',
      badge: 'Success Story',
      features: ['Pre-Order Campaigns', 'Smart Segmentation', 'AI Tech Expert']
    },
    {
      id: 2,
      name: 'GadgetHub Pro',
      result: '250% Online Sales',
      timeframe: 'In 4 Months',
      image: '/signinlog.png',
      rating: 4.8,
      reviews: 'Client Success',
      badge: 'Featured',
      features: ['Automated Upselling', 'Stock Alerts', 'Warranty Automation']
    },
    {
      id: 3,
      name: 'ElectroWorld',
      result: '300% Brand Awareness',
      timeframe: 'In 3 Months',
      image: '/logo.png',
      rating: 4.7,
      reviews: 'Client Success',
      badge: 'Trending',
      features: ['Flash Sales', 'Customer Segmentation', 'Omnichannel Experience']
    },
    {
      id: 4,
      name: 'MobileMax',
      result: '500% Social Engagement',
      timeframe: 'In 2 Months',
      image: '/iphone15progray.jpg',
      rating: 4.6,
      reviews: 'Client Success',
      badge: 'Rapid Growth',
      features: ['Launch Campaigns', '24/7 AI Support', 'Sales Analytics']
    }
  ];

  const features = [
    {
      icon: TruckIcon,
      title: 'Fast Results',
      description: 'See growth within 30 days'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Guaranteed ROI',
      description: 'Money-back guarantee on campaigns'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Transparent Pricing',
      description: 'No hidden fees, clear pricing structure'
    },
    {
      icon: BoltIcon,
      title: '24/7 Support',
      description: 'Dedicated account manager support'
    }
  ];

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "RocketFlow Gadget Shop Marketing Automation",
            "description": "Specialized marketing automation platform for gadget retailers in Bangladesh. Features pre-order campaigns, smart customer segmentation, and AI-powered customer support.",
            "provider": {
              "@type": "Organization",
              "name": "RocketFlow",
              "url": "https://rocketflow.com"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Bangladesh"
            },
            "audience": {
              "@type": "BusinessAudience",
              "audienceType": "Gadget Retailers, Electronics Stores, Tech Shops"
            },
            "serviceType": "Marketing Automation Software",
            "offers": {
              "@type": "Offer",
              "name": "Gadget Shop Automation Package",
              "description": "Complete automation suite for gadget retailers including pre-order management, customer segmentation, and AI support",
              "category": "Software as a Service"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Automation Features",
              "itemListElement": services.map((service, index) => ({
                "@type": "Offer",
                "position": index + 1,
                "name": service.title,
                "description": service.description,
                "category": "Marketing Automation Feature"
              }))
            }
          })
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-coral-50 via-orange-50 to-red-50">
        <Navbar />
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="pt-24 pb-4 bg-white/70 backdrop-blur">
          <Container>
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-coral-600 transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/industries" className="hover:text-coral-600 transition-colors">
                  Industries
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-coral-600 font-medium" aria-current="page">
                Gadget Shop Automation
              </li>
            </ol>
          </Container>
        </nav>

        {/* Hero Section */}
        <Section 
          as="header" 
          className="pt-32 pb-24 relative overflow-hidden"
          role="banner"
        >
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <div className="absolute top-10 left-14 w-64 h-64 border-4 border-coral-200 rounded-full blur-0"></div>
          <div className="absolute bottom-16 right-12 w-80 h-80 border-4 border-orange-200 rounded-full -rotate-6"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 border-4 border-red-200 rounded-full rotate-12"></div>
        </div>
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <ShinyText className="text-coral-600 font-semibold text-sm uppercase tracking-wider">
                  RocketFlow for Gadget Retailers in Bangladesh
                </ShinyText>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Dominate the <span className="text-coral-500">Tech Market</span> with 
                  <br />
                  Smart <span className="text-coral-500">Automation</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your gadget store into the most responsive tech destination with automated pre-orders, 
                  smart upselling, and instant customer support that drives real results.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="bg-coral-500 hover:bg-coral-600"
                >
                  <RocketLaunchIcon className="w-5 h-5 mr-2 inline-block" />
                   Start Dominating
                </Button>
                <Button variant="outline" size="lg" className="border-coral-500 text-coral-600 hover:bg-coral-50">
                  See How It Works
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-8 h-8 bg-coral-100 rounded-full border-2 border-white"></div>
                    ))}
                  </div>
                  <span>500+ Gadget Shops Served</span>
                </div>
                <div className="flex items-center space-x-1">
                  <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4.9</span>
                  <span>(1,200+ Success Stories)</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl bg-gray-900">
                <div className="relative aspect-video">
                  {/* YouTube Embedded Video */}
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/FoK_k-iJiVw?si=RGCxOMd31lAQmmL2&autoplay=1&mute=1&loop=1&playlist=FoK_k-iJiVw&controls=1&modestbranding=1&rel=0"
                    title="RocketFlow Success Stories - Gadget Shop Growth"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  
                  {/* Fallback image overlay for loading state */}
                  <div className="absolute inset-0 bg-gray-900 flex items-center justify-center opacity-0 transition-opacity duration-500 pointer-events-none">
                    <Image 
                      src="/techsho.png" 
                      alt="RocketFlow gadget shop automation dashboard showing success metrics for Bangladesh tech retailers" 
                      fill
                      className="object-cover"
                      loading="eager"
                      priority={true}
                    />
                  </div>
                  
                  {/* YouTube branding indicator */}
                  <div className="absolute top-4 right-4 z-20 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold shadow-lg">
                    YouTube
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-coral-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-400 rounded-full opacity-20"></div>
              
              {/* Floating feature badges */}
              <div className="absolute top-4 left-4 z-20">
                <div className="bg-coral-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Client Success
                </div>
              </div>
              <div className="absolute top-16 left-4 z-20">
                <div className="bg-white/90 backdrop-blur-sm text-coral-600 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  TechZone Store
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Features Overview */}
      <Section className="py-20 bg-white/70 backdrop-blur border-y border-white/40">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="h-full border-2 border-coral-100 bg-white/80 transition-all duration-300 hover:border-coral-300 hover:-translate-y-2"
                animationDelay={index * 0.1}
              >
                <div className="flex items-center justify-center w-14 h-14 mb-5 rounded-xl bg-coral-100">
                  <feature.icon className="w-6 h-6 text-coral-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <ProvideMoreSection />

  {/* Automation Services Section */}
  <Section as="section" className="py-20 bg-gradient-to-br from-white via-coral-50 to-orange-100" aria-labelledby="services-heading">
        <Container>
          <header className="text-center space-y-4 mb-16">
            <p className="text-coral-600 font-semibold text-sm uppercase tracking-wider">
              RocketFlow's Gadget Shop Solutions
            </p>
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-gray-900">
              Automation for the <span className="text-coral-500">Fast-Paced Tech Market</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From automated pre-order campaigns to 24/7 AI tech support, these 9 comprehensive automation solutions help you dominate every aspect of the gadget market in Bangladesh
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className="group cursor-pointer border-0"
                hover={true}
                tiltEffect={true}
                padding="lg"
                animationDelay={index * 0.1}
                onMouseEnter={() => setHoveredCategory(service.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                role="listitem"
                aria-labelledby={`service-${service.id}-title`}
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className="text-center space-y-6">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`} aria-hidden="true">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 
                      id={`service-${service.id}-title`}
                      className="text-xl font-bold text-gray-900 group-hover:text-coral-600 transition-colors"
                      itemProp="name"
                    >
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed" itemProp="description">
                      {service.description}
                    </p>
                    <p className="text-sm font-semibold text-coral-600" aria-label={`Service metric: ${service.count}`}>
                      {service.count}
                    </p>
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-coral-500 text-coral-600 hover:bg-coral-500 hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* How RocketFlow Works Section */}
  <Section className="py-20 bg-gradient-to-br from-white via-coral-50 to-orange-100">
        <Container>
          <div className="text-center space-y-4 mb-16">
            <ShinyText className="text-coral-600 font-semibold text-sm uppercase tracking-wider">
              How RocketFlow Works
            </ShinyText>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Automate Critical <span className="text-coral-500">Tech Market Interactions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In the world of gadgets, the sales cycle is driven by launches, pre-orders, and technical details. 
              Your customers are knowledgeable and expect instant, accurate information.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-coral-100 rounded-xl flex items-center justify-center">
                    <BellAlertIcon className="w-6 h-6 text-coral-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Build Hype Lists Automatically</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  On your "Coming Soon" post for the new iPhone, automate replies to comments like "price" or "interested": 
                  <span className="font-semibold text-coral-600"> "The official price will be announced soon! Reply with 'NOTIFY ME' to be the first to get the pre-order link."</span>
                </p>
              </div>
              <div className="bg-coral-50 border border-coral-200 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">Example Success:</h4>
                <p className="text-gray-700">
                  You tease the new Samsung Galaxy phone. Hundreds comment "price". RocketFlow builds a list of 500+ interested buyers. 
                  On launch day, you send one broadcast and <span className="font-bold text-coral-600">sell out your initial stock in hours</span>.
                </p>
              </div>
            </div>
            <div className="relative">
              <Card hover={true} tiltEffect={true} padding="lg" className="group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-500">FACEBOOK POST</span>
                    <span className="text-xs bg-coral-100 text-coral-600 px-2 py-1 rounded-full group-hover:bg-coral-200 transition-colors duration-300">AUTOMATED</span>
                  </div>
                  <div className="border-l-4 border-coral-500 pl-4 group-hover:border-coral-600 transition-colors duration-300">
                    <p className="font-semibold text-gray-900 group-hover:text-coral-700 transition-colors duration-300">"iPhone 17 Coming Soon! "</p>
                    <p className="text-gray-600 text-sm mt-1">152 comments 45 shares</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Auto-replies sent:</span>
                      <span className="font-semibold text-coral-600 group-hover:scale-110 transition-transform duration-300">347</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Notify Me list:</span>
                      <span className="font-semibold text-coral-600 group-hover:scale-110 transition-transform duration-300">+523 contacts</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1 relative">
              <Card hover={true} tiltEffect={true} padding="lg" className="group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-500">CUSTOMER SEGMENTS</span>
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full group-hover:bg-blue-200 transition-colors duration-300">SMART TARGETING</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors duration-300">
                      <span className="font-medium">Apple_Fan</span>
                      <span className="text-sm text-gray-600">1,247 customers</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors duration-300">
                      <span className="font-medium">Android_User</span>
                      <span className="text-sm text-gray-600">2,156 customers</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-coral-50 rounded-lg border border-coral-200 group-hover:bg-coral-100 group-hover:border-coral-300 transition-colors duration-300">
                      <span className="font-medium text-coral-700 group-hover:text-coral-800 transition-colors duration-300">Smartwatch_Enthusiast</span>
                      <span className="text-sm text-coral-600 group-hover:text-coral-700 transition-colors duration-300">856 customers</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <TagIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Smart Customer Segmentation</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Understand your customers' ecosystem to sell them more of what they love. Segment by 
                  <span className="font-semibold text-blue-600"> Brand Allegiance, Product Category, and Purchase Intent</span>.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">Impact:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                    <span>Send hyper-relevant offers (e.g., Pixel Watch to Android_Users)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                    <span>Identify trends and popular brands with your audience</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                    <span>Run targeted upgrade campaigns (trade-in offers)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: CurrencyDollarIcon,
                title: 'Automated Upselling',
                description: 'Immediately after a smartphone purchase, trigger: "Congratulations! Protect your investment with our top-rated cases. 15% off for 24 hours."',
                impact: '37% AOV Increase',
                color: 'from-purple-500 to-pink-400'
              },
              {
                icon: ArchiveBoxIcon,
                title: 'Stock Alert Recovery',
                description: 'When Sony headphones restock, auto-send: "Good news! Sony WF-1000XM5 back in stock. Order now before they sell out again."',
                impact: '98% Recovery Rate',
                color: 'from-green-500 to-emerald-400'
              },
              {
                icon: PhoneIcon,
                title: '24/7 AI Tech Expert',
                description: 'Handle endless questions: "Is this global version?" "What\'s the warranty?" "Compare iPhone vs Samsung camera."',
                impact: 'Instant Answers',
                color: 'from-teal-500 to-cyan-400'
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="text-center space-y-4 group"
                hover={true}
                tiltEffect={true}
                padding="lg"
                animationDelay={index * 0.15}
              >
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-coral-600 transition-colors duration-300">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                <div className="bg-gray-50 rounded-lg p-3 group-hover:bg-coral-50 transition-colors duration-300">
                  <p className="text-coral-600 font-bold group-hover:text-coral-700 transition-colors duration-300">{item.impact}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Benefits Summary Section */}
      <Section className="py-20 bg-white/80 backdrop-blur">
        <Container>
          <div className="text-center space-y-4 mb-16">
            <ShinyText className="text-coral-600 font-semibold text-sm uppercase tracking-wider">
              Complete Solution Overview
            </ShinyText>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Transform Every Challenge into <span className="text-coral-500">Growth Opportunity</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how RocketFlow solves the biggest challenges facing gadget retailers in Bangladesh's competitive market
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-xl overflow-hidden">
              <thead className="bg-coral-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Category</th>
                  <th className="px-6 py-4 text-left font-bold">Problem</th>
                  <th className="px-6 py-4 text-left font-bold">Rocket Flow Solution</th>
                  <th className="px-6 py-4 text-left font-bold">Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <BellAlertIcon className="w-6 h-6 text-coral-500" />
                      <div>
                        <p className="font-semibold text-gray-900">Product Launches</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">Manually managing chaotic pre-order inquiries</td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-600">Automated "Notify Me" Lists & Launch Day Broadcasts</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-gray-600">Maximizes launch day sales, reduces manual work</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <CurrencyDollarIcon className="w-6 h-6 text-purple-500" />
                      <div>
                        <p className="font-semibold text-gray-900">Profitability</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">Low-margin on primary gadgets, missed upsells</td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-600">Automated Post-Purchase Accessory Upsell Sequences</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-gray-600">Increases Average Order Value (AOV) & profit</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <ArchiveBoxIcon className="w-6 h-6 text-green-500" />
                      <div>
                        <p className="font-semibold text-gray-900">Sales Recovery</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">Losing sales on out-of-stock items</td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-600">Automated "Back-in-Stock" Notifications</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-gray-600">Recaptures lost revenue, improves customer loyalty</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <PhoneIcon className="w-6 h-6 text-teal-500" />
                      <div>
                        <p className="font-semibold text-gray-900">Customer Support</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">Repetitive technical & policy questions</td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-600">24/7 AI Assistant for Specs, Warranty, EMI queries</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-gray-600">Saves expert staff time, provides instant answers</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <ShieldCheckIcon className="w-6 h-6 text-indigo-500" />
                      <div>
                        <p className="font-semibold text-gray-900">Customer Trust</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">Anxiety and support tickets from pre-order customers</td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-600">Proactive Pre-Order & Shipping Status Updates via SMS</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-gray-600">Builds trust, reduces support load</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <TagIcon className="w-6 h-6 text-blue-500" />
                      <div>
                        <p className="font-semibold text-gray-900">Marketing</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">Generic marketing to a diverse tech audience</td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-600">Smart Segmentation by Brand & Product Preference</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-gray-600">Higher ROI on targeted campaigns & upgrade offers</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-coral-100 rounded-2xl p-8 border border-coral-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Complete Omnichannel Experience</h3>
              <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                A customer discovers a product on Facebook, asks questions via Messenger, gets pre-order alerts via SMS, 
                and receives warranty info via Email. RocketFlow connects all touchpoints seamlessly.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-coral-600" />
                  <span className="font-semibold text-gray-800">Modern, professional experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-coral-600" />
                  <span className="font-semibold text-gray-800">Builds immense customer trust</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-coral-600" />
                  <span className="font-semibold text-gray-800">Smooth discovery-to-support journey</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

  {/* Client Success Stories */}
  <Section className="py-20 bg-gradient-to-br from-white via-coral-50 to-orange-100">
        <Container>
          <div className="text-center space-y-4 mb-16">
            <ShinyText className="text-coral-600 font-semibold text-sm uppercase tracking-wider">
              Client Success Stories
            </ShinyText>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Proven <span className="text-coral-500">Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how we've helped gadget retailers in Bangladesh achieve remarkable growth and dominate the tech market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successStories.map((story, index) => (
              <Card
                key={story.id}
                className={`group relative overflow-hidden ${
                  hoveredProduct === story.id ? 'rotate-1' : ''
                }`}
                hover={true}
                tiltEffect={true}
                padding="sm"
                animationDelay={index * 0.1}
                onMouseEnter={() => setHoveredProduct(story.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-coral-50/50 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-95 group-hover:scale-100 rounded-3xl"></div>
                
                {/* Badge */}
                {story.badge && (
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-coral-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg animate-pulse group-hover:animate-none transform group-hover:scale-110 transition-all duration-300">
                      {story.badge}
                    </span>
                  </div>
                )}

                {/* Heart Icon */}
                <button className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-coral-500 hover:text-white transform hover:scale-110">
                  <HeartIcon className="w-5 h-5" />
                </button>

                {/* Header Section with Icon */}
                <div className="relative h-24 bg-coral-500 overflow-hidden flex items-center justify-center">
                  {/* Company Initial Circle */}
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-500 group-hover:rotate-12 transform">
                    <span className="text-2xl font-bold text-coral-600 group-hover:scale-110 transition-all duration-300">
                      {story.name.charAt(0)}
                    </span>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-8 -right-8 w-20 h-20 bg-white/20 rounded-full opacity-50 group-hover:opacity-70 transition-all duration-500 group-hover:scale-125"></div>
                  <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white/10 rounded-full opacity-40 group-hover:opacity-60 transition-all duration-500 group-hover:scale-110"></div>
                  
                  {/* Floating sparkles */}
                  <div className="absolute top-4 right-4">
                    <SparklesIcon className="w-6 h-6 text-white/60 opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse transform group-hover:rotate-45 group-hover:scale-125" />
                  </div>
                  
                  {/* Growth arrow indicator */}
                  <div className="absolute bottom-2 left-2">
                    <div className="flex items-center space-x-1 text-white/80 text-xs font-medium transform group-hover:scale-110 transition-all duration-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse group-hover:scale-150 transition-all duration-300"></div>
                      <span>Success Story</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative p-6 space-y-4">
                  {/* Company Name & Rating */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-coral-600 transition-colors duration-300 transform group-hover:scale-105 group-hover:translate-x-1">
                        {story.name}
                      </h3>
                      <div className="flex items-center space-x-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon 
                              key={i} 
                              className={`w-4 h-4 transition-all duration-300 transform ${
                                i < Math.floor(story.rating) 
                                  ? 'fill-yellow-400 text-yellow-400 group-hover:scale-125 group-hover:rotate-12' 
                                  : 'text-gray-300'
                              }`}
                              style={{ transitionDelay: `${i * 75}ms` }}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-semibold text-gray-700 ml-1 transform group-hover:scale-110 transition-all duration-300">{story.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium border border-green-200 transform group-hover:scale-105 group-hover:bg-green-200 transition-all duration-300">
                        Γ£ô {story.reviews}
                      </span>
                      <span className="text-xs text-gray-500 font-medium transform group-hover:scale-105 group-hover:text-coral-600 transition-all duration-300">
                        Case Study #{story.id}
                      </span>
                    </div>
                  </div>

                  {/* Features Tags */}
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Solutions Used:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {story.features.slice(0, 2).map((feature, featureIndex) => (
                        <span 
                          key={featureIndex} 
                          className="text-xs bg-coral-100 text-coral-700 px-2.5 py-1 rounded-full font-medium border border-coral-200 group-hover:bg-coral-200 transition-colors duration-300"
                        >
                          {feature}
                        </span>
                      ))}
                      {story.features.length > 2 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium border border-gray-200 group-hover:bg-gray-200 transition-colors duration-300">
                          +{story.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Results Section */}
                  <div className="bg-coral-50 rounded-2xl p-4 border border-coral-100 group-hover:bg-coral-100 transition-all duration-300 transform group-hover:scale-105">
                    <div className="text-center space-y-1">
                      <div className="text-2xl font-bold text-coral-600 transform group-hover:scale-110 transition-all duration-300">
                        {story.result}
                      </div>
                      <div className="text-sm text-gray-600 font-medium flex items-center justify-center space-x-1 transform group-hover:scale-105 transition-all duration-300">
                        <ClockIcon className="w-3 h-3 transform group-hover:rotate-180 transition-all duration-500" />
                        <span>{story.timeframe}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-2">
                    <button className="w-full bg-coral-500 hover:bg-coral-600 text-white font-semibold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 flex items-center justify-center space-x-2">
                      <span>View Full Case Study</span>
                      <ChartBarSquareIcon className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                    </button>
                  </div>
                </div>

                {/* Hover Effect Border Glow */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-coral-300 transition-all duration-300 pointer-events-none group-hover:shadow-xl" style={{ boxShadow: '0 25px 50px -12px rgba(248, 113, 113, 0.25)' }}></div>
                
                {/* Subtle shine effect on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform group-hover:scale-105"></div>
                
                {/* Floating animation elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-coral-400 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-700 transform group-hover:translate-y-1 group-hover:translate-x-1"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-orange-400 rounded-full opacity-0 group-hover:opacity-50 transition-all duration-500 transform group-hover:-translate-y-1 group-hover:-translate-x-1"></div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-coral-500 text-coral-600 hover:bg-coral-500 hover:text-white">
              View All Success Stories
            </Button>
          </div>
        </Container>
      </Section>

  {/* Tech Specs Section */}
  <Section className="py-20 bg-white/80 backdrop-blur">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <ShinyText className="text-coral-600 font-semibold text-sm uppercase tracking-wider">
                  Why RocketFlow for Gadget Shops
                </ShinyText>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Your 24/7 <span className="text-coral-500">Automated Sales Expert</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  In a fast-paced market like Bangladesh, speed, trust, and managing product hype are everything. 
                  RocketFlow acts as your automated operations manager, designed to capitalize on the unique dynamics of the tech market.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: BellAlertIcon, title: 'Run Powerful Pre-Order Campaigns', desc: 'Build automated hype lists for new product launches and maximize sales' },
                  { icon: TagIcon, title: 'Smart Tech Segmentation', desc: 'Target customers by brand allegiance and product category preferences' },
                  { icon: CurrencyDollarIcon, title: 'Automated Upselling', desc: 'Boost AOV with accessory recommendations and cart recovery sequences' },
                  { icon: PhoneIcon, title: '24/7 AI Tech Expert', desc: 'Answer endless spec and availability questions automatically' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-coral-100 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-coral-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-coral-500 rounded-2xl p-8 text-white">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <GlobeAltIcon className="w-8 h-8" />
                    <h3 className="text-2xl font-bold">Omnichannel Experience</h3>
                  </div>
                  <p className="text-coral-100">
                    Connect your customer journey across Facebook, SMS, Email, and WhatsApp to create a seamless 
                    experience from product discovery to post-purchase support.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Product launch management</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Instant technical support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Sales & trend analytics</span>
                    </div>
                  </div>
                  <Button variant="secondary" className="bg-white text-coral-600 hover:bg-coral-50">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      {/* CTA Section */}
      <Section className="py-20 bg-coral-500">
        <Container>
          <div className="text-center text-white space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Dominate the Tech Market?
            </h2>
            <p className="text-xl text-coral-100 max-w-2xl mx-auto">
              Join hundreds of successful gadget retailers in Bangladesh who have transformed their businesses 
              with RocketFlow's automated sales and marketing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-white text-coral-600 hover:bg-coral-50">
                Start Your 7-Day Free Trial
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-coral-600">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </Container>
      </Section>
        <Footer />
      </div>
    </>
  );
}
