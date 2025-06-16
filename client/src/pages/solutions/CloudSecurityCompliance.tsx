import { motion } from 'framer-motion';
import { images } from '@/assets/images';
import { Check, Cloud, Shield, Code, BarChart3, Settings, Lock, Eye, Zap, AlertTriangle } from 'lucide-react';
import { Link } from 'wouter';

const CloudSecurityCompliance = () => {
  const cloudChallenges = [
    {
      challenge: "Multi-Cloud Complexity",
      description: "Managing security across AWS, Azure, and GCP with inconsistent policies",
      impact: "Security gaps and compliance violations",
      solution: "Unified security management with NebulaWall CNAPP providing consistent policies across all cloud platforms"
    },
    {
      challenge: "Container Security",
      description: "Securing containerized applications and Kubernetes environments",
      impact: "Runtime vulnerabilities and misconfigurations",
      solution: "Container-native security scanning with runtime protection and compliance automation"
    },
    {
      challenge: "DevSecOps Integration",
      description: "Security friction slowing development velocity",
      impact: "Developer productivity loss and security debt",
      solution: "GitHub-native security integration with shift-left vulnerability detection"
    },
    {
      challenge: "Compliance Automation",
      description: "Manual compliance processes prone to errors",
      impact: "Audit failures and regulatory penalties",
      solution: "Automated compliance monitoring with real-time reporting and remediation"
    }
  ];

  const complianceFrameworks = [
    {
      framework: "SOC 2 Type II",
      description: "Service Organization Control 2 attestation for security, availability, and confidentiality",
      controls: [
        "Security principle implementation",
        "Availability monitoring and reporting",
        "Processing integrity controls",
        "Confidentiality safeguards",
        "Privacy protection measures"
      ],
      benefits: [
        "Customer trust enhancement",
        "Vendor assessment simplification",
        "Risk management improvement",
        "Competitive advantage"
      ],
      timeline: "3-6 months to readiness"
    },
    {
      framework: "ISO 27001",
      description: "International standard for information security management systems",
      controls: [
        "Information security policies",
        "Risk assessment procedures",
        "Security control implementation",
        "Incident management processes",
        "Continuous improvement programs"
      ],
      benefits: [
        "Global recognition",
        "Systematic risk management",
        "Operational efficiency",
        "Legal compliance"
      ],
      timeline: "6-12 months to certification"
    },
    {
      framework: "FedRAMP",
      description: "Federal Risk and Authorization Management Program for government cloud services",
      controls: [
        "NIST 800-53 control implementation",
        "Continuous monitoring",
        "Incident response capabilities",
        "Security assessment documentation",
        "Authorization boundary definition"
      ],
      benefits: [
        "Government market access",
        "Enhanced security posture",
        "Competitive differentiation",
        "Risk reduction"
      ],
      timeline: "12-24 months to authorization"
    },
    {
      framework: "PCI DSS",
      description: "Payment Card Industry Data Security Standard for payment processing",
      controls: [
        "Cardholder data protection",
        "Network security implementation",
        "Vulnerability management",
        "Access control enforcement",
        "Security testing programs"
      ],
      benefits: [
        "Payment processing capability",
        "Customer data protection",
        "Fraud reduction",
        "Brand protection"
      ],
      timeline: "4-8 months to compliance"
    }
  ];

  const implementationSteps = [
    {
      step: "Cloud Security Assessment",
      duration: "2-3 weeks",
      activities: [
        "Multi-cloud inventory and classification",
        "Security posture evaluation",
        "Compliance gap analysis",
        "Risk assessment and prioritization",
        "Remediation roadmap development"
      ],
      outcomes: [
        "Comprehensive security baseline",
        "Risk-prioritized remediation plan",
        "Compliance readiness assessment",
        "Cost-benefit analysis"
      ]
    },
    {
      step: "Security Platform Deployment",
      duration: "4-6 weeks",
      activities: [
        "NebulaWall CNAPP installation",
        "Multi-cloud connector configuration",
        "Policy template customization",
        "Integration with CI/CD pipelines",
        "Automated scanning enablement"
      ],
      outcomes: [
        "Unified security visibility",
        "Automated compliance monitoring",
        "Developer-friendly security gates",
        "Real-time threat detection"
      ]
    },
    {
      step: "Compliance Automation",
      duration: "3-4 weeks",
      activities: [
        "FlowOps workflow configuration",
        "Compliance reporting automation",
        "Evidence collection setup",
        "Audit trail implementation",
        "Remediation playbook development"
      ],
      outcomes: [
        "Automated compliance reporting",
        "Continuous evidence collection",
        "Streamlined audit processes",
        "Proactive remediation"
      ]
    },
    {
      step: "Developer Integration",
      duration: "2-3 weeks",
      activities: [
        "GitHub security integration",
        "IDE plugin deployment",
        "Security training delivery",
        "Feedback loop establishment",
        "Performance optimization"
      ],
      outcomes: [
        "Shift-left security implementation",
        "Developer adoption success",
        "Reduced security friction",
        "Continuous improvement"
      ]
    }
  ];

  const cloudSecurityServices = [
    {
      service: "Cloud Security Posture Management (CSPM)",
      description: "Continuous monitoring and remediation of cloud misconfigurations",
      features: [
        "Real-time configuration monitoring",
        "Industry benchmark compliance",
        "Automated remediation",
        "Risk scoring and prioritization",
        "Custom policy enforcement"
      ],
      coverage: "AWS, Azure, GCP, Oracle Cloud"
    },
    {
      service: "Cloud Workload Protection (CWP)",
      description: "Runtime security for cloud workloads including containers and serverless",
      features: [
        "Container image scanning",
        "Runtime threat detection",
        "Kubernetes security policies",
        "Serverless function protection",
        "Network micro-segmentation"
      ],
      coverage: "EC2, ACI, GCE, Kubernetes, Lambda"
    },
    {
      service: "Cloud Infrastructure Entitlement Management (CIEM)",
      description: "Identity and access management across cloud environments",
      features: [
        "Privilege escalation detection",
        "Unused permission identification",
        "Cross-cloud identity mapping",
        "Just-in-time access",
        "Compliance reporting"
      ],
      coverage: "IAM, Azure AD, Google Cloud Identity"
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
                Cloud Security & Compliance
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                End-to-end cloud security with automated compliance monitoring and 
                developer-friendly tools for AWS, Azure, and GCP environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo" className="px-8 py-3 bg-[hsl(var(--tecastra-gold))] text-[hsl(var(--tecastra-darkblue))] rounded-full font-medium hover:bg-[hsl(var(--tecastra-gold))]/90 transition duration-150">
                  Free Cloud Assessment
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
                src={images.dataCenter[0]}
                alt="Cloud Security & Compliance"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cloud Challenges */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Common Cloud Security Challenges
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Understanding and addressing the unique security challenges of cloud environments.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {cloudChallenges.map((item, index) => (
              <motion.div
                key={item.challenge}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <AlertTriangle className="h-8 w-8 text-[hsl(var(--tecastra-gold))] mr-3" />
                  <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))]">
                    {item.challenge}
                  </h3>
                </div>
                
                <p className="text-[hsl(var(--tecastra-darkgray))] mb-4">{item.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-red-600 mb-2">Business Impact:</h4>
                  <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">{item.impact}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[hsl(var(--tecastra-teal))] mb-2">TecAstra Solution:</h4>
                  <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">{item.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Steps */}
      <section className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Implementation Roadmap
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Structured approach to implementing comprehensive cloud security and compliance.
            </p>
          </motion.div>

          <div className="space-y-8">
            {implementationSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="bg-white rounded-xl shadow-lg p-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-[hsl(var(--tecastra-teal))] text-white rounded-full mr-4 font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))]">
                      {step.step}
                    </h3>
                    <p className="text-[hsl(var(--tecastra-teal))] font-medium">{step.duration}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Key Activities</h4>
                    <ul className="space-y-2">
                      {step.activities.map((activity, i) => (
                        <li key={i} className="flex items-start">
                          <Zap className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-gold))] flex-shrink-0" />
                          <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Expected Outcomes</h4>
                    <ul className="space-y-2">
                      {step.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                          <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{outcome}</span>
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

      {/* Compliance Frameworks */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Supported Compliance Frameworks
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Comprehensive compliance automation for major industry standards and regulations.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={framework.framework}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))] mb-3">
                  {framework.framework}
                </h3>
                
                <p className="text-[hsl(var(--tecastra-darkgray))] mb-6">{framework.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Key Controls</h4>
                    <ul className="space-y-1">
                      {framework.controls.map((control, i) => (
                        <li key={i} className="text-sm text-[hsl(var(--tecastra-darkgray))]">• {control}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Business Benefits</h4>
                    <ul className="space-y-1">
                      {framework.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm text-[hsl(var(--tecastra-teal))]">• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-[hsl(var(--tecastra-gray))] p-4 rounded-lg">
                  <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">
                    <strong>Timeline to Compliance:</strong> {framework.timeline}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Security Services */}
      <section className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Comprehensive Cloud Security Services
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Full-spectrum security coverage for all aspects of your cloud infrastructure.
            </p>
          </motion.div>

          <div className="space-y-8">
            {cloudSecurityServices.map((service, index) => (
              <motion.div
                key={service.service}
                className="bg-white rounded-xl shadow-lg p-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <Cloud className="h-8 w-8 text-[hsl(var(--tecastra-teal))] mr-3" />
                  <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))]">
                    {service.service}
                  </h3>
                </div>
                
                <p className="text-[hsl(var(--tecastra-darkgray))] mb-6">{service.description}</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                          <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Platform Coverage</h4>
                    <div className="bg-[hsl(var(--tecastra-gray))] p-4 rounded-lg">
                      <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">{service.coverage}</p>
                    </div>
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
              Secure Your Cloud Journey
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Get comprehensive cloud security and compliance automation. 
              Start with a free assessment to understand your current posture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="px-8 py-3 bg-[hsl(var(--tecastra-teal))] text-white rounded-full font-medium hover:bg-[hsl(var(--tecastra-gold))] hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                Free Cloud Assessment
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

export default CloudSecurityCompliance;