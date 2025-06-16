import { motion } from 'framer-motion';
import { images } from '@/assets/images';
import { Check, Eye, Brain, Laptop, Shield, Zap, BarChart3, AlertTriangle } from 'lucide-react';
import { Link } from 'wouter';

const SentraCore = () => {
  const keyFeatures = [
    {
      icon: Eye,
      title: "Lightweight Agent Deployment",
      description: "Ultra-lightweight endpoint agent with minimal system impact, consuming less than 50MB memory and 1% CPU while providing comprehensive protection coverage."
    },
    {
      icon: Brain,
      title: "Explainable AI Detection",
      description: "Advanced machine learning with transparent decision-making processes, providing clear explanations for every threat detection and security alert."
    },
    {
      icon: Shield,
      title: "SMB-Ready Configuration",
      description: "Pre-configured security policies optimized for small and medium businesses, with simplified deployment and management requiring minimal IT expertise."
    },
    {
      icon: Zap,
      title: "Real-Time Threat Response",
      description: "Automated incident response with customizable playbooks that can isolate threats, quarantine files, and initiate remediation within seconds of detection."
    }
  ];

  const detectionCapabilities = [
    {
      category: "Malware Detection",
      techniques: [
        "Signature-based detection",
        "Behavioral analysis engine",
        "Machine learning classification",
        "Heuristic analysis",
        "Cloud-based reputation lookup"
      ],
      effectiveness: "99.7% detection rate"
    },
    {
      category: "Advanced Persistent Threats",
      techniques: [
        "Living-off-the-land detection",
        "Memory-based attack identification",
        "Lateral movement detection",
        "Command & control identification",
        "Data exfiltration prevention"
      ],
      effectiveness: "95% APT detection"
    },
    {
      category: "Ransomware Protection",
      techniques: [
        "Encryption behavior monitoring",
        "File system activity analysis",
        "Backup integrity protection",
        "Network communication analysis",
        "Automatic file recovery"
      ],
      effectiveness: "99.9% ransomware prevention"
    },
    {
      category: "Zero-Day Threats",
      techniques: [
        "Behavioral anomaly detection",
        "Exploit technique identification",
        "Vulnerability chaining analysis",
        "Sandboxing integration",
        "Threat hunting automation"
      ],
      effectiveness: "90% zero-day detection"
    }
  ];

  const smb_advantages = [
    {
      challenge: "Limited IT Resources",
      solution: "Automated Security Management",
      description: "SentraCore requires minimal ongoing management with automated policy updates, threat response, and system maintenance.",
      benefits: [
        "90% reduction in security management time",
        "Automated threat remediation",
        "Self-updating threat intelligence",
        "One-click deployment across endpoints"
      ]
    },
    {
      challenge: "Budget Constraints",
      solution: "Cost-Effective Protection",
      description: "Enterprise-grade security at SMB-friendly pricing with flexible licensing and no hidden costs.",
      benefits: [
        "60% lower total cost of ownership",
        "No per-feature licensing fees",
        "Scalable pricing model",
        "Reduced cyber insurance premiums"
      ]
    },
    {
      challenge: "Complex Compliance",
      solution: "Simplified Compliance",
      description: "Built-in compliance frameworks and automated reporting for common SMB requirements.",
      benefits: [
        "GDPR compliance automation",
        "SOC 2 readiness reporting",
        "Industry-specific templates",
        "Audit trail generation"
      ]
    },
    {
      challenge: "Skill Gap",
      solution: "Expert-Level Automation",
      description: "AI-powered security that operates like having a dedicated security expert on your team.",
      benefits: [
        "Expert-level threat analysis",
        "Contextual security recommendations",
        "Guided incident response",
        "24/7 automated monitoring"
      ]
    }
  ];

  const deploymentScenarios = [
    {
      scenario: "Small Business (10-50 employees)",
      description: "Complete endpoint security for growing businesses",
      features: [
        "Cloud-based management console",
        "Automated threat response",
        "Employee security training integration",
        "Business email protection"
      ],
      roi: "300% ROI in first year",
      deployment: "2-hour setup time"
    },
    {
      scenario: "Medium Enterprise (50-500 employees)",
      description: "Scalable security with advanced analytics",
      features: [
        "Multi-tenant management",
        "Advanced threat hunting",
        "SIEM integration capabilities",
        "Custom policy frameworks"
      ],
      roi: "250% ROI in 18 months",
      deployment: "1-day rollout"
    },
    {
      scenario: "Distributed Workforce",
      description: "Remote worker protection and monitoring",
      features: [
        "VPN-independent security",
        "Home network assessment",
        "Personal device management",
        "Location-based policies"
      ],
      roi: "400% ROI through reduced breaches",
      deployment: "Self-service deployment"
    }
  ];

  const complianceFrameworks = [
    {
      framework: "GDPR",
      controls: [
        "Data encryption at rest and in transit",
        "Personal data discovery and classification",
        "Breach notification automation",
        "Data subject request handling"
      ]
    },
    {
      framework: "HIPAA",
      controls: [
        "PHI protection and monitoring",
        "Access control enforcement",
        "Audit logging and reporting",
        "Risk assessment automation"
      ]
    },
    {
      framework: "SOC 2",
      controls: [
        "Security control monitoring",
        "Change management tracking",
        "Incident response documentation",
        "Vendor risk assessment"
      ]
    },
    {
      framework: "ISO 27001",
      controls: [
        "Information security management",
        "Risk treatment tracking",
        "Security awareness monitoring",
        "Continuous improvement metrics"
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
                SentraCore Endpoint Detection & Response
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Lightweight EDR solution with explainable AI detection, specifically optimized 
                for small and medium businesses with limited IT resources.
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
                src={images.networkSecurity[1]}
                alt="SentraCore Endpoint Detection & Response"
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
              SMB-Optimized Endpoint Security
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Enterprise-grade protection designed specifically for organizations with limited IT resources 
              and budget constraints, without compromising on security effectiveness.
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

      {/* Detection Capabilities */}
      <section className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Advanced Threat Detection
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Multi-layered detection engine combining signature-based, behavioral, and AI-powered analysis 
              for comprehensive threat coverage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {detectionCapabilities.map((capability, index) => (
              <motion.div
                key={capability.category}
                className="bg-white rounded-xl shadow-lg p-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-bold text-lg text-[hsl(var(--tecastra-darkblue))]">
                    {capability.category}
                  </h3>
                  <span className="px-3 py-1 bg-[hsl(var(--tecastra-teal))] text-white text-xs rounded-full">
                    {capability.effectiveness}
                  </span>
                </div>
                <ul className="space-y-2">
                  {capability.techniques.map((technique, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                      <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{technique}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SMB Advantages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Built for Small & Medium Business Success
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Addressing the unique challenges SMBs face in implementing enterprise-grade cybersecurity 
              with limited resources and expertise.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {smb_advantages.map((advantage, index) => (
              <motion.div
                key={advantage.challenge}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-[hsl(var(--tecastra-gold))] mr-3" />
                  <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))]">
                    {advantage.challenge}
                  </h3>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-[hsl(var(--tecastra-teal))] mb-2">SentraCore Solution: {advantage.solution}</h4>
                  <p className="text-[hsl(var(--tecastra-darkgray))] mb-4">{advantage.description}</p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))]">Measurable Benefits:</h4>
                  {advantage.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))]" />
                      <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Scenarios */}
      <section className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Flexible Deployment Options
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Scalable security solutions that grow with your business, from startup to enterprise.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {deploymentScenarios.map((scenario, index) => (
              <motion.div
                key={scenario.scenario}
                className="bg-white rounded-xl shadow-lg p-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))] mb-4">
                  {scenario.scenario}
                </h3>
                <p className="text-[hsl(var(--tecastra-darkgray))] mb-6">{scenario.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {scenario.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                        <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-[hsl(var(--tecastra-gray))] p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">ROI:</span>
                    <span className="text-sm font-medium text-[hsl(var(--tecastra-teal))]">{scenario.roi}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">Deployment:</span>
                    <span className="text-sm font-medium text-[hsl(var(--tecastra-teal))]">{scenario.deployment}</span>
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
              Compliance & Regulatory Support
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Built-in compliance controls and automated reporting for major regulatory frameworks.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={framework.framework}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="font-heading font-bold text-lg text-[hsl(var(--tecastra-darkblue))] mb-4">
                  {framework.framework}
                </h3>
                <ul className="space-y-2">
                  {framework.controls.map((control, i) => (
                    <li key={i} className="flex items-start">
                      <Shield className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
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
              Protect Your Business with Enterprise-Grade Security
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience SentraCore's lightweight, intelligent endpoint protection designed specifically 
              for small and medium businesses. Get enterprise security without the complexity.
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

export default SentraCore;