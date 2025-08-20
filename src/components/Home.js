import React, { useEffect, useRef, useState } from 'react';

const Home = () => {
  const heroRef = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeService, setActiveService] = useState(0);

  // Track mouse for subtle parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Load animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate services
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const coreSkills = [
    { name: 'Full-Stack Development', icon: '💻', level: 92 },
    { name: 'UI/UX Design', icon: '🎨', level: 88 },
    { name: 'Operations Management', icon: '⚙️', level: 95 },
    { name: 'Data Analytics', icon: '📊', level: 85 }
  ];

  const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Full-Stack",
      image: "https://plus.unsplash.com/premium_photo-1664201890375-f8fa405cdb7d?w=600&auto=format&fit=crop&q=80",
      tech: ["React", "Python", "PostgreSQL"]
    },
    {
      id: 2,
      title: "Operations Dashboard",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
      tech: ["JavaScript", "C# .Net", "Azure"]
    },
    {
      id: 3,
      title: "Creative Design System",
      category: "Design",
      image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=600&auto=format&fit=crop&q=80",
      tech: ["Figma", "CSS", "Design Tokens"]
    }
  ];

  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Full-stack solutions with modern technologies",
      features: ["React Development", "API Integration", "Database Design"]
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Intuitive and visually appealing experiences",
      features: ["User Research", "Prototyping", "Design Systems"]
    },
    {
      icon: "⚙️",
      title: "Operations & Automation",
      description: "Streamlined processes for efficiency",
      features: ["Process Automation", "Workflow Optimization", "System Integration"]
    },
    {
      icon: "👔",
      title: "Executive Assistant",
      description: "Top-notch organizational support",
      features: ["Project Management", "Calendar Management", "Administrative Support"]
    }
  ];

  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute top-20 left-10 w-20 h-20 border-2 border-opacity-20 rotate-45 animate-pulse"
        style={{
          borderColor: '#A47DAB',
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px) rotate(45deg)`
        }}
      />
      <div 
        className="absolute top-40 right-20 w-16 h-16 rounded-full animate-bounce"
        style={{
          backgroundColor: 'rgba(164, 125, 171, 0.1)',
          transform: `translate(${mousePosition.x * -0.15}px, ${mousePosition.y * -0.15}px)`,
          animationDelay: '1s'
        }}
      />
      <div 
        className="absolute bottom-40 left-20 w-12 h-12 transform rotate-12"
        style={{
          backgroundColor: 'rgba(164, 125, 171, 0.2)',
          transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px) rotate(12deg)`
        }}
      />
      
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full animate-pulse"
          style={{
            backgroundColor: 'rgba(164, 125, 171, 0.3)',
            top: `${20 + (i * 15)}%`,
            right: `${10 + (i * 8)}%`,
            animationDelay: `${i * 0.5}s`,
            transform: `translate(${mousePosition.x * (0.1 + i * 0.02)}px, ${mousePosition.y * (0.1 + i * 0.02)}px)`
          }}
        />
      ))}
    </div>
  );

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen bg-ivory overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 blur-3xl" style={{backgroundColor: 'rgba(164, 125, 171, 0.05)'}} />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 blur-3xl" style={{backgroundColor: 'rgba(164, 125, 171, 0.03)'}} />
        </div>

        <FloatingElements />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-screen flex items-center">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
              
              {/* Left Column - Content */}
              <div className={`space-y-8 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                
                {/* Status Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border-2 shadow-sm hover:shadow-md transition-all duration-300" style={{borderColor: 'rgba(164, 125, 171, 0.2)'}}>
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse" />
                  <span className="font-medium text-sm" style={{color: '#A47DAB'}}>Available for new projects</span>
                </div>
                
                {/* Main Heading */}
                <div className="space-y-4">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-night leading-[0.9] tracking-tight">
                    <span className="block" style={{color: '#A47DAB'}}>
                      Creative
                    </span>
                    <span className="block text-night/90 hover:text-night transition-colors duration-300 cursor-default">
                      Visionary
                    </span>
                    <span className="block" style={{color: '#A47DAB'}}>
                      Designer
                    </span>
                  </h1>
                  
                  <h2 className="text-xl sm:text-2xl lg:text-3xl text-night/70 font-light max-w-2xl">
                    Crafting <span className="italic font-medium" style={{color: '#A47DAB'}}>emotional experiences</span> through innovative design
                  </h2>
                </div>

                {/* Description */}
                <p className="text-lg text-night/60 leading-relaxed max-w-xl">
                  Where every pixel tells a story and every interaction sparks connection. 
                  I transform ideas into visual poetry that resonates and drives meaningful engagement.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    onClick={() => window.location.href = '#contact'}
                    className="group relative px-8 py-4 text-white rounded-2xl font-bold overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
                    style={{backgroundColor: '#A47DAB'}}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{backgroundColor: '#000'}} />
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Let's Work Together
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                  
                  <button 
                    onClick={() => window.location.href = '#works'}
                    className="group px-8 py-4 border-2 text-night rounded-2xl font-bold transition-all duration-300 transform hover:scale-105"
                    style={{
                      borderColor: '#A47DAB',
                      color: '#A47DAB'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'rgba(164, 125, 171, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                    }}
                  >
                    <span className="flex items-center justify-center gap-3">
                      View My Work
                      <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Column - Enhanced Image Section */}
              <div className={`relative transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                
                <div className="relative group">
                  <div className="absolute -inset-4 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-700 blur-xl" style={{backgroundColor: 'rgba(164, 125, 171, 0.15)'}} />
                  <div className="absolute -inset-2 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-700" style={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}} />
                  
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700 border border-white/50">
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80"
                      alt="Christine Wavua - Creative Designer"
                      className="w-full h-[500px] lg:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0" style={{background: `linear-gradient(to top, rgba(164, 125, 171, 0.2), transparent, rgba(164, 125, 171, 0.05))`}} />
                  </div>
                  
                  {/* Floating Badges */}
                  <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50 transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <div>
                        <div className="text-night font-semibold text-sm">Available</div>
                        <div className="text-night/60 text-xs">for projects</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-4 -right-4 text-white rounded-2xl p-3 shadow-lg transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500" style={{backgroundColor: '#A47DAB'}}>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1">
                        <span className="text-lg font-bold">5</span>
                        <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <div className="text-xs opacity-90">Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 rounded-full flex justify-center bg-white/20 backdrop-blur-sm" style={{borderColor: 'rgba(164, 125, 171, 0.4)'}}>
              <div className="w-1 h-3 rounded-full mt-2 animate-pulse" style={{backgroundColor: '#A47DAB'}} />
            </div>
            <span className="text-xs text-night/60 font-medium">Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-ivory relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl" style={{backgroundColor: '#A47DAB'}}></div>
          <div className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full blur-2xl" style={{backgroundColor: '#A47DAB'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 rounded-full" style={{backgroundColor: '#A47DAB'}}></div>
              <span className="text-sm font-bold tracking-[0.3em] uppercase" style={{color: '#A47DAB'}}>About Me</span>
              <div className="w-12 h-0.5 rounded-full" style={{backgroundColor: '#A47DAB'}}></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-night mb-6">
              Crafting Digital 
              <span style={{color: '#A47DAB'}}> Excellence</span>
            </h2>
            <p className="text-xl text-night/70 max-w-4xl mx-auto leading-relaxed mb-8">
              Hi, I'm <span className="font-bold" style={{color: '#A47DAB'}}>Christina</span> — a passionate full-stack developer, creative designer, and operations strategist who transforms complex challenges into elegant digital solutions. With 5+ years of experience spanning technology and business operations, I bridge the gap between technical innovation and practical results.
            </p>
            
            {/* Key Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="font-bold text-night mb-1">Mission-Driven</h3>
                <p className="text-sm text-night/70">Creating solutions that make a real difference in people's lives and businesses</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                <div className="text-2xl mb-2">🌟</div>
                <h3 className="font-bold text-night mb-1">Innovation Focus</h3>
                <p className="text-sm text-night/70">Constantly learning and applying cutting-edge technologies and methodologies</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                <div className="text-2xl mb-2">🤝</div>
                <h3 className="font-bold text-night mb-1">Collaborative</h3>
                <p className="text-sm text-night/70">Building strong partnerships with clients and teams for exceptional outcomes</p>
              </div>
            </div>
          </div>

          {/* Core Skills Preview */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-night text-center mb-8">Core Expertise</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {coreSkills.map((skill, index) => (
                <div key={skill.name} className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/40 hover:bg-white/80 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                    <span className="font-semibold text-night text-sm">{skill.name}</span>
                  </div>
                  <div className="w-full bg-night/10 rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-1000 transform"
                      style={{ 
                        width: `${skill.level}%`,
                        backgroundColor: '#A47DAB'
                      }}
                    />
                  </div>
                  <div className="text-xs font-medium mt-1" style={{color: '#A47DAB'}}>{skill.level}%</div>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Philosophy */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/40 mb-16">
            <div className="text-center">
              <div className="text-3xl mb-4">💭</div>
              <h3 className="text-2xl font-bold text-night mb-4">My Philosophy</h3>
              <blockquote className="text-lg text-night/80 italic max-w-3xl mx-auto leading-relaxed">
                "Technology should serve humanity, not the other way around. I believe in creating digital solutions that are not only technically excellent but also intuitive, accessible, and meaningful. Every line of code, every design element, and every process optimization should contribute to a better user experience and business outcome."
              </blockquote>
              <p className="font-semibold mt-4" style={{color: '#A47DAB'}}>— Christina</p>
            </div>
          </div>

          {/* Quick Bio Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-night text-center mb-8">My Journey</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/40 text-center group hover:bg-white/80 transition-all duration-300">
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">🎓</div>
                <h4 className="font-bold text-night mb-2">Education & Foundation</h4>
                <p className="text-sm text-night/70">Built strong foundations in computer science, business operations, and design thinking</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/40 text-center group hover:bg-white/80 transition-all duration-300">
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">🚀</div>
                <h4 className="font-bold text-night mb-2">Professional Growth</h4>
                <p className="text-sm text-night/70">Developed expertise across full-stack development, operations management, and strategic planning</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/40 text-center group hover:bg-white/80 transition-all duration-300">
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">🌟</div>
                <h4 className="font-bold text-night mb-2">Current Focus</h4>
                <p className="text-sm text-night/70">Leading innovative projects that combine technology, design, and business strategy for maximum impact</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <button 
              onClick={() => window.location.href = '#about'}
              className="group inline-flex items-center px-8 py-4 bg-night text-ivory rounded-2xl font-bold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl mr-4"
            >
              <span className="relative z-10 flex items-center gap-3">
                Discover My Full Story
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            <button 
              onClick={() => window.location.href = '#contact'}
              className="group px-8 py-4 border-2 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105"
              style={{
                borderColor: '#A47DAB',
                color: '#A47DAB'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#A47DAB';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#A47DAB';
              }}
            >
              <span className="flex items-center gap-3">
                Let's Connect
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-4.126-.98L3 21l1.98-5.874A8.955 8.955 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Works Preview */}
      <section className="py-20 bg-rose-quartz/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 rounded-full" style={{backgroundColor: '#A47DAB'}}></div>
              <span className="text-sm font-bold tracking-[0.3em] uppercase" style={{color: '#A47DAB'}}>Portfolio</span>
              <div className="w-12 h-0.5 rounded-full" style={{backgroundColor: '#A47DAB'}}></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-night mb-6">
              Featured 
              <span style={{color: '#A47DAB'}}> Projects</span>
            </h2>
            <p className="text-xl text-night/70 max-w-3xl mx-auto">
              Discover my latest work spanning development, design, and digital innovation
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="group relative h-80 cursor-pointer transform transition-all duration-500 hover:scale-105">
                <div className="relative h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl bg-night">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0" style={{background: `linear-gradient(to top, rgba(164, 125, 171, 0.8), rgba(0, 0, 0, 0.3))`}}></div>
                  
                  {/* Project Info */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="mb-2">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-white/10 text-white text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full hover:bg-white/30">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Code
                      </button>
                      <button className="flex items-center gap-2 px-3 py-1 text-white text-sm rounded-full hover:opacity-80" style={{backgroundColor: '#A47DAB'}}>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Live
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button 
              onClick={() => window.location.href = '#works'}
              className="group inline-flex items-center px-8 py-4 text-white rounded-2xl font-bold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              style={{backgroundColor: '#A47DAB'}}
            >
              <span className="flex items-center gap-3">
                View All Projects
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-ivory relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 rounded-full" style={{backgroundColor: '#A47DAB'}}></div>
              <span className="text-sm font-bold tracking-[0.3em] uppercase" style={{color: '#A47DAB'}}>Services</span>
              <div className="w-12 h-0.5 rounded-full" style={{backgroundColor: '#A47DAB'}}></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-night mb-6">
              What I 
              <span style={{color: '#A47DAB'}}> Offer</span>
            </h2>
            <p className="text-xl text-night/70 max-w-3xl mx-auto">
              Comprehensive solutions across development, design, and operations
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`group relative p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 hover:bg-white/80 transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                  activeService === index ? 'scale-105 shadow-2xl' : 'shadow-lg'
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className={`mb-4 transform transition-all duration-300 ${
                  activeService === index ? 'scale-125' : 'scale-100'
                }`}>
                  <span className="text-3xl">{service.icon}</span>
                </div>
                
                <h3 className={`text-xl font-bold text-night mb-3 transition-colors duration-300 ${
                  activeService === index ? 'group-hover:text-night' : 'group-hover:text-night'
                }`} style={activeService === index ? {color: '#A47DAB'} : {}}>
                  {service.title}
                </h3>
                
                <p className="text-night/70 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs text-night/60">
                      <div className="w-1 h-1 rounded-full mr-2" style={{backgroundColor: '#A47DAB'}}></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{backgroundColor: 'rgba(164, 125, 171, 0.05)'}}></div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button 
              onClick={() => window.location.href = '#services'}
              className="group inline-flex items-center px-8 py-4 text-white rounded-2xl font-bold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              style={{backgroundColor: '#A47DAB'}}
            >
              <span className="flex items-center gap-3">
                Explore All Services
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-rose-quartz/5 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-night mb-8">
            Ready to Create Something 
            <span style={{color: '#A47DAB'}}> Amazing</span>?
          </h2>
          <p className="text-xl text-night/70 mb-12 max-w-2xl mx-auto">
            Let's collaborate on your next project and bring your vision to life with cutting-edge technology and creative design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '#contact'}
              className="group px-8 py-4 text-white rounded-2xl font-bold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              style={{backgroundColor: '#A47DAB'}}
            >
              <span className="flex items-center justify-center gap-3">
                Start Your Project
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            
            <button 
              onClick={() => window.location.href = '#works'}
              className="group px-8 py-4 border-2 text-night rounded-2xl font-bold transition-all duration-300 transform hover:scale-105"
              style={{
                borderColor: '#A47DAB',
                color: '#A47DAB'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(164, 125, 171, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              <span className="flex items-center justify-center gap-3">
                View Portfolio
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;