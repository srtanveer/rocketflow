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

    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img src="/logo.png" alt="RocketFlow Logo" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
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
                        className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                      >
                        {item.name}
                        <svg 
                          className={`ml-1 h-4 w-4 transition-transform duration-200 ${
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
                          <div className="fixed left-0 right-0 h-1 z-40" style={{ top: '4rem' }} />
                          
                          <div 
                            className="fixed left-0 right-0 bg-white shadow-2xl border-t border-gray-200 z-50" 
                            style={{ top: '4rem' }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          >
                          {item.dropdownColumns ? (
                            // Multi-column layout for Industries - Full Width with custom column spans
                            <div className="grid grid-cols-4 gap-x-8 py-8 px-16 max-w-7xl mx-auto">
                              {item.dropdownColumns.map((column, columnIndex) => (
                                <div 
                                  key={column.title} 
                                  className={`space-y-2 ${columnIndex < item.dropdownColumns.length - 1 ? 'border-r border-gray-200 pr-8' : ''}`}
                                  style={{ gridColumn: `span ${column.colSpan || 1}` }}
                                >
                                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 pb-2 border-b border-gray-200">
                                    {column.title}
                                  </h3>
                                  <div className={column.colSpan > 1 ? 'grid grid-cols-2 gap-x-8 gap-y-0.5' : 'space-y-0.5'}>
                                    {column.items.map((dropdownItem) => (
                                      <a
                                        key={dropdownItem.name}
                                        href={dropdownItem.href}
                                        className="block px-3 py-1.5 text-base font-semibold text-gray-900 hover:text-primary hover:bg-gray-50 rounded-md transition-colors duration-200 leading-snug"
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
                                  className="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors duration-200"
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
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">

            <Link href="https://rocketflow.biz/create_account/selected_package">
              <button
                className={`group relative px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ease-out transform hover:scale-105
                  ${pathname === '/signup'
                    ? 'text-white bg-primary shadow-lg ring-2 ring-primary-light ring-opacity-50 scale-105'
                    : 'text-white bg-primary  hover:from-primary-dark hover:to-secondary shadow-lg hover:shadow-xl'}`}
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
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-gray-200">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      className="w-full text-left text-gray-600 hover:text-primary px-3 py-2 text-base font-medium transition-colors duration-200 flex items-center justify-between"
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
                      <div className="pl-6 space-y-1">
                        {item.dropdownColumns ? (
                          // Multi-column layout for mobile (stacked vertically)
                          item.dropdownColumns.map((column) => (
                            <div key={column.title} className="mt-2">
                              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3">
                                {column.title}
                              </h3>
                              {column.items.map((dropdownItem) => (
                                <a
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="block text-gray-500 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {dropdownItem.name}
                                </a>
                              ))}
                            </div>
                          ))
                        ) : (
                          // Single column for other dropdowns
                          item.dropdownItems.map((dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block text-gray-500 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200"
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
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <div className="pt-4 pb-2 space-y-3">
              <Link href="/signin" className="block">
                <button 
                  className={`w-full px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 ease-out transform hover:scale-[1.02]
                    ${pathname === '/signin'
                      ? 'text-white bg-primary shadow-lg ring-2 ring-primary-light ring-opacity-50'
                      : 'text-primary-dark bg-white border-2 border-primary hover:bg-primary hover:text-white hover:shadow-md'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center justify-center">
                    Sign In
                  </span>
                </button>
              </Link>
              <Link href="/signup" className="block">
                <button 
                  className={`w-full px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 ease-out transform hover:scale-[1.02]
                    ${pathname === '/signup'
                      ? 'text-white bg-gradient-to-r from-primary-dark to-secondary shadow-xl ring-2 ring-primary-light ring-opacity-50'
                      : 'text-white bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary shadow-lg hover:shadow-xl'}`}
                  onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="flex items-center justify-center">
                        Sign Up
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
