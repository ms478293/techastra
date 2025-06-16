import { motion } from 'framer-motion';
import { images } from '@/assets/images';
import { Check, Users, Wifi, Shield, Lock, Eye, Globe, Smartphone, AlertTriangle, BarChart3 } from 'lucide-react';
import { Link } from 'wouter';

const RemoteWorkforceSecurity = () => {
  const remoteWorkChallenges = [
    {
      challenge: "Home Network Vulnerabilities",
      description: "Unsecured home networks exposing corporate data to threats",
      statistics: "78% of remote workers use unsecured Wi-Fi",
      risks: ["Man-in-the-middle attacks", "Network eavesdropping", "IoT device exploitation"],
      solution: "ClearDNS protection extending to home networks with real-time threat blocking"
    },
    {
      challenge: "Device Management Complexity",
      description: "Managing security across personal and corporate devices",
      statistics: "65% increase in BYOD security incidents",
      risks: ["Unpatched vulnerabilities", "Malware infections", "Data leakage"],
      solution: "SentraCore lightweight EDR with minimal impact on personal device performance"
    },
    {
      challenge: "VPN Performance Issues",
      description: "Traditional VPN solutions causing productivity delays",
      statistics: "40% productivity loss due to VPN latency",
      risks: ["User bypass behaviors", "Bandwidth limitations", "Single point of failure"],
      solution: "TrustLynk Zero Trust access eliminating VPN complexity with direct app access"
    },
    {
      challenge: "Shadow IT Proliferation",
      description: "Unmanaged cloud services and applications",
      statistics: "83% of business apps are unsanctioned",
      risks: ["Data sprawl", "Compliance violations", "Security blind spots"],
      solution: "IdentaGate IAM with comprehensive app discovery and access governance"
    }
  ];

  const securityFramework = [
    {
      component: "Identity & Access Management",
      technologies: ["TrustLynk ZTNA", "IdentaGate IAM"],
      description: "Secure authentication and access control for remote workers",
      features: [
        "Multi-factor authentication with mobile app",
        "Contextual access policies based on location and device",
        "Temporary access links for contractors",
        "Single sign-on for productivity apps",
        "Privileged access management for IT teams"
      ],
      benefits: [
        "70% reduction in password-related support tickets",
        "95% user satisfaction with seamless access",
        "Zero standing privileges for external users",
        "90% faster onboarding process"
      ]
    },
    {
      component: "Endpoint Protection",
      technologies: ["SentraCore EDR", "MailShield 360"],
      description: "Comprehensive protection for remote devices and communications",
      features: [
        "Lightweight agent with minimal performance impact",
        "AI-powered threat detection and response",
        "Email security with phishing training",
        "USB and removable media protection",
        "Web filtering and safe browsing"
      ],
      benefits: [
        "99.7% malware detection rate",
        "80% reduction in successful phishing attempts",
        "50MB memory footprint",
        "Automated threat remediation"
      ]
    },
    {
      component: "Network Security",
      technologies: ["ClearDNS Security", "FortIQ NGFW"],
      description: "Protecting network communications and internet access",
      features: [
        "DNS-based threat blocking for home networks",
        "Encrypted tunnel protection",
        "Application-aware traffic policies",
        "Real-time threat intelligence",
        "Bandwidth optimization"
      ],
      benefits: [
        "Sub-2ms DNS response times",
        "95% reduction in malicious domain access",
        "30% improvement in application performance",
        "24/7 network monitoring"
      ]
    },
    {
      component: "Data Protection",
      technologies: ["NebulaWall DLP", "FlowOps SOAR"],
      description: "Preventing data loss and ensuring compliance",
      features: [
        "Real-time data classification and monitoring",
        "Cloud storage protection",
        "Email and messaging security",
        "Automated incident response",
        "Compliance reporting"
      ],
      benefits: [
        "Zero data breach incidents",
        "100% regulatory compliance",
        "4-hour incident response time",
        "Automated evidence collection"
      ]
    }
  ];

  const deploymentScenarios = [
    {
      scenario: "Small Business (10-50 employees)",
      description: "Complete remote work security for growing businesses",
      timeline: "2-3 days deployment",
      components: [
        "Cloud-based identity management",
        "Endpoint protection for all devices",
        "Email security with training",
        "Basic network monitoring"
      ],
      investment: "$50-80 per user/month",
      roi: "300% ROI through reduced incidents and IT overhead"
    },
    {
      scenario: "Mid-Market Company (50-500 employees)",
      description: "Scalable security with advanced threat protection",
      timeline: "1-2 weeks deployment",
      components: [
        "Enterprise identity platform",
        "Advanced threat hunting",
        "Data loss prevention",
        "Compliance automation"
      ],
      investment: "$80-120 per user/month",
      roi: "250% ROI with enhanced productivity and security"
    },
    {
      scenario: "Enterprise (500+ employees)",
      description: "Comprehensive security with custom integration",
      timeline: "2-4 weeks deployment",
      components: [
        "Multi-tenant management",
        "Custom policy frameworks",
        "SIEM integration",
        "Advanced analytics"
      ],
      investment: "$120-200 per user/month",
      roi: "400% ROI through risk reduction and operational efficiency"
    }
  ];

  const complianceSupport = [
    {
      regulation: "GDPR",
      requirements: ["Data protection by design", "Breach notification", "Data subject rights"],
      tecAstraCapabilities: [
        "Automated data discovery and classification",
        "Real-time breach detection and reporting",
        "Data subject request automation",
        "Privacy impact assessment tools"
      ],
      benefits: "100% GDPR compliance with automated evidence collection"
    },
    {
      regulation: "HIPAA",
      requirements: ["PHI protection", "Access controls", "Audit trails"],
      tecAstraCapabilities: [
        "Healthcare-specific data classification",
        "Role-based access controls",
        "Comprehensive audit logging",
        "Encrypted communications"
      ],
      benefits: "Zero HIPAA violations with continuous monitoring"
    },
    {
      regulation: "SOX",
      requirements: ["Financial data protection", "Change management", "Access certification"],
      tecAstraCapabilities: [
        "Financial system monitoring",
        "Automated change tracking",
        "Quarterly access reviews",
        "SOX compliance reporting"
      ],
      benefits: "50% reduction in compliance audit time"
    }
  ];

  const successMetrics = [
    {
      metric: "Security Incident Reduction",
      improvement: "85%",
      description: "Significant decrease in successful cyber attacks on remote workers"
    },
    {
      metric: "User Productivity",
      improvement: "40%",
      description: "Improved efficiency through seamless security integration"
    },
    {
      metric: "IT Support Reduction",
      improvement: "70%",
      description: "Fewer security-related helpdesk tickets and issues"
    },
    {
      metric: "Compliance Efficiency",
      improvement: "60%",
      description: "Faster compliance reporting and audit preparation"
    },
    {
      metric: "Cost Savings",
      improvement: "45%",
      description: "Reduced security infrastructure and management costs"
    },
    {
      metric: "Remote Access Speed",
      improvement: "65%",
      description: "Faster application access without VPN bottlenecks"
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
                Remote Workforce Security
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Secure remote work enablement with seamless user experience and comprehensive 
                protection, achieving 85% reduction in security incidents and 40% productivity improvement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo" className="px-8 py-3 bg-[hsl(var(--tecastra-gold))] text-[hsl(var(--tecastra-darkblue))] rounded-full font-medium hover:bg-[hsl(var(--tecastra-gold))]/90 transition duration-150">
                  Free Security Assessment
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
                src={images.cybersecurityProfessionals[1]}
                alt="Remote Workforce Security"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Remote Work Challenges */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Remote Work Security Challenges
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Understanding and addressing the unique security challenges of distributed workforce environments.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {remoteWorkChallenges.map((challenge, index) => (
              <motion.div
                key={challenge.challenge}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <AlertTriangle className="h-8 w-8 text-[hsl(var(--tecastra-gold))] mr-3" />
                  <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))]">
                    {challenge.challenge}
                  </h3>
                </div>
                
                <p className="text-[hsl(var(--tecastra-darkgray))] mb-4">{challenge.description}</p>
                
                <div className="bg-red-50 p-3 rounded-lg mb-4">
                  <p className="text-sm font-semibold text-red-600">Industry Statistics</p>
                  <p className="text-sm text-red-800">{challenge.statistics}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">Security Risks</h4>
                  <ul className="space-y-1">
                    {challenge.risks.map((risk, i) => (
                      <li key={i} className="text-sm text-[hsl(var(--tecastra-darkgray))]">• {risk}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-[hsl(var(--tecastra-gray))] p-4 rounded-lg">
                  <h4 className="font-semibold text-[hsl(var(--tecastra-teal))] mb-2">TecAstra Solution</h4>
                  <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">{challenge.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Framework */}
      <section className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Comprehensive Remote Work Security Framework
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Integrated security components providing end-to-end protection for distributed workforce.
            </p>
          </motion.div>

          <div className="space-y-12">
            {securityFramework.map((component, index) => (
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
                    <div className="flex flex-wrap gap-2 mt-2">
                      {component.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-[hsl(var(--tecastra-teal))] text-white text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-[hsl(var(--tecastra-darkgray))] mb-6">{component.description}</p>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {component.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                          <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Measurable Benefits</h4>
                    <ul className="space-y-2">
                      {component.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <BarChart3 className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-gold))] flex-shrink-0" />
                          <span className="text-sm font-medium text-[hsl(var(--tecastra-teal))]">{benefit}</span>
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

      {/* Deployment Scenarios */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Scalable Deployment Options
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Flexible remote work security solutions that scale with your organization's growth.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {deploymentScenarios.map((scenario, index) => (
              <motion.div
                key={scenario.scenario}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))] mb-4">
                  {scenario.scenario}
                </h3>
                
                <p className="text-[hsl(var(--tecastra-darkgray))] mb-6">{scenario.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-[hsl(var(--tecastra-gray))] p-3 rounded-lg">
                    <p className="text-sm font-semibold text-[hsl(var(--tecastra-darkblue))]">Deployment Timeline</p>
                    <p className="text-sm text-[hsl(var(--tecastra-teal))]">{scenario.timeline}</p>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-blue-600">Investment</p>
                    <p className="text-sm text-blue-800">{scenario.investment}</p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-green-600">ROI</p>
                    <p className="text-sm text-green-800">{scenario.roi}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Included Components</h4>
                  <ul className="space-y-1">
                    {scenario.components.map((component, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                        <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{component}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Support */}
      <section className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Remote Work Compliance Support
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Automated compliance monitoring and reporting for distributed workforce environments.
            </p>
          </motion.div>

          <div className="space-y-8">
            {complianceSupport.map((compliance, index) => (
              <motion.div
                key={compliance.regulation}
                className="bg-white rounded-xl shadow-lg p-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))] mb-6">
                  {compliance.regulation} Compliance
                </h3>
                
                <div className="grid lg:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Key Requirements</h4>
                    <ul className="space-y-2">
                      {compliance.requirements.map((req, i) => (
                        <li key={i} className="flex items-start">
                          <AlertTriangle className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-gold))] flex-shrink-0" />
                          <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">TecAstra Capabilities</h4>
                    <ul className="space-y-2">
                      {compliance.tecAstraCapabilities.map((capability, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                          <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Business Benefits</h4>
                    <div className="bg-[hsl(var(--tecastra-gray))] p-4 rounded-lg">
                      <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">{compliance.benefits}</p>
                    </div>
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
              Measurable Success Metrics
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Quantifiable improvements in security, productivity, and operational efficiency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100"
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
              Secure Your Remote Workforce Today
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Enable secure, productive remote work with comprehensive protection and seamless user experience. 
              Get started with a free security assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="px-8 py-3 bg-[hsl(var(--tecastra-teal))] text-white rounded-full font-medium hover:bg-[hsl(var(--tecastra-gold))] hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                Free Security Assessment
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

export default RemoteWorkforceSecurity;