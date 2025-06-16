import { motion } from 'framer-motion';
import { images } from '@/assets/images';
import { Check, Cloud, Code, Shield, Zap, Settings, Eye, Lock, BarChart3, GitBranch } from 'lucide-react';
import { Link } from 'wouter';

const NebulaWall = () => {
  const keyFeatures = [
    {
      icon: GitBranch,
      title: "GitHub-Native Integration",
      description: "Seamless integration with GitHub workflows enabling security-as-code with automated vulnerability scanning in CI/CD pipelines and pull request security checks."
    },
    {
      icon: Cloud,
      title: "Multi-Cloud Protection",
      description: "Unified security across AWS, Azure, and Google Cloud Platform with consistent policy enforcement and compliance monitoring across hybrid cloud environments."
    },
    {
      icon: Code,
      title: "Container & Serverless Security",
      description: "Comprehensive protection for containerized applications and serverless functions with runtime monitoring, vulnerability assessment, and compliance validation."
    },
    {
      icon: Eye,
      title: "Real-Time Visibility",
      description: "Complete visibility into cloud infrastructure, workloads, and data flows with automated asset discovery and continuous security posture monitoring."
    }
  ];

  const cnappCapabilities = [
    {
      capability: "Cloud Security Posture Management (CSPM)",
      description: "Continuous monitoring and remediation of cloud misconfigurations",
      features: [
        "Real-time configuration drift detection",
        "Automated compliance assessment against CIS benchmarks",
        "Risk-based vulnerability prioritization",
        "One-click remediation for common misconfigurations",
        "Custom policy framework for organizational standards"
      ],
      coverage: "AWS, Azure, GCP, Oracle Cloud, Alibaba Cloud"
    },
    {
      capability: "Cloud Workload Protection (CWP)",
      description: "Runtime security for cloud workloads including containers and serverless",
      features: [
        "Container image vulnerability scanning",
        "Runtime threat detection and response",
        "Kubernetes security policy enforcement",
        "Serverless function security monitoring",
        "Application dependency analysis"
      ],
      coverage: "Docker, Kubernetes, AWS Lambda, Azure Functions, Google Cloud Functions"
    },
    {
      capability: "Cloud Infrastructure Entitlement Management (CIEM)",
      description: "Identity and access management across cloud environments",
      features: [
        "Cross-cloud identity governance",
        "Excessive privilege detection and remediation",
        "Just-in-time access provisioning",
        "Identity attack path analysis",
        "Compliance reporting for access controls"
      ],
      coverage: "AWS IAM, Azure AD, Google Cloud Identity, OAuth providers"
    },
    {
      capability: "Data Security Posture Management (DSPM)",
      description: "Discovery, classification, and protection of cloud data assets",
      features: [
        "Automated data discovery and classification",
        "Sensitive data exposure detection",
        "Data loss prevention policies",
        "Encryption status monitoring",
        "Privacy compliance automation"
      ],
      coverage: "S3, Azure Blob, Cloud Storage, RDS, CosmosDB, BigQuery"
    }
  ];

  const devSecOpsIntegration = [
    {
      stage: "Code Development",
      tools: ["GitHub", "GitLab", "Bitbucket", "Azure DevOps"],
      integrations: [
        "IDE plugins for real-time security feedback",
        "Pre-commit hooks for policy validation",
        "Automated security code reviews",
        "Vulnerability scanning for dependencies",
        "Infrastructure-as-code security analysis"
      ],
      benefits: [
        "Shift-left security implementation",
        "Developer-friendly security feedback",
        "Reduced security debt accumulation",
        "Faster vulnerability resolution"
      ]
    },
    {
      stage: "CI/CD Pipeline",
      tools: ["Jenkins", "GitHub Actions", "Azure Pipelines", "CircleCI"],
      integrations: [
        "Automated container image scanning",
        "Infrastructure deployment validation",
        "Security gate enforcement",
        "Compliance policy checking",
        "Automated security testing"
      ],
      benefits: [
        "Automated security validation",
        "Pipeline security gate enforcement",
        "Continuous compliance monitoring",
        "Reduced manual security reviews"
      ]
    },
    {
      stage: "Deployment & Runtime",
      tools: ["Kubernetes", "Terraform", "CloudFormation", "Ansible"],
      integrations: [
        "Runtime security monitoring",
        "Workload protection activation",
        "Policy enforcement deployment",
        "Incident response automation",
        "Compliance validation"
      ],
      benefits: [
        "Real-time threat protection",
        "Automated incident response",
        "Continuous security monitoring",
        "Policy drift detection"
      ]
    }
  ];

  const cloudPlatformSupport = [
    {
      platform: "Amazon Web Services (AWS)",
      services: 200,
      integrations: [
        "CloudTrail for audit logging",
        "Config for compliance monitoring",
        "GuardDuty for threat detection",
        "IAM for access management",
        "Security Hub for centralized security"
      ],
      coverage: "Compute, Storage, Database, Networking, Security, Analytics, ML/AI",
      specialFeatures: [
        "AWS Organizations support",
        "Multi-account security management",
        "AWS Control Tower integration",
        "Custom AWS Config rules"
      ]
    },
    {
      platform: "Microsoft Azure",
      services: 180,
      integrations: [
        "Azure Security Center integration",
        "Azure Monitor for logging",
        "Azure AD for identity management",
        "Azure Policy for governance",
        "Azure Sentinel for SIEM"
      ],
      coverage: "Virtual Machines, Storage, Databases, Networking, Security, AI/ML",
      specialFeatures: [
        "Azure Arc hybrid cloud support",
        "Microsoft 365 integration",
        "Azure Lighthouse management",
        "Custom Azure Policy definitions"
      ]
    },
    {
      platform: "Google Cloud Platform (GCP)",
      services: 150,
      integrations: [
        "Cloud Security Command Center",
        "Cloud Audit Logs",
        "Identity and Access Management",
        "Cloud Asset Inventory",
        "Binary Authorization"
      ],
      coverage: "Compute Engine, Storage, BigQuery, Networking, Security, AI/ML",
      specialFeatures: [
        "Google Workspace integration",
        "Anthos hybrid cloud support",
        "Organization policy constraints",
        "Custom Cloud Functions"
      ]
    }
  ];

  const complianceFrameworks = [
    {
      framework: "SOC 2 Type II",
      description: "Service Organization Control 2 compliance automation",
      controls: [
        "Security principle monitoring",
        "Availability tracking and reporting",
        "Processing integrity validation",
        "Confidentiality safeguards",
        "Privacy protection measures"
      ],
      automation: [
        "Continuous control monitoring",
        "Automated evidence collection",
        "Real-time compliance dashboards",
        "Audit-ready documentation"
      ],
      timeline: "90 days to readiness"
    },
    {
      framework: "ISO 27001",
      description: "International information security management standard",
      controls: [
        "Information security policies",
        "Risk management processes",
        "Asset management controls",
        "Access control measures",
        "Incident management procedures"
      ],
      automation: [
        "Risk assessment automation",
        "Control effectiveness monitoring",
        "Non-conformity tracking",
        "Management review reporting"
      ],
      timeline: "6 months to certification readiness"
    },
    {
      framework: "PCI DSS",
      description: "Payment Card Industry Data Security Standard",
      controls: [
        "Cardholder data protection",
        "Network security implementation",
        "Vulnerability management",
        "Access control enforcement",
        "Regular security testing"
      ],
      automation: [
        "Cardholder data discovery",
        "Network segmentation validation",
        "Vulnerability scan automation",
        "Compliance status reporting"
      ],
      timeline: "4 months to compliance"
    },
    {
      framework: "NIST Cybersecurity Framework",
      description: "National Institute of Standards and Technology framework",
      controls: [
        "Identify: Asset management and risk assessment",
        "Protect: Access controls and data security",
        "Detect: Continuous monitoring and detection",
        "Respond: Incident response and communication",
        "Recover: Recovery planning and improvements"
      ],
      automation: [
        "Maturity assessment automation",
        "Control gap analysis",
        "Implementation tracking",
        "Continuous improvement metrics"
      ],
      timeline: "Ongoing maturity improvement"
    }
  ];

  const performanceMetrics = [
    {
      metric: "Deployment Speed",
      value: "15 minutes",
      comparison: "vs. 2-3 weeks traditional",
      description: "Complete CNAPP deployment across multi-cloud environments"
    },
    {
      metric: "Security Coverage",
      value: "99.9%",
      comparison: "vs. 60-70% traditional tools",
      description: "Comprehensive visibility across cloud infrastructure and workloads"
    },
    {
      metric: "False Positive Rate",
      value: "<1%",
      comparison: "vs. 15-20% industry average",
      description: "AI-powered analysis reduces alert fatigue and improves efficiency"
    },
    {
      metric: "Compliance Efficiency",
      value: "80% faster",
      comparison: "vs. manual compliance processes",
      description: "Automated compliance monitoring and reporting"
    },
    {
      metric: "Developer Adoption",
      value: "95%",
      comparison: "vs. 40% traditional security tools",
      description: "GitHub-native integration ensures high developer adoption"
    },
    {
      metric: "Mean Time to Remediation",
      value: "30 minutes",
      comparison: "vs. 4-6 hours traditional",
      description: "Automated remediation and guided fix recommendations"
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
                NebulaWall CNAPP Platform
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Cloud-Native Application Protection Platform with GitHub integration, 
                multi-cloud security, and automated compliance - delivering 99.9% 
                security coverage with 15-minute deployment.
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
                src={images.dataCenter[0]}
                alt="NebulaWall CNAPP Platform"
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
              Next-Generation Cloud Security
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Comprehensive cloud-native application protection with developer-friendly integration 
              and enterprise-grade security across multi-cloud environments.
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

      {/* CNAPP Capabilities */}
      <section className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Comprehensive CNAPP Capabilities
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Integrated cloud security platform covering posture management, workload protection, 
              identity governance, and data security.
            </p>
          </motion.div>

          <div className="space-y-8">
            {cnappCapabilities.map((capability, index) => (
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
                  
                  <div className="bg-[hsl(var(--tecastra-gray))] p-6 rounded-lg">
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Platform Coverage</h4>
                    <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">{capability.coverage}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DevSecOps Integration */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              DevSecOps Integration
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Seamless integration across the entire software development lifecycle with security-as-code implementation.
            </p>
          </motion.div>

          <div className="space-y-8">
            {devSecOpsIntegration.map((stage, index) => (
              <motion.div
                key={stage.stage}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-[hsl(var(--tecastra-teal))] text-white rounded-full mr-4 font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))]">
                    {stage.stage}
                  </h3>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Supported Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {stage.tools.map((tool, i) => (
                        <span key={i} className="px-3 py-1 bg-[hsl(var(--tecastra-teal))] text-white text-sm rounded-full">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Integrations</h4>
                    <ul className="space-y-1">
                      {stage.integrations.map((integration, i) => (
                        <li key={i} className="text-sm text-[hsl(var(--tecastra-darkgray))]">• {integration}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Key Benefits</h4>
                    <ul className="space-y-1">
                      {stage.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="mt-1 mr-2 h-3 w-3 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                          <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{benefit}</span>
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

      {/* Cloud Platform Support */}
      <section className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Multi-Cloud Platform Support
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Comprehensive security coverage across all major cloud platforms with native integrations and unified management.
            </p>
          </motion.div>

          <div className="space-y-8">
            {cloudPlatformSupport.map((platform, index) => (
              <motion.div
                key={platform.platform}
                className="bg-white rounded-xl shadow-lg p-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))]">
                    {platform.platform}
                  </h3>
                  <span className="px-4 py-2 bg-[hsl(var(--tecastra-teal))] text-white rounded-full text-sm font-medium">
                    {platform.services}+ Services
                  </span>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Native Integrations</h4>
                      <ul className="space-y-2">
                        {platform.integrations.map((integration, i) => (
                          <li key={i} className="flex items-start">
                            <Cloud className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                            <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{integration}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Service Coverage</h4>
                      <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">{platform.coverage}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Special Features</h4>
                    <ul className="space-y-2">
                      {platform.specialFeatures.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Settings className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-gold))] flex-shrink-0" />
                          <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{feature}</span>
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
              Superior Performance Metrics
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Measurable improvements in deployment speed, security coverage, and operational efficiency.
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
              Secure Your Cloud-Native Applications
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Deploy comprehensive cloud security in 15 minutes with NebulaWall's GitHub-native CNAPP platform. 
              Protect multi-cloud environments with developer-friendly security-as-code.
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

export default NebulaWall;