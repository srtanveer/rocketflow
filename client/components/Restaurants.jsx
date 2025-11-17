'use client'

import { useState } from "react";
import { Navbar, Footer, Button, Card, Section, Container, ProvideMoreSection } from '.';
import {
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  DevicePhoneMobileIcon,
  SparklesIcon,
  BoltIcon,
  ShoppingCartIcon,
  TruckIcon,
  UserGroupIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  HeartIcon,
  CpuChipIcon,
  ClockIcon,
  GlobeAltIcon,
  CalendarIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline';

export default function Restaurants() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);
  const [showAllBenefits, setShowAllBenefits] = useState(false);

  const features = [
    {
      title: 'Bulk SMS Campaigns',
      description: 'Instant customer engagement',
      icon: DevicePhoneMobileIcon,
      stats: ['Reservation reminders', 'Promotional campaigns', 'Event notifications']
    },
    {
      title: 'AI Chat Assistant',
      description: '24/7 intelligent support',
      icon: ChatBubbleLeftRightIcon,
      stats: ['Menu recommendations', 'Reservation assistance', 'Dietary information']
    },
    {
      title: 'Email Marketing',
      description: 'Automated campaigns',
      icon: EnvelopeIcon,
      stats: ['Welcome series', 'Event invites', 'Menu updates']
    },
    {
      title: 'Smart Analytics',
      description: 'Customer insights dashboard',
      icon: ChartBarIcon,
      stats: ['Dining trends', 'Revenue insights', 'Customer segments']
    }
  ];

  const solutions = [
    {
      id: 'bulk-sms',
      title: 'Bulk SMS Campaigns',
      description: 'Reach customers instantly with personalized SMS about special offers, new menu items, and exclusive dining promotions.',
      icon: DevicePhoneMobileIcon,
      gradient: 'from-primary via-primary-600 to-primary-700',
      features: ['Reservation reminders', 'Promotional campaigns', 'Event notifications', 'Special offers'],
      stats: { value: '98%', label: 'Delivery Rate' }
    },
    {
      id: 'auto-chat',
      title: 'AI-Powered Chat Assistant',
      description: '24/7 intelligent chatbot to answer menu queries, take reservations, suggest pairings, and handle customer inquiries.',
      icon: ChatBubbleLeftRightIcon,
      gradient: 'from-primary-600 via-primary-700 to-secondary',
      features: ['Menu recommendations', 'Reservation assistance', 'Dietary info', 'Hours & directions'],
      stats: { value: '24/7', label: 'Always Available' }
    },
    {
      id: 'auto-mail',
      title: 'Automated Email Marketing',
      description: 'Smart email automation for newsletters, event invitations, seasonal menus, and personalized offers based on dining preferences.',
      icon: EnvelopeIcon,
      gradient: 'from-secondary via-secondary-600 to-primary',
      features: ['Welcome series', 'Event invites', 'Menu updates', 'Loyalty rewards'],
      stats: { value: '85%', label: 'Open Rate' }
    },
    {
      id: 'ai-website',
      title: 'AI-Enhanced Website',
      description: 'Intelligent website with online reservations, smart menu display, and AI-powered content that adapts to customer behavior.',
      icon: GlobeAltIcon,
      gradient: 'from-primary-dark via-primary-800 to-primary-600',
      features: ['Online booking', 'Interactive menu', 'SEO optimization', 'Mobile responsive'],
      stats: { value: '3x', label: 'Conversion Rate' }
    },
    {
      id: 'inventory-ai',
      title: 'Smart Table Management',
      description: 'AI-driven table optimization and reservation tracking to maximize seating capacity and reduce wait times.',
      icon: CpuChipIcon,
      gradient: 'from-secondary-600 via-primary-500 to-primary-700',
      features: ['Smart seating', 'Wait time predictions', 'Capacity optimization', 'No-show reduction'],
      stats: { value: '40%', label: 'More Bookings' }
    },
    {
      id: 'customer-insights',
      title: 'Customer Analytics Dashboard',
      description: 'Comprehensive analytics to understand dining patterns, popular dishes, and customer preferences for better decision making.',
      icon: ChartBarIcon,
      gradient: 'from-primary via-secondary to-primary-700',
      features: ['Dining trends', 'Customer segments', 'Menu analytics', 'Revenue insights'],
      stats: { value: '360°', label: 'Customer View' }
    }
  ];

  const benefits = [
    {
      icon: ShoppingCartIcon,
      title: 'Boost Revenue',
      description: 'Increase restaurant sales by 60% with personalized recommendations and timely promotions',
      metric: '60% sales increase',
      color: 'primary'
    },
    {
      icon: UserGroupIcon,
      title: 'Customer Loyalty',
      description: 'Build lasting relationships with diners through consistent engagement and exceptional service',
      metric: '95% satisfaction',
      color: 'secondary'
    },
    {
      icon: ClockIcon,
      title: 'Save Time',
      description: 'Automate reservations, orders, and customer service to focus on creating amazing dining experiences',
      metric: '24/7 automation',
      color: 'primary'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Trust & Quality',
      description: 'Share menu details, ingredient sourcing, and chef expertise to build customer confidence',
      metric: 'Verified quality',
      color: 'secondary'
    }
  ];

  const successMetrics = [
    { number: '2,500+', label: 'Daily SMS Sent', icon: DevicePhoneMobileIcon },
    { number: '95%', label: 'Customer Satisfaction', icon: HeartIcon },
    { number: '10K+', label: 'Monthly Diners', icon: GlobeAltIcon },
    { number: '24/7', label: 'AI Support', icon: BoltIcon }
  ];

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      role: 'Owner, La Cocina Bistro',
      company: 'MR',
      industry: 'Fine Dining Restaurant',
      challenge: 'The automated SMS campaigns have been a game-changer! Our customers love getting updates about daily specials and events.',
      solution: 'Implemented automated SMS campaigns, AI chat assistant, and smart table management system',
      results: ['70% increase in reservations in 3 months', '98% SMS delivery rate', '95% customer satisfaction score']
    },
    {
      name: 'James Chen',
      role: 'Founder, Dragon Palace',
      company: 'JC',
      industry: 'Asian Fusion Restaurant',
      challenge: 'The AI chatbot handles reservation inquiries brilliantly - from menu questions to dietary restrictions.',
      solution: 'Deployed AI chatbot, email marketing automation, and customer analytics dashboard',
      results: ['24/7 instant customer support', '85% email open rate', '40% more high-value bookings']
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "RocketFlow Restaurant Marketing Automation",
            "description": "Digital solutions for restaurants including SMS campaigns, AI chat assistants, and customer analytics",
            "provider": {
              "@type": "Organization",
              "name": "RocketFlow"
            }
          })
        }}
      />

      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        {/* Hero Section - Restaurant Theme */}
        <Section className="pt-32 pb-24 relative overflow-hidden">
          {/* Decorative Background Pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-20 left-20 w-64 h-64 border-4 border-primary-200 rounded-full"></div>
              <div className="absolute bottom-20 right-20 w-80 h-80 border-4 border-secondary-200 rounded-full -rotate-12"></div>
              <div className="absolute top-1/2 left-1/2 w-72 h-72 border-4 border-primary-300 rounded-full rotate-12"></div>
            </div>
          </div>

          <Container className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center px-5 py-2 bg-primary-100 rounded-full mb-6 border border-primary-200">
                  <HeartIcon className="w-5 h-5 text-primary-600 mr-2" />
                  <span className="text-primary-900 font-semibold text-sm">Restaurant Growth Solutions</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                  <span className="text-gray-900">Grow Your</span>
                  <br />
                  <span className="text-primary">
                    Restaurant Business
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Empower your restaurant with cutting-edge digital solutions. From automated customer engagement 
                  to AI-powered insights, we help you reach more diners and grow sustainably.
                </p>

                {/* Key Highlights */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ShoppingCartIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">60% Revenue</div>
                      <div className="text-sm text-gray-600">Sales increase</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ChatBubbleLeftRightIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">24/7 Support</div>
                      <div className="text-sm text-gray-600">AI-powered</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <UserGroupIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">10K+ Diners</div>
                      <div className="text-sm text-gray-600">Monthly reach</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-secondary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <DevicePhoneMobileIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">2.5K+ SMS</div>
                      <div className="text-sm text-gray-600">Daily campaigns</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-primary hover:bg-primary-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                    Start Growing Today
                  </Button>
                  <Button className="bg-primary hover:bg-primary-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                    Watch Demo
                  </Button>
                </div>
              </div>

              {/* Right Visual - Success Dashboard */}
              <div className="relative">
                <div className="relative">
                  {/* Dashboard Cards Stack */}
                  <div className="space-y-4">
                    {/* Top Card - Analytics */}
                    <Card animationDelay={0} className="!bg-primary !text-black">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <div className="text-sm opacity-80 mb-1">Monthly Reservations</div>
                          <div className="text-4xl font-bold">1.2K+</div>
                        </div>
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                          <CalendarIcon className="w-8 h-8" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-white bg-opacity-20 rounded-full h-2">
                          <div className="bg-white rounded-full h-2 w-3/4"></div>
                        </div>
                        <span className="text-sm font-semibold">+60%</span>
                      </div>
                    </Card>

                    {/* Middle Cards - Side by Side */}
                    <div className="grid grid-cols-2 gap-4">
                      <Card animationDelay={0.1} className="border-2 border-primary-100">
                        <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mb-4">
                          <DevicePhoneMobileIcon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900 mb-1">98%</div>
                        <div className="text-sm text-gray-600">SMS Delivered</div>
                      </Card>
                      <Card animationDelay={0.15} className="border-2 border-secondary-100">
                        <div className="w-12 h-12 bg-secondary-500 rounded-xl flex items-center justify-center mb-4">
                          <HeartIcon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900 mb-1">95%</div>
                        <div className="text-sm text-gray-600">Satisfaction</div>
                      </Card>
                    </div>

                    {/* Bottom Card - Activity */}
                    <Card animationDelay={0.2} className="border-2 border-primary-100">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                          AI
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-gray-900">Chat Assistant Active</div>
                          <div className="text-sm text-gray-600">Handling 45 reservations now</div>
                        </div>
                        <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                          Live
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-8 -right-8 bg-primary text-white px-6 py-3 rounded-full shadow-2xl font-bold text-sm transform rotate-6 hover:rotate-0 transition-transform duration-300">
                    🍽️ Top Rated
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Features Showcase - Interactive Cards */}
        <Section className="py-20 bg-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Complete Suite for
                <span className="text-primary"> Restaurants</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to connect with diners and scale your restaurant business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  animationDelay={index * 0.1}
                  className={`cursor-pointer transition-all duration-300 border-2 ${
                    activeFeature === index
                      ? 'bg-primary-50 border-primary-300 scale-105'
                      : 'border-gray-200 hover:border-primary-200'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="w-14 h-14 bg-primary-500 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.stats.map((stat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Digital Solutions for
              <span className="text-primary"> Modern Restaurants</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive automation for every aspect of your restaurant business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card
                key={solution.id}
                className={`relative p-8 rounded-3xl bg-white border-2 shadow-xl hover:shadow-2xl transition-all duration-500 transform overflow-hidden group ${
                  hoveredService === solution.id 
                    ? 'border-primary-300 scale-105 -translate-y-2' 
                    : 'border-gray-200 hover:border-primary-200'
                }`}
                onMouseEnter={() => setHoveredService(solution.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Stats Badge */}
                <div className="absolute top-6 right-6 bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full text-xs font-bold shadow-md">
                  {solution.stats.value}
                </div>

                {/* Icon */}
                <div className="relative w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                  {solution.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 relative z-10">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
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
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Restaurants
              <span className="text-primary"> Choose Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of restaurants who've transformed their customer engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                animationDelay={index * 0.1}
                className="bg-primary-50 border-2 border-primary-100"
              >
                <div className={`w-16 h-16 bg-${benefit.color}-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
                <div className={`inline-block px-4 py-2 bg-${benefit.color}-100 text-${benefit.color}-700 rounded-full text-sm font-bold`}>
                  {benefit.metric}
                </div>
              </Card>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="bg-primary rounded-3xl p-12 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {successMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="w-8 h-8 text-black" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{metric.number}</div>
                  <div className="text-white text-opacity-90 font-semibold">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary of Benefits */}
          <div className="mt-20">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
                Transform Every <span className="text-primary">Challenge</span>
              </h3>
              <p className="text-base sm:text-lg text-gray-600 px-4">See exactly how we solve your biggest challenges</p>
            </div>

            {/* Mobile Card View */}
            <div className="block lg:hidden space-y-4 px-4">
              {/* Revenue & Orders Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-primary p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ShoppingCartIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-lg">Revenue & Orders</h4>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-gray-700 text-sm">High commissions from delivery apps</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                    <p className="text-gray-700 text-sm font-medium">Automated Direct Ordering via Messenger</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-green-600 text-sm font-bold">Increased profit margins</p>
                  </div>
                </div>
              </div>

              {/* Reservations Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-secondary p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CalendarIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-lg">Reservations</h4>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-gray-700 text-sm">Costly no-shows</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                    <p className="text-gray-700 text-sm font-medium">Automated SMS Reminders with Confirmation</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-green-600 text-sm font-bold">Slashes no-show rates</p>
                  </div>
                </div>
              </div>

              {/* Remaining cards - shown only when expanded */}
              {showAllBenefits && (
                <>
              {/* Customer Service Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-lg">Customer Service</h4>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-gray-700 text-sm">Staff overwhelmed with calls/DMs</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                    <p className="text-gray-700 text-sm font-medium">24/7 AI-Powered Assistant</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-green-600 text-sm font-bold">Frees up staff</p>
                  </div>
                </div>
              </div>

              {/* Marketing Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <SparklesIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-lg">Marketing</h4>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-gray-700 text-sm">Empty tables on slow weekdays</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                    <p className="text-gray-700 text-sm font-medium">Targeted Midweek Promotions</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-green-600 text-sm font-bold">Drives footfall during off-peak</p>
                  </div>
                </div>
              </div>

              {/* Customer Loyalty Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-red-600 to-rose-600 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <HeartIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-lg">Customer Loyalty</h4>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-gray-700 text-sm">Low rate of repeat visits</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                    <p className="text-gray-700 text-sm font-medium">Automated Post-Dining Feedback & Offers</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-green-600 text-sm font-bold">Increases retention & LTV</p>
                  </div>
                </div>
              </div>

              {/* High-Value Bookings Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ShoppingBagIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-lg">High-Value Bookings</h4>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-gray-700 text-sm">Disorganized party/catering inquiries</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                    <p className="text-gray-700 text-sm font-medium">Streamlined Forms for Events</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-green-600 text-sm font-bold">Captures more high-ticket events</p>
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
                    className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
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
                  <tr className="bg-primary">
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
                  {/* Revenue & Orders */}
                  <tr className="group hover:bg-primary-50 transition-all duration-300">
                    <td className="px-6 py-6 border-r border-gray-200">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                          <ShoppingCartIcon className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-bold text-gray-900 text-lg">Revenue & Orders</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed">High commissions from delivery apps</p>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-medium">Automated Direct Ordering via Messenger</p>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-green-600 leading-relaxed font-bold">
                        Increased profit margins
                      </p>
                    </td>
                  </tr>

                  {/* Reservations */}
                  <tr className="group hover:bg-secondary-50 transition-all duration-300">
                    <td className="px-6 py-6 border-r border-gray-200">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                          <CalendarIcon className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-bold text-gray-900 text-lg">Reservations</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed">Costly no-shows</p>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-medium">Automated SMS Reminders with Confirmation</p>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-green-600 leading-relaxed font-bold">
                        Slashes no-show rates
                      </p>
                    </td>
                  </tr>

                  {/* Customer Service */}
                  <tr className="group hover:bg-primary-50 transition-all duration-300">
                    <td className="px-6 py-6 border-r border-gray-200">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                          <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-bold text-gray-900 text-lg">Customer Service</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed">Staff overwhelmed with calls/DMs</p>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-medium">24/7 AI-Powered Assistant</p>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-green-600 leading-relaxed font-bold">
                        Frees up staff
                      </p>
                    </td>
                  </tr>

                  {/* Marketing */}
                  <tr className="group hover:bg-secondary-50 transition-all duration-300">
                    <td className="px-6 py-6 border-r border-gray-200">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-secondary-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                          <SparklesIcon className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-bold text-gray-900 text-lg">Marketing</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed">Empty tables on slow weekdays</p>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-medium">Targeted Midweek Promotions</p>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-green-600 leading-relaxed font-bold">
                        Drives footfall during off-peak
                      </p>
                    </td>
                  </tr>

                  {/* Customer Loyalty */}
                  <tr className="group hover:bg-primary-50 transition-all duration-300">
                    <td className="px-6 py-6 border-r border-gray-200">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                          <HeartIcon className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-bold text-gray-900 text-lg">Customer Loyalty</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed">Low rate of repeat visits</p>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-medium">Automated Post-Dining Feedback & Offers</p>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-green-600 leading-relaxed font-bold">
                        Increases retention & LTV
                      </p>
                    </td>
                  </tr>

                  {/* High-Value Bookings */}
                  <tr className="group hover:bg-secondary-50 transition-all duration-300">
                    <td className="px-6 py-6 border-r border-gray-200">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-secondary-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                          <ShoppingBagIcon className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-bold text-gray-900 text-lg">High-Value Bookings</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed">Disorganized party/catering inquiries</p>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-medium">Streamlined Forms for Events</p>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-secondary-700 leading-relaxed font-bold">
                        Captures more high-ticket events
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories from
              <span className="text-primary"> Restaurant Owners</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real restaurants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((study, index) => (
              <Card
                key={index}
                animationDelay={index * 0.15}
                className="border-2 border-primary-100"
                padding="lg"
              >
                {/* Company Header */}
                <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-100">
                  <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    {study.company.split(' ').map(w => w[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{study.company}</h3>
                    <div className="text-primary font-semibold">{study.industry}</div>
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
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
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
      <Section className="py-24 bg-primary relative overflow-hidden">
        {/* Animated Background Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-64 h-64 border-4 border-white transform rotate-45 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 border-4 border-white transform -rotate-12 animate-pulse animation-delay-2000"></div>
          </div>
        </div>

        <Container className="relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full mb-8">
              <SparklesIcon className="w-6 h-6 text-black mr-2" />
              <span className="text-black font-semibold">Limited Time Offer</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
              Ready to Grow Your
              <br />
              Restaurant Business?
            </h2>

            <p className="text-xl md:text-2xl text-white text-opacity-90 mb-12 leading-relaxed">
              Join 500+ restaurants already using our platform to reach more diners
              and boost sales by 60%
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button className="border-3 border-white text-white hover:bg-white hover:text-black px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300 backdrop-blur-sm bg-white bg-opacity-10">
                Get Started Free
              </Button>
              <Button className="border-3 border-white text-white hover:bg-white hover:text-black px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300 backdrop-blur-sm bg-white bg-opacity-10">
                Schedule Demo
              </Button>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-white text-opacity-90">
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="w-6 h-6" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <BoltIcon className="w-6 h-6" />
                <span>Setup in 5 minutes</span>
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
