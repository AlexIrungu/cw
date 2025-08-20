import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const skillsRef = useRef(null);

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

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    { 
      name: 'Python', 
      level: 95, 
      icon: '🐍',
      description: 'Backend development & data processing',
      color: 'electric-indigo'
    },
    { 
      name: 'JavaScript', 
      level: 90, 
      icon: '⚡',
      description: 'Frontend & full-stack development',
      color: 'amaranth-purple'
    },
    { 
      name: 'C# .Net', 
      level: 85, 
      icon: '🔷',
      description: 'Enterprise application development',
      color: 'burnt-umber'
    },
    { 
      name: 'Operations & Admin Excellence', 
      level: 95, 
      icon: '📊',
      description: 'Process optimization & management',
      color: 'rose-quartz'
    }
  ];
  
  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-ivory py-20 px-6 overflow-hidden"
      id="about"
    >
      {/* Dynamic Background Elements */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(164, 125, 171, 0.1) 0%, transparent 50%)`
        }}
      />
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full blur-2xl animate-pulse" style={{ backgroundColor: 'rgba(164, 125, 171, 0.1)' }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full blur-3xl animate-pulse delay-1000" style={{ backgroundColor: 'rgba(164, 125, 171, 0.1)' }}></div>
      <div className="absolute top-1/2 left-1/6 w-4 h-4 rotate-45 animate-bounce" style={{ backgroundColor: '#A47DAB' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-6 h-6 rounded-full animate-ping" style={{ backgroundColor: 'rgba(164, 125, 171, 0.6)' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 rounded-full" style={{ backgroundColor: '#A47DAB' }}></div>
              <span className="text-sm font-bold tracking-[0.3em] uppercase" style={{ color: '#A47DAB' }}>
                About Me
              </span>
              <div className="w-12 h-0.5 rounded-full" style={{ backgroundColor: '#A47DAB' }}></div>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-night mb-8 leading-tight">
              Crafting Digital
              <br />
              <span style={{ color: '#A47DAB' }}>
                Excellence
              </span>
            </h2>
            <p className="text-xl text-night/60 max-w-2xl mx-auto leading-relaxed">
              Where technology meets creativity, and innovation drives results
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Enhanced Image Section */}
          <div className={`transform transition-all duration-1200 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative group">
              {/* Animated Background Ring */}
              <div className="absolute inset-0 rounded-full animate-spin-slow blur-xl scale-110" style={{ backgroundColor: 'rgba(164, 125, 171, 0.2)' }}></div>
              
              {/* Main Image Container */}
              <div className="relative">
                <div className="w-96 h-96 mx-auto rounded-full overflow-hidden border-8 border-white/80 shadow-2xl backdrop-blur-sm transform group-hover:scale-105 transition-all duration-700 group-hover:rotate-2">
                  <img 
                    ref={imageRef}
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tYW58ZW58MHx8MHx8fDA%3D"
                    alt="Christina - Developer, Designer, Operations Expert"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to top, rgba(164, 125, 171, 0.2), transparent, transparent)' }}></div>
                </div>

                {/* Floating Role Badges */}
                <div className="absolute -top-8 right-12 animate-float">
                  <div className="bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-white/40 transform hover:scale-110 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">💻</span>
                      <span className="text-night text-sm font-bold">Developer</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-1/3 -left-12 animate-float delay-500">
                  <div className="bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-white/40 transform hover:scale-110 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🎨</span>
                      <span className="text-night text-sm font-bold">Designer</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-8 right-20 animate-float delay-1000">
                  <div className="bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-white/40 transform hover:scale-110 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">📈</span>
                      <span className="text-night text-sm font-bold">Strategist</span>
                    </div>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="absolute bottom-8 left-8">
                  <div className="bg-green-500 w-4 h-4 rounded-full animate-pulse shadow-lg"></div>
                  <div className="absolute -top-1 -left-1 w-6 h-6 border-2 border-green-400 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div ref={textRef} className={`space-y-10 transform transition-all duration-1200 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            
            {/* Introduction */}
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full rounded-full" style={{ backgroundColor: '#A47DAB' }}></div>
                <p className="text-xl leading-relaxed text-night/80 pl-8">
                  Hi, I'm <span className="font-bold text-2xl" style={{ color: '#A47DAB' }}>Christina</span> — a passionate 
                  <span className="font-semibold" style={{ color: '#A47DAB' }}> full-stack developer</span> and 
                  <span className="font-semibold text-burnt-umber"> creative designer</span> who transforms 
                  complex challenges into elegant digital solutions.
                </p>
              </div>
              
              <p className="text-lg leading-relaxed text-night/70 pl-8">
                With expertise spanning from <span className="font-semibold" style={{ color: '#A47DAB' }}>backend architecture</span> to 
                <span className="font-semibold text-rose-quartz"> user experience design</span>, I bring a unique perspective 
                that bridges technical excellence with operational efficiency.
              </p>
            </div>

            {/* Enhanced Skills Section */}
            <div ref={skillsRef} className="space-y-8 mt-16">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl">⚡</span>
                <h3 className="text-3xl font-bold text-night">Core Expertise</h3>
              </div>
              
              <div className="grid gap-6">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className={`group relative p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer ${
                      activeSkill === index ? 'scale-105 shadow-2xl' : ''
                    }`}
                    onMouseEnter={() => setActiveSkill(index)}
                    onMouseLeave={() => setActiveSkill(null)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className={`text-3xl transform transition-all duration-300 ${
                          activeSkill === index ? 'scale-125 rotate-12' : ''
                        }`}>
                          {skill.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-night text-lg">{skill.name}</h4>
                          <p className="text-night/60 text-sm">{skill.description}</p>
                        </div>
                      </div>
                      <div className={`text-2xl font-bold text-${skill.color}`}>
                        {skill.level}%
                      </div>
                    </div>
                    
                    {/* Animated Progress Bar */}
                    <div className="relative w-full bg-night/10 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full rounded-full transform transition-all duration-1500 ${
                          isVisible ? 'translate-x-0' : '-translate-x-full'
                        } ${activeSkill === index ? 'shadow-lg' : ''}`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(index + 1) * 200}ms`,
                          backgroundColor: '#A47DAB',
                          boxShadow: activeSkill === index ? '0 0 20px rgba(164, 125, 171, 0.3)' : 'none'
                        }}
                      />
                      {/* Shimmer effect */}
                      <div className={`absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 transition-transform duration-1000 ${
                        activeSkill === index ? 'translate-x-full' : '-translate-x-full'
                      }`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
           
            {/* Enhanced CTA Section */}
            <div className="pt-12 space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative bg-night text-ivory px-8 py-4 rounded-2xl font-bold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden">
                  <span className="relative z-10 flex items-center gap-3">
                    Let's Work Together
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  {/* Animated background */}
                  <div className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ backgroundColor: 'rgba(164, 125, 171, 0.2)' }}></div>
                </button>
                
                <button className="group px-8 py-4 font-bold text-night border-2 border-night/20 rounded-2xl hover:border-night/40 hover:bg-night/5 transition-all duration-300" 
                        style={{ 
                          '--hover-border-color': '#A47DAB', 
                          '--hover-text-color': '#A47DAB',
                          '--hover-bg-color': 'rgba(164, 125, 171, 0.05)'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.borderColor = '#A47DAB';
                          e.target.style.color = '#A47DAB';
                          e.target.style.backgroundColor = 'rgba(164, 125, 171, 0.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.borderColor = 'rgba(8, 15, 15, 0.2)';
                          e.target.style.color = '#080F0F';
                          e.target.style.backgroundColor = 'transparent';
                        }}>
                  <span className="flex items-center gap-3">
                    Download CV
                    <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                </button>
              </div>
              
              <p className="text-night/60 text-sm">
                Available for freelance projects and full-time opportunities
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default About;