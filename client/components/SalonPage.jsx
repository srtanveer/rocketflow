'use client'

import { useState } from "react";
import { Navbar, Footer, Button, Card, Section, Container, ShinyText, ProvideMoreSection } from '.';
import {
  ChatBubbleLeftRightIcon,
  ChatBubbleOvalLeftIcon,
  ArrowPathIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  UserGroupIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  StarIcon,
  ScissorsIcon,
  BoltIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  ClockIcon,
  SparklesIcon,
  ArrowTrendingUpIcon,
  PlayIcon,
} from '@heroicons/react/24/outline';

export default function SalonPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showAllBenefits, setShowAllBenefits] = useState(false);

  const solutions = [
    {
      id: 'virtual-receptionist',
      title: '24/7 Virtual Receptionist',
      description: 'Never miss a client inquiry with round-the-clock professional responses.',
      icon: ChatBubbleLeftRightIcon,
      gradient: 'from-purple-500 via-fuchsia-600 to-pink-600',
      category: 'automation',
      features: ['Instant response 24/7', 'Smart appointment booking', 'Price inquiries handling', 'Service information'],
      stats: { value: '75%', label: 'Less Missed Calls' }
    },
    {
      id: 'smart-scheduling',
      title: 'Smart Scheduling Suite',
      description: 'Intelligent appointment management with automated reminders and confirmations.',
      icon: CalendarIcon,
      gradient: 'from-pink-500 via-rose-600 to-purple-600',
      category: 'operations',
      features: ['Online booking', 'SMS reminders', 'Double booking prevention', 'Staff scheduling'],
      stats: { value: '90%', label: 'Less No-shows' }
    },
    {
      id: 'client-engagement',
      title: 'Client Engagement Hub',
      description: 'Build lasting relationships with automated loyalty programs and personalized communication.',
      icon: SparklesIcon,
      gradient: 'from-rose-500 via-pink-600 to-fuchsia-600',
      category: 'marketing',
      features: ['Loyalty rewards', 'Birthday offers', 'Review management', 'Custom campaigns'],
      stats: { value: '45%', label: 'More Retention' }
    },
    {
      id: 'salon-analytics',
      title: 'Salon Analytics',
      description: 'Comprehensive business analytics for data-driven salon management decisions.',
      icon: ChartBarIcon,
      gradient: 'from-fuchsia-600 via-purple-600 to-pink-600',
      category: 'analytics',
      features: ['Revenue tracking', 'Service insights', 'Staff performance', 'Growth metrics'],
      stats: { value: '360°', label: 'Business View' }
    },
    {
      id: 'inventory-system',
      title: 'Smart Inventory Control',
      description: 'Automated inventory management and product tracking system.',
      icon: ScissorsIcon,
      gradient: 'from-purple-600 via-pink-600 to-rose-600',
      category: 'operations',
      features: ['Stock alerts', 'Usage tracking', 'Auto reordering', 'Waste reduction'],
      stats: { value: '30%', label: 'Cost Savings' }
    },
    {
      id: 'marketing-suite',
      title: 'Marketing Automation',
      description: 'Strategic marketing tools to keep your salon fully booked year-round.',
      icon: GlobeAltIcon,
      gradient: 'from-pink-600 via-fuchsia-600 to-purple-600',
      category: 'marketing',
      features: ['Social promotions', 'Email campaigns', 'SMS broadcasts', 'Referral system'],
      stats: { value: '2x', label: 'More Bookings' }
    }
  ];

  const benefits = [
    {
      icon: ArrowTrendingUpIcon,
      title: 'Boost Your Revenue',
      description: 'Automated marketing and smart scheduling drive more clients',
      metric: '40% growth',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: UserGroupIcon,
      title: 'Client Satisfaction',
      description: 'Professional service and seamless communication',
      metric: '95% happy',
      color: 'from-pink-500 to-fuchsia-600'
    },
    {
      icon: BoltIcon,
      title: 'Save 20+ Hours Weekly',
      description: 'Automation handles bookings and reminders',
      metric: '80 hrs/month',
      color: 'from-fuchsia-500 to-purple-600'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Reliable & Secure',
      description: 'Enterprise-grade security for your salon data',
      metric: '100% secure',
      color: 'from-purple-600 to-pink-600'
    }
  ];

  const features = [
    {
      title: 'Smart Salon Management',
      description: 'Complete automation from booking to billing',
      icon: ScissorsIcon,
      points: ['Online booking', 'Staff scheduling', 'Payment handling', 'Inventory control']
    },
    {
      title: 'Client Experience',
      description: 'Professional and seamless service delivery',
      icon: SparklesIcon,
      points: ['Digital receipts', 'Loyalty program', 'Easy rebooking', 'Review system']
    },
    {
      title: 'Business Growth',
      description: 'Tools to scale your salon business',
      icon: ChartBarIcon,
      points: ['Marketing tools', 'Analytics dashboard', 'Revenue tracking', 'Growth insights']
    },
    {
      title: 'Time Saving',
      description: 'Automate routine tasks and focus on service',
      icon: ClockIcon,
      points: ['Auto reminders', 'Smart scheduling', 'Quick billing', 'Report automation']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Solutions', count: 6 },
    { id: 'automation', label: 'Automation', count: 1 },
    { id: 'marketing', label: 'Marketing', count: 2 },
    { id: 'operations', label: 'Operations', count: 2 },
    { id: 'analytics', label: 'Analytics', count: 1 }
  ];

  const successStories = [
    {
      name: 'Glamour Studio',
      industry: 'Hair & Beauty Salon',
      logo: 'GS',
      bgColor: 'from-purple-500 to-pink-600',
      before: { bookings: '120/mo', admin: '30hrs/wk', noShows: '25%' },
      after: { bookings: '200/mo', admin: '10hrs/wk', noShows: '5%' },
      improvement: '+65% revenue',
      testimonial: "The automation suite has transformed our salon. We're spending more time with clients and less time on phones and paperwork."
    },
    {
      name: 'Style Hub Chain',
      industry: 'Multi-location Salon',
      logo: 'SH',
      bgColor: 'from-fuchsia-500 to-purple-600',
      before: { locations: '2', staff: '15', management: 'manual' },
      after: { locations: '5', staff: '40', management: 'automated' },
      improvement: '+150% growth',
      testimonial: 'Managing multiple locations is now effortless. The centralized system and automation have been game-changers!'
    }
  ];

  const filteredSolutions = activeTab === 'all' 
    ? solutions 
    : solutions.filter(s => s.category === activeTab);

  const services = [
    {
      id: 'virtual-receptionist',
      title: '24/7 Virtual Receptionist',
      description: 'Never miss a client inquiry with round-the-clock professional responses.',
      icon: ChatBubbleLeftRightIcon,
      impacts: [
        '• Capture every lead, 24/7',
        '• Instant, professional responses',
        '• Free staff from repetitive queries'
      ]
    },
    {
      id: 'client-segmentation',
      title: 'Smart Client Segmentation',
      description: 'Intelligent client organization and personalized communication system.',
      icon: UserGroupIcon,
      impacts: [
        '• Automatically tag clients',
        '• Target promotions effectively',
        '• Personalize all communication'
      ]
    },
    {
      id: 'loyalty-engagement',
      title: 'Automated Loyalty & Re-engagement',
      description: 'Build lasting relationships and boost client retention.',
      icon: ArrowPathIcon,
      impacts: [
        '• Increase repeat business',
        '• Make clients feel valued',
        '• Win back lost clients'
      ]
    },
    {
      id: 'bridal-inquiries',
      title: 'Seamless Bridal Inquiries',
      description: 'Specialized system for high-value bridal service bookings.',
      icon: ChatBubbleOvalLeftIcon,
      impacts: [
        '• Never miss a high-value booking',
        '• Professional process impresses clients',
        '• Automatically collect event details'
      ]
    },
    {
      id: 'appointment-reminders',
      title: 'Appointment Reminders',
      description: 'Automated system to ensure clients never miss appointments.',
      icon: CalendarIcon,
      impacts: [
        '• Reduce no-shows significantly',
        '• Eliminate manual reminder calls',
        '• Reliable daily schedule view'
      ]
    },
    {
      id: 'targeted-promos',
      title: 'Targeted Promotions',
      description: 'Strategic promotion system to maximize salon occupancy.',
      icon: GlobeAltIcon,
      impacts: [
        '• Fill slow days with offers',
        '• Capitalize on festival demand',
        '• Drive immediate footfall'
      ]
    },
    {
      id: 'ai-receptionist',
      title: 'AI-Powered Receptionist',
      description: 'Intelligent automated responses for seamless customer service.',
      icon: ChatBubbleLeftRightIcon,
      impacts: [
        '• 24/7 instant customer service',
        '• Accurate information anytime',
        '• Staff focus on in-salon work'
      ]
    },
    {
      id: 'business-analytics',
      title: 'Business Analytics',
      description: 'Data-driven insights for salon growth and optimization.',
      icon: CurrencyDollarIcon,
      impacts: [
        '• Data-driven business decisions',
        '• Identify popular services',
        '• Optimize marketing spend'
      ]
    },
    {
      id: 'unified-communication',
      title: 'Unified Communication',
      description: 'Centralized client communication and booking management.',
      icon: DevicePhoneMobileIcon,
      impacts: [
        '• All client history in one place',
        '• Prevent double-bookings',
        '• Run a smooth, modern operation'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-pink-50">
      <Navbar />
      
      {/* Hero Section - Dynamic & Eye-catching */}
      <Section className="pt-20 sm:pt-24 pb-12 sm:pb-16 relative overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-fuchsia-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mt-14 mb-8 border-2 border-purple-200 shadow-lg">
                <ScissorsIcon className="w-5 h-5 text-purple-600 mr-2" />
                <span className="text-purple-900 font-bold text-sm">AI-Powered Salon Solutions</span>
              </div>
              
              <h1 className="text-[2.5rem] leading-tight sm:text-[3rem] sm:leading-tight lg:text-[4rem] lg:leading-tight font-bold mb-2 sm:mb-3 lg:mb-4">
                <span className="text-gray-900">Transform Your</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
                  Beauty Business
                </span>
              </h1>
              
              <p className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-gray-700 mb-8 leading-relaxed">
                Complete salon business automation suite with AI assistants, smart scheduling, 
                client management, and analytics to double your bookings and revenue.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border-2 border-purple-100">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">2x</div>
                  <div className="text-xs text-gray-600 font-semibold mt-1">More Revenue</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border-2 border-fuchsia-100">
                  <div className="text-3xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">24/7</div>
                  <div className="text-xs text-gray-600 font-semibold mt-1">AI Assistant</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border-2 border-pink-100">
                  <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">15h+</div>
                  <div className="text-xs text-gray-600 font-semibold mt-1">Time Saved</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 hover:from-purple-700 hover:via-fuchsia-700 hover:to-pink-700 text-white px-10 py-4 rounded-xl font-semibold text-sm sm:text-base shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  <PlayIcon className="w-5 h-5" />
                  Start Free Trial
                </Button>
                <button className="bg-transparent border-2 border-purple-600 text-purple-700 hover:bg-purple-600 hover:text-white px-10 py-4 rounded-xl font-semibold text-sm sm:text-base transition-all hover:shadow-md">
                  Watch Demo
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6 mt-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold">Secure Storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="w-5 h-5 text-fuchsia-600" />
                  <span className="font-semibold">Setup in 24hrs</span>
                </div>
              </div>
            </div>

            {/* Right Visual - Salon Dashboard */}
            <div className="relative">
              <div className="relative">
                {/* Main Card - Booking Dashboard */}
                <Card className="card-border-gradient border-2 border-purple-100 mb-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">This Month's Revenue</div>
                      <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">$42,800</div>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <ScissorsIcon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-green-600 font-semibold">
                    <ArrowTrendingUpIcon className="w-5 h-5" />
                    <span>+45% from last month</span>
                  </div>
                </Card>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="card-glow !bg-gradient-to-br !from-purple-500 !to-fuchsia-600 !text-white">
                    <div className="w-12 h-12 bg-red bg-opacity-20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                      <UserGroupIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold mb-1">185</div>
                    <div className="text-sm opacity-90">Active Clients</div>
                  </Card>
                  <Card className="card-glow !bg-gradient-to-br !from-fuchsia-500 !to-pink-600 !text-white">
                    <div className="w-12 h-12 bg-red bg-opacity-20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                      <ChartBarIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold mb-1">98%</div>
                    <div className="text-sm opacity-90">Client Rating</div>
                  </Card>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white px-6 py-3 rounded-full shadow-2xl font-bold text-sm transform rotate-12 hover:rotate-0 transition-transform duration-300 animate-bounce">
                  🎯 2x Growth Guaranteed
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Features Grid */}
      <Section className="py-12 sm:py-14 bg-white">
        <Container>
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-gray-900 mb-4">
              Everything You Need to
              <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent"> Grow Your Salon</span>
            </h2>
            <p className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to automate and scale your salon business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                animationDelay={index * 0.1}
                className="card-hover card-shimmer bg-gradient-to-br from-white to-purple-50 border-2 border-purple-100 h-full flex flex-col"
                padding="lg"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg flex-shrink-0">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2 mt-auto">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-fuchsia-600 rounded-full"></div>
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
      <Section className="py-12 sm:py-14 bg-gradient-to-br from-purple-50 via-fuchsia-50 to-pink-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-gray-900 mb-4">
              Complete
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Salon Automation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              AI-powered tools to automate every aspect of your salon business
            </p>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                    activeTab === cat.id
                      ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-purple-50 border-2 border-purple-100'
                  }`}
                >
                  {cat.label} ({cat.count})
                </button>
              ))}
            </div>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredSolutions.map((solution) => (
              <Card
                key={solution.id}
                className={`card-shimmer relative p-8 rounded-3xl bg-white border-2 shadow-xl overflow-hidden group h-full flex flex-col ${
                  hoveredCard === solution.id 
                    ? 'border-purple-300' 
                    : 'border-purple-100 hover:border-purple-200'
                }`}
                onMouseEnter={() => setHoveredCard(solution.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                {/* Stats Badge */}
                <div className="absolute top-6 right-6 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-xs font-bold shadow-md">
                  {solution.stats.value}
                </div>

                {/* Icon */}
                <div className={`relative w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-xl`}>
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
                <div className="space-y-3 mb-6 relative z-10">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <div className={`w-2 h-2 bg-gradient-to-r ${solution.gradient} rounded-full flex-shrink-0`}></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="pt-6 border-t border-purple-100 relative z-10">
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{solution.stats.label}</div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
            
      {/* Provide More Section */}
      <ProvideMoreSection />

      {/* See More Button removed as requested */}

      {/* Benefits Table Section */}
      <Section className="py-12 sm:py-14 bg-white">
        <Container>
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 relative inline-block px-4">
              Summary of Benefits for a
              <span className="bg-gradient-to-r from-primary to-secondary text-black"> Salon & Parlour</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              See how we solve common salon business challenges
            </p>
          </div>

          {/* Mobile Card View */}
          <div className="block lg:hidden space-y-4 px-4">
            {/* Appointments Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CalendarIcon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Appointments</h4>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700">Costly client no-shows & last-minute cancellations</p>
                <p className="mt-3 text-sm font-semibold text-gray-900">Automated SMS Appointment Reminders with Confirmation</p>
              </div>
            </div>

            {/* Marketing Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GlobeAltIcon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Marketing</h4>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700">Empty slots during weekdays or off-seasons</p>
                <p className="mt-3 text-sm font-semibold text-green-600">Fills the appointment book, boosts revenue</p>
              </div>
            </div>

            {/* High-Value Bookings Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-pink-600 to-fuchsia-600 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CurrencyDollarIcon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">High-Value Bookings</h4>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700">Disorganized handling of bridal inquiries</p>
                <p className="mt-3 text-sm font-semibold text-green-600">Professional process, more high-ticket bookings</p>
              </div>
            </div>

            {/* Operations Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-fuchsia-600 to-purple-600 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ArrowPathIcon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Operations</h4>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700">Manual, time-consuming reminder calls</p>
                <p className="mt-3 text-sm font-semibold text-green-600">Frees up staff, improves efficiency</p>
              </div>
            </div>
          </div>

            {/* See More Button removed from here (moved above) */}

          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-xl overflow-hidden">
              <thead className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 text-white">
                <tr>
                  <th className="px-6 py-5 text-left text-sm font-bold text-white uppercase tracking-wider">Category</th>
                  <th className="px-6 py-5 text-left text-sm font-bold text-white uppercase tracking-wider">Problem</th>
                  <th className="px-6 py-5 text-left text-sm font-bold text-white uppercase tracking-wider">Rocket Flow Solution</th>
                  <th className="px-6 py-5 text-left text-sm font-bold text-white uppercase tracking-wider">Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {/* Appointments */}
                <tr className="group hover:bg-gradient-to-r hover:from-purple-50 hover:to-fuchsia-50 transition-all duration-300">
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <CalendarIcon className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-bold text-gray-900">Appointments</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 text-gray-700">
                    Costly client no-shows & last-minute cancellations
                  </td>
                  <td className="px-6 py-6 text-gray-700 font-medium">
                    Automated SMS Appointment Reminders with Confirmation
                  </td>
                  <td className="px-6 py-6 text-green-600 font-bold">
                    Dramatically reduces no-shows, secures revenue
                  </td>
                </tr>

                {/* Client Management */}
                <tr className="group hover:bg-gradient-to-r hover:from-pink-50 hover:to-fuchsia-50 transition-all duration-300">
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-fuchsia-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <UserGroupIcon className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-bold text-gray-900">Client Management</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 text-gray-700">
                    Repetitive inquiries about price and services
                  </td>
                  <td className="px-6 py-6 text-gray-700 font-medium">
                    24/7 AI Receptionist & Instant Service Menu Delivery
                  </td>
                  <td className="px-6 py-6 text-green-600 font-bold">
                    Saves hours of staff time daily
                  </td>
                </tr>

                {/* Client Loyalty */}
                <tr className="group hover:bg-gradient-to-r hover:from-fuchsia-50 hover:to-purple-50 transition-all duration-300">
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <StarIcon className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-bold text-gray-900">Client Loyalty</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 text-gray-700">
                    Low rate of repeat business
                  </td>
                  <td className="px-6 py-6 text-gray-700 font-medium">
                    Automated Re-engagement & Birthday Campaigns
                  </td>
                  <td className="px-6 py-6 text-green-600 font-bold">
                    Increases client retention & lifetime value
                  </td>
                </tr>

                {/* Marketing */}
                <tr className="group hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300">
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <GlobeAltIcon className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-bold text-gray-900">Marketing</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 text-gray-700">
                    Empty slots during weekdays or off-seasons
                  </td>
                  <td className="px-6 py-6 text-gray-700 font-medium">
                    Targeted Slow Day & Festival Offer Broadcasts
                  </td>
                  <td className="px-6 py-6 text-green-600 font-bold">
                    Fills the appointment book, boosts revenue
                  </td>
                </tr>

                {/* High-Value Bookings */}
                <tr className="group hover:bg-gradient-to-r hover:from-pink-50 hover:to-fuchsia-50 transition-all duration-300">
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-fuchsia-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <CurrencyDollarIcon className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-bold text-gray-900">High-Value Bookings</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 text-gray-700">
                    Disorganized handling of bridal inquiries
                  </td>
                  <td className="px-6 py-6 text-gray-700 font-medium">
                    Automated Bridal Inquiry Forms & Package Delivery
                  </td>
                  <td className="px-6 py-6 text-green-600 font-bold">
                    Professional process, more high-ticket bookings
                  </td>
                </tr>

                {/* Operations */}
                <tr className="group hover:bg-gradient-to-r hover:from-fuchsia-50 hover:to-purple-50 transition-all duration-300">
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <ArrowPathIcon className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-bold text-gray-900">Operations</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 text-gray-700">
                    Manual, time-consuming reminder calls
                  </td>
                  <td className="px-6 py-6 text-gray-700 font-medium">
                    Fully Automated Communication Workflows
                  </td>
                  <td className="px-6 py-6 text-green-600 font-bold">
                    Frees up staff, improves efficiency
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* Success Stories Section */}
      <Section className="py-12 sm:py-14">
        <Container>
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-gray-900 mb-4">
              Real Results from
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Real Salons</span>
            </h2>
            <p className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-gray-600 max-w-3xl mx-auto">
              See how our salon clients transformed their businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {successStories.map((story, index) => (
              <Card
                key={index}
                animationDelay={index * 0.15}
                className="card-hover card-shimmer group h-full flex flex-col border-2 border-purple-100 overflow-hidden"
                padding="lg"
              >
                {/* Header */}
                <div className="flex items-center gap-4 sm:gap-5 mb-6 pb-6 border-b border-purple-100">
                  <div className={`w-16 h-16 bg-gradient-to-br ${story.bgColor} rounded-2xl flex items-center justify-center text-white font-bold text-[1.5rem] sm:text-[1.75rem] lg:text-[2rem] shadow-lg transform transition-transform duration-300 group-hover:scale-110`}>
                    {story.logo}
                  </div>
                  <div>
                    <h3 className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-bold text-gray-900 mb-1">{story.name}</h3>
                    <div className="text-purple-600 font-semibold text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">{story.industry}</div>
                  </div>
                  <div className="ml-auto bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">
                    {story.improvement}
                  </div>
                </div>

                {/* Before & After Comparison */}
                <div className="grid grid-cols-2 gap-5 mb-6 flex-1">
                  <div>
                    <div className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-bold text-gray-500 uppercase tracking-wider mb-3">Before</div>
                    <div className="space-y-2">
                      {Object.entries(story.before).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center bg-purple-50 rounded-lg p-2">
                          <span className="text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] text-gray-600 capitalize">{key}</span>
                          <span className="font-bold text-gray-900 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-bold text-green-600 uppercase tracking-wider mb-3">After</div>
                    <div className="space-y-2">
                      {Object.entries(story.after).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center bg-green-50 rounded-lg p-2 border border-green-200">
                          <span className="text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] text-gray-600 capitalize">{key}</span>
                          <span className="font-bold text-green-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 border-l-4 border-purple-500 mt-auto">
                  <div className="text-3xl text-purple-300 mb-2">"</div>
                  <p className="text-gray-700 italic leading-relaxed text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">{story.testimonial}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section - relocated between table and footer */}
      <Section className="py-16 sm:py-18 bg-gradient-to-r from-purple-700 via-fuchsia-700 to-pink-700 relative overflow-hidden">
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
              <SparklesIcon className="w-6 h-6 text-black mr-2" />
              <span className="text-black font-semibold">Limited Time Launch Offer</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
              Ready to Transform Your
              <br />
              Salon Business?
            </h2>
            
            <p className="text-xl md:text-2xl text-white text-opacity-90 mb-12 leading-relaxed">
              Start your 14-day free trial. No credit card required. 
              Get your salon automated in 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white px-12 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                <PlayIcon className="w-5 h-5" />
                Start Free Trial Now
              </Button>
              <Button className="bg-transparent border-3 border-white text-white hover:bg-white hover:text-purple-700 px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300">
                Book a Demo
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

            {/* Stats Grid */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">75%</div>
                <div className="text-white text-opacity-90">Less No-Shows</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">40%</div>
                <div className="text-white text-opacity-90">More Bookings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-white text-opacity-90">Happy Salons</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
