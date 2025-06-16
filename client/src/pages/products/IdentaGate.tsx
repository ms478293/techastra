import { motion } from 'framer-motion';
import { images } from '@/assets/images';
import { Check, Key, Users, Shield, Brain, Clock, BarChart3, Lock, Eye, Smartphone } from 'lucide-react';
import { Link } from 'wouter';

const IdentaGate = () => {
  const keyFeatures = [
    {
      icon: Brain,
      title: "Real-Time Authentication Scoring",
      description: "Advanced AI algorithms continuously assess authentication risk based on user behavior, device characteristics, location patterns, and contextual factors to dynamically adjust security requirements."
    },
    {
      icon: Users,
      title: "Comprehensive Identity Governance",
      description: "Complete lifecycle management of user identities with automated provisioning, role-based access controls, periodic access reviews, and compliance reporting across all connected systems."
    },
    {
      icon: Smartphone,
      title: "Adaptive Multi-Factor Authentication",
      description: "Dynamic MFA requirements that adapt to risk levels, supporting biometrics, hardware tokens, mobile push notifications, and contextual authentication methods."
    },
    {
      icon: Eye,
      title: "Unified Access Management",
      description: "Single sign-on across cloud and on-premises applications with session management, privileged access controls, and seamless user experience across all enterprise resources."
    }
  ];

  const authenticationMethods = [
    {
      method: "Biometric Authentication",
      description: "Advanced biometric verification using fingerprint, facial recognition, and voice patterns",
      technologies: ["Fingerprint scanning", "Facial recognition", "Voice biometrics", "Behavioral biometrics"],
      accuracy: "99.9% accuracy",
      deployment: "Mobile and desktop applications",
      benefits: [
        "Highest security level with convenience",
        "Eliminates password vulnerabilities",
        "User-friendly authentication experience",
        "Supports multiple biometric modalities"
      ]
    },
    {
      method: "Hardware Security Keys",
      description: "FIDO2/WebAuthn compliant hardware tokens for phishing-resistant authentication",
      technologies: ["USB security keys", "NFC tokens", "Bluetooth authenticators", "Smart cards"],
      accuracy: "100% phishing resistance",
      deployment: "Cross-platform compatibility",
      benefits: [
        "Phishing-proof authentication",
        "No network dependency",
        "Long-term device lifecycle",
        "Standards-based implementation"
      ]
    },
    {
      method: "Mobile Push Authentication",
      description: "Secure push notifications with biometric confirmation on registered mobile devices",
      technologies: ["iOS push notifications", "Android notifications", "App-based authentication", "Secure enclaves"],
      accuracy: "99.8% user satisfaction",
      deployment: "Native mobile applications",
      benefits: [
        "Fast and convenient authentication",
        "Rich context information",
        "Offline capability",
        "Device-bound security"
      ]
    },
    {
      method: "Risk-Based Authentication",
      description: "Dynamic authentication requirements based on calculated risk scores and contextual factors",
      technologies: ["Machine learning models", "Behavioral analytics", "Device fingerprinting", "Geolocation analysis"],
      accuracy: "95% risk prediction accuracy",
      deployment: "Continuous background assessment",
      benefits: [
        "Reduced authentication friction",
        "Adaptive security posture",
        "Improved user experience",
        "Proactive threat detection"
      ]
    }
  ];

  const identityGovernance = [
    {
      capability: "Automated Provisioning & Deprovisioning",
      description: "Streamlined user lifecycle management with automated account creation and removal",
      features: [
        "HR system integration for automatic user provisioning",
        "Role-based access assignment during onboarding",
        "Immediate access revocation upon termination",
        "Bulk user management for organizational changes",
        "Audit trails for all provisioning activities"
      ],
      compliance: ["SOX", "HIPAA", "GDPR", "SOC 2"],
      efficiency: "90% reduction in manual provisioning tasks"
    },
    {
      capability: "Access Certification & Reviews",
      description: "Periodic access reviews ensuring appropriate permissions and compliance",
      features: [
        "Automated access certification campaigns",
        "Manager-based access reviews and approvals",
        "Risk-based review prioritization",
        "Bulk access modification capabilities",
        "Compliance reporting and attestation"
      ],
      compliance: ["SOX", "PCI DSS", "ISO 27001", "NIST"],
      efficiency: "80% faster access review cycles"
    },
    {
      capability: "Privileged Access Management",
      description: "Secure management and monitoring of administrative and privileged accounts",
      features: [
        "Just-in-time privileged access provisioning",
        "Session recording and monitoring",
        "Privileged account password management",
        "Emergency access procedures",
        "Privileged access analytics and reporting"
      ],
      compliance: ["SOX", "PCI DSS", "NIST", "CIS Controls"],
      efficiency: "95% reduction in standing privileges"
    },
    {
      capability: "Identity Analytics & Intelligence",
      description: "Advanced analytics for identity risk assessment and insider threat detection",
      features: [
        "User behavior analytics and anomaly detection",
        "Access pattern analysis and reporting",
        "Identity risk scoring and monitoring",
        "Insider threat detection algorithms",
        "Predictive access recommendations"
      ],
      compliance: ["SOC 2", "ISO 27001", "NIST", "GDPR"],
      efficiency: "75% improvement in threat detection"
    }
  ];

  const integrationEcosystem = [
    {
      category: "Enterprise Applications",
      systems: ["Microsoft 365", "Google Workspace", "Salesforce", "ServiceNow", "Workday"],
      protocols: ["SAML 2.0", "OAuth 2.0", "OpenID Connect", "SCIM 2.0"],
      capabilities: [
        "Single sign-on with seamless user experience",
        "Automated user provisioning and deprovisioning",
        "Real-time access policy enforcement",
        "Session management and timeout controls"
      ]
    },
    {
      category: "Cloud Infrastructure",
      systems: ["AWS IAM", "Azure Active Directory", "Google Cloud Identity", "Oracle Identity"],
      protocols: ["SAML 2.0", "OAuth 2.0", "API integrations", "Directory sync"],
      capabilities: [
        "Cross-cloud identity federation",
        "Infrastructure access management",
        "Cloud resource access controls",
        "Multi-cloud governance policies"
      ]
    },
    {
      category: "Legacy Systems",
      systems: ["Active Directory", "LDAP", "Mainframe systems", "Legacy databases"],
      protocols: ["Kerberos", "LDAP", "RADIUS", "Custom connectors"],
      capabilities: [
        "Legacy system modernization",
        "Protocol translation and bridging",
        "Gradual migration support",
        "Hybrid identity management"
      ]
    },
    {
      category: "Security Tools",
      systems: ["SIEM platforms", "Endpoint protection", "Network security", "Compliance tools"],
      protocols: ["REST APIs", "Webhooks", "SYSLOG", "CEF"],
      capabilities: [
        "Identity event correlation",
        "Security orchestration integration",
        "Automated incident response",
        "Compliance data sharing"
      ]
    }
  ];

  const complianceSupport = [
    {
      regulation: "SOX (Sarbanes-Oxley)",
      requirements: [
        "Access controls for financial systems",
        "Segregation of duties enforcement",
        "Audit trail maintenance",
        "Executive certification support"
      ],
      identagateCapabilities: [
        "Automated SOX access controls",
        "Role-based segregation of duties",
        "Comprehensive audit logging",
        "Executive dashboard and reporting"
      ],
      benefits: "50% reduction in SOX compliance audit time"
    },
    {
      regulation: "HIPAA",
      requirements: [
        "Protected health information access controls",
        "Minimum necessary access principle",
        "Audit controls and monitoring",
        "Person or entity authentication"
      ],
      identagateCapabilities: [
        "HIPAA-compliant access controls",
        "PHI access monitoring and alerting",
        "Healthcare role-based access",
        "HIPAA audit trail generation"
      ],
      benefits: "Zero HIPAA violations with automated controls"
    },
    {
      regulation: "GDPR",
      requirements: [
        "Data protection by design and default",
        "Data subject access rights",
        "Consent management",
        "Data processor accountability"
      ],
      identagateCapabilities: [
        "Privacy-by-design access controls",
        "Automated data subject request handling",
        "Consent-based access management",
        "GDPR compliance dashboards"
      ],
      benefits: "100% GDPR compliance with automated evidence"
    },
    {
      regulation: "PCI DSS",
      requirements: [
        "Cardholder data access restrictions",
        "Strong access control measures",
        "Regular monitoring and testing",
        "Information security policy maintenance"
      ],
      identagateCapabilities: [
        "PCI-compliant access controls",
        "Cardholder data access monitoring",
        "Automated compliance testing",
        "PCI policy enforcement"
      ],
      benefits: "Simplified PCI DSS audit preparation"
    }
  ];

  const performanceMetrics = [
    {
      metric: "Single Sign-On Success Rate",
      value: "99.9%",
      benchmark: "Industry average: 95%",
      description: "Reliable SSO across all integrated applications"
    },
    {
      metric: "Authentication Speed",
      value: "<500ms",
      benchmark: "Industry average: 2-3 seconds",
      description: "Fast authentication with minimal user impact"
    },
    {
      metric: "Password Reset Reduction",
      value: "85%",
      benchmark: "Typical reduction: 40-50%",
      description: "Significant decrease in password-related support tickets"
    },
    {
      metric: "Compliance Audit Efficiency",
      value: "75% faster",
      benchmark: "Manual processes baseline",
      description: "Automated compliance reporting and evidence collection"
    },
    {
      metric: "User Adoption Rate",
      value: "98%",
      benchmark: "Industry average: 70%",
      description: "High user satisfaction with seamless experience"
    },
    {
      metric: "Security Incident Reduction",
      value: "80%",
      benchmark: "Password-based systems baseline",
      description: "Significant reduction in identity-related security incidents"
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
                IdentaGate Identity & Access Management
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Advanced IAM platform with real-time authentication scoring, comprehensive identity governance, 
                and adaptive multi-factor authentication - achieving 99.9% SSO success rate and 85% password reset reduction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo" className="px-8 py-3 bg-[hsl(var(--tecastra-gold))] text-[hsl(var(--tecastra-darkblue))] rounded-full font-medium hover:bg-[hsl(var(--tecastra-gold))]/90 transition duration-150">
                  Start Free Trial
                </Link>
                <Link href="/contact" className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                  Contact Sales
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
                alt="IdentaGate Identity & Access Management"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Advanced Identity Management Features
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Next-generation IAM platform combining AI-powered authentication with comprehensive identity governance and seamless user experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-[hsl(var(--tecastra-teal))] rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[hsl(var(--tecastra-darkgray))]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Authentication Methods */}
      <section className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Advanced Authentication Methods
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Multiple authentication options providing security and convenience across all user scenarios and device types.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {authenticationMethods.map((method, index) => (
              <motion.div
                key={method.method}
                className="bg-white rounded-xl shadow-lg p-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))]">
                    {method.method}
                  </h3>
                  <span className="px-3 py-1 bg-[hsl(var(--tecastra-teal))] text-white text-sm rounded-full">
                    {method.accuracy}
                  </span>
                </div>
                
                <p className="text-[hsl(var(--tecastra-darkgray))] mb-6">{method.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {method.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-[hsl(var(--tecastra-gray))] text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Deployment</h4>
                    <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">{method.deployment}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {method.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                        <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Identity Governance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Comprehensive Identity Governance
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Complete identity lifecycle management with automated governance, compliance controls, and advanced analytics.
            </p>
          </motion.div>

          <div className="space-y-8">
            {identityGovernance.map((capability, index) => (
              <motion.div
                key={capability.capability}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-[hsl(var(--tecastra-teal))] text-white rounded-full mr-4 font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))]">
                        {capability.capability}
                      </h3>
                      <p className="text-[hsl(var(--tecastra-teal))] font-medium">{capability.efficiency}</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-[hsl(var(--tecastra-darkgray))] mb-6">{capability.description}</p>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Core Features</h4>
                    <ul className="space-y-2">
                      {capability.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                          <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-[hsl(var(--tecastra-gray))] p-6 rounded-lg">
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Compliance Support</h4>
                    <div className="flex flex-wrap gap-2">
                      {capability.compliance.map((comp, i) => (
                        <span key={i} className="px-3 py-1 bg-[hsl(var(--tecastra-teal))] text-white text-sm rounded-full">
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Proven Performance Results
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Measurable improvements in security, efficiency, and user satisfaction across all identity management functions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                className="bg-white rounded-xl shadow-lg p-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-[hsl(var(--tecastra-teal))] mb-2">
                    {metric.value}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[hsl(var(--tecastra-darkblue))]">
                    {metric.metric}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded-lg text-center">
                    <p className="text-sm font-medium text-blue-600">{metric.benchmark}</p>
                  </div>
                  
                  <p className="text-sm text-[hsl(var(--tecastra-darkgray))] text-center">
                    {metric.description}
                  </p>
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
              Transform Your Identity Management
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience next-generation IAM with IdentaGate's AI-powered authentication, comprehensive governance, 
              and seamless user experience. Achieve 99.9% SSO success rates and 85% fewer password resets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="px-8 py-3 bg-[hsl(var(--tecastra-teal))] text-white rounded-full font-medium hover:bg-[hsl(var(--tecastra-gold))] hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                Start Free Trial
              </Link>
              <Link href="/contact" className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                Contact Sales
              </Link>
              <Link href="/products" className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                View All Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IdentaGate;