'use client'

import { useState } from "react";
import { Navbar, Footer, Button, Card, Section, Container, ProvideMoreSection } from '.';
import {
  ShoppingCartIcon,
  ChatBubbleLeftRightIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  CreditCardIcon,
  TruckIcon,
  ChartBarIcon,
  UserGroupIcon,
  GlobeAltIcon,
  BoltIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TagIcon,
  CubeIcon,
  ArrowTrendingUpIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function EcommercePage() {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showAllBenefits, setShowAllBenefits] = useState(false);

  const solutions = [
    {
      id: 'bulk-sms',
      title: 'Smart SMS Marketing',
      description: 'Automated SMS campaigns for cart abandonment, order updates, flash sales, and personalized promotions to boost customer engagement.',
      icon: DevicePhoneMobileIcon,
      gradient: 'from-rose-500 via-red-600 to-pink-600',
      category: 'marketing',
      features: ['Cart recovery alerts', 'Order notifications', 'Flash sale broadcasts', 'Personalized offers'],
      stats: { value: '45%', label: 'Recovery Rate' }
    },
    {
      id: 'ai-chat',
      title: 'AI Shopping Assistant',
      description: 'Intelligent chatbot for product recommendations, order tracking, returns, and 24/7 customer support with natural language understanding.',
      icon: ChatBubbleLeftRightIcon,
      gradient: 'from-red-500 via-rose-600 to-pink-600',
      category: 'automation',
      features: ['Product suggestions', 'Order tracking', 'Returns handling', 'FAQs automation'],
      stats: { value: '85%', label: 'Query Resolution' }
    },
    {
      id: 'auto-mail',
      title: 'Email Automation Suite',
      description: 'Automated email marketing for welcome series, abandoned carts, order confirmations, shipping updates, and customer retention campaigns.',
      icon: EnvelopeIcon,
      gradient: 'from-pink-500 via-rose-600 to-red-600',
      category: 'marketing',
      features: ['Welcome emails', 'Cart reminders', 'Order confirmations', 'Win-back campaigns'],
      stats: { value: '6x', label: 'ROI Increase' }
    },
    {
      id: 'payment-gateway',
      title: 'Multi-Payment Integration',
      description: 'Seamless integration with multiple payment gateways including cards, digital wallets, UPI, and Buy Now Pay Later options.',
      icon: CreditCardIcon,
      gradient: 'from-red-600 via-orange-600 to-amber-600',
      category: 'operations',
      features: ['Multiple gateways', 'Digital wallets', 'UPI payments', 'BNPL options'],
      stats: { value: '99.9%', label: 'Success Rate' }
    },
    {
      id: 'logistics',
      title: 'Smart Logistics & Shipping',
      description: 'AI-powered shipping management with real-time tracking, multi-carrier integration, and automated delivery notifications.',
      icon: TruckIcon,
      gradient: 'from-orange-500 via-red-600 to-rose-600',
      category: 'operations',
      features: ['Multi-carrier support', 'Live tracking', 'Auto notifications', 'Route optimization'],
      stats: { value: '30%', label: 'Cost Savings' }
    },
    {
      id: 'analytics',
      title: 'E-commerce Analytics Hub',
      description: 'Comprehensive analytics dashboard tracking sales, customer behavior, inventory, and marketing performance with AI insights.',
      icon: ChartBarIcon,
      gradient: 'from-rose-600 via-pink-600 to-purple-600',
      category: 'analytics',
      features: ['Sales analytics', 'Customer insights', 'Inventory reports', 'AI predictions'],
      stats: { value: '360°', label: 'Business View' }
    }
  ];

  const benefits = [
    {
      icon: ArrowTrendingUpIcon,
      title: 'Increase Sales by 3x',
      description: 'Automated marketing and AI recommendations drive more conversions',
      metric: '300% growth',
      color: 'from-red-500 to-rose-600'
    },
    {
      icon: UserGroupIcon,
      title: 'Better Customer Experience',
      description: '24/7 AI support and instant updates keep customers happy',
      metric: '95% satisfaction',
      color: 'from-rose-500 to-pink-600'
    },
    {
      icon: BoltIcon,
      title: 'Save 20 Hours/Week',
      description: 'Automation handles repetitive tasks so you can focus on growth',
      metric: '80% time saved',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Secure & Reliable',
      description: 'Bank-grade security with PCI DSS compliance',
      metric: '99.99% uptime',
      color: 'from-red-600 to-orange-600'
    }
  ];

  const features = [
    {
      title: 'Product Management',
      description: 'Easy catalog management with bulk upload, variants, and inventory sync',
      icon: CubeIcon,
      points: ['Bulk product upload', 'Variant management', 'Real-time inventory', 'SEO optimization']
    },
    {
      title: 'Customer Engagement',
      description: 'Build loyalty with personalized experiences and rewards',
      icon: SparklesIcon,
      points: ['Loyalty programs', 'Personalization', 'Review management', 'Referral system']
    },
    {
      title: 'Marketing Automation',
      description: 'Automated campaigns across email, SMS, and social media',
      icon: TagIcon,
      points: ['Email campaigns', 'SMS marketing', 'Social ads', 'Retargeting']
    },
    {
      title: 'Global Expansion',
      description: 'Multi-currency, multi-language support for worldwide selling',
      icon: GlobeAltIcon,
      points: ['Multi-currency', 'Multi-language', 'Tax compliance', 'Local payments']
    }
  ];

  const successStories = [
    {
      name: 'FashionHub Store',
      industry: 'Fashion & Apparel',
      logo: 'FH',
      bgColor: 'from-pink-500 to-rose-600',
      before: { sales: '$50K/mo', cart: '72%', support: '8hrs/day' },
      after: { sales: '$180K/mo', cart: '32%', support: '24/7 auto' },
      improvement: '+260% revenue',
      testimonial: 'RocketFlow transformed our business! The AI chatbot handles 85% of queries automatically.'
    },
    {
      name: 'TechGadgets Pro',
      industry: 'Electronics',
      logo: 'TG',
      bgColor: 'from-red-500 to-orange-600',
      before: { orders: '200/mo', recovery: '5%', time: '40hrs/wk' },
      after: { orders: '850/mo', recovery: '45%', time: '15hrs/wk' },
      improvement: '+325% orders',
      testimonial: 'Cart recovery SMS campaigns alone increased our revenue by 45%. Game changer!'
    }
  ];

  const pricingHighlights = [
    { feature: 'Unlimited products', included: true },
    { feature: 'AI chatbot & automation', included: true },
    { feature: 'SMS & Email marketing', included: true },
    { feature: 'Advanced analytics', included: true },
    { feature: 'Multi-payment support', included: true },
    { feature: '24/7 customer support', included: true }
  ];

  const categories = [
    { id: 'all', label: 'All Solutions', count: 6 },
    { id: 'marketing', label: 'Marketing', count: 2 },
    { id: 'automation', label: 'Automation', count: 1 },
    { id: 'operations', label: 'Operations', count: 2 },
    { id: 'analytics', label: 'Analytics', count: 1 }
  ];

  const filteredSolutions = activeTab === 'all' 
    ? solutions 
    : solutions.filter(s => s.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-rose-50 to-red-50">
      <Navbar />
      
      {/* Hero Section - Dynamic & Eye-catching */}
      <Section className="pt-32 pb-20 relative overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-red-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-rose-200 to-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-pink-200 to-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-red-100 to-pink-100 rounded-full mb-8 border-2 border-red-200 shadow-lg">
                <ShoppingCartIcon className="w-5 h-5 text-red-600 mr-2" />
                <span className="text-red-900 font-bold text-sm">AI-Powered E-commerce Solutions</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                <span className="text-gray-900">Skyrocket Your</span>
                <br />
                <span className="bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 bg-clip-text text-transparent">
                  Online Sales
                </span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Complete e-commerce automation suite with AI chatbots, smart SMS marketing, 
                email campaigns, and analytics to 3x your revenue in 90 days.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border-2 border-red-100">
                  <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">3x</div>
                  <div className="text-xs text-gray-600 font-semibold mt-1">Sales Growth</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border-2 border-rose-100">
                  <div className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">24/7</div>
                  <div className="text-xs text-gray-600 font-semibold mt-1">AI Support</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border-2 border-pink-100">
                  <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">45%</div>
                  <div className="text-xs text-gray-600 font-semibold mt-1">Cart Recovery</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 hover:from-red-700 hover:via-rose-700 hover:to-pink-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300">
                  Start Free Trial
                </Button>
                <Button className="border-2 border-red-600 text-red-700 hover:bg-red-600 hover:text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300">
                  See Live Demo
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6 mt-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon className="w-5 h-5 text-red-600" />
                  <span className="font-semibold">PCI DSS Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="w-5 h-5 text-rose-600" />
                  <span className="font-semibold">Setup in 24hrs</span>
                </div>
              </div>
            </div>

            {/* Right Visual - Shopping Dashboard */}
            <div className="relative">
              <div className="relative">
                {/* Main Card - Sales Dashboard */}
                <Card animationDelay={0} className="border-2 border-red-100 mb-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Today's Sales</div>
                      <div className="text-4xl font-bold bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">$12,847</div>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <ShoppingCartIcon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-green-600 font-semibold">
                    <ArrowTrendingUpIcon className="w-5 h-5" />
                    <span>+34% from yesterday</span>
                  </div>
                </Card>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <Card animationDelay={0.1} className="!bg-gradient-to-br !from-red-500 !to-rose-600 !text-white">
                    <div className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                      <UserGroupIcon className="w-6 h-6 text-black" />
                    </div>
                    <div className="text-3xl font-bold mb-1">2.4K</div>
                    <div className="text-sm opacity-90">Active Customers</div>
                  </Card>
                  <Card animationDelay={0.15} className="!bg-gradient-to-br !from-rose-500 !to-pink-600 !text-white">
                    <div className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                      <ChartBarIcon className="w-6 h-6 text-black" />
                    </div>
                    <div className="text-3xl font-bold mb-1">94%</div>
                    <div className="text-sm opacity-90">Satisfaction</div>
                  </Card>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-3 rounded-full shadow-2xl font-bold text-sm transform rotate-12 hover:rotate-0 transition-transform duration-300 animate-bounce">
                  🚀 3x Growth Guaranteed
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Features Grid */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need to
              <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent"> Succeed Online</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to automate and scale your e-commerce business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                animationDelay={index * 0.1}
                className="card-hover card-shimmer bg-gradient-to-br from-white to-red-50 border-2 border-red-100"
                padding="lg"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-red-500 to-rose-600 rounded-full"></div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Solutions Section with Tabs */}
      <Section className="py-20 bg-gradient-to-br from-red-50 via-rose-50 to-pink-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete
              <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent"> Automation Suite</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              AI-powered tools to automate every aspect of your online store
            </p>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                    activeTab === cat.id
                      ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-red-50 border-2 border-red-100'
                  }`}
                >
                  {cat.label} ({cat.count})
                </button>
              ))}
            </div>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
              <Card
                key={solution.id}
                className={`card-hover card-shimmer relative p-8 rounded-3xl bg-white border-2 shadow-xl overflow-hidden group ${
                  hoveredCard === solution.id 
                    ? 'border-red-300' 
                    : 'border-red-100 hover:border-red-200'
                }`}
                onMouseEnter={() => setHoveredCard(solution.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                {/* Stats Badge */}
                <div className="absolute top-6 right-6 bg-red-100 text-red-700 px-4 py-1.5 rounded-full text-xs font-bold shadow-md">
                  {solution.stats.value}
                </div>

                {/* Icon */}
                <div className={`relative w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-xl`}>
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
                <div className="space-y-3 mb-6 relative z-10">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <div className={`w-2 h-2 bg-gradient-to-r ${solution.gradient} rounded-full flex-shrink-0`}></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="pt-6 border-t border-red-100 relative z-10">
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
              Why Top E-commerce Brands
              <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent"> Choose Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join 1000+ successful online stores growing with our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                animationDelay={index * 0.1}
                className="card-hover card-shimmer text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl`}>
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
                <div className={`inline-block px-5 py-2 bg-gradient-to-r ${benefit.color} text-white rounded-full text-sm font-bold shadow-lg`}>
                  {benefit.metric}
                </div>
              </Card>
            ))}
          </div>

          {/* Stats Banner */}
          <div className="bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 rounded-3xl p-12 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-5xl font-bold mb-2">1000+</div>
                <div className="text-red-100 font-semibold">Active Stores</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">$50M+</div>
                <div className="text-rose-100 font-semibold">Revenue Generated</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">10M+</div>
                <div className="text-pink-100 font-semibold">Orders Processed</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">99.9%</div>
                <div className="text-red-100 font-semibold">Uptime SLA</div>
              </div>
            </div>
          </div>

          {/* Summary of Benefits */}
          <div className="mt-20">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
                Summary of <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">Benefits</span>
              </h3>
              <p className="text-base sm:text-lg text-gray-600 px-4">Transform your e-commerce business with automation</p>
            </div>

            {/* Mobile Card View */}
            <div className="block lg:hidden space-y-4 px-4">
              {/* Sales Conversion Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-red-600 to-rose-600 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ShoppingCartIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-lg">Sales Conversion</h4>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-gray-700 text-sm">High cart abandonment rate</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                    <p className="text-gray-700 text-sm font-medium">Automated Multi-Channel Cart Recovery Sequences</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-green-600 text-sm font-bold">Recovers 20-30% lost sales</p>
                  </div>
                </div>
              </div>

              {/* Social Media Sales Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-pink-600 to-rose-600 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-lg">Social Media Sales</h4>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-gray-700 text-sm">Manual, slow order taking from comments/DMs</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                    <p className="text-gray-700 text-sm font-medium">Automated "Comment-to-Cart" & Messenger Ordering</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-green-600 text-sm font-bold">Instant social conversions</p>
                  </div>
                </div>
              </div>

              {/* Remaining cards - shown only when expanded */}
              {showAllBenefits && (
                <>
              {/* Customer Loyalty Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <SparklesIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-lg">Customer Loyalty</h4>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-gray-700 text-sm">Low rate of repeat purchases (low LTV)</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                    <p className="text-gray-700 text-sm font-medium">Automated Win-Back, Upsell & Re-order Campaigns</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-green-600 text-sm font-bold">Higher LTV & repeats</p>
                  </div>
                </div>
              </div>

              {/* Customer Support Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-lg">Customer Support</h4>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-gray-700 text-sm">Staff overwhelmed by repetitive questions</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                    <p className="text-gray-700 text-sm font-medium">24/7 AI-Powered Assistant for FAQs & Order Tracking</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-green-600 text-sm font-bold">Less tickets, happier customers</p>
                  </div>
                </div>
              </div>

              {/* Operations Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TruckIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-lg">Operations</h4>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-gray-700 text-sm">Manual order and shipping notifications</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                    <p className="text-gray-700 text-sm font-medium">Proactive, Automated Order Status Updates via SMS/Email</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-green-600 text-sm font-bold">Builds trust, fewer calls</p>
                  </div>
                </div>
              </div>

              {/* Marketing Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ChartBarIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-lg">Marketing</h4>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-gray-700 text-sm">Low engagement on generic marketing blasts</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                    <p className="text-gray-700 text-sm font-medium">Hyper-Segmentation for Targeted Promotions & Flash Sales</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-green-600 text-sm font-bold">Higher ROI & conversions</p>
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
                    className="px-6 py-3 bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
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
                  <tr className="bg-gradient-to-r from-red-600 via-rose-600 to-pink-600">
                    <th className="px-6 py-5 text-left text-sm font-bold text-white uppercase tracking-wider border-r border-red-400">
                      Category
                    </th>
                    <th className="px-6 py-5 text-left text-sm font-bold text-white uppercase tracking-wider border-r border-red-400">
                      Problem
                    </th>
                    <th className="px-6 py-5 text-left text-sm font-bold text-white uppercase tracking-wider border-r border-red-400">
                      Rocket Flow Solution
                    </th>
                    <th className="px-6 py-5 text-left text-sm font-bold text-white uppercase tracking-wider">
                      Impact
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {/* Sales Conversion */}
                  <tr className="group hover:bg-gradient-to-r hover:from-red-50 hover:to-rose-50 transition-all duration-300">
                    <td className="px-6 py-6 border-r border-gray-200">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <span className="font-bold text-gray-900 text-lg">Sales Conversion</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed">High cart abandonment rate</p>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-medium">Automated Multi-Channel Cart Recovery Sequences</p>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-green-600 leading-relaxed font-bold">
                        Recovers 20-30% lost sales
                      </p>
                    </td>
                  </tr>

                  {/* Social Media Sales */}
                  <tr className="group hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 transition-all duration-300">
                    <td className="px-6 py-6 border-r border-gray-200">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                          </svg>
                        </div>
                        <span className="font-bold text-gray-900 text-lg">Social Media Sales</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed">Manual, slow order taking from comments/DMs</p>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-medium">Automated "Comment-to-Cart" & Messenger Ordering</p>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-green-600 leading-relaxed font-bold">
                        Instant social conversions
                      </p>
                    </td>
                  </tr>

                  {/* Customer Loyalty */}
                  <tr className="group hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300">
                    <td className="px-6 py-6 border-r border-gray-200">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        <span className="font-bold text-gray-900 text-lg">Customer Loyalty</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed">Low rate of repeat purchases (low LTV)</p>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-medium">Automated Win-Back, Upsell & Re-order Campaigns</p>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-green-600 leading-relaxed font-bold">
                        Higher LTV & repeats
                      </p>
                    </td>
                  </tr>

                  {/* Customer Support */}
                  <tr className="group hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300">
                    <td className="px-6 py-6 border-r border-gray-200">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </div>
                        <span className="font-bold text-gray-900 text-lg">Customer Support</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed">Staff overwhelmed by repetitive questions</p>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-medium">24/7 AI-Powered Assistant for FAQs & Order Tracking</p>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-green-600 leading-relaxed font-bold">
                        Less tickets, happier customers
                      </p>
                    </td>
                  </tr>

                  {/* Operations */}
                  <tr className="group hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300">
                    <td className="px-6 py-6 border-r border-gray-200">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                          </svg>
                        </div>
                        <span className="font-bold text-gray-900 text-lg">Operations</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed">Manual order and shipping notifications</p>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-medium">Proactive, Automated Order Status Updates via SMS/Email</p>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-green-600 leading-relaxed font-bold">
                        Builds trust, fewer calls
                      </p>
                    </td>
                  </tr>

                  {/* Marketing */}
                  <tr className="group hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300">
                    <td className="px-6 py-6 border-r border-gray-200">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                          </svg>
                        </div>
                        <span className="font-bold text-gray-900 text-lg">Marketing</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed">Low engagement on generic marketing blasts</p>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-medium">Hyper-Segmentation for Targeted Promotions & Flash Sales</p>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-green-600 leading-relaxed font-bold">
                        Higher ROI & conversions
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* Success Stories */}
      <Section className="py-20 bg-gradient-to-br from-rose-50 via-red-50 to-pink-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real Results from
              <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent"> Real Stores</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our clients transformed their businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {successStories.map((story, index) => (
              <Card
                key={index}
                animationDelay={index * 0.15}
                className="border-2 border-red-100"
                padding="lg"
              >
                {/* Header */}
                <div className="flex items-center gap-6 mb-8 pb-8 border-b border-red-100">
                  <div className={`w-20 h-20 bg-gradient-to-br ${story.bgColor} rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg`}>
                    {story.logo}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{story.name}</h3>
                    <div className="text-red-600 font-semibold">{story.industry}</div>
                  </div>
                  <div className="ml-auto bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold">
                    {story.improvement}
                  </div>
                </div>

                {/* Before & After Comparison */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Before</div>
                    <div className="space-y-3">
                      {Object.entries(story.before).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center bg-red-50 rounded-lg p-3">
                          <span className="text-sm text-gray-600 capitalize">{key}</span>
                          <span className="font-bold text-gray-900">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-green-600 uppercase tracking-wider mb-4">After</div>
                    <div className="space-y-3">
                      {Object.entries(story.after).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center bg-green-50 rounded-lg p-3 border border-green-200">
                          <span className="text-sm text-gray-600 capitalize">{key}</span>
                          <span className="font-bold text-green-700">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-6 border-l-4 border-red-500">
                  <div className="text-4xl text-red-300 mb-2">"</div>
                  <p className="text-gray-700 italic leading-relaxed">{story.testimonial}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 bg-gradient-to-r from-red-700 via-rose-700 to-pink-700 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full animate-pulse animation-delay-2000"></div>
          </div>
        </div>

        <Container className="relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full mb-8">
              <SparklesIcon className="w-6 h-6 text-white mr-2" />
              <span className="text-white font-semibold">Limited Time Offer</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
              Ready to 3x Your
              <br />
              E-commerce Revenue?
            </h2>
            
            <p className="text-xl md:text-2xl text-white text-opacity-90 mb-12 leading-relaxed">
              Start your 14-day free trial. No credit card required. 
              Get your store automated in 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button className="bg-white text-red-700 hover:bg-gray-100 px-12 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                Start Free Trial Now
              </Button>
              <Button className="border-3 border-white text-white hover:bg-white hover:text-red-700 px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300 backdrop-blur-sm bg-white bg-opacity-10">
                Schedule a Demo
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-white text-opacity-90">
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="w-6 h-6" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <BoltIcon className="w-6 h-6" />
                <span>Setup in 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="w-6 h-6" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
