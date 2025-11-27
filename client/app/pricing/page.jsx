'use client'

import { useState, useEffect } from "react";
import { Navbar, Footer, Button, Card, Section, Container } from '../../components';
import {
  CheckIcon,
  XMarkIcon,
  SparklesIcon,
  BoltIcon,
  RocketLaunchIcon,
  StarIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  ChartBarIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'yearly'
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [pricingPlans, setPricingPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch pricing data from API
  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_ADMIN_API || 'http://localhost:4000';
        const response = await fetch(`${API_URL}/api/pricing`);

        if (!response.ok) {
          throw new Error('Failed to fetch pricing');
        }

        const data = await response.json();

        // Transform API data to match component structure
        const transformedPlans = (data.packages || []).map(pkg => {
          // Map icon names to actual icon components
          const iconMap = {
            'sparkles': SparklesIcon,
            'bolt': BoltIcon,
            'rocket': RocketLaunchIcon
          };

          return {
            name: pkg.name,
            icon: iconMap[pkg.icon] || SparklesIcon,
            description: pkg.description || '',
            color: pkg.color || 'blue',
            monthlyPrice: pkg.monthly_price ? Number(pkg.monthly_price) : null,
            yearlyPrice: pkg.yearly_price ? Number(pkg.yearly_price) : null,
            savings: pkg.monthly_price && pkg.yearly_price
              ? Math.round((pkg.monthly_price * 12) - pkg.yearly_price)
              : 0,
            features: (pkg.features || []).map(f => ({
              name: f.name,
              included: f.included
            })),
            popular: pkg.is_popular || false,
            custom: pkg.is_custom || false
          };
        });

        setPricingPlans(transformedPlans);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching pricing:', error);
        // Fallback to default plans if API fails
        setPricingPlans(getDefaultPlans());
        setLoading(false);
      }
    };

    fetchPricing();
  }, []);

  // Fallback default plans
  const getDefaultPlans = () => [
    {
      name: 'Starter',
      icon: SparklesIcon,
      description: 'Perfect for small businesses getting started',
      color: 'blue',
      monthlyPrice: 29,
      yearlyPrice: 290,
      savings: 58,
      features: [
        { name: '1,000 SMS/month', included: true },
        { name: 'Basic AI Chat Assistant', included: true },
        { name: 'Email Marketing (5,000/month)', included: true },
        { name: '1 User Account', included: true },
        { name: 'Basic Analytics', included: true },
        { name: '24/7 Email Support', included: true },
        { name: 'Advanced AI Features', included: false },
        { name: 'Custom Integrations', included: false },
        { name: 'Priority Support', included: false },
        { name: 'Dedicated Account Manager', included: false }
      ],
      popular: false
    },
    {
      name: 'Professional',
      icon: BoltIcon,
      description: 'For growing businesses that need more power',
      color: 'primary',
      monthlyPrice: 79,
      yearlyPrice: 790,
      savings: 158,
      features: [
        { name: '10,000 SMS/month', included: true },
        { name: 'Advanced AI Chat Assistant', included: true },
        { name: 'Email Marketing (50,000/month)', included: true },
        { name: '5 User Accounts', included: true },
        { name: 'Advanced Analytics Dashboard', included: true },
        { name: '24/7 Priority Support', included: true },
        { name: 'Advanced AI Features', included: true },
        { name: 'Custom Integrations', included: true },
        { name: 'White Label Options', included: false },
        { name: 'Dedicated Account Manager', included: false }
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      icon: RocketLaunchIcon,
      description: 'Custom solutions for large organizations',
      color: 'secondary',
      monthlyPrice: null,
      yearlyPrice: null,
      custom: true,
      features: [
        { name: 'Unlimited SMS', included: true },
        { name: 'Premium AI Chat Assistant', included: true },
        { name: 'Unlimited Email Marketing', included: true },
        { name: 'Unlimited Users', included: true },
        { name: 'Custom Analytics & Reporting', included: true },
        { name: '24/7 VIP Support', included: true },
        { name: 'All Advanced AI Features', included: true },
        { name: 'Custom Integrations & API', included: true },
        { name: 'Full White Label', included: true },
        { name: 'Dedicated Account Manager', included: true }
      ],
      popular: false
    }
  ];

  const features = [
    {
      icon: DevicePhoneMobileIcon,
      title: 'SMS Campaigns',
      description: 'Send bulk SMS to your customers'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'AI Chat Assistant',
      description: '24/7 intelligent customer support'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Marketing',
      description: 'Automated email campaigns'
    },
    {
      icon: ChartBarIcon,
      title: 'Analytics',
      description: 'Comprehensive business insights'
    },
    {
      icon: CpuChipIcon,
      title: 'AI Automation',
      description: 'Smart workflow automation'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security',
      description: 'Enterprise-grade security'
    }
  ];

  const faqs = [
    {
      question: 'Can I change plans later?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! All plans come with a 14-day free trial. No credit card required to start.'
    },
    {
      question: 'What happens if I exceed my SMS limit?',
      answer: 'We\'ll notify you when you reach 80% of your limit. You can purchase additional SMS credits or upgrade your plan.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee if you\'re not satisfied with our service.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Absolutely! You can cancel your subscription at any time with no cancellation fees.'
    }
  ];

  const getPrice = (plan) => {
    if (plan.custom) return 'Custom';
    return billingCycle === 'monthly' ? `${plan.monthlyPrice}` : `${plan.yearlyPrice}`;
  };

  const getPeriod = (plan) => {
    if (plan.custom) return '';
    return billingCycle === 'monthly' ? 'BDT/month' : 'BDT/year';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <Section className="pt-20 pb-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-1.5 bg-primary-100 rounded-full border border-primary-200">
              <StarIcon className="w-5 h-5 text-primary-600 mr-2" />
              <span className="text-primary-900 font-semibold text-sm">Simple, Transparent Pricing</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight">
              <span className="text-gray-900">Choose Your </span>
              <span className="text-primary">Perfect Plan</span>
            </h1>

            <p className="text-base text-gray-600 mb-4 leading-relaxed">
              Start with a 14-day free trial. No credit card required. Cancel anytime.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-3">
              <span className={`text-sm font-semibold ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${billingCycle === 'yearly' ? 'bg-primary' : 'bg-gray-300'
                  }`}
              >
                <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${billingCycle === 'yearly' ? 'translate-x-8' : ''
                  }`}></div>
              </button>
              <span className={`text-sm font-semibold ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
                Yearly
              </span>
              {billingCycle === 'yearly' && (
                <div className="ml-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                  Save 20%
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* Pricing Cards */}
      <Section className="py-2 bg-gray-50">
        <Container>
          {loading ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading pricing plans...</p>
            </div>
          ) : pricingPlans.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-600">No pricing plans available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={plan.name}
                  animationDelay={index * 0.1}
                  className={`relative border-2 transition-all duration-300 ${plan.popular
                    ? 'border-primary shadow-2xl scale-105 bg-white'
                    : 'border-gray-200 hover:border-primary-200 bg-white'
                    }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="px-6 py-2 bg-primary text-white rounded-full text-sm font-bold shadow-lg">
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="text-center mb-4">
                    <div className={`w-12 h-12 bg-${plan.color}-500 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg`}>
                      <plan.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                    <p className="text-gray-600 text-xs">{plan.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-4 pb-4 border-b border-gray-200">
                    {plan.custom ? (
                      <div className="text-3xl font-extrabold text-gray-900">Custom</div>
                    ) : (
                      <>
                        <div className="flex items-baseline justify-center gap-2">
                          <span className="text-3xl font-extrabold text-gray-900">{getPrice(plan)}</span>
                          <span className="text-gray-600 font-medium text-sm">{getPeriod(plan)}</span>
                        </div>
                        {billingCycle === 'yearly' && plan.savings && plan.savings > 0 && (
                          <div className="mt-2 text-sm text-green-600 font-semibold">
                            Save {plan.savings} BDT/year
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        {feature.included ? (
                          <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckIcon className="w-2.5 h-2.5 text-green-600 stroke-[3]" />
                          </div>
                        ) : (
                          <div className="w-4 h-4 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <XMarkIcon className="w-2.5 h-2.5 text-gray-400 stroke-[3]" />
                          </div>
                        )}
                        <span className={`text-xs ${feature.included ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full py-2.5 rounded-lg font-bold text-sm transition-all duration-300 ${plan.popular
                      ? 'bg-primary hover:bg-primary-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105'
                      : 'border-2 border-primary text-white bg-primary hover:bg-primary-700'
                      }`}
                  >
                    {plan.custom ? 'Contact Sales' : 'Start Free Trial'}
                  </Button>
                </Card>
              ))}
            </div>
          )}
        </Container>
      </Section>

      {/* Features Grid */}
      <Section className="py-10 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need to
              <span className="text-primary"> Grow Your Business</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All plans include our core features to help you succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                animationDelay={index * 0.1}
                className="border-2 border-gray-200 hover:border-primary-200 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary-500 rounded-xl flex items-center justify-center mb-4 shadow-md">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked
              <span className="text-primary"> Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions? We've got answers
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                animationDelay={index * 0.1}
                className="border-2 border-gray-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-64 h-64 border-4 border-white transform rotate-45 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 border-4 border-white transform -rotate-12 animate-pulse animation-delay-2000"></div>
          </div>
        </div>

        <Container className="relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
              Ready to Get Started?
            </h2>

            <p className="text-xl md:text-2xl text-white text-opacity-90 mb-12 leading-relaxed">
              Join thousands of businesses already growing with RocketFlow
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button className="border-3 border-white text-white hover:bg-white hover:text-black px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300 backdrop-blur-sm bg-white bg-opacity-10">
                Start Free Trial
              </Button>
              <Button className="border-3 border-white text-white hover:bg-white hover:text-black px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300 backdrop-blur-sm bg-white bg-opacity-10">
                Contact Sales
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 text-white text-opacity-90">
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="w-6 h-6" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-6 h-6" />
                <span>No credit card required</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
