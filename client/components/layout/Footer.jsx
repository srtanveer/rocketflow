'use client'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    services: {
      title: 'Services',
      links: [
        { name: 'AI Chatbots', href: '/tutorial' },
        { name: 'Auto Reply Systems', href: '/corporate-office' },
        { name: 'Website Development', href: '/corporate-office' },
        { name: 'Mobile Applications', href: '/corporate-office' },
      ]
    },
    industries: {
      title: 'Industries',
      links: [
        { name: 'Photography', href: '/photography' },
        { name: 'Education', href: '/education' },
        { name: 'Hotels & Resorts', href: '/hotel-and-resort' },
        { name: 'E-commerce', href: '/ecommerce' },
      ]
    },
    company: {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/corporate-office' },
        { name: 'Our Team', href: '/corporate-office' },
        { name: 'Careers', href: '/corporate-office' },
        { name: 'Blog', href: '/blog' },
      ]
    },
    support: {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/tutorial' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Documentation', href: '/tutorial' },
        { name: 'API Reference', href: '/tutorial' },
      ]
    }
  };

  const socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.132-1.551-.684-.939-.684-2.267 0-3.206.684-.94 1.835-1.551 3.132-1.551s2.448.611 3.132 1.551c.684.939.684 2.267 0 3.206-.684.94-1.835 1.551-3.132 1.551z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-blue-50 border-t border-blue-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="col-span-2 lg:col-span-1">
            <div className="text-2xl font-bold text-blue-600 mb-4">
              RocketFlow
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Empowering businesses with next-generation digital solutions across diverse industries.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-sm font-semibold text-blue-600 tracking-wider uppercase mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 pt-8 border-t border-blue-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Stay updated with our latest news
              </h3>
              <p className="text-sm text-gray-600">
                Get insights, tips, and updates delivered straight to your inbox.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-blue-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-full sm:w-64"
              />
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 pt-8 border-t border-blue-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              © {currentYear} RocketFlow. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-blue-600 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;