import React, { useEffect, useRef, useState } from 'react';
import { FaCode, FaPalette, FaCog, FaUserTie, FaArrowRight, FaExternalLinkAlt, FaGithub, FaStar, FaUsers, FaProjectDiagram, FaHandshake } from 'react-icons/fa';

// About Section Component
const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const skills = [
    { name: 'Python Development', level: 95, icon: FaCode, color: 'text-electric-indigo' },
    { name: 'JavaScript & React', level: 90, icon: FaCode, color: 'text-amaranth-purple' },
    { name: 'UI/UX Design', level: 88, icon: FaPalette, color: 'text-burnt-umber' },
    { name: 'Operations Management', level: 95, icon: FaCog, color: 'text-rose-quartz' }
  ];

  const expertise = [
    {
      icon: FaCode,
      title: 'Full-Stack Developer',
      description: 'Expert in Python, JavaScript, React, and modern web technologies',
      color: 'electric-indigo'
    },
    {
      icon: FaPalette,
      title: 'Creative Designer',
      description: 'Crafting beautiful, user-centered digital experiences',
      color: 'amaranth-purple'
    },
    {
      icon: FaCog,
      title: 'Operations Expert',
      description: 'Streamlining workflows and optimizing business processes',
      color: 'burnt-umber'
    },
    {
      icon: FaUserTie,
      title: 'Executive Assistant',
      description: 'Strategic support with top-tier organizational skills',
      color: 'rose-quartz'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-white via-rose-quartz/5 to-electric-indigo/5"
      id="about"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="text-electric-indigo text-sm font-semibold tracking-widest uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-night mb-6">
            Better Design, <span className="text-amaranth-purple">Better Experience</span>
          </h2>
          <div className="w-20 h-1 bg-electric-indigo mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Image Section */}
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative">
              
              {/* Background Effects */}
              <div className="absolute -inset-4 bg-gradient-to-br from-electric-indigo/10 via-amaranth-purple/5 to-rose-quartz/10 rounded-3xl blur-xl"></div>
              
              {/* Main Image */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-white/50">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80"
                  alt="Christine Wavua - Multi-talented Professional"
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/20 via-transparent to-electric-indigo/5"></div>
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg border border-electric-indigo/20">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-night text-sm font-semibold">Available</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-electric-indigo to-amaranth-purple text-white rounded-2xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-xl font-bold">5+ Years</div>
                  <div className="text-xs opacity-90">Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-night/80">
                I'm a <span className="font-semibold text-electric-indigo">versatile professional</span> who brings together technical expertise, creative vision, and operational excellence. My unique blend of skills in development, design, and business operations allows me to deliver comprehensive solutions.
              </p>
              
              <p className="text-lg leading-relaxed text-night/70">
                From building robust web applications to designing intuitive user experiences and optimizing business workflows, I ensure <span className="font-semibold text-amaranth-purple">efficiency, innovation, and results</span> in every project.
              </p>
            </div>

            {/* Skills Progress */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-night">Core Competencies</h3>
              
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <skill.icon className={`${skill.color} text-lg`} />
                      <span className="font-medium text-night">{skill.name}</span>
                    </div>
                    <span className="text-electric-indigo font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 bg-gradient-to-r from-electric-indigo to-amaranth-purple rounded-full transition-all duration-1500 ease-out"
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${(index + 1) * 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <button className="group bg-gradient-to-r from-electric-indigo to-amaranth-purple text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center space-x-2">
                <span>Let's Work Together</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, index) => (
            <div 
              key={index}
              className={`bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl hover:scale-105 transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100 + 600}ms` }}
            >
              <div className={`w-12 h-12 bg-${item.color}/10 rounded-xl flex items-center justify-center mb-4`}>
                <item.icon className={`text-xl text-${item.color}`} />
              </div>
              <h3 className="text-lg font-bold text-night mb-2">{item.title}</h3>
              <p className="text-night/70 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Works Section Component
const Works = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
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
      category: "development",
      description: "A comprehensive e-commerce solution with real-time inventory management and seamless payment integration.",
      technologies: ["React", "Python", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop&q=80",
      color: "electric-indigo",
      featured: true
    },
    {
      id: 2,
      title: "Operations Dashboard",
      category: "design",
      description: "Intuitive dashboard that streamlined workflows for 500+ employees, reducing task completion time by 40%.",
      technologies: ["JavaScript", "C# .Net", "Chart.js", "Azure"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
      color: "amaranth-purple",
      featured: true
    },
    {
      id: 3,
      title: "Executive Portal",
      category: "operations",
      description: "Comprehensive portal for scheduling, document management, and team coordination.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80",
      color: "burnt-umber",
      featured: false
    },
    {
      id: 4,
      title: "Brand Design System",
      category: "design",
      description: "Complete design system and brand identity including style guides and marketing materials.",
      technologies: ["Figma", "Adobe Suite", "CSS", "Design Tokens"],
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&auto=format&fit=crop&q=80",
      color: "rose-quartz",
      featured: false
    },
    {
      id: 5,
      title: "Process Automation",
      category: "operations",
      description: "Automated workflow system that improved operational efficiency by 60%.",
      technologies: ["Python", "RPA", "API Integration", "Analytics"],
      image: "https://images.unsplash.com/photo-1518186233392-c232efbf2373?w=600&auto=format&fit=crop&q=80",
      color: "electric-indigo",
      featured: false
    },
    {
      id: 6,
      title: "Mobile App Interface",
      category: "development",
      description: "Cross-platform mobile application with intuitive design and seamless user experience.",
      technologies: ["React Native", "Firebase", "TypeScript", "REST API"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=80",
      color: "amaranth-purple",
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'development', label: 'Development' },
    { key: 'design', label: 'Design' },
    { key: 'operations', label: 'Operations' }
  ];

  const stats = [
    { number: "50+", label: "Projects", icon: FaProjectDiagram, color: "electric-indigo" },
    { number: "98%", label: "Satisfaction", icon: FaStar, color: "amaranth-purple" },
    { number: "30+", label: "Happy Clients", icon: FaUsers, color: "burnt-umber" },
    { number: "24/7", label: "Support", icon: FaHandshake, color: "rose-quartz" }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-rose-quartz/5 via-white to-electric-indigo/5"
      id="works"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="text-electric-indigo text-sm font-semibold tracking-widest uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-night mb-6">
            Featured <span className="text-amaranth-purple">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-electric-indigo mx-auto mb-6"></div>
          <p className="text-lg text-night/70 max-w-2xl mx-auto">
            A showcase of my diverse expertise across development, design, and operations management.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-electric-indigo text-white shadow-lg'
                  : 'bg-white/60 text-night hover:bg-white/80 border border-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl border border-white/50 transition-all duration-500 transform hover:scale-[1.02] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100 + 400}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-night/20 group-hover:bg-night/10 transition-colors duration-300"></div>
                
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-electric-indigo text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-electric-indigo/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-4">
                  <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors duration-200">
                    <FaExternalLinkAlt className="text-white" />
                  </button>
                  <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors duration-200">
                    <FaGithub className="text-white" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-night mb-2 group-hover:text-electric-indigo transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-night/70 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-night text-xs rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-night text-xs rounded-lg">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <button className="w-full bg-gradient-to-r from-electric-indigo to-amaranth-purple text-white py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

      

        {/* CTA Section */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-2xl font-bold text-night mb-4">
            Ready to bring your vision to life?
          </h3>
          <button className="group bg-gradient-to-r from-electric-indigo to-amaranth-purple text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <span className="flex items-center space-x-2">
              <span>Start Your Project</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

// Combined Export Component
const AboutAndWorks = () => {
  return (
    <>
      <About />
      <Works />
    </>
  );
};

export default AboutAndWorks;