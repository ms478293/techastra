import { motion } from 'framer-motion';
import { images } from '@/assets/images';
import { Check, Zap, Settings, BarChart3, Clock, Network, Shield, Eye, Target, Users } from 'lucide-react';
import { Link } from 'wouter';

const FlowOps = () => {
  const keyFeatures = [
    {
      icon: Zap,
      title: "Automated Incident Response",
      description: "Intelligent automation that responds to security incidents in seconds, executing pre-defined playbooks and coordinating response activities across your entire security infrastructure."
    },
    {
      icon: Settings,
      title: "No-Code Workflow Builder",
      description: "Visual workflow designer that enables security teams to create sophisticated automation without programming knowledge, dramatically reducing time-to-automation from weeks to hours."
    },
    {
      icon: Network,
      title: "Universal Integration Platform",
      description: "Native integrations with 200+ security tools and enterprise applications, enabling seamless data flow and coordinated actions across your entire technology stack."
    },
    {
      icon: BarChart3,
      title: "Intelligence-Driven Analytics",
      description: "Advanced analytics and machine learning that continuously optimize workflows, predict security outcomes, and provide actionable insights for security operations improvement."
    }
  ];

  const automationCapabilities = [
    {
      capability: "Threat Detection & Analysis",
      description: "Automated threat hunting and analysis with intelligent correlation",
      workflows: [
        "Automated IOC enrichment from multiple threat intelligence feeds",
        "Behavioral analysis correlation across endpoints and network",
        "Threat actor attribution and campaign mapping",
        "Risk scoring based on organizational context",
        "Automated threat hunting query generation"
      ],
      timeReduction: "90% faster threat analysis",
      accuracy: "95% reduction in false positives"
    },
    {
      capability: "Incident Response Orchestration",
      description: "End-to-end incident response automation with stakeholder coordination",
      workflows: [
        "Automatic incident classification and severity assignment",
        "Stakeholder notification with customized communication",
        "Evidence collection and forensic data preservation",
        "Containment actions across multiple security tools",
        "Recovery and lessons learned documentation"
      ],
      timeReduction: "85% faster incident response",
      accuracy: "100% consistent response procedures"
    },
    {
      capability: "Vulnerability Management",
      description: "Automated vulnerability assessment and remediation coordination",
      workflows: [
        "Continuous vulnerability scanning and assessment",
        "Risk-based vulnerability prioritization",
        "Automated patch deployment coordination",
        "Vulnerability tracking and reporting",
        "Compliance validation and documentation"
      ],
      timeReduction: "70% faster vulnerability remediation",
      accuracy: "99% patch deployment success rate"
    },
    {
      capability: "Compliance Automation",
      description: "Automated compliance monitoring and reporting across frameworks",
      workflows: [
        "Continuous compliance posture monitoring",
        "Automated evidence collection and documentation",
        "Control effectiveness validation",
        "Audit preparation and response automation",
        "Compliance dashboard and reporting"
      ],
      timeReduction: "80% faster compliance reporting",
      accuracy: "100% audit trail completeness"
    }
  ];

  const playbookTemplates = [
    {
      category: "Malware Response",
      playbooks: [
        "Ransomware Detection & Containment",
        "Banking Trojan Response",
        "Advanced Persistent Threat (APT) Response",
        "Cryptomining Detection & Removal",
        "Fileless Malware Investigation"
      ],
      complexity: "Advanced",
      avgExecutionTime: "15 minutes",
      description: "Comprehensive malware response with automated containment and forensics"
    },
    {
      category: "Phishing & Email Security",
      playbooks: [
        "Phishing Email Investigation",
        "Business Email Compromise Response",
        "Credential Harvesting Detection",
        "Email-based Malware Response",
        "Brand Impersonation Investigation"
      ],
      complexity: "Intermediate",
      avgExecutionTime: "8 minutes",
      description: "Email security incident response with user protection and awareness"
    },
    {
      category: "Network Security",
      playbooks: [
        "DDoS Attack Response",
        "Network Intrusion Investigation",
        "Lateral Movement Detection",
        "DNS Tunneling Response",
        "Network Reconnaissance Detection"
      ],
      complexity: "Advanced",
      avgExecutionTime: "20 minutes",
      description: "Network-based threat detection and response automation"
    },
    {
      category: "Data Protection",
      playbooks: [
        "Data Exfiltration Response",
        "Insider Threat Investigation",
        "Data Loss Prevention Alert Response",
        "Privacy Breach Response",
        "Intellectual Property Protection"
      ],
      complexity: "Expert",
      avgExecutionTime: "30 minutes",
      description: "Data-centric security incident response with legal compliance"
    }
  ];

  const integrationEcosystem = [
    {
      category: "SIEM & Analytics",
      tools: ["Splunk", "QRadar", "ArcSight", "Sentinel", "LogRhythm", "Sumo Logic"],
      integrations: "Bi-directional data exchange with automated query execution",
      capabilities: [
        "Automated alert correlation and enrichment",
        "Custom dashboard and visualization creation",
        "Search query automation and optimization",
        "Log data analysis and pattern detection"
      ]
    },
    {
      category: "Endpoint Security",
      tools: ["CrowdStrike", "SentinelOne", "Carbon Black", "Defender ATP", "Cylance"],
      integrations: "Real-time endpoint control and forensics automation",
      capabilities: [
        "Automated endpoint isolation and remediation",
        "Forensic data collection and analysis",
        "Threat hunting automation across endpoints",
        "Patch deployment and configuration management"
      ]
    },
    {
      category: "Network Security",
      tools: ["Palo Alto", "Fortinet", "Cisco", "Check Point", "Juniper", "F5"],
      integrations: "Network policy automation and traffic analysis",
      capabilities: [
        "Automated firewall rule creation and updates",
        "Network segmentation and access control",
        "Traffic analysis and anomaly detection",
        "VPN and remote access management"
      ]
    },
    {
      category: "Cloud & DevOps",
      tools: ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform"],
      integrations: "Cloud security automation and infrastructure management",
      capabilities: [
        "Cloud resource security automation",
        "Container security and compliance",
        "Infrastructure-as-code security scanning",
        "DevSecOps pipeline integration"
      ]
    }
  ];

  const performanceMetrics = [
    {
      metric: "Mean Time to Response (MTTR)",
      value: "3 minutes",
      improvement: "85% faster than manual response",
      description: "Automated playbook execution dramatically reduces response times"
    },
    {
      metric: "Workflow Automation Coverage",
      value: "95%",
      improvement: "90% of security tasks automated",
      description: "Comprehensive automation across security operations"
    },
    {
      metric: "False Positive Reduction",
      value: "80%",
      improvement: "Intelligent correlation and context",
      description: "Machine learning reduces alert fatigue and improves efficiency"
    },
    {
      metric: "Analyst Productivity",
      value: "300%",
      improvement: "Triple analyst effectiveness",
      description: "Automation enables focus on high-value strategic activities"
    },
    {
      metric: "Integration Success Rate",
      value: "99.8%",
      improvement: "Reliable cross-platform orchestration",
      description: "Robust integration platform ensures consistent automation"
    },
    {
      metric: "Compliance Efficiency",
      value: "75% faster",
      improvement: "Automated compliance workflows",
      description: "Streamlined compliance processes with automated evidence collection"
    }
  ];

  const useCaseScenarios = [
    {
      scenario: "Fortune 500 Financial Institution",
      challenge: "Manual incident response taking 4+ hours with inconsistent procedures",
      implementation: [
        "Deployed 50+ automated playbooks for financial sector threats",
        "Integrated with 25 security tools across global infrastructure",
        "Automated compliance reporting for SOX and PCI DSS",
        "Implemented threat intelligence automation"
      ],
      results: [
        "95% reduction in incident response time",
        "Zero compliance violations in 18 months",
        "50% reduction in security operations costs",
        "$3.2M annual savings from automation"
      ]
    },
    {
      scenario: "Healthcare System with 15 Hospitals",
      challenge: "HIPAA compliance requirements with limited security staff",
      implementation: [
        "Automated patient data breach response workflows",
        "Implemented medical device security monitoring",
        "Created HIPAA compliance automation framework",
        "Deployed 24/7 automated threat monitoring"
      ],
      results: [
        "Zero patient data breaches",
        "80% reduction in compliance audit time",
        "99.9% system availability maintained",
        "HIPAA compliance automation achieved"
      ]
    },
    {
      scenario: "Global Manufacturing Company",
      challenge: "OT/IT convergence security with production uptime requirements",
      implementation: [
        "Industrial control system security automation",
        "OT network segmentation and monitoring",
        "Automated threat response with production awareness",
        "Supply chain security monitoring"
      ],
      results: [
        "Zero production downtime from security incidents",
        "90% improvement in OT security visibility",
        "50% faster threat detection in industrial networks",
        "Complete supply chain threat monitoring"
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
                FlowOps Security Orchestration
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Advanced SOAR platform with no-code automation, universal integrations, 
                and intelligence-driven analytics - achieving 85% faster incident response 
                and 300% analyst productivity improvement.
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
                alt="FlowOps Security Orchestration"
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
              Advanced Security Orchestration Features
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Next-generation SOAR platform that transforms security operations through intelligent automation and seamless integration.
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

      {/* Automation Capabilities */}
      <section className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Comprehensive Automation Capabilities
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              End-to-end security operations automation covering threat detection, incident response, and compliance management.
            </p>
          </motion.div>

          <div className="space-y-8">
            {automationCapabilities.map((capability, index) => (
              <motion.div
                key={capability.capability}
                className="bg-white rounded-xl shadow-lg p-8"
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
                      <p className="text-[hsl(var(--tecastra-darkgray))]">{capability.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-[hsl(var(--tecastra-teal))]">{capability.timeReduction}</div>
                    <div className="text-xs text-[hsl(var(--tecastra-darkgray))]">{capability.accuracy}</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Automated Workflows</h4>
                  <ul className="space-y-2 grid md:grid-cols-2 gap-4">
                    {capability.workflows.map((workflow, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                        <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{workflow}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Playbook Templates */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Pre-Built Playbook Templates
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Comprehensive library of expert-designed playbooks covering all major security scenarios and incident types.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {playbookTemplates.map((template, index) => (
              <motion.div
                key={template.category}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))]">
                    {template.category}
                  </h3>
                  <div className="text-right">
                    <div className="text-sm font-medium text-[hsl(var(--tecastra-teal))]">{template.complexity}</div>
                    <div className="text-xs text-[hsl(var(--tecastra-darkgray))]">{template.avgExecutionTime}</div>
                  </div>
                </div>
                
                <p className="text-[hsl(var(--tecastra-darkgray))] mb-6">{template.description}</p>
                
                <div>
                  <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Available Playbooks</h4>
                  <ul className="space-y-2">
                    {template.playbooks.map((playbook, i) => (
                      <li key={i} className="flex items-start">
                        <Target className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-gold))] flex-shrink-0" />
                        <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{playbook}</span>
                      </li>
                    ))}
                  </ul>
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
              Measurable improvements in response times, automation coverage, and analyst productivity.
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
                  <div className="bg-green-50 p-3 rounded-lg text-center">
                    <p className="text-sm font-medium text-green-600">{metric.improvement}</p>
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

      {/* Use Case Scenarios */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Real-World Success Stories
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Proven results across industries with measurable improvements in security operations and business outcomes.
            </p>
          </motion.div>

          <div className="space-y-8">
            {useCaseScenarios.map((useCase, index) => (
              <motion.div
                key={useCase.scenario}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="font-heading font-bold text-2xl text-[hsl(var(--tecastra-darkblue))] mb-4">
                  {useCase.scenario}
                </h3>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-red-600 mb-2">Challenge</h4>
                      <p className="text-[hsl(var(--tecastra-darkgray))]">{useCase.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Implementation</h4>
                      <ul className="space-y-2">
                        {useCase.implementation.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <Settings className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                            <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Measurable Results</h4>
                    <ul className="space-y-2">
                      {useCase.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <BarChart3 className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-gold))] flex-shrink-0" />
                          <span className="text-sm font-medium text-[hsl(var(--tecastra-teal))]">{result}</span>
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

      {/* CTA Section */}
      <section className="py-16 bg-[hsl(var(--tecastra-darkblue))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
              Transform Your Security Operations
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the power of intelligent security orchestration with FlowOps. 
              Achieve 85% faster incident response and 300% analyst productivity improvement.
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

export default FlowOps;