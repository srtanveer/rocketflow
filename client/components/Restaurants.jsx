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
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredService, setHoveredService] = useState(null);

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
      color: 'text-primary'
    },
    {
      icon: UserGroupIcon,
      title: 'Customer Loyalty',
      description: 'Build lasting relationships with diners through consistent engagement and exceptional service.',
      color: 'text-secondary'
    },
    {
      icon: ClockIcon,
      title: 'Save Time',
      description: 'Automate reservations, orders, and customer service to focus on creating amazing dining experiences',
      color: 'text-primary-600'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Trust & Quality',
      description: 'Share menu details, ingredient sourcing, and chef expertise to build customer confidence',
      color: 'text-secondary-600'
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
      content: 'The automated SMS campaigns have been a game-changer! Our customers love getting updates about daily specials and events. Reservations increased by 70% in just 3 months.',
      avatar: 'MR',
      rating: 5
    },
    {
      name: 'James Chen',
      role: 'Founder, Dragon Palace',
      content: 'The AI chatbot handles reservation inquiries brilliantly - from menu questions to dietary restrictions. It\'s like having a dedicated host available 24/7.',
      avatar: 'JC',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-primary-50 to-secondary-50">
      <Navbar />
      
      {/* Hero Section with Restaurant Theme */}
      <Section className="pt-32 pb-20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 left-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full mb-6">
                <HeartIcon className="w-5 h-5 text-primary mr-2" />
                <span className="text-primary-dark font-semibold text-sm">Restaurant Growth Solutions</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-primary via-primary-600 to-secondary bg-clip-text text-transparent">
                  Grow Your
                </span>
                <br />
                <span className="text-gray-900">Restaurant Business</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Empower your restaurant with cutting-edge digital solutions. From automated customer engagement to AI-powered insights, we help you reach more diners and grow sustainably.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border-2 border-primary-100">
                  <div className="text-3xl font-bold text-primary">60%</div>
                  <div className="text-xs text-gray-600 mt-1">Sales Increase</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border-2 border-secondary-100">
                  <div className="text-3xl font-bold text-secondary">24/7</div>
                  <div className="text-xs text-gray-600 mt-1">AI Support</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border-2 border-primary-100">
                  <div className="text-3xl font-bold text-primary-dark">5K+</div>
                  <div className="text-xs text-gray-600 mt-1">Happy Diners</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-black px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Start Growing Today
                </Button>
                <Button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300">
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 shadow-2xl border-4 border-white">
                {/* Feature Cards Floating */}
                <div className="space-y-4">
                  <Card animationDelay={0} className="!bg-white">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-600 rounded-xl flex items-center justify-center">
                        <ChatBubbleLeftRightIcon className="w-7 h-7 text-black" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">AI Chat Assistant</div>
                        <div className="text-sm text-gray-600">Instant reservation support</div>
                      </div>
                      <div className="text-primary font-bold">Active</div>
                    </div>
                  </Card>

                  <Card animationDelay={0.1} className="!bg-white">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary-600 rounded-xl flex items-center justify-center">
                        <DevicePhoneMobileIcon className="w-7 h-7 text-black" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">Bulk SMS</div>
                        <div className="text-sm text-gray-600">2,450 sent today</div>
                      </div>
                      <div className="text-secondary font-bold">98%</div>
                    </div>
                  </Card>

                  <Card animationDelay={0.2} className="!bg-white">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-dark to-primary-700 rounded-xl flex items-center justify-center">
                        <EnvelopeIcon className="w-7 h-7 text-black" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">Email Campaign</div>
                        <div className="text-sm text-gray-600">Special menu newsletter</div>
                      </div>
                      <div className="text-primary-dark font-bold">85%</div>
                    </div>
                  </Card>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full shadow-xl font-bold transform rotate-12">
                  <div className="text-center">
                    <div className="text-2xl">🍽️</div>
                    <div className="text-xs">Top Rated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Our Solutions Section */}
      <Section className="py-20 bg-gradient-to-b from-white via-gray-50 to-primary-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Digital Solutions for
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Restaurants</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to connect with diners and scale your restaurant business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card
                key={solution.id}
                className={`relative p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-primary-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden ${
                  hoveredService === solution.id ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredService(solution.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>

                {/* Icon */}
                <div className={`relative w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="w-8 h-8 text-black" />
                </div>

                {/* Stats Badge */}
                <div className="absolute top-6 right-6 bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-bold">
                  {solution.stats.value}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-black mb-4 relative z-10">
                  {solution.title}
                </h3>
                <p className="text-black mb-6 leading-relaxed relative z-10">
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

      {/* Benefits Section with Restaurant Vibe */}
      <Section className="py-20 bg-gradient-to-br from-primary-100 via-secondary-50 to-primary-50 relative overflow-hidden">
        {/* Decorative Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 border-4 border-primary-300 rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 border-4 border-secondary-300 rounded-full"></div>
        </div>

        <Container className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Restaurants
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Choose Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of restaurants who've transformed their customer engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                animationDelay={index * 0.1}
                className="border-2 border-transparent hover:border-primary-200 bg-white"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${
                  index === 0 ? 'from-primary-100 to-primary-200' : 
                  index === 1 ? 'from-secondary-100 to-secondary-200' : 
                  index === 2 ? 'from-primary-200 to-primary-300' : 
                  'from-secondary-200 to-secondary-300'
                } rounded-2xl flex items-center justify-center mb-6 shadow-md`}>
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>

          {/* Success Metrics */}
          <div className="mt-20 bg-white rounded-3xl p-12 shadow-2xl border-4 border-primary-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {successMetrics.map((metric, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <metric.icon className="w-8 h-8 text-black" />
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
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Transform Your Business with Rocket Flow
              </h3>
              <p className="text-gray-600 text-lg">See exactly how we solve your biggest challenges</p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-2xl shadow-xl overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-primary via-primary-600 to-secondary">
                    <th className="px-6 py-5 text-left text-sm font-bold text-black uppercase tracking-wider border-r border-primary-400">
                      Category
                    </th>
                    <th className="px-6 py-5 text-left text-sm font-bold text-black uppercase tracking-wider border-r border-primary-400">
                      Problem
                    </th>
                    <th className="px-6 py-5 text-left text-sm font-bold text-black uppercase tracking-wider border-r border-primary-400">
                      Rocket Flow Solution
                    </th>
                    <th className="px-6 py-5 text-left text-sm font-bold text-black uppercase tracking-wider">
                      Impact
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {/* Revenue & Orders */}
                  <tr className="group hover:bg-gradient-to-r hover:from-primary-50 hover:to-secondary-50 transition-all duration-300">
                    <td className="px-6 py-6 border-r border-gray-200">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                          <ShoppingCartIcon className="w-6 h-6 text-black" />
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
                      <p className="text-primary-600 leading-relaxed font-bold">
                        Increased profit margins
                      </p>
                    </td>
                  </tr>

                  {/* Reservations */}
                  <tr className="group hover:bg-gradient-to-r hover:from-secondary-50 hover:to-primary-50 transition-all duration-300">
                    <td className="px-6 py-6 border-r border-gray-200">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-secondary-600 to-secondary-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                          <CalendarIcon className="w-6 h-6 text-black" />
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
                      <p className="text-secondary-600 leading-relaxed font-bold">
                        Slashes no-show rates
                      </p>
                    </td>
                  </tr>

                  {/* Customer Service */}
                  <tr className="group hover:bg-gradient-to-r hover:from-primary-50 hover:to-secondary-50 transition-all duration-300">
                    <td className="px-6 py-6 border-r border-gray-200">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-700 to-primary-dark rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                          <ChatBubbleLeftRightIcon className="w-6 h-6 text-black" />
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
                      <p className="text-primary-700 leading-relaxed font-bold">
                        Frees up staff
                      </p>
                    </td>
                  </tr>

                  {/* Marketing */}
                  <tr className="group hover:bg-gradient-to-r hover:from-secondary-50 hover:to-primary-50 transition-all duration-300">
                    <td className="px-6 py-6 border-r border-gray-200">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-secondary-700 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                          <SparklesIcon className="w-6 h-6 text-black" />
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
                      <p className="text-secondary-700 leading-relaxed font-bold">
                        Drives footfall during off-peak
                      </p>
                    </td>
                  </tr>

                  {/* Customer Loyalty */}
                  <tr className="group hover:bg-gradient-to-r hover:from-primary-50 hover:to-secondary-50 transition-all duration-300">
                    <td className="px-6 py-6 border-r border-gray-200">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                          <HeartIcon className="w-6 h-6 text-black" />
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
                      <p className="text-primary-700 leading-relaxed font-bold">
                        Increases retention & LTV
                      </p>
                    </td>
                  </tr>

                  {/* High-Value Bookings */}
                  <tr className="group hover:bg-gradient-to-r hover:from-secondary-50 hover:to-primary-50 transition-all duration-300">
                    <td className="px-6 py-6 border-r border-gray-200">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-secondary-600 to-secondary-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                          <ShoppingBagIcon className="w-6 h-6 text-black" />
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

      {/* Testimonials Section */}
      <Section className="py-20 bg-gradient-to-b from-primary-50 via-white to-secondary-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories from Restaurant Owners
      
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real restaurants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-primary-100 hover:border-primary-200 relative overflow-hidden group"
              >
                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full opacity-20 transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>

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
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-black font-bold text-xl shadow-lg">
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
      <Section className="py-24 bg-gradient-to-r from-primary via-primary-600 to-secondary relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full mix-blend-overlay animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-white rounded-full mix-blend-overlay animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full mix-blend-overlay animate-blob animation-delay-4000"></div>
        </div>

        <Container className="relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full mb-8">
              <SparklesIcon className="w-6 h-6 text-white mr-2" />
              <span className="text-black font-semibold">Limited Time Offer</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-black mb-8 leading-tight">
              Ready to Grow Your
              <br />
              Restaurant Business?
            </h2>

            <p className="text-xl md:text-2xl text-black/95 mb-12 leading-relaxed">
              Join 500+ restaurants already using our platform to reach more diners
              and boost sales by 60%
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-white text-primary hover:bg-gray-100 px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                Get Started Free
              </Button>
              <Button className="border-3 border-white text-white hover:bg-white hover:text-primary px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 backdrop-blur-sm bg-white/10">
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
