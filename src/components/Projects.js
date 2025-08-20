import React, { useEffect, useRef, useState } from 'react';

const Works = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const sectionRef = useRef(null);

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

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Full-Stack Development",
      description: "A comprehensive e-commerce solution built with React and Python backend, featuring real-time inventory management and seamless payment integration.",
      technologies: ["React", "Python", "PostgreSQL", "Stripe API"],
      image: "https://plus.unsplash.com/premium_photo-1664201890375-f8fa405cdb7d?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fHww",
      github: "https://github.com/yourusername/ecommerce-platform",
      live: "https://your-ecommerce-demo.com"
    },
    {
      id: 2,
      title: "Operations Dashboard",
      category: "UI/UX Design & Development",
      description: "An intuitive operations management dashboard that streamlined workflow processes for a 500+ employee organization, reducing task completion time by 40%.",
      technologies: ["JavaScript", "C# .Net", "Chart.js", "Azure"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGFzaGJvYXJkfGVufDB8fDB8fHww",
      github: "https://github.com/yourusername/operations-dashboard",
      live: "https://your-dashboard-demo.com"
    },
    {
      id: 3,
      title: "Executive Assistant Portal",
      category: "Administrative Systems",
      description: "A comprehensive portal for executive scheduling, document management, and team coordination, enhancing productivity and communication efficiency.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3MlMjBwb3J0YWx8ZW58MHx8MHx8fDA%3D",
      github: "https://github.com/yourusername/executive-portal",
      live: "https://your-portal-demo.com"
    },
    {
      id: 4,
      title: "Creative Design System",
      category: "Design & Branding",
      description: "A complete design system and brand identity for a tech startup, including logo design, style guides, and marketing materials.",
      technologies: ["Figma", "Adobe Creative Suite", "CSS", "Design Tokens"],
      image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVzaWduJTIwc3lzdGVtfGVufDB8fDB8fHww",
      github: "https://github.com/yourusername/design-system",
      live: "https://your-design-system.com"
    }
  ];

  const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isActive = activeProject === index;

    const handleGitHubClick = (e) => {
      e.stopPropagation();
      window.open(project.github, '_blank');
    };

    const handleLiveClick = (e) => {
      e.stopPropagation();
      window.open(project.live, '_blank');
    };

    return (
      <div 
        className={`group relative h-[500px] cursor-pointer transform transition-all duration-700 ease-out ${
          isActive ? 'scale-105 z-10' : 'scale-100 hover:scale-[1.02]'
        } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
        style={{ 
          transitionDelay: `${index * 150}ms`
        }}
        onClick={() => setActiveProject(isActive ? null : index)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main Card Container */}
        <div className="relative h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-night">
          
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img 
              src={project.image} 
              alt={project.title}
              className={`w-full h-full object-cover transition-all duration-700 ${
                isHovered ? 'scale-110' : 'scale-100'
              }`}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0" style={{
              background: `linear-gradient(to top, rgba(164, 125, 171, 0.8), rgba(164, 125, 171, 0.6), rgba(0, 0, 0, 0.3), transparent)`
            }}></div>
            {/* Additional overlay for better text readability */}
            <div className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${
              isHovered ? 'opacity-40' : 'opacity-20'
            }`}></div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-6 left-6 z-20">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
              <span className="text-white text-sm font-semibold tracking-wide">
                {project.category}
              </span>
            </div>
          </div>

          {/* Project Number */}
          <div className="absolute top-6 right-6 z-20">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: '#A47DAB' }}>
              {String(project.id).padStart(2, '0')}
            </div>
          </div>

          {/* Content Container */}
          <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
            
            {/* Main Content */}
            <div className={`transform transition-all duration-500 ${
              isHovered ? 'translate-y-0' : 'translate-y-4'
            }`}>
              
              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                {project.title}
              </h3>

              {/* Description - Shows on hover */}
              <div className={`transition-all duration-500 overflow-hidden ${
                isHovered || isActive ? 'max-h-32 opacity-100 mb-6' : 'max-h-0 opacity-0 mb-0'
              }`}>
                <p className="text-white/90 text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className={`flex flex-wrap gap-2 mb-6 transition-all duration-500 ${
                isHovered || isActive ? 'opacity-100' : 'opacity-0'
              }`}>
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/20">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className={`flex gap-3 transition-all duration-500 ${
                isHovered || isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                <button 
                  onClick={handleGitHubClick}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  Code
                </button>
                
                <button 
                  onClick={handleLiveClick}
                  className="flex items-center gap-2 px-6 py-2 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                  style={{ backgroundColor: '#A47DAB' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(164, 125, 171, 0.8)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#A47DAB'}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </button>
              </div>
            </div>

            {/* Accent Line */}
            <div className={`absolute bottom-0 left-0 h-1 transition-all duration-500 ${
              isHovered || isActive ? 'w-full' : 'w-0'
            }`} style={{ backgroundColor: '#A47DAB' }}></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-ivory py-20 px-6 relative overflow-hidden"
      id="works"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: '#A47DAB' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: '#A47DAB' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase mb-4 block" style={{ color: '#A47DAB' }}>
              Portfolio
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-night mb-6 leading-tight">
              Featured
              <span className="block" style={{ color: '#A47DAB' }}>
                Projects
              </span>
            </h2>
            <div className="w-24 h-1 mx-auto mb-8 rounded-full" style={{ backgroundColor: '#A47DAB' }}></div>
            <p className="text-xl text-night/70 max-w-3xl mx-auto leading-relaxed">
              Discover my latest work spanning development, design, and digital innovation. 
              Each project showcases unique solutions and cutting-edge technologies.
            </p>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className={`transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-3xl md:text-4xl font-bold text-night mb-6">
              Ready to create something 
              <span style={{ color: '#A47DAB' }}> amazing</span>?
            </h3>
            <p className="text-night/70 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next project and bring your vision to life with cutting-edge technology and creative design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative text-white px-8 py-4 font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl" style={{ backgroundColor: '#A47DAB' }}>
                <span className="relative z-10 flex items-center gap-3">
                  Start Your Project
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              
              <button 
                className="group px-8 py-4 font-semibold text-night border-2 border-night/20 rounded-full transition-all duration-300"
                style={{ borderColor: '#A47DAB', color: '#A47DAB' }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#A47DAB';
                  e.target.style.color = '#A47DAB';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'rgba(164, 125, 171, 0.5)';
                  e.target.style.color = '#A47DAB';
                }}
              >
                <span className="flex items-center gap-3">
                  View All Projects
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 rounded-full animate-pulse" style={{ backgroundColor: 'rgba(164, 125, 171, 0.3)' }}></div>
      <div className="absolute top-1/3 right-16 w-6 h-6 rounded-full animate-bounce" style={{ backgroundColor: 'rgba(164, 125, 171, 0.2)' }}></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 rounded-full animate-ping" style={{ backgroundColor: 'rgba(164, 125, 171, 0.4)' }}></div>
      <div className="absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full" style={{ backgroundColor: 'rgba(164, 125, 171, 0.5)' }}></div>
    </section>
  );
};

export default Works;