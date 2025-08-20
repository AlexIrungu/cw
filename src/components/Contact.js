import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  // Initialize EmailJS (replace with your actual keys)
  useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    
    try {
      // Replace with your EmailJS service ID, template ID, and form reference
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      info: "wavuamuroka@gmail.com",
      description: "Drop me a line anytime",
      link: "mailto:wavuamuroka@gmail.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      info: "+254 746 403 546",
      description: "Let's discuss your project",
      link: "tel:+254746403546"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Location",
      info: "Nairobi, Kenya",
      description: "Available for local meetings",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      href: "#"
    },
    {
      name: "GitHub",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      href: "#"
    },
    {
      name: "Twitter",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      href: "#"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-ivory py-24 px-6 relative overflow-hidden"
      id="contact"
    >
      {/* Subtle Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Organic floating shapes */}
        <div className="absolute top-32 left-16 w-24 h-24 rounded-full blur-xl" style={{ backgroundColor: 'rgba(164, 125, 171, 0.08)' }}></div>
        <div className="absolute top-1/3 right-20 w-32 h-32 rounded-full blur-2xl" style={{ backgroundColor: 'rgba(164, 125, 171, 0.06)' }}></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 rounded-full blur-xl" style={{ backgroundColor: 'rgba(164, 125, 171, 0.08)' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-16 h-16 rounded-full blur-lg" style={{ backgroundColor: 'rgba(164, 125, 171, 0.08)' }}></div>
        
        {/* Subtle geometric accents */}
        <div className="absolute top-1/4 left-1/2 w-1 h-12 rotate-12" style={{ backgroundColor: 'rgba(164, 125, 171, 0.2)' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-8 h-1 rotate-45" style={{ backgroundColor: 'rgba(164, 125, 171, 0.2)' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block mb-8">
              <span className="text-xs font-semibold tracking-[0.3em] uppercase px-4 py-2 border rounded-full backdrop-blur-sm"
                    style={{ 
                      color: '#A47DAB',
                      borderColor: 'rgba(164, 125, 171, 0.3)',
                      backgroundColor: 'rgba(164, 125, 171, 0.05)'
                    }}>
                Get In Touch
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-night mb-6 tracking-tight leading-tight">
              Let's Create Something
              <span className="block mt-2" style={{ color: '#A47DAB' }}>Extraordinary</span>
            </h2>
            <p className="text-lg md:text-xl text-burnt-umber/80 max-w-2xl mx-auto leading-relaxed font-light">
              Ready to transform your vision into reality? I'm here to craft exceptional 
              digital experiences that resonate and inspire.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Contact Information */}
          <div className={`lg:col-span-2 space-y-8 transform transition-all duration-1200 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            
            {/* Contact Methods */}
            <div className="space-y-5">
              <h3 className="text-2xl font-bold text-night mb-8 tracking-tight">Reach Out</h3>
              
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  className="group block bg-white/60 backdrop-blur-sm rounded-xl p-6 border transition-all duration-500 hover:bg-white/80 hover:shadow-lg hover:transform hover:-translate-y-1"
                  style={{
                    borderColor: 'rgba(164, 125, 171, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(164, 125, 171, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(164, 125, 171, 0.2)';
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                         style={{
                           backgroundColor: 'rgba(164, 125, 171, 0.1)',
                           color: '#A47DAB'
                         }}
                         onMouseEnter={(e) => {
                           e.target.style.backgroundColor = '#A47DAB';
                           e.target.style.color = 'white';
                         }}
                         onMouseLeave={(e) => {
                           e.target.style.backgroundColor = 'rgba(164, 125, 171, 0.1)';
                           e.target.style.color = '#A47DAB';
                         }}>
                      {method.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-night font-semibold text-base mb-1 transition-colors duration-300"
                          style={{ '--hover-color': '#A47DAB' }}
                          onMouseEnter={(e) => e.target.style.color = '#A47DAB'}
                          onMouseLeave={(e) => e.target.style.color = '#080F0F'}>{method.title}</h4>
                      <p className="font-medium mb-1 text-base truncate" style={{ color: '#A47DAB' }}>{method.info}</p>
                      <p className="text-burnt-umber/70 text-sm">{method.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t" style={{ borderColor: 'rgba(164, 125, 171, 0.2)' }}>
              <h4 className="text-night font-semibold text-base mb-6">Connect With Me</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-white/60 backdrop-blur-sm border rounded-lg flex items-center justify-center text-burnt-umber transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                    style={{
                      borderColor: 'rgba(164, 125, 171, 0.2)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = 'white';
                      e.target.style.backgroundColor = '#A47DAB';
                      e.target.style.borderColor = '#A47DAB';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#823329';
                      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
                      e.target.style.borderColor = 'rgba(164, 125, 171, 0.2)';
                    }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border" style={{ borderColor: 'rgba(164, 125, 171, 0.2)' }}>
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-night font-semibold text-base">Available for Projects</span>
              </div>
              <p className="text-burnt-umber/80 text-sm leading-relaxed">
                Currently accepting new client work and exciting collaboration opportunities. 
                Let's create something amazing together.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-3 transform transition-all duration-1200 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-10 border shadow-sm" style={{ borderColor: 'rgba(164, 125, 171, 0.2)' }}>
              <h3 className="text-2xl font-bold text-night mb-8 tracking-tight">Send a Message</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-night/80 font-medium mb-2 text-sm">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/80 border rounded-lg px-4 py-3 text-night placeholder-burnt-umber/40 focus:outline-none focus:ring-2 transition-all duration-300 text-sm"
                      style={{
                        borderColor: 'rgba(164, 125, 171, 0.3)',
                        '--focus-border-color': '#A47DAB',
                        '--focus-ring-color': 'rgba(164, 125, 171, 0.2)'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#A47DAB';
                        e.target.style.boxShadow = '0 0 0 2px rgba(164, 125, 171, 0.2)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(164, 125, 171, 0.3)';
                        e.target.style.boxShadow = 'none';
                      }}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-night/80 font-medium mb-2 text-sm">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/80 border rounded-lg px-4 py-3 text-night placeholder-burnt-umber/40 focus:outline-none focus:ring-2 transition-all duration-300 text-sm"
                      style={{
                        borderColor: 'rgba(164, 125, 171, 0.3)'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#A47DAB';
                        e.target.style.boxShadow = '0 0 0 2px rgba(164, 125, 171, 0.2)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(164, 125, 171, 0.3)';
                        e.target.style.boxShadow = 'none';
                      }}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-night/80 font-medium mb-2 text-sm">
                    Project Type
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-white/80 border rounded-lg px-4 py-3 text-night focus:outline-none focus:ring-2 transition-all duration-300 text-sm"
                    style={{
                      borderColor: 'rgba(164, 125, 171, 0.3)'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#A47DAB';
                      e.target.style.boxShadow = '0 0 0 2px rgba(164, 125, 171, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(164, 125, 171, 0.3)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value="General Inquiry" className="bg-white text-night">General Inquiry</option>
                    <option value="Web Development" className="bg-white text-night">Web Development</option>
                    <option value="UI/UX Design" className="bg-white text-night">UI/UX Design</option>
                    <option value="Operations Consulting" className="bg-white text-night">Operations Consulting</option>
                    <option value="Executive Support" className="bg-white text-night">Executive Support</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-night/80 font-medium mb-2 text-sm">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full bg-white/80 border rounded-lg px-4 py-3 text-night placeholder-burnt-umber/40 focus:outline-none focus:ring-2 transition-all duration-300 resize-none text-sm leading-relaxed"
                    style={{
                      borderColor: 'rgba(164, 125, 171, 0.3)'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#A47DAB';
                      e.target.style.boxShadow = '0 0 0 2px rgba(164, 125, 171, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(164, 125, 171, 0.3)';
                      e.target.style.boxShadow = 'none';
                    }}
                    placeholder="Tell me about your project vision, goals, timeline, and any specific requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full text-white py-4 px-6 rounded-lg font-semibold text-sm transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: '#A47DAB'
                  }}
                  onMouseEnter={(e) => {
                    if (!e.target.disabled) {
                      e.target.style.backgroundColor = '#8e6b95';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!e.target.disabled) {
                      e.target.style.backgroundColor = '#A47DAB';
                    }
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-700 text-center">
                    <svg className="w-6 h-6 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="font-semibold text-sm">Message sent successfully!</p>
                    <p className="text-xs text-green-600 mt-1">I'll get back to you within 24 hours.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-center">
                    <svg className="w-6 h-6 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <p className="font-semibold text-sm">Failed to send message</p>
                    <p className="text-xs text-red-600 mt-1">Please try again or contact me directly.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-20 pt-8 border-t" style={{ borderColor: 'rgba(164, 125, 171, 0.2)' }}>
          <p className="text-burnt-umber/60 text-sm">
            © 2025 Christina. Crafted with passion and precision in Nairobi, Kenya.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;