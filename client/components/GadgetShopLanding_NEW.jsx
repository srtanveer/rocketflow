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
  BuildingStorefrontIcon,
  CalendarIcon,
  PlayIcon
} from '@heroicons/react/24/outline';

export default function GadgetShopLanding() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [showAllBenefits, setShowAllBenefits] = useState(false);

  const solutions = [
    {
      id: 'pre-order-campaigns',
      title: 'Run Powerful Pre-Order & "Notify Me" Campaigns',
      description: 'Build a hype list automatically. On "Coming Soon" posts, auto-reply to "price" comments: "Reply NOTIFY ME for first access to pre-order link." Launch day: broadcast to entire list and sell out in hours.',
      icon: BellAlertIcon,
      gradient: 'from-coral-500 via-red-500 to-orange-600',
      features: ['Maximize sales during critical product launches', 'Build high-intent marketing list automatically', 'Create seamless and exclusive experience for eager customers'],
      stats: { value: '500+ Pre-Orders', label: 'Per Launch' }
    },
    {
      id: 'smart-segmentation',
      title: 'Smart Segmentation by Tech Preference',
      description: 'Understand your customers\' ecosystem. Segment by Brand Allegiance (Apple_Fan, Android_User), Product Category (Smartphone_Shopper, Laptop_Hunter), Purchase Intent (PreOrdered_S26, Abandoned_Cart_Laptop).',
      icon: TagIcon,
      gradient: 'from-blue-500 via-indigo-500 to-purple-600',
      features: ['Send hyper-relevant offers (Pixel Watch only to Android_Users)', 'Identify trends and popular brands with your audience', 'Run targeted upgrade campaigns (trade-in for iPhone 16 users)'],
      stats: { value: 'Hyper-Targeted', label: 'Marketing' }
    },
    {
      id: 'automated-upselling',
      title: 'Automated Upselling & Pre-Order Conversion',
      description: 'After smartphone purchase: "Congratulations! Protect your investment with top-rated cases. 15% off for 24 hours." Abandoned cart: "Still deciding on MacBook Air? Complete order now, get free laptop sleeve."',
      icon: CurrencyDollarIcon,
      gradient: 'from-purple-500 via-pink-500 to-rose-600',
      features: ['Dramatically increase average order value with automated accessories', 'Convert hesitant buyers by reminding product value', 'Recover lost sales from abandoned carts'],
      stats: { value: '37% AOV Boost', label: 'Average Increase' }
    },
    {
      id: 'stock-alerts',
      title: 'Automated "Back-in-Stock" & Pre-Order Updates',
      description: 'Sold-out items get "Notify Me When Available" button. When restocked: "Good news! Sony WF-1000XM5 back in stock. Order now before sellout again." Keep pre-order customers updated proactively.',
      icon: ArchiveBoxIcon,
      gradient: 'from-green-500 via-emerald-500 to-teal-600',
      features: ['Recapture sales you would have lost permanently', 'Build immense trust and reduce pre-order anxiety', 'Drastically reduce "When will item be back?" support messages'],
      stats: { value: '98% Recovery', label: 'Rate' }
    },
    {
      id: 'warranty-support',
      title: 'Proactive Warranty & Support Automation',
      description: 'After purchase: auto-email warranty registration link and setup guides. For complex products, send "Quick Start Guide" or tutorial video links. Build professional post-purchase experience.',
      icon: DocumentTextIcon,
      gradient: 'from-orange-500 via-amber-500 to-yellow-600',
      features: ['Streamline warranty process and build customer database', 'Provide value beyond sale, position as helpful expert', 'Encourage positive reviews and word-of-mouth referrals'],
      stats: { value: 'Seamless Support', label: '24/7 Available' }
    },
    {
      id: 'flash-sales',
      title: 'Targeted Tech Promotions & Flash Sales',
      description: '10:50 AM Wednesday flash sale: "Tech Refresh! Next 4 hours only, 40% OFF power banks, chargers, headphones." Brand-specific: Email Apple_Fan list about new AirPods Pro stock.',
      icon: FireIcon,
      gradient: 'from-red-500 via-orange-500 to-amber-600',
      features: ['Drive immediate sales and clear inventory with timely offers', 'Create excitement and urgency among customer base', 'Powerful tool for hitting weekly/monthly sales targets'],
      stats: { value: 'Flash Sales', label: 'Daily Campaigns' }
    },
    {
      id: 'ai-tech-expert',
      title: '24/7 AI-Powered Tech Expert',
      description: 'Handle endless questions: "Is this global version?" "Warranty/EMI policy?" "Compare iPhone 17 vs Samsung S26 camera?" "When new PlayStation?" Instant accurate answers build buyer confidence.',
      icon: PhoneIcon,
      gradient: 'from-teal-500 via-cyan-500 to-blue-600',
      features: ['Provide instant, accurate answers 24/7, building buyer confidence', 'Free up knowledgeable staff for complex sales and support', 'Ensure every potential customer gets info to make purchase decision'],
      stats: { value: '24/7 Available', label: 'Always Online' }
    },
    {
      id: 'sales-analytics',
      title: 'Sales & Trend Analytics',
      description: 'Get data to stay ahead in fast-moving tech market. Identify most profitable products/brands, track pre-order campaign success, analyze upsell automation effectiveness.',
      icon: ChartPieIcon,
      gradient: 'from-indigo-500 via-violet-500 to-purple-600',
      features: ['Make smarter inventory and purchasing decisions', 'Understand customers\' buying patterns', 'Optimize marketing to focus on what truly drives sales'],
      stats: { value: 'Smart Insights', label: 'Data-Driven' }
    },
    {
      id: 'omnichannel-experience',
      title: 'An Omnichannel Customer Experience',
      description: 'Unify entire journey: discover product on Facebook, ask via Messenger, get pre-order alert via SMS, receive invoice/warranty via email. RocketFlow connects all touchpoints seamlessly.',
      icon: GlobeAltIcon,
      gradient: 'from-cyan-500 via-blue-500 to-indigo-600',
      features: ['Modern, professional experience rivaling major retailers', 'Builds immense trust, sets you apart from smaller competitors', 'Creates smooth path from discovery to post-purchase support'],
      stats: { value: 'Unified Journey', label: 'Seamless Experience' }
    }
  ];

  const features = [
    {
      title: 'Pre-Order Management',
      description: 'Automated campaigns for product launches',
      icon: BellAlertIcon,
      stats: ['Hype list building', 'Launch day broadcasts', '500+ conversions']
    },
    {
      title: 'Customer Segmentation',
      description: 'Smart targeting by brand preference',
      icon: UserGroupIcon,
      stats: ['Brand loyalty tracking', 'Behavioral targeting', 'Upgrade campaigns']
    },
    {
      title: 'Stock Alerts',
      description: 'Automated back-in-stock notifications',
      icon: ArchiveBoxIcon,
      stats: ['Instant notifications', '98% recovery rate', 'Inventory sync']
    },
    {
      title: 'AI Tech Support',
      description: '24/7 automated customer assistance',
      icon: PhoneIcon,
      stats: ['Instant responses', 'Product comparisons', 'Spec inquiries']
    }
  ];

  const benefits = [
    {
      icon: RocketLaunchIcon,
      title: 'Launch Success',
      description: 'Maximize revenue during critical product launches',
      metric: '500+ pre-orders',
      color: 'coral'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Revenue Growth',
      description: 'Increase average order value with smart upselling',
      metric: '37% AOV increase',
      color: 'purple'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Customer Trust',
      description: 'Build loyalty with proactive communication',
      metric: '98% satisfaction',
      color: 'teal'
    },
    {
      icon: ChartPieIcon,
      title: 'Market Intelligence',
      description: 'Data-driven decisions for inventory & marketing',
      metric: 'Smart insights',
      color: 'indigo'
    }
  ];

  const successStories = [
    {
      id: 1,
      name: 'TechZone Store',
      result: '400% Revenue Growth',
      timeframe: 'In 6 Months',
      company: 'TZ',
      industry: 'Electronics Retail',
      challenge: 'Missing sales during product launches due to disorganized pre-order system',
      solution: 'Implemented automated pre-order campaigns, smart segmentation, and AI tech expert',
      results: ['400% revenue increase in 6 months', 'Sold out initial stock in hours', '98% customer satisfaction rate']
    },
    {
      id: 2,
      name: 'GadgetHub Pro',
      result: '250% Online Sales',
      timeframe: 'In 4 Months',
      company: 'GH',
      industry: 'Tech Retail',
      challenge: 'Low margins on primary gadgets with minimal accessory sales',
      solution: 'Deployed automated upselling, stock alerts, and warranty automation systems',
      results: ['250% increase in online sales', '37% higher average order value', '60% more accessory sales']
    }
  ];

  const stats = [
    { number: '500+', label: 'Gadget Shops', icon: BuildingStorefrontIcon },
    { number: '98%', label: 'Recovery Rate', icon: ArchiveBoxIcon },
    { number: '24/7', label: 'AI Support', icon: PhoneIcon },
    { number: '37%', label: 'AOV Boost', icon: CurrencyDollarIcon }
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
            }
          })
        }}
      />
      
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        {/* Hero Section - Gadget Shop Theme */}
        <Section className="pt-20 sm:pt-24 pb-12 sm:pb-16 relative overflow-hidden">
          {/* Decorative Background Pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute bottom-20 right-20 w-80 h-80 border-4 border-orange-200 rounded-full -rotate-12"></div>
              <div className="absolute top-1/2 left-1/2 w-72 h-72 border-4 border-red-200 rounded-full rotate-12"></div>
            </div>
          </div>

          <Container className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mt-14 mb-4 border border-blue-200">
                  <BuildingStorefrontIcon className="w-5 h-5 text-coral-600 mr-2" />
                  <span className="text-coral-900 font-semibold text-sm">RocketFlow for Gadget Retailers</span>
                </div>
                
                <h1 className="text-[2.5rem] leading-tight sm:text-[3rem] sm:leading-tight lg:text-[4rem] lg:leading-tight font-bold mb-2 sm:mb-3 lg:mb-4">
                  <span className="text-gray-900">Dominate the</span>
                  <br />
                  <span className="text-coral-600">
                    Tech Market
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Transform your gadget store into the most responsive tech destination with automated pre-orders, 
                  smart upselling, and instant customer support that drives real results.
                </p>

                {/* Key Highlights */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-coral-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <RocketLaunchIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">500+ Pre-Orders</div>
                      <div className="text-sm text-gray-600">Per launch</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CurrencyDollarIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">37% AOV Boost</div>
                      <div className="text-sm text-gray-600">Revenue increase</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <UserGroupIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">500+ Shops</div>
                      <div className="text-sm text-gray-600">Trusted nationwide</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <PhoneIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">24/7 Support</div>
                      <div className="text-sm text-gray-600">AI-powered</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-coral-600 to-red-600 hover:from-coral-700 hover:to-red-700 text-white px-10 py-4 rounded-xl font-semibold text-sm sm:text-base shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                    <PlayIcon className="w-5 h-5" />
                    Start Dominating
                  </Button>
                  <button className="bg-transparent border-2 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white px-10 py-4 rounded-xl font-semibold text-sm sm:text-base transition-all hover:shadow-md">
                    See How It Works
                  </button>
                </div>
              </div>

              {/* Right Visual - Success Dashboard */}
              <div className="relative">
                <div className="relative">
                  {/* Dashboard Cards Stack */}
                  <div className="space-y-4">
                    {/* Top Card - Analytics */}
                    <Card animationDelay={0} className="card-hover !bg-coral-600 !text-black">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <div className="text-sm opacity-80 mb-1">Monthly Pre-Orders</div>
                          <div className="text-4xl font-bold">2.5K+</div>
                        </div>
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                          <RocketLaunchIcon className="w-8 h-8" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-black bg-opacity-20 rounded-full h-2">
                          <div className="bg-black rounded-full h-2 w-3/4"></div>
                        </div>
                        <span className="text-sm font-semibold">+48%</span>
                      </div>
                    </Card>

                    {/* Middle Cards - Side by Side */}
                    <div className="grid grid-cols-2 gap-4">
                      <Card animationDelay={0.1} className="card-hover border-2 border-coral-100">
                        <div className="w-12 h-12 bg-coral-500 rounded-xl flex items-center justify-center mb-4">
                          <ShoppingCartIcon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-bold text-gray-900 mb-1">37%</div>
                        <div className="text-sm text-gray-600">AOV Increase</div>
                      </Card>
                      <Card animationDelay={0.15} className="card-hover border-2 border-orange-100">
                        <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                          <ArchiveBoxIcon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-bold text-gray-900 mb-1">98%</div>
                        <div className="text-sm text-gray-600">Stock Recovery</div>
                      </Card>
                    </div>

                    {/* Bottom Card - Activity */}
                    <Card animationDelay={0.2} className="card-hover border-2 border-coral-100">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 bg-coral-500 rounded-full flex items-center justify-center text-white font-bold">
                          AI
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-gray-900">Tech Expert Active</div>
                          <div className="text-sm text-gray-600">Handling 128 queries now</div>
                        </div>
                        <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                          Live
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-8 -right-8 bg-coral-500 text-white px-6 py-3 rounded-full shadow-2xl font-bold text-sm transform rotate-6 hover:rotate-0 transition-transform duration-300">
                    🎮 Tech Ready
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Features Showcase - Interactive Cards */}
        <Section className="py-12 sm:py-14 bg-white">
          <Container>
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-gray-900 mb-4">
                Complete Suite for
                <span className="text-coral-600"> Tech Retailers</span>
              </h2>
              <p className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-gray-600 max-w-3xl mx-auto">
                Everything your gadget shop needs in one powerful platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  animationDelay={index * 0.1}
                  className={`card-hover group cursor-pointer transition-all duration-300 border-2 ${
                    activeFeature === index
                      ? 'bg-gradient-to-br from-coral-50 to-orange-50 border-coral-300 scale-105'
                      : 'border-gray-200 hover:border-coral-200'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="w-14 h-14 bg-coral-500 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.stats.map((stat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-coral-500 rounded-full"></div>
                        <span className="text-gray-700">{stat}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        {/* Solutions Grid */}
        <Section className="py-20 bg-gray-50">
          <Container>
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-gray-900 mb-4">
                Automation for the
                <span className="text-coral-600"> Fast-Paced Tech Market</span>
              </h2>
              <p className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-gray-600 max-w-3xl mx-auto">
                From automated pre-order campaigns to 24/7 AI tech support, comprehensive solutions for every aspect of the gadget market
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {solutions.map((solution, index) => (
                <Card
                  key={solution.id}
                  className={`card-hover card-shimmer relative p-8 rounded-3xl bg-white border-2 shadow-xl hover:shadow-2xl transition-all duration-500 transform overflow-hidden group ${
                    hoveredService === solution.id 
                      ? 'border-coral-300' 
                      : 'border-gray-200 hover:border-coral-200'
                  }`}
                  onMouseEnter={() => setHoveredService(solution.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Stats Badge */}
                  <div className="absolute top-6 right-6 bg-coral-100 text-coral-700 px-4 py-1.5 rounded-full text-xs font-bold shadow-md">
                    {solution.stats.value}
                  </div>

                  {/* Icon */}
                  <div className="relative w-16 h-16 bg-coral-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-bold text-gray-900 mb-4 relative z-10">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                    {solution.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 relative z-10">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm">
                        <div className="w-2 h-2 bg-coral-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-6 pt-6 border-t border-gray-100 relative z-10">
                    <div className="text-xs text-gray-500 uppercase tracking-wider">{solution.stats.label}</div>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <ProvideMoreSection />

        {/* Benefits Section */}
        <Section className="py-12 sm:py-14 bg-white">
          <Container>
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-gray-900 mb-4">
                Why Gadget Retailers
                <span className="text-coral-600"> Choose Us</span>
              </h2>
              <p className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-gray-600 max-w-3xl mx-auto">
                Join hundreds of successful gadget shops transforming their business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10 sm:mb-12">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  animationDelay={index * 0.1}
                  className="card-hover bg-coral-50 border-2 border-coral-100"
                >
                  <div className={`w-16 h-16 bg-${benefit.color}-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
                  <div className={`inline-block px-4 py-2 bg-${benefit.color}-100 text-${benefit.color}-700 rounded-full text-sm font-bold`}>
                    {benefit.metric}
                  </div>
                </Card>
              ))}
            </div>

            {/* Stats Bar */}
            <div className="bg-coral-600 rounded-3xl p-12 shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-coral-100 font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary of Benefits */}
            <div className="mt-20">
              <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
                  Transform Every <span className="text-coral-600">Challenge</span>
                </h3>
                <p className="text-base sm:text-lg text-gray-600 px-4">How RocketFlow solves the biggest challenges for gadget retailers</p>
              </div>

              {/* Mobile Card View */}
              <div className="block lg:hidden space-y-4 px-4">
                {/* Product Launches Card */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                  <div className="bg-coral-600 p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <BellAlertIcon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Product Launches</h4>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                      <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">Manually managing chaotic pre-order inquiries</p>
                    </div>
                    <div>
                      <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                      <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-medium">Automated "Notify Me" Lists & Launch Day Broadcasts</p>
                    </div>
                    <div>
                      <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                      <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">Maximizes launch day sales, reduces manual work</p>
                    </div>
                  </div>
                </div>

                {/* Profitability Card */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CurrencyDollarIcon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Profitability</h4>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                      <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">Low-margin on primary gadgets, missed upsells</p>
                    </div>
                    <div>
                      <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                      <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-medium">Automated Post-Purchase Accessory Upsell Sequences</p>
                    </div>
                    <div>
                      <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                      <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">Increases Average Order Value (AOV) & profit</p>
                    </div>
                  </div>
                </div>

                {/* Remaining cards - shown only when expanded */}
                {showAllBenefits && (
                  <>
                {/* Sales Recovery Card */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <ArchiveBoxIcon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Sales Recovery</h4>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                      <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">Losing sales on out-of-stock items</p>
                    </div>
                    <div>
                      <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                      <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-medium">Automated "Back-in-Stock" Notifications</p>
                    </div>
                    <div>
                      <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                      <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">Recaptures lost revenue, improves customer loyalty</p>
                    </div>
                  </div>
                </div>

                {/* Customer Support Card */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                  <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <PhoneIcon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Customer Support</h4>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                      <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">Repetitive technical & policy questions</p>
                    </div>
                    <div>
                      <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                      <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-medium">24/7 AI Assistant for Specs, Warranty, EMI queries</p>
                    </div>
                    <div>
                      <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                      <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">Saves expert staff time, provides instant answers</p>
                    </div>
                  </div>
                </div>

                {/* Customer Trust Card */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                  <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <ShieldCheckIcon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Customer Trust</h4>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                      <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">Anxiety and support tickets from pre-order customers</p>
                    </div>
                    <div>
                      <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                      <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-medium">Proactive Pre-Order & Shipping Status Updates via SMS</p>
                    </div>
                    <div>
                      <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                      <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">Builds trust, reduces support load</p>
                    </div>
                  </div>
                </div>

                {/* Marketing Card */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <TagIcon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Marketing</h4>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                      <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">Generic marketing to a diverse tech audience</p>
                    </div>
                    <div>
                      <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                      <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-medium">Smart Segmentation by Brand & Product Preference</p>
                    </div>
                    <div>
                      <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                      <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">Higher ROI on targeted campaigns & upgrade offers</p>
                    </div>
                  </div>
                </div>
                  </>
                )}

                {/* See More Button */}
                {!showAllBenefits && (
                  <div className="text-center pt-2">
                    <button
                      onClick={() => setShowAllBenefits(true)}
                      className="px-6 py-3 bg-coral-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      See More Benefits
                    </button>
                  </div>
                )}
              </div>

              {/* Desktop Table View */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-2xl shadow-xl overflow-hidden">
                  <thead>
                    <tr className="bg-coral-600">
                      <th className="px-6 py-5 text-left text-sm font-bold text-white uppercase tracking-wider border-r border-white border-opacity-20">
                        Category
                      </th>
                      <th className="px-6 py-5 text-left text-sm font-bold text-white uppercase tracking-wider border-r border-white border-opacity-20">
                        Problem
                      </th>
                      <th className="px-6 py-5 text-left text-sm font-bold text-white uppercase tracking-wider border-r border-white border-opacity-20">
                        Rocket Flow Solution
                      </th>
                      <th className="px-6 py-5 text-left text-sm font-bold text-white uppercase tracking-wider">
                        Impact
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="group hover:bg-coral-50 transition-all duration-300">
                      <td className="px-6 py-6 border-r border-gray-200">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-coral-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                            <BellAlertIcon className="w-6 h-6 text-white" />
                          </div>
                          <span className="font-bold text-gray-900 text-lg">Product Launches</span>
                        </div>
                      </td>
                      <td className="px-6 py-6 border-r border-gray-200">
                        <p className="text-gray-700 leading-relaxed">Manually managing chaotic pre-order inquiries</p>
                      </td>
                      <td className="px-6 py-6 border-r border-gray-200">
                        <p className="text-gray-700 leading-relaxed font-medium">Automated "Notify Me" Lists & Launch Day Broadcasts</p>
                      </td>
                      <td className="px-6 py-6">
                        <p className="text-green-600 leading-relaxed font-bold">
                          Maximizes launch day sales, reduces manual work
                        </p>
                      </td>
                    </tr>

                    <tr className="group hover:bg-orange-50 transition-all duration-300">
                      <td className="px-6 py-6 border-r border-gray-200">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                            <CurrencyDollarIcon className="w-6 h-6 text-white" />
                          </div>
                          <span className="font-bold text-gray-900 text-lg">Profitability</span>
                        </div>
                      </td>
                      <td className="px-6 py-6 border-r border-gray-200">
                        <p className="text-gray-700 leading-relaxed">Low-margin on primary gadgets, missed upsells</p>
                      </td>
                      <td className="px-6 py-6 border-r border-gray-200">
                        <p className="text-gray-700 leading-relaxed font-medium">Automated Post-Purchase Accessory Upsell Sequences</p>
                      </td>
                      <td className="px-6 py-6">
                        <p className="text-green-600 leading-relaxed font-bold">
                          Increases Average Order Value (AOV) & profit
                        </p>
                      </td>
                    </tr>

                    <tr className="group hover:bg-green-50 transition-all duration-300">
                      <td className="px-6 py-6 border-r border-gray-200">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                            <ArchiveBoxIcon className="w-6 h-6 text-white" />
                          </div>
                          <span className="font-bold text-gray-900 text-lg">Sales Recovery</span>
                        </div>
                      </td>
                      <td className="px-6 py-6 border-r border-gray-200">
                        <p className="text-gray-700 leading-relaxed">Losing sales on out-of-stock items</p>
                      </td>
                      <td className="px-6 py-6 border-r border-gray-200">
                        <p className="text-gray-700 leading-relaxed font-medium">Automated "Back-in-Stock" Notifications</p>
                      </td>
                      <td className="px-6 py-6">
                        <p className="text-green-600 leading-relaxed font-bold">
                          Recaptures lost revenue, improves customer loyalty
                        </p>
                      </td>
                    </tr>

                    <tr className="group hover:bg-teal-50 transition-all duration-300">
                      <td className="px-6 py-6 border-r border-gray-200">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                            <PhoneIcon className="w-6 h-6 text-white" />
                          </div>
                          <span className="font-bold text-gray-900 text-lg">Customer Support</span>
                        </div>
                      </td>
                      <td className="px-6 py-6 border-r border-gray-200">
                        <p className="text-gray-700 leading-relaxed">Repetitive technical & policy questions</p>
                      </td>
                      <td className="px-6 py-6 border-r border-gray-200">
                        <p className="text-gray-700 leading-relaxed font-medium">24/7 AI Assistant for Specs, Warranty, EMI queries</p>
                      </td>
                      <td className="px-6 py-6">
                        <p className="text-green-600 leading-relaxed font-bold">
                          Saves expert staff time, provides instant answers
                        </p>
                      </td>
                    </tr>

                    <tr className="group hover:bg-indigo-50 transition-all duration-300">
                      <td className="px-6 py-6 border-r border-gray-200">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                            <ShieldCheckIcon className="w-6 h-6 text-white" />
                          </div>
                          <span className="font-bold text-gray-900 text-lg">Customer Trust</span>
                        </div>
                      </td>
                      <td className="px-6 py-6 border-r border-gray-200">
                        <p className="text-gray-700 leading-relaxed">Anxiety and support tickets from pre-order customers</p>
                      </td>
                      <td className="px-6 py-6 border-r border-gray-200">
                        <p className="text-gray-700 leading-relaxed font-medium">Proactive Pre-Order & Shipping Status Updates via SMS</p>
                      </td>
                      <td className="px-6 py-6">
                        <p className="text-green-600 leading-relaxed font-bold">
                          Builds trust, reduces support load
                        </p>
                      </td>
                    </tr>

                    <tr className="group hover:bg-blue-50 transition-all duration-300">
                      <td className="px-6 py-6 border-r border-gray-200">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                            <TagIcon className="w-6 h-6 text-white" />
                          </div>
                          <span className="font-bold text-gray-900 text-lg">Marketing</span>
                        </div>
                      </td>
                      <td className="px-6 py-6 border-r border-gray-200">
                        <p className="text-gray-700 leading-relaxed">Generic marketing to a diverse tech audience</p>
                      </td>
                      <td className="px-6 py-6 border-r border-gray-200">
                        <p className="text-gray-700 leading-relaxed font-medium">Smart Segmentation by Brand & Product Preference</p>
                      </td>
                      <td className="px-6 py-6">
                        <p className="text-green-600 leading-relaxed font-bold">
                          Higher ROI on targeted campaigns & upgrade offers
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Container>
        </Section>

        {/* Case Studies */}
        <Section className="py-20 bg-gray-50">
          <Container>
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-gray-900 mb-4">
                Success Stories from
                <span className="text-coral-600"> Tech Retailers</span>
              </h2>
              <p className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-gray-600 max-w-3xl mx-auto">
                Real results from real gadget shops
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-5 sm:gap-6">
              {successStories.map((study, index) => (
                <Card
                  key={index}
                  animationDelay={index * 0.15}
                  className="card-hover border-2 border-coral-100"
                  padding="lg"
                >
                  {/* Company Header */}
                  <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-100">
                    <div className="w-20 h-20 bg-coral-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      {study.company}
                    </div>
                    <div>
                      <h3 className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-bold text-gray-900 mb-1">{study.name}</h3>
                      <div className="text-coral-600 font-semibold">{study.industry}</div>
                    </div>
                  </div>

                  {/* Challenge */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="font-bold text-gray-900 uppercase text-sm tracking-wider">Challenge</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-coral-500 rounded-full"></div>
                      <span className="font-bold text-gray-900 uppercase text-sm tracking-wider">Solution</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                  </div>

                  {/* Results */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="font-bold text-gray-900 uppercase text-sm tracking-wider">Results</span>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-green-50 rounded-xl p-4 border border-green-100">
                          <div className="text-2xl">✓</div>
                          <span className="text-gray-900 font-semibold">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section className="py-24 bg-coral-600 relative overflow-hidden">
          {/* Animated Background Patterns */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-20 left-20 w-64 h-64 border-4 border-white rounded-full animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-80 h-80 border-4 border-white rounded-full -rotate-12 animate-pulse animation-delay-2000"></div>
            </div>
          </div>

          <Container className="relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center px-6 py-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full mb-8">
                <BuildingStorefrontIcon className="w-6 h-6 text-black mr-2" />
                <span className="text-black font-semibold">For Gadget Retailers</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
                Ready to Dominate
                <br />
                the Tech Market?
              </h2>
              
              <p className="text-xl md:text-2xl text-white text-opacity-90 mb-12 leading-relaxed">
                Join hundreds of successful gadget retailers in Bangladesh who have transformed their businesses 
                with RocketFlow's automated sales and marketing solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Button className="bg-gradient-to-r from-coral-600 to-red-600 hover:from-coral-700 hover:to-red-700 text-white px-12 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  <PlayIcon className="w-5 h-5" />
                  Start Your 7-Day Free Trial
                </Button>
                <Button className="bg-transparent border-3 border-white text-white hover:bg-white hover:text-coral-700 px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300">
                  Schedule a Demo
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-8 text-white text-opacity-90">
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon className="w-6 h-6" />
                  <span>Money-back guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="w-6 h-6" />
                  <span>24/7 support included</span>
                </div>
                <div className="flex items-center gap-2">
                  <RocketLaunchIcon className="w-6 h-6" />
                  <span>Setup in 24 hours</span>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <Footer />
      </div>
    </>
  );
}
