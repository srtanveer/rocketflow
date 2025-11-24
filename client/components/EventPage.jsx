'use client'

import { useState } from "react";
import { Navbar, Footer, Button, Card, Section, Container, ShinyText, ProvideMoreSection } from '.';
import {
  CalendarIcon,
  UserGroupIcon,
  SparklesIcon,
  MapPinIcon,
  TicketIcon,
  ChartBarIcon,
  MegaphoneIcon,
  CameraIcon,
  BuildingStorefrontIcon,
  HeartIcon,
  ClockIcon,
  InboxIcon,
  InformationCircleIcon,
  MapIcon,
  ArrowPathRoundedSquareIcon,
  UserPlusIcon,
  TrophyIcon,
  ChatBubbleBottomCenterTextIcon,
  StarIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  RocketLaunchIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

export default function EventPage() {
  const [hoveredSolution, setHoveredSolution] = useState(null);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [hoveredAutomation, setHoveredAutomation] = useState(null);
  const [showAllBenefits, setShowAllBenefits] = useState(false);

  const automationServices = [
    {
      id: 'instant-inquiry',
      title: 'Instant Inquiry Management',
      description: 'Comprehensive management system for all event types with AI-powered response handling and intelligent routing.',
      icon: InboxIcon,
      gradient: 'from-purple-400 via-pink-500 to-red-600',
      features: [
        'Impress potential high-value clients with immediate, professional responses',
        'Capture and qualify leads before your competitors can',
        'Automatically filter and direct inquiries to the right team member'
      ],
      stats: { value: '90%', label: 'Faster Response' }
    },
    {
      id: 'smart-segmentation',
      title: 'Smart Lead & Attendee Segmentation',
      description: 'Intelligent audience segmentation and management powered by machine learning for precise targeting and engagement.',
      icon: UserGroupIcon,
      gradient: 'from-blue-400 via-indigo-500 to-purple-600',
      features: [
        'Clean pipeline for sales team and organized lists for marketing',
        'Understand your audience for better event planning',
        'Send highly relevant communication to every contact'
      ],
      stats: { value: '2.5x', label: 'Better Engagement' }
    },
    {
      id: 'automated-journeys',
      title: 'Automated Client & Attendee Journeys',
      description: 'Seamless automation for client and attendee communication with personalized touchpoints and smart engagement tracking.',
      icon: ArrowPathRoundedSquareIcon,
      gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
      features: [
        'Nurture high-value leads to increase booking rates',
        'Build excitement and ensure smooth attendee experience',
        'Automate 90% of pre-event communication'
      ],
      stats: { value: '85%', label: 'Task Automation' }
    },
    {
      id: 'registration',
      title: 'Seamless Registration System',
      description: 'Streamlined client briefing and ticket registration process with real-time analytics and smart capacity management.',
      icon: TicketIcon,
      gradient: 'from-emerald-400 via-green-500 to-lime-600',
      features: [
        'Collect detailed client requirements structurally',
        'Automate ticket sales and delivery',
        'Reduce manual data entry and administrative work'
      ],
      stats: { value: '99.9%', label: 'Booking Success' }
    },
    {
      id: 'consultation',
      title: 'Automated Consultation & Reminders',
      description: 'Smart consultation management and reminder system with AI-powered scheduling optimization.',
      icon: ClockIcon,
      gradient: 'from-rose-400 via-fuchsia-500 to-purple-600',
      features: [
        'Reduce no-shows for important client consultations',
        'Keep attendees informed and excited',
        'Ensure timely payments from clients'
      ],
      stats: { value: '75%', label: 'Less No-shows' }
    },
    {
      id: 'promotion',
      title: 'Targeted Event Promotion',
      description: 'Strategic promotion system for maximum impact with data-driven marketing and smart audience targeting.',
      icon: MegaphoneIcon,
      gradient: 'from-amber-400 via-orange-500 to-red-600',
      features: [
        'Sell more tickets with relevant marketing',
        'Maximize attendance and revenue',
        'Create urgency with timely offers'
      ]
    },
    {
      id: 'ai-desk',
      title: '24/7 AI Information Desk',
      description: 'Round-the-clock AI-powered event support system with natural language processing for seamless attendee assistance.',
      icon: SparklesIcon,
      gradient: 'from-violet-500 via-purple-600 to-fuchsia-700',
      features: [
        'Provide instant answers and reduce support load',
        'Improve client and attendee experience',
        'Free up team for complex planning'
      ],
      stats: { value: '24/7', label: 'Support Coverage' }
    },
    {
      id: 'analytics',
      title: 'Event ROI & Analytics',
      description: 'Comprehensive event analytics and ROI tracking with predictive insights and real-time performance monitoring.',
      icon: ChartBarIcon,
      gradient: 'from-blue-500 via-indigo-600 to-purple-700',
      features: [
        'Make data-driven decisions for future events',
        'Optimize marketing budget for highest ROI',
        'Understand core business strengths'
      ],
      stats: { value: '3x', label: 'ROI Improvement' }
    },
    {
      id: 'unified-comms',
      title: 'Unified Communication Center',
      description: 'Centralized communication management system with multi-channel integration and real-time collaboration tools.',
      icon: ChatBubbleBottomCenterTextIcon,
      gradient: 'from-cyan-500 via-blue-600 to-indigo-700',
      features: [
        'Single, organized view of all communications',
        'Seamless team coordination',
        'Professional and scalable operation'
      ],
      stats: { value: '60%', label: 'Faster Response' }
    }
  ];

  // Function to render event solution icon
  const renderSolutionIcon = (solutionId) => {
    switch (solutionId) {
      case 'event-planning':
        return <CalendarIcon className="w-8 h-8" />;
      case 'attendee-management':
        return <UserGroupIcon className="w-8 h-8" />;
      case 'event-marketing':
        return <MegaphoneIcon className="w-8 h-8" />;
      case 'venue-management':
        return <MapPinIcon className="w-8 h-8" />;
      case 'ticketing':
        return <TicketIcon className="w-8 h-8" />;
      case 'event-technology':
        return <SparklesIcon className="w-8 h-8" />;
      default:
        return <CalendarIcon className="w-8 h-8" />;
    }
  };

  const eventSolutions = [
    {
      id: 'social-inbox',
      title: 'Unified Social Inbox',
      description: "Manage all your client communications from Facebook, Instagram, WhatsApp, and other platforms in one centralized dashboard with AI-powered insights.",
      icon: ChatBubbleBottomCenterTextIcon,
      gradient: 'from-indigo-500 via-purple-600 to-pink-700',
      features: ['Multi-platform integration', 'Automated message routing', 'Priority inbox sorting', 'Quick response templates'],
      stats: { value: '100%', label: 'Platform Coverage' }
    },
    {
      id: 'auto-response',
      title: 'Smart Auto-Response',
      description: "AI-powered automated responses that handle common event inquiries across all messaging platforms 24/7 with contextual understanding.",
      icon: SparklesIcon,
      gradient: 'from-purple-500 via-pink-600 to-rose-700',
      features: ['Context-aware replies', 'Multi-language support', 'Custom response rules', 'Sentiment analysis'],
      stats: { value: '90%', label: 'Accuracy Rate' }
    },
    {
      id: 'inquiry-management',
      title: 'Inquiry Management',
      description: 'Automatically categorize and route client inquiries to the right team members with AI-powered prioritization and smart workflow automation.',
      icon: InboxIcon,
      gradient: 'from-blue-600 via-cyan-600 to-teal-700',
      features: ['Smart categorization', 'Team assignment', 'Follow-up automation', 'Performance tracking'],
      stats: { value: '85%', label: 'Auto-Resolution' }
    },
    {
      id: 'client-engagement',
      title: 'Client Engagement Hub',
      description: 'Maintain consistent client communication across all channels with automated updates, personalized touchpoints, and engagement analytics.',
      icon: UserGroupIcon,
      gradient: 'from-emerald-500 via-teal-600 to-cyan-700',
      features: ['Scheduled updates', 'Event milestones', 'Feedback collection', 'Client portal access'],
      stats: { value: '4.8', label: 'Client Rating' }
    },
    {
      id: 'social-monitoring',
      title: 'Social Media Monitoring',
      description: 'Monitor and respond to event-related mentions, comments, and messages across all social platforms',
      icon: MegaphoneIcon,
      color: 'from-primary-dark to-gray-700',
      features: ['Real-time alerts', 'Sentiment tracking', 'Competitor analysis', 'Engagement metrics']
    },
    {
      id: 'workflow-automation',
      title: 'Workflow Automation',
      description: "Streamline your event management process with automated workflows for client communications",
      icon: ArrowPathRoundedSquareIcon,
      color: 'from-secondary-500 to-secondary-700',
      features: ['Custom workflows', 'Task automation', 'Integration with CRM', 'Performance analytics']
    }
  ];

  const eventBenefits = [
    {
      title: 'Increased Attendance',
      description: 'Our proven marketing strategies help you reach and attract your target audience effectively.',
      icon: ChartBarIcon
    },
    {
      title: 'Memorable Experiences',
      description: 'Create lasting impressions with carefully curated event experiences.',
      icon: HeartIcon
    },
    {
      title: 'Professional Documentation',
      description: 'Capture every moment with professional event-management and documentation services.',
      icon: CameraIcon
    },
    {
      title: 'Vendor Management',
      description: 'Access our network of trusted vendors and get the best services for your event.',
      icon: BuildingStorefrontIcon
    }
  ];

  const successStories = [
    {
      name: 'Aurora Events',
      industry: 'Weddings',
      logo: 'AE',
      bgColor: 'from-pink-500 to-rose-600',
      before: { sales: '$8K/mo', bookings: '60', support: '8hrs/day' },
      after: { sales: '$22K/mo', bookings: '170', support: '24/7 auto' },
      improvement: '+180% bookings',
      testimonial: 'RocketFlow automated our inquiry pipeline and the number of confirmed bookings skyrocketed. The team can now focus on design, not follow-ups.'
    },
    {
      name: 'Summit Conferences',
      industry: 'Conferences',
      logo: 'SC',
      bgColor: 'from-blue-500 to-indigo-600',
      before: { attendees: '1.2K', retention: '30%', ops: 'manual' },
      after: { attendees: '3.8K', retention: '75%', ops: 'automated' },
      improvement: '+220% attendee retention',
      testimonial: 'From registration to post-event analytics, RocketFlow gave us the tools to operate at scale while improving attendee satisfaction.'
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <Section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50 pt-32 pb-16">
        {/* Animated decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-300/30 to-blue-300/30 rounded-full filter blur-3xl transform -translate-y-1/2 animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-300/30 to-indigo-300/30 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-indigo-300/20 to-violet-300/20 rounded-full filter blur-3xl animate-pulse-slower"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>

        <Container className="relative">
          {/* Enterprise Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full cursor-pointer group hover:from-blue-500/20 hover:to-indigo-500/20 shadow-[0_4px_20px_-2px_rgba(59,130,246,0.2)] hover:shadow-[0_8px_25px_-5px_rgba(59,130,246,0.3)]">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <BuildingOfficeIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold ml-3 text-lg">Enterprise-Grade Event Platform</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-[2.5rem] leading-tight sm:text-[3rem] sm:leading-tight lg:text-[4rem] lg:leading-tight font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
                Transform Your{' '}
                <span className="relative">
                  <span className="absolute -inset-1 blur-xl bg-gradient-to-r from-blue-600/30 to-indigo-600/30"></span>
                  <span className="relative bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Event Management
                  </span>
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Elevate your event planning with AI-powered automation, intelligent coordination, and enterprise-grade solutions designed for modern businesses.
              </p>
 
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="group flex flex-col p-6 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-[0_4px_20px_-2px_rgba(59,130,246,0.1)] hover:shadow-[0_8px_25px_-5px_rgba(59,130,246,0.2)]">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4">
                    <ChartBarIcon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">1.2K+</div>
                  <div className="text-sm font-medium text-gray-600">Events Managed</div>
                </div>

                <div className="group flex flex-col p-6 bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-[0_4px_20px_-2px_rgba(99,102,241,0.1)] hover:shadow-[0_8px_25px_-5px_rgba(99,102,241,0.2)] transition-all duration-300 hover:scale-105">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <UserGroupIcon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">500+</div>
                  <div className="text-sm font-medium text-gray-600">Enterprise Clients</div>
                </div>

                <div className="group flex flex-col p-6 bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-[0_4px_20px_-2px_rgba(147,51,234,0.1)] hover:shadow-[0_8px_25px_-5px_rgba(147,51,234,0.2)] transition-all duration-300 hover:scale-105">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <SparklesIcon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-xl font-bold text-gray-900">99.9%</div>
                  <div className="text-sm text-gray-600">Service Uptime</div>
                </div>

                <div className="group flex flex-col p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-3 group-hover:bg-blue-200 transition-colors duration-300">
                    <ClockIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-xl font-bold text-gray-900">70%</div>
                  <div className="text-sm text-gray-600">Time Saved</div>
                </div>
              </div>

              <div className="flex gap-6">
                <Button 
                  variant="primary"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-sm sm:text-base px-8 py-4 shadow-lg hover:shadow-xl font-semibold"
                >
                  Request Demo
                </Button>
                <button
                  className="bg-white border-2 border-indigo-600 text-indigo-700 hover:bg-indigo-50 text-sm sm:text-base px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-md"
                >
                  View Solutions
                </button>
              </div>
            </div>

            <div className="relative">
              {/* Stats Card */}
              <div className="absolute -top-18 right-0 bg-gradient-to-br !from-blue-600 !to-indigo-700 rounded-2xl p-3 w-150 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_35px_rgba(59,130,246,0.25)] transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                    <ChartBarIcon className="w-7 h-7 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <div className="text-sm text-white">Monthly communications</div>
                    <div className="text-2xl font-bold text-white">1.5M+</div>
                  </div>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="flex-1 bg-white bg-opacity-20 rounded-full h-2"></div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-white">Monthly Growth</span>
                  <span className="text-sm font-semibold text-white">+32%</span>
                </div>
              </div>

              {/* Main Content Display */}
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 mt-16">
                <div className="aspect-video bg-white rounded-xl shadow-lg overflow-hidden">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/m8qrcnM6cW4?si=GutyEwDLV8uo34k-" 
                    title="Event Management Platform Overview" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  />
                </div>
              </div>

              {/* AI Assistant Badge */}
              <div className="absolute -bottom right-0 bg-gradient-to-br !from-blue-600 !to-indigo-700 rounded-2xl p-3 w-150 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_35px_rgba(59,130,246,0.25)] transition-all duration-300 group">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                  <SparklesIcon className="w-7 h-7 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className=" flex -end">
                  <div className="font-semibold text-white group-hover:text-white transition-colors duration-300">AI Event Assistant</div>
                  <div className="text-sm ml-70 text-white group-hover:text-white transition-colors duration-300">
                    Processing requests
                    <span className="inline-block ml-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Automation Services Section */}
      <Section className="py-16 sm:py-18 bg-gradient-to-b from-slate-50 via-white to-white">
        <Container>
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Intelligent Event Automation
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Transform your event management with AI-powered solutions that streamline operations and enhance attendee experiences.
            </p>
          </div>
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-100 to-blue-100 rounded-full mb-6">
              <SparklesIcon className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-gray-800 font-medium">Enterprise Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900 bg-clip-text text-transparent">
                Smart Event Management
              </span>{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionize your event operations with our comprehensive automation solutions designed for enterprise excellence
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {automationServices.map((service) => (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredAutomation(service.id)}
                onMouseLeave={() => setHoveredAutomation(null)}
                className="card-hover card-shimmer group h-full flex flex-col relative overflow-hidden bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 shadow-[0_4px_20px_-2px_rgba(59,130,246,0.1)] hover:shadow-[0_8px_25px_-5px_rgba(59,130,246,0.2)] transition-all duration-300"
              >
                <div className="absolute top-0 right-0 p-4">
                  {service.stats && (
                    <div className="text-right">
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        {service.stats.value}
                      </div>
                      <div className="text-sm text-gray-600">{service.stats.label}</div>
                    </div>
                  )}
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient || 'from-blue-500 to-indigo-600'} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className="relative z-10 flex-1">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.features.map((feature, index) => (
                      <div 
                        key={index} 
                        className="flex items-center text-sm text-gray-600 group-hover:translate-x-1 transition-transform duration-300"
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-600 mr-3 group-hover:bg-indigo-600 transition-colors duration-300" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      {/* Provide More Section */}
      <ProvideMoreSection />
      {/* Service Impact Table Section */}
      <Section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <div className="text-center mb-8 sm:mb-16">
            <ShinyText className="text-red-600 font-semibold text-sm uppercase tracking-wider">
              Complete Solution Overview
            </ShinyText>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-4 px-4">
              Transform Every Challenge into <span className="text-red-500">Growth Opportunity</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mt-4 px-4">
              See how RocketFlow solves the biggest challenges facing event managers in today's dynamic market
            </p>
          </div>

          {/* Mobile Card View */}
          <div className="block lg:hidden space-y-4 px-4">
            {/* Lead Management Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-red-500 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <InboxIcon className="w-6 h-6 text-white" />
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
                  <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">Saves hours per week</p>
                </div>
              </div>
            </div>

            {/* Client Conversion Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <UserGroupIcon className="w-6 h-6 text-white" />
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
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <SparklesIcon className="w-6 h-6 text-white" />
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
                  <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">Professional service</p>
                </div>
              </div>
            </div>

            {/* Financials Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4">
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
                  <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">Improved cash flow</p>
                </div>
              </div>
            </div>

            {/* Scheduling Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-orange-600 to-amber-600 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-6 h-6 text-white" />
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
                  <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">Reduced no-shows</p>
                </div>
              </div>
            </div>

            {/* Marketing & Growth Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-pink-600 to-rose-600 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MegaphoneIcon className="w-6 h-6 text-white" />
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
                  <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">Accelerated growth</p>
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
                  className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  See More Benefits
                </button>
              </div>
            )}
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto rounded-2xl shadow-xl">
            <table className="w-full bg-white">
              <thead className="bg-red-500">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider text-white">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider text-white">Problem</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider text-white">Rocket Flow Solution</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider text-white">Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="transform transition-all duration-300 hover:scale-[1.01] hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:shadow-md group">
                  <td className="px-6 py-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                        <InboxIcon className="w-5 h-5 text-red-600" />
                      </div>
                      <span className="text-base font-semibold text-gray-900 group-hover:text-red-600">Lead Management</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">Drowning in "Price?" DMs & inquiries</td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">Instant Inquiry Response & Brochure Delivery</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 group-hover:bg-green-200">
                      <CheckCircleIcon className="w-4 h-4 mr-1" />
                      Saves hours per week
                    </span>
                  </td>
                </tr>
                <tr className="transform transition-all duration-300 hover:scale-[1.01] hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:shadow-md group">
                  <td className="px-6 py-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <UserGroupIcon className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-base font-semibold text-gray-900 group-hover:text-blue-600">Client Conversion</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">Leads "ghosting" after getting prices</td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">Automated Nurturing & Follow-Up Sequences</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 group-hover:bg-green-200">
                      <ChartBarIcon className="w-4 h-4 mr-1" />
                      Higher booking rates
                    </span>
                  </td>
                </tr>
                <tr className="transform transition-all duration-300 hover:scale-[1.01] hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:shadow-md group">
                  <td className="px-6 py-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                        <SparklesIcon className="w-5 h-5 text-purple-600" />
                      </div>
                      <span className="text-base font-semibold text-gray-900 group-hover:text-purple-600">Client Experience</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">Inconsistent communication & manual work</td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">Automated Client Workflow from Booking to Delivery</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 group-hover:bg-green-200">
                      <StarIcon className="w-4 h-4 mr-1" />
                      Professional service
                    </span>
                  </td>
                </tr>
                <tr className="transform transition-all duration-300 hover:scale-[1.01] hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:shadow-md group">
                  <td className="px-6 py-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                        <CurrencyDollarIcon className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-base font-semibold text-gray-900 group-hover:text-green-600">Financials</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">Awkwardly chasing late payments</td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">Automated Payment Reminders</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 group-hover:bg-green-200">
                      <CurrencyDollarIcon className="w-4 h-4 mr-1" />
                      Improved cash flow
                    </span>
                  </td>
                </tr>
                <tr className="transform transition-all duration-300 hover:scale-[1.01] hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:shadow-md group">
                  <td className="px-6 py-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                        <ClockIcon className="w-5 h-5 text-orange-600" />
                      </div>
                      <span className="text-base font-semibold text-gray-900 group-hover:text-orange-600">Scheduling</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">Client no-shows for sessions</td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">Automated SMS & Email Session Reminders</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 group-hover:bg-green-200">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      Reduced no-shows
                    </span>
                  </td>
                </tr>
                <tr className="transform transition-all duration-300 hover:scale-[1.01] hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:shadow-md group">
                  <td className="px-6 py-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                        <MegaphoneIcon className="w-5 h-5 text-pink-600" />
                      </div>
                      <span className="text-base font-semibold text-gray-900 group-hover:text-pink-600">Marketing & Growth</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">Difficulty booking during off-seasons</td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">Targeted Mini-Session & Offer Campaigns</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 group-hover:bg-green-200">
                      <RocketLaunchIcon className="w-4 h-4 mr-1" />
                      Accelerated growth
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-16">
            <div className="bg-gradient-to-r from-red-50 to-white rounded-2xl p-8 border border-red-100">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Revolutionize Your Event Management</h3>
              <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
                From lead management to client experience, RocketFlow automates your entire event business workflow,
                letting you focus on creating unforgettable experiences.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3 justify-center">
                  <SparklesIcon className="w-6 h-6 text-red-600" />
                  <span className="font-semibold text-gray-800">Save 20+ hours/week</span>
                </div>
                <div className="flex items-center space-x-3 justify-center">
                  <ChartBarIcon className="w-6 h-6 text-red-600" />
                  <span className="font-semibold text-gray-800">Increase bookings by 40%</span>
                </div>
                <div className="flex items-center space-x-3 justify-center">
                  <RocketLaunchIcon className="w-6 h-6 text-red-600" />
                  <span className="font-semibold text-gray-800">Scale your business</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Solutions Grid */}
      <Section className="py-16">
        <Container>
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Event Solutions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to plan, execute, and succeed with your events
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {eventSolutions.map((solution) => (
              <Card
                key={solution.id}
                onMouseEnter={() => setHoveredSolution(solution.id)}
                onMouseLeave={() => setHoveredSolution(null)}
                className="card-hover card-shimmer group relative overflow-hidden bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 shadow-[0_4px_20px_-2px_rgba(59,130,246,0.1)] h-[28rem]">
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient || 'from-blue-500 to-indigo-600'} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{solution.description}</p>
                  <div className="space-y-3">
                    {solution.features.map((feature, index) => (
                      <div 
                        key={index} 
                        className="flex items-center text-sm text-gray-600 group-hover:translate-x-1 transition-transform duration-300"
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-600 mr-3 group-hover:bg-indigo-600 transition-colors duration-300" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Benefits Summary Section */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Benefits Summary
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              How Rocket Flow Transforms Your Event Management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {eventBenefits.map((benefit, index) => (
              <Card
                key={index}
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
                className="card-hover card-shimmer group relative overflow-hidden bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 shadow-[0_4px_20px_-2px_rgba(59,130,246,0.1)] h-[15rem]"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 mx-auto">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Success Stories Section (Ecommerce style) */}
      <Section className="py-12 sm:py-14">
        <Container>
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-gray-900 mb-4">
              Real Results from
              <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent"> Real Stores</span>
            </h2>
            <p className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-gray-600 max-w-3xl mx-auto">
              See how our clients transformed their businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {successStories.map((story, index) => (
              <Card
                key={index}
                animationDelay={index * 0.15}
                className="card-hover card-shimmer group h-full flex flex-col border-2 border-red-100 overflow-hidden"
                padding="lg"
              >
                {/* Header */}
                <div className="flex items-center gap-4 sm:gap-5 mb-6 pb-6 border-b border-red-100">
                  <div className={`w-16 h-16 bg-gradient-to-br ${story.bgColor} rounded-2xl flex items-center justify-center text-white font-bold text-[1.5rem] sm:text-[1.75rem] lg:text-[2rem] shadow-lg transform transition-transform duration-300 group-hover:scale-110`}>
                    {story.logo}
                  </div>
                  <div>
                    <h3 className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-bold text-gray-900 mb-1">{story.name}</h3>
                    <div className="text-red-600 font-semibold text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">{story.industry}</div>
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
                        <div key={key} className="flex justify-between items-center bg-red-50 rounded-lg p-2">
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
                <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-5 border-l-4 border-red-500 mt-auto">
                  <div className="text-3xl text-red-300 mb-2">"</div>
                  <p className="text-gray-700 italic leading-relaxed text-[0.875rem] sm:text-[0.938rem] lg:text-[1rem]">{story.testimonial}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Call to Action Section */}
      <Section className="py-16">
        <Container>
          <div className="bg-primary-500 rounded-2xl px-6 py-16 sm:p-16">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white">Ready to Create Your Event?</h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
                Let's work together to bring your vision to life. Contact us today to start planning your next successful event.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button variant="white" className="border-2 border-white">Contact Us</Button>
                <Button variant="white-outline" className="border-2 border-white">View Portfolio</Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}