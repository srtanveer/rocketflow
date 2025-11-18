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
  GlobeAltIcon
} from '@heroicons/react/24/outline';

export default function OrganicProductsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredService, setHoveredService] = useState(null);
  const [showAllBenefits, setShowAllBenefits] = useState(false);

  const solutions = [
    {
      id: 'bulk-sms',
      title: 'Bulk SMS Campaigns',
      description: 'Reach thousands of customers instantly with personalized SMS notifications about new organic arrivals, special offers, and health tips.',
      icon: DevicePhoneMobileIcon,
      gradient: 'from-green-400 via-emerald-500 to-teal-600',
      features: ['Order confirmations', 'Promotional campaigns', 'Delivery updates', 'Seasonal offers'],
      stats: { value: '98%', label: 'Delivery Rate' }
    },
    {
      id: 'auto-chat',
      title: 'AI-Powered Chat Assistant',
      description: '24/7 intelligent chatbot to answer product queries, suggest organic alternatives, and guide customers through their wellness journey.',
      icon: ChatBubbleLeftRightIcon,
      gradient: 'from-emerald-400 via-green-500 to-lime-600',
      features: ['Product recommendations', 'Nutritional info', 'Order assistance', 'Recipe suggestions'],
      stats: { value: '24/7', label: 'Always Available' }
    },
    {
      id: 'auto-mail',
      title: 'Automated Email Marketing',
      description: 'Smart email automation for newsletters, product launches, wellness tips, and personalized recommendations based on customer preferences.',
      icon: EnvelopeIcon,
      gradient: 'from-lime-400 via-green-500 to-emerald-600',
      features: ['Welcome series', 'Cart reminders', 'Health newsletters', 'Loyalty rewards'],
      stats: { value: '85%', label: 'Open Rate' }
    },
    {
      id: 'ai-website',
      title: 'AI-Enhanced Website',
      description: 'Intelligent website with smart search, personalized product suggestions, and AI-powered content that adapts to customer behavior.',
      icon: GlobeAltIcon,
      gradient: 'from-teal-400 via-cyan-500 to-blue-600',
      features: ['Smart search', 'Personalized UX', 'SEO optimization', 'Mobile responsive'],
      stats: { value: '3x', label: 'Conversion Rate' }
    },
    {
      id: 'inventory-ai',
      title: 'Smart Inventory Management',
      description: 'AI-driven inventory tracking to ensure fresh organic products are always in stock and reduce waste through predictive analytics.',
      icon: CpuChipIcon,
      gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
      features: ['Stock predictions', 'Expiry alerts', 'Auto-reordering', 'Waste reduction'],
      stats: { value: '40%', label: 'Less Waste' }
    },
    {
      id: 'customer-insights',
      title: 'Customer Analytics Dashboard',
      description: 'Comprehensive analytics to understand buying patterns, popular products, and customer health preferences for better decision making.',
      icon: ChartBarIcon,
      gradient: 'from-blue-400 via-indigo-500 to-purple-600',
      features: ['Purchase trends', 'Customer segments', 'Product analytics', 'Revenue insights'],
      stats: { value: '360°', label: 'Customer View' }
    }
  ];

  const benefits = [
    {
      icon: ShoppingCartIcon,
      title: 'Boost Sales',
      description: 'Increase organic product sales by 60% with personalized recommendations and timely promotions',
      color: 'text-green-600'
    },
    {
      icon: UserGroupIcon,
      title: 'Customer Loyalty',
      description: 'Build lasting relationships with health-conscious customers through consistent engagement and trust.',
      color: 'text-emerald-600'
    },
    {
      icon: ClockIcon,
      title: 'Save Time',
      description: 'Automate repetitive tasks and focus on sourcing the best organic products for your customers',
      color: 'text-teal-600'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Trust & Transparency',
      description: 'Share product origin, certifications, and farming practices to build customer confidence',
      color: 'text-lime-600'
    }
  ];

  const successMetrics = [
    { number: '2,500+', label: 'Daily SMS Sent', icon: DevicePhoneMobileIcon },
    { number: '95%', label: 'Customer Satisfaction', icon: HeartIcon },
    { number: '10K+', label: 'Monthly Visitors', icon: GlobeAltIcon },
    { number: '24/7', label: 'AI Support', icon: BoltIcon }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Owner, Green Harvest Organics',
      content: 'The automated SMS campaigns have been a game-changer! Our customers love getting updates about fresh arrivals and seasonal produce. Sales increased by 70% in just 3 months.',
      avatar: 'PS',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      role: 'Founder, Nature\'s Basket',
      content: 'The AI chatbot handles customer queries brilliantly - from product recommendations to nutritional information. It\'s like having a knowledgeable assistant available 24/7.',
      avatar: 'RK',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Navbar />
      
      {/* Hero Section with Organic Theme */}
      <Section className="pt-20 sm:pt-24 pb-12 sm:pb-16 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-6">
                <HeartIcon className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-green-800 font-semibold text-sm">100% Organic & Natural</span>
              </div>
              
              <h1 className="text-[2.5rem] leading-tight sm:text-[3rem] sm:leading-tight lg:text-[4rem] lg:leading-tight font-bold mb-2 sm:mb-3 lg:mb-4">
                <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Grow Your
                </span>
                <br />
                <span className="text-gray-900">Organic Business</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Empower your organic products business with cutting-edge digital solutions. From automated customer engagement to AI-powered insights, we help you reach health-conscious customers and grow sustainably.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border-2 border-green-100">
                  <div className="text-3xl font-bold text-green-600">60%</div>
                  <div className="text-xs text-gray-600 mt-1">Sales Increase</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border-2 border-emerald-100">
                  <div className="text-3xl font-bold text-emerald-600">24/7</div>
                  <div className="text-xs text-gray-600 mt-1">AI Support</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border-2 border-teal-100">
                  <div className="text-3xl font-bold text-teal-600">5K+</div>
                  <div className="text-xs text-gray-600 mt-1">Happy Customers</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-sm sm:text-base shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Start Growing Today
                </Button>
                <button className="bg-white border-2 border-green-600 text-green-700 hover:bg-green-50 px-8 py-4 rounded-xl font-semibold text-sm sm:text-base transition-all hover:shadow-md">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 shadow-2xl border-4 border-white">
                {/* Feature Cards Floating */}
                <div className="space-y-4">
                  <Card animationDelay={0} className="!bg-white">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                        <ChatBubbleLeftRightIcon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">AI Chat Assistant</div>
                        <div className="text-sm text-gray-600">Instant customer support</div>
                      </div>
                      <div className="text-green-600 font-bold">Active</div>
                    </div>
                  </Card>

                  <Card animationDelay={0.1} className="!bg-white">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                        <DevicePhoneMobileIcon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">Bulk SMS</div>
                        <div className="text-sm text-gray-600">2,450 sent today</div>
                      </div>
                      <div className="text-emerald-600 font-bold">98%</div>
                    </div>
                  </Card>

                  <Card animationDelay={0.2} className="!bg-white">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center">
                        <EnvelopeIcon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">Email Campaign</div>
                        <div className="text-sm text-gray-600">Health tips newsletter</div>
                      </div>
                      <div className="text-teal-600 font-bold">85%</div>
                    </div>
                  </Card>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full shadow-xl font-bold transform rotate-12">
                  <div className="text-center">
                    <div className="text-2xl">🌱</div>
                    <div className="text-xs">100% Organic</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Our Solutions Section */}
      <Section className="py-12 sm:py-14 bg-white">
        <Container>
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-gray-900 mb-4">
              Digital Solutions for
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Organic Businesses</span>
            </h2>
            <p className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-gray-600 max-w-3xl mx-auto">
              Everything you need to connect with health-conscious customers and scale your organic products business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {solutions.map((solution, index) => (
              <Card
                key={solution.id}
                className={`card-hover card-shimmer relative p-8 rounded-3xl bg-white border-2 border-gray-100 shadow-lg group overflow-hidden ${
                  hoveredService === solution.id ? 'border-green-300' : ''
                }`}
                onMouseEnter={() => setHoveredService(solution.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>

                {/* Icon */}
                <div className={`relative w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>

                {/* Stats Badge */}
                <div className="absolute top-6 right-6 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                  {solution.stats.value}
                </div>

                {/* Content */}
                <h3 className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-bold text-gray-900 mb-4 relative z-10">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                  {solution.description}
                </p>

                {/* Features */}
                <div className="space-y-3 relative z-10">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <div className={`w-2 h-2 bg-gradient-to-r ${solution.gradient} rounded-full`}></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Stats Label */}
                <div className="mt-6 pt-6 border-t border-gray-100 relative z-10">
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{solution.stats.label}</div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Benefits Section with Organic Vibe */}
      <Section className="py-12 sm:py-14 bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100 relative overflow-hidden">
        {/* Decorative Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 border-4 border-green-300 rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 border-4 border-emerald-300 rounded-full"></div>
        </div>

        <Container className="relative z-10">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-gray-900 mb-4">
              Why Organic Businesses
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Choose Us</span>
            </h2>
            <p className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-gray-600 max-w-3xl mx-auto">
              Join hundreds of organic product retailers who've transformed their customer engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                animationDelay={index * 0.1}
                className="border-2 border-transparent hover:border-green-200"
              >
                <div className={`w-16 h-16 ${benefit.color} bg-opacity-10 rounded-2xl flex items-center justify-center mb-6`}>
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <h3 className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>

          {/* Success Metrics */}
          <div className="mt-20 bg-white rounded-3xl p-12 shadow-2xl border-4 border-green-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
              {successMetrics.map((metric, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <metric.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{metric.number}</div>
                  <div className="text-sm text-gray-600 font-semibold">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
      {/* Provide More Section */}
      <ProvideMoreSection />
          {/* Summary of Benefits - Table Format */}
          <div className="mt-16 max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 px-4">
                Transform Your Business with
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Rocket Flow</span>
              </h3>
              <p className="text-gray-600 text-base sm:text-lg px-4">See exactly how we solve your biggest challenges</p>
            </div>

            {/* Mobile Card View */}
            <div className="block lg:hidden space-y-4 px-4">
              {/* Sales & Orders Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ShoppingCartIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Sales & Orders</h4>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">Manual, error-prone order taking from DMs</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-medium">Automated Ordering Assistant in Messenger</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">Faster sales, fewer errors, increased revenue</p>
                  </div>
                </div>
              </div>

              {/* Customer Retention Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <UserGroupIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Customer Retention</h4>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">Low rate of repeat purchases</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-medium">Automated Re-order Reminders (e.g., for honey, oil)</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">Massively boosts customer lifetime value</p>
                  </div>
                </div>
              </div>

              {/* Remaining cards - shown only when expanded */}
              {showAllBenefits && (
                <>
              {/* Customer Service Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Customer Service</h4>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">Repetitive questions about price, delivery, benefits</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-medium">24/7 AI-Powered Product Expert & FAQ Handler</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">Saves hours daily, builds customer trust</p>
                  </div>
                </div>
              </div>

              {/* Marketing Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-lime-600 to-green-600 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <SparklesIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Marketing</h4>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">Announcing new stock or offers manually</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-medium">Targeted "New Stock" Alerts & Promotional Broadcasts</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">Sells inventory faster, higher campaign ROI</p>
                  </div>
                </div>
              </div>

              {/* Operations Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-green-700 to-emerald-700 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TruckIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Operations</h4>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">Customers constantly asking "Where's my order?"</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-medium">Automated Order & Delivery Status Updates via SMS</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">Reduces support queries, improves satisfaction</p>
                  </div>
                </div>
              </div>

              {/* Business Growth Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-emerald-700 to-green-700 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ChartBarIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Business Growth</h4>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">Difficulty managing B2B or subscriptions</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-medium">Streamlined Forms for Bulk Orders & Veggie Boxes</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">Opens new, recurring revenue channels</p>
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
                    className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
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
                  <tr className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
                    <th className="px-6 py-5 text-left text-sm font-bold text-white uppercase tracking-wider border-r border-green-400">
                      Category
                    </th>
                    <th className="px-6 py-5 text-left text-sm font-bold text-white uppercase tracking-wider border-r border-green-400">
                      Problem
                    </th>
                    <th className="px-6 py-5 text-left text-sm font-bold text-white uppercase tracking-wider border-r border-green-400">
                      Rocket Flow Solution
                    </th>
                    <th className="px-6 py-5 text-left text-sm font-bold text-white uppercase tracking-wider">
                      Impact
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {/* Sales & Orders */}
                  <tr className="group hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-300">
                    <td className="px-6 py-6 border-r border-gray-200">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                          <ShoppingCartIcon className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-bold text-gray-900 text-lg">Sales & Orders</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed">Manual, error-prone order taking from DMs</p>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-medium">Automated Ordering Assistant in Messenger</p>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-green-600 leading-relaxed font-bold">
                        Faster sales, fewer errors, increased revenue
                      </p>
                    </td>
                  </tr>

                  {/* Customer Retention */}
                  <tr className="group hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 transition-all duration-300">
                    <td className="px-6 py-6 border-r border-gray-200">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                          <UserGroupIcon className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-bold text-gray-900 text-lg">Customer Retention</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed">Low rate of repeat purchases</p>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-medium">Automated Re-order Reminders (e.g., for honey, oil)</p>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-green-600 leading-relaxed font-bold">
                        Massively boosts customer lifetime value
                      </p>
                    </td>
                  </tr>

                  {/* Customer Service */}
                  <tr className="group hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 transition-all duration-300">
                    <td className="px-6 py-6 border-r border-gray-200">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                          <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-bold text-gray-900 text-lg">Customer Service</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed">Repetitive questions about price, delivery, benefits</p>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-medium">24/7 AI-Powered Product Expert & FAQ Handler</p>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-green-600 leading-relaxed font-bold">
                        Saves hours daily, builds customer trust
                      </p>
                    </td>
                  </tr>

                  {/* Marketing */}
                  <tr className="group hover:bg-gradient-to-r hover:from-lime-50 hover:to-green-50 transition-all duration-300">
                    <td className="px-6 py-6 border-r border-gray-200">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-lime-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                          <SparklesIcon className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-bold text-gray-900 text-lg">Marketing</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed">Announcing new stock or offers manually</p>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-medium">Targeted "New Stock" Alerts & Promotional Broadcasts</p>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-green-600 leading-relaxed font-bold">
                        Sells inventory faster, higher campaign ROI
                      </p>
                    </td>
                  </tr>

                  {/* Operations */}
                  <tr className="group hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-300">
                    <td className="px-6 py-6 border-r border-gray-200">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-emerald-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                          <TruckIcon className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-bold text-gray-900 text-lg">Operations</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed">Customers constantly asking "Where's my order?"</p>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-medium">Automated Order & Delivery Status Updates via SMS</p>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-green-600 leading-relaxed font-bold">
                        Reduces support queries, improves satisfaction
                      </p>
                    </td>
                  </tr>

                  {/* Business Growth */}
                  <tr className="group hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 transition-all duration-300">
                    <td className="px-6 py-6 border-r border-gray-200">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                          <ChartBarIcon className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-bold text-gray-900 text-lg">Business Growth</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed">Difficulty managing B2B or subscriptions</p>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-medium">Streamlined Forms for Bulk Orders & Veggie Boxes</p>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-green-600 leading-relaxed font-bold">
                        Opens new, recurring revenue channels
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section className="py-12 sm:py-14 bg-white">
        <Container>
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-gray-900 mb-4">
              Success Stories from
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Organic Entrepreneurs</span>
            </h2>
            <p className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-gray-600 max-w-3xl mx-auto">
              Real results from real organic businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-5 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-green-100 relative overflow-hidden group"
              >
                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full opacity-20 transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>

                {/* Stars */}
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 text-lg italic mb-8 leading-relaxed relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-16 sm:py-18 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full mix-blend-overlay animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-white rounded-full mix-blend-overlay animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full mix-blend-overlay animate-blob animation-delay-4000"></div>
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
              Organic Business?
            </h2>
            
            <p className="text-xl md:text-2xl text-white text-opacity-90 mb-12 leading-relaxed">
              Join 500+ organic businesses already using our platform to reach health-conscious customers
              and boost sales by 60%
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-white text-green-700 hover:bg-gray-100 px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                Get Started Free
              </Button>
              <Button className="border-3 border-white text-white hover:bg-white hover:text-green-700 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 backdrop-blur-sm bg-white bg-opacity-10">
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
  );
}
