'use client'

import { useState } from "react";
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
  GlobeAsiaAustraliaIcon
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
  FaGoogle 
} from 'react-icons/fa';

export default function LandingPage() {
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredSector, setHoveredSector] = useState(null);
  const [activeChannel, setActiveChannel] = useState('facebook');

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
      color: 'from-primary to-primary-600'
    },
    {
      id: 'auto-reply',
      title: 'Automated Workflows',
      description: 'Pre-built workflows for growing followers, collecting emails, responding to comments, and sending automated DMs',
      icon: BoltIcon,
      color: 'from-secondary to-secondary-600'
    },
    {
      id: 'industry-solutions',
      title: 'Industry-Specific Solutions',
      description: 'Customized marketing automation for 12+ industries including photography, education, hospitality, e-commerce, and more',
      icon: GlobeAltIcon,
      color: 'from-primary-dark to-gray-700'
    },
    {
      id: 'engagement',
      title: 'Customer Engagement',
      description: 'Intelligent tools to boost engagement, request follows, collect leads, and convert audiences into valued customers',
      icon: DevicePhoneMobileIcon,
      color: 'from-primary-500 to-secondary-500'
    }
  ];

  const sectors = [
    { name: 'Corporate Office', icon: BuildingOfficeIcon, color: 'bg-gradient-to-br from-gray-100 to-primary-50' },
    { name: 'E-commerce', icon: ShoppingCartIcon, color: 'bg-gradient-to-br from-secondary-100 to-secondary-50' },
    { name: 'Education', icon: AcademicCapIcon, color: 'bg-gradient-to-br from-secondary-50 to-secondary-100' },
    { name: 'Event Management', icon: SparklesIcon, color: 'bg-gradient-to-br from-primary-100 to-secondary-50' },
    { name: 'Gadget Shops', icon: ComputerDesktopIcon, color: 'bg-gradient-to-br from-primary-100 to-primary-50' },
    { name: 'Hotels & Resorts', icon: BuildingOffice2Icon, color: 'bg-gradient-to-br from-primary-100 to-secondary-100' },
    { name: 'Organic Products', icon: ShoppingBagIcon, color: 'bg-gradient-to-br from-secondary-50 to-secondary-100' },
    { name: 'Photography', icon: CameraIcon, color: 'bg-gradient-to-br from-primary-50 to-primary-100' },
    { name: 'Restaurants', icon: ShoppingBagIcon, color: 'bg-gradient-to-br from-secondary-100 to-primary-100' },
    { name: 'Salon & Parlor', icon: SparklesIcon, color: 'bg-gradient-to-br from-primary-50 to-primary-100' },
    { name: 'Study Abroad', icon: PaperAirplaneIcon, color: 'bg-gradient-to-br from-primary-50 to-secondary-50' },
    { name: 'Travel Booking', icon: TicketIcon, color: 'bg-gradient-to-br from-secondary-50 to-primary-100' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <Section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100" padding="md">
        <Container>
          <div className="text-center">
            <div className="mb-6">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-800 leading-tight mb-4">
                One Solution To{' '}
                <span className="text-primary">Optimize</span>{' '}
                Your<br />
                <span className="text-primary">Social Media</span>
              </h1>
              <div className="mt-4 text-xl sm:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
                Level up your campaigns, business, marketing and social reach using our 
                cutting-edge features and ultimately turn your audiences into a valued customers.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
              <Button size="lg" className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary-600 hover:to-secondary-600">
                <PlayIcon className="w-5 h-5 text-white" />
                How It Works
              </Button>
              
              <div className="flex items-center gap-2 text-gray-600">
                <span>Or</span>
                <button className="text-primary font-semibold hover:text-primary-600 transition-colors">
                  Try It For Free →
                </button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section background="gray" className="py-6" padding="sm">
        <Container>
          <div className="text-center">
            <p className="text-gray-600 text-sm sm:text-base max-w-4xl mx-auto leading-relaxed">
              Join <span className="font-bold text-primary">635+ users</span> from{' '}
              <span className="font-bold text-primary">55+ countries</span> using Rocket Flow to drive customer 
              engagement, inspire brand loyalty, and grow their business.
            </p>
            
            {/* Integration Logos */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-8 opacity-60">
              <div className="flex items-center justify-center">
                <FaFacebook className="w-8 h-8 text-gray-400" />
              </div>
              <div className="flex items-center justify-center">
                <FaFacebookMessenger className="w-8 h-8 text-gray-400" />
              </div>
              <div className="flex items-center justify-center">
                <FaInstagram className="w-8 h-8 text-gray-400" />
              </div>
              <div className="flex items-center justify-center">
                <FaWordpress className="w-8 h-8 text-gray-400" />
              </div>
              <div className="flex items-center justify-center">
                <FaGoogle className="w-8 h-8 text-gray-400" />
              </div>
              <div className="flex items-center justify-center">
                <FaLinkedin className="w-8 h-8 text-gray-400" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      

      {/* Services Section */}
      <Section id="services" background="white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to accelerate your business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Multi-Channel Marketing Card */}
            <Card
              className="group relative h-full flex flex-col"
              onMouseEnter={() => setHoveredService('multi-channel')}
              onMouseLeave={() => setHoveredService(null)}
              padding="lg"
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center text-white mb-4">
                <ChatBubbleLeftRightIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Multi-Channel Marketing</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">Automated campaigns across Facebook, Messenger, Instagram, SMS, and Email to reach your audience everywhere</p>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>

            {/* Automated Workflows Card */}
            <Card
              className="group relative h-full flex flex-col"
              onMouseEnter={() => setHoveredService('auto-reply')}
              onMouseLeave={() => setHoveredService(null)}
              padding="lg"
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center text-white mb-4">
                <BoltIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Automated Workflows</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">Pre-built workflows for growing followers, collecting emails, responding to comments, and sending automated DMs</p>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>

            {/* Industry-Specific Solutions Card */}
            <Card
              className="group relative h-full flex flex-col"
              onMouseEnter={() => setHoveredService('industry-solutions')}
              onMouseLeave={() => setHoveredService(null)}
              padding="lg"
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white mb-4">
                <GlobeAltIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Industry-Specific Solutions</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">Customized marketing automation for 12+ industries including photography, education, hospitality, e-commerce, and more</p>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>

            {/* Customer Engagement Card */}
            <Card
              className="group relative h-full flex flex-col"
              onMouseEnter={() => setHoveredService('engagement')}
              onMouseLeave={() => setHoveredService(null)}
              padding="lg"
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white mb-4">
                <DevicePhoneMobileIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Customer Engagement</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">Intelligent tools to boost engagement, request follows, collect leads, and convert audiences into valued customers</p>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          </div>
        </Container>
      </Section>
{/* Reach Your Audiences Section */}
      <Section id="channels" background="white" className="py-12">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              <span className="text-red-500">📡</span> Reach Your Audiences <span className="text-primary">With Ease</span>
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Specialized tools to achieve <span className="text-primary font-semibold">greater heights</span> for your business.
            </p>
          </div>

          {/* Channel Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {Object.values(channels).map((channel) => (
              <button
                key={channel.id}
                onClick={() => setActiveChannel(channel.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeChannel === channel.id
                    ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {channel.icon} {channel.name}
              </button>
            ))}
          </div>

          {/* Channel Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            {/* Left Side - Phone Mockup with Real Images */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-xs">
                {/* iPhone Frame */}
                <div className="relative bg-black rounded-[2.5rem] p-2 shadow-xl">
                  <div className="bg-white rounded-[2rem] overflow-hidden">
                    {/* Notch */}
                    <div className="relative h-6 bg-black">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl"></div>
                    </div>
                    
                    {/* Content - Using Real Images/Videos */}
                    <div className="relative h-[570px] w-[305px] bg-white flex items-center justify-center overflow-hidden">
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
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">
                <span className="text-primary">»</span> {channels[activeChannel].title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {channels[activeChannel].description}
              </p>
              <ul className="space-y-2 mb-6">
                {channels[activeChannel].features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5 text-sm">⊗</span>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="text-primary hover:text-primary-600 font-semibold flex items-center gap-2 transition-colors text-sm">
                Try It Now <span>›</span>
              </button>
            </div>
          </div>
        </Container>
      </Section>
      {/* More Features Section */}
      <Section background="gray">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Side - Content */}
            <div className="pl-0 md:pl-8 lg:pl-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
                <span className="text-primary">»</span> Provide More In Less Time
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Rocket Flow has the most complete features for Facebook, Messenger, Instagram 
                and other marketing platforms that can outrun any other 3rd party tools existing today.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-700">Highly Interactive</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-700">Human-like Conversation</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-700">Increase Engagement</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-700">Increase Sales</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-700">Automate Customer Support</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-700">Collect Leads</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-700">Sell Products</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-700">Automate Restaurant Food Order</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-700">Setup Chatbots Available 24/7</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-700">Never Miss a Single Message</span>
                </div>
              </div>
            </div>

            {/* Right Side - Video/Image */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="relative h-[565px] w-[300px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-100 to-pink-100 p-8">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full rounded-2xl shadow-lg"
                  >
                    <source src="/order_sample.webm" type="video/webm" />
                  </video>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute -top-4 -left-4 w-32 h-32 bg-secondary rounded-full opacity-20 blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Sell Online Section */}
      

      {/* Target Sectors Section */}
      <Section id="industries" background="gray">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800">
              Industries We <span className="text-primary">Serve</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for diverse business sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {sectors.map((sector, index) => (
              <div
                key={sector.name}
                className="group relative"
                onMouseEnter={() => setHoveredSector(sector.name)}
                onMouseLeave={() => setHoveredSector(null)}
              >
                {sector.name === 'Education' ? (
                  <a href="/education" className="block">
                    <div className={`relative p-6 rounded-2xl ${sector.color} shadow-md border border-white transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}>
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-3 text-primary-dark">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-700">{sector.name}</h3>
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-100/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </a>
                ) : sector.name === 'Photography' ? (
                  <Link href="/photography" className="block">
                    <div className={`relative p-6 rounded-2xl ${sector.color} shadow-md border border-white transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}>
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-3 text-primary-dark">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-700">{sector.name}</h3>
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-100/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </Link>
                ) : sector.name === 'Study Abroad' ? (
                  <a href="/study-abroad" className="block">
                    <div className={`relative p-6 rounded-2xl ${sector.color} shadow-md border border-white transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}>
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-3 text-primary-dark">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-700">{sector.name}</h3>
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-100/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </a>
                ) : sector.name === 'Hotels & Resorts' ? (
                  <a href="/hotel-and-resort" className="block">
                    <div className={`relative p-6 rounded-2xl ${sector.color} shadow-md border border-white transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}>
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-3 text-primary-dark">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-700">{sector.name}</h3>
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-100/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </a>

                ) : sector.name === 'Organic Products' ? (
                  <a href="/organic-products" className="block">

                    <div className={`relative p-6 rounded-2xl ${sector.color} shadow-md border border-white transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}>
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-3 text-primary-dark">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-700">{sector.name}</h3>
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-100/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                  </a>
                ) : sector.name === 'Travel Booking' ? (
                  <a href="/travel-booking" className="block">
                    <div className={`relative p-6 rounded-2xl ${sector.color} shadow-md border border-white transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}>
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-3 text-primary-dark">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-700">{sector.name}</h3>
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-100/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </a>
                ) : sector.name === 'Corporate Office' ? (
                  <a href="/corporate-office" className="block">
                    <div className={`relative p-6 rounded-2xl ${sector.color} shadow-md border border-white transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}>
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-3 text-primary-dark">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-700">{sector.name}</h3>
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-100/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </a>
                ) : sector.name === 'Gadget Shops' ? (
                  <a href="/gadget-shop" className="block">
                    <div className={`relative p-6 rounded-2xl ${sector.color} shadow-md border border-white transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}>
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-3 text-primary-dark">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-700">{sector.name}</h3>
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-100/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </a>


                ) : sector.name === 'Salon & Parlor' ? (
                  <a href="/salon" className="block">
                    <div className={`relative p-6 rounded-2xl ${sector.color} shadow-md border border-white transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}>
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-3 text-primary-dark">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-700">{sector.name}</h3>
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-100/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </a>

                ) : sector.name === 'E-commerce' ? (
                  <a href="/ecommerce" className="block">
                    <div className={`relative p-6 rounded-2xl ${sector.color} shadow-md border border-white transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}>
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-3 text-primary-dark">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-700">{sector.name}</h3>
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-100/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </a>
                ) : sector.name === 'Restaurants' ? (
                  <a href="/restaurants" className="block">
                    <div className={`relative p-6 rounded-2xl ${sector.color} shadow-md border border-white transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}>
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-3 text-primary-dark">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-700">{sector.name}</h3>
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-100/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </a>
                ) : (
                  <div className={`relative p-6 rounded-2xl ${sector.color} shadow-md border border-white transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}>
                    <div className="text-center">
                      <div className="w-8 h-8 mx-auto mb-3 text-primary-dark">
                        <sector.icon className="w-full h-full" />
                      </div>
                      <h3 className="text-sm font-semibold text-gray-700">{sector.name}</h3>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-100/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Social Media Integration Section */}

      {/* All Amazing Features Section */}
      <Section background="white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
              <span className="text-primary">»</span> All Amazing Features We Provide
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Take a quick peek on our major features which we are so proud of. Try us for 
              free and find out why Rocket Flow is the right choice for you.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'eCommerce Platform',
              'Facebook Page Marketing',
              'Facebook Live Video',
              'Messenger Chatbot',
              'Messenger Marketing',
              'Instagram Direct',
              'Instagram Chatbot',
              'QR Code Food Ordering',
              'Reservations/Bookings',
              'Other Social Media Marketing',
              'SMS Marketing',
              'Email Marketing'
            ].map((feature, index) => (
              <button
                key={index}
                className="group relative px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 hover:border-primary hover:text-primary hover:shadow-md transition-all duration-300 text-sm font-medium overflow-hidden"
              >
                <span className="relative z-10">{feature}</span>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="gray">
        <Container size="lg">
          <div className="text-center">
            <Card padding="lg" className="bg-gradient-to-r from-primary-50 to-secondary-50 border-primary-100" hover={false}>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
                Start Your 1 Week Free Trial Today!
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Try Rocket Flow for 1 Week - no commitment, no credit card needed and risk-free. 
                Get the feel of our powerful software and decide which package is suitable for 
                you and your brand.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/get-started">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary-600 hover:to-secondary-600">
                    Get Started
                  </Button>
                </Link>
                
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:border-primary transition-colors">
                      Month
                    </button>
                    <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors flex items-center gap-2">
                      Year <span className="text-xs bg-white text-primary px-2 py-1 rounded">15% Off</span>
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section background="white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
              <span className="text-primary">»</span> Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We have prepared all the guides and documentations to efficiently use our platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="space-y-4">
                <details className="group bg-white border border-gray-200 rounded-lg p-4 hover:border-primary transition-colors">
                  <summary className="font-semibold text-gray-800 cursor-pointer flex items-center gap-2">
                    <span className="text-primary">⊙</span> Is it safe and legal?
                  </summary>
                  <p className="mt-3 text-gray-600 text-sm pl-6">
                    Using our platform is absolutely safe and legal! We're just leveraging on the 
                    open APIs of different Social Networking sites, nothing that breaks the rules.
                  </p>
                </details>

                <details className="group bg-white border border-gray-200 rounded-lg p-4 hover:border-primary transition-colors">
                  <summary className="font-semibold text-gray-800 cursor-pointer flex items-center gap-2">
                    <span className="text-primary">⊙</span> I am a beginner on this stuffs, can I learn this easy?
                  </summary>
                  <p className="mt-3 text-gray-600 text-sm pl-6">
                    Absolutely! Our platform is designed to be user-friendly and intuitive. We provide 
                    comprehensive guides and tutorials to help you get started quickly.
                  </p>
                </details>

                <details className="group bg-white border border-gray-200 rounded-lg p-4 hover:border-primary transition-colors">
                  <summary className="font-semibold text-gray-800 cursor-pointer flex items-center gap-2">
                    <span className="text-primary">⊙</span> Is there a dashboard available?
                  </summary>
                  <p className="mt-3 text-gray-600 text-sm pl-6">
                    Yes! We have a powerful, intuitive dashboard where you can manage all your campaigns, 
                    view analytics, and control all aspects of your marketing automation.
                  </p>
                </details>

                <details className="group bg-white border border-gray-200 rounded-lg p-4 hover:border-primary transition-colors">
                  <summary className="font-semibold text-gray-800 cursor-pointer flex items-center gap-2">
                    <span className="text-primary">⊙</span> Can I unsubscribe anytime? How about refunds?
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
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 shadow-xl">
                  <div className="text-center">
                    <div className="text-6xl mb-4">❓</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Need More Help?</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Check out our comprehensive documentation and guides
                    </p>
                    <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors">
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
