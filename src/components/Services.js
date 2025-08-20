import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const cardsRef = useRef([]);

  const services = [
    {
      icon: "🎨",
      title: "UI / UX Design",
      description: "Skilled in UI/UX Design, I create intuitive and visually appealing digital experiences that prioritize user satisfaction and functionality.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: "✨",
      title: "Web Animations",
      description: "I specialize in Web Animations, bringing digital interfaces to life with smooth, engaging, and interactive elements that enhance user experience.",
      features: ["GSAP Animations", "CSS Transitions", "Micro-interactions", "Scroll Effects"]
    },
    {
      icon: "💻",
      title: "Web Apps",
      description: "I excel in developing Web Apps using various stacks, creating scalable and efficient applications that deliver seamless functionality and enhance user engagement across various platforms.",
      features: ["React Development", "Full-Stack Solutions", "API Integration", "Performance Optimization"]
    },
    {
      icon: "⚙️",
      title: "Operations & Automations",
      description: "I specialize in Operations and Automations for Small Businesses, streamlining processes and implementing efficient systems that enhance productivity and reduce manual workload.",
      features: ["Process Automation", "Workflow Optimization", "System Integration", "Efficiency Solutions"]
    },
    {
      icon: "📊",
      title: "Data Visualization",
      description: "I am skilled in Data Visualization, transforming complex data sets into clear, insightful visuals that enable informed decision-making and enhance understanding across various audiences.",
      features: ["Dashboard Design", "Interactive Charts", "Report Generation", "Data Analysis"]
    },
    {
      icon: "📈",
      title: "Digital Marketing",
      description: "I am proficient in Digital Marketing, leveraging various online strategies and tools to enhance brand visibility, engage target audiences, and drive conversions through data-driven campaigns.",
      features: ["SEO Optimization", "Content Strategy", "Social Media", "Analytics"]
    },
    {
      icon: "👔",
      title: "Executive Assistant",
      description: "I excel as an Executive Assistant, providing top-notch organizational and administrative support to ensure seamless operations, effective project management, and optimal time management for executives.",
      features: ["Project Management", "Calendar Management", "Communication", "Administrative Support"]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section entrance animation
      gsap.fromTo(sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Title animations
      gsap.fromTo(titleRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(subtitleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Cards stagger animation
      gsap.fromTo(cardsRef.current,
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCardHover = (index, isEntering) => {
    const card = cardsRef.current[index];
    if (!card) return;

    if (isEntering) {
      gsap.to(card, {
        y: -10,
        scale: 1.02,
        duration: 0.4,
        ease: "power2.out"
      });
      
      gsap.to(card.querySelector('.service-icon'), {
        scale: 1.2,
        rotation: 5,
        duration: 0.3,
        ease: "back.out(1.7)"
      });
    } else {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.out"
      });
      
      gsap.to(card.querySelector('.service-icon'), {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen py-20 px-6 bg-gradient-to-br from-ivory via-rose-quartz/10 to-ivory relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric-indigo rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amaranth-purple rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold text-night mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            What do I offer?
          </h2>
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl text-night/70 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Crimson Text, serif' }}
          >
            I am a skilled Developer, Designer, Operations Expert, and Executive Assistant, blending technical expertise, creative design, and strategic operations to deliver efficient solutions and seamless project management across various industries.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-rose-quartz/20 hover:border-electric-indigo/30 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl"
              onMouseEnter={() => handleCardHover(index, true)}
              onMouseLeave={() => handleCardHover(index, false)}
            >
              {/* Card background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-indigo/5 to-amaranth-purple/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="service-icon text-4xl mb-6 inline-block">
                  {service.icon}
                </div>

                {/* Service Icon Background */}
                <div className="absolute top-6 left-6 w-16 h-16 bg-gradient-to-br from-electric-indigo/10 to-amaranth-purple/10 rounded-2xl -z-10 group-hover:scale-110 transition-transform duration-300"></div>

                {/* Title */}
                <h3 
                  className="text-2xl font-semibold text-night mb-4 group-hover:text-electric-indigo transition-colors duration-300"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-night/70 mb-6 leading-relaxed"
                  style={{ fontFamily: 'Crimson Text, serif' }}
                >
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center text-sm text-night/60"
                    >
                      <div className="w-1.5 h-1.5 bg-electric-indigo rounded-full mr-3 group-hover:bg-amaranth-purple transition-colors duration-300"></div>
                      <span style={{ fontFamily: 'Libre Baskerville, serif' }}>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Read More Link */}
                <div className="mt-6 pt-4 border-t border-rose-quartz/20">
                  <span 
                    className="text-electric-indigo font-medium hover:text-amaranth-purple transition-colors duration-300 cursor-pointer text-sm"
                    style={{ fontFamily: 'Libre Baskerville, serif' }}
                  >
                    Read More →
                  </span>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-electric-indigo/0 via-electric-indigo/5 to-amaranth-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-block">
            <p 
              className="text-lg text-night/60 mb-6"
              style={{ fontFamily: 'Crimson Text, serif' }}
            >
              Ready to bring your vision to life?
            </p>
            <button 
              className="bg-gradient-to-r from-electric-indigo to-amaranth-purple text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              style={{ fontFamily: 'Libre Baskerville, serif' }}
            >
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;