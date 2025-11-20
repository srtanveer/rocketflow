"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaBriefcase,
  FaEnvelope,
  FaSms,
  FaBullhorn,
  FaBell,
  FaCog,
  FaHandshake,
  FaChartPie,
} from "react-icons/fa";

import {
  Navbar,
  Footer,
  Button,
  Card,
  Section,
  Container,
  ProvideMoreSection,
} from ".";
import {
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  CalendarIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  SparklesIcon,
  BoltIcon,
  Cog6ToothIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  UsersIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export default function HotelandResort() {
  const videoRef = useRef(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);
  const [showAllBenefits, setShowAllBenefits] = useState(false);

  const services = [
    {
      icon: <FaChartLine className="w-12 h-12 text-black" />,
      title: "SEO Optimization",
      desc: "Improve your website ranking on search engines and attract more guests organically.",
    },
    {
      icon: <FaBriefcase className="w-12 h-12 text-black" />,
      title: "Brand & Reputation",
      desc: "Enhance your hotel/resort brand identity and manage online reviews.",
    },
    {
      icon: <FaEnvelope className="w-12 h-12 text-black" />,
      title: "Email Marketing",
      desc: "Send promotional offers, seasonal deals, and personalized emails to your guests.",
    },
    {
      icon: <FaSms className="w-12 h-12 text-black" />,
      title: "SMS Campaigns",
      desc: "Reach your guests directly via SMS for special promotions and updates.",
    },
    {
      icon: <FaBullhorn className="w-12 h-12 text-black" />,
      title: "Social Media Marketing",
      desc: "Boost engagement and bookings through Instagram, Facebook, and TikTok campaigns.",
    },
    {
      icon: <FaHandshake className="w-12 h-12 text-black" />,
      title: "Booking & Revenue Strategy",
      desc: "Smart pricing, packages, and loyalty programs to increase reservations and revenue.",
    },
  ];

  const features = [
    {
      title: "24/7 Guest Support",
      description:
        "Instant responses to booking and stay queries via chat, SMS and email.",
      icon: ChatBubbleLeftRightIcon,
      stats: ["Instant replies", "Multilingual AI", "Booking confirmations"],
    },
    {
      title: "Smart Room Allocation",
      description:
        "Automatically match guests to rooms based on preferences and availability.",
      icon: ChartBarIcon,
      stats: ["Higher occupancy", "Personalized stays", "Reduced overbookings"],
    },
    {
      title: "Automated Guest Journey",
      description:
        "Pre-arrival upsells, check-in reminders and post-stay follow-ups.",
      icon: CalendarIcon,
      stats: ["Pre-arrival offers", "Check-in reminders", "Review requests"],
    },
    {
      title: "Event & Service Booking",
      description:
        "Manage spa, dining and event reservations with a unified calendar.",
      icon: BuildingOfficeIcon,
      stats: ["Central schedule", "Staff assignments", "Capacity control"],
    },
  ];

  const solutions = [
    {
      title: "Direct Booking Engine",
      description:
        "Increase direct bookings through an optimized website checkout.",
      icon: CurrencyDollarIcon,
    },
    {
      title: "Loyalty & Memberships",
      description: "Reward repeat guests and drive lifetime value.",
      icon: SparklesIcon,
    },
    {
      title: "Channel Manager",
      description: "Keep rates and inventory synced across OTAs and GDS.",
      icon: ChartBarIcon,
    },
    {
      title: "In-stay Upsells",
      description:
        "Offer upgrades and services at the right moments during a stay.",
      icon: BuildingOfficeIcon,
    },
  ];

  // Stats for Benefits & Stats section (hotel/resort relevant)
  const stats = [
    { icon: UsersIcon, number: "1.2M+", label: "Trips Booked" },
    { icon: ClockIcon, number: "2min", label: "Avg Booking Time" },
    { icon: FaBell, number: "24/7", label: "Active Concierge" },
    { icon: FaChartPie, number: "98%", label: "Guest Satisfaction" },
  ];

  // Additional standalone Travel Solutions section data (won't replace existing `solutions`)
  const travelSolutions = [
    {
      id: "ts-24-7-assistant",
      title: "24/7 Inquiry & Booking Assistant",
      description:
        "Instantly answer booking questions and guide guests to direct bookings any time of day.",
      icon: ChatBubbleLeftRightIcon,
      gradient: "from-teal-400 to-cyan-600",
      stats: { value: "24/7", label: "Instant responses" },
      features: [
        "Auto FAQ replies",
        "Collect dates & guests",
        "Send booking link",
      ],
    },
    {
      id: "ts-segmentation",
      title: "Smart Guest Segmentation",
      description:
        "Automatically tag and segment inquiries by interest, guest type and booking status for targeted offers.",
      icon: ChartBarIcon,
      gradient: "from-indigo-500 to-purple-600",
      stats: { value: "Segments", label: "Targeted lists" },
      features: ["Auto-tagging", "Behavioral segments", "Custom audiences"],
    },
    {
      id: "ts-automated-journey",
      title: "Automated Guest Journey",
      description:
        "Pre-arrival upsells, check-in reminders and post-stay follow-ups — all automated across channels.",
      icon: CalendarIcon,
      gradient: "from-sky-400 to-blue-600",
      stats: { value: "Pre→Post", label: "Automated touchpoints" },
      features: [
        "Pre-arrival offers",
        "Check-in reminders",
        "Post-stay follow-ups",
      ],
    },
    {
      id: "ts-events-booking",
      title: "Event & Service Bookings",
      description:
        "Collect and manage wedding, conference and spa inquiries with instant confirmations and team routing.",
      icon: BuildingOfficeIcon,
      gradient: "from-emerald-400 to-teal-600",
      stats: { value: "Events", label: "Event leads" },
      features: [
        "Form-driven inquiries",
        "Auto-delegation",
        "Instant confirmations",
      ],
    },
    {
      id: "ts-reminders",
      title: "Reservation & Activity Reminders",
      description:
        "Reduce no-shows with confirmations and timely SMS reminders for bookings and activities.",
      icon: ClockIcon,
      gradient: "from-yellow-400 to-orange-500",
      stats: { value: "-40%", label: "No-shows reduced" },
      features: ["Booking confirmations", "SMS reminders", "Activity alerts"],
    },
    {
      id: "ts-marketing",
      title: "Targeted Marketing & Promotions",
      description:
        "Send highly relevant promotions to the right guest segments to improve conversion and occupancy.",
      icon: CurrencyDollarIcon,
      gradient: "from-purple-500 to-pink-500",
      stats: { value: "↑ ROI", label: "Campaign performance" },
      features: ["Segmented offers", "A/B tests", "Flash sales"],
    },
    {
      id: "ts-ai-concierge",
      title: "24/7 AI-Powered Virtual Concierge",
      description:
        "An AI concierge answers common questions, provides local recommendations and handles simple bookings.",
      icon: SparklesIcon,
      gradient: "from-cyan-400 to-sky-600",
      stats: { value: "AI Live", label: "Virtual concierge" },
      features: ["FAQ automation", "Local recommendations", "Service bookings"],
    },
    {
      id: "ts-analytics",
      title: "Performance & Booking Analytics",
      description:
        "Track booking sources, campaign ROI and guest behavior to make data-driven decisions.",
      icon: BoltIcon,
      gradient: "from-sky-500 to-indigo-600",
      stats: { value: "Insights", label: "Booking analytics" },
      features: ["Campaign ROI", "Booking sources", "Trend reports"],
    },
    {
      id: "ts-unified-inbox",
      title: "Unified Guest Communication Platform",
      description:
        "Manage all guest conversations — social, email and SMS — from a single inbox with full context.",
      icon: Cog6ToothIcon,
      gradient: "from-teal-500 to-cyan-500",
      stats: { value: "Unified", label: "All channels" },
      features: ["Unified inbox", "Conversation history", "Team assignments"],
    },
  ];

  const benefits = [
    {
      title: "Higher Occupancy",
      description:
        "Smart distribution, dynamic pricing and direct booking tools increase bookings.",
      icon: ChartBarIcon,
      color: "indigo",
      metric: "+18% Direct Bookings",
    },
    {
      title: "Fewer No-shows",
      description:
        "Automated confirmations and SMS reminders reduce cancellations.",
      icon: ClockIcon,
      color: "teal",
      metric: "-40% No-shows",
    },
    {
      title: "Better Reviews",
      description:
        "Personalized engagement and timely follow-ups increase positive feedback.",
      icon: ChatBubbleLeftRightIcon,
      color: "purple",
      metric: "+25% 5-star Reviews",
    },
    {
      title: "Operational Efficiency",
      description:
        "Automation reduces repetitive tasks so staff can focus on guest experience.",
      icon: Cog6ToothIcon,
      color: "blue",
      metric: "70% Query Automation",
    },
  ];

  const caseStudies = [
    {
      company: "Hotel X",
      logo: "HX",
      industry: "Hospitality",
      challenge: "Low direct bookings and high OTA fees.",
      solution:
        "Implemented direct booking flows, promo codes and targeted email campaigns.",
      results: ["+25% Direct bookings", "Reduced OTA fees", "Higher RevPAR"],
    },
    {
      company: "Resort Y",
      logo: "RY",
      industry: "Resort & Spa",
      challenge: "High no-shows for spa and activities.",
      solution:
        "Added automated reminders and pre-payment options for bookings.",
      results: ["-40% No-shows", "Increased ancillary revenue"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <Section className="pt-20 sm:pt-24 pb-12 sm:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-64 h-64 border-4 border-blue-200 transform rotate-45"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 border-4 border-indigo-200 transform -rotate-12"></div>
            <div className="absolute top-1/2 left-1/2 w-72 h-72 border-4 border-purple-200 transform rotate-12"></div>
          </div>
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full mb-6 border border-teal-200">
                <FaBriefcase className="w-5 h-5 text-teal-600 mr-2" />
                <span className="text-teal-900 font-semibold text-sm">
                  World-Class Hotel & Resort Solutions
                </span>
              </div>

              <h1 className="text-[2.5rem] leading-tight sm:text-[3rem] sm:leading-tight lg:text-[4rem] lg:leading-tight font-bold mb-6">
                <span className="text-gray-900">Delight Your</span>
                <br />
                <span className="bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Next Guest
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Book rooms, manage services, and engage guests worldwide with
                AI-powered automation and instant confirmations.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShieldCheckIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">
                      Secure Payments
                    </div>
                    <div className="text-sm text-gray-600">
                      Trusted globally
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-sky-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaBell className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">
                      Instant Confirmations
                    </div>
                    <div className="text-sm text-gray-600">Reduce no-shows</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaHandshake className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Guest Loyalty</div>
                    <div className="text-sm text-gray-600">
                      Repeat bookings & retention
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-sky-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaChartPie className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">
                      Analytics & Reports
                    </div>
                    <div className="text-sm text-gray-600">
                      Track performance
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-600 text-white px-10 py-4 rounded-xl font-semibold text-sm sm:text-base shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                  Book Room
                </Button>
                <button className="bg-white border-2 border-cyan-600 text-cyan-700 hover:bg-cyan-50 px-10 py-4 rounded-xl font-semibold text-sm sm:text-base transition-all hover:shadow-md">
                  Explore Packages
                </button>
              </div>
            </div>

            {/* Right visual placeholder (reuse same Card stack as original) */}
            <div className="relative">
              <div className="relative">
                <div className="space-y-4">
                  <Card
                    animationDelay={0}
                    className="card-glow !bg-gradient-to-br !from-teal-500 !to-cyan-600 !text-white"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="text-sm opacity-80 mb-1">
                          Trips This Month
                        </div>
                        <div className="text-4xl font-bold">1.2M+</div>
                      </div>
                      <div className="w-16 h-16 bg-black bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <ChartBarIcon className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-white bg-opacity-20 rounded-full h-2">
                        <div className="bg-white rounded-full h-2 w-3/4"></div>
                      </div>
                      <span className="text-sm font-semibold">+24%</span>
                    </div>
                  </Card>
                  <div className="grid grid-cols-2 gap-4">
                    <Card
                      animationDelay={0.1}
                      className="card-glow border-2 border-indigo-100"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                        <UsersIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-bold text-gray-900 mb-1">
                        98%
                      </div>
                      <div className="text-sm text-gray-600">
                        Traveler Satisfaction
                      </div>
                    </Card>
                    <Card
                      animationDelay={0.15}
                      className="card-glow border-2 border-purple-100"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                        <ClockIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-bold text-gray-900 mb-1">
                        2min
                      </div>
                      <div className="text-sm text-gray-600">
                        Avg Booking Time
                      </div>
                    </Card>
                  </div>
                  <Card
                    animationDelay={0.2}
                    className="card-border-gradient border-2 border-blue-100"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                        AI
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">
                          AI Travel Assistant Active
                        </div>
                        <div className="text-sm text-gray-600">
                          Helping 45 travelers now
                        </div>
                      </div>
                      <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                        Live
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="absolute -top-8 -right-8 bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 rounded-full shadow-2xl font-bold text-sm transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  ✈️ Ready for Travel
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Complete Suite for Travelers -> adapted for Hotels & Resorts */}
      <Section className="py-12 sm:py-14 bg-white">
        <Container>
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-gray-900 mb-4">
              Complete Suite for
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {" "}
                Travelers
              </span>
            </h2>
            <p className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-gray-600 max-w-3xl mx-auto">
              Everything a traveler needs in one powerful platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card
                key={index}
                animationDelay={index * 0.1}
                className={`card-hover cursor-pointer border-2 ${
                  activeFeature === index
                    ? "bg-gradient-to-br from-teal-50 to-cyan-50 border-cyan-300 scale-105"
                    : "border-gray-200 hover:border-cyan-200"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
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

      {/* Travel Solutions (moved here to sit at the bottom of the Features Section) */}
      <Section className="py-12 sm:py-14 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
        <Container>
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-gray-900 mb-4">
              Travel Solutions
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                For Every Journey
              </span>
            </h2>
            <p className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-gray-600 max-w-3xl mx-auto">
              AI-powered travel tools for smooth and hassle-free trips
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {travelSolutions.map((solution) => (
              <Card
                key={solution.id}
                className={`card-shimmer relative p-8 rounded-3xl bg-white border-2 shadow-xl overflow-hidden group ${
                  hoveredService === solution.id
                    ? "border-indigo-300"
                    : "border-gray-200 hover:border-indigo-200"
                }`}
                onMouseEnter={() => setHoveredService(solution.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <div className="absolute top-6 right-6 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-bold shadow-md">
                  {solution.stats.value}
                </div>

                <div
                  className={`relative w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-xl`}
                >
                  <solution.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-bold text-gray-900 mb-4 relative z-10">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                  {solution.description}
                </p>

                <div className="space-y-3 relative z-10">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${solution.gradient} rounded-full flex-shrink-0`}
                      ></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100 relative z-10">
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    {solution.stats.label}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      
      
            <ProvideMoreSection />

      {/* Benefits & Stats */}
      <Section className="py-12 sm:py-14 bg-white">
        <Container>
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-gray-900 mb-4">
              Why Travelers
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {" "}
                Love Us
              </span>
            </h2>
            <p className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-gray-600 max-w-3xl mx-auto">
              Millions trust us for hassle-free bookings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10 sm:mb-12">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                animationDelay={index * 0.1}
                className="card-glow bg-gradient-to-br from-slate-50 to-cyan-50 border-2 border-cyan-100"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br from-${benefit.color === 'blue' ? 'teal' : benefit.color}-500 to-${benefit.color === 'blue' ? 'cyan' : benefit.color}-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                <div
                  className={`inline-block px-4 py-2 bg-${benefit.color}-100 text-${benefit.color}-700 rounded-full text-sm font-bold`}
                >
                  {benefit.metric}
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-600 rounded-3xl p-12 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-black" />
                    </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                    <div className="text-cyan-100 font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Summary of Benefits */}
      <Section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
              Summary of{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Benefits
              </span>
            </h3>
            <p className="text-base sm:text-lg text-gray-600 px-4">
              How Rocket Flow transforms travel operations
            </p>
          </div>

          {/* Mobile Card View */}
          <div className="block lg:hidden space-y-4 px-4">
            {benefits.slice(0, 2).map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className={`bg-gradient-to-r from-${benefit.color}-600 to-${benefit.color}-700 p-4`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">{benefit.title}</h4>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">{benefit.description}</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-medium">{benefit.metric}</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">
                      {benefit.title.includes("Efficiency")
                        ? "Faster operations"
                        : benefit.title.includes("Security")
                        ? "Data protected"
                        : "Enhanced experience"}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Remaining cards - shown only when expanded */}
            {showAllBenefits && benefits.slice(2).map((benefit, idx) => (
              <div key={idx + 2} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className={`bg-gradient-to-r from-${benefit.color}-600 to-${benefit.color}-700 p-4`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]">{benefit.title}</h4>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem]">{benefit.description}</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Rocket Flow Solution</p>
                    <p className="text-gray-700 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-medium">{benefit.metric}</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] sm:text-[0.688rem] lg:text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-green-600 text-[0.75rem] sm:text-[0.813rem] lg:text-[0.875rem] font-bold">
                      {benefit.title.includes("Efficiency")
                        ? "Faster operations"
                        : benefit.title.includes("Security")
                        ? "Data protected"
                        : "Enhanced experience"}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* See More Button */}
            {!showAllBenefits && benefits.length > 2 && (
              <div className="text-center pt-2">
                <button
                  onClick={() => setShowAllBenefits(true)}
                  className="px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
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
                <tr className="bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-600">
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
                {benefits.map((benefit, idx) => (
                  <tr
                    key={idx}
                    className="group hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300"
                  >
                    <td className="px-6 py-6 border-r border-gray-200">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br from-${benefit.color}-500 to-${benefit.color}-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}
                        >
                          <benefit.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-bold text-gray-900 text-lg">
                          {benefit.title}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed">
                        {benefit.description}
                      </p>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-medium">
                        {benefit.metric}
                      </p>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-green-600 leading-relaxed font-bold">
                        {benefit.title.includes("Efficiency")
                          ? "Faster operations"
                          : benefit.title.includes("Security")
                          ? "Data protected"
                          : "Enhanced experience"}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* Case Studies */}
      <Section className="py-12 sm:py-14 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
        <Container>
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-gray-900 mb-4">
              Success Stories from
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {" "}
                Travel Leaders
              </span>
            </h2>
            <p className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-gray-600 max-w-3xl mx-auto">
              Real results from top travel companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-5 sm:gap-6">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                animationDelay={index * 0.15}
                className="card-hover card-shimmer border-2 border-indigo-100"
                padding="lg"
              >
                {/* Company Header */}
                <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-100">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    {study.logo}
                  </div>
                  <div>
                    <h3 className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-bold text-gray-900 mb-1">
                      {study.company}
                    </h3>
                    <div className="text-indigo-600 font-semibold">
                      {study.industry}
                    </div>
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="font-bold text-gray-900 uppercase text-sm tracking-wider">
                      Challenge
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="font-bold text-gray-900 uppercase text-sm tracking-wider">
                      Solution
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {study.solution}
                  </p>
                </div>

                {/* Results */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-bold text-gray-900 uppercase text-sm tracking-wider">
                      Results
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {study.results.map((result, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100"
                      >
                        <div className="text-2xl">✓</div>
                        <span className="text-gray-900 font-semibold">
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="py-16 sm:py-18 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-700 relative overflow-hidden">
        <Container className="relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
            Plan Your Dream Stay
            <br />
            with Ease & Confidence
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button className="bg-white text-cyan-700 hover:bg-gray-100 px-12 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
              Book a Room Now
            </Button>
            <Button className="border-3 border-white text-white hover:bg-white hover:text-cyan-700 px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300 backdrop-blur-sm bg-white bg-opacity-10">
              Contact Hotel Expert
            </Button>
          </div>
        </Container>
      </Section>
      <Footer />
    </div>
  );
}
