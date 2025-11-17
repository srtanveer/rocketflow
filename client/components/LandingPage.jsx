'use client'

import { useState, useEffect } from "react";
import { Navbar, Footer, Button, Card, Section, Container } from '.';
import Link from 'next/link';
import {
  ChatBubbleLeftRightIcon,
  BoltIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CameraIcon,
  AcademicCapIcon,
  BuildingOffice2Icon,
  ShoppingBagIcon,
  PaperAirplaneIcon,
  BuildingOfficeIcon,
  TicketIcon,
  SparklesIcon,
  ShoppingCartIcon,
  ComputerDesktopIcon,
  PlayIcon,
  GlobeAsiaAustraliaIcon,
  VideoCameraIcon,
  QrCodeIcon,
  CalendarIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import { 
  FaFacebook, 
  FaFacebookMessenger, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedin, 
  FaReddit, 
  FaMedium, 
  FaWordpress, 
  FaBlogger, 
  FaGoogle,
  FaYoutube
} from 'react-icons/fa';

export default function LandingPage() {
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredSector, setHoveredSector] = useState(null);
  const [activeChannel, setActiveChannel] = useState('facebook');
  const [activeDashboard, setActiveDashboard] = useState(0);
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // 640px is sm breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-rotate dashboards
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDashboard((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const dashboards = [
    {
      id: 0,
      title: "Sales Analytics",
      stats: [
        { label: "Total Revenue", value: "$48,857", color: "from-blue-500 to-blue-600" },
        { label: "Orders Today", value: "25,852", color: "from-green-500 to-green-600" },
        { label: "Conversion", value: "87%", color: "from-purple-500 to-purple-600" }
      ],
      chart: [60, 80, 45, 90, 70, 100]
    },
    {
      id: 1,
      title: "Engagement Metrics",
      stats: [
        { label: "Total Reach", value: "125K", color: "from-pink-500 to-pink-600" },
        { label: "Engagement", value: "+45%", color: "from-orange-500 to-orange-600" },
        { label: "Click Rate", value: "12.5%", color: "from-cyan-500 to-cyan-600" }
      ],
      chart: [70, 55, 85, 65, 90, 75]
    },
    {
      id: 2,
      title: "Customer Activity",
      stats: [
        { label: "Active Users", value: "3,138", color: "from-indigo-500 to-indigo-600" },
        { label: "New Users", value: "635+", color: "from-teal-500 to-teal-600" },
        { label: "Retention", value: "99.9%", color: "from-emerald-500 to-emerald-600" }
      ],
      chart: [50, 75, 60, 85, 55, 95]
    }
  ];

  const channels = {
    facebook: {
      id: 'facebook',
      name: 'Facebook',
      icon: '📘',
      title: 'Automate Comment, Like & Posting',
      description: 'Managing Facebook for business is time consuming and it needs dedication to gain and maintain customers. Rocket Flow was born due to these main reasons.',
      features: [
        'Automated comment on Facebook Pages & Groups',
        'Scheduled Facebook posting with text, links, images & video',
        'Instantly reply to page\'s comments',
        'Automated like to comments',
        'Engage to your audiences 24/7'
      ],
      image: '/channel_facebook.webp',
      video: null
    },
    messenger: {
      id: 'messenger',
      name: 'Messenger',
      icon: '💬',
      title: 'Smart & Interactive Chatbot',
      description: 'As of 2022, there are 138.1 million people use Facebook Messenger, and it is one of the most popular mobile app in the world. Make your presence known there!',
      features: [
        'Design the chatbot with ease using our "Visual Flow Builder"',
        'Persistent Menu',
        'Engage with your customers 24/7',
        'Collect leads instantly'
      ],
      image: '/channel_messenger.webp',
      video: null
    },
    instagram: {
      id: 'instagram',
      name: 'Instagram',
      icon: '📷',
      title: 'Instagram',
      description: 'Rocket Flow is the easiest and most powerful platform to automate your Instagram DM and marketing for more sales and better customer support.',
      features: [
        'Manage DMs within Rocket Flow app.',
        'Create AI Instagram chatbot with our amazing "Visual Builder"',
        'Persistent Menu',
        'Connect with your audiences 24/7',
        'Collect leads instantly'
      ],
      image: '/channel_instagram.webp',
      video: null
    },
    sms: {
      id: 'sms',
      name: 'SMS',
      icon: '📱',
      title: 'SMS Marketing',
      description: '85% of customers prefer to receive a text message over a call or email, and SMS messages have a whopping 98% open rate! Rocket Flow is your omnichannel!',
      features: [
        'Send bulk SMS',
        'Rocket Flow is integrated with multiple SMS API provider (Twilio, Plivo, Nexmo and a lot more..)',
        'Get more personalized with your audiences'
      ],
      image: null,
      video: '/channel_sms.webm'
    },
    email: {
      id: 'email',
      name: 'Email',
      icon: '✉️',
      title: 'Mass Email Marketing',
      description: 'There are 3.9 billion daily email users. This number is expected to climb to 4.3 billion by 2023. 46 percent of all email opened are on mobile devices!',
      features: [
        'Send bulk Emails',
        'We have integrated multiple Email API provider (Sendgrid, Mailgun, Madrill & SMTP)',
        'Connect your 3rd party email marketing tools such as MailChimp, Activecampaign and a lot more...'
      ],
      image: '/channel_email.webp',
      video: null
    }
  };

  // Function to render service icon
  const renderServiceIcon = (service) => {
    switch (service.id) {
      case 'multi-channel':
        return <ChatBubbleLeftRightIcon className="w-8 h-8" />;
      case 'auto-reply':
        return <BoltIcon className="w-8 h-8" />;
      case 'industry-solutions':
        return <GlobeAltIcon className="w-8 h-8" />;
      case 'engagement':
        return <DevicePhoneMobileIcon className="w-8 h-8" />;
      default:
        return <ChatBubbleLeftRightIcon className="w-8 h-8" />;
    }
  };

  const services = [
    {
      id: 'multi-channel',
      title: 'Multi-Channel Marketing',
      description: 'Automated campaigns across Facebook, Messenger, Instagram, SMS, and Email to reach your audience everywhere',
      icon: ChatBubbleLeftRightIcon,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'auto-reply',
      title: 'Automated Workflows',
      description: 'Pre-built workflows for growing followers, collecting emails, responding to comments, and sending automated DMs',
      icon: BoltIcon,
      color: 'from-gray-700 to-gray-900'
    },
    {
      id: 'industry-solutions',
      title: 'Industry-Specific Solutions',
      description: 'Customized marketing automation for 12+ industries including photography, education, hospitality, e-commerce, and more',
      icon: GlobeAltIcon,
      color: 'from-blue-600 to-blue-800'
    },
    {
      id: 'engagement',
      title: 'Customer Engagement',
      description: 'Intelligent tools to boost engagement, request follows, collect leads, and convert audiences into valued customers',
      icon: DevicePhoneMobileIcon,
      color: 'from-gray-800 to-black'
    }
  ];

  const sectors = [
    { name: 'Corporate Office', icon: BuildingOfficeIcon, color: 'bg-gradient-to-br from-blue-50 to-blue-100' },
    { name: 'E-commerce', icon: ShoppingCartIcon, color: 'bg-gradient-to-br from-gray-100 to-gray-200' },
    { name: 'Education', icon: AcademicCapIcon, color: 'bg-gradient-to-br from-blue-100 to-blue-200' },
    { name: 'Event Management', icon: SparklesIcon, color: 'bg-gradient-to-br from-gray-50 to-gray-100' },
    { name: 'Gadget Shops', icon: ComputerDesktopIcon, color: 'bg-gradient-to-br from-blue-50 to-blue-100' },
    { name: 'Hotels & Resorts', icon: BuildingOffice2Icon, color: 'bg-gradient-to-br from-gray-100 to-blue-50' },
    { name: 'Organic Products', icon: ShoppingBagIcon, color: 'bg-gradient-to-br from-blue-100 to-gray-100' },
    { name: 'Photography', icon: CameraIcon, color: 'bg-gradient-to-br from-gray-50 to-blue-50' },
    { name: 'Restaurants', icon: ShoppingBagIcon, color: 'bg-gradient-to-br from-blue-50 to-gray-100' },
    { name: 'Salon & Parlor', icon: SparklesIcon, color: 'bg-gradient-to-br from-gray-100 to-blue-100' },
    { name: 'Study Abroad', icon: PaperAirplaneIcon, color: 'bg-gradient-to-br from-blue-100 to-blue-50' },
    { name: 'Travel Booking', icon: TicketIcon, color: 'bg-gradient-to-br from-gray-50 to-gray-100' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-50 to-white text-gray-900 overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <Section className="min-h-screen flex items-center justify-center pt-20 sm:pt-20 pb-8 sm:pb-16" padding="md">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
            {/* Left Side - Text and Buttons */}
            <div className="text-center sm:text-left flex flex-col justify-center px-4 sm:px-0">
              {/* Badge - Mobile Only */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-4 sm:mb-6 mx-auto sm:mx-0 w-fit">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                <span className="text-xs sm:text-sm font-semibold text-blue-600">Welcome to RocketFlow</span>
              </div>

              <div className="mb-5 sm:mb-6 lg:mb-8">
                <h1 className="text-[2rem] leading-[2.5rem] sm:text-4xl sm:leading-tight md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 lg:mb-6">
                  <span className="text-gray-900">One Solution To{' '}</span>
                  <span className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 bg-clip-text text-transparent">Optimize</span>
                  <br className="hidden sm:block" />
                  <span className="text-gray-900"> Your </span>
                  <span className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 bg-clip-text text-transparent">Social Media</span>
                </h1>
                <p className="text-sm leading-relaxed sm:text-base lg:text-xl text-gray-600 max-w-xl mx-auto sm:mx-0">
                  Level up your campaigns, business, marketing and social reach using our 
                  cutting-edge features and ultimately turn your audiences into valued customers.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start mb-5 sm:mb-0">
                <Link href="/tutorial" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all py-3 sm:py-3 text-sm sm:text-base font-semibold rounded-xl">
                    <PlayIcon className="w-5 h-5 text-white" />
                    How It Works
                  </Button>
                </Link>
                
                <Link href="/pricing" className="w-full sm:w-auto">
                  <button className="w-full px-6 py-3 bg-white text-blue-600 font-semibold hover:bg-blue-50 border-2 border-blue-600 rounded-xl transition-all hover:shadow-md text-sm sm:text-base">
                    Try It For Free →
                  </button>
                </Link>
              </div>

              {/* Quick Stats - Redesigned for mobile */}
              <div className="mt-6 sm:mt-8 lg:mt-12 grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 bg-white sm:bg-transparent p-4 sm:p-0 rounded-2xl sm:rounded-none shadow-md sm:shadow-none border sm:border-0 border-blue-100">
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">635+</div>
                  <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600 mt-0.5 sm:mt-1">Active Users</div>
                </div>
                <div className="text-center sm:text-left border-l border-r sm:border-0 border-blue-100">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">55+</div>
                  <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600 mt-0.5 sm:mt-1">Countries</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">99.9%</div>
                  <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600 mt-0.5 sm:mt-1">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Side - Rotating Dashboard Cards */}
            <div className="relative h-[320px] sm:h-[450px] lg:h-[600px] flex items-center justify-center lg:justify-start lg:pl-12 mt-6 sm:mt-8 lg:mt-0 overflow-visible">
              {/* Circular rotating container */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Background decorative circles */}
                <div className="absolute top-1/2 left-1/2 lg:top-[55%] lg:left-[55%] transform -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[360px] lg:w-[500px] h-[200px] sm:h-[360px] lg:h-[500px] border border-blue-100 rounded-full opacity-20"></div>
                <div className="absolute top-1/2 left-1/2 lg:top-[55%] lg:left-[55%] transform -translate-x-1/2 -translate-y-1/2 w-[160px] sm:w-[300px] lg:w-[420px] h-[160px] sm:h-[300px] lg:h-[420px] border border-blue-200 rounded-full opacity-30"></div>

                {/* Rotating Dashboard Cards */}
                {dashboards.map((dashboard, index) => {
                  const rotation = (index - activeDashboard) * 120; // 120 degrees apart
                  const isActive = index === activeDashboard;
                  const radius = typeof window !== 'undefined' 
                    ? (window.innerWidth < 640 ? 55 : window.innerWidth < 1024 ? 100 : 140)
                    : 140;
                  const angle = (rotation * Math.PI) / 180;
                  const x = Math.sin(angle) * radius;
                  const y = -Math.cos(angle) * radius;
                  
                  // Use centered position on mobile, offset position on desktop
                  const topPosition = typeof window !== 'undefined' 
                    ? (window.innerWidth < 1024 ? '50%' : '55%')
                    : '55%';
                  const leftPosition = typeof window !== 'undefined' 
                    ? (window.innerWidth < 1024 ? '50%' : '55%')
                    : '55%';

                  return (
                    <div
                      key={dashboard.id}
                      className={`absolute transition-all duration-1000 ease-in-out ${
                        isActive ? 'scale-100 opacity-100 z-20' : 'scale-75 opacity-40 z-10'
                      }`}
                      style={{
                        top: topPosition,
                        left: leftPosition,
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) ${
                          isActive ? 'scale(1)' : 'scale(0.75)'
                        }`,
                      }}
                    >
                      <div className={`bg-gradient-to-br from-white to-blue-50 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl p-3 sm:p-5 lg:p-8 w-52 sm:w-80 lg:w-96 border border-blue-100 sm:border-2 ${
                        isActive ? 'border-blue-300' : 'border-blue-100'
                      }`}>
                        {/* Dashboard Header */}
                        <div className="flex items-center justify-between mb-2 sm:mb-3 lg:mb-4">
                          <h3 className="text-xs sm:text-base lg:text-lg font-bold text-gray-900">{dashboard.title}</h3>
                          <div className="flex gap-0.5 sm:gap-1">
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-green-500 rounded-full"></div>
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-yellow-500 rounded-full"></div>
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-red-500 rounded-full"></div>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="space-y-1.5 sm:space-y-2 lg:space-y-3 mb-2 sm:mb-3 lg:mb-4">
                          {dashboard.stats.map((stat, idx) => (
                            <div key={idx} className="flex items-center justify-between">
                              <span className="text-[10px] sm:text-sm lg:text-sm text-gray-600">{stat.label}</span>
                              <div className={`text-sm sm:text-base lg:text-lg font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                {stat.value}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Mini Chart */}
                        <div className="border-t border-gray-200 pt-2 sm:pt-3 lg:pt-4">
                          <div className="flex items-end justify-between h-8 sm:h-12 lg:h-16 gap-0.5 sm:gap-1">
                            {dashboard.chart.map((height, idx) => (
                              <div
                                key={idx}
                                className={`flex-1 bg-gradient-to-t ${dashboard.stats[0].color} rounded-t-lg transition-all duration-500`}
                                style={{ height: `${height}%` }}
                              ></div>
                            ))}
                          </div>
                          <div className="text-[9px] sm:text-[10px] lg:text-xs text-gray-500 text-center mt-1 sm:mt-2">Activity Trend</div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Navigation Dots */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {dashboards.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveDashboard(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeDashboard
                          ? 'bg-blue-600 w-8'
                          : 'bg-blue-200 hover:bg-blue-400'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Side Cards - Hidden on mobile, visible on desktop */}
              <div className="hidden sm:block absolute top-0 -right-35 w-40 bg-white rounded-2xl shadow-xl p-3 border border-blue-100 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ChatBubbleLeftRightIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-gray-500">Messages</div>
                    <div className="text-sm font-bold text-gray-900">12.5K</div>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block absolute bottom-0 left-0 w-40 bg-white rounded-2xl shadow-xl p-3 border border-blue-100 animate-float animation-delay-2000">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BoltIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-gray-500">Growth</div>
                    <div className="text-sm font-bold text-gray-900">+45%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Integration Section - Social Media Integration */}
      <Section className="py-20 relative overflow-hidden" padding="lg">
        <Container className="relative z-10">
          <div className="pt-16">
            <p className="text-center text-blue-600 text-xs uppercase tracking-widest mb-16 font-bold">Seamlessly Integrated With</p>
            
            {/* Integration Hub - Network Design */}
            <div className="relative max-w-6xl mx-auto h-[600px] flex items-center justify-center">
              
              {/* SVG Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
                <defs>
                  {/* Gradient definitions for colorful connections */}
                  <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F472B6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#EC4899" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#34D399" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient id="lineGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient id="lineGradient5" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient id="lineGradient6" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F87171" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#EF4444" stopOpacity="0.4" />
                  </linearGradient>
                </defs>

                {/* Connection lines from center to each platform - 9 platforms */}
                {/* Top Left - Facebook */}
                <line x1="50%" y1="50%" x2="20%" y2="10%" stroke="url(#lineGradient1)" strokeWidth="3" className="animate-pulse" style={{ animationDelay: '0s' }} />
                
                {/* Top Center - Google */}
                <line x1="50%" y1="50%" x2="50%" y2="5%" stroke="url(#lineGradient6)" strokeWidth="3" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                
                {/* Top Right - Instagram */}
                <line x1="50%" y1="50%" x2="80%" y2="10%" stroke="url(#lineGradient2)" strokeWidth="3" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                
                {/* Right - Twitter/X */}
                <line x1="50%" y1="50%" x2="92%" y2="35%" stroke="url(#lineGradient5)" strokeWidth="3" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
                
                {/* Bottom Right - YouTube */}
                <line x1="50%" y1="50%" x2="80%" y2="65%" stroke="url(#lineGradient6)" strokeWidth="3" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
                
                {/* Bottom Center - TikTok */}
                <line x1="50%" y1="50%" x2="62%" y2="88%" stroke="url(#lineGradient4)" strokeWidth="3" className="animate-pulse" style={{ animationDelay: '1s' }} />
                
                {/* Bottom Left - WhatsApp */}
                <line x1="50%" y1="50%" x2="38%" y2="88%" stroke="url(#lineGradient3)" strokeWidth="3" className="animate-pulse" style={{ animationDelay: '1.2s' }} />
                
                {/* Left Bottom - WordPress */}
                <line x1="50%" y1="50%" x2="20%" y2="65%" stroke="url(#lineGradient1)" strokeWidth="3" className="animate-pulse" style={{ animationDelay: '1.4s' }} />
                
                {/* Left - Messenger */}
                <line x1="50%" y1="50%" x2="8%" y2="35%" stroke="url(#lineGradient2)" strokeWidth="3" className="animate-pulse" style={{ animationDelay: '1.6s' }} />
              </svg>

              {/* Center Globe/Logo */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative">
                  {/* Outer glow rings */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-white to-blue-300 rounded-full blur-3xl opacity-40 animate-pulse" style={{ width: '200px', height: '200px', left: '-50px', top: '-50px' }}></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full blur-2xl opacity-30" style={{ width: '180px', height: '180px', left: '-40px', top: '-40px', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
                  
                  {/* Main globe container */}
                  <div className="relative bg-white rounded-full p-8 shadow-2xl border-4 border-white/80" style={{ width: '150px', height: '150px' }}>
                    {/* Inner gradient glow */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100/60 to-white"></div>
                    
                    {/* Logo */}
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                      <img src="/RF-small-logo.webp" alt="RocketFlow" className="w-20 h-20 object-contain" />
                    </div>
                  </div>
                  
                  {/* Orbiting ring */}
                  <div className="absolute inset-0 border-2 border-white/40 border-dashed rounded-full animate-spin" style={{ width: '150px', height: '150px', animationDuration: '20s' }}>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-lg"></div>
                  </div>
                </div>
              </div>

              {/* Platform Icons - 9 icons arranged in a circle */}
              
              {/* Top Left - Facebook */}
              <div className="absolute top-[8%] left-[17%] z-10 group">
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
                  <div className="relative bg-white rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 border-2 border-blue-100">
                    <FaFacebook className="w-10 h-10 text-blue-600" />
                  </div>
                </div>
              </div>

              {/* Top Center - Google */}
              <div className="absolute top-[8%] left-1/2 transform -translate-x-1/2 z-10 group">
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-r from-red-400 to-orange-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
                  <div className="relative bg-white rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 border-2 border-gray-200">
                    <FaGoogle className="w-10 h-10 text-red-500" />
                  </div>
                </div>
              </div>

              {/* Top Right - Instagram */}
              <div className="absolute top-[8%] right-[17%] z-10 group">
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-r from-pink-400 to-purple-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
                  <div className="relative bg-white rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 border-2 border-pink-100">
                    <FaInstagram className="w-10 h-10 text-pink-600" />
                  </div>
                </div>
              </div>

              {/* Right - Twitter/X */}
              <div className="absolute top-[32%] right-[5%] z-10 group">
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-r from-gray-700 to-black rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
                  <div className="relative bg-white rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 border-2 border-gray-200">
                    <svg className="w-10 h-10 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom Right - YouTube */}
              <div className="absolute top-[62%] right-[17%] z-10 group">
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-r from-red-500 to-red-700 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
                  <div className="relative bg-white rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 border-2 border-red-100">
                    <FaYoutube className="w-10 h-10 text-red-600" />
                  </div>
                </div>
              </div>

              {/* Bottom Right Center - TikTok */}
              <div className="absolute bottom-[8%] right-[35%] z-10 group">
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-r from-gray-800 to-pink-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
                  <div className="relative bg-white rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 border-2 border-gray-200">
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom Left Center - WhatsApp */}
              <div className="absolute bottom-[8%] left-[35%] z-10 group">
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
                  <div className="relative bg-white rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 border-2 border-green-100">
                    <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom Left - WordPress */}
              <div className="absolute top-[62%] left-[17%] z-10 group">
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
                  <div className="relative bg-white rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 border-2 border-blue-100">
                    <FaWordpress className="w-10 h-10 text-blue-700" />
                  </div>
                </div>
              </div>

              {/* Left - Messenger */}
              <div className="absolute top-[32%] left-[5%] z-10 group">
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
                  <div className="relative bg-white rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 border-2 border-blue-100">
                    <FaFacebookMessenger className="w-10 h-10 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      

      {/* Services Section */}
      <Section id="services" className="">
        <Container>
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Our <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to accelerate your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Multi-Channel Marketing Card */}
            <Card
              className="group relative h-full flex flex-col hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200"
              onMouseEnter={() => setHoveredService('multi-channel')}
              onMouseLeave={() => setHoveredService(null)}
              padding="lg"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg bg-blue-600 flex items-center justify-center text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <ChatBubbleLeftRightIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Multi-Channel Marketing</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">Automated campaigns across Facebook, Messenger, Instagram, SMS, and Email to reach your audience everywhere</p>
            </Card>

            {/* Automated Workflows Card */}
            <Card
              className="group relative h-full flex flex-col hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gray-300"
              onMouseEnter={() => setHoveredService('auto-reply')}
              onMouseLeave={() => setHoveredService(null)}
              padding="lg"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg bg-gray-800 flex items-center justify-center text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <BoltIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Automated Workflows</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">Pre-built workflows for growing followers, collecting emails, responding to comments, and sending automated DMs</p>
            </Card>

            {/* Industry-Specific Solutions Card */}
            <Card
              className="group relative h-full flex flex-col hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200"
              onMouseEnter={() => setHoveredService('industry-solutions')}
              onMouseLeave={() => setHoveredService(null)}
              padding="lg"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg bg-blue-600 flex items-center justify-center text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <GlobeAltIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Industry-Specific Solutions</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">Customized marketing automation for 12+ industries including photography, education, hospitality, e-commerce, and more</p>
            </Card>

            {/* Customer Engagement Card */}
            <Card
              className="group relative h-full flex flex-col hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gray-300"
              onMouseEnter={() => setHoveredService('engagement')}
              onMouseLeave={() => setHoveredService(null)}
              padding="lg"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg bg-gray-800 flex items-center justify-center text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <DevicePhoneMobileIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Customer Engagement</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">Intelligent tools to boost engagement, request follows, collect leads, and convert audiences into valued customers</p>
            </Card>
          </div>
        </Container>
      </Section>
{/* Reach Your Audiences Section */}
      <Section id="channels" className="py-8 sm:py-10 lg:py-12">
        <Container>
          <div className="text-center mb-6 sm:mb-8 px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-gray-900">
              <span className="text-blue-600">📡</span> Reach Your Audiences <span className="text-blue-600">With Ease</span>
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Specialized tools to achieve <span className="text-blue-600 font-semibold">greater heights</span> for your business.
            </p>
          </div>

          {/* Channel Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4">
            {Object.values(channels).map((channel) => (
              <button
                key={channel.id}
                onClick={() => setActiveChannel(channel.id)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeChannel === channel.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                    : 'bg-white text-blue-600 hover:bg-blue-50 border border-blue-600 sm:border-2 hover:border-blue-700'
                }`}
              >
                {channel.icon} {channel.name}
              </button>
            ))}
          </div>

          {/* Channel Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center max-w-5xl mx-auto px-4">
            {/* Left Side - Phone Mockup with Real Images */}
            <div className="relative flex justify-center order-2 md:order-1">
              <div className="relative w-full max-w-[280px] sm:max-w-xs mx-auto">
                {/* iPhone Frame */}
                <div className="relative bg-black rounded-[2rem] sm:rounded-[2.5rem] p-1.5 sm:p-2 shadow-xl">
                  <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden">
                    {/* Notch */}
                    <div className="relative h-5 sm:h-6 bg-black">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-4 sm:h-5 bg-black rounded-b-2xl"></div>
                    </div>
                    
                    {/* Content - Using Real Images/Videos */}
                    <div className="relative h-[480px] sm:h-[570px] w-full bg-white flex items-center justify-center overflow-hidden">
                      {activeChannel === 'facebook' && channels.facebook.image && (
                        <img 
                          src={channels.facebook.image} 
                          alt="Facebook Automation"
                          className="w-full h-full object-cover"
                        />
                      )}
                      
                      {activeChannel === 'messenger' && channels.messenger.image && (
                        <img 
                          src={channels.messenger.image} 
                          alt="Messenger Chatbot"
                          className="w-full h-full object-cover"
                        />
                      )}
                      
                      {activeChannel === 'instagram' && channels.instagram.image && (
                        <img 
                          src={channels.instagram.image} 
                          alt="Instagram Marketing"
                          className="w-full h-full object-cover"
                        />
                      )}
                      
                      {activeChannel === 'sms' && channels.sms.video && (
                        <video 
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                          className="w-full h-full object-cover"
                        >
                          <source src={channels.sms.video} type="video/webm" />
                        </video>
                      )}
                      
                      {activeChannel === 'email' && channels.email.image && (
                        <img 
                          src={channels.email.image} 
                          alt="Email Marketing"
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 md:order-2">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-gray-900">
                <span className="text-blue-600">»</span> {channels[activeChannel].title}
              </h3>
              <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                {channels[activeChannel].description}
              </p>
              <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                {channels[activeChannel].features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5 text-sm">⊗</span>
                    <span className="text-gray-600 text-xs sm:text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full sm:w-auto px-4 sm:px-5 py-2 sm:py-2.5 bg-white text-blue-600 font-semibold flex items-center justify-center gap-2 transition-all text-sm border-2 border-blue-600 rounded-lg hover:bg-blue-50 hover:shadow-md">
                Try It Now <span>›</span>
              </button>
            </div>
          </div>
        </Container>
      </Section>
      {/* More Features Section */}
      <Section className="">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Side - Content */}
            <div className="pl-0 md:pl-8 lg:pl-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
                <span className="text-blue-600">»</span> Provide More In Less Time
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Rocket Flow has the most complete features for Facebook, Messenger, Instagram 
                and other marketing platforms that can outrun any other 3rd party tools existing today.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Highly Interactive</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Human-like Conversation</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Increase Engagement</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Increase Sales</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Automate Customer Support</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Collect Leads</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Sell Products</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Automate Restaurant Food Order</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Setup Chatbots Available 24/7</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Never Miss a Single Message</span>
                </div>
              </div>
            </div>

            {/* Right Side - Video/Image */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="relative h-[565px] w-[300px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-gray-100 p-8">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full rounded-2xl shadow-lg"
                  >
                    <source src="/order_sample.webm" type="video/webm" />
                  </video>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute -top-4 -left-4 w-32 h-32 bg-gray-800 rounded-full opacity-20 blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Sell Online Section */}
      

      {/* Target Sectors Section */}
      <Section id="industries" className="">
        <Container>
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Industries We <span className="text-blue-600">Serve</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for diverse business sectors
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 px-4">
            {sectors.map((sector, index) => (
              <div
                key={sector.name}
                className="group relative"
                onMouseEnter={() => setHoveredSector(sector.name)}
                onMouseLeave={() => setHoveredSector(null)}
              >
                {sector.name === 'Education' ? (
                  <a href="/education" className="block">
                    <div className={`relative h-24 sm:h-auto p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl ${sector.color} shadow-md border border-gray-200 transition-all duration-300 hover:scale-105 sm:hover:scale-110 hover:shadow-lg cursor-pointer flex items-center justify-center`}>
                      <div className="text-center">
                        <div className="w-8 h-8 sm:w-7 sm:h-7 lg:w-8 lg:h-8 mx-auto mb-2 sm:mb-3 text-blue-600">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-xs sm:text-sm font-semibold text-gray-800">{sector.name}</h3>
                      </div>
                    </div>
                  </a>
                ) : sector.name === 'Photography' ? (
                  <Link href="/photography" className="block">
                    <div className={`relative h-24 sm:h-auto p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl ${sector.color} shadow-md border border-gray-200 transition-all duration-300 hover:scale-105 sm:hover:scale-110 hover:shadow-lg cursor-pointer flex items-center justify-center`}>
                      <div className="text-center">
                        <div className="w-8 h-8 sm:w-7 sm:h-7 lg:w-8 lg:h-8 mx-auto mb-2 sm:mb-3 text-gray-800">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-xs sm:text-sm font-semibold text-gray-800">{sector.name}</h3>
                      </div>
                    </div>
                  </Link>
                ) : sector.name === 'Study Abroad' ? (
                  <a href="/study-abroad" className="block">
                    <div className={`relative h-24 sm:h-auto p-4 sm:p-6 rounded-xl sm:rounded-2xl ${sector.color} shadow-md border border-gray-200 transition-all duration-300 hover:scale-105 sm:hover:scale-110 hover:shadow-lg cursor-pointer flex items-center justify-center`}>
                      <div className="text-center">
                        <div className="w-8 h-8 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-blue-600">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-xs sm:text-sm font-semibold text-gray-800">{sector.name}</h3>
                      </div>
                    </div>
                  </a>
                ) : sector.name === 'Hotels & Resorts' ? (
                  <a href="/hotel-and-resort" className="block">
                    <div className={`relative h-24 sm:h-auto p-4 sm:p-6 rounded-xl sm:rounded-2xl ${sector.color} shadow-md border border-gray-200 transition-all duration-300 hover:scale-105 sm:hover:scale-110 hover:shadow-lg cursor-pointer flex items-center justify-center`}>
                      <div className="text-center">
                        <div className="w-8 h-8 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-gray-700">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-xs sm:text-sm font-semibold text-gray-800">{sector.name}</h3>
                      </div>
                    </div>
                  </a>

                ) : sector.name === 'Organic Products' ? (
                  <a href="/organic-products" className="block">

                    <div className={`relative h-24 sm:h-auto p-4 sm:p-6 rounded-xl sm:rounded-2xl ${sector.color} shadow-md border border-gray-200 transition-all duration-300 hover:scale-105 sm:hover:scale-110 hover:shadow-lg cursor-pointer flex items-center justify-center`}>
                      <div className="text-center">
                        <div className="w-8 h-8 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-blue-600">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-xs sm:text-sm font-semibold text-gray-800">{sector.name}</h3>
                      </div>
                    </div>

                  </a>
                ) : sector.name === 'Travel Booking' ? (
                  <a href="/travel-booking" className="block">
                    <div className={`relative h-24 sm:h-auto p-4 sm:p-6 rounded-xl sm:rounded-2xl ${sector.color} shadow-md border border-gray-200 transition-all duration-300 hover:scale-105 sm:hover:scale-110 hover:shadow-lg cursor-pointer flex items-center justify-center`}>
                      <div className="text-center">
                        <div className="w-8 h-8 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-gray-700">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-xs sm:text-sm font-semibold text-gray-800">{sector.name}</h3>
                      </div>
                    </div>
                  </a>
                ) : sector.name === 'Corporate Office' ? (
                  <a href="/corporate-office" className="block">
                    <div className={`relative h-24 sm:h-auto p-4 sm:p-6 rounded-xl sm:rounded-2xl ${sector.color} shadow-md border border-gray-200 transition-all duration-300 hover:scale-105 sm:hover:scale-110 hover:shadow-lg cursor-pointer flex items-center justify-center`}>
                      <div className="text-center">
                        <div className="w-8 h-8 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-blue-600">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-xs sm:text-sm font-semibold text-gray-800">{sector.name}</h3>
                      </div>
                    </div>
                  </a>
                ) : sector.name === 'Gadget Shops' ? (
                  <a href="/gadget-shop" className="block">
                    <div className={`relative h-24 sm:h-auto p-4 sm:p-6 rounded-xl sm:rounded-2xl ${sector.color} shadow-md border border-gray-200 transition-all duration-300 hover:scale-105 sm:hover:scale-110 hover:shadow-lg cursor-pointer flex items-center justify-center`}>
                      <div className="text-center">
                        <div className="w-8 h-8 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-blue-600">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-xs sm:text-sm font-semibold text-gray-800">{sector.name}</h3>
                      </div>
                    </div>
                  </a>


                ) : sector.name === 'Salon & Parlor' ? (
                  <a href="/salon" className="block">
                    <div className={`relative h-24 sm:h-auto p-4 sm:p-6 rounded-xl sm:rounded-2xl ${sector.color} shadow-md border border-gray-200 transition-all duration-300 hover:scale-105 sm:hover:scale-110 hover:shadow-lg cursor-pointer flex items-center justify-center`}>
                      <div className="text-center">
                        <div className="w-8 h-8 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-gray-700">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-xs sm:text-sm font-semibold text-gray-800">{sector.name}</h3>
                      </div>
                    </div>
                  </a>

                ) : sector.name === 'E-commerce' ? (
                  <a href="/ecommerce" className="block">
                    <div className={`relative h-24 sm:h-auto p-4 sm:p-6 rounded-xl sm:rounded-2xl ${sector.color} shadow-md border border-gray-200 transition-all duration-300 hover:scale-105 sm:hover:scale-110 hover:shadow-lg cursor-pointer flex items-center justify-center`}>
                      <div className="text-center">
                        <div className="w-8 h-8 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-gray-700">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-xs sm:text-sm font-semibold text-gray-800">{sector.name}</h3>
                      </div>
                    </div>
                  </a>
                ) : sector.name === 'Restaurants' ? (
                  <a href="/restaurants" className="block">
                    <div className={`relative h-24 sm:h-auto p-4 sm:p-6 rounded-xl sm:rounded-2xl ${sector.color} shadow-md border border-gray-200 transition-all duration-300 hover:scale-105 sm:hover:scale-110 hover:shadow-lg cursor-pointer flex items-center justify-center`}>
                      <div className="text-center">
                        <div className="w-8 h-8 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-blue-600">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-xs sm:text-sm font-semibold text-gray-800">{sector.name}</h3>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className={`relative h-24 sm:h-auto p-4 sm:p-6 rounded-xl sm:rounded-2xl ${sector.color} shadow-md border border-gray-200 transition-all duration-300 hover:scale-105 sm:hover:scale-110 hover:shadow-lg cursor-pointer flex items-center justify-center`}>
                    <div className="text-center">
                      <div className="w-8 h-8 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-gray-700">
                        <sector.icon className="w-full h-full" />
                      </div>
                      <h3 className="text-xs sm:text-sm font-semibold text-gray-800">{sector.name}</h3>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Social Media Integration Section */}

      {/* All Amazing Features Section */}
      <Section className="pb-8 sm:pb-12">
        <Container>
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">
              <span className="text-blue-600">»</span> All Amazing Features We Provide
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
              Take a quick peek on our major features which we are so proud of. Try us for 
              free and find out why Rocket Flow is the right choice for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 px-4">
            {[
              { name: 'eCommerce Platform', icon: ShoppingCartIcon },
              { name: 'Facebook Page Marketing', icon: ChatBubbleLeftRightIcon },
              { name: 'Facebook Live Video', icon: VideoCameraIcon },
              { name: 'Messenger Chatbot', icon: ChatBubbleLeftRightIcon },
              { name: 'Messenger Marketing', icon: ChatBubbleLeftRightIcon },
              { name: 'Instagram Direct', icon: CameraIcon },
              { name: 'Instagram Chatbot', icon: CameraIcon },
              { name: 'QR Code Food Ordering', icon: QrCodeIcon },
              { name: 'Reservations/Bookings', icon: CalendarIcon },
              { name: 'Other Social Media Marketing', icon: GlobeAltIcon },
              { name: 'SMS Marketing', icon: DevicePhoneMobileIcon },
              { name: 'Email Marketing', icon: EnvelopeIcon }
            ].slice(0, (isMobile && !showAllFeatures) ? 4 : undefined).map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white border-2 border-blue-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 hover:border-blue-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <feature.icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                      {feature.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Explore All Button - Only visible on mobile */}
          <div className="text-center mt-6 sm:mt-8 sm:hidden">
            <button
              onClick={() => setShowAllFeatures(!showAllFeatures)}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg flex items-center gap-2 mx-auto text-sm"
            >
              {showAllFeatures ? (
                <>
                  Show Less <span className="text-lg">↑</span>
                </>
              ) : (
                <>
                  Explore All Features <span className="text-lg">↓</span>
                </>
              )}
            </button>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="pt-12 pb-24 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-300 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        </div>

        <Container size="lg" className="relative z-10">
          <div className="text-center">
            {/* Glass Card */}
            <div className="relative backdrop-blur-xl bg-white/80 border-2 border-blue-200 rounded-3xl p-12 shadow-2xl hover:bg-white/90 hover:border-blue-300 transition-all duration-500">
              {/* Glass Shine Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50/30 to-transparent opacity-50"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-700 text-transparent bg-clip-text">
                  Start Your 1 Week Free Trial Today!
                </h2>
                <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Try Rocket Flow for 1 Week - no commitment, no credit card needed and risk-free. 
                  Get the feel of our powerful software and decide which package is suitable for 
                  you and your brand.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <a href="https://rocketflow.biz/create_account/selected_package" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white border-2 border-blue-600 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all font-semibold shadow-lg hover:shadow-xl">
                      Get Started Now
                    </Button>
                  </a>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex gap-3">
                      <button className="px-5 py-3 bg-white text-gray-900 border-2 border-blue-200 rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-all font-semibold hover:shadow-lg">
                        Month
                      </button>
                      <button className="px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all flex items-center gap-2 font-bold shadow-lg hover:shadow-xl">
                        Year <span className="text-xs bg-white text-blue-600 px-2 py-1 rounded-full font-bold">15% Off</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              <span className="text-blue-600">»</span> Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We have prepared all the guides and documentations to efficiently use our platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="space-y-4">
                <details className="group bg-white border-2 border-blue-200 rounded-lg p-4 hover:border-blue-600 hover:shadow-md transition-all">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                    <span className="text-blue-600">⊙</span> Is it safe and legal?
                  </summary>
                  <p className="mt-3 text-gray-600 text-sm pl-6">
                    Using our platform is absolutely safe and legal! We're just leveraging on the 
                    open APIs of different Social Networking sites, nothing that breaks the rules.
                  </p>
                </details>

                <details className="group bg-white border-2 border-blue-200 rounded-lg p-4 hover:border-blue-600 hover:shadow-md transition-all">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                    <span className="text-blue-600">⊙</span> I am a beginner on this stuffs, can I learn this easy?
                  </summary>
                  <p className="mt-3 text-gray-600 text-sm pl-6">
                    Absolutely! Our platform is designed to be user-friendly and intuitive. We provide 
                    comprehensive guides and tutorials to help you get started quickly.
                  </p>
                </details>

                <details className="group bg-white border-2 border-blue-200 rounded-lg p-4 hover:border-blue-600 hover:shadow-md transition-all">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                    <span className="text-blue-600">⊙</span> Is there a dashboard available?
                  </summary>
                  <p className="mt-3 text-gray-600 text-sm pl-6">
                    Yes! We have a powerful, intuitive dashboard where you can manage all your campaigns, 
                    view analytics, and control all aspects of your marketing automation.
                  </p>
                </details>

                <details className="group bg-white border-2 border-blue-200 rounded-lg p-4 hover:border-blue-600 hover:shadow-md transition-all">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                    <span className="text-blue-600">⊙</span> Can I unsubscribe anytime? How about refunds?
                  </summary>
                  <p className="mt-3 text-gray-600 text-sm pl-6">
                    Yes, you can cancel your subscription at any time. We also offer refunds within a 
                    certain period if you're not satisfied with our service.
                  </p>
                </details>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                <div className="bg-gradient-to-br from-blue-100 via-white to-blue-50 rounded-3xl p-8 shadow-xl border-2 border-blue-200">
                  <div className="text-center">
                    <div className="text-6xl mb-4">❓</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Need More Help?</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Check out our comprehensive documentation and guides
                    </p>
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-semibold shadow-md hover:shadow-lg">
                      View Documentation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
