'use client'

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/Button';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState(null);

  const handleMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setIsIndustriesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsIndustriesDropdownOpen(false);
    }, 150);
    setCloseTimeout(timeout);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Industries', 
      href: '#industries',
      hasDropdown: true,
      dropdownColumns: [
        {
          title: 'BY MEDIA',
          colSpan: 1,
          items: [
            { name: 'Facebook', href: '#facebook' },
            { name: 'Messenger', href: '#messenger' },
            { name: 'Instagram', href: '#instagram' },
            { name: 'SMS', href: '#sms' },
            { name: 'Email', href: '#email' }
          ]
        },
        {
          title: 'BY BUSINESS TYPE',
          colSpan: 2,
          items: [
            { name: 'Corporate Office', href: '/corporate-office' },
            { name: 'E-commerce', href: '/ecommerce' },
            { name: 'Education', href: '/education' },
            { name: 'Event Management', href: '/event' },
            { name: 'Gadget Shops', href: '/gadget-shop' },
            { name: 'Hotel & Resort', href: '/hotel-and-resort' },
            { name: 'Organic Products', href: '/organic-products' },
            { name: 'Photography', href: '/photography' },
            { name: 'Restaurants', href: '/restaurants' },
            { name: 'Salon & Parlor', href: '/salon' },
            { name: 'Study Abroad', href: '/study-abroad' },
            { name: 'Travel Booking', href: '/travel-booking' }
          ]
        },
        {
          title: 'BY USE CASE',
          colSpan: 1,
          items: [
            { name: 'Grow Your Followers', href: '#grow-followers' },
            { name: 'Collect Emails', href: '#collect-emails' },
            { name: 'Request to Follow', href: '#request-follow' },
            { name: 'Respond to Comments', href: '#respond-comments' },
            { name: 'Send Links in DM', href: '#send-links-dm' }
          ]
        }
      ]
    },

    { name: 'Blog', href: '/blog' },
    { name: 'Tutorial', href: '/tutorial' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] sm:w-[90%] max-w-7xl px-2 sm:px-0">
      <div className="backdrop-blur-2xl bg-blue-50/40 border border-blue-100/50 shadow-2xl rounded-full px-3 sm:px-6">
        <div className="flex justify-between items-center h-12 sm:h-14 gap-2 sm:gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img src="/RF-Long-logo.webp" alt="RocketFlow Logo" className="h-6 sm:h-7 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:block flex-grow">
            <div className="flex items-center justify-center space-x-4">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div 
                      className="relative"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <a
                        href={item.href}
                        className={`px-3 py-1.5 text-base font-semibold transition-all duration-200 flex items-center rounded-full whitespace-nowrap ${
                          pathname === item.href 
                            ? 'text-blue-600 bg-white/60' 
                            : 'text-gray-800 hover:text-blue-600 hover:bg-white/40'
                        }`}
                      >
                        {item.name}
                        <svg 
                          className={`ml-1 h-5 w-5 transition-transform duration-200 ${
                            (item.name === 'Industries' && isIndustriesDropdownOpen) 
                              ? 'rotate-180' : ''
                          }`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </a>
                      
                      {/* Dropdown Menu */}
                      {(item.name === 'Industries' && isIndustriesDropdownOpen) && (
                        <>
                          {/* Invisible bridge to prevent losing hover */}
                          <div className="fixed left-0 right-0 h-2 z-40" style={{ top: '4.5rem' }} />
                          
                          <div 
                            className="fixed left-0 right-0 bg-white shadow-2xl border-t border-gray-200 z-50" 
                            style={{ top: '5rem' }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          >
                          {item.dropdownColumns ? (
                            // Multi-column layout for Industries - Full Width with custom column spans
                            <div className="grid grid-cols-4 gap-x-8 py-8 px-16 max-w-7xl mx-auto">
                              {item.dropdownColumns.map((column, columnIndex) => (
                                <div 
                                  key={column.title} 
                                  className={`space-y-2 ${columnIndex < item.dropdownColumns.length - 1 ? 'border-r border-blue-200 pr-8' : ''}`}
                                  style={{ gridColumn: `span ${column.colSpan || 1}` }}
                                >
                                  <h3 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 pb-2 border-b border-blue-200">
                                    {column.title}
                                  </h3>
                                  <div className={column.colSpan > 1 ? 'grid grid-cols-2 gap-x-8 gap-y-0.5' : 'space-y-0.5'}>
                                    {column.items.map((dropdownItem) => (
                                      <a
                                        key={dropdownItem.name}
                                        href={dropdownItem.href}
                                        className="block px-3 py-1.5 text-base font-semibold text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200 leading-snug"
                                      >
                                        {dropdownItem.name}
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            // Single column layout for other dropdowns
                            <div className="py-2" style={{ minWidth: '240px' }}>
                              {item.dropdownItems.map((dropdownItem) => (
                                <a
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="block px-4 py-2 text-sm text-gray-600 hover:text-coral-500 hover:bg-gray-50 transition-colors duration-200"
                                >
                                  {dropdownItem.name}
                                </a>
                              ))}
                            </div>
                          )}
                          </div>
                        </>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-3 py-1.5 text-base font-semibold transition-all duration-200 rounded-full whitespace-nowrap ${
                        pathname === item.href 
                          ? 'text-blue-600 bg-white/60' 
                          : 'text-gray-800 hover:text-blue-600 hover:bg-white/40'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center flex-shrink-0">

            <Link href="https://rocketflow.biz/create_account/selected_package">
              <button
                className={`group relative px-4 py-2 text-base font-semibold rounded-full transition-all duration-300 ease-out transform hover:scale-105
                  ${pathname === '/signup'
                    ? 'text-white bg-blue-600 shadow-lg ring-2 ring-blue-400 ring-opacity-50 scale-105'
                    : 'text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl'}`}
              >
                <span className="relative z-10 flex items-center">
                  Get Started
                  <svg className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex-shrink-0">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-gray-800 hover:text-blue-600 hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-2">
          <div className="px-4 pt-3 pb-4 space-y-2 backdrop-blur-2xl bg-blue-50/40 border border-blue-100/50 shadow-2xl rounded-3xl max-h-[calc(100vh-6rem)] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      className="w-full text-left text-gray-800 hover:text-blue-600 hover:bg-white/40 px-3 py-2 text-sm sm:text-base font-semibold rounded-xl transition-all duration-200 flex items-center justify-between"
                      onClick={() => {
                        if (item.name === 'Industries') setIsIndustriesDropdownOpen(!isIndustriesDropdownOpen);
                      }}
                    >
                      {item.name}
                      <svg 
                        className={`h-4 w-4 transition-transform duration-200 ${
                          (item.name === 'Industries' && isIndustriesDropdownOpen) 
                            ? 'rotate-180' : ''
                        }`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {(item.name === 'Industries' && isIndustriesDropdownOpen) && (
                      <div className="pl-4 sm:pl-6 space-y-3 max-h-96 overflow-y-auto">
                        {item.dropdownColumns ? (
                          // Multi-column layout for mobile
                          item.dropdownColumns.map((column) => (
                            <div key={column.title} className="mt-2">
                              <h3 className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2 px-3">
                                {column.title}
                              </h3>
                              <div className="grid grid-cols-2 gap-1">
                                {column.items.map((dropdownItem) => (
                                  <a
                                    key={dropdownItem.name}
                                    href={dropdownItem.href}
                                    className="block text-gray-600 hover:text-blue-600 hover:bg-white/40 px-2 py-2 text-xs sm:text-sm font-medium transition-colors duration-200 rounded-lg"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {dropdownItem.name}
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))
                        ) : (
                          // Single column for other dropdowns
                          item.dropdownItems.map((dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </a>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 text-sm sm:text-base font-semibold rounded-xl transition-all duration-200 ${
                      pathname === item.href 
                        ? 'text-blue-600 bg-white/60' 
                        : 'text-gray-800 hover:text-blue-600 hover:bg-white/40'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 pb-2">
              <Link href="https://rocketflow.biz/create_account/selected_package" className="block">
                <button 
                  className="w-full px-4 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 ease-out transform hover:scale-[1.02] text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center justify-center">
                    Get Started
                    <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;