import { motion } from 'framer-motion';
import { images } from '@/assets/images';
import { Download, Play, Calendar, BookOpen, FileText, Video, Headphones, Users, TrendingUp, Shield, AlertTriangle, Zap, Check } from 'lucide-react';
import { Link } from 'wouter';

const Resources = () => {
  const resourceCategories = [
    {
      category: "Whitepapers & Research",
      icon: FileText,
      description: "In-depth research and analysis on cybersecurity trends, threats, and best practices",
      resources: [
        {
          title: "The State of Zero Trust Security 2024",
          type: "Whitepaper",
          description: "Comprehensive analysis of Zero Trust adoption trends, implementation challenges, and ROI metrics across enterprise organizations.",
          downloadSize: "2.8 MB",
          pages: 32,
          publishDate: "March 2024",
          topics: ["Zero Trust", "Enterprise Security", "ROI Analysis"],
          featured: true
        },
        {
          title: "Cloud Security Transformation: Beyond Traditional Perimeters",
          type: "Research Report", 
          description: "Strategic guide for organizations transitioning from traditional security models to cloud-native protection frameworks.",
          downloadSize: "3.2 MB",
          pages: 28,
          publishDate: "February 2024",
          topics: ["Cloud Security", "CNAPP", "DevSecOps"]
        },
        {
          title: "Ransomware Defense Strategies: A Comprehensive Framework",
          type: "Technical Paper",
          description: "Multi-layered approach to ransomware prevention, detection, and recovery with real-world case studies and implementation guidance.",
          downloadSize: "4.1 MB", 
          pages: 45,
          publishDate: "January 2024",
          topics: ["Ransomware", "Incident Response", "Business Continuity"]
        },
        {
          title: "AI-Powered Cybersecurity: Transforming Threat Detection",
          type: "Industry Analysis",
          description: "Analysis of artificial intelligence applications in cybersecurity, including machine learning for threat detection and automated response.",
          downloadSize: "2.5 MB",
          pages: 24,
          publishDate: "December 2023",
          topics: ["AI Security", "Machine Learning", "Threat Detection"]
        }
      ]
    },
    {
      category: "Webinars & Videos",
      icon: Video,
      description: "Educational webinars and video content from cybersecurity experts and industry leaders",
      resources: [
        {
          title: "Building a Modern Security Operations Center",
          type: "Live Webinar",
          description: "Expert panel discussion on designing, implementing, and optimizing security operations centers for modern threat landscapes.",
          duration: "60 minutes",
          speakers: ["Dr. Sarah Chen, CISO", "Michael Rodriguez, SOC Director"],
          date: "April 15, 2024",
          topics: ["SOC Design", "Threat Hunting", "SOAR Integration"],
          featured: true
        },
        {
          title: "Zero Trust Implementation: Lessons from Fortune 500 Deployments",
          type: "Case Study Webinar",
          description: "Real-world insights from enterprise Zero Trust implementations, including challenges, solutions, and measured outcomes.",
          duration: "45 minutes",
          speakers: ["Jennifer Walsh, Security Architect", "David Kim, CISO"],
          date: "March 28, 2024",
          topics: ["Zero Trust", "Enterprise Architecture", "Case Studies"]
        },
        {
          title: "Cloud Security Best Practices for DevOps Teams",
          type: "Technical Deep Dive",
          description: "Hands-on session covering cloud security integration within CI/CD pipelines and DevOps workflows.",
          duration: "90 minutes",
          speakers: ["Alex Thompson, DevSecOps Lead"],
          date: "March 10, 2024",
          topics: ["DevSecOps", "Cloud Security", "CI/CD Security"]
        },
        {
          title: "Endpoint Security Evolution: From Antivirus to AI-Driven EDR",
          type: "Product Demonstration",
          description: "Technical demonstration of modern endpoint detection and response capabilities with live threat scenarios.",
          duration: "30 minutes",
          speakers: ["Lisa Park, Technical Product Manager"],
          date: "February 22, 2024",
          topics: ["Endpoint Security", "EDR", "AI Detection"]
        }
      ]
    },
    {
      category: "Documentation & Guides",
      icon: BookOpen,
      description: "Technical documentation, implementation guides, and best practice frameworks",
      resources: [
        {
          title: "TecAstra Platform Administration Guide",
          type: "Technical Documentation",
          description: "Comprehensive guide for platform administrators covering installation, configuration, and ongoing management of TecAstra solutions.",
          version: "v3.2",
          lastUpdated: "March 2024",
          sections: 15,
          topics: ["Platform Administration", "Configuration", "Troubleshooting"],
          featured: true
        },
        {
          title: "Zero Trust Architecture Implementation Playbook",
          type: "Implementation Guide",
          description: "Step-by-step playbook for implementing Zero Trust architecture with TecAstra solutions, including planning templates and checklists.",
          version: "v2.1",
          lastUpdated: "February 2024", 
          sections: 12,
          topics: ["Zero Trust", "Implementation", "Project Management"]
        },
        {
          title: "Incident Response Procedures Manual",
          type: "Operational Guide",
          description: "Detailed procedures for cybersecurity incident response, including escalation workflows and communication templates.",
          version: "v1.8",
          lastUpdated: "January 2024",
          sections: 8,
          topics: ["Incident Response", "Procedures", "Crisis Management"]
        },
        {
          title: "Compliance Framework Mapping Guide",
          type: "Compliance Reference",
          description: "Comprehensive mapping of TecAstra security controls to major compliance frameworks including SOC 2, PCI DSS, and HIPAA.",
          version: "v4.0",
          lastUpdated: "December 2023",
          sections: 20,
          topics: ["Compliance", "Frameworks", "Control Mapping"]
        }
      ]
    },
    {
      category: "Threat Intelligence",
      icon: Shield,
      description: "Latest threat intelligence reports, vulnerability advisories, and security alerts",
      resources: [
        {
          title: "Q1 2024 Threat Landscape Report",
          type: "Threat Intelligence",
          description: "Quarterly analysis of emerging threats, attack vectors, and cybercriminal tactics observed across TecAstra's global security network.",
          threats: 247,
          indicators: 1850,
          publishDate: "April 2024",
          topics: ["Threat Landscape", "Attack Trends", "IOCs"],
          featured: true
        },
        {
          title: "Ransomware-as-a-Service: Evolution and Counter-Strategies", 
          type: "Threat Analysis",
          description: "Deep dive analysis of ransomware-as-a-service operations, including actor profiling and defensive recommendations.",
          threats: 45,
          indicators: 320,
          publishDate: "March 2024",
          topics: ["Ransomware", "Threat Actors", "Defense Strategies"]
        },
        {
          title: "Supply Chain Attack Methodologies and Detection",
          type: "Research Brief",
          description: "Analysis of supply chain attack techniques with detection strategies and preventive controls.",
          threats: 28,
          indicators: 156,
          publishDate: "February 2024",
          topics: ["Supply Chain", "APT Groups", "Detection Methods"]
        },
        {
          title: "Critical Vulnerability Advisory: CVE-2024-0001 Series",
          type: "Security Advisory",
          description: "Emergency advisory covering critical vulnerabilities affecting enterprise infrastructure with immediate mitigation steps.",
          threats: 12,
          indicators: 89,
          publishDate: "January 2024",
          topics: ["Vulnerabilities", "Patches", "Mitigation"]
        }
      ]
    }
  ];

  const upcomingEvents = [
    {
      title: "TecAstra Security Summit 2024",
      type: "Conference",
      date: "June 15-16, 2024",
      location: "San Francisco, CA",
      description: "Annual cybersecurity conference featuring industry leaders, product innovations, and networking opportunities.",
      icon: Users
    },
    {
      title: "Zero Trust Architecture Masterclass",
      type: "Training Workshop",
      date: "May 8, 2024",
      location: "Virtual Event",
      description: "Intensive workshop on Zero Trust implementation with hands-on labs and expert guidance.",
      icon: Shield
    },
    {
      title: "Cloud Security Transformation Webinar",
      type: "Webinar",
      date: "April 25, 2024", 
      location: "Online",
      description: "Strategic guidance for organizations migrating to cloud-native security architectures.",
      icon: Play
    }
  ];

  const toolsAndCalculators = [
    {
      title: "Security ROI Calculator",
      description: "Calculate the return on investment for your cybersecurity initiatives with our comprehensive ROI assessment tool.",
      icon: TrendingUp,
      type: "Interactive Tool"
    },
    {
      title: "Risk Assessment Framework",
      description: "Structured framework for conducting cybersecurity risk assessments with customizable templates and scoring metrics.",
      icon: AlertTriangle,
      type: "Assessment Tool"
    },
    {
      title: "Compliance Checklist Generator",
      description: "Generate customized compliance checklists for SOC 2, PCI DSS, HIPAA, and other regulatory frameworks.",
      icon: Check,
      type: "Compliance Tool"
    },
    {
      title: "Incident Response Planner",
      description: "Interactive tool for developing and testing incident response plans with scenario-based exercises.",
      icon: Zap,
      type: "Planning Tool"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[hsl(var(--tecastra-darkblue))] to-[hsl(var(--tecastra-teal))] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
              Cybersecurity Resource Center
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Comprehensive cybersecurity knowledge base with expert insights, 
              research reports, and practical guidance for security professionals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#resources" className="px-8 py-3 bg-[hsl(var(--tecastra-gold))] text-[hsl(var(--tecastra-darkblue))] rounded-full font-medium hover:bg-[hsl(var(--tecastra-gold))]/90 transition duration-150">
                Browse Resources
              </Link>
              <Link href="#events" className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                Upcoming Events
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl text-[hsl(var(--tecastra-darkblue))] mb-4">
              Featured Resources
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))]">
              Latest cybersecurity insights and research from TecAstra experts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category) => {
              const featuredResource = category.resources.find(r => r.featured);
              if (!featuredResource) return null;
              
              return (
                <motion.div
                  key={category.category}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <category.icon className="h-8 w-8 text-[hsl(var(--tecastra-teal))] mr-3" />
                      <span className="text-sm font-medium text-[hsl(var(--tecastra-teal))]">
                        {featuredResource.type}
                      </span>
                    </div>
                    
                    <h3 className="font-heading font-bold text-lg text-[hsl(var(--tecastra-darkblue))] mb-3">
                      {featuredResource.title}
                    </h3>
                    
                    <p className="text-sm text-[hsl(var(--tecastra-darkgray))] mb-4">
                      {featuredResource.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featuredResource.topics.map((topic, i) => (
                        <span key={i} className="px-2 py-1 bg-[hsl(var(--tecastra-gray))] text-xs rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      href={`/resources/${featuredResource.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center px-4 py-2 bg-[hsl(var(--tecastra-teal))] text-white rounded-full text-sm font-medium hover:bg-[hsl(var(--tecastra-darkblue))] transition duration-150"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section id="resources" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Resource Library
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Explore our comprehensive collection of cybersecurity resources organized by category
            </p>
          </motion.div>

          <div className="space-y-16">
            {resourceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-[hsl(var(--tecastra-teal))] rounded-full mr-6">
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-[hsl(var(--tecastra-darkblue))] mb-2">
                      {category.category}
                    </h3>
                    <p className="text-lg text-[hsl(var(--tecastra-darkgray))]">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Resources Grid */}
                <div className="grid lg:grid-cols-2 gap-6">
                  {category.resources.map((resource, resourceIndex) => (
                    <motion.div
                      key={resource.title}
                      className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: resourceIndex * 0.1 }}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <span className="px-3 py-1 bg-[hsl(var(--tecastra-teal))] text-white text-xs rounded-full mr-3">
                              {resource.type}
                            </span>
                            {resource.featured && (
                              <span className="px-2 py-1 bg-[hsl(var(--tecastra-gold))] text-[hsl(var(--tecastra-darkblue))] text-xs rounded-full">
                                Featured
                              </span>
                            )}
                          </div>
                          <h4 className="font-heading font-bold text-lg text-[hsl(var(--tecastra-darkblue))] mb-2">
                            {resource.title}
                          </h4>
                          <p className="text-sm text-[hsl(var(--tecastra-darkgray))] mb-3">
                            {resource.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.topics.map((topic, i) => (
                          <span key={i} className="px-2 py-1 bg-[hsl(var(--tecastra-gray))] text-xs rounded-full">
                            {topic}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center text-xs text-[hsl(var(--tecastra-darkgray))] mb-4">
                        <span>Updated: March 2024</span>
                        <span>Type: {resource.type}</span>
                      </div>
                      
                      <div className="flex gap-3">
                        <Link 
                          href={`/resources/${resource.title.toLowerCase().replace(/\s+/g, '-')}`}
                          className="px-4 py-2 bg-[hsl(var(--tecastra-teal))] text-white rounded-full text-sm font-medium hover:bg-[hsl(var(--tecastra-darkblue))] transition duration-150"
                        >
                          {category.category.includes('Video') ? 'Watch' : 'Download'}
                        </Link>
                        <Link 
                          href={`/resources/preview/${resource.title.toLowerCase().replace(/\s+/g, '-')}`}
                          className="px-4 py-2 border border-[hsl(var(--tecastra-teal))] text-[hsl(var(--tecastra-teal))] rounded-full text-sm font-medium hover:bg-[hsl(var(--tecastra-teal))] hover:text-white transition duration-150"
                        >
                          Preview
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools and Calculators */}
      <section className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Security Tools & Calculators
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Interactive tools to help you assess, plan, and optimize your cybersecurity program
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {toolsAndCalculators.map((tool, index) => (
              <motion.div
                key={tool.title}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-[hsl(var(--tecastra-teal))] rounded-full">
                    <tool.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <span className="px-3 py-1 bg-[hsl(var(--tecastra-gray))] text-xs rounded-full mb-3 inline-block">
                  {tool.type}
                </span>
                
                <h3 className="font-heading font-bold text-lg text-[hsl(var(--tecastra-darkblue))] mb-3">
                  {tool.title}
                </h3>
                
                <p className="text-sm text-[hsl(var(--tecastra-darkgray))] mb-6">
                  {tool.description}
                </p>
                
                <Link 
                  href={`/tools/${tool.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-block px-6 py-2 bg-[hsl(var(--tecastra-teal))] text-white rounded-full text-sm font-medium hover:bg-[hsl(var(--tecastra-darkblue))] transition duration-150"
                >
                  Launch Tool
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Upcoming Events
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Join us for webinars, workshops, and conferences to stay ahead of cybersecurity trends
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-[hsl(var(--tecastra-teal))] rounded-full mr-4">
                    <event.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-[hsl(var(--tecastra-gray))] text-sm rounded-full">
                    {event.type}
                  </span>
                </div>
                
                <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))] mb-3">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4 text-sm text-[hsl(var(--tecastra-darkgray))]">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">📍</span>
                    {event.location}
                  </div>
                </div>
                
                <p className="text-sm text-[hsl(var(--tecastra-darkgray))] mb-6">
                  {event.description}
                </p>
                
                <Link 
                  href={`/events/${event.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-block w-full text-center px-6 py-3 bg-[hsl(var(--tecastra-teal))] text-white rounded-full font-medium hover:bg-[hsl(var(--tecastra-darkblue))] transition duration-150"
                >
                  Register Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-[hsl(var(--tecastra-darkblue))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
              Stay Informed
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Subscribe to our cybersecurity newsletter for the latest threat intelligence, 
              research insights, and product updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--tecastra-teal))]"
              />
              <button className="px-8 py-3 bg-[hsl(var(--tecastra-teal))] text-white rounded-full font-medium hover:bg-[hsl(var(--tecastra-gold))] hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resources;