import { motion } from 'framer-motion';
import { images } from '@/assets/images';
import { Check, Mail, Shield, Brain, Users, BarChart3, AlertTriangle, Lock, Eye, Zap } from 'lucide-react';
import { Link } from 'wouter';

const MailShield360 = () => {
  const keyFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Phishing Detection",
      description: "Advanced machine learning algorithms analyze email content, sender reputation, and behavioral patterns to identify sophisticated phishing attempts with 99.8% accuracy."
    },
    {
      icon: Users,
      title: "Integrated Security Training",
      description: "Contextual security awareness training delivered automatically when users encounter suspicious emails, with personalized learning paths based on risk behavior."
    },
    {
      icon: Shield,
      title: "Business Email Compromise Prevention",
      description: "Advanced protection against CEO fraud, vendor impersonation, and wire transfer attacks using behavioral analysis and domain reputation scoring."
    },
    {
      icon: Lock,
      title: "Email Encryption & DLP",
      description: "Automatic encryption of sensitive emails with integrated data loss prevention to protect confidential information and ensure compliance with privacy regulations."
    }
  ];

  const threatProtection = [
    {
      threat: "Advanced Phishing Attacks",
      description: "Sophisticated phishing campaigns using AI-generated content and social engineering",
      detection: [
        "Natural language processing for content analysis",
        "Sender reputation and authentication verification",
        "Link analysis and sandboxing",
        "Image-based phishing detection",
        "Behavioral anomaly identification"
      ],
      effectiveness: "99.8% detection rate with <0.1% false positives"
    },
    {
      threat: "Business Email Compromise",
      description: "CEO fraud, vendor impersonation, and financial wire transfer attacks",
      detection: [
        "Executive impersonation detection",
        "Vendor email authentication",
        "Financial request flagging",
        "Domain similarity analysis",
        "Communication pattern analysis"
      ],
      effectiveness: "95% reduction in successful BEC attacks"
    },
    {
      threat: "Malware & Ransomware",
      description: "Email-borne malware including ransomware, trojans, and advanced persistent threats",
      detection: [
        "Multi-engine malware scanning",
        "Behavioral analysis sandboxing",
        "Zero-day exploit detection",
        "Macro and script analysis",
        "Encrypted attachment inspection"
      ],
      effectiveness: "99.9% malware blocking rate"
    },
    {
      threat: "Data Exfiltration",
      description: "Unauthorized transmission of sensitive data via email",
      detection: [
        "Content-based data classification",
        "Pattern recognition for sensitive data",
        "Encryption enforcement policies",
        "External sharing controls",
        "Compliance violation prevention"
      ],
      effectiveness: "Zero data breaches via email"
    }
  ];

  const trainingProgram = [
    {
      component: "Phishing Simulation",
      description: "Realistic phishing simulations tailored to current threat landscape",
      features: [
        "Industry-specific phishing templates",
        "Seasonal and trending attack themes",
        "Difficulty progression based on user performance",
        "Real-time reporting and analytics",
        "Automated remedial training"
      ],
      frequency: "Weekly simulations with monthly campaigns",
      metrics: "Average 75% improvement in phishing recognition"
    },
    {
      component: "Interactive Micro-Learning",
      description: "Bite-sized security lessons delivered in context",
      features: [
        "Just-in-time training when risks are detected",
        "Gamification with points and leaderboards",
        "Mobile-friendly learning modules",
        "Role-based training content",
        "Progress tracking and certifications"
      ],
      frequency: "Daily micro-lessons (3-5 minutes)",
      metrics: "90% completion rate with 85% knowledge retention"
    },
    {
      component: "Security Culture Building",
      description: "Organization-wide security awareness and culture transformation",
      features: [
        "Executive security briefings",
        "Department-specific training tracks",
        "Security champion programs",
        "Incident simulation exercises",
        "Continuous culture assessment"
      ],
      frequency: "Monthly culture assessments and quarterly programs",
      metrics: "60% improvement in security culture maturity"
    }
  ];

  const complianceFrameworks = [
    {
      framework: "GDPR",
      requirements: [
        "Data protection by design and default",
        "Breach notification within 72 hours",
        "Data subject rights management",
        "Privacy impact assessments"
      ],
      mailshieldCapabilities: [
        "Automatic encryption for EU data",
        "Real-time breach detection and reporting",
        "Data subject request automation",
        "Privacy-compliant email archiving"
      ]
    },
    {
      framework: "HIPAA",
      requirements: [
        "Protected health information (PHI) safeguards",
        "Administrative, physical, and technical safeguards",
        "Breach notification requirements",
        "Business associate agreements"
      ],
      mailshieldCapabilities: [
        "PHI detection and encryption",
        "Healthcare-specific DLP policies",
        "HIPAA-compliant email retention",
        "Automated compliance reporting"
      ]
    },
    {
      framework: "SOX",
      requirements: [
        "Financial data protection",
        "Internal controls over financial reporting",
        "Executive certification requirements",
        "Audit trail maintenance"
      ],
      mailshieldCapabilities: [
        "Financial data classification",
        "Executive email monitoring",
        "Immutable audit logs",
        "SOX compliance dashboards"
      ]
    },
    {
      framework: "PCI DSS",
      requirements: [
        "Cardholder data protection",
        "Network security implementation",
        "Vulnerability management",
        "Access control measures"
      ],
      mailshieldCapabilities: [
        "Credit card data detection",
        "PCI-compliant email encryption",
        "Cardholder data quarantine",
        "PCI DSS reporting automation"
      ]
    }
  ];

  const deploymentOptions = [
    {
      option: "Cloud-Native Deployment",
      description: "Fully managed cloud service with global infrastructure",
      advantages: [
        "Zero infrastructure management",
        "Automatic updates and patches",
        "Global threat intelligence",
        "Elastic scaling",
        "99.99% uptime SLA"
      ],
      timeframe: "24-48 hours deployment",
      ideal: "Organizations seeking minimal IT overhead"
    },
    {
      option: "Hybrid Integration",
      description: "Integration with existing on-premises email infrastructure",
      advantages: [
        "Leverage existing investments",
        "Granular control over data",
        "Custom integration options",
        "Phased migration capability",
        "Compliance with data residency"
      ],
      timeframe: "1-2 weeks deployment",
      ideal: "Enterprises with complex email environments"
    },
    {
      option: "API-First Integration",
      description: "Seamless integration via comprehensive REST APIs",
      advantages: [
        "Custom application integration",
        "Workflow automation",
        "Third-party SIEM integration",
        "Custom reporting and analytics",
        "Developer-friendly implementation"
      ],
      timeframe: "2-4 weeks for custom integration",
      ideal: "Organizations with custom security workflows"
    }
  ];

  const performanceMetrics = [
    {
      metric: "Phishing Detection Rate",
      value: "99.8%",
      benchmark: "Industry average: 95%",
      description: "Advanced AI algorithms achieve superior detection accuracy"
    },
    {
      metric: "False Positive Rate",
      value: "<0.1%",
      benchmark: "Industry average: 2-5%",
      description: "Minimized business disruption with precise threat identification"
    },
    {
      metric: "Email Processing Speed",
      value: "<100ms",
      benchmark: "Industry average: 500ms",
      description: "Real-time email security without performance impact"
    },
    {
      metric: "User Training Effectiveness",
      value: "75% improvement",
      benchmark: "Industry average: 45%",
      description: "Measurable improvement in security awareness and behavior"
    },
    {
      metric: "Compliance Achievement",
      value: "100%",
      benchmark: "Industry average: 85%",
      description: "Full regulatory compliance across all supported frameworks"
    },
    {
      metric: "Customer Satisfaction",
      value: "96% CSAT",
      benchmark: "Industry average: 78%",
      description: "High satisfaction with platform usability and effectiveness"
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
                MailShield 360 Email Security
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Comprehensive email security platform with AI-powered threat detection, 
                integrated security training, and automated compliance - achieving 99.8% 
                phishing detection with zero false positives.
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
                src={images.cybersecurityProfessionals[2]}
                alt="MailShield 360 Email Security"
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
              Advanced Email Security Features
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Next-generation email protection combining AI-powered threat detection with 
              comprehensive security awareness training.
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

      {/* Threat Protection */}
      <section className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Comprehensive Threat Protection
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Multi-layered protection against the full spectrum of email-borne threats and attacks.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {threatProtection.map((threat, index) => (
              <motion.div
                key={threat.threat}
                className="bg-white rounded-xl shadow-lg p-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))]">
                    {threat.threat}
                  </h3>
                  <span className="px-3 py-1 bg-[hsl(var(--tecastra-teal))] text-white text-sm rounded-full">
                    {threat.effectiveness}
                  </span>
                </div>
                
                <p className="text-[hsl(var(--tecastra-darkgray))] mb-6">{threat.description}</p>
                
                <div>
                  <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Detection Methods</h4>
                  <ul className="space-y-2">
                    {threat.detection.map((method, i) => (
                      <li key={i} className="flex items-start">
                        <Eye className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                        <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{method}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Program */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Integrated Security Training Program
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Transform your workforce into a human firewall with comprehensive security awareness training.
            </p>
          </motion.div>

          <div className="space-y-8">
            {trainingProgram.map((component, index) => (
              <motion.div
                key={component.component}
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
                      {component.component}
                    </h3>
                    <p className="text-[hsl(var(--tecastra-teal))] font-medium">{component.frequency}</p>
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
                  
                  <div className="bg-[hsl(var(--tecastra-gray))] p-6 rounded-lg">
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Proven Results</h4>
                    <p className="text-sm text-[hsl(var(--tecastra-teal))] font-medium">{component.metrics}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Automated Compliance Management
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Built-in compliance automation for major regulatory frameworks and industry standards.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={framework.framework}
                className="bg-white rounded-xl shadow-lg p-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))] mb-6">
                  {framework.framework} Compliance
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {framework.requirements.map((req, i) => (
                        <li key={i} className="flex items-start">
                          <AlertTriangle className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-gold))] flex-shrink-0" />
                          <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">MailShield Capabilities</h4>
                    <ul className="space-y-2">
                      {framework.mailshieldCapabilities.map((capability, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                          <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{capability}</span>
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

      {/* Performance Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Industry-Leading Performance
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Measurable superior performance across all critical email security metrics.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
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
                    <p className="text-xs text-blue-600 font-medium">{metric.benchmark}</p>
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

      {/* Deployment Options */}
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
              Choose the deployment model that best fits your organization's requirements and constraints.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {deploymentOptions.map((option, index) => (
              <motion.div
                key={option.option}
                className="bg-white rounded-xl shadow-lg p-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))] mb-4">
                  {option.option}
                </h3>
                
                <p className="text-[hsl(var(--tecastra-darkgray))] mb-6">{option.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">Key Advantages</h4>
                    <ul className="space-y-1">
                      {option.advantages.map((advantage, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                          <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-[hsl(var(--tecastra-gray))] p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-[hsl(var(--tecastra-darkblue))]">Deployment Time:</span>
                      <span className="text-sm text-[hsl(var(--tecastra-teal))]">{option.timeframe}</span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[hsl(var(--tecastra-darkblue))]">Ideal For:</span>
                      <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">{option.ideal}</p>
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
              Secure Your Email Communications
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience next-generation email security with MailShield 360. 
              Protect against advanced threats while training your workforce to be your strongest defense.
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

export default MailShield360;