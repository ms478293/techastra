import { motion } from 'framer-motion';
import { images } from '@/assets/images';
import { Check, Shield, Clock, Eye, Users, BarChart3, AlertTriangle, Zap, Phone, Target } from 'lucide-react';
import { Link } from 'wouter';

const ManagedDetectionResponse = () => {
  const serviceComponents = [
    {
      service: "24/7 Security Operations Center",
      description: "Round-the-clock monitoring with dedicated security analysts and advanced threat hunting",
      staffing: "Tier 1, 2, and 3 security analysts with CISSP, GCIH, and GCFA certifications",
      coverage: "24/7/365 with <3 minute detection time and <15 minute response time",
      capabilities: [
        "Real-time security event monitoring across all environments",
        "Advanced correlation and analysis using AI/ML algorithms",
        "Proactive threat hunting using custom playbooks",
        "Incident triage and severity classification",
        "Executive and technical stakeholder notifications"
      ],
      technologies: [
        "SIEM platforms (Splunk, QRadar, Azure Sentinel)",
        "SOAR automation (Phantom, Demisto, ThreatConnect)",
        "Threat intelligence feeds (Recorded Future, ThreatQ)",
        "Endpoint detection and response (CrowdStrike, SentinelOne)",
        "Network traffic analysis (ExtraHop, Darktrace)"
      ],
      sla: {
        detection: "Mean time to detection: <3 minutes",
        response: "Initial response: <15 minutes",
        escalation: "Executive notification: <30 minutes",
        resolution: "P1 incidents: <4 hours to containment"
      }
    },
    {
      service: "Advanced Threat Hunting",
      description: "Proactive threat hunting using behavioral analytics and threat intelligence",
      methodology: "Hypothesis-driven hunting based on MITRE ATT&CK framework",
      frequency: "Weekly proactive hunts with continuous monitoring",
      capabilities: [
        "Behavioral analysis and anomaly detection",
        "Custom threat hunting playbook development",
        "Threat actor campaign analysis and attribution",
        "Indicators of compromise (IoC) development",
        "Threat landscape intelligence and briefings"
      ],
      huntingAreas: [
        "Living-off-the-land techniques and fileless attacks",
        "Advanced persistent threat (APT) campaign detection",
        "Insider threat behavior analysis",
        "Supply chain compromise indicators",
        "Zero-day exploit activity identification"
      ],
      deliverables: [
        "Weekly threat hunting summary reports",
        "Custom IoC feeds and YARA rules",
        "Threat actor tactical analysis",
        "Hunt hypothesis validation reports",
        "Quarterly threat landscape briefings"
      ]
    },
    {
      service: "Incident Response Services",
      description: "Rapid incident response with forensic investigation and recovery support",
      responseModel: "Follow-the-sun coverage with regional response teams",
      expertise: "SANS-certified incident handlers and digital forensics experts",
      capabilities: [
        "Rapid incident containment and eradication",
        "Digital forensics and evidence collection",
        "Malware analysis and reverse engineering",
        "Business continuity and recovery planning",
        "Legal and regulatory compliance support"
      ],
      responseProcess: [
        "Immediate threat containment and system isolation",
        "Forensic imaging and evidence preservation",
        "Root cause analysis and attack timeline reconstruction",
        "Eradication of threats and vulnerability remediation",
        "System recovery and business operations restoration"
      ],
      compliance: [
        "GDPR breach notification requirements",
        "HIPAA incident reporting procedures",
        "SOX financial impact assessment",
        "PCI DSS payment card data compromise response"
      ]
    }
  ];

  const industrySpecialization = [
    {
      industry: "Financial Services",
      threats: ["Financial fraud", "Regulatory compliance", "Customer data protection"],
      expertise: [
        "Banking-specific threat patterns and attack vectors",
        "Regulatory reporting automation (SOX, PCI DSS)",
        "Real-time fraud detection and prevention",
        "Customer notification and communication protocols"
      ],
      results: "Average 95% reduction in false positives, 60% faster compliance reporting",
      caseStudy: "Regional bank prevented $2.3M fraud attempt with real-time detection and automated response"
    },
    {
      industry: "Healthcare",
      threats: ["Patient data breaches", "Medical device security", "Operational disruption"],
      expertise: [
        "HIPAA-compliant incident response procedures",
        "Medical device network monitoring and protection",
        "Patient care continuity during security incidents",
        "Healthcare-specific threat intelligence and analysis"
      ],
      results: "Zero patient data breaches, 99.9% system availability during incidents",
      caseStudy: "Hospital system maintained 100% patient care availability during ransomware attack"
    },
    {
      industry: "Manufacturing",
      threats: ["Industrial espionage", "Production disruption", "Supply chain attacks"],
      expertise: [
        "OT/IT network convergence security monitoring",
        "Industrial control system threat detection",
        "Intellectual property theft prevention",
        "Supply chain security assessment and monitoring"
      ],
      results: "Zero production downtime, 85% reduction in IP theft attempts",
      caseStudy: "Automotive manufacturer detected and stopped nation-state IP theft campaign"
    },
    {
      industry: "Government",
      threats: ["Nation-state attacks", "Critical infrastructure", "Classified information"],
      expertise: [
        "APT campaign detection and attribution",
        "Classified environment security monitoring",
        "Critical infrastructure protection protocols",
        "Inter-agency threat intelligence sharing"
      ],
      results: "100% compliance with federal security requirements",
      caseStudy: "Federal agency detected and neutralized sophisticated APT campaign targeting sensitive data"
    }
  ];

  const serviceMetrics = [
    {
      metric: "Mean Time to Detection (MTTD)",
      current: "< 3 minutes",
      improvement: "85% faster than industry average",
      description: "Advanced analytics and automation enable rapid threat identification"
    },
    {
      metric: "Mean Time to Response (MTTR)",
      current: "< 15 minutes",
      improvement: "70% faster than traditional SOCs",
      description: "Automated playbooks and expert analysts ensure rapid response"
    },
    {
      metric: "False Positive Rate",
      current: "< 2%",
      improvement: "90% reduction vs. legacy SIEM",
      description: "AI-powered correlation reduces alert fatigue and improves efficiency"
    },
    {
      metric: "Threat Detection Accuracy",
      current: "99.7%",
      improvement: "Industry-leading detection rates",
      description: "Combination of signature-based and behavioral detection methods"
    },
    {
      metric: "Customer Satisfaction",
      current: "98% CSAT",
      improvement: "Highest in industry",
      description: "White-glove service with dedicated customer success managers"
    },
    {
      metric: "Compliance Achievement",
      current: "100%",
      improvement: "Zero compliance failures",
      description: "Automated compliance monitoring and reporting across all frameworks"
    }
  ];

  const pricingTiers = [
    {
      tier: "Essential MDR",
      description: "Core 24/7 monitoring and response for small to medium businesses",
      price: "$15,000/month",
      coverage: "Up to 500 endpoints",
      features: [
        "24/7 SOC monitoring",
        "Threat detection and response",
        "Monthly security briefings",
        "Basic incident response",
        "Email and phone support"
      ],
      ideal: "Organizations with 50-500 employees needing fundamental protection"
    },
    {
      tier: "Advanced MDR",
      description: "Enhanced threat hunting and compliance support for enterprises",
      price: "$25,000/month",
      coverage: "Up to 1,500 endpoints",
      features: [
        "Everything in Essential MDR",
        "Proactive threat hunting",
        "Compliance reporting automation",
        "Advanced incident response",
        "Dedicated customer success manager"
      ],
      ideal: "Mid-market and enterprise organizations with compliance requirements"
    },
    {
      tier: "Premium MDR",
      description: "Full-spectrum security services with custom threat intelligence",
      price: "$50,000/month",
      coverage: "Unlimited endpoints",
      features: [
        "Everything in Advanced MDR",
        "Custom threat intelligence",
        "On-site incident response",
        "Executive security briefings",
        "Custom playbook development"
      ],
      ideal: "Large enterprises and organizations with critical infrastructure"
    }
  ];

  const implementationProcess = [
    {
      phase: "Initial Assessment & Planning",
      duration: "Week 1",
      activities: [
        "Security infrastructure audit and inventory",
        "Current SOC capability assessment",
        "Log source identification and prioritization",
        "Integration requirements planning",
        "Service level agreement customization"
      ],
      deliverables: [
        "SOC integration plan",
        "Log source configuration guide",
        "Custom playbook framework",
        "Escalation procedures document"
      ]
    },
    {
      phase: "Technology Integration",
      duration: "Week 2-3",
      activities: [
        "SIEM platform configuration and tuning",
        "Endpoint agent deployment and testing",
        "Network monitoring setup and validation",
        "Threat intelligence feed integration",
        "Automated response workflow configuration"
      ],
      deliverables: [
        "Integrated monitoring platform",
        "Validated detection rules",
        "Automated response playbooks",
        "Escalation notification system"
      ]
    },
    {
      phase: "Service Launch & Validation",
      duration: "Week 4",
      activities: [
        "24/7 monitoring service activation",
        "Detection and response testing",
        "Analyst team introduction and handoff",
        "Reporting and communication validation",
        "Performance baseline establishment"
      ],
      deliverables: [
        "Active 24/7 monitoring service",
        "Validated incident response procedures",
        "Customer communication protocols",
        "Service performance baselines"
      ]
    },
    {
      phase: "Optimization & Maturation",
      duration: "Ongoing",
      activities: [
        "Detection rule tuning and optimization",
        "Custom threat hunting development",
        "Quarterly service reviews and improvements",
        "Advanced analytics implementation",
        "Continuous threat landscape adaptation"
      ],
      deliverables: [
        "Optimized detection capabilities",
        "Custom threat hunting programs",
        "Quarterly improvement reports",
        "Enhanced analytics dashboards"
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
                Managed Detection & Response
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                24/7 security monitoring and expert incident response with sub-3-minute detection 
                and 15-minute response times, powered by advanced analytics and threat intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo" className="px-8 py-3 bg-[hsl(var(--tecastra-gold))] text-[hsl(var(--tecastra-darkblue))] rounded-full font-medium hover:bg-[hsl(var(--tecastra-gold))]/90 transition duration-150">
                  Start Free Trial
                </Link>
                <Link href="/contact" className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                  Speak with SOC Expert
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
                src={images.networkSecurity[0]}
                alt="Managed Detection & Response"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Components */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Comprehensive MDR Service Components
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              End-to-end security operations with expert analysts, advanced technology, and proven methodologies.
            </p>
          </motion.div>

          <div className="space-y-12">
            {serviceComponents.map((component, index) => (
              <motion.div
                key={component.service}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-[hsl(var(--tecastra-teal))] text-white rounded-full mr-4 font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-[hsl(var(--tecastra-darkblue))]">
                    {component.service}
                  </h3>
                </div>
                
                <p className="text-[hsl(var(--tecastra-darkgray))] mb-6">{component.description}</p>
                
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    {component.staffing && (
                      <div>
                        <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">Expert Staffing</h4>
                        <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">{component.staffing}</p>
                      </div>
                    )}
                    
                    {component.methodology && (
                      <div>
                        <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">Methodology</h4>
                        <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">{component.methodology}</p>
                      </div>
                    )}
                    
                    {component.responseModel && (
                      <div>
                        <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">Response Model</h4>
                        <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">{component.responseModel}</p>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">Service Coverage</h4>
                      <p className="text-sm text-[hsl(var(--tecastra-teal))] font-medium">
                        {component.coverage || component.frequency || component.expertise}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Core Capabilities</h4>
                    <ul className="space-y-2">
                      {component.capabilities.map((capability, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                          <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {component.sla && (
                  <div className="bg-[hsl(var(--tecastra-gray))] p-6 rounded-lg">
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Service Level Agreements</h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {Object.entries(component.sla).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <p className="text-xs text-[hsl(var(--tecastra-darkgray))] uppercase tracking-wide">{key}</p>
                          <p className="text-sm font-medium text-[hsl(var(--tecastra-teal))]">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {component.technologies && (
                  <div className="mt-6">
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {component.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-[hsl(var(--tecastra-teal))] text-white text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Specialization */}
      <section className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Industry-Specific Expertise
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Specialized MDR services tailored to unique industry threats, compliance requirements, and operational needs.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {industrySpecialization.map((industry, index) => (
              <motion.div
                key={industry.industry}
                className="bg-white rounded-xl shadow-lg p-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))] mb-4">
                  {industry.industry}
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Primary Threats</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.threats.map((threat, i) => (
                        <span key={i} className="px-3 py-1 bg-red-50 text-red-700 text-sm rounded-full">
                          {threat}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">Specialized Expertise</h4>
                    <ul className="space-y-1">
                      {industry.expertise.map((expert, i) => (
                        <li key={i} className="flex items-start">
                          <Target className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                          <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{expert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-600 mb-2">Proven Results</h4>
                    <p className="text-sm text-green-800 mb-3">{industry.results}</p>
                    <p className="text-xs text-green-700 italic">{industry.caseStudy}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Industry-Leading Performance Metrics
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Measurable service excellence with transparent performance indicators and continuous improvement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-[hsl(var(--tecastra-teal))] mb-2">
                    {metric.current}
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

      {/* Pricing Tiers */}
      <section className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Flexible Service Tiers
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Scalable MDR solutions designed to meet the needs and budgets of organizations from SMB to enterprise.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.tier}
                className={`bg-white rounded-xl shadow-lg p-8 ${
                  index === 1 ? 'ring-2 ring-[hsl(var(--tecastra-teal))] transform scale-105' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {index === 1 && (
                  <div className="bg-[hsl(var(--tecastra-teal))] text-white text-center py-2 px-4 rounded-full text-sm font-medium mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="font-heading font-bold text-2xl text-[hsl(var(--tecastra-darkblue))] mb-2">
                  {tier.tier}
                </h3>
                
                <p className="text-[hsl(var(--tecastra-darkgray))] mb-4">{tier.description}</p>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold text-[hsl(var(--tecastra-teal))] mb-1">
                    {tier.price}
                  </div>
                  <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">{tier.coverage}</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))]">Included Features</h4>
                  <ul className="space-y-2">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                        <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-[hsl(var(--tecastra-gray))] p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">Ideal For</h4>
                  <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">{tier.ideal}</p>
                </div>
                
                <Link 
                  href="/demo" 
                  className={`block w-full text-center py-3 px-6 rounded-full font-medium transition duration-150 ${
                    index === 1 
                      ? 'bg-[hsl(var(--tecastra-teal))] text-white hover:bg-[hsl(var(--tecastra-darkblue))]'
                      : 'border-2 border-[hsl(var(--tecastra-teal))] text-[hsl(var(--tecastra-teal))] hover:bg-[hsl(var(--tecastra-teal))] hover:text-white'
                  }`}
                >
                  Start Free Trial
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Rapid Implementation Process
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Fast-track MDR service deployment with minimal disruption and immediate security improvement.
            </p>
          </motion.div>

          <div className="space-y-8">
            {implementationProcess.map((phase, index) => (
              <motion.div
                key={phase.phase}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
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
                      {phase.phase}
                    </h3>
                    <p className="text-[hsl(var(--tecastra-teal))] font-medium">{phase.duration}</p>
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8">
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

      {/* CTA Section */}
      <section className="py-16 bg-[hsl(var(--tecastra-darkblue))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
              Strengthen Your Security Operations
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience industry-leading MDR services with 24/7 expert monitoring, 
              sub-3-minute detection, and rapid incident response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="px-8 py-3 bg-[hsl(var(--tecastra-teal))] text-white rounded-full font-medium hover:bg-[hsl(var(--tecastra-gold))] hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                Start Free Trial
              </Link>
              <Link href="/contact" className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                Speak with SOC Expert
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

export default ManagedDetectionResponse;