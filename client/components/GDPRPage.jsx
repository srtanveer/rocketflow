'use client'

import { Navbar, Footer, Section, Container, Card } from '.';
import {
  ShieldCheckIcon,
  LockClosedIcon,
  UserIcon,
  ServerIcon,
  DocumentTextIcon,
  TrashIcon,
  BellAlertIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';

export default function GDPRPage() {
  
  const sections = [
    {
      id: 'what-is-gdpr',
      title: 'What is GDPR?',
      icon: ShieldCheckIcon,
      content: `GDPR stands for General Data Protection Regulation. A new law enforced by EU to protect end user's personal data. This law enforce several aspect of data security. Here we want to give a guideline how we protect your data, what is our responsibility and what is your responsibility. We strongly suggest you read all our documentation or other article about GDPR and take decision whether you want to use our application or not. We are not responsible for any negligence or fault on data protection on your side or any third party side. Take your time to read documentation and act wisely, stay safe.`
    },
    {
      id: 'personal-data',
      title: 'Definition of Personal Data',
      icon: UserIcon,
      content: `Any data owned by an individual is his or her personal data. It could be someone's name, image, email address, physical address, social media post, location, computer IP address etc. The ownership of user's personal data is absolute. That means wherever and however the data is saved it belongs to the user solely. The data collector or data user (facebook, youtube) cannot show, save, share or perform any other activity with user's personal data without user's explicit or implicit permission. If an user gives permission to use his or her data on specific type of action (data storing, data viewing etc) then it can be used by the admin of the application. To visualize this consider a hypothetical situation. You post a status on social media. Here you have given the implicit permission to show the post to your public or private contacts. Application admin is not responsible for any abusive comment to your post made by your contacts. This means that if you made your data public then it is your responsibility. But application admin do hold responsible for any data sharing with third party. If any data is shared it must be said explicitly in advance. So we see the how data uploading and showing depends on both app admin and user. Further details you will get upon reading the full documentation.`
    },
    {
      id: 'developer-responsibility',
      title: 'Responsibility of Developer',
      icon: ServerIcon,
      content: `The safeguard of user personal data on application back end is the responsibility of developer. Developer is responsible for how the user data (name, telephone no. email etc ) and other info ( like logs of user interaction with application ) is stored on database and server. We will describe in detail how the data you submit directly (name, email etc.) and indirectly (browser name, computer IP etc.) are saved on database and server. Once any data uploaded to server the security of data depends on security of server and sometimes the admin of application. User will be notified about all the temporary (cookie and session) and permanent (data saved to database) data saving. User will get the option of all his or her personal data erasing permanently upon account deletion or service cancellation. We assure you that we do not keep logs of user activity and any other backdoor to extract user data. Sometime cpanel access and other credential of app admin is needed by the developer to support and maintaining of the application for short time before the application goes full online. We strongly recommend to app admin to change these credential after the job get done. Developer cannot be held responsible for any credential leak on this ground. Developer also cannot be held responsible for any unwilling security glitch on the application. After all, data shared online always has the risk of getting leaked. So we strongly suggest not to share any data that can compromise you any other individual.`
    },
    {
      id: 'admin-responsibility',
      title: 'Responsibility of Application Admin',
      icon: LockClosedIcon,
      content: `Application Admin has unrestricted access the user personal data. Admin can access to database, server logs and any other info on admin's reach. Application admin can see and copy the data saved on database and server. App admin can share user's personal data to third parties. How the user's data is used must be announced by the app admin explicitly before user registration. The admin should not allow anyone to extract data openly or under disguise of survey, fill the form or any other means. The app admin enjoys most privilege on application. So admin has the highest responsibility of safekeeping of user's personal data.`
    },
    {
      id: 'user-responsibility',
      title: "User's Responsibility",
      icon: DocumentTextIcon,
      content: `It's all depends on user. If user do not submit data then there will be no data breach. But this is not an option. The top most priority of user is to read all the documentation from both app developer and app admin then submit the data. Safe keeping of user's own credential is sole responsibility of user. Password and username may be encrypted on database but a dictionary word or too predictable password for a specific user can give easily access to user's account to hacker. Change your credential on any suspicious activity by unauthorized person or in case of you share your credential to other for some inevitable reason. Always think before submit.`
    }
  ];

  const actions = [
    'Collect as less data as possible. Tell the user necessity or collecting specific data.',
    'Enforce https',
    'Destroy all session and cookies after logout.',
    'Do not track user activity for commercial purpose.',
    'Tell users of any logs that saves computer ip and location.',
    'Clear terms and condition.',
    'Inform user about any data sharing with third parties.',
    'Create clear policies about data breaches.',
    'Delete data on cancelling subscription or account deletion.',
    'Patch web vulnerabilities.'
  ];

  const features = [
    {
      title: 'Adios, Application',
      description: 'Once you cancel your subscription or delete account we give you option to delete all your data existing or related to your account. Note that, this action is irreversible. The moment you say yes to delete all your data will be erased from the database and server forever. You can back up data before delete in case of re subscribe or re-register.',
      icon: TrashIcon
    },
    {
      title: 'Secrecy is my right',
      description: 'We encrypt most of your personal data on database. If any bad things occur (data breach) then the hacker will get encrypted hash not your personal on plain text. So your secrecy will intact even in case of data breach. Note that, some data cannot be encrypted because we need to show it upon login to account (like username). We will hide all your personal data as much as possible.',
      icon: LockClosedIcon
    },
    {
      title: 'No cookie and session saving',
      description: 'We will give option to save or do not save cookie and session. Even if you save cookie and session these will be destroyed after logout. We strongly suggest you not save your credential in browser. Please memorize your credential or use tools like lastpass to manage your credential.',
      icon: ShieldCheckIcon
    },
    {
      title: 'Destroy footprints',
      description: 'We do not save or track any of your activity for any commercial purpose. We may store your login time or IP for security purpose only. When you delete your account every single piece of your data will be deleted from server.',
      icon: TrashIcon
    },
    {
      title: 'Social engineering is bad',
      description: 'We do not record any of your personal activity on the application. Recording user\'s personal activity, analyzing it and try to sell a product or motivating user to pursue a certain thought upon analyzed data is becoming a malpractice. We do not do such things.',
      icon: UserIcon
    },
    {
      title: 'Notify me',
      description: 'Get notified about all your activity relating to your account (account creation, password change) by email. We suggest you to change your credential if any unusual things occur.',
      icon: BellAlertIcon
    },
    {
      title: 'Policy Update notification',
      description: 'You will get notified on any privacy policy or disclaimer updates. Read your email regarding to this matter and decide your action. Feel free to consult on this matter.',
      icon: DocumentTextIcon
    },
    {
      title: 'Connect without worry',
      description: 'We enforced HTTPS everywhere. Data sniffing is not possible on this case. Even possible, the sniffer will get encrypted hash. So feel safe to use our application.',
      icon: GlobeAltIcon
    },
    {
      title: 'No data collecting',
      description: 'We do not collect any data of user. No backdoor, No hidden option to collect data. Once the application is uploaded to server even we cannot enter to application without app admin password. So do not worry about any hidden data leak.',
      icon: ShieldCheckIcon
    },
    {
      title: 'Data breach policy',
      description: 'We implement all the security to store your data carefully on database (data encryption, MySQLi, SQL injection prevention, input checking etc.). But we do not take any responsibility of data breaches from server. Because it is total responsibility of app admin and server admin to secure your data from breaching. Any weak or too predictable password of app admin or server admin could compromise database. Any inherent fault on database config can give away the database (MongoDB security fault). Any security flaw on server can lead to data leaking. Please contact your app admin on this regard.',
      icon: ServerIcon
    }
  ];

  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
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
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-5 py-2 bg-blue-100 rounded-full mt-14 mb-6 border border-blue-200">
              <ShieldCheckIcon className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-900 font-semibold text-sm">Last Revised: April 12, 2022</span>
            </div>

            <h1 className="text-[2.5rem] leading-tight sm:text-[3rem] sm:leading-tight lg:text-[4rem] lg:leading-tight font-bold mb-6">
              <span className="text-gray-900">Rocket Flow</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-transparent bg-clip-text">GDPR</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Understanding how we protect your personal data and comply with General Data Protection Regulation
            </p>
          </div>
        </Container>
      </Section>

      {/* Main Content */}
      <Section className="py-16 bg-white">
        <Container>
          {/* Main Sections */}
          <div className="space-y-12 mb-20">
            {sections.map((section, index) => (
              <Card
                key={section.id}
                animationDelay={index * 0.1}
                className="border-2 border-blue-100 bg-white shadow-lg"
                padding="lg"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
                    {section.title}
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {section.content}
                </p>
              </Card>
            ))}
          </div>

          {/* Our Action on GDPR */}
          <Card className="border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white shadow-lg mb-20" padding="lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <CheckCircleIcon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
                Our Action on GDPR
              </h2>
            </div>
            <ul className="space-y-3">
              {actions.map((action, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{action}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Supported GDPR Features */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-transparent bg-clip-text">
                Supported GDPR Features
              </span>
            </h2>
            <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
              We've implemented comprehensive features to ensure your data protection rights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {features.map((feature, index) => (
              <Card
                key={index}
                animationDelay={index * 0.05}
                className="border-2 border-blue-100 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                padding="lg"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mt-1">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <Card className="border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white shadow-lg" padding="lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <DocumentTextIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Is sending bulk message to Facebook leads using our system GDPR compliant?
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Yes, sending bulk message using our system is GDPR compliant. Because people OPTIN to our Facebook page by starting messenger conversation and we can prove it. They become our lead in a valid way. All the message we sent must have unsubscribe link (we already have this feature) or other way so that people can unsubscribe any time.
                </p>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-64 h-64 border-4 border-white transform rotate-45 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 border-4 border-white transform -rotate-12 animate-pulse animation-delay-2000"></div>
          </div>
        </div>

        <Container className="relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Questions About GDPR Compliance?
            </h2>
            
            <p className="text-lg text-white text-opacity-90 mb-8">
              Our team is here to help you understand how we protect your data
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-white/50 transform hover:scale-105 transition-all duration-300">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
