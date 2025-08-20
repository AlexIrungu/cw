import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  User, 
  Briefcase, 
  Zap, 
  Mail,
  Menu,
  X,
  Calendar,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Works', path: '/works', icon: Briefcase },
    { name: 'Services', path: '/services', icon: Zap },
    { name: 'Contact', path: '/contact', icon: Mail }
  ];

  const socialLinks = [
    { icon: Github, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Twitter, href: '#' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-4 bg-white/80 backdrop-blur-2xl shadow-2xl border-b border-rose-quartz/10' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <Link to="/" className="relative group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3"
              >
                {/* Animated logo background */}
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 rounded-2xl blur-lg opacity-50 group-hover:opacity-100"
                    style={{ backgroundColor: 'rgba(164, 125, 171, 0.5)' }}
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="relative w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-xl" style={{ backgroundColor: '#A47DAB' }}>
                    C
                  </div>
                </div>
                
                <div>
                  <h1 className="text-night font-bold text-xl leading-none">Christina</h1>
                  <p className="text-rose-quartz text-xs">Creative Studio</p>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link to={item.path}>
                      <motion.button
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                          isActive
                            ? 'text-white'
                            : 'text-night/70 hover:text-night'
                        }`}
                      >
                        {/* Active background */}
                        {isActive && (
                          <motion.div
                            layoutId="activeNav"
                            className="absolute inset-0 rounded-2xl"
                            style={{ backgroundColor: '#A47DAB' }}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}
                        
                        <span className="relative flex items-center gap-2">
                          <Icon size={16} />
                          {item.name}
                        </span>
                        
                        {/* Hover effect */}
                        {!isActive && (
                          <motion.div
                            className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity"
                            style={{ backgroundColor: 'rgba(164, 125, 171, 0.1)' }}
                          />
                        )}
                      </motion.button>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Desktop Social & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Social Links */}
              <div className="flex items-center space-x-2 mr-4 pr-4 border-r border-rose-quartz/20">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ y: -2, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-9 h-9 bg-white/50 backdrop-blur-xl rounded-xl flex items-center justify-center text-night/70 hover:bg-white/80 transition-all duration-300 border border-rose-quartz/20"
                      style={{
                        '&:hover': {
                          color: '#A47DAB'
                        }
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#A47DAB'}
                      onMouseLeave={(e) => e.target.style.color = 'rgba(8, 15, 15, 0.7)'}
                    >
                      <Icon size={16} />
                    </motion.a>
                  );
                })}
              </div>
              
              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="magnetic px-6 py-3 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
                style={{ backgroundColor: '#A47DAB' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(164, 125, 171, 0.9)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#A47DAB'}
              >
                <Calendar size={16} />
                Book a Call
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-12 h-12 bg-white/80 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-lg border border-rose-quartz/20"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} className="text-night" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} className="text-night" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-2xl border-t border-rose-quartz/20 mt-4"
            >
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                          isActive
                            ? 'text-white'
                            : 'text-night/70'
                        }`}
                        style={isActive ? { backgroundColor: '#A47DAB' } : {}}
                        onMouseEnter={(e) => {
                          if (!isActive) {
                            e.target.style.backgroundColor = 'rgba(164, 125, 171, 0.1)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) {
                            e.target.style.backgroundColor = 'transparent';
                          }
                        }}
                      >
                        <Icon size={20} />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    </motion.div>
                  );
                })}
                
                {/* Mobile CTA */}
                <motion.button
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="w-full mt-4 px-6 py-3 text-white rounded-xl font-semibold shadow-xl"
                  style={{ backgroundColor: '#A47DAB' }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <Calendar size={16} />
                    Book a Call
                  </span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;