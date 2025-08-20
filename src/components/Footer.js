import React, { useEffect, useRef, useState } from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter, FaDribbble, FaBehance, FaEnvelope, FaMapMarkerAlt, FaPhone, FaHeart, FaArrowUp, FaCode, FaPaintBrush, FaCogs } from 'react-icons/fa';

const Footer = () => {
  const footerRef = useRef();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: FaLinkedinIn, color: '#A47DAB' },
    { name: 'GitHub', href: '#', icon: FaGithub, color: '#A47DAB' },
    { name: 'Twitter', href: '#', icon: FaTwitter, color: '#A47DAB' },
    { name: 'Dribbble', href: '#', icon: FaDribbble, color: '#A47DAB' },
    { name: 'Behance', href: '#', icon: FaBehance, color: '#A47DAB' }
  ];

  const contactInfo = [
    { icon: FaMapMarkerAlt, text: 'Nairobi, Kenya', href: '#' },
    { icon: FaEnvelope, text: 'wavuamuroka@gmail.com', href: 'mailto:wavuamuroka@gmail.com' },
    { icon: FaPhone, text: '+254 746 403 546', href: 'tel:+254746403546' }
  ];

  const services = [
    { icon: FaCode, title: 'Web Development', description: 'Full-stack solutions' },
    { icon: FaPaintBrush, title: 'UI/UX Design', description: 'Creative interfaces' },
    { icon: FaCogs, title: 'Operations', description: 'Process optimization' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const legalLinks = [
    { name: 'Privacy', href: '#privacy' },
    { name: 'Terms', href: '#terms' },
    { name: 'Sitemap', href: '#sitemap' }
  ];

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Enhanced Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 flex items-center justify-center z-50 group backdrop-blur-sm border border-white/10"
          style={{
            background: 'linear-gradient(135deg, #A47DAB 0%, #8e6b95 100%)'
          }}
          aria-label="Scroll to top"
        >
          <FaArrowUp className="group-hover:scale-125 group-hover:-translate-y-1 transition-all duration-300" />
        </button>
      )}

      <footer 
        ref={footerRef}
        className="text-white relative overflow-hidden"
        style={{ backgroundColor: '#100013' }}
      >
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#A47DAB' }}></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15" style={{ backgroundColor: '#A47DAB' }}></div>
          <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full blur-2xl opacity-10" style={{ backgroundColor: '#A47DAB' }}></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-20 right-20 w-4 h-4 rotate-45 opacity-30" style={{ backgroundColor: '#A47DAB' }}></div>
          <div className="absolute bottom-32 left-16 w-2 h-8 opacity-20" style={{ backgroundColor: '#A47DAB' }}></div>
          <div className="absolute top-40 left-1/3 w-3 h-3 rounded-full opacity-25" style={{ backgroundColor: '#A47DAB' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          
          {/* Main Footer Content */}
          <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Enhanced Brand Section */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-4xl font-bold text-white mb-4 font-serif tracking-tight">
                  Christine Wavua
                </h3>
                <div className="w-16 h-1 mb-6 rounded-full" style={{ backgroundColor: '#A47DAB' }}></div>
                <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                  Passionate full-stack developer and creative designer, transforming ideas into 
                  exceptional digital experiences that inspire and engage.
                </p>
              </div>

              {/* Services Highlights */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white mb-4">What I Do</h4>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-4 group cursor-pointer p-3 rounded-xl transition-all duration-300 hover:bg-white/5"
                    >
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                           style={{ backgroundColor: 'rgba(164, 125, 171, 0.1)' }}>
                        <service.icon className="text-lg" style={{ color: '#A47DAB' }} />
                      </div>
                      <div>
                        <h5 className="text-white font-semibold text-base group-hover:text-opacity-90 transition-colors duration-300">
                          {service.title}
                        </h5>
                        <p className="text-gray-400 text-sm">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Contact Section */}
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold text-white mb-6 font-serif">
                  Get In Touch
                </h4>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center space-x-4 text-gray-300 hover:text-white transition-all duration-300 group cursor-pointer p-3 rounded-xl hover:bg-white/5"
                    >
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                           style={{ backgroundColor: 'rgba(164, 125, 171, 0.1)' }}>
                        <contact.icon className="text-base transition-colors duration-300" style={{ color: '#A47DAB' }} />
                      </div>
                      <span className="text-sm font-medium">{contact.text}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="p-4 rounded-2xl border border-white/10" style={{ background: 'linear-gradient(135deg, rgba(164, 125, 171, 0.1) 0%, rgba(164, 125, 171, 0.05) 100%)' }}>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-semibold text-sm">Available for Projects</span>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Currently accepting new opportunities and collaborations.
                </p>
              </div>
            </div>

            {/* Enhanced Navigation & Social */}
            <div className="space-y-8">
              {/* Quick Navigation */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-6 font-serif">
                  Quick Links
                </h4>
                <div className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="block text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium py-2 px-3 rounded-lg hover:bg-white/5 hover:translate-x-2"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Enhanced Social Links */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-6 font-serif">
                  Connect With Me
                </h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-2 group border border-white/10 backdrop-blur-sm"
                      style={{ background: 'linear-gradient(135deg, rgba(164, 125, 171, 0.1) 0%, rgba(164, 125, 171, 0.05) 100%)' }}
                      title={social.name}
                    >
                      <social.icon 
                        className="text-base group-hover:scale-125 transition-all duration-300" 
                        style={{ color: social.color }} 
                      />
                    </a>
                  ))}
                </div>
                
                {/* Call to Action */}
                <div className="mt-6 p-4 rounded-2xl border border-white/10" style={{ background: 'linear-gradient(135deg, rgba(164, 125, 171, 0.1) 0%, rgba(164, 125, 171, 0.05) 100%)' }}>
                  <p className="text-gray-300 text-sm mb-3">Ready to start your project?</p>
                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-2 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: '#A47DAB' }}
                  >
                    <span>Let's Talk</span>
                    <FaArrowUp className="rotate-45" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Bottom Footer */}
          <div className="border-t border-white/10 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              
              {/* Copyright with enhanced styling */}
              <div className="flex items-center space-x-3 text-gray-400">
                <span className="text-sm">© 2025 Christine Wavua.</span>
                <div className="flex items-center space-x-2">
                  <span className="hidden sm:inline text-sm">Crafted with</span>
                  <FaHeart className="animate-pulse" style={{ color: '#A47DAB' }} />
                  <span className="hidden sm:inline text-sm">in Nairobi, Kenya</span>
                </div>
              </div>

              {/* Legal Links */}
              <div className="flex items-center space-x-6 text-gray-400">
                {legalLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href} 
                    className="text-sm hover:text-white transition-colors duration-300 hover:underline"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Back to Top Link */}
              <button
                onClick={scrollToTop}
                className="text-sm font-medium transition-all duration-300 hover:translate-y-1 flex items-center space-x-2"
                style={{ color: '#A47DAB' }}
              >
                <span>Back to Top</span>
                <FaArrowUp />
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Decorative Elements */}
        <div className="absolute bottom-6 left-6 opacity-30">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#A47DAB' }}></div>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#A47DAB' }}></div>
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#A47DAB' }}></div>
          </div>
        </div>
        <div className="absolute top-6 right-6 opacity-20">
          <div className="w-8 h-1" style={{ backgroundColor: '#A47DAB' }}></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;