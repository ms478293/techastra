import { motion } from 'framer-motion';
import { images } from '@/assets/images';
import { Check, Brain, Globe, AlertTriangle, Target, BarChart3, Zap, Eye, Network, Shield } from 'lucide-react';
import { Link } from 'wouter';

const PulseIQ = () => {
  const keyFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Threat Analysis",
      description: "Advanced machine learning algorithms process millions of threat indicators daily, identifying emerging threats and attack patterns with 99.7% accuracy and minimal false positives."
    },
    {
      icon: Globe,
      title: "Global Intelligence Network",
      description: "Comprehensive threat intelligence from 50+ premium feeds, government sources, and proprietary research, providing real-time insights into global threat landscape."
    },
    {
      icon: Target,
      title: "Contextual Threat Scoring",
      description: "Dynamic threat scoring that considers your specific industry, infrastructure, and risk profile to prioritize threats most relevant to your organization."
    },
    {
      icon: Zap,
      title: "Automated Response Integration",
      description: "Seamless integration with security tools for automated threat blocking, incident creation, and response orchestration based on intelligence insights."
    }
  ];

  const intelligenceSources = [
    {
      category: "Commercial Threat Feeds",
      sources: [
        "Recorded Future threat intelligence",
        "ThreatConnect indicators and analytics",
        "FireEye/Mandiant APT intelligence",
        "CrowdStrike Falcon Intelligence",
        "Microsoft Threat Intelligence"
      ],
      coverage: "Real-time IOCs, TTPs, and attribution data",
      updateFrequency: "Every 5 minutes"
    },
    {
      category: "Government & Law Enforcement",
      sources: [
        "US-CERT alerts and advisories",
        "FBI IC3 threat bulletins",
        "CISA cybersecurity advisories",
        "International CERT networks",
        "Industry-specific threat sharing"
      ],
      coverage: "Nation-state threats and critical vulnerabilities",
      updateFrequency: "Real-time alerts"
    },
    {
      category: "Open Source Intelligence",
      sources: [
        "Security researcher publications",
        "Vulnerability databases (CVE, NVD)",
        "Social media threat indicators",
        "Dark web monitoring",
        "Academic security research"
      ],
      coverage: "Emerging threats and zero-day indicators",
      updateFrequency: "Continuous monitoring"
    },
    {
      category: "Proprietary Research",
      sources: [
        "TecAstra threat hunting team",
        "Honeypot and deception networks",
        "Customer telemetry analysis",
        "Malware reverse engineering",
        "Attack simulation findings"
      ],
      coverage: "Exclusive threat insights and early warnings",
      updateFrequency: "Daily research updates"
    }
  ];

  const threatCategories = [
    {
      category: "Advanced Persistent Threats (APTs)",
      description: "Nation-state and sophisticated criminal groups targeting specific organizations",
      indicators: [
        "Command and control infrastructure",
        "Custom malware signatures",
        "Tactics, techniques, and procedures (TTPs)",
        "Attribution indicators and actor profiles",
        "Campaign tracking and timeline analysis"
      ],
      coverage: "200+ known APT groups",
      accuracy: "95% attribution confidence"
    },
    {
      category: "Cybercrime & Financial Threats",
      description: "Criminal operations focused on financial gain and data theft",
      indicators: [
        "Banking trojan indicators",
        "Ransomware family signatures",
        "Payment card skimming networks",
        "Cryptocurrency theft campaigns",
        "Business email compromise patterns"
      ],
      coverage: "500+ malware families tracked",
      accuracy: "99.2% detection rate"
    },
    {
      category: "Supply Chain & Third-Party Risks",
      description: "Threats targeting software supply chains and vendor ecosystems",
      indicators: [
        "Compromised software packages",
        "Vendor security incidents",
        "Supply chain attack patterns",
        "Third-party risk assessments",
        "Software dependency vulnerabilities"
      ],
      coverage: "10,000+ vendors monitored",
      accuracy: "Early warning 48 hours average"
    },
    {
      category: "Emerging & Zero-Day Threats",
      description: "Novel attack methods and previously unknown vulnerabilities",
      indicators: [
        "Zero-day exploit indicators",
        "Novel attack techniques",
        "Emerging malware families",
        "New vulnerability exploitation",
        "Threat actor tool evolution"
      ],
      coverage: "Real-time threat hunting",
      accuracy: "24-hour average detection time"
    }
  ];

  const analyticsCapabilities = [
    {
      capability: "Threat Actor Profiling",
      description: "Comprehensive analysis of threat actor motivations, capabilities, and targeting patterns",
      features: [
        "Actor attribution and tracking",
        "Motivation and objective analysis",
        "Capability assessment and evolution",
        "Target industry and geography mapping",
        "Campaign timeline reconstruction"
      ],
      output: "Detailed threat actor dossiers with actionable intelligence",
      value: "Predictive threat modeling and defense planning"
    },
    {
      capability: "Attack Surface Analysis",
      description: "Continuous monitoring of your organization's external attack surface",
      features: [
        "Digital asset discovery and cataloging",
        "Vulnerability exposure assessment",
        "Brand and domain monitoring",
        "Social media and deep web surveillance",
        "Third-party risk evaluation"
      ],
      output: "Attack surface risk reports with remediation priorities",
      value: "Proactive risk reduction and exposure minimization"
    },
    {
      capability: "Threat Hunting Support",
      description: "Intelligence-driven threat hunting with customized indicators and hypotheses",
      features: [
        "Custom IOC generation for your environment",
        "Threat hunting playbook development",
        "Hypothesis-driven investigation support",
        "Historical threat analysis",
        "Incident correlation and attribution"
      ],
      output: "Hunting queries and investigation frameworks",
      value: "Enhanced threat detection and incident response"
    },
    {
      capability: "Strategic Intelligence Reporting",
      description: "Executive-level threat landscape analysis and strategic recommendations",
      features: [
        "Industry-specific threat trends",
        "Geopolitical threat analysis",
        "Regulatory and compliance impacts",
        "Strategic risk assessments",
        "Investment prioritization guidance"
      ],
      output: "Executive briefings and strategic reports",
      value: "Informed security strategy and resource allocation"
    }
  ];

  const integrationCapabilities = [
    {
      platform: "SIEM Platforms",
      integrations: ["Splunk", "QRadar", "ArcSight", "Sentinel", "LogRhythm"],
      capabilities: [
        "Real-time IOC feeds and updates",
        "Threat intelligence enrichment",
        "Automated alert correlation",
        "Custom dashboard integration",
        "Historical threat data analysis"
      ],
      value: "Enhanced detection accuracy and reduced false positives"
    },
    {
      platform: "Security Orchestration",
      integrations: ["Phantom", "Demisto", "Swimlane", "ThreatConnect", "XSOAR"],
      capabilities: [
        "Automated threat blocking workflows",
        "Incident enrichment and scoring",
        "Response playbook triggers",
        "IOC reputation checking",
        "Threat hunting automation"
      ],
      value: "Accelerated incident response and remediation"
    },
    {
      platform: "Endpoint Protection",
      integrations: ["CrowdStrike", "SentinelOne", "Carbon Black", "Defender", "Cylance"],
      capabilities: [
        "IOC deployment and monitoring",
        "Behavioral analysis enhancement",
        "Custom detection rule creation",
        "Threat hunting query generation",
        "Incident investigation support"
      ],
      value: "Improved endpoint threat detection and response"
    },
    {
      platform: "Network Security",
      integrations: ["Palo Alto", "Fortinet", "Cisco", "Check Point", "Juniper"],
      capabilities: [
        "Automated firewall rule updates",
        "IPS signature enhancement",
        "DNS security integration",
        "Traffic analysis correlation",
        "Network threat visualization"
      ],
      value: "Real-time network protection and visibility"
    }
  ];

  const industryIntelligence = [
    {
      industry: "Financial Services",
      threats: ["Banking trojans", "ATM attacks", "SWIFT network threats", "Regulatory compliance"],
      intelligence: [
        "Financial-specific malware tracking",
        "Regulatory threat bulletins",
        "Fraud pattern analysis",
        "Payment system vulnerabilities"
      ],
      value: "Average $2.1M saved per prevented attack"
    },
    {
      industry: "Healthcare",
      threats: ["Ransomware", "Medical device attacks", "PHI theft", "HIPAA violations"],
      intelligence: [
        "Healthcare-targeted threat campaigns",
        "Medical device vulnerability alerts",
        "PHI exposure monitoring",
        "HIPAA compliance threat mapping"
      ],
      value: "Zero patient data breaches with proactive intelligence"
    },
    {
      industry: "Critical Infrastructure",
      threats: ["Nation-state attacks", "ICS/SCADA threats", "Supply chain attacks", "Physical security"],
      intelligence: [
        "Infrastructure-specific APT tracking",
        "ICS vulnerability intelligence",
        "Supply chain threat monitoring",
        "Physical-cyber threat correlation"
      ],
      value: "100% uptime maintenance during threat campaigns"
    },
    {
      industry: "Technology",
      threats: ["Intellectual property theft", "Supply chain attacks", "Zero-day exploitation", "Developer targeting"],
      intelligence: [
        "IP theft campaign tracking",
        "Developer tool vulnerabilities",
        "Source code exposure monitoring",
        "Technology sector threat trends"
      ],
      value: "Protected $50M+ in intellectual property"
    }
  ];

  const performanceMetrics = [
    {
      metric: "Threat Detection Accuracy",
      value: "99.7%",
      comparison: "Industry average: 85%",
      description: "AI-powered analysis achieves superior threat identification"
    },
    {
      metric: "False Positive Rate",
      value: "<0.5%",
      comparison: "Industry average: 15%",
      description: "Contextual scoring minimizes irrelevant alerts"
    },
    {
      metric: "Intelligence Freshness",
      value: "5 minutes",
      comparison: "Industry average: 2-4 hours",
      description: "Real-time threat intelligence updates and distribution"
    },
    {
      metric: "Threat Coverage",
      value: "200+ APT groups",
      comparison: "Typical coverage: 50-100 groups",
      description: "Comprehensive threat actor tracking and attribution"
    },
    {
      metric: "Integration Speed",
      value: "15 minutes",
      comparison: "Industry average: 2-4 weeks",
      description: "Rapid deployment across security infrastructure"
    },
    {
      metric: "Customer Satisfaction",
      value: "97% CSAT",
      comparison: "Industry average: 75%",
      description: "High satisfaction with intelligence quality and relevance"
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
                PulseIQ Threat Intelligence
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                AI-powered threat intelligence platform with global intelligence network, 
                contextual threat scoring, and automated response integration - achieving 
                99.7% threat detection accuracy with real-time updates.
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
                src={images.networkSecurity[1]}
                alt="PulseIQ Threat Intelligence"
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
              Advanced Threat Intelligence Capabilities
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Next-generation threat intelligence combining AI analysis with global intelligence sources 
              for actionable security insights.
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

      {/* Intelligence Sources */}
      <section className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Comprehensive Intelligence Sources
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Global intelligence network combining premium commercial feeds, government sources, 
              and proprietary research for comprehensive threat coverage.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {intelligenceSources.map((source, index) => (
              <motion.div
                key={source.category}
                className="bg-white rounded-xl shadow-lg p-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))]">
                    {source.category}
                  </h3>
                  <span className="px-3 py-1 bg-[hsl(var(--tecastra-teal))] text-white text-sm rounded-full">
                    {source.updateFrequency}
                  </span>
                </div>
                
                <p className="text-[hsl(var(--tecastra-darkgray))] mb-6">{source.coverage}</p>
                
                <div>
                  <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Key Sources</h4>
                  <ul className="space-y-2">
                    {source.sources.map((src, i) => (
                      <li key={i} className="flex items-start">
                        <Globe className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                        <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{src}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Comprehensive Threat Coverage
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Complete threat landscape coverage from nation-state actors to cybercriminal organizations 
              with detailed indicators and attribution intelligence.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {threatCategories.map((category, index) => (
              <motion.div
                key={category.category}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))]">
                    {category.category}
                  </h3>
                  <div className="text-right">
                    <div className="text-sm font-medium text-[hsl(var(--tecastra-teal))]">{category.coverage}</div>
                    <div className="text-xs text-[hsl(var(--tecastra-darkgray))]">{category.accuracy}</div>
                  </div>
                </div>
                
                <p className="text-[hsl(var(--tecastra-darkgray))] mb-6">{category.description}</p>
                
                <div>
                  <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Intelligence Indicators</h4>
                  <ul className="space-y-2">
                    {category.indicators.map((indicator, i) => (
                      <li key={i} className="flex items-start">
                        <AlertTriangle className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-gold))] flex-shrink-0" />
                        <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{indicator}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Capabilities */}
      <section className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Advanced Analytics & Insights
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Deep analytical capabilities transforming raw intelligence into actionable security insights and strategic guidance.
            </p>
          </motion.div>

          <div className="space-y-8">
            {analyticsCapabilities.map((capability, index) => (
              <motion.div
                key={capability.capability}
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
                      {capability.capability}
                    </h3>
                    <p className="text-[hsl(var(--tecastra-darkgray))]">{capability.description}</p>
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {capability.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                          <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-600 mb-2">Output</h4>
                      <p className="text-sm text-blue-800">{capability.output}</p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-600 mb-2">Business Value</h4>
                      <p className="text-sm text-green-800">{capability.value}</p>
                    </div>
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
              Superior Intelligence Performance
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Industry-leading performance metrics demonstrating the effectiveness and value of PulseIQ threat intelligence.
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
                  <div className="bg-green-50 p-3 rounded-lg text-center">
                    <p className="text-sm font-medium text-green-600">{metric.comparison}</p>
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
              Enhance Your Threat Intelligence
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your security operations with PulseIQ's AI-powered threat intelligence. 
              Achieve 99.7% threat detection accuracy with real-time intelligence updates.
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

export default PulseIQ;