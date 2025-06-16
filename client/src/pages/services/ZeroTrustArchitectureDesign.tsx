import { motion } from 'framer-motion';
import { images } from '@/assets/images';
import { Check, Shield, Eye, Users, Clock, BarChart3, Settings, Target, Zap, Network } from 'lucide-react';
import { Link } from 'wouter';

const ZeroTrustArchitectureDesign = () => {
  const assessmentPhases = [
    {
      phase: "Current State Analysis",
      duration: "Week 1-2",
      description: "Comprehensive evaluation of existing security architecture and Zero Trust readiness",
      activities: [
        "Security architecture documentation review",
        "Network topology and segmentation analysis",
        "Identity and access management assessment",
        "Data classification and protection evaluation",
        "Application inventory and risk categorization"
      ],
      deliverables: [
        "Current state security architecture diagram",
        "Zero Trust maturity assessment report",
        "Gap analysis with industry benchmarks",
        "Risk assessment and prioritization matrix",
        "Executive readiness briefing"
      ]
    },
    {
      phase: "Zero Trust Strategy Development",
      duration: "Week 3-4",
      description: "Development of comprehensive Zero Trust strategy aligned with business objectives",
      activities: [
        "Zero Trust principles alignment workshop",
        "Business requirements gathering and analysis",
        "Technology stack evaluation and selection",
        "Policy framework design and development",
        "Compliance and regulatory requirements mapping"
      ],
      deliverables: [
        "Zero Trust strategy document",
        "Technology architecture blueprint",
        "Policy framework templates",
        "Compliance mapping documentation",
        "Business case and ROI analysis"
      ]
    },
    {
      phase: "Implementation Roadmap Creation",
      duration: "Week 5-6",
      description: "Detailed implementation plan with phases, timelines, and resource requirements",
      activities: [
        "Implementation phase planning and sequencing",
        "Resource requirements analysis and planning",
        "Risk mitigation strategies development",
        "Change management planning",
        "Success metrics and KPI definition"
      ],
      deliverables: [
        "Detailed implementation roadmap",
        "Resource allocation and timeline plan",
        "Risk mitigation strategies document",
        "Change management framework",
        "Success measurement criteria"
      ]
    }
  ];

  const architectureComponents = [
    {
      component: "Identity & Access Control Layer",
      description: "Comprehensive identity verification and access management framework",
      technologies: ["Multi-factor authentication", "Identity governance", "Privileged access management"],
      designPrinciples: [
        "Never trust, always verify identity",
        "Least privilege access enforcement",
        "Continuous authentication and authorization",
        "Risk-based access decisions",
        "Zero standing privileges"
      ],
      implementation: [
        "Identity provider consolidation strategy",
        "MFA rollout plan across all applications",
        "Privileged access management deployment",
        "Identity governance automation",
        "Access certification process design"
      ]
    },
    {
      component: "Network Security & Micro-segmentation",
      description: "Advanced network security with granular micro-segmentation capabilities",
      technologies: ["Software-defined perimeter", "Network access control", "Traffic inspection"],
      designPrinciples: [
        "Assume breach mentality",
        "Encrypt all communications",
        "Inspect and log all traffic",
        "Implement network micro-segmentation",
        "Continuous monitoring and analysis"
      ],
      implementation: [
        "Network segmentation strategy",
        "Software-defined perimeter deployment",
        "Traffic inspection and analysis setup",
        "Encrypted communication protocols",
        "Network monitoring and alerting"
      ]
    },
    {
      component: "Endpoint & Device Security",
      description: "Comprehensive endpoint protection and device trust framework",
      technologies: ["Endpoint detection and response", "Device compliance", "Mobile device management"],
      designPrinciples: [
        "Device trust verification",
        "Continuous endpoint monitoring",
        "Automated threat response",
        "Device compliance enforcement",
        "Mobile security integration"
      ],
      implementation: [
        "Endpoint protection platform deployment",
        "Device compliance policy creation",
        "Mobile device management integration",
        "Threat detection and response automation",
        "Endpoint security monitoring"
      ]
    },
    {
      component: "Data Protection & Classification",
      description: "Advanced data protection with automated classification and governance",
      technologies: ["Data loss prevention", "Encryption management", "Data classification"],
      designPrinciples: [
        "Data-centric security approach",
        "Automated data classification",
        "Encryption of data at rest and in transit",
        "Data loss prevention controls",
        "Privacy and compliance automation"
      ],
      implementation: [
        "Data discovery and classification setup",
        "Data loss prevention policy deployment",
        "Encryption key management strategy",
        "Data governance framework",
        "Privacy compliance automation"
      ]
    }
  ];

  const industryFrameworks = [
    {
      framework: "NIST Zero Trust Architecture",
      description: "National Institute of Standards and Technology Zero Trust guidelines",
      principles: [
        "Verify explicitly using all available data",
        "Use least privilege access",
        "Assume breach and verify end-to-end"
      ],
      implementation: [
        "NIST ZTA compliance assessment",
        "Control framework mapping",
        "Implementation guidance alignment",
        "Maturity model development"
      ],
      timeline: "6-12 months for full implementation"
    },
    {
      framework: "Forrester Zero Trust eXtended (ZTX)",
      description: "Comprehensive Zero Trust framework covering ecosystem protection",
      principles: [
        "Networks and environments are always hostile",
        "External and internal threats exist on the network",
        "Network locality is not sufficient for deciding trust"
      ],
      implementation: [
        "ZTX maturity assessment",
        "Ecosystem security design",
        "Third-party integration planning",
        "Extended enterprise protection"
      ],
      timeline: "8-18 months for ecosystem coverage"
    },
    {
      framework: "Gartner SASE (Secure Access Service Edge)",
      description: "Cloud-native security and networking convergence model",
      principles: [
        "Identity is the new perimeter",
        "Cloud-first security architecture",
        "Converged networking and security"
      ],
      implementation: [
        "SASE architecture design",
        "Cloud security integration",
        "Network transformation planning",
        "Service provider selection"
      ],
      timeline: "12-24 months for full transformation"
    }
  ];

  const deliverableTemplates = [
    {
      deliverable: "Zero Trust Architecture Blueprint",
      description: "Comprehensive technical architecture document with detailed component specifications",
      contents: [
        "Executive summary and business case",
        "Current state vs. future state architecture",
        "Component-level design specifications",
        "Integration and interoperability requirements",
        "Security controls and policy frameworks"
      ],
      format: "50-100 page technical document with diagrams",
      audience: "Technical teams, security architects, IT leadership"
    },
    {
      deliverable: "Implementation Roadmap",
      description: "Detailed project plan with phases, timelines, and resource requirements",
      contents: [
        "Implementation phases and milestones",
        "Resource requirements and skill assessments",
        "Risk analysis and mitigation strategies",
        "Budget estimates and cost-benefit analysis",
        "Success metrics and measurement criteria"
      ],
      format: "Project management documentation with Gantt charts",
      audience: "Project managers, IT leadership, executives"
    },
    {
      deliverable: "Policy Framework Templates",
      description: "Customizable policy templates aligned with Zero Trust principles",
      contents: [
        "Identity and access management policies",
        "Network security and segmentation policies",
        "Data protection and classification policies",
        "Incident response and recovery procedures",
        "Compliance and audit frameworks"
      ],
      format: "Policy document templates with implementation guides",
      audience: "Security teams, compliance officers, legal teams"
    },
    {
      deliverable: "Technology Selection Guide",
      description: "Vendor evaluation and technology selection recommendations",
      contents: [
        "Market analysis and vendor landscape",
        "Technology evaluation criteria and scoring",
        "Proof of concept testing results",
        "Integration and compatibility assessments",
        "Commercial terms and negotiation guidance"
      ],
      format: "Evaluation matrices with detailed analysis",
      audience: "Procurement teams, technical evaluators, executives"
    }
  ];

  const successMetrics = [
    {
      category: "Security Posture Improvement",
      metrics: [
        "90% reduction in lateral movement incidents",
        "75% decrease in time to detect threats",
        "85% improvement in access control effectiveness",
        "95% reduction in privileged access violations"
      ]
    },
    {
      category: "Operational Efficiency",
      metrics: [
        "60% reduction in password-related support tickets",
        "50% faster user onboarding and offboarding",
        "70% improvement in compliance audit efficiency",
        "40% reduction in security management overhead"
      ]
    },
    {
      category: "User Experience",
      metrics: [
        "95% user satisfaction with single sign-on",
        "80% reduction in authentication friction",
        "90% improvement in remote access performance",
        "75% decrease in access request processing time"
      ]
    },
    {
      category: "Business Impact",
      metrics: [
        "300% return on investment within 18 months",
        "50% reduction in cyber insurance premiums",
        "Zero security-related business disruptions",
        "100% compliance with regulatory requirements"
      ]
    }
  ];

  const engagementModels = [
    {
      model: "Comprehensive Assessment & Design",
      duration: "8-12 weeks",
      investment: "$150,000 - $250,000",
      scope: "Complete Zero Trust architecture design with detailed implementation roadmap",
      included: [
        "Current state assessment and gap analysis",
        "Zero Trust strategy and architecture design",
        "Detailed implementation roadmap",
        "Policy framework development",
        "Technology selection guidance"
      ],
      ideal: "Large enterprises requiring comprehensive transformation"
    },
    {
      model: "Rapid Assessment & Quick Wins",
      duration: "4-6 weeks",
      investment: "$75,000 - $125,000",
      scope: "Focused assessment with immediate improvement recommendations",
      included: [
        "Zero Trust maturity assessment",
        "Quick wins identification",
        "High-level roadmap development",
        "Priority project recommendations",
        "Executive briefing and next steps"
      ],
      ideal: "Mid-market organizations seeking fast improvements"
    },
    {
      model: "Advisory & Implementation Support",
      duration: "6-18 months",
      investment: "$200,000 - $500,000",
      scope: "Ongoing advisory support throughout Zero Trust implementation",
      included: [
        "Continuous architecture guidance",
        "Implementation oversight and support",
        "Technology integration assistance",
        "Change management support",
        "Performance optimization"
      ],
      ideal: "Organizations requiring hands-on implementation support"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[hsl(var(--tecastra-darkblue))] to-[hsl(var(--tecastra-teal))] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
                Zero Trust Architecture Design
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Strategic Zero Trust architecture design and implementation planning 
                tailored to your organization's unique requirements, delivering 90% 
                reduction in lateral movement and 300% ROI within 18 months.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo" className="px-8 py-3 bg-[hsl(var(--tecastra-gold))] text-[hsl(var(--tecastra-darkblue))] rounded-full font-medium hover:bg-[hsl(var(--tecastra-gold))]/90 transition duration-150">
                  Schedule Consultation
                </Link>
                <Link href="/contact" className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                  Speak with Architect
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src={images.cybersecurityProfessionals[0]}
                alt="Zero Trust Architecture Design"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Assessment Phases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Comprehensive Design Process
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Structured methodology ensuring thorough analysis, strategic planning, and actionable implementation guidance.
            </p>
          </motion.div>

          <div className="space-y-8">
            {assessmentPhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-[hsl(var(--tecastra-teal))] text-white rounded-full mr-4 font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))]">
                      {phase.phase}
                    </h3>
                    <p className="text-[hsl(var(--tecastra-teal))] font-medium">{phase.duration}</p>
                  </div>
                </div>
                
                <p className="text-[hsl(var(--tecastra-darkgray))] mb-6">{phase.description}</p>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Key Activities</h4>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, i) => (
                        <li key={i} className="flex items-start">
                          <Eye className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-gold))] flex-shrink-0" />
                          <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Deliverables</h4>
                    <ul className="space-y-2">
                      {phase.deliverables.map((deliverable, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                          <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Components */}
      <section className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Zero Trust Architecture Components
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Comprehensive architecture framework covering all critical security domains with detailed design principles.
            </p>
          </motion.div>

          <div className="space-y-8">
            {architectureComponents.map((component, index) => (
              <motion.div
                key={component.component}
                className="bg-white rounded-xl shadow-lg p-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-[hsl(var(--tecastra-teal))] text-white rounded-full mr-4 font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))]">
                      {component.component}
                    </h3>
                    <p className="text-[hsl(var(--tecastra-darkgray))]">{component.description}</p>
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Core Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {component.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-[hsl(var(--tecastra-teal))] text-white text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Design Principles</h4>
                    <ul className="space-y-1">
                      {component.designPrinciples.map((principle, i) => (
                        <li key={i} className="text-sm text-[hsl(var(--tecastra-darkgray))]">• {principle}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Implementation Areas</h4>
                    <ul className="space-y-1">
                      {component.implementation.map((impl, i) => (
                        <li key={i} className="flex items-start">
                          <Target className="mt-1 mr-2 h-3 w-3 text-[hsl(var(--tecastra-gold))] flex-shrink-0" />
                          <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{impl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Measurable Success Outcomes
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Proven results across security posture, operational efficiency, user experience, and business impact.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {successMetrics.map((category, index) => (
              <motion.div
                key={category.category}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))] mb-6">
                  {category.category}
                </h3>
                
                <ul className="space-y-3">
                  {category.metrics.map((metric, i) => (
                    <li key={i} className="flex items-start">
                      <BarChart3 className="mt-1 mr-3 h-5 w-5 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                      <span className="text-[hsl(var(--tecastra-darkgray))] font-medium">{metric}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Flexible Engagement Models
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Choose the engagement model that best fits your organization's needs, timeline, and budget requirements.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {engagementModels.map((model, index) => (
              <motion.div
                key={model.model}
                className="bg-white rounded-xl shadow-lg p-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))] mb-4">
                  {model.model}
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-[hsl(var(--tecastra-darkblue))]">Duration:</span>
                    <span className="text-sm text-[hsl(var(--tecastra-teal))]">{model.duration}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-[hsl(var(--tecastra-darkblue))]">Investment:</span>
                    <span className="text-sm text-[hsl(var(--tecastra-teal))]">{model.investment}</span>
                  </div>
                </div>
                
                <p className="text-[hsl(var(--tecastra-darkgray))] mb-6">{model.scope}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">Included Services</h4>
                    <ul className="space-y-1">
                      {model.included.map((service, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                          <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-[hsl(var(--tecastra-gray))] p-4 rounded-lg">
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">Ideal For</h4>
                    <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">{model.ideal}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[hsl(var(--tecastra-darkblue))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
              Design Your Zero Trust Future
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your security architecture with expert Zero Trust design. 
              Achieve 90% reduction in lateral movement and 300% ROI within 18 months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="px-8 py-3 bg-[hsl(var(--tecastra-teal))] text-white rounded-full font-medium hover:bg-[hsl(var(--tecastra-gold))] hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                Schedule Consultation
              </Link>
              <Link href="/contact" className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                Speak with Architect
              </Link>
              <Link href="/services" className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ZeroTrustArchitectureDesign;