'use client'

import { useState } from "react";
import { Navbar, Footer, Button, Card, Section, Container } from '.';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  CheckCircleIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: 'Email Us',
      content: 'contact@rocketflow.biz',
      link: 'mailto:contact@rocketflow.biz',
      color: 'primary'
    },
    {
      icon: PhoneIcon,
      title: 'Call Us',
      content: '+880 17-5858-7899',
      link: 'tel:+8801758587899',
      color: 'secondary'
    },
    {
      icon: MapPinIcon,
      title: 'Visit Us',
      content: 'House - 22, (9th Floor), Road-1, Block-H, Aftab Nagar, Dhaka 1212',
      link: '#',
      color: 'primary'
    },
    {
      icon: ClockIcon,
      title: 'Business Hours',
      content: 'Sat - Thu: 9AM - 6PM GMT',
      link: '#',
      color: 'secondary'
    }
  ];

  const socialLinks = [
    { icon: FaFacebook, name: 'Facebook', url: 'https://www.facebook.com/rocketflow.biz', color: 'text-blue-600' },
    // { icon: FaTwitter, name: 'Twitter', url: '#', color: 'text-sky-500' },
    // { icon: FaLinkedin, name: 'LinkedIn', url: '#', color: 'text-blue-700' },
    { icon: FaInstagram, name: 'Instagram', url: 'https://www.instagram.com/rocketflowbiz/', color: 'text-pink-600' },
    // { icon: FaYoutube, name: 'YouTube', url: '#', color: 'text-red-600' }
  ];

  const faqs = [
    {
      question: 'How quickly will I get a response?',
      answer: 'We typically respond to all inquiries within 24 hours during business days.'
    },
    {
      question: 'Do you offer phone support?',
      answer: 'Yes! Premium and Enterprise customers have access to priority phone support.'
    },
    {
      question: 'Can I schedule a demo?',
      answer: 'Absolutely! Use the contact form to request a personalized demo of our platform.'
    },
    {
      question: 'What information should I include?',
      answer: 'Please provide your name, email, and a detailed description of your inquiry for the fastest response.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-5 py-2 bg-blue-100 rounded-full mt-14 mb-6 border border-blue-200">
              <ChatBubbleLeftRightIcon className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-900 font-semibold text-sm">We're Here to Help</span>
            </div>

            <h1 className="text-[2.5rem] leading-tight sm:text-[3rem] sm:leading-tight lg:text-[4rem] lg:leading-tight font-bold mb-6">
              <span className="text-gray-900">Get in</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-transparent bg-clip-text">Touch</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Info Cards */}
      <Section className="py-12 sm:py-14 bg-gradient-to-b from-white to-blue-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                animationDelay={index * 0.1}
                className="card-hover card-shimmer border-2 border-blue-100 text-center bg-white"
              >
                <div className={`w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-200`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                {info.link !== '#' ? (
                  <a href={info.link} className="text-gray-600 hover:text-blue-600 transition-colors">
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.content}</p>
                )}
              </Card>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-hover card-shimmer border-2 border-blue-100 bg-white shadow-lg" padding="lg">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 text-transparent bg-clip-text mb-6">
                Send us a Message
              </h2>
              
              {submitSuccess && (
                <div className="mb-6 p-4 bg-blue-50 border-2 border-blue-200 rounded-xl flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-blue-900 mb-1">Message Sent Successfully!</h4>
                    <p className="text-sm text-blue-700">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                      placeholder="Full Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                      placeholder="mail@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                      placeholder="+880 1234-567-890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-xl shadow-blue-200 hover:shadow-2xl hover:shadow-blue-300 transform hover:scale-105'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Map or Image */}
              <Card className="border-2 border-blue-100 bg-white shadow-lg overflow-hidden" padding="none">
                <div className="h-[450px] w-full">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4326.634818704521!2d90.44406337599072!3d23.76557357866014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c710a034b4c9%3A0x1fdefa0ab9ab740a!2sSme%20Cube!5e1!3m2!1sen!2sbd!4v1763876836828!5m2!1sen!2sbd" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="RocketFlow Office Location"
                  ></iframe>
                </div>
              </Card>

              {/* Social Media */}
              <Card className="border-2 border-blue-100 bg-white shadow-lg" padding="lg">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 text-transparent bg-clip-text mb-6">
                  Connect With Us
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`w-12 h-12 rounded-xl bg-blue-50 hover:bg-blue-100 flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                      title={social.name}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </Card>

              {/* FAQ Quick Links */}
              <Card className="border-2 border-blue-100 bg-white shadow-lg" padding="lg">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 text-transparent bg-clip-text mb-6">
                  Quick Questions
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h4 className="font-bold text-gray-900 mb-2">{faq.question}</h4>
                      <p className="text-sm text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-16 sm:py-18 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-64 h-64 border-4 border-white transform rotate-45 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 border-4 border-white transform -rotate-12 animate-pulse animation-delay-2000"></div>
          </div>
        </div>

        <Container className="relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Ready to Transform Your Business?
            </h2>
            
            <p className="text-xl text-white text-opacity-90 mb-10 leading-relaxed">
              Start your free trial today and see why thousands of businesses trust RocketFlow
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-white text-gray-900 px-10 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-white/50 transform hover:scale-105 transition-all duration-300">
                Start Free Trial
              </Button>
              <Button className="bg-white text-gray-900 px-10 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-white/50 transform hover:scale-105 transition-all duration-300">
                View Pricing
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
