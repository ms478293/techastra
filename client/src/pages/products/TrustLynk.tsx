import { motion } from 'framer-motion';
import { images } from '@/assets/images';
import { Check, Lock, Users, Clock, Shield, Zap, BarChart3, Key, Globe } from 'lucide-react';
import { Link } from 'wouter';

const TrustLynk = () => {
  const keyFeatures = [
    {
      icon: Clock,
      title: "Temporary Access Links",
      description: "Generate time-limited, contextual access links that automatically expire, eliminating the need for permanent VPN connections and reducing attack surface exposure."
    },
    {
      icon: BarChart3,
      title: "Contextual Risk Scoring",
      description: "Real-time risk assessment based on user behavior, device posture, location, and application sensitivity to dynamically adjust access permissions."
    },
    {
      icon: Users,
      title: "Enhanced User Experience",
      description: "Seamless authentication and access without complex VPN clients or cumbersome multi-step processes, improving productivity while maintaining security."
    },
    {
      icon: Shield,
      title: "Zero Trust Architecture",
      description: "Never trust, always verify approach with continuous authentication and authorization for every access request, regardless of user location or device."
    }
  ];

  const architectureComponents = [
    {
      component: "Identity Verification Engine",
      description: "Multi-factor authentication with adaptive policies",
      capabilities: [
        "Biometric authentication support",
        "Hardware token integration",
        "Risk-based authentication",
        "Single sign-on (SSO) compatibility",
        "Certificate-based authentication"
      ]
    },
    {
      component: "Access Policy Engine",
      description: "Dynamic policy enforcement based on context and risk",
      capabilities: [
        "Attribute-based access control (ABAC)",
        "Just-in-time access provisioning",
        "Micro-segmentation policies",
        "Application-level permissions",
        "Time-bound access controls"
      ]
    },
    {
      component: "Device Trust Platform",
      description: "Continuous device posture assessment and compliance",
      capabilities: [
        "Device fingerprinting",
        "Compliance policy enforcement",
        "Certificate-based device identity",
        "Mobile device management integration",
        "Endpoint security validation"
      ]
    },
    {
      component: "Analytics & Intelligence",
      description: "Real-time monitoring and threat detection",
      capabilities: [
        "User behavior analytics (UBA)",
        "Anomaly detection algorithms",
        "Access pattern analysis",
        "Risk scoring algorithms",
        "Compliance reporting"
      ]
    }
  ];

  const deploymentScenarios = [
    {
      scenario: "Remote Workforce Access",
      challenge: "Secure access for distributed teams without traditional VPN complexity",
      solution: "TrustLynk provides seamless, secure access to corporate applications with automatic user verification and contextual access controls.",
      benefits: [
        "90% reduction in VPN support tickets",
        "50% faster application access",
        "99.9% user authentication success rate",
        "Zero VPN infrastructure maintenance"
      ],
      metrics: {
        users: "10,000+ remote users",
        uptime: "99.99% availability",
        performance: "Sub-second authentication"
      }
    },
    {
      scenario: "Third-Party Contractor Access",
      challenge: "Temporary access for contractors and vendors without compromising security",
      solution: "Time-limited access links with granular permissions ensure contractors can access only what they need, when they need it.",
      benefits: [
        "Zero standing privileges for contractors",
        "Automated access expiration",
        "Complete audit trail",
        "No credential sharing required"
      ],
      metrics: {
        users: "5,000+ contractor accounts",
        efficiency: "80% faster onboarding",
        security: "Zero contractor-related breaches"
      }
    },
    {
      scenario: "Cloud Application Security",
      challenge: "Protecting access to cloud-based applications and services",
      solution: "Native cloud integration with major platforms provides consistent security policies across hybrid and multi-cloud environments.",
      benefits: [
        "Unified policy management",
        "Cloud-native scalability",
        "API-driven automation",
        "Multi-cloud compatibility"
      ],
      metrics: {
        applications: "500+ protected apps",
        clouds: "AWS, Azure, GCP support",
        policies: "Centralized management"
      }
    }
  ];

  const securityControls = [
    {
      category: "Authentication Controls",
      controls: [
        "Multi-factor authentication (MFA)",
        "Adaptive authentication policies",
        "Passwordless authentication options",
        "Certificate-based authentication",
        "Biometric verification support"
      ]
    },
    {
      category: "Access Controls",
      controls: [
        "Least privilege access enforcement",
        "Just-in-time access provisioning",
        "Application-level micro-segmentation",
        "Time-bound access permissions",
        "Contextual access policies"
      ]
    },
    {
      category: "Monitoring & Compliance",
      controls: [
        "Real-time access monitoring",
        "Comprehensive audit logging",
        "Compliance reporting automation",
        "Anomaly detection alerts",
        "Risk-based access analytics"
      ]
    },
    {
      category: "Integration Capabilities",
      controls: [
        "SAML 2.0 and OAuth 2.0 support",
        "Active Directory integration",
        "Cloud identity provider support",
        "API-first architecture",
        "Webhook-based automation"
      ]
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
                TrustLynk Zero Trust Network Access
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Revolutionary Zero Trust platform with temporary access links, contextual risk scoring, 
                and seamless user experience for secure remote connectivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo" className="px-8 py-3 bg-[hsl(var(--tecastra-gold))] text-[hsl(var(--tecastra-darkblue))] rounded-full font-medium hover:bg-[hsl(var(--tecastra-gold))]/90 transition duration-150">
                  Request Demo
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
                src={images.cybersecurityProfessionals[2]}
                alt="TrustLynk Zero Trust Network Access"
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
              Revolutionary Zero Trust Capabilities
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              TrustLynk reimagines secure access with innovative features that eliminate traditional 
              VPN complexity while providing superior security and user experience.
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
              Platform Architecture
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Comprehensive Zero Trust architecture with integrated security controls and intelligence capabilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
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
                <p className="text-[hsl(var(--tecastra-darkgray))] mb-6">
                  {component.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))]">Key Capabilities:</h4>
                  {component.capabilities.map((capability, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                      <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{capability}</span>
                    </div>
                  ))}
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
              Real-World Deployment Scenarios
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Discover how organizations leverage TrustLynk to solve complex access challenges while improving security posture.
            </p>
          </motion.div>

          <div className="space-y-12">
            {deploymentScenarios.map((scenario, index) => (
              <motion.div
                key={scenario.scenario}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="font-heading font-bold text-2xl text-[hsl(var(--tecastra-darkblue))] mb-4">
                      {scenario.scenario}
                    </h3>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">Challenge:</h4>
                      <p className="text-[hsl(var(--tecastra-darkgray))]">{scenario.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">TrustLynk Solution:</h4>
                      <p className="text-[hsl(var(--tecastra-darkgray))]">{scenario.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">Measurable Benefits:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {scenario.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))]" />
                            <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-[hsl(var(--tecastra-gray))] rounded-lg p-6">
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-4">Deployment Metrics</h4>
                    <div className="space-y-3">
                      {Object.entries(scenario.metrics).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center">
                          <span className="text-sm text-[hsl(var(--tecastra-darkgray))] capitalize">{key}:</span>
                          <span className="text-sm font-medium text-[hsl(var(--tecastra-teal))]">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Controls */}
      <section className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Comprehensive Security Controls
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Enterprise-grade security controls and compliance capabilities built into every aspect of the platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityControls.map((category, index) => (
              <motion.div
                key={category.category}
                className="bg-white rounded-xl shadow-lg p-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="font-heading font-bold text-lg text-[hsl(var(--tecastra-darkblue))] mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.controls.map((control, i) => (
                    <li key={i} className="flex items-start">
                      <Lock className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                      <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{control}</span>
                    </li>
                  ))}
                </ul>
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
              Transform Your Access Security Strategy
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the future of secure access with TrustLynk's innovative Zero Trust platform. 
              Eliminate VPN complexity while enhancing security and user satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="px-8 py-3 bg-[hsl(var(--tecastra-teal))] text-white rounded-full font-medium hover:bg-[hsl(var(--tecastra-gold))] hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                Schedule Demo
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

export default TrustLynk;