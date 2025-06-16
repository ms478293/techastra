import { motion } from 'framer-motion';
import { images } from '@/assets/images';
import { Check, Eye, BarChart3, Shield, Network, Users, Settings, Globe, Target, Zap } from 'lucide-react';
import { Link } from 'wouter';

const UnifySec = () => {
  const keyFeatures = [
    {
      icon: Eye,
      title: "Unified Security Visibility",
      description: "Single pane of glass providing comprehensive visibility across all security tools, environments, and data sources with real-time correlation and intelligent analytics."
    },
    {
      icon: BarChart3,
      title: "Cross-Platform Analytics",
      description: "Advanced analytics engine that correlates data from multiple security platforms, providing unified insights and reducing complexity of multi-vendor environments."
    },
    {
      icon: Settings,
      title: "Centralized Management",
      description: "Unified management interface for configuring policies, managing users, and orchestrating security operations across the entire TecAstra security platform."
    },
    {
      icon: Globe,
      title: "Global Deployment Support",
      description: "Multi-tenant architecture supporting global deployments with regional data residency, compliance automation, and centralized governance across distributed environments."
    }
  ];

  const platformIntegrations = [
    {
      category: "TecAstra Security Platform",
      description: "Native integration with all TecAstra security products",
      components: [
        "FortIQ Next-Generation Firewall",
        "ClearDNS Security Platform",
        "TrustLynk Zero Trust Network Access",
        "SentraCore Endpoint Detection & Response",
        "MailShield 360 Email Security",
        "NebulaWall Cloud Security",
        "IdentaGate Identity & Access Management",
        "PulseIQ Threat Intelligence",
        "FlowOps Security Orchestration"
      ],
      capabilities: [
        "Unified policy management",
        "Cross-platform threat correlation",
        "Centralized user administration",
        "Integrated compliance reporting"
      ]
    },
    {
      category: "Third-Party Security Tools",
      description: "Comprehensive integration with leading security vendors",
      components: [
        "SIEM platforms (Splunk, QRadar, Sentinel)",
        "Endpoint security (CrowdStrike, SentinelOne)",
        "Network security (Cisco, Palo Alto, Fortinet)",
        "Cloud security (AWS Security Hub, Azure Security Center)",
        "Identity providers (Active Directory, Okta, Ping)",
        "Vulnerability scanners (Tenable, Rapid7, Qualys)",
        "Threat intelligence (Recorded Future, ThreatQ)",
        "SOAR platforms (Phantom, Demisto, Swimlane)"
      ],
      capabilities: [
        "Bi-directional data synchronization",
        "Unified alerting and notification",
        "Cross-platform workflow automation",
        "Consolidated reporting and analytics"
      ]
    },
    {
      category: "Enterprise Applications",
      description: "Integration with business-critical enterprise systems",
      components: [
        "IT Service Management (ServiceNow, Remedy)",
        "Communication platforms (Slack, Teams, Webex)",
        "Cloud platforms (AWS, Azure, Google Cloud)",
        "DevOps tools (Jenkins, GitLab, Kubernetes)",
        "Business intelligence (Tableau, Power BI)",
        "Email systems (Exchange, Office 365, Gmail)",
        "Directory services (LDAP, Active Directory)",
        "Ticketing systems (Jira, ServiceNow)"
      ],
      capabilities: [
        "Automated ticket creation and updates",
        "Real-time communication integration",
        "Business context enrichment",
        "Workflow automation across systems"
      ]
    }
  ];

  const dashboardCapabilities = [
    {
      dashboard: "Executive Security Overview",
      description: "High-level security posture and risk metrics for executive leadership",
      widgets: [
        "Security posture score and trending",
        "Critical threat summary and impact analysis",
        "Compliance status across all frameworks",
        "Security investment ROI and cost optimization",
        "Incident response performance metrics",
        "Risk reduction progress tracking"
      ],
      audience: "C-level executives, board members, senior leadership",
      updateFrequency: "Real-time with executive briefing summaries"
    },
    {
      dashboard: "Security Operations Center (SOC)",
      description: "Real-time security monitoring and incident response dashboard",
      widgets: [
        "Live threat feed and active incidents",
        "Security tool health and performance",
        "Analyst workload distribution",
        "Mean time to detection and response",
        "Threat hunting activity and results",
        "Automated response effectiveness"
      ],
      audience: "SOC analysts, security engineers, incident responders",
      updateFrequency: "Real-time with sub-second refresh"
    },
    {
      dashboard: "Compliance & Risk Management",
      description: "Comprehensive compliance monitoring and risk assessment dashboard",
      widgets: [
        "Multi-framework compliance status",
        "Control effectiveness measurements",
        "Audit preparation and evidence collection",
        "Risk assessment and mitigation tracking",
        "Policy compliance monitoring",
        "Regulatory change impact analysis"
      ],
      audience: "Compliance officers, risk managers, auditors",
      updateFrequency: "Daily updates with real-time critical alerts"
    },
    {
      dashboard: "Threat Intelligence & Analytics",
      description: "Advanced threat analysis and intelligence correlation dashboard",
      widgets: [
        "Global threat landscape overview",
        "Industry-specific threat trends",
        "Threat actor activity and attribution",
        "Attack surface monitoring",
        "Vulnerability intelligence integration",
        "Predictive threat modeling"
      ],
      audience: "Threat analysts, security researchers, threat hunters",
      updateFrequency: "Continuous with hourly intelligence updates"
    }
  ];

  const analyticsEngine = [
    {
      capability: "Cross-Platform Correlation",
      description: "Intelligent correlation of security events across all integrated platforms",
      features: [
        "Multi-source event correlation and deduplication",
        "Behavioral analysis across security tools",
        "Timeline reconstruction and attack path analysis",
        "False positive reduction through intelligent filtering",
        "Automated threat hunting query generation"
      ],
      benefits: [
        "90% reduction in alert fatigue",
        "75% faster threat investigation",
        "95% improvement in detection accuracy",
        "60% reduction in false positives"
      ]
    },
    {
      capability: "Predictive Security Analytics",
      description: "Machine learning-powered predictive analysis for proactive security",
      features: [
        "Risk prediction modeling and scoring",
        "Attack likelihood assessment",
        "Vulnerability exploitation prediction",
        "User behavior anomaly detection",
        "Infrastructure security forecasting"
      ],
      benefits: [
        "80% improvement in proactive threat detection",
        "65% reduction in successful attacks",
        "70% faster vulnerability prioritization",
        "85% improvement in resource allocation"
      ]
    },
    {
      capability: "Business Impact Analysis",
      description: "Security event correlation with business context and impact assessment",
      features: [
        "Asset criticality and business impact mapping",
        "Financial impact calculation and modeling",
        "Business process security dependency analysis",
        "Operational risk assessment and prioritization",
        "Strategic security investment optimization"
      ],
      benefits: [
        "100% alignment with business priorities",
        "50% improvement in security ROI",
        "90% better resource prioritization",
        "75% faster executive decision-making"
      ]
    }
  ];

  const deploymentOptions = [
    {
      option: "Cloud-Native SaaS",
      description: "Fully managed cloud service with global infrastructure",
      features: [
        "Zero infrastructure management required",
        "Automatic scaling and performance optimization",
        "Global data centers with regional compliance",
        "Continuous updates and feature releases",
        "99.99% uptime service level agreement"
      ],
      benefits: [
        "Fastest deployment (24-48 hours)",
        "Lowest total cost of ownership",
        "Automatic security updates",
        "Global accessibility and performance"
      ],
      ideal: "Organizations seeking rapid deployment with minimal IT overhead"
    },
    {
      option: "Hybrid Cloud Deployment",
      description: "Flexible deployment combining cloud and on-premises components",
      features: [
        "Sensitive data processing on-premises",
        "Cloud analytics and correlation services",
        "Flexible data residency controls",
        "Seamless cloud-to-premises integration",
        "Unified management across environments"
      ],
      benefits: [
        "Optimal data sovereignty control",
        "Balanced performance and compliance",
        "Gradual cloud migration support",
        "Customizable security boundaries"
      ],
      ideal: "Enterprises with data residency requirements and hybrid infrastructure"
    },
    {
      option: "On-Premises Deployment",
      description: "Complete on-premises deployment with air-gapped support",
      features: [
        "Full data control and sovereignty",
        "Air-gapped network support",
        "Custom hardware and infrastructure",
        "Dedicated support and professional services",
        "Compliance with strictest regulations"
      ],
      benefits: [
        "Maximum data control and privacy",
        "Compliance with sensitive regulations",
        "Custom performance optimization",
        "Complete infrastructure ownership"
      ],
      ideal: "Government, defense, and highly regulated industries"
    }
  ];

  const performanceMetrics = [
    {
      metric: "Data Integration Speed",
      value: "Real-time",
      comparison: "vs. batch processing (hours/days)",
      description: "Immediate data ingestion and correlation across all platforms"
    },
    {
      metric: "Query Response Time",
      value: "<100ms",
      comparison: "vs. traditional SIEM (5-30 seconds)",
      description: "Sub-second response for complex security analytics queries"
    },
    {
      metric: "Platform Coverage",
      value: "200+ integrations",
      comparison: "vs. typical solutions (20-50)",
      description: "Comprehensive integration ecosystem"
    },
    {
      metric: "Alert Correlation",
      value: "95% accuracy",
      comparison: "vs. manual correlation (60-70%)",
      description: "AI-powered intelligent event correlation"
    },
    {
      metric: "Deployment Time",
      value: "24-48 hours",
      comparison: "vs. traditional platforms (3-6 months)",
      description: "Rapid deployment across complex environments"
    },
    {
      metric: "User Adoption",
      value: "98%",
      comparison: "vs. industry average (65%)",
      description: "High user satisfaction with intuitive interface"
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
                UnifySec Management Console
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Unified security management platform with centralized visibility, 
                cross-platform analytics, and global deployment support - providing 
                single pane of glass for entire security infrastructure.
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
                src={images.dataCenter[1]}
                alt="UnifySec Management Console"
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
              Unified Security Management Features
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Comprehensive security management platform that unifies visibility, analytics, and control 
              across your entire security infrastructure.
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

      {/* Platform Integrations */}
      <section className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Comprehensive Platform Integrations
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Native integration with TecAstra security platform and 200+ third-party security tools and enterprise applications.
            </p>
          </motion.div>

          <div className="space-y-8">
            {platformIntegrations.map((integration, index) => (
              <motion.div
                key={integration.category}
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
                      {integration.category}
                    </h3>
                    <p className="text-[hsl(var(--tecastra-darkgray))]">{integration.description}</p>
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Integrated Components</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {integration.components.map((component, i) => (
                        <div key={i} className="text-sm text-[hsl(var(--tecastra-darkgray))] bg-[hsl(var(--tecastra-gray))] p-2 rounded">
                          {component}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Key Capabilities</h4>
                    <ul className="space-y-2">
                      {integration.capabilities.map((capability, i) => (
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

      {/* Dashboard Capabilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Role-Based Security Dashboards
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Customized dashboards tailored to different roles and responsibilities with relevant metrics and actionable insights.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {dashboardCapabilities.map((dashboard, index) => (
              <motion.div
                key={dashboard.dashboard}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))] mb-4">
                  {dashboard.dashboard}
                </h3>
                
                <p className="text-[hsl(var(--tecastra-darkgray))] mb-6">{dashboard.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">Key Widgets</h4>
                    <ul className="space-y-1">
                      {dashboard.widgets.map((widget, i) => (
                        <li key={i} className="text-sm text-[hsl(var(--tecastra-darkgray))]">• {widget}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-[hsl(var(--tecastra-gray))] p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-[hsl(var(--tecastra-darkblue))]">Target Audience:</span>
                    </div>
                    <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">{dashboard.audience}</p>
                    
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm font-semibold text-[hsl(var(--tecastra-darkblue))]">Updates:</span>
                      <span className="text-sm text-[hsl(var(--tecastra-teal))]">{dashboard.updateFrequency}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Engine */}
      <section className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Advanced Analytics Engine
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Intelligent analytics capabilities that transform raw security data into actionable insights and predictive intelligence.
            </p>
          </motion.div>

          <div className="space-y-8">
            {analyticsEngine.map((capability, index) => (
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
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Core Features</h4>
                    <ul className="space-y-2">
                      {capability.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Target className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-gold))] flex-shrink-0" />
                          <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Measurable Benefits</h4>
                    <ul className="space-y-2">
                      {capability.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <BarChart3 className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
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
              Superior Platform Performance
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Industry-leading performance metrics demonstrating the effectiveness of unified security management.
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
              Unify Your Security Management
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the power of unified security management with UnifySec. 
              Get single pane of glass visibility with real-time analytics across your entire security infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="px-8 py-3 bg-[hsl(var(--tecastra-teal))] text-white rounded-full font-medium hover:bg-[hsl(var(--tecastra-gold))] hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                Request Demo
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

export default UnifySec;