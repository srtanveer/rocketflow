'use client'

import { useState } from "react";
import { Navbar, Footer, Button, Card, Section, Container, ProvideMoreSection } from '.';
import {
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  BookOpenIcon,
  DevicePhoneMobileIcon,
  CogIcon,
  ComputerDesktopIcon,
  StarIcon,
  BoltIcon,
  ChatBubbleOvalLeftIcon,
  ChartBarIcon,
  BuildingLibraryIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  BriefcaseIcon,
  LanguageIcon,
  CheckCircleIcon,
  RocketLaunchIcon,
  SparklesIcon,
  UserGroupIcon,
  ClockIcon,
  ShieldCheckIcon,
  UsersIcon,
  ClipboardDocumentCheckIcon,
  PresentationChartLineIcon,
  PlayIcon
} from '@heroicons/react/24/outline';

export default function EducationPage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);
  const [showAllBenefits, setShowAllBenefits] = useState(false);

  const solutions = [
    {
      id: 'lead-capture',
      title: 'Instant Lead Capture & First Response',
      description: 'Auto-reply to social media comments and send course brochures instantly',
      icon: BoltIcon,
      gradient: 'from-blue-500 via-indigo-600 to-purple-700',
      features: ['Auto-reply to comments', 'Deliver brochures automatically', '24/7 lead capture', 'Free demo class links'],
      stats: { value: '24/7', label: 'Lead Capture' }
    },
    {
      id: 'segmentation',
      title: 'Smart Student Segmentation',
      description: 'Automatically tag students based on goals, weaknesses, and urgency',
      icon: ChartBarIcon,
      gradient: 'from-indigo-500 via-purple-600 to-pink-700',
      features: ['Target score tracking', 'Module weakness tags', 'Urgency classification', 'Status pipeline view'],
      stats: { value: '3x', label: 'Higher Conversion' }
    },
    {
      id: 'nurturing',
      title: 'Automated Nurturing & Follow-Up',
      description: 'Multi-channel sequences keep prospects engaged until enrollment',
      icon: ChatBubbleOvalLeftIcon,
      gradient: 'from-purple-500 via-pink-600 to-rose-700',
      features: ['Email sequences', 'Messenger follow-ups', 'SMS reminders', 'Testimonial videos'],
      stats: { value: '80%', label: 'FAQs Automated' }
    },
    {
      id: 'registration',
      title: 'Seamless Registration & Onboarding',
      description: 'Automate the entire enrollment process from form to confirmation',
      icon: AcademicCapIcon,
      gradient: 'from-cyan-500 via-blue-600 to-indigo-700',
      features: ['CRM integration', 'Team notifications', 'Auto confirmation emails', 'Payment details delivery'],
      stats: { value: '92%', label: 'Attendance Boost' }
    },
    {
      id: 'reminders',
      title: 'Automated Class & Test Reminders',
      description: 'Reduce absenteeism with timely automated reminders',
      icon: DevicePhoneMobileIcon,
      gradient: 'from-blue-600 via-cyan-600 to-teal-700',
      features: ['Class SMS reminders', 'Mock test notifications', 'Payment reminders', 'Zoom link delivery'],
      stats: { value: '92%', label: 'Attendance Rate' }
    },
    {
      id: 'promotion',
      title: 'Targeted Batch & Course Promotion',
      description: 'Run specific campaigns for different student segments',
      icon: BookOpenIcon,
      gradient: 'from-violet-500 via-purple-600 to-fuchsia-700',
      features: ['Segment-based campaigns', 'Workshop promotions', 'Last minute prep offers', 'Upsell opportunities'],
      stats: { value: '67%', label: 'Enrollment Increase' }
    },
    {
      id: 'ai-counselor',
      title: '24/7 AI-Powered Admissions Counselor',
      description: 'Handle common inquiries automatically, qualify leads intelligently',
      icon: ChatBubbleLeftRightIcon,
      gradient: 'from-pink-500 via-rose-600 to-red-700',
      features: ['Course fee queries', 'Duration & timings', 'Study materials info', 'Lead qualification'],
      stats: { value: '80%', label: 'Queries Handled' }
    },
    {
      id: 'analytics',
      title: 'Performance Analytics',
      description: 'Track and optimize every step of your admissions funnel',
      icon: ChartBarIcon,
      gradient: 'from-orange-500 via-red-600 to-pink-700',
      features: ['Campaign tracking', 'Conversion rates', 'Message effectiveness', 'ROI optimization'],
      stats: { value: '4.2x', label: 'Marketing ROI' }
    },
    {
      id: 'communication-hub',
      title: 'Unified Student Communication Hub',
      description: 'Manage all conversations in one dashboard with full context',
      icon: CogIcon,
      gradient: 'from-teal-500 via-emerald-600 to-green-700',
      features: ['Single dashboard', 'Full history view', 'No lost messages', 'Team coordination'],
      stats: { value: '100%', label: 'Message Tracking' }
    }
  ];

  const benefits = [
    {
      icon: StarIcon,
      title: 'Higher Quality Applications',
      description: "Attract students who are the right fit for your programs through precisely targeted campaigns and messaging",
      metric: '52% increase in qualified leads',
      color: 'blue'
    },
    {
      icon: BoltIcon,
      title: 'Competitive Differentiation',
      description: "Stand out in a crowded educational marketplace with distinctive positioning and compelling value propositions",
      metric: '83% improved brand perception',
      color: 'indigo'
    },
    {
      icon: ChatBubbleOvalLeftIcon,
      title: 'Lower Cost Per Enrollment',
      description: 'Optimize your recruitment funnel with data-driven strategies that reduce acquisition costs while improving quality',
      metric: '37% reduction in cost per student',
      color: 'purple'
    },
    {
      icon: ChartBarIcon,
      title: 'Measurable Marketing Impact',
      description: "Track every stage of the student journey from first click to enrollment with comprehensive attribution modeling",
      metric: '4.2x verified marketing ROI',
      color: 'violet'
    }
  ];

  const features = [
    {
      title: 'Lead Management',
      description: 'Automated 24/7 lead capture and intelligent qualification',
      icon: BoltIcon,
      stats: ['Auto-reply to inquiries', '24/7 availability', 'Smart segmentation']
    },
    {
      title: 'Student Nurturing',
      description: 'Multi-channel engagement keeping prospects warm',
      icon: ChatBubbleOvalLeftIcon,
      stats: ['Email sequences', 'SMS follow-ups', 'Testimonial sharing']
    },
    {
      title: 'Enrollment Process',
      description: 'Streamlined registration and onboarding automation',
      icon: AcademicCapIcon,
      stats: ['Auto confirmations', 'Payment tracking', 'CRM integration']
    },
    {
      title: 'Operations Management',
      description: 'Class reminders and attendance optimization',
      icon: DevicePhoneMobileIcon,
      stats: ['Class reminders', 'Test notifications', 'Zoom links']
    }
  ];

  const stats = [
    { number: '80%', label: 'FAQs Automated', icon: ChatBubbleLeftRightIcon },
    { number: '24/7', label: 'Lead Capture', icon: ClockIcon },
    { number: '92%', label: 'Attendance Boost', icon: CheckCircleIcon },
    { number: '3x', label: 'Higher Conversion', icon: ChartBarIcon }
  ];

  const caseStudies = [
    {
      company: 'IELTS Excellence Academy',
      industry: 'IELTS Coaching',
      challenge: 'Student inquiries not being captured 24/7, leading to lost leads and 80% of repetitive FAQ queries consuming counselor time',
      solution: 'Implemented AI chatbot and automated lead capture system with instant brochure delivery across all social media channels',
      results: ['67% increase in enrollment rate', '80% of FAQs handled automatically', '24/7 lead capture with zero staff overhead'],
      logo: 'IE'
    },
    {
      company: 'IELTS Pro Institute',
      industry: 'IELTS Coaching',
      challenge: 'Low 65% class attendance rate and manual reminder process consuming 15+ hours weekly of staff time',
      solution: 'Deployed automated SMS and email reminder system with smart scheduling and integrated calendar sync',
      results: ['92% attendance rate achieved', '27% increase from baseline', 'Saved 15 hours/week on admin tasks'],
      logo: 'IP'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section - Following CorporateOfficePage structure */}
      <Section className="pt-20 sm:pt-24 pb-12 sm:pb-16 relative overflow-hidden">
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-64 h-64 border-4 border-purple-200 transform rotate-45"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 border-4 border-fuchsia-200 transform -rotate-12"></div>
            <div className="absolute top-1/2 left-1/2 w-72 h-72 border-4 border-pink-200 transform rotate-12"></div>
          </div>
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-purple-100 to-fuchsia-100 rounded-full mt-14 mb-5 border border-purple-200">
                <AcademicCapIcon className="w-4 h-4 text-purple-600 mr-2" />
                <span className="text-purple-900 font-semibold text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">IELTS Coaching Excellence</span>
              </div>
              
              <h1 className="text-[2.5rem] leading-tight sm:text-[3rem] sm:leading-tight lg:text-[4rem] lg:leading-tight font-bold mb-5">
                <span className="text-gray-900">Rocket Flow for</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
                  IELTS Centers
                </span>
              </h1>
              
              <p className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-gray-600 mb-6 leading-relaxed">
                Revolutionize your IELTS coaching center with intelligent automation for lead generation, 
                student management, and operational efficiency. Act as a 24/7 virtual admissions officer.
              </p>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="flex items-start gap-2">
                  <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ChatBubbleLeftRightIcon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">80% Automated</div>
                    <div className="text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] text-gray-600">FAQs handled</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-9 h-9 bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">24/7 Active</div>
                    <div className="text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] text-gray-600">Lead capture</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircleIcon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">92% Attendance</div>
                    <div className="text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] text-gray-600">With reminders</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-9 h-9 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ChartBarIcon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">3x Higher</div>
                    <div className="text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] text-gray-600">Conversion rate</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 hover:from-purple-700 hover:via-fuchsia-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-semibold text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem] shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  <PlayIcon className="w-5 h-5" />
                  Start Free Trial
                </Button>
                <button className="bg-transparent border-2 border-purple-600 text-purple-700 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-xl font-semibold text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem] transition-all hover:shadow-md">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Right Visual - Video/Dashboard Preview */}
            <div className="relative">
              <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(8,112,184,0.3)]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/MZnyjXSUX3Q"
                  title="IELTS Coaching Center Automation"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Video Caption */}
              <p className="text-center text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] text-gray-500 mt-3">
                See how Rocket Flow transforms IELTS coaching centers
              </p>

              {/* Floating Badge */}
              <div className="absolute -top-8 -right-8 bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white px-5 py-2.5 rounded-full shadow-2xl font-bold text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] transform rotate-6 hover:rotate-0 transition-transform duration-300">
                🎓 IELTS Optimized
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Features Showcase - Interactive Tabs */}
      <Section className="py-12 sm:py-14 bg-white">
        <Container>
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-gray-900 mb-4">
              Complete Suite for
              <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent"> IELTS Centers</span>
            </h2>
            <p className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-gray-600 max-w-3xl mx-auto">
              Everything your coaching center needs in one powerful platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card
                key={index}
                animationDelay={index * 0.1}
                className={`card-hover cursor-pointer border-2 ${
                  activeFeature === index
                    ? 'bg-gradient-to-br from-purple-50 to-fuchsia-50 border-purple-300 scale-105'
                    : 'border-gray-200 hover:border-purple-200'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">{stat}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Solutions Grid - 9 Powerful Features */}
      <Section className="py-12 sm:py-14 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
        <Container>
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-gray-900 mb-4">
              9 Powerful Features
              <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent"> for IELTS Centers</span>
            </h2>
            <p className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-gray-600 max-w-3xl mx-auto">
              Automate every aspect of your student journey from first contact to final enrollment and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {solutions.map((solution, index) => (
              <Card
                key={solution.id}
                className={`card-hover card-shimmer relative p-8 rounded-3xl bg-white border-2 shadow-xl overflow-hidden group ${
                  hoveredService === solution.id 
                    ? 'border-purple-300' 
                    : 'border-gray-200 hover:border-purple-200'
                }`}
                onMouseEnter={() => setHoveredService(solution.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Gradient Overlay */}
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
                <div className="space-y-3 relative z-10">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <div className={`w-2 h-2 bg-gradient-to-r ${solution.gradient} rounded-full flex-shrink-0`}></div>
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

      {/* Provide More Section */}
      <ProvideMoreSection />

      {/* Benefits Section */}
      <Section className="py-12 sm:py-14 bg-white">
        <Container>
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-gray-900 mb-4">
              Why IELTS Centers
              <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent"> Choose Rocket Flow</span>
            </h2>
            <p className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-gray-600 max-w-3xl mx-auto">
              Join hundreds of coaching centers transforming their operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10 sm:mb-12">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                animationDelay={index * 0.1}
                className="bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-blue-100"
              >
                  <div className={`w-16 h-16 bg-gradient-to-br from-${benefit.color}-500 to-${benefit.color}-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
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
          <div className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 rounded-3xl p-12 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-black" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-purple-100 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Table - Transform Every Challenge */}
          <div className="mt-20">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
                Transform Every Challenge into <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">Growth Opportunity</span>
              </h3>
              <p className="text-base sm:text-lg text-gray-600 px-4">How Rocket Flow solves the biggest challenges facing IELTS coaching centers</p>
            </div>

            {/* Mobile Card View */}
            <div className="block lg:hidden space-y-4 px-4">
              {/* Lead Management Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Lead Management</h4>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">High volume of repetitive inquiries</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-medium">AI Chat Assistant & Automated First Response</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">80% of FAQs handled automatically</p>
                  </div>
                </div>
              </div>

              {/* Conversion Rate Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-fuchsia-600 to-pink-600 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <UserGroupIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Conversion Rate</h4>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">Leads go cold after the first inquiry</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-medium">Multi-channel Nurturing Sequences (Email, SMS)</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">Higher lead-to-enrollment ratio</p>
                  </div>
                </div>
              </div>

              {/* Remaining cards - shown only when expanded */}
              {showAllBenefits && (
                <>
              {/* Admin Overload Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CogIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Admin Overload</h4>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">Manually sending class/test reminders</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-medium">Automated SMS & Email Reminder System</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">Increased attendance, less admin work</p>
                  </div>
                </div>
              </div>

              {/* Sales & Marketing Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-fuchsia-600 to-pink-600 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ChartBarIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Sales & Marketing</h4>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">Sending generic offers to everyone</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-medium">Smart Tagging & Segmented Campaigns</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">Higher campaign ROI & upsells</p>
                  </div>
                </div>
              </div>

              {/* Data Management Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpenIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Data Management</h4>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">Manual data entry for new students</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-medium">Automated Form Integration to CRM/Sheets</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">Error-free, organized student data</p>
                  </div>
                </div>
              </div>

              {/* Student Experience Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-fuchsia-600 to-pink-600 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <SparklesIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Student Experience</h4>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">Slow response times & scattered info</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-medium">Unified Communication Hub & Instant Info Delivery</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">Professional and seamless student journey</p>
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
            <div className="hidden lg:block overflow-x-auto rounded-2xl shadow-xl">
              <table className="w-full border-collapse bg-white">
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
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                          <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-bold text-gray-900 text-lg">Lead Management</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed">High volume of repetitive inquiries</p>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-medium">AI Chat Assistant & Automated First Response</p>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-green-600 leading-relaxed font-bold">
                        80% of FAQs handled automatically
                      </p>
                    </td>
                  </tr>

                  {/* Conversion Rate */}
                  <tr className="group hover:bg-gradient-to-r hover:from-fuchsia-50 hover:to-pink-50 transition-all duration-300">
                    <td className="px-6 py-6 border-r border-gray-200">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                          <UserGroupIcon className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-bold text-gray-900 text-lg">Conversion Rate</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed">Leads go cold after the first inquiry</p>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-medium">Multi-channel Nurturing Sequences (Email, SMS)</p>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-green-600 leading-relaxed font-bold">
                        Higher lead-to-enrollment ratio
                      </p>
                    </td>
                  </tr>

                  {/* Admin Overload */}
                  <tr className="group hover:bg-gradient-to-r hover:from-purple-50 hover:to-fuchsia-50 transition-all duration-300">
                    <td className="px-6 py-6 border-r border-gray-200">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                          <CogIcon className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-bold text-gray-900 text-lg">Admin Overload</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed">Manually sending class/test reminders</p>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-medium">Automated SMS & Email Reminder System</p>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-green-600 leading-relaxed font-bold">
                        Increased attendance, less admin work
                      </p>
                    </td>
                  </tr>

                  {/* Sales & Marketing */}
                  <tr className="group hover:bg-gradient-to-r hover:from-fuchsia-50 hover:to-pink-50 transition-all duration-300">
                    <td className="px-6 py-6 border-r border-gray-200">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                          <ChartBarIcon className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-bold text-gray-900 text-lg">Sales & Marketing</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed">Sending generic offers to everyone</p>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-medium">Smart Tagging & Segmented Campaigns</p>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-green-600 leading-relaxed font-bold">
                        Higher campaign ROI & upsells
                      </p>
                    </td>
                  </tr>

                  {/* Data Management */}
                  <tr className="group hover:bg-gradient-to-r hover:from-purple-50 hover:to-fuchsia-50 transition-all duration-300">
                    <td className="px-6 py-6 border-r border-gray-200">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                          <BookOpenIcon className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-bold text-gray-900 text-lg">Data Management</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed">Manual data entry for new students</p>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-medium">Automated Form Integration to CRM/Sheets</p>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-green-600 leading-relaxed font-bold">
                        Error-free, organized student data
                      </p>
                    </td>
                  </tr>

                  {/* Student Experience */}
                  <tr className="group hover:bg-gradient-to-r hover:from-fuchsia-50 hover:to-pink-50 transition-all duration-300">
                    <td className="px-6 py-6 border-r border-gray-200">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                          <SparklesIcon className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-bold text-gray-900 text-lg">Student Experience</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed">Slow response times & scattered info</p>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-medium">Unified Communication Hub & Instant Info Delivery</p>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-green-600 leading-relaxed font-bold">
                        Professional and seamless student journey
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-16">
              <div className="bg-gradient-to-r from-purple-50 to-fuchsia-50 rounded-2xl p-8 border border-purple-100">
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Revolutionize Your IELTS Coaching Center</h3>
                <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
                  From lead management to student experience, Rocket Flow automates your entire coaching workflow,
                  letting you focus on what matters most - helping students achieve their dream IELTS scores.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-center space-x-3 justify-center">
                    <SparklesIcon className="w-6 h-6 text-purple-600" />
                    <span className="font-semibold text-gray-800">Save 20+ hours/week</span>
                  </div>
                  <div className="flex items-center space-x-3 justify-center">
                    <ChartBarIcon className="w-6 h-6 text-purple-600" />
                    <span className="font-semibold text-gray-800">Increase enrollments by 40%</span>
                  </div>
                  <div className="flex items-center space-x-3 justify-center">
                    <RocketLaunchIcon className="w-6 h-6 text-purple-600" />
                    <span className="font-semibold text-gray-800">Scale your coaching center</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Case Studies */}
      <Section className="py-12 sm:py-14 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
        <Container>
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-gray-900 mb-4">
              Success Stories from
              <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent"> IELTS Center Owners</span>
            </h2>
            <p className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-gray-600 max-w-3xl mx-auto">
              Real results from coaching centers like yours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-5 sm:gap-6">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                animationDelay={index * 0.15}
                className="border-2 border-purple-100"
                padding="lg"
              >
                {/* Company Header */}
                <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-100">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-fuchsia-700 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    {study.logo}
                  </div>
                  <div>
                    <h3 className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-bold text-gray-900 mb-1">{study.company}</h3>
                    <div className="text-purple-600 font-semibold">{study.industry}</div>
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
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
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
                      <div key={idx} className="flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
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
      <Section className="py-16 sm:py-18 bg-gradient-to-r from-purple-700 via-fuchsia-700 to-pink-700 relative overflow-hidden">
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
              <AcademicCapIcon className="w-6 h-6 text-black mr-2" />
              <span className="text-black font-semibold">Transform Your IELTS Center Today</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
              Ready to Transform Your
              <br />
              IELTS Coaching Center?
            </h2>
            
            <p className="text-xl md:text-2xl text-white text-opacity-90 mb-12 leading-relaxed">
              Join hundreds of coaching centers that have automated their operations, increased enrollments, 
              and provided exceptional student experiences with Rocket Flow.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white px-12 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                <PlayIcon className="w-5 h-5" />
                Start Free 14-Day Trial
              </Button>
              <Button className="bg-transparent border-3 border-white text-white hover:bg-white hover:text-purple-700 px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300">
                Schedule a Demo
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-white text-opacity-90">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-6 h-6" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="w-6 h-6" />
                <span>Setup in 5 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <BoltIcon className="w-6 h-6" />
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
