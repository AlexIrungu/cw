import React, { useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import About from './components/About';
import Contact from './components/Contact';
import Works from './components/Projects';
import Footer from './components/Footer';
import Services from './components/Services';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Page transition wrapper component
const PageTransition = ({ children }) => {
  const pageRef = useRef();
  const location = useLocation();

  useEffect(() => {
    const element = pageRef.current;
    
    // Page entrance animation
    gsap.fromTo(element, 
      { 
        opacity: 0, 
        y: 50,
        scale: 0.98
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.1
      }
    );

    // Cleanup function
    return () => {
      gsap.killTweensOf(element);
    };
  }, [location.pathname]);

  return (
    <div ref={pageRef} className="page-transition-wrapper">
      {children}
    </div>
  );
};

// Main Portfolio Page Component (if you want to use it as a single page)
const PortfolioPage = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    // Animate sections on scroll
    sectionRefs.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(section,
          {
            opacity: 0,
            y: 60,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play none none reverse'
            },
            delay: index * 0.1
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <>
      <div ref={addToRefs}>
        <Home />
      </div>
      <div ref={addToRefs}>
        <About />
      </div>
      <div ref={addToRefs}>
        <Works />
      </div>
      <div ref={addToRefs}>
        <Services />
      </div>
      <div ref={addToRefs}>
        <Contact />
      </div>
      <div ref={addToRefs}>
        <Footer />
      </div>
    </>
  );
};

function App() {
  const appRef = useRef();

  useEffect(() => {
    // Enhanced GSAP configuration
    gsap.config({ 
      nullTargetWarn: false,
      trialWarn: false,
      force3D: true
    });

    // Set up smooth scrolling
    const handleSmoothScroll = (e) => {
      const target = e.target.getAttribute('href');
      if (target && target.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target);
        if (element) {
          gsap.to(window, {
            duration: 1.2,
            scrollTo: { y: element, offsetY: 80 },
            ease: 'power3.inOut'
          });
        }
      }
    };

    // Add smooth scroll to internal links
    document.addEventListener('click', handleSmoothScroll);

    // Cursor follow effect (optional - for desktop)
    let cursor = null;
    let cursorFollower = null;

    if (window.innerWidth > 768) {
      cursor = document.createElement('div');
      cursorFollower = document.createElement('div');
      
      cursor.className = 'custom-cursor';
      cursorFollower.className = 'cursor-follower';
      
      cursor.style.cssText = `
        position: fixed;
        width: 8px;
        height: 8px;
        background: #d4af37;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: difference;
        transition: transform 0.1s ease;
      `;
      
      cursorFollower.style.cssText = `
        position: fixed;
        width: 40px;
        height: 40px;
        border: 1px solid rgba(212, 175, 55, 0.3);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        transition: all 0.3s ease;
      `;

      document.body.appendChild(cursor);
      document.body.appendChild(cursorFollower);

      const moveCursor = (e) => {
        gsap.to(cursor, {
          duration: 0.1,
          x: e.clientX - 4,
          y: e.clientY - 4
        });
        
        gsap.to(cursorFollower, {
          duration: 0.3,
          x: e.clientX - 20,
          y: e.clientY - 20
        });
      };

      const hoverCursor = () => {
        gsap.to(cursor, {
          duration: 0.2,
          scale: 1.5
        });
        gsap.to(cursorFollower, {
          duration: 0.2,
          scale: 1.5,
          borderColor: 'rgba(212, 175, 55, 0.6)'
        });
      };

      const leaveCursor = () => {
        gsap.to(cursor, {
          duration: 0.2,
          scale: 1
        });
        gsap.to(cursorFollower, {
          duration: 0.2,
          scale: 1,
          borderColor: 'rgba(212, 175, 55, 0.3)'
        });
      };

      document.addEventListener('mousemove', moveCursor);
      
      // Add hover effects to interactive elements
      const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', hoverCursor);
        el.addEventListener('mouseleave', leaveCursor);
      });
    }

    // Parallax effect for background elements
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    parallaxElements.forEach(element => {
      const speed = element.dataset.parallax || 0.5;
      
      gsap.to(element, {
        yPercent: -50 * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });

    // Cleanup function
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
      if (cursor) cursor.remove();
      if (cursorFollower) cursorFollower.remove();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <Router>
      <div ref={appRef} className="font-sans antialiased min-h-screen">
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');
          
          .scrolled {
            background-color: rgba(250, 247, 240, 0.95) !important;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
          }
          
          .page-transition-wrapper {
            min-height: 100vh;
          }

          /* Smooth scroll behavior */
          html {
            scroll-behavior: smooth;
          }

          /* Custom selection colors */
          ::selection {
            background: rgba(212, 175, 55, 0.3);
            color: #1a1a2e;
          }

          ::-moz-selection {
            background: rgba(212, 175, 55, 0.3);
            color: #1a1a2e;
          }

          /* Enhanced focus styles */
          a:focus, 
          button:focus,
          input:focus,
          textarea:focus {
            outline: 2px solid #d4af37;
            outline-offset: 2px;
            border-radius: 4px;
          }

          /* Animation utilities */
          .fade-in-up {
            opacity: 0;
            transform: translateY(30px);
          }

          .stagger-animation > * {
            opacity: 0;
            transform: translateY(20px);
          }

          /* Hover effects */
          .hover-lift {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .hover-lift:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          }

          /* Magnetic button effect */
          .magnetic-btn {
            position: relative;
            transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
          }

          .magnetic-btn:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, #e8b4cb, #d4af37);
            opacity: 0;
            transition: opacity 0.3s ease;
            border-radius: inherit;
            z-index: -1;
          }

          .magnetic-btn:hover:before {
            opacity: 0.1;
          }

          /* Scroll animations */
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(60px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-60px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(60px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          /* Loading states */
          .loading-shimmer {
            background: linear-gradient(90deg, 
              rgba(250, 247, 240, 0.2) 25%, 
              rgba(232, 180, 203, 0.3) 50%, 
              rgba(250, 247, 240, 0.2) 75%
            );
            background-size: 200% 100%;
            animation: shimmer 2s infinite;
          }

          @keyframes shimmer {
            0% {
              background-position: -200% 0;
            }
            100% {
              background-position: 200% 0;
            }
          }

          /* Responsive design helpers */
          @media (max-width: 768px) {
            .page-transition-wrapper {
              padding: 0 1rem;
            }
          }

          /* Print styles */
          @media print {
            .custom-cursor,
            .cursor-follower {
              display: none !important;
            }
          }
        `}</style>
        
        <Navbar />
        
        <main className="relative">
          <Routes>
            <Route path="/" element={
              <PageTransition>
                <Home />
              </PageTransition>
            } />
            <Route path="/about" element={
              <PageTransition>
                <About />
              </PageTransition>
            } />
            <Route path="/works" element={
              <PageTransition>
                <Works />
              </PageTransition>
            } />
            <Route path="/services" element={
              <PageTransition>
                <Services />
              </PageTransition>
            } />
            <Route path="/contact" element={
              <PageTransition>
                <Contact />
              </PageTransition>
            } />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;