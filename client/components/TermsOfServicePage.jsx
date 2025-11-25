'use client';

import React from 'react';
import Card from './ui/Card';
import Container from './ui/Container';
import Section from './ui/Section';
import { Navbar, Footer } from '.';
import { 
  ShieldCheckIcon, 
  DocumentTextIcon,
  ScaleIcon,
  ExclamationTriangleIcon,
  BanknotesIcon,
  GlobeAltIcon,
  UserGroupIcon,
  LockClosedIcon,
  ClipboardDocumentCheckIcon,
  BellAlertIcon,
  ChatBubbleLeftRightIcon,
  BuildingLibraryIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';

const TermsOfServicePage = () => {

  const sections = [
    {
      id: 'overview',
      title: 'Overview',
      icon: DocumentTextIcon,
      content: [
        'BY ACCESSING OR USING https://rocketflow.biz/ YOU REPRESENT THAT YOU HAVE THE FULL AUTHORITY TO ACT TO BIND YOURSELF, ANY THIRD PARTY, COMPANY, OR LEGAL ENTITY, AND THAT YOUR USE AND/OR INTERACTION, AS WELL AS CONTINUING TO USE OR INTERACT, WITH THE SITE CONSTITUTES YOUR HAVING READ AND AGREED TO THESE TERMS OF USE AS WELL AS OTHER AGREEMENTS THAT WE MAY POST ON THE SITE.',
        'BY VIEWING, VISITING, USING, OR INTERACTING WITH https://rocketflow.biz/ OR WITH ANY BANNER, POP-UP, OR ADVERTISING THAT APPEARS ON IT, YOU ARE AGREEING TO ALL THE PROVISIONS OF THIS TERMS OF USE POLICY AND THE PRIVACY POLICY OF https://rocketflow.biz/.',
        'https://rocketflow.biz/ SPECIFICALLY DENIES ACCESS TO ANY INDIVIDUAL THAT IS COVERED BY THE CHILDREN\'S ONLINE PRIVACY PROTECTION ACT (COPPA) OF 1998.',
        'https://rocketflow.biz/ RESERVES THE RIGHT TO DENY ACCESS TO ANY PERSON OR VIEWER FOR ANY LAWFUL REASON. UNDER THE TERMS OF THE PRIVACY POLICY, WHICH YOU ACCEPT AS A CONDITION FOR VIEWING, https://rocketflow.biz/ IS ALLOWED TO COLLECT AND STORE DATA AND INFORMATION FOR THE PURPOSE OF EXCLUSION AND FOR MANY OTHER USES.',
        'THIS TERMS OF USE AGREEMENT MAY CHANGE FROM TIME TO TIME. VISITORS HAVE AN AFFIRMATIVE DUTY, AS PART OF THE CONSIDERATION FOR PERMISSION TO ACCESS https://rocketflow.biz/, TO KEEP THEMSELVES INFORMED OF SUCH CHANGES BY REVIEWING THIS TERMS OF USE PAGE EACH TIME THEY VISIT https://rocketflow.biz/.'
      ]
    },
    {
      id: 'parties',
      title: 'Parties to the Terms of Use Agreement',
      icon: UserGroupIcon,
      content: [
        'Visitors, viewers, users, subscribers, members, affiliates, or customers, collectively referred to herein as "Visitors," are parties to this agreement. The website and its owners and/or operators are parties to this agreement, herein referred to as "Website."'
      ]
    },
    {
      id: 'use-of-information',
      title: 'Use of Information from this Website',
      icon: LockClosedIcon,
      content: [
        'Unless you have entered into an express written contract with this website to the contrary, visitors, viewers, subscribers, members, affiliates, or customers have no right to use this information in a commercial or public setting; they have no right to broadcast it, copy it, save it, print it, sell it, or publish any portions of the content of this website. By accessing the contents of this website, you agree to this condition of access and you acknowledge that any unauthorized use is unlawful and may subject you to civil or criminal penalties.',
        'Again, Visitor has no rights whatsoever to use the content of, or portions thereof, including its databases, invisible pages, linked pages, underlying code, or other intellectual property the site may contain, for any reason or for any use whatsoever. In recognition of the fact that it may be difficult to quantify the exact damages arising from infringement of this provision, Visitor agrees to compensate the owners of https://rocketflow.biz/ with liquidated damages in the amount of U.S. $100,000, or, if it can be calculated, the actual costs and actual damages for breach of this provision, whichever is greater.',
        'Visitor warrants that he or she understands that accepting this provision is a condition of accessing https://rocketflow.biz/ and that accessing https://rocketflow.biz/ constitutes acceptance.'
      ]
    },
    {
      id: 'ownership',
      title: 'Ownership of Website or Right to Use, Sell, Publish Contents',
      icon: ShieldCheckIcon,
      content: [
        'The website and its contents are owned or licensed by the website\'s owner. Material contained on the website must be presumed to be proprietary and copyrighted. Visitors have no rights whatsoever in the site content. Use of website content for any reason is unlawful unless it is done with express contract or permission of the website.'
      ]
    },
    {
      id: 'hyperlinking',
      title: 'Hyperlinking to Site, Co-Branding, "Framing" and Referencing Site Prohibited',
      icon: GlobeAltIcon,
      content: [
        'Unless expressly authorized by website, no one may hyperlink https://rocketflow.biz/, or portions thereof, (including, but not limited to, logotypes, trademarks, branding or copyrighted material) to theirs for any reason. Furthermore, you are not permitted to reference the URL (website address) of this website or any page of this website in any commercial or non-commercial media without express permission from us, nor are you allowed to \'frame\' the site.',
        'You specifically agree to cooperate with the Website to remove or de-activate any such activities, and be liable for all damages arising from violating this provision. In recognition of the fact that it may be difficult to quantify the exact damages arising from infringement of this provision, you agree to compensate the owners of https://rocketflow.biz/ with liquidated damages in the amount of U.S. $100,000, or, if it can be calculated, the actual costs and actual damages for breach of this provision, whichever is greater.',
        'You warrant that you understand that accepting this provision is a condition of accessing https://rocketflow.biz/ and that accessing https://rocketflow.biz/ constitutes acceptance.'
      ]
    },
    {
      id: 'disclaimer-content',
      title: 'Disclaimer for Contents of Site',
      icon: ExclamationTriangleIcon,
      content: [
        'https://rocketflow.biz/ disclaims any responsibility for the accuracy of the content appearing at, linked to on, or mentioned on https://rocketflow.biz/. Visitors assume all risk relating to viewing, reading, using, or relying upon this information. Unless you have otherwise formed an express contract to the contrary with us, you have no right to rely on any information contained herein as accurate. We make no such warranty.'
      ]
    },
    {
      id: 'disclaimer-harm-computer',
      title: 'Disclaimer for Harm Caused to Your Computer or Software',
      icon: ExclamationTriangleIcon,
      content: [
        'VISITOR ASSUMES ALL RISK OF VIRUSES, WORMS, OR OTHER CORRUPTING FACTORS. We assume no responsibility for damage to computers or software of the visitor or any person the visitor subsequently communicates with from corrupting code or data that is inadvertently passed to the visitor\'s computer. Again, visitor views and interacts with https://rocketflow.biz/, or banners or pop-ups or advertising displayed thereon, at his own risk.'
      ]
    },
    {
      id: 'disclaimer-downloads',
      title: 'Disclaimer for Harm Caused by Downloads',
      icon: ExclamationTriangleIcon,
      content: [
        'Visitor downloads information from https://rocketflow.biz/ at his own risk. Website makes no warranty that downloads are free of corrupting computer codes, including, but not limited to, viruses and worms.'
      ]
    },
    {
      id: 'limitation-liability',
      title: 'Limitation of Liability',
      icon: ScaleIcon,
      content: [
        'By viewing, using, or interacting in any manner with https://rocketflow.biz/, including banners, advertising, or pop-ups, downloads, and as a condition of the website to allow his lawful viewing, Visitor forever waives all right to claims of damage of any and all description based on any causal factor resulting in any possible harm, no matter how heinous or extensive, whether physical or emotional, foreseeable or unforeseeable, whether personal or commercial in nature. For any jurisdictions that may now allow for these exclusions our maximum liability will not exceed the amount paid by you, if any, for using our website or service.',
        'Additionally, you agree not to hold us liable for any damages related to issues beyond our control, including but not limited to, acts of God, war, terrorism, insurrection, riots, criminal activity, natural disasters, disruption of communications or infrastructure, labor shortages or disruptions (including unlawful strikes), shortages of materials, and any other events which are not within our control.'
      ]
    },
    {
      id: 'indemnification',
      title: 'Indemnification',
      icon: BanknotesIcon,
      content: [
        'Visitor agrees that in the event he causes damage to us or a third party as a result of or relating to the use of https://rocketflow.biz/, Visitor will indemnify us for, and, if applicable, defend us against, any claims for damages.'
      ]
    },
    {
      id: 'submissions',
      title: 'Submissions',
      icon: ClipboardDocumentCheckIcon,
      content: [
        'Visitor agrees as a condition of viewing, that any communication between Visitor and Website is deemed a submission. All submissions, including portions thereof, graphics contained thereon, or any of the content of the submission, shall become the exclusive property of the Website and may be used, without further permission, for commercial use without additional consideration of any kind. Visitor agrees to only communicate that information to the Website, which it wishes to forever allow the Website to use in any manner as it sees fit. "Submissions" is also a provision of the Privacy Policy.'
      ]
    },
    {
      id: 'notice',
      title: 'Notice',
      icon: BellAlertIcon,
      content: [
        'No additional notice of any kind for any reason is required to be given to Visitor and Visitor expressly warrants an understanding that the right to notice is waived as a condition for permission to view or interact with the website.'
      ]
    },
    {
      id: 'disputes',
      title: 'Disputes',
      icon: ChatBubbleLeftRightIcon,
      content: [
        'As part of the consideration that the Website requires for viewing, using or interacting with this website, Visitor agrees to use binding arbitration for any claim, dispute, or controversy ("CLAIM") of any kind (whether in contract, tort or otherwise) arising out of or relating to this purchase, this product, including solicitation issues, privacy issues, and terms of use issues.',
        'Arbitration shall be conducted pursuant to the rules of the American Arbitration Association which are in effect on the date a dispute is submitted to the American Arbitration Association. Information about the American Arbitration Association, its rules, and its forms are available from the American Arbitration Association, 335 Madison Avenue, Floor 10, New York, New York, 10017-4605. Hearing will take place in the city or county of the owner of https://rocketflow.biz/.',
        'In no case shall the viewer, visitor, member, subscriber or customer have the right to go to court or have a jury trial. Viewer, visitor, member, subscriber or customer will not have the right to engage in pre-trial discovery except as provided in the rules; you will not have the right to participate as a representative or member of any class of claimants pertaining to any claim subject to arbitration; the arbitrator\'s decision will be final and binding with limited rights of appeal.',
        'The prevailing party shall be reimbursed by the other party for any and all costs associated with the dispute arbitration, including attorney fees, collection fees, investigation fees, travel expenses.'
      ]
    },
    {
      id: 'jurisdiction',
      title: 'Jurisdiction and Venue',
      icon: BuildingLibraryIcon,
      content: [
        'If any matter concerning this purchase shall be brought before a court of law, pre- or post-arbitration, Viewer, visitor, member, subscriber or customer agrees to that the sole and proper jurisdiction to be the state and city declared in the contact information of the web owner unless otherwise here specified. In the event that litigation is in a federal court, the proper court shall be the closest federal court to the owner of https://rocketflow.biz/\'s address.'
      ]
    },
    {
      id: 'applicable-law',
      title: 'Applicable Law',
      icon: ScaleIcon,
      content: [
        'Viewer, visitor, member, subscriber or customer agrees that the applicable law to be applied shall, in all cases, be that of the state of the owner of https://rocketflow.biz/.'
      ]
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
              <ScaleIcon className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-900 font-semibold text-sm">Last Revised: April 12, 2022</span>
            </div>

            <h1 className="text-[2.5rem] leading-tight sm:text-[3rem] sm:leading-tight lg:text-[4rem] lg:leading-tight font-bold mb-6">
              <span className="text-gray-900">Rocket Flow</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-transparent bg-clip-text">Terms of Service</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Please read these terms carefully before using our services
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
                      <div className="space-y-4">
                        {section.content.map((paragraph, index) => (
                          <p key={index} className="text-gray-700 leading-relaxed text-lg">
                            {paragraph}
                          </p>
                        ))}
                      </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Questions About Our Terms of Service?</h2>
            <p className="text-lg text-white text-opacity-90 mb-8">
              If you have any questions or concerns about our terms of service, please don't hesitate to contact us.
            </p>
            <a
              href="mailto:support@rocketflow.biz"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg shadow-2xl hover:shadow-white/50 transform hover:scale-105 transition-all duration-300"
            >
              <DocumentTextIcon className="w-5 h-5" />
              Contact Us: support@rocketflow.biz
            </a>
          </div>
        </Container>
      </Section>
      
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
