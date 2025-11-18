'use client'

import { useState } from "react";
import { Navbar, Footer, Button, Card, Section, Container, ProvideMoreSection } from '.';
import {
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  DevicePhoneMobileIcon,
  BuildingOfficeIcon,
  UsersIcon,
  CalendarIcon,
  DocumentTextIcon,
  BriefcaseIcon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  CogIcon,
  BoltIcon,
  ShieldCheckIcon,
  ClockIcon,
  PresentationChartLineIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline';

export default function CorporateOfficePage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);
  const [showAllBenefits, setShowAllBenefits] = useState(false);

  const solutions = [
    {
      id: 'bulk-sms',
      title: 'Enterprise SMS Solutions',
      description: 'Professional bulk SMS platform for internal communications, client updates, meeting reminders, and corporate announcements with enterprise-grade reliability.',
      icon: DevicePhoneMobileIcon,
      gradient: 'from-blue-500 via-indigo-600 to-purple-700',
      features: ['Employee notifications', 'Client communications', 'Meeting alerts', 'Emergency broadcasts'],
      stats: { value: '99.9%', label: 'Uptime SLA' }
    },
    {
      id: 'auto-chat',
      title: 'AI Corporate Assistant',
      description: 'Intelligent chatbot for HR queries, IT support, policy information, and employee self-service portal with seamless integration to your systems.',
      icon: ChatBubbleLeftRightIcon,
      gradient: 'from-indigo-500 via-purple-600 to-pink-700',
      features: ['HR assistance', 'IT helpdesk', 'Policy queries', 'Onboarding support'],
      stats: { value: '80%', label: 'Query Resolution' }
    },
    {
      id: 'auto-mail',
      title: 'Automated Email Management',
      description: 'Smart email automation for internal memos, client proposals, meeting schedules, and professional correspondence with template management.',
      icon: EnvelopeIcon,
      gradient: 'from-purple-500 via-pink-600 to-rose-700',
      features: ['Auto-responses', 'Template library', 'Schedule emails', 'Follow-up tracking'],
      stats: { value: '5x', label: 'Faster Communication' }
    },
    {
      id: 'ai-website',
      title: 'Corporate AI Portal',
      description: 'AI-powered corporate website with intelligent navigation, personalized content delivery, and advanced analytics for better stakeholder engagement.',
      icon: ComputerDesktopIcon,
      gradient: 'from-cyan-500 via-blue-600 to-indigo-700',
      features: ['Smart navigation', 'Content personalization', 'Analytics dashboard', 'Multi-language'],
      stats: { value: '250%', label: 'Engagement Boost' }
    },
    {
      id: 'workflow-automation',
      title: 'Workflow Automation',
      description: 'Streamline business processes with intelligent automation for approvals, document routing, task assignments, and progress tracking.',
      icon: CogIcon,
      gradient: 'from-blue-600 via-cyan-600 to-teal-700',
      features: ['Approval workflows', 'Document routing', 'Task automation', 'Integration APIs'],
      stats: { value: '70%', label: 'Time Saved' }
    },
    {
      id: 'analytics',
      title: 'Business Intelligence & Analytics',
      description: 'Advanced analytics and reporting tools to track KPIs, monitor performance, and make data-driven decisions with real-time dashboards.',
      icon: ChartBarIcon,
      gradient: 'from-violet-500 via-purple-600 to-fuchsia-700',
      features: ['Real-time dashboards', 'Custom reports', 'Predictive analytics', 'Data visualization'],
      stats: { value: '10x', label: 'Faster Insights' }
    }
  ];

  const benefits = [
    {
      icon: BriefcaseIcon,
      title: 'Professional Excellence',
      description: 'Elevate your corporate image with enterprise-grade communication tools',
      metric: '95% client satisfaction',
      color: 'blue'
    },
    {
      icon: BoltIcon,
      title: 'Operational Efficiency',
      description: 'Reduce manual tasks by 70% with intelligent automation',
      metric: '10hrs saved/week',
      color: 'indigo'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and compliance with industry standards',
      metric: 'ISO 27001 certified',
      color: 'purple'
    },
    {
      icon: UsersIcon,
      title: 'Team Collaboration',
      description: 'Seamless communication across departments and locations',
      metric: '3x better coordination',
      color: 'violet'
    }
  ];

  const features = [
    {
      title: 'Internal Communications',
      description: 'Streamlined messaging for employees across all departments',
      icon: ChatBubbleLeftRightIcon,
      stats: ['Instant notifications', '99.9% uptime', 'Multi-channel delivery']
    },
    {
      title: 'Client Management',
      description: 'Professional communication tools for client relationships',
      icon: UsersIcon,
      stats: ['Automated follow-ups', 'CRM integration', 'Response tracking']
    },
    {
      title: 'Meeting Management',
      description: 'AI-powered scheduling and reminder systems',
      icon: CalendarIcon,
      stats: ['Smart scheduling', 'Auto-reminders', 'Calendar sync']
    },
    {
      title: 'Document Automation',
      description: 'Intelligent document generation and management',
      icon: DocumentTextIcon,
      stats: ['Template library', 'E-signatures', 'Version control']
    }
  ];

  const caseStudies = [
    {
      company: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'Manual employee communication and scattered information systems',
      solution: 'Implemented AI chatbot for HR and IT support with automated SMS notifications',
      results: ['85% reduction in support tickets', '50% faster onboarding', '$200K annual savings'],
      logo: 'TC'
    },
    {
      company: 'Global Finance Ltd',
      industry: 'Financial Services',
      challenge: 'Inefficient client communication and compliance tracking',
      solution: 'Deployed automated email system with compliance monitoring and bulk SMS alerts',
      results: ['99% compliance rate', '60% faster client response', '40% cost reduction'],
      logo: 'GF'
    }
  ];

  const stats = [
    { number: '500+', label: 'Corporate Clients', icon: BuildingOfficeIcon },
    { number: '1M+', label: 'Messages/Month', icon: DevicePhoneMobileIcon },
    { number: '99.9%', label: 'System Uptime', icon: ShieldCheckIcon },
    { number: '24/7', label: 'Enterprise Support', icon: ClockIcon }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section - Corporate & Professional */}
      <Section className="pt-20 sm:pt-24 pb-12 sm:pb-16 relative overflow-hidden">
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-64 h-64 border-4 border-blue-200 transform rotate-45"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 border-4 border-indigo-200 transform -rotate-12"></div>
            <div className="absolute top-1/2 left-1/2 w-72 h-72 border-4 border-purple-200 transform rotate-12"></div>
          </div>
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-4 border border-blue-200">
                <BuildingOfficeIcon className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-blue-900 font-semibold text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">Enterprise-Grade Solutions</span>
              </div>
              
              <h1 className="text-[2.5rem] leading-tight sm:text-[3rem] sm:leading-tight lg:text-[4rem] lg:leading-tight font-bold mb-4 sm:mb-5">
                <span className="text-gray-900">Empower Your</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Corporate Office
                </span>
              </h1>
              
              <p className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-gray-600 mb-6 leading-relaxed">
                Transform your corporate communications with AI-powered automation, intelligent chatbots, 
                and enterprise-grade messaging solutions designed for modern businesses.
              </p>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-3 mb-6 sm:mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShieldCheckIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">ISO Certified</div>
                    <div className="text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] text-gray-600">Enterprise security</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BoltIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">70% Efficiency</div>
                    <div className="text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] text-gray-600">Time savings</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <UsersIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">500+ Clients</div>
                    <div className="text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] text-gray-600">Trusted globally</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">24/7 Support</div>
                    <div className="text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] text-gray-600">Always available</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem] shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                  Request Demo
                </Button>
                <button className="bg-white border-2 border-indigo-600 text-indigo-700 hover:bg-indigo-50 px-8 py-3 rounded-xl font-semibold text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem] transition-all hover:shadow-md">
                  View Pricing
                </button>
              </div>
            </div>

            {/* Right Visual - Professional Dashboard Preview */}
            <div className="relative">
              <div className="relative">
                {/* Dashboard Cards Stack */}
                <div className="space-y-3">
                  {/* Top Card - Analytics */}
                  <Card animationDelay={0} className="!bg-gradient-to-br !from-blue-600 !to-indigo-700 !text-white">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] opacity-80 mb-1">Monthly Communications</div>
                        <div className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold">1.2M+</div>
                      </div>
                      <div className="w-16 h-16 bg-black bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <ChartBarIcon className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-white bg-opacity-20 rounded-full h-2">
                        <div className="bg-white rounded-full h-2 w-3/4"></div>
                      </div>
                      <span className="text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-semibold">+24%</span>
                    </div>
                  </Card>

                  {/* Middle Cards - Side by Side */}
                  <div className="grid grid-cols-2 gap-3">
                    <Card animationDelay={0.1} className="border-2 border-indigo-100">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-3">
                        <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-[1.5rem] sm:text-[1.75rem] lg:text-[2rem] font-bold text-gray-900 mb-1">98%</div>
                      <div className="text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] text-gray-600">Response Rate</div>
                    </Card>
                    <Card animationDelay={0.15} className="border-2 border-purple-100">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-3">
                        <ClockIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-[1.5rem] sm:text-[1.75rem] lg:text-[2rem] font-bold text-gray-900 mb-1">2.5min</div>
                      <div className="text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] text-gray-600">Avg Response</div>
                    </Card>
                  </div>

                  {/* Bottom Card - Activity */}
                  <Card animationDelay={0.2} className="border-2 border-blue-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                        AI
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">AI Assistant Active</div>
                        <div className="text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] text-gray-600">Handling 45 queries now</div>
                      </div>
                      <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-bold">
                        Live
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-8 -right-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2.5 rounded-full shadow-2xl font-bold text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  🏢 Enterprise Ready
                </div>
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
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Modern Offices</span>
            </h2>
            <p className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-gray-600 max-w-3xl mx-auto">
              Everything your corporate office needs in one powerful platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {features.map((feature, index) => (
              <Card
                key={index}
                animationDelay={index * 0.1}
                className={`card-hover cursor-pointer border-2 ${
                  activeFeature === index
                    ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-indigo-300 scale-105'
                    : 'border-gray-200 hover:border-indigo-200'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-3">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-bold text-gray-900 mb-2">{ feature.title}</h3>
                <p className="text-gray-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] mb-3">{feature.description}</p>
                <div className="space-y-2">
                  {feature.stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
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
      <Section className="py-12 sm:py-14 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
        <Container>
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-gray-900 mb-4">
              Enterprise Solutions
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Built for Scale</span>
            </h2>
            <p className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-gray-600 max-w-3xl mx-auto">
              AI-powered tools designed for corporate excellence and operational efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {solutions.map((solution, index) => (
              <Card
                key={solution.id}
                className={`card-hover card-shimmer relative p-6 rounded-3xl bg-white border-2 shadow-xl overflow-hidden group ${
                  hoveredService === solution.id 
                    ? 'border-indigo-300' 
                    : 'border-gray-200 hover:border-indigo-200'
                }`}
                onMouseEnter={() => setHoveredService(solution.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                {/* Stats Badge */}
                <div className="absolute top-4 right-4 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-bold shadow-md">
                  {solution.stats.value}
                </div>

                {/* Icon */}
                <div className={`relative w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-xl`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-bold text-gray-900 mb-3 relative z-10">
                  {solution.title}
                </h3>
                <p className="text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem] text-gray-600 mb-4 leading-relaxed relative z-10">
                  {solution.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 relative z-10">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">
                      <div className={`w-2 h-2 bg-gradient-to-r ${solution.gradient} rounded-full flex-shrink-0`}></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-4 pt-4 border-t border-gray-100 relative z-10">
                  <div className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] text-gray-500 uppercase tracking-wider">{solution.stats.label}</div>
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
              Why Leading Corporations
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Trust Us</span>
            </h2>
            <p className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-gray-600 max-w-3xl mx-auto">
              Join Fortune 500 companies leveraging our enterprise solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10 sm:mb-12">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                animationDelay={index * 0.1}
                className="bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-blue-100"
              >
                <div className={`w-14 h-14 bg-gradient-to-br from-${benefit.color}-500 to-${benefit.color}-700 rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem] text-gray-600 mb-3 leading-relaxed">{benefit.description}</p>
                <div className={`inline-block px-3 py-1.5 bg-${benefit.color}-100 text-${benefit.color}-700 rounded-full text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold`}>
                  {benefit.metric}
                </div>
              </Card>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-7 h-7 text-black" />
                  </div>
                  <div className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem] text-blue-100 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary of Benefits */}
          <div className="mt-12 sm:mt-14">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-[1.5rem] sm:text-[1.75rem] lg:text-[2rem] font-bold text-gray-900 mb-2 sm:mb-3 px-4">
                Summary of <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Benefits</span>
              </h3>
              <p className="text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem] text-gray-600 px-4">How Rocket Flow transforms corporate operations</p>
            </div>

            {/* Mobile Card View */}
            <div className="block lg:hidden space-y-4 px-4">
              {/* Lead Generation Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BriefcaseIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Lead Generation</h4>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">Inconsistent or low-quality lead flow</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-medium">Automated Lead Magnet Delivery & Inquiry Qualification</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">Consistent pre-qualified leads</p>
                  </div>
                </div>
              </div>

              {/* Sales Cycle Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ChartBarIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Sales Cycle</h4>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">Leads going cold during the long nurturing process</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-medium">Automated, Value-Driven Email Nurturing Sequences</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">Higher conversion rates</p>
                  </div>
                </div>
              </div>

              {/* Remaining cards - shown only when expanded */}
              {showAllBenefits && (
                <>
              {/* Client Management Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <UsersIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Client Management</h4>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">Manual, time-consuming client onboarding process</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-medium">Automated Onboarding & Communication Workflows</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">Better client satisfaction</p>
                  </div>
                </div>
              </div>

              {/* Project Management Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ClipboardDocumentCheckIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Project Management</h4>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">Chasing clients for feedback and approvals</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-medium">Automated Client Deadline & Meeting Reminders</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">Better project timelines</p>
                  </div>
                </div>
              </div>

              {/* Marketing Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <PresentationChartLineIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Marketing</h4>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">Generic marketing messages to all prospects</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-medium">Smart Segmentation for Targeted Content Distribution</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">Better lead quality</p>
                  </div>
                </div>
              </div>

              {/* Efficiency Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BoltIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Efficiency</h4>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">Expert staff bogged down by admin tasks</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-medium">AI Assistant for FAQs & Automated Scheduling</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">Focus on strategic work</p>
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
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
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
                  <tr className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                    <th className="px-6 py-5 text-left text-sm font-bold text-white uppercase tracking-wider border-r border-blue-400">
                      Category
                    </th>
                    <th className="px-6 py-5 text-left text-sm font-bold text-white uppercase tracking-wider border-r border-blue-400">
                      Problem
                    </th>
                    <th className="px-6 py-5 text-left text-sm font-bold text-white uppercase tracking-wider border-r border-blue-400">
                      Rocket Flow Solution
                    </th>
                    <th className="px-6 py-5 text-left text-sm font-bold text-white uppercase tracking-wider">
                      Impact
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {/* Lead Generation */}
                  <tr className="group hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300">
                    <td className="px-5 py-5 border-r border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                          <BriefcaseIcon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-bold text-gray-900 text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Lead Generation</span>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">Inconsistent or low-quality lead flow</p>
                    </td>
                    <td className="px-5 py-5 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-medium text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">Automated Lead Magnet Delivery & Inquiry Qualification</p>
                    </td>
                    <td className="px-5 py-5">
                      <p className="text-green-600 leading-relaxed font-bold text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">
                        Consistent pre-qualified leads
                      </p>
                    </td>
                  </tr>

                  {/* Sales Cycle */}
                  <tr className="group hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300">
                    <td className="px-5 py-5 border-r border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                          <ChartBarIcon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-bold text-gray-900 text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Sales Cycle</span>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">Leads going cold during the long nurturing process</p>
                    </td>
                    <td className="px-5 py-5 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-medium text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">Automated, Value-Driven Email Nurturing Sequences</p>
                    </td>
                    <td className="px-5 py-5">
                      <p className="text-green-600 leading-relaxed font-bold text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">
                        Higher conversion rates
                      </p>
                    </td>
                  </tr>

                  {/* Client Management */}
                  <tr className="group hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300">
                    <td className="px-5 py-5 border-r border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                          <UsersIcon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-bold text-gray-900 text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Client Management</span>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">Manual, time-consuming client onboarding process</p>
                    </td>
                    <td className="px-5 py-5 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-medium text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">Automated Onboarding & Communication Workflows</p>
                    </td>
                    <td className="px-5 py-5">
                      <p className="text-green-600 leading-relaxed font-bold text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">
                        Better client satisfaction
                      </p>
                    </td>
                  </tr>

                  {/* Project Management */}
                  <tr className="group hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 transition-all duration-300">
                    <td className="px-5 py-5 border-r border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                          <ClipboardDocumentCheckIcon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-bold text-gray-900 text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Project Management</span>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">Chasing clients for feedback and approvals</p>
                    </td>
                    <td className="px-5 py-5 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-medium text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">Automated Client Deadline & Meeting Reminders</p>
                    </td>
                    <td className="px-5 py-5">
                      <p className="text-green-600 leading-relaxed font-bold text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">
                        Better project timelines
                      </p>
                    </td>
                  </tr>

                  {/* Marketing */}
                  <tr className="group hover:bg-gradient-to-r hover:from-violet-50 hover:to-purple-50 transition-all duration-300">
                    <td className="px-5 py-5 border-r border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                          <PresentationChartLineIcon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-bold text-gray-900 text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Marketing</span>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">Generic marketing messages to all prospects</p>
                    </td>
                    <td className="px-5 py-5 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-medium text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">Smart Segmentation for Targeted Content Distribution</p>
                    </td>
                    <td className="px-5 py-5">
                      <p className="text-green-600 leading-relaxed font-bold text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">
                        Better lead quality
                      </p>
                    </td>
                  </tr>

                  {/* Efficiency */}
                  <tr className="group hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 transition-all duration-300">
                    <td className="px-5 py-5 border-r border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                          <BoltIcon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-bold text-gray-900 text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">Efficiency</span>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">Expert staff bogged down by admin tasks</p>
                    </td>
                    <td className="px-5 py-5 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-medium text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">AI Assistant for FAQs & Automated Scheduling</p>
                    </td>
                    <td className="px-5 py-5">
                      <p className="text-green-600 leading-relaxed font-bold text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">
                        Focus on strategic work
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
      <Section className="py-12 sm:py-14 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
        <Container>
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-gray-900 mb-4">
              Success Stories from
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Industry Leaders</span>
            </h2>
            <p className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-gray-600 max-w-3xl mx-auto">
              Real results from real corporations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                animationDelay={index * 0.15}
                className="border-2 border-indigo-100"
                padding="lg"
              >
                {/* Company Header */}
                <div className="flex items-center gap-4 sm:gap-5 mb-6 pb-6 border-b border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center text-white font-bold text-[1.5rem] sm:text-[1.75rem] lg:text-[2rem] shadow-lg">
                    {study.logo}
                  </div>
                  <div>
                    <h3 className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-bold text-gray-900 mb-1">{study.company}</h3>
                    <div className="text-indigo-600 font-semibold text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">{study.industry}</div>
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="font-bold text-gray-900 uppercase text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] tracking-wider">Challenge</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">{study.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="font-bold text-gray-900 uppercase text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] tracking-wider">Solution</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">{study.solution}</p>
                </div>

                {/* Results */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-bold text-gray-900 uppercase text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] tracking-wider">Results</span>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-3 border border-green-100">
                        <div className="text-[1.25rem] sm:text-[1.5rem]">✓</div>
                        <span className="text-gray-900 font-semibold text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">{result}</span>
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
      <Section className="py-16 sm:py-18 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 relative overflow-hidden">
        {/* Animated Background Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-64 h-64 border-4 border-white transform rotate-45 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 border-4 border-white transform -rotate-12 animate-pulse animation-delay-2000"></div>
          </div>
        </div>

        <Container className="relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-5 py-2.5 bg-white bg-opacity-20 backdrop-blur-sm rounded-full mb-6">
              <BriefcaseIcon className="w-5 h-5 text-black mr-2" />
              <span className="text-black font-semibold text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">Enterprise Solutions Available</span>
            </div>

            <h2 className="text-[2.5rem] leading-tight sm:text-[3rem] sm:leading-tight lg:text-[4rem] lg:leading-tight font-bold text-white mb-6">
              Transform Your Corporate
              <br />
              Communication Today
            </h2>
            
            <p className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-white text-opacity-90 mb-8 leading-relaxed">
              Join 500+ corporations already saving 70% of time with our AI-powered solutions.
              Get started with a personalized demo.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center mb-8">
              <Button className="bg-white text-indigo-700 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem] shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                Schedule Enterprise Demo
              </Button>
              <Button className="border-3 border-white text-white hover:bg-white hover:text-indigo-700 px-10 py-4 rounded-xl font-bold text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem] transition-all duration-300 backdrop-blur-sm bg-white bg-opacity-10">
                Contact Sales Team
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-white text-opacity-90">
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="w-5 h-5" />
                <span className="text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">Enterprise-grade security</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="w-5 h-5" />
                <span className="text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">24/7 dedicated support</span>
              </div>
              <div className="flex items-center gap-2">
                <BoltIcon className="w-5 h-5" />
                <span className="text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">Quick implementation</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
