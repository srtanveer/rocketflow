'use client'

import { useState } from "react";
import { Navbar, Footer, Button, Card, Section, Container, ShinyText, ProvideMoreSection } from '.';
import {
  CameraIcon,
  DevicePhoneMobileIcon,
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
  BoltIcon,
  ComputerDesktopIcon,
  StarIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  PhotoIcon,
  SparklesIcon,
  ChartBarIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ClockIcon,
  ArrowTrendingUpIcon,
  PlayIcon,
} from '@heroicons/react/24/outline';

export default function PhotographyPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showAllBenefits, setShowAllBenefits] = useState(false);

  const solutions = [
    {
      id: 'ai-assistant',
      title: 'AI Studio Assistant',
      description: 'Intelligent chatbot for inquiry handling, booking management, and 24/7 client support.',
      icon: ChatBubbleLeftRightIcon,
      gradient: 'from-purple-500 via-fuchsia-600 to-pink-600',
      category: 'automation',
      features: ['24/7 inquiry handling', 'Smart scheduling', 'Price quote automation', 'FAQ handling'],
      stats: { value: '85%', label: 'Time Saved' }
    },
    {
      id: 'client-workflow',
      title: 'Client Workflow Suite',
      description: 'End-to-end automation from inquiry to gallery delivery with smart client communication.',
      icon: BoltIcon,
      gradient: 'from-pink-500 via-rose-600 to-purple-600',
      category: 'automation',
      features: ['Automated follow-ups', 'Gallery delivery', 'Payment tracking', 'Client portal'],
      stats: { value: '3x', label: 'Faster Delivery' }
    },
    {
      id: 'marketing-automation',
      title: 'Marketing Automation',
      description: 'Smart email and SMS campaigns for mini-sessions, seasonal offers, and client retention.',
      icon: SparklesIcon,
      gradient: 'from-rose-500 via-pink-600 to-fuchsia-600',
      category: 'marketing',
      features: ['Campaign automation', 'Targeted promotions', 'Client segmentation', 'ROI tracking'],
      stats: { value: '40%', label: 'More Bookings' }
    },
    {
      id: 'analytics-hub',
      title: 'Photography Analytics',
      description: 'Comprehensive business analytics dashboard with revenue tracking and performance insights.',
      icon: ChartBarIcon,
      gradient: 'from-fuchsia-600 via-purple-600 to-pink-600',
      category: 'analytics',
      features: ['Revenue tracking', 'Client insights', 'Trend analysis', 'Growth forecasting'],
      stats: { value: '360°', label: 'Business View' }
    },
    {
      id: 'booking-system',
      title: 'Smart Booking System',
      description: 'Automated scheduling, payment processing, and session management system.',
      icon: CalendarIcon,
      gradient: 'from-purple-600 via-pink-600 to-rose-600',
      category: 'operations',
      features: ['Online scheduling', 'Payment integration', 'Calendar sync', 'Automated reminders'],
      stats: { value: '95%', label: 'Less No-shows' }
    },
    {
      id: 'gallery-delivery',
      title: 'Gallery Management',
      description: 'Professional photo delivery system with client galleries and automated workflows.',
      icon: PhotoIcon,
      gradient: 'from-pink-600 via-fuchsia-600 to-purple-600',
      category: 'operations',
      features: ['Client galleries', 'Download tracking', 'Expiry management', 'Upsell automation'],
      stats: { value: '2x', label: 'Faster Delivery' }
    }
  ];

  const benefits = [
    {
      icon: ArrowTrendingUpIcon,
      title: 'Double Your Bookings',
      description: 'Automated marketing and smart follow-ups drive more clients',
      metric: '200% growth',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: UserGroupIcon,
      title: 'Enhanced Client Experience',
      description: 'Seamless communication and professional delivery',
      metric: '98% satisfaction',
      color: 'from-pink-500 to-fuchsia-600'
    },
    {
      icon: BoltIcon,
      title: 'Save 15+ Hours Weekly',
      description: 'Automation handles routine tasks and communication',
      metric: '60 hrs/month',
      color: 'from-fuchsia-500 to-purple-600'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Professional & Secure',
      description: 'Enterprise-grade security for your client data',
      metric: '100% secure',
      color: 'from-purple-600 to-pink-600'
    }
  ];

  const features = [
    {
      title: 'Smart Studio Management',
      description: 'Streamlined workflow from inquiry to delivery',
      icon: CameraIcon,
      points: ['Automated inquiries', 'Session scheduling', 'Payment handling', 'Gallery delivery']
    },
    {
      title: 'Client Experience',
      description: 'Professional and seamless client journey',
      icon: SparklesIcon,
      points: ['Client portal', 'Automated updates', 'Easy communication', 'Review management']
    },
    {
      title: 'Business Growth',
      description: 'Tools to scale your photography business',
      icon: ChartBarIcon,
      points: ['Marketing automation', 'Analytics dashboard', 'Revenue tracking', 'Growth insights']
    },
    {
      title: 'Time Saving',
      description: 'Automate routine tasks and focus on shooting',
      icon: ClockIcon,
      points: ['Workflow automation', 'Batch processing', 'Quick delivery', 'Smart scheduling']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Solutions', count: 6 },
    { id: 'automation', label: 'Automation', count: 2 },
    { id: 'marketing', label: 'Marketing', count: 1 },
    { id: 'operations', label: 'Operations', count: 2 },
    { id: 'analytics', label: 'Analytics', count: 1 }
  ];

  const successStories = [
    {
      name: 'Sarah Smith Photography',
      industry: 'Wedding Photography',
      logo: 'SP',
      bgColor: 'from-purple-500 to-pink-600',
      before: { bookings: '10/mo', admin: '25hrs/wk', delivery: '4 weeks' },
      after: { bookings: '25/mo', admin: '8hrs/wk', delivery: '1 week' },
      improvement: '+150% revenue',
      testimonial: "The automation suite transformed my business. I'm spending more time shooting and less time on admin work."
    },
    {
      name: 'Mike Davis Studios',
      industry: 'Portrait Photography',
      logo: 'MD',
      bgColor: 'from-fuchsia-500 to-purple-600',
      before: { clients: '15/mo', response: '12hrs', workflow: 'manual' },
      after: { clients: '45/mo', response: 'instant', workflow: 'automated' },
      improvement: '+200% clients',
      testimonial: 'The AI assistant handles inquiries 24/7, and the workflow automation is a game-changer!'
    }
  ];

  const filteredSolutions = activeTab === 'all' 
    ? solutions 
    : solutions.filter(s => s.category === activeTab);

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
                <CameraIcon className="w-5 h-5 text-purple-600 mr-2" />
                <span className="text-purple-900 font-bold text-sm">AI-Powered Photography Solutions</span>
              </div>
              
              <h1 className="text-[2.5rem] leading-tight sm:text-[3rem] sm:leading-tight lg:text-[4rem] lg:leading-tight font-bold mb-2 sm:mb-3 lg:mb-4">
                <span className="text-gray-900">Transform Your</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
                  Photography Studio
                </span>
              </h1>
              
              <p className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-gray-700 mb-8 leading-relaxed">
                Complete photography business automation suite with AI assistants, smart workflows, 
                gallery management, and analytics to double your bookings in 90 days.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border-2 border-purple-100">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">2x</div>
                  <div className="text-xs text-gray-600 font-semibold mt-1">More Bookings</div>
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

            {/* Right Visual - Photography Dashboard */}
            <div className="relative">
              <div className="relative">
                {/* Main Card - Booking Dashboard */}
                <Card className="border-2 border-purple-100 mb-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">This Month's Bookings</div>
                      <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">32 Sessions</div>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <CameraIcon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-green-600 font-semibold">
                    <ArrowTrendingUpIcon className="w-5 h-5" />
                    <span>+45% from last month</span>
                  </div>
                </Card>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="!bg-gradient-to-br !from-purple-500 !to-fuchsia-600 !text-white">
                    <div className="w-12 h-12 bg-red bg-opacity-20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">

                      <UserGroupIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold mb-1">148</div>
                    <div className="text-sm opacity-90">Active Clients</div>
                  </Card>
                  <Card className="!bg-gradient-to-br !from-fuchsia-500 !to-pink-600 !text-white">

                    <div className="w-12 h-12 bg-red bg-opacity-20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">

                      <ChartBarIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold mb-1">96%</div>
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
              <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent"> Grow Your Studio</span>
            </h2>
            <p className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to automate and scale your photography business
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
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Studio Automation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              AI-powered tools to automate every aspect of your photography business
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
                className={`card-hover card-shimmer relative p-8 rounded-3xl bg-white border-2 shadow-xl overflow-hidden group h-full flex flex-col ${
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
      
      {/* Benefits Section */}
      <Section className="py-12 sm:py-14 bg-white">
        <Container>
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-gray-900 mb-4">
              Why Professional Photographers
              <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent"> Choose Us</span>
            </h2>
            <p className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-gray-600 max-w-3xl mx-auto">
              Join 1000+ successful photographers growing with our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10 sm:mb-12">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                animationDelay={index * 0.1}
                className="card-hover card-shimmer text-center h-full flex flex-col justify-between"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl`}>
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
                <div className={`inline-block px-5 py-2 bg-gradient-to-r ${benefit.color} text-white rounded-full text-sm font-bold shadow-lg`}>
                  {benefit.metric}
                </div>
              </Card>
            ))}
          </div>

          {/* Stats Banner */}
          <div className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 rounded-3xl p-12 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-5xl font-bold mb-2">1000+</div>
                <div className="text-purple-100 font-semibold">Active Studios</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">$25M+</div>
                <div className="text-fuchsia-100 font-semibold">Revenue Generated</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">5M+</div>
                <div className="text-pink-100 font-semibold">Photos Delivered</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">99.9%</div>
                <div className="text-purple-100 font-semibold">Uptime SLA</div>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Success <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">Stories</span>
              </h3>
              <p className="text-lg text-gray-600">Real results from photographers using our platform</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-5 sm:gap-6">
              {successStories.map((story, index) => (
                <Card
                  key={index}
                  animationDelay={index * 0.15}
                  className="card-hover card-shimmer border-2 border-purple-100"
                  padding="lg"
                >
                  {/* Header */}
                  <div className="flex items-center gap-6 mb-8 pb-8 border-b border-purple-100">
                    <div className={`w-20 h-20 bg-gradient-to-br ${story.bgColor} rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg`}>
                      {story.logo}
                    </div>
                    <div>
                      <h3 className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-bold text-gray-900 mb-1">{story.name}</h3>
                      <div className="text-purple-600 font-semibold">{story.industry}</div>
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
                          <div key={key} className="flex justify-between items-center bg-purple-50 rounded-lg p-3">
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
                  <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-2xl p-6 border-l-4 border-purple-500">
                    <div className="text-4xl text-purple-300 mb-2">"</div>
                    <p className="text-gray-700 italic leading-relaxed">{story.testimonial}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Benefits Table Section */}
      <Section className="py-12 sm:py-14 bg-white">
        <Container>
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
              Summary of <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">Benefits</span>
              for a Photography Business
            </h3>
            <p className="text-base sm:text-lg text-gray-600 px-4">Transform your photography business with automation</p>
          </div>

          {/* Mobile Card View */}
          <div className="block lg:hidden space-y-4 px-4">
            {/* Lead Management Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <UserGroupIcon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Lead Management</h4>
                </div>
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                  <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">Drowning in "Price?" DMs & inquiries</p>
                </div>
                <div>
                  <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                  <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-medium">Instant Inquiry Response & Brochure Delivery</p>
                </div>
                <div>
                  <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                  <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">Saves hours per week, captures more leads</p>
                </div>
              </div>
            </div>

            {/* Client Conversion Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-pink-600 to-fuchsia-600 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <SparklesIcon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Client Conversion</h4>
                </div>
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                  <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">Leads "ghosting" after getting prices</p>
                </div>
                <div>
                  <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                  <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-medium">Automated Nurturing & Follow-Up Sequences</p>
                </div>
                <div>
                  <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                  <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">Higher booking rates</p>
                </div>
              </div>
            </div>

            {/* Remaining cards - shown only when expanded */}
            {showAllBenefits && (
              <>
            {/* Client Experience Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-fuchsia-600 to-purple-600 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <StarIcon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Client Experience</h4>
                </div>
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                  <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">Inconsistent communication & manual work</p>
                </div>
                <div>
                  <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                  <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-medium">Automated Client Workflow from Booking to Delivery</p>
                </div>
                <div>
                  <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                  <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">Professional, high-end client service</p>
                </div>
              </div>
            </div>

            {/* Financials Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CurrencyDollarIcon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Financials</h4>
                </div>
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                  <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">Awkwardly chasing late payments</p>
                </div>
                <div>
                  <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                  <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-medium">Automated Payment Reminders</p>
                </div>
                <div>
                  <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                  <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">On-time payments, improved cash flow</p>
                </div>
              </div>
            </div>

            {/* Scheduling Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-pink-600 to-fuchsia-600 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CalendarIcon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Scheduling</h4>
                </div>
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                  <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">Client no-shows for sessions</p>
                </div>
                <div>
                  <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                  <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-medium">Automated SMS & Email Session Reminders</p>
                </div>
                <div>
                  <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                  <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">Reduced no-shows, organized schedule</p>
                </div>
              </div>
            </div>

            {/* Marketing & Growth Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-fuchsia-600 to-purple-600 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ChartBarIcon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Marketing & Growth</h4>
                </div>
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                  <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">Difficulty booking during off-seasons</p>
                </div>
                <div>
                  <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                  <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-medium">Targeted Mini-Session & Offer Campaigns</p>
                </div>
                <div>
                  <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                  <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">Fills calendar, generates repeat business</p>
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
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  See More Benefits
                </button>
              </div>
            )}
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto mb-20">
            <table className="w-full border-collapse bg-white rounded-2xl shadow-xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600">
                  <th className="px-6 py-5 text-left text-sm font-bold text-white uppercase tracking-wider border-r border-purple-400">
                    Category
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-bold text-white uppercase tracking-wider border-r border-purple-400">
                    Problem
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-bold text-white uppercase tracking-wider border-r border-purple-400">
                    Rocket Flow Solution
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-bold text-white uppercase tracking-wider">
                    Impact
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {/* Lead Management */}
                <tr className="group hover:bg-gradient-to-r hover:from-purple-50 hover:to-fuchsia-50 transition-all duration-300">
                  <td className="px-6 py-6 border-r border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <UserGroupIcon className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-bold text-gray-900">Lead Management</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 border-r border-gray-200">
                    <p className="text-gray-700">Drowning in "Price?" DMs & inquiries</p>
                  </td>
                  <td className="px-6 py-6 border-r border-gray-200">
                    <p className="text-gray-700 font-medium">Instant Inquiry Response & Brochure Delivery</p>
                  </td>
                  <td className="px-6 py-6">
                    <p className="text-green-600 font-bold">Saves hours per week, captures more leads</p>
                  </td>
                </tr>

                {/* Client Conversion */}
                <tr className="group hover:bg-gradient-to-r hover:from-pink-50 hover:to-fuchsia-50 transition-all duration-300">
                  <td className="px-6 py-6 border-r border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-fuchsia-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <SparklesIcon className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-bold text-gray-900">Client Conversion</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 border-r border-gray-200">
                    <p className="text-gray-700">Leads "ghosting" after getting prices</p>
                  </td>
                  <td className="px-6 py-6 border-r border-gray-200">
                    <p className="text-gray-700 font-medium">Automated Nurturing & Follow-Up Sequences</p>
                  </td>
                  <td className="px-6 py-6">
                    <p className="text-green-600 font-bold">Higher booking rates</p>
                  </td>
                </tr>

                {/* Client Experience */}
                <tr className="group hover:bg-gradient-to-r hover:from-fuchsia-50 hover:to-purple-50 transition-all duration-300">
                  <td className="px-6 py-6 border-r border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <StarIcon className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-bold text-gray-900">Client Experience</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 border-r border-gray-200">
                    <p className="text-gray-700">Inconsistent communication & manual work</p>
                  </td>
                  <td className="px-6 py-6 border-r border-gray-200">
                    <p className="text-gray-700 font-medium">Automated Client Workflow from Booking to Delivery</p>
                  </td>
                  <td className="px-6 py-6">
                    <p className="text-green-600 font-bold">Professional, high-end client service</p>
                  </td>
                </tr>

                {/* Financials */}
                <tr className="group hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300">
                  <td className="px-6 py-6 border-r border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <CurrencyDollarIcon className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-bold text-gray-900">Financials</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 border-r border-gray-200">
                    <p className="text-gray-700">Awkwardly chasing late payments</p>
                  </td>
                  <td className="px-6 py-6 border-r border-gray-200">
                    <p className="text-gray-700 font-medium">Automated Payment Reminders</p>
                  </td>
                  <td className="px-6 py-6">
                    <p className="text-green-600 font-bold">On-time payments, improved cash flow</p>
                  </td>
                </tr>

                {/* Scheduling */}
                <tr className="group hover:bg-gradient-to-r hover:from-pink-50 hover:to-fuchsia-50 transition-all duration-300">
                  <td className="px-6 py-6 border-r border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-fuchsia-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <CalendarIcon className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-bold text-gray-900">Scheduling</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 border-r border-gray-200">
                    <p className="text-gray-700">Client no-shows for sessions</p>
                  </td>
                  <td className="px-6 py-6 border-r border-gray-200">
                    <p className="text-gray-700 font-medium">Automated SMS & Email Session Reminders</p>
                  </td>
                  <td className="px-6 py-6">
                    <p className="text-green-600 font-bold">Reduced no-shows, organized schedule</p>
                  </td>
                </tr>

                {/* Marketing & Growth */}
                <tr className="group hover:bg-gradient-to-r hover:from-fuchsia-50 hover:to-purple-50 transition-all duration-300">
                  <td className="px-6 py-6 border-r border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <ChartBarIcon className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-bold text-gray-900">Marketing & Growth</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 border-r border-gray-200">
                    <p className="text-gray-700">Difficulty booking during off-seasons</p>
                  </td>
                  <td className="px-6 py-6 border-r border-gray-200">
                    <p className="text-gray-700 font-medium">Targeted Mini-Session & Offer Campaigns</p>
                  </td>
                  <td className="px-6 py-6">
                    <p className="text-green-600 font-bold">Fills calendar, generates repeat business</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Testimonials Section */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 relative inline-block">
              What Our 
              <span className="bg-gradient-to-r from-primary to-secondary text-black"> Clients Say</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </h2>
            <p className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-gray-600 max-w-3xl mx-auto">
              Hear from photographers who have transformed their businesses with our digital solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-5 sm:gap-6">
            <Card className="card-hover card-shimmer p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 border-none shadow-lg relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-radial from-primary-100 to-transparent opacity-50 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-radial from-secondary-100 to-transparent opacity-30 rounded-full"></div>
              
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-black font-bold text-xl mr-5 shadow-md">
                    SW
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900">Sarah Wilson</div>
                    <div className="text-gray-600">Wedding Photographer</div>
                  </div>
                </div>
                <div className="relative">
                  <div className="text-4xl text-primary-500 absolute -top-5 -left-2 opacity-40">"</div>
                  <p className="text-gray-700 italic text-lg relative z-10 mb-5 pl-4">
                    The automated client communication and gallery delivery system has revolutionized my workflow. I'm saving 15+ hours per week on admin tasks, and my clients love the seamless experience.
                  </p>
                  <div className="text-4xl text-primary-500 absolute bottom-0 right-0 opacity-40">"</div>
                </div>
                <div className="flex text-secondary mt-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 fill-current text-yellow-500" />
                  ))}
                </div>
              </div>
            </Card>
            
            <Card className="card-hover card-shimmer p-8 rounded-2xl bg-gradient-to-br from-secondary-50 to-primary-50 border-none shadow-lg relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-radial from-secondary-100 to-transparent opacity-50 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-radial from-primary-100 to-transparent opacity-30 rounded-full"></div>
              
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-black font-bold text-xl mr-5 shadow-md">
                    MR
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900">Michael Rodriguez</div>
                    <div className="text-gray-600">Commercial Photographer</div>
                  </div>
                </div>
                <div className="relative">
                  <div className="text-4xl text-secondary-500 absolute -top-5 -left-2 opacity-40">"</div>
                  <p className="text-gray-700 italic text-lg relative z-10 mb-5 pl-4">
                    Since implementing the bulk SMS and portfolio solutions, my booking rate has increased by 40%. The automated follow-ups and professional online presence have been game-changers.
                  </p>
                  <div className="text-4xl text-secondary-500 absolute bottom-0 right-0 opacity-40">"</div>
                </div>
                <div className="flex text-secondary mt-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 fill-current text-yellow-500" />
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
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
              Photography Business?
            </h2>
            
            <p className="text-xl md:text-2xl text-white text-opacity-90 mb-12 leading-relaxed">
              Start your 14-day free trial. No credit card required. 
              Get your studio automated in 24 hours.
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
          </div>
        </Container>
      </Section>


      <Footer />
    </div>
  );
}
