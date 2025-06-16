import { motion } from 'framer-motion';
import { images } from '@/assets/images';
import { Check, Eye, BarChart3, AlertTriangle, Shield, Clock, FileText, Target, Users, Zap } from 'lucide-react';
import { Link } from 'wouter';

const CybersecurityRiskAssessment = () => {
  const assessmentComponents = [
    {
      component: "Infrastructure Security Analysis",
      duration: "3-5 days",
      description: "Comprehensive evaluation of network security, endpoint protection, and infrastructure vulnerabilities",
      activities: [
        "Network architecture security review",
        "Vulnerability scanning and penetration testing",
        "Endpoint security posture assessment",
        "Cloud infrastructure security evaluation",
        "Industrial control system analysis (if applicable)"
      ],
      deliverables: [
        "Network security topology diagram",
        "Vulnerability assessment report with CVSS scoring",
        "Endpoint security compliance matrix",
        "Cloud security configuration review",
        "Critical vulnerability remediation roadmap"
      ]
    },
    {
      component: "Identity & Access Management Review",
      duration: "2-3 days",
      description: "Assessment of user access controls, privileged accounts, and identity governance",
      activities: [
        "Active Directory security assessment",
        "Privileged access management review",
        "Multi-factor authentication evaluation",
        "User access rights analysis",
        "Service account security review"
      ],
      deliverables: [
        "Identity governance assessment report",
        "Privileged account inventory and risk analysis",
        "Access control matrix with recommendations",
        "MFA implementation roadmap",
        "Identity security best practices guide"
      ]
    },
    {
      component: "Data Protection & Privacy Analysis",
      duration: "2-4 days",
      description: "Evaluation of data classification, protection controls, and privacy compliance",
      activities: [
        "Data discovery and classification assessment",
        "Data loss prevention (DLP) evaluation",
        "Backup and recovery testing",
        "Encryption implementation review",
        "Privacy compliance gap analysis"
      ],
      deliverables: [
        "Data inventory and classification report",
        "Data protection control effectiveness assessment",
        "Backup and disaster recovery plan review",
        "Encryption implementation recommendations",
        "Privacy compliance roadmap"
      ]
    },
    {
      component: "Security Governance & Compliance",
      duration: "3-4 days",
      description: "Review of security policies, procedures, and regulatory compliance posture",
      activities: [
        "Security policy and procedure review",
        "Compliance framework assessment",
        "Incident response plan evaluation",
        "Security awareness program review",
        "Vendor risk management assessment"
      ],
      deliverables: [
        "Security governance maturity assessment",
        "Compliance gap analysis and remediation plan",
        "Incident response capability evaluation",
        "Security awareness program recommendations",
        "Third-party risk management framework"
      ]
    }
  ];

  const riskCategories = [
    {
      category: "Critical Risks",
      description: "Immediate threats requiring urgent attention within 30 days",
      examples: [
        "Unpatched critical vulnerabilities (CVSS 9.0+)",
        "Exposed databases with sensitive data",
        "Missing endpoint protection on critical systems",
        "Privileged accounts without MFA",
        "Publicly accessible administrative interfaces"
      ],
      impact: "High probability of successful cyberattack resulting in data breach, ransomware, or business disruption",
      recommendation: "Immediate remediation required with executive-level attention and emergency response protocols"
    },
    {
      category: "High Risks",
      description: "Significant vulnerabilities requiring attention within 60-90 days",
      examples: [
        "Outdated operating systems and applications",
        "Weak password policies and practices",
        "Insufficient network segmentation",
        "Limited backup and recovery capabilities",
        "Inadequate security monitoring and logging"
      ],
      impact: "Moderate to high probability of security incidents with potential business impact",
      recommendation: "Prioritized remediation with dedicated resources and project management oversight"
    },
    {
      category: "Medium Risks",
      description: "Moderate vulnerabilities for resolution within 6 months",
      examples: [
        "Incomplete security awareness training",
        "Legacy systems requiring security updates",
        "Vendor management security gaps",
        "Physical security improvements needed",
        "Security policy updates and compliance gaps"
      ],
      impact: "Lower probability but potential for operational disruption or compliance violations",
      recommendation: "Planned remediation as part of regular security improvement initiatives"
    },
    {
      category: "Low Risks",
      description: "Minor issues for long-term improvement planning",
      examples: [
        "Security architecture optimization opportunities",
        "Advanced threat hunting capabilities",
        "Security automation enhancements",
        "Emerging technology security considerations",
        "Continuous improvement recommendations"
      ],
      impact: "Minimal immediate impact but important for long-term security maturity",
      recommendation: "Include in annual security roadmap and continuous improvement programs"
    }
  ];

  const industryFrameworks = [
    {
      framework: "NIST Cybersecurity Framework",
      description: "Comprehensive framework for managing cybersecurity risk",
      functions: ["Identify", "Protect", "Detect", "Respond", "Recover"],
      assessment: "Current state vs. target state maturity assessment across all framework functions",
      deliverables: [
        "NIST CSF maturity assessment",
        "Function-specific gap analysis",
        "Implementation roadmap with priorities",
        "Resource requirements planning"
      ]
    },
    {
      framework: "ISO 27001/27002",
      description: "International standard for information security management",
      controls: "114 security controls across 14 categories",
      assessment: "Control effectiveness evaluation and implementation status review",
      deliverables: [
        "ISO 27001 readiness assessment",
        "Control implementation status report",
        "Risk treatment plan",
        "Certification preparation roadmap"
      ]
    },
    {
      framework: "CIS Controls",
      description: "Prioritized set of actions for cyber defense",
      controls: "18 critical security controls with implementation guidance",
      assessment: "Implementation maturity scoring and prioritization analysis",
      deliverables: [
        "CIS Controls implementation assessment",
        "Maturity scoring across all controls",
        "Quick wins identification",
        "Implementation priority matrix"
      ]
    },
    {
      framework: "Industry-Specific Standards",
      description: "Sector-specific compliance requirements (HIPAA, PCI DSS, SOX, FedRAMP)",
      scope: "Tailored assessment based on industry and regulatory requirements",
      assessment: "Compliance gap analysis and readiness evaluation",
      deliverables: [
        "Industry compliance assessment",
        "Regulatory gap analysis",
        "Compliance improvement roadmap",
        "Audit preparation checklist"
      ]
    }
  ];

  const assessmentProcess = [
    {
      phase: "Pre-Assessment Planning",
      duration: "1 week",
      activities: [
        "Stakeholder interviews and scope definition",
        "Asset inventory and system documentation review",
        "Access requirements and logistics coordination",
        "Assessment methodology customization",
        "Team coordination and communication planning"
      ],
      outcomes: [
        "Detailed assessment scope and timeline",
        "Stakeholder engagement plan",
        "Technical requirements documentation",
        "Risk assessment methodology"
      ]
    },
    {
      phase: "Technical Assessment Execution",
      duration: "2-4 weeks",
      activities: [
        "Automated vulnerability scanning",
        "Manual security testing and validation",
        "Configuration review and analysis",
        "Architecture and design evaluation",
        "Policy and procedure assessment"
      ],
      outcomes: [
        "Comprehensive vulnerability inventory",
        "Security control effectiveness analysis",
        "Risk identification and classification",
        "Evidence collection and documentation"
      ]
    },
    {
      phase: "Risk Analysis & Prioritization",
      duration: "1 week",
      activities: [
        "Risk impact and likelihood analysis",
        "Business context evaluation",
        "Threat modeling and scenario analysis",
        "Cost-benefit analysis for remediation",
        "Priority ranking and resource planning"
      ],
      outcomes: [
        "Risk register with impact assessment",
        "Prioritized remediation roadmap",
        "Cost-benefit analysis",
        "Resource requirements planning"
      ]
    },
    {
      phase: "Reporting & Presentation",
      duration: "1 week",
      activities: [
        "Executive summary preparation",
        "Technical findings documentation",
        "Remediation recommendations development",
        "Stakeholder presentation preparation",
        "Follow-up planning and next steps"
      ],
      outcomes: [
        "Executive risk assessment report",
        "Technical findings and recommendations",
        "90-day remediation action plan",
        "Long-term security roadmap"
      ]
    }
  ];

  const reportDeliverables = [
    {
      deliverable: "Executive Risk Dashboard",
      description: "High-level risk summary for executive leadership",
      contents: [
        "Overall risk score and trending",
        "Critical findings requiring immediate attention",
        "Business impact analysis",
        "Investment recommendations and ROI projections",
        "Compliance status summary"
      ],
      audience: "C-level executives, board members, senior leadership"
    },
    {
      deliverable: "Technical Assessment Report",
      description: "Detailed technical findings and recommendations",
      contents: [
        "Vulnerability assessment results with CVSS scoring",
        "Security control effectiveness evaluation",
        "Architecture and configuration analysis",
        "Detailed remediation instructions",
        "Testing and validation procedures"
      ],
      audience: "IT teams, security professionals, technical staff"
    },
    {
      deliverable: "90-Day Action Plan",
      description: "Prioritized remediation roadmap with timelines",
      contents: [
        "Critical vulnerability remediation steps",
        "Quick wins and immediate improvements",
        "Resource allocation and responsibility matrix",
        "Milestone tracking and success metrics",
        "Risk reduction projections"
      ],
      audience: "Project managers, IT leadership, implementation teams"
    },
    {
      deliverable: "Long-Term Security Roadmap",
      description: "Strategic security improvement plan for 1-3 years",
      contents: [
        "Security maturity target state definition",
        "Technology modernization recommendations",
        "Process improvement initiatives",
        "Training and awareness programs",
        "Continuous monitoring and assessment plan"
      ],
      audience: "Strategic planners, budget owners, security leadership"
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
                Cybersecurity Risk Assessment
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Comprehensive security posture evaluation with actionable insights, risk prioritization, 
                and strategic remediation roadmap to strengthen your organization's cyber defenses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo" className="px-8 py-3 bg-[hsl(var(--tecastra-gold))] text-[hsl(var(--tecastra-darkblue))] rounded-full font-medium hover:bg-[hsl(var(--tecastra-gold))]/90 transition duration-150">
                  Schedule Assessment
                </Link>
                <Link href="/contact" className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                  Speak with Expert
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
                src={images.cybersecurityProfessionals[0]}
                alt="Cybersecurity Risk Assessment"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Assessment Components */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Comprehensive Assessment Components
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Thorough evaluation across all critical security domains with detailed analysis and actionable recommendations.
            </p>
          </motion.div>

          <div className="space-y-8">
            {assessmentComponents.map((component, index) => (
              <motion.div
                key={component.component}
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
                        {component.component}
                      </h3>
                      <p className="text-[hsl(var(--tecastra-teal))] font-medium">{component.duration}</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-[hsl(var(--tecastra-darkgray))] mb-6">{component.description}</p>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Assessment Activities</h4>
                    <ul className="space-y-2">
                      {component.activities.map((activity, i) => (
                        <li key={i} className="flex items-start">
                          <Eye className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-gold))] flex-shrink-0" />
                          <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Key Deliverables</h4>
                    <ul className="space-y-2">
                      {component.deliverables.map((deliverable, i) => (
                        <li key={i} className="flex items-start">
                          <FileText className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
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

      {/* Risk Categories */}
      <section className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Risk Categorization & Prioritization
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Systematic risk classification enabling prioritized remediation based on business impact and threat likelihood.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {riskCategories.map((category, index) => (
              <motion.div
                key={category.category}
                className="bg-white rounded-xl shadow-lg p-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-4 h-4 rounded-full mr-3 ${
                    category.category === 'Critical Risks' ? 'bg-red-500' :
                    category.category === 'High Risks' ? 'bg-orange-500' :
                    category.category === 'Medium Risks' ? 'bg-yellow-500' :
                    'bg-green-500'
                  }`}></div>
                  <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))]">
                    {category.category}
                  </h3>
                </div>
                
                <p className="text-[hsl(var(--tecastra-darkgray))] mb-6">{category.description}</p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">Common Examples</h4>
                    <ul className="space-y-1">
                      {category.examples.map((example, i) => (
                        <li key={i} className="text-sm text-[hsl(var(--tecastra-darkgray))]">• {example}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-600 mb-2">Business Impact</h4>
                    <p className="text-sm text-red-800">{category.impact}</p>
                  </div>
                  
                  <div className="bg-[hsl(var(--tecastra-gray))] p-4 rounded-lg">
                    <h4 className="font-semibold text-[hsl(var(--tecastra-teal))] mb-2">Recommended Action</h4>
                    <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">{category.recommendation}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Frameworks */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Industry Framework Alignment
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Assessment methodology aligned with leading cybersecurity frameworks and industry best practices.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {industryFrameworks.map((framework, index) => (
              <motion.div
                key={framework.framework}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))] mb-4">
                  {framework.framework}
                </h3>
                
                <p className="text-[hsl(var(--tecastra-darkgray))] mb-6">{framework.description}</p>
                
                <div className="space-y-4">
                  {framework.functions && (
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">Core Functions</h4>
                      <div className="flex flex-wrap gap-2">
                        {framework.functions.map((func, i) => (
                          <span key={i} className="px-3 py-1 bg-[hsl(var(--tecastra-teal))] text-white text-sm rounded-full">
                            {func}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {framework.controls && (
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">Control Coverage</h4>
                      <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">{framework.controls}</p>
                    </div>
                  )}
                  
                  {framework.scope && (
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">Assessment Scope</h4>
                      <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">{framework.scope}</p>
                    </div>
                  )}
                  
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">Assessment Approach</h4>
                    <p className="text-sm text-[hsl(var(--tecastra-darkgray))] mb-3">{framework.assessment}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">Key Deliverables</h4>
                    <ul className="space-y-1">
                      {framework.deliverables.map((deliverable, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="mt-1 mr-2 h-3 w-3 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
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

      {/* Assessment Process */}
      <section className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Structured Assessment Process
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Proven methodology ensuring comprehensive coverage with minimal business disruption.
            </p>
          </motion.div>

          <div className="space-y-8">
            {assessmentProcess.map((phase, index) => (
              <motion.div
                key={phase.phase}
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
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Expected Outcomes</h4>
                    <ul className="space-y-2">
                      {phase.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start">
                          <Target className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
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

      {/* Report Deliverables */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Comprehensive Report Deliverables
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Tailored reporting for different stakeholder groups with actionable insights and clear next steps.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {reportDeliverables.map((report, index) => (
              <motion.div
                key={report.deliverable}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <FileText className="h-8 w-8 text-[hsl(var(--tecastra-teal))] mr-3" />
                  <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))]">
                    {report.deliverable}
                  </h3>
                </div>
                
                <p className="text-[hsl(var(--tecastra-darkgray))] mb-6">{report.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">Report Contents</h4>
                    <ul className="space-y-1">
                      {report.contents.map((content, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                          <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{content}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-[hsl(var(--tecastra-gray))] p-4 rounded-lg">
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">Target Audience</h4>
                    <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">{report.audience}</p>
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
              Strengthen Your Security Posture
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Get comprehensive insights into your cybersecurity risks with actionable recommendations 
              and strategic roadmap for security improvement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="px-8 py-3 bg-[hsl(var(--tecastra-teal))] text-white rounded-full font-medium hover:bg-[hsl(var(--tecastra-gold))] hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                Schedule Assessment
              </Link>
              <Link href="/contact" className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                Speak with Expert
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

export default CybersecurityRiskAssessment;