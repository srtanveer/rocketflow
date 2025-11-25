'use client';

import React from 'react';
import Card from './ui/Card';
import Container from './ui/Container';
import Section from './ui/Section';
import { Navbar, Footer } from '.';
import { 
  ShieldCheckIcon, 
  UserIcon, 
  LockClosedIcon, 
  ServerIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  CreditCardIcon,
  EnvelopeIcon,
  TrashIcon,
  ExclamationTriangleIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';

const PrivacyPolicyPage = () => {

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: DocumentTextIcon,
      content: `Welcome to https://rocketflow.biz/ (the Site). We understand that privacy online is important to users of our Site, especially when conducting business. This statement governs our privacy policies with respect to those users of the Site (Visitors) who visit without transacting business and Visitors who register to transact business on the Site and make use of the various services offered by This APP (collectively, Services) (Authorized Customers).`
    },
    {
      id: 'personally-identifiable',
      title: 'Personally Identifiable Information',
      icon: UserIcon,
      content: `Refers to any information that identifies or can be used to identify, contact, or locate the person to whom such information pertains, including, but not limited to, name, address, phone number, fax number, email address, financial profiles, social security number, and credit card information. Personally Identifiable Information does not include information that is collected anonymously (that is, without identification of the individual user) or demographic information not connected to an identified individual.`
    },
    {
      id: 'what-collected',
      title: 'What Personally Identifiable Information is collected?',
      icon: ServerIcon,
      content: `We may collect basic user profile information from all of our Visitors. We collect the following additional information from our Authorized Customers: the names, addresses, phone numbers and email addresses of Authorized Customers, the nature and size of the business, and the nature and size of the advertising inventory that the Authorized Customer intends to purchase or sell.`
    },
    {
      id: 'organizations',
      title: 'What organizations are collecting the information?',
      icon: GlobeAltIcon,
      content: `In addition to our direct collection of information, our third party service vendors (such as credit card companies, clearinghouses and banks) who may provide such services as credit, insurance, and escrow services may collect this information from our Visitors and Authorized Customers. We do not control how these third parties use such information, but we do ask them to disclose how they use personal information provided to them from Visitors and Authorized Customers. Some of these third parties may be intermediaries that act solely as links in the distribution chain, and do not store, retain, or use the information given to them.`
    },
    {
      id: 'how-used',
      title: 'How does the Site use Personally Identifiable Information?',
      icon: DocumentTextIcon,
      content: `We use Personally Identifiable Information to customize the Site, to make appropriate service offerings, and to fulfill buying and selling requests on the Site. We may email Visitors and Authorized Customers about research or purchase and selling opportunities on the Site or information related to the subject matter of the Site. We may also use Personally Identifiable Information to contact Visitors and Authorized Customers in response to specific inquiries, or to provide requested information.`
    },
    {
      id: 'sharing',
      title: 'With whom may the information may be shared?',
      icon: UserIcon,
      content: `Personally Identifiable Information about Authorized Customers may be shared with other Authorized Customers who wish to evaluate potential transactions with other Authorized Customers. We may share aggregated information about our Visitors, including the demographics of our Visitors and Authorized Customers, with our affiliated agencies and third party vendors. We also offer the opportunity to "opt out" of receiving information or being contacted by us or by any agency acting on our behalf.`
    },
    {
      id: 'storage',
      title: 'How is Personally Identifiable Information stored?',
      icon: LockClosedIcon,
      content: `Personally Identifiable Information collected by This APP is securely stored and is not accessible to third parties or employees of This APP except for use as indicated above.`
    },
    {
      id: 'choices',
      title: 'What choices are available to Visitors regarding collection, use and distribution of the information?',
      icon: DocumentTextIcon,
      content: `Visitors and Authorized Customers may opt out of receiving unsolicited information from or being contacted by us and/or our vendors and affiliated agencies by responding to emails as instructed, or by contacting us.`
    },
    {
      id: 'cookies',
      title: 'Are Cookies Used on the Site?',
      icon: ServerIcon,
      content: `Cookies are used for a variety of reasons. We use Cookies to obtain information about the preferences of our Visitors and the services they select. We also use Cookies for security purposes to protect our Authorized Customers. For example, if an Authorized Customer is logged on and the site is unused, system may automatically log the Authorized Customer off.`
    },
    {
      id: 'login-info',
      title: 'How does This APP use login information?',
      icon: LockClosedIcon,
      content: `This APP uses login information, including, but not limited to, IP addresses, ISPs, and browser types, to analyze trends, administer the Site, track a user's movement and use, and gather broad demographic information.`
    },
    {
      id: 'partners',
      title: 'What partners or service providers have access to Personally Identifiable Information?',
      icon: GlobeAltIcon,
      content: `This APP has entered into and will continue to enter into partnerships and other affiliations with a number of vendors. Such vendors may have access to certain Personally Identifiable Information on a need to know basis for evaluating Authorized Customers for service eligibility. Our privacy policy does not cover their collection or use of this information. Disclosure of Personally Identifiable Information to comply with law. We will disclose Personally Identifiable Information in order to comply with a court order or subpoena or a request from a law enforcement agency to release information. We will also disclose Personally Identifiable Information when reasonably necessary to protect the safety of our Visitors and Authorized Customers.`
    },
    {
      id: 'security',
      title: 'How does the Site keep Personally Identifiable Information secure?',
      icon: ShieldCheckIcon,
      content: `All of our employees are familiar with our security policy and practices. The Personally Identifiable Information of our Visitors and Authorized Customers is only accessible to a limited number of qualified employees who are given a password in order to gain access to the information. We audit our security systems and processes on a regular basis. Sensitive information, such as credit card numbers or social security numbers, is protected by encryption protocols, in place to protect information sent over the Internet. While we take commercially reasonable measures to maintain a secure site, electronic communications and databases are subject to errors, tampering and break-ins, and we cannot guarantee or warrant that such events will not take place and we will not be liable to Visitors or Authorized Customers for any such occurrences.`
    },
    {
      id: 'corrections',
      title: 'How can Visitors correct any inaccuracies in Personally Identifiable Information?',
      icon: EnvelopeIcon,
      content: `Visitors and Authorized Customers may contact us to update Personally Identifiable Information about them or to correct any inaccuracies by emailing us at support@rocketflow.biz`
    },
    {
      id: 'deletion',
      title: 'Can a Visitor delete or deactivate Personally Identifiable Information?',
      icon: TrashIcon,
      content: `We provide Visitors and Authorized Customers with a mechanism to delete/deactivate Personally Identifiable Information from the Site's database by contacting us. However, because of backups and records of deletions, it may be impossible to delete a Visitor's entry without retaining some residual information. An individual who requests to have Personally Identifiable Information deactivated will have this information functionally deleted, and we will not sell, transfer, or use Personally Identifiable Information relating to that individual in any way moving forward.`
    },
    {
      id: 'changes',
      title: 'What happens if the Privacy Policy Changes?',
      icon: ExclamationTriangleIcon,
      content: `We will let our Visitors and Authorized Customers know about changes to our privacy policy by posting such changes on the Site. However, if we are changing our privacy policy in a manner that might cause disclosure of Personally Identifiable Information that a Visitor or Authorized Customer has previously requested not be disclosed, we will contact such Visitor or Authorized Customer to allow such Visitor or Authorized Customer to prevent such disclosure.`
    },
    {
      id: 'links',
      title: 'Links',
      icon: GlobeAltIcon,
      content: `https://rocketflow.biz/ contains links to other web sites. Please note that when you click on one of these links, you are moving to another web site. We encourage you to read the privacy statements of these linked sites as their privacy policies may differ from ours.`
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
        
        {/* Back Button */}
        <Container className="relative z-10 mb-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-blue-200 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Back
          </a>
        </Container>
        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-5 py-2 bg-blue-100 rounded-full mb-6 border border-blue-200">
              <ShieldCheckIcon className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-900 font-semibold text-sm">Last Revised: April 12, 2022</span>
            </div>

            <h1 className="text-[2.5rem] leading-tight sm:text-[3rem] sm:leading-tight lg:text-[4rem] lg:leading-tight font-bold mb-6">
              <span className="text-gray-900">Rocket Flow</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-transparent bg-clip-text">Privacy Policy</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Understanding how we collect, use, and protect your personal information
            </p>
          </div>
        </Container>
      </Section>

      {/* Main Content */}
      <Section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Card 
                  key={section.id} 
                  animationDelay={index * 0.05}
                  className="border-2 border-blue-100 bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                  padding="lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        {section.title}
                      </h2>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-64 h-64 border-4 border-white transform rotate-45 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 border-4 border-white transform -rotate-12 animate-pulse animation-delay-2000"></div>
          </div>
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Questions About Our Privacy Policy?</h2>
            <p className="text-lg text-white text-opacity-90 mb-8">
              If you have any questions or concerns about our privacy practices, please don't hesitate to contact us.
            </p>
            <a
              href="mailto:support@rocketflow.biz"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg shadow-2xl hover:shadow-white/50 transform hover:scale-105 transition-all duration-300"
            >
              <EnvelopeIcon className="w-5 h-5" />
              Contact Us: support@rocketflow.biz
            </a>
          </div>
        </Container>
      </Section>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
