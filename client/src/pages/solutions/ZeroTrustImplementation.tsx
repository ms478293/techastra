import { motion } from 'framer-motion';
import { images } from '@/assets/images';
import { Check, Shield, Users, Lock, Eye, Network, Zap, AlertTriangle, Clock, BarChart3 } from 'lucide-react';
import { Link } from 'wouter';

const ZeroTrustImplementation = () => {
  const implementationPhases = [
    {
      phase: "Phase 1: Assessment & Planning",
      duration: "4-6 weeks",
      description: "Comprehensive evaluation of current security posture and Zero Trust readiness assessment",
      activities: [
        "Current state security architecture analysis",
        "Identity and access management audit",
        "Network segmentation assessment",
        "Application inventory and risk classification",
        "Zero Trust maturity scoring"
      ],
      deliverables: [
        "Zero Trust readiness report",
        "Gap analysis and remediation roadmap",
        "Implementation timeline and milestones",
        "Resource requirements planning",
        "Executive briefing presentation"
      ]
    },
    {
      phase: "Phase 2: Foundation Deployment",
      duration: "8-12 weeks",
      description: "Implementation of core Zero Trust components and identity verification systems",
      activities: [
        "TrustLynk Zero Trust Network Access deployment",
        "IdentaGate Identity and Access Management setup",
        "Multi-factor authentication rollout",
        "Device trust and compliance policies",
        "Initial network micro-segmentation"
      ],
      deliverables: [
        "Deployed Zero Trust access platform",
        "Configured identity verification systems",
        "Device compliance policies",
        "Initial user training materials",
        "Phase 2 completion report"
      ]
    },
    {
      phase: "Phase 3: Advanced Protection",
      duration: "6-10 weeks",
      description: "Deployment of advanced threat detection and automated response capabilities",
      activities: [
        "FortIQ next-generation firewall implementation",
        "SentraCore endpoint detection and response",
        "Advanced threat analytics configuration",
        "Automated incident response playbooks",
        "Comprehensive logging and monitoring"
      ],
      deliverables: [
        "Advanced threat protection systems",
        "Automated response capabilities",
        "Security monitoring dashboards",
        "Incident response procedures",
        "Security team training completion"
      ]
    },
    {
      phase: "Phase 4: Optimization & Maturation",
      duration: "4-8 weeks",
      description: "Fine-tuning policies, advanced analytics, and continuous improvement processes",
      activities: [
        "Policy optimization and refinement",
        "Advanced behavioral analytics implementation",
        "Integration with existing security tools",
        "Performance optimization and tuning",
        "Continuous monitoring and improvement"
      ],
      deliverables: [
        "Optimized Zero Trust policies",
        "Advanced analytics dashboards",
        "Integration documentation",
        "Performance monitoring reports",
        "Ongoing optimization plan"
      ]
    }
  ];

  const architectureComponents = [
    {
      component: "Identity Verification Layer",
      technologies: ["TrustLynk ZTNA", "IdentaGate IAM"],
      description: "Multi-factor authentication with contextual risk scoring and adaptive policies",
      capabilities: [
        "Real-time identity verification",
        "Contextual access decisions",
        "Risk-based authentication",
        "Privileged access management",
        "Single sign-on integration"
      ]
    },
    {
      component: "Network Security Layer",
      technologies: ["FortIQ NGFW", "ClearDNS Security"],
      description: "Advanced firewall protection with DNS security and threat intelligence",
      capabilities: [
        "Micro-segmentation enforcement",
        "Application-aware policies",
        "DNS-based threat blocking",
        "Encrypted traffic inspection",
        "Real-time threat intelligence"
      ]
    },
    {
      component: "Endpoint Protection Layer",
      technologies: ["SentraCore EDR", "MailShield 360"],
      description: "Comprehensive endpoint detection and response with email security",
      capabilities: [
        "AI-powered threat detection",
        "Behavioral analysis",
        "Automated response",
        "Email security integration",
        "Device compliance monitoring"
      ]
    },
    {
      component: "Analytics & Intelligence Layer",
      technologies: ["PulseIQ Threat Intel", "UnifySec Console"],
      description: "Advanced analytics and unified security management platform",
      capabilities: [
        "Unified security visibility",
        "Advanced threat analytics",
        "Predictive risk scoring",
        "Automated reporting",
        "Compliance monitoring"
      ]
    }
  ];

  const industryBenefits = [
    {
      industry: "Financial Services",
      challenges: ["Regulatory compliance", "Customer data protection", "Fraud prevention"],
      benefits: [
        "95% reduction in successful phishing attacks",
        "60% faster compliance reporting",
        "80% improvement in fraud detection accuracy",
        "50% reduction in security management overhead"
      ],
      caseStudy: "Regional bank implemented Zero Trust for 2,500 employees, achieving SOX compliance 6 months faster and preventing $3.2M in potential fraud losses."
    },
    {
      industry: "Healthcare",
      challenges: ["HIPAA compliance", "Medical device security", "Patient data protection"],
      benefits: [
        "Zero patient data breaches",
        "40% improvement in system availability",
        "90% reduction in compliance audit time",
        "70% faster incident response"
      ],
      caseStudy: "Multi-facility healthcare system secured 5,000 users and 15,000 devices with 99.99% uptime and zero HIPAA violations."
    },
    {
      industry: "Government",
      challenges: ["Critical infrastructure", "Citizen data protection", "Multi-agency collaboration"],
      benefits: [
        "100% FedRAMP compliance achievement",
        "85% reduction in security incidents",
        "60% improvement in inter-agency access",
        "75% faster security clearance processes"
      ],
      caseStudy: "State government agency secured 10,000 employees across 50 locations with complete FedRAMP High authorization."
    }
  ];

  const roi_metrics = [
    {
      metric: "Security Incident Reduction",
      improvement: "90%",
      description: "Dramatic reduction in successful cyber attacks and data breaches"
    },
    {
      metric: "Compliance Efficiency",
      improvement: "75%",
      description: "Faster compliance reporting and audit preparation"
    },
    {
      metric: "IT Support Reduction",
      improvement: "65%",
      description: "Fewer password resets and access-related support tickets"
    },
    {
      metric: "User Productivity",
      improvement: "40%",
      description: "Improved user experience with seamless secure access"
    },
    {
      metric: "Total Cost of Ownership",
      improvement: "45%",
      description: "Reduced security infrastructure and management costs"
    },
    {
      metric: "Mean Time to Detection",
      improvement: "85%",
      description: "Faster threat detection and response capabilities"
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
                Zero Trust Implementation
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Comprehensive Zero Trust architecture implementation with TecAstra's integrated 
                security platform, delivering 90% reduction in security incidents and 
                seamless user experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo" className="px-8 py-3 bg-[hsl(var(--tecastra-gold))] text-[hsl(var(--tecastra-darkblue))] rounded-full font-medium hover:bg-[hsl(var(--tecastra-gold))]/90 transition duration-150">
                  Request Assessment
                </Link>
                <Link href="/contact" className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                  Contact Experts
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
                alt="Zero Trust Implementation"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Implementation Phases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Proven Implementation Methodology
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Our structured approach ensures successful Zero Trust transformation with minimal 
              business disruption and maximum security impact.
            </p>
          </motion.div>

          <div className="space-y-8">
            {implementationPhases.map((phase, index) => (
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
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Key Activities</h4>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, i) => (
                        <li key={i} className="flex items-start">
                          <Zap className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-gold))] flex-shrink-0" />
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
              Integrated security layers providing comprehensive protection across identity, 
              network, endpoints, and data.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {architectureComponents.map((component, index) => (
              <motion.div
                key={component.component}
                className="bg-white rounded-xl shadow-lg p-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))] mb-3">
                  {component.component}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {component.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-[hsl(var(--tecastra-teal))] text-white text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-[hsl(var(--tecastra-darkgray))] mb-6">{component.description}</p>
                
                <div>
                  <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Core Capabilities</h4>
                  <ul className="space-y-2">
                    {component.capabilities.map((capability, i) => (
                      <li key={i} className="flex items-start">
                        <Shield className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                        <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Industry-Specific Results
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Measurable security improvements and business benefits across different industries.
            </p>
          </motion.div>

          <div className="space-y-8">
            {industryBenefits.map((industry, index) => (
              <motion.div
                key={industry.industry}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="font-heading font-bold text-2xl text-[hsl(var(--tecastra-darkblue))] mb-4">
                  {industry.industry}
                </h3>
                
                <div className="grid lg:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Key Challenges</h4>
                    <ul className="space-y-2">
                      {industry.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start">
                          <AlertTriangle className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-gold))] flex-shrink-0" />
                          <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Measurable Benefits</h4>
                    <ul className="space-y-2">
                      {industry.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <BarChart3 className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                          <span className="text-sm font-medium text-[hsl(var(--tecastra-teal))]">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Case Study</h4>
                    <p className="text-sm text-[hsl(var(--tecastra-darkgray))] bg-[hsl(var(--tecastra-gray))] p-4 rounded-lg">
                      {industry.caseStudy}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Metrics */}
      <section className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Return on Investment Metrics
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Quantifiable improvements in security posture, operational efficiency, and cost reduction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roi_metrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-[hsl(var(--tecastra-teal))] mb-2">
                  {metric.improvement}
                </div>
                <h3 className="font-heading font-bold text-lg text-[hsl(var(--tecastra-darkblue))] mb-3">
                  {metric.metric}
                </h3>
                <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">
                  {metric.description}
                </p>
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
              Start Your Zero Trust Journey Today
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your security posture with proven Zero Trust implementation. 
              Get expert assessment and personalized roadmap for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="px-8 py-3 bg-[hsl(var(--tecastra-teal))] text-white rounded-full font-medium hover:bg-[hsl(var(--tecastra-gold))] hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                Get Free Assessment
              </Link>
              <Link href="/contact" className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                Speak with Expert
              </Link>
              <Link href="/solutions" className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                View All Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ZeroTrustImplementation;