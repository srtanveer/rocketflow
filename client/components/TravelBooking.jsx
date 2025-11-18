"use client";

import { useState } from "react";
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
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  DevicePhoneMobileIcon,
  CurrencyDollarIcon,
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
  ComputerDesktopIcon,
  GlobeAltIcon,
  TicketIcon,
  MapIcon,
} from "@heroicons/react/24/outline";

export default function TravelBookingPage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);
  const [showAllBenefits, setShowAllBenefits] = useState(false);

  // Travel Solutions
  const solutions = [
    {
      id: "instant-inquiry",
      title: "Instant Tour Inquiry Handling",
      description:
        "Automatically respond to customer inquiries with brochures, itineraries, and pricing via social media or website forms, even after hours.",
      icon: GlobeAltIcon,
      gradient: "from-teal-500 via-cyan-600 to-blue-600",
      features: [
        "Auto-reply with brochures",
        "Instant lead qualification",
        "24/7 response",
      ],
      stats: { value: "100%", label: "No Missed Leads" },
    },
    {
      id: "traveler-segmentation",
      title: "Smart Traveler Segmentation",
      description:
        "Organize leads automatically by destination interest, travel type, and booking stage to personalize follow-ups and campaigns.",
      icon: UsersIcon,
      gradient: "from-cyan-500 via-sky-500 to-indigo-600",
      features: [
        "Destination tags",
        "Travel type classification",
        "Funnel stage tracking",
      ],
      stats: { value: "5x", label: "Targeted Marketing Efficiency" },
    },
    {
      id: "nurturing-predeparture",
      title: "Automated Nurturing & Pre-Departure",
      description:
        "Guide clients from inquiry to departure with automated emails and SMS sequences, including pre-travel checklists and reminders.",
      icon: CalendarIcon,
      gradient: "from-sky-500 via-indigo-500 to-purple-600",
      features: [
        "Lead nurturing sequences",
        "Pre-departure reminders",
        "Post-booking follow-ups",
      ],
      stats: { value: "95%", label: "Booking Conversion Rate" },
    },
    {
      id: "custom-visa",
      title: "Custom Tour & Visa Automation",
      description:
        "Collect client information for custom tours and visa processing automatically and notify relevant agents instantly.",
      icon: BriefcaseIcon,
      gradient: "from-cyan-500 via-teal-500 to-sky-500",
      features: [
        "Custom tour forms",
        "Visa document collection",
        "Automated confirmations",
      ],
      stats: { value: "90%", label: "Operational Efficiency" },
    },
    {
      id: "payments-reminders",
      title: "Automated Payments & Reminders",
      description:
        "Send automated payment reminders, flight alerts, and visa updates via SMS and email to reduce manual follow-ups.",
      icon: CurrencyDollarIcon,
      gradient: "from-teal-500 via-cyan-500 to-sky-500",
      features: [
        "Payment reminders",
        "Flight & visa alerts",
        "Timely notifications",
      ],
      stats: { value: "85%", label: "Faster Payments" },
    },
    {
      id: "targeted-campaigns",
      title: "Targeted Campaigns & Offers",
      description:
        "Send personalized offers, last-minute deals, and promotions to relevant travelers using smart segmentation and analytics.",
      icon: ChartBarIcon,
      gradient: "from-sky-500 via-indigo-500 to-violet-500",
      features: [
        "Segmented campaigns",
        "Last-minute deal blasts",
        "Marketing insights",
      ],
      stats: { value: "4x", label: "Booking Rate Increase" },
    },
    {
      id: "ai-travel-desk",
      title: "24/7 AI-Powered Travel Desk",
      description:
        "Provide instant answers to common travel questions, freeing agents to focus on complex itineraries and closing sales.",
      icon: CogIcon,
      gradient: "from-sky-500 via-cyan-600 to-teal-500",
      features: [
        "AI-powered FAQs",
        "Round-the-clock assistance",
        "Consistent info",
      ],
      stats: { value: "99%", label: "Customer Satisfaction" },
    },
    {
      id: "communication-hub",
      title: "Unified Traveler Communication Hub",
      description:
        "Manage all traveler interactions—from initial inquiry to post-trip feedback—in one organized dashboard.",
      icon: ComputerDesktopIcon,
      gradient: "from-teal-500 via-cyan-500 to-sky-500",
      features: [
        "Complete client history",
        "Team collaboration",
        "Professional service consistency",
      ],
      stats: { value: "100%", label: "Operational Control" },
    },
  ];

  // Benefits
  const benefits = [
    {
      icon: GlobeAltIcon,
      title: "Global Coverage",
      description: "Book flights, hotels, and tours worldwide",
      metric: "200+ Countries",
      color: "blue",
    },
    {
      icon: BoltIcon,
      title: "Fast Booking",
      description: "Instant confirmation and easy payments",
      metric: "5min average booking",
      color: "indigo",
    },
    {
      icon: ShieldCheckIcon,
      title: "Safe & Secure",
      description: "Protected payments and verified providers",
      metric: "Trusted by millions",
      color: "purple",
    },
    {
      icon: UsersIcon,
      title: "Customer Support",
      description: "24/7 travel assistance and helpdesk",
      metric: "Always available",
      color: "violet",
    },
  ];

  // Features
  const features = [
    {
      title: "Flight Search & Booking",
      description: "Quickly find and book flights at the best prices",
      icon: GlobeAltIcon,
      stats: ["Instant confirmation", "Price alerts", "Multi-airline options"],
    },
    {
      title: "Hotel & Stay Management",
      description: "Seamless hotel bookings for any budget",
      icon: BuildingOfficeIcon,
      stats: ["Verified listings", "Flexible dates", "Special offers"],
    },
    {
      title: "Tour Packages & Itineraries",
      description: "Curated travel experiences for any traveler",
      icon: TicketIcon,
      stats: ["All-inclusive", "Local guides", "Customizable plans"],
    },
    {
      title: "Travel Assistance & Insurance",
      description: "24/7 support and trip protection services",
      icon: ShieldCheckIcon,
      stats: ["Emergency support", "Insurance coverage", "Travel tips"],
    },
  ];

  // Travel Case Studies
  const caseStudies = [
    {
      company: "Adventure Travels",
      industry: "Tour Operator",
      challenge: "High manual booking load and customer queries",
      solution: "Integrated AI travel assistant and automated booking system",
      results: [
        "50% faster booking",
        "Reduced customer wait time",
        "Increased repeat customers",
      ],
      logo: "AT",
    },
    {
      company: "Global Trips",
      industry: "Online Travel Agency",
      challenge: "Inconsistent booking confirmations and travel advice",
      solution:
        "Implemented automated confirmations and real-time travel insights",
      results: [
        "99% booking accuracy",
        "24/7 support implemented",
        "Customer satisfaction +30%",
      ],
      logo: "GT",
    },
  ];

  const stats = [
    { number: "1M+", label: "Trips Booked", icon: TicketIcon },
    { number: "500K+", label: "Hotels Listed", icon: BuildingOfficeIcon },
    { number: "99.9%", label: "Booking Success", icon: ShieldCheckIcon },
    { number: "24/7", label: "Travel Support", icon: ClockIcon },
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
                <GlobeAltIcon className="w-5 h-5 text-teal-600 mr-2" />
                <span className="text-teal-900 font-semibold text-sm">
                  World-Class Travel Booking
                </span>
              </div>

              <h1 className="text-[2.5rem] leading-tight sm:text-[3rem] sm:leading-tight lg:text-[4rem] lg:leading-tight font-bold mb-2 sm:mb-3 lg:mb-4">
                <span className="text-gray-900">Plan Your</span>
                <br />
                <span className="bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Next Adventure
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Book flights, hotels, tours, and travel experiences worldwide
                with AI-powered automation and instant confirmations.
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
                    <BoltIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Fast Booking</div>
                    <div className="text-sm text-gray-600">
                      Instant confirmations
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <UsersIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">
                      Millions Served
                    </div>
                    <div className="text-sm text-gray-600">
                      Happy travelers worldwide
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-sky-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">24/7 Support</div>
                    <div className="text-sm text-gray-600">
                      Always available
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-600 text-white px-10 py-4 rounded-xl font-semibold text-sm sm:text-base shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                  Book Now
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

      {/* Continue Features, Solutions, Benefits, Case Studies, CTA sections exactly same structure but replace content with travel-related content */}
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
            {solutions.map((solution, index) => (
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
                        : benefit.title.includes("Security") || benefit.title.includes("Safe")
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
                        : benefit.title.includes("Security") || benefit.title.includes("Safe")
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

      {/* Case Studies Section */}
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

      {/* Travel CTA Section */}
  <Section className="py-16 sm:py-18 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-700 relative overflow-hidden">
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
              <BriefcaseIcon className="w-6 h-6 text-black mr-2" />
              <span className="text-black font-semibold">
                Exclusive Travel Packages
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
              Plan Your Dream Trip
              <br />
              with Ease & Confidence
            </h2>

            <p className="text-xl md:text-2xl text-white text-opacity-90 mb-12 leading-relaxed">
              Join thousands of travelers booking unforgettable journeys with
              our AI-powered travel assistant. Start planning your next
              adventure today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button className="bg-white text-cyan-700 hover:bg-gray-100 px-12 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                Book a Trip Now
              </Button>
              <Button className="border-3 border-white text-white hover:bg-white hover:text-cyan-700 px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300 backdrop-blur-sm bg-white bg-opacity-10">
                Contact Travel Expert
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-white text-opacity-90">
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="w-6 h-6" />
                <span>Secure Bookings</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="w-6 h-6" />
                <span>24/7 Travel Support</span>
              </div>
              <div className="flex items-center gap-2">
                <BoltIcon className="w-6 h-6" />
                <span>Quick & Easy Booking</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>


      <Footer />
    </div>
  );
}
