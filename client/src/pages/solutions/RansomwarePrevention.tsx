import { motion } from 'framer-motion';
import { images } from '@/assets/images';
import { Check, Shield, Brain, AlertTriangle, Clock, Eye, Zap, Lock, BarChart3, Users } from 'lucide-react';
import { Link } from 'wouter';

const RansomwarePrevention = () => {
  const ransomwareThreats = [
    {
      threat: "Double Extortion Attacks",
      description: "Attackers steal data before encryption, threatening public release",
      frequency: "85% of ransomware attacks in 2024",
      impact: "Average cost: $4.5M per incident",
      prevention: "SentraCore EDR with data exfiltration detection and MailShield 360 preventing initial access"
    },
    {
      threat: "Supply Chain Ransomware",
      description: "Attacks targeting managed service providers and software vendors",
      frequency: "300% increase year-over-year",
      impact: "Cascading effects across multiple organizations",
      prevention: "Zero Trust architecture with TrustLynk eliminating lateral movement capabilities"
    },
    {
      threat: "Ransomware-as-a-Service (RaaS)",
      description: "Commoditized ransomware tools lowering barrier to entry",
      frequency: "70% of ransomware operations",
      impact: "More frequent, sophisticated attacks",
      prevention: "AI-powered detection with explainable threat analysis and automated response"
    },
    {
      threat: "Cloud-Native Ransomware",
      description: "Attacks specifically designed for cloud environments",
      frequency: "150% increase in cloud-targeted attacks",
      impact: "Business continuity disruption",
      prevention: "NebulaWall CNAPP with container and serverless protection"
    }
  ];

  const defenseStrategy = [
    {
      layer: "Prevention",
      description: "Stopping ransomware before it enters your environment",
      technologies: ["MailShield 360", "ClearDNS", "FortIQ NGFW"],
      tactics: [
        "Advanced email filtering with phishing awareness training",
        "DNS-based malware domain blocking",
        "Network traffic inspection with threat intelligence",
        "Vulnerability management and patching automation",
        "User awareness training and simulated attacks"
      ],
      effectiveness: "Prevents 95% of ransomware attempts"
    },
    {
      layer: "Detection",
      description: "Rapid identification of ransomware activity",
      technologies: ["SentraCore EDR", "PulseIQ Threat Intel"],
      tactics: [
        "Behavioral analysis of file encryption patterns",
        "Memory-based attack detection",
        "Network communication anomaly detection",
        "Command and control identification",
        "Lateral movement detection"
      ],
      effectiveness: "Sub-3-minute detection time"
    },
    {
      layer: "Response",
      description: "Automated containment and recovery",
      technologies: ["FlowOps SOAR", "SentraCore EDR"],
      tactics: [
        "Automatic endpoint isolation",
        "Network segmentation enforcement",
        "Backup system protection",
        "Forensic evidence preservation",
        "Recovery orchestration"
      ],
      effectiveness: "4-hour average recovery time"
    },
    {
      layer: "Recovery",
      description: "Business continuity and lessons learned",
      technologies: ["UnifySec Console", "FlowOps SOAR"],
      tactics: [
        "Immutable backup verification",
        "System restoration prioritization",
        "Business process resumption",
        "Incident analysis and reporting",
        "Security posture improvement"
      ],
      effectiveness: "99.8% data recovery success"
    }
  ];

  const industryImpacts = [
    {
      industry: "Healthcare",
      vulnerabilities: ["Critical patient care systems", "Medical device networks", "Patient data repositories"],
      consequences: ["Life-threatening service disruptions", "HIPAA violations", "Reputational damage"],
      protection: [
        "Medical device micro-segmentation",
        "Zero-downtime security updates",
        "HIPAA-compliant incident response",
        "24/7 threat monitoring"
      ],
      results: "Zero patient care disruptions, 99.99% system availability"
    },
    {
      industry: "Financial Services",
      vulnerabilities: ["Trading systems", "Customer databases", "Regulatory reporting"],
      consequences: ["Market disruption", "Regulatory penalties", "Customer trust loss"],
      protection: [
        "Real-time transaction monitoring",
        "Immutable audit trails",
        "Regulatory compliance automation",
        "Customer communication systems"
      ],
      results: "Zero trading disruptions, $8M average savings per incident avoided"
    },
    {
      industry: "Manufacturing",
      vulnerabilities: ["Production control systems", "Supply chain networks", "Intellectual property"],
      consequences: ["Production line shutdowns", "Supply chain disruption", "IP theft"],
      protection: [
        "OT/IT network segmentation",
        "Industrial protocol inspection",
        "IP monitoring and protection",
        "Supplier security assessment"
      ],
      results: "Zero production downtime, 95% reduction in IP theft attempts"
    },
    {
      industry: "Education",
      vulnerabilities: ["Student information systems", "Research data", "Administrative networks"],
      consequences: ["Academic disruption", "Research loss", "Privacy violations"],
      protection: [
        "Student data classification",
        "Research network isolation",
        "Faculty training programs",
        "Incident response planning"
      ],
      results: "Zero academic disruptions, 100% data recovery success"
    }
  ];

  const implementationPhases = [
    {
      phase: "Rapid Assessment & Hardening",
      duration: "Week 1-2",
      priority: "Critical",
      activities: [
        "Current vulnerability assessment",
        "Backup system verification",
        "Endpoint security deployment",
        "Email security implementation",
        "User awareness training"
      ],
      outcomes: [
        "Immediate risk reduction",
        "Baseline security establishment",
        "User education completion",
        "Backup integrity confirmation"
      ]
    },
    {
      phase: "Advanced Detection Deployment",
      duration: "Week 3-4",
      priority: "High",
      activities: [
        "EDR platform installation",
        "Network monitoring setup",
        "Threat intelligence integration",
        "Behavioral analysis configuration",
        "Alert tuning and optimization"
      ],
      outcomes: [
        "Real-time threat detection",
        "Automated alert generation",
        "False positive minimization",
        "Threat hunting capabilities"
      ]
    },
    {
      phase: "Response Automation",
      duration: "Week 5-6",
      priority: "High",
      activities: [
        "SOAR platform deployment",
        "Playbook development",
        "Integration testing",
        "Response team training",
        "Simulation exercises"
      ],
      outcomes: [
        "Automated incident response",
        "Response time optimization",
        "Team readiness confirmation",
        "Process validation"
      ]
    },
    {
      phase: "Continuous Improvement",
      duration: "Ongoing",
      priority: "Medium",
      activities: [
        "Threat landscape monitoring",
        "Security control optimization",
        "Training program updates",
        "Technology refresh planning",
        "Metrics and reporting"
      ],
      outcomes: [
        "Adaptive security posture",
        "Continuous risk reduction",
        "Improved response capabilities",
        "Measurable security ROI"
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
                Ransomware Prevention
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Multi-layered ransomware defense strategy with AI-powered detection and 
                automated response, achieving 99.8% ransomware detection rate and 
                4-hour average recovery time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo" className="px-8 py-3 bg-[hsl(var(--tecastra-gold))] text-[hsl(var(--tecastra-darkblue))] rounded-full font-medium hover:bg-[hsl(var(--tecastra-gold))]/90 transition duration-150">
                  Free Risk Assessment
                </Link>
                <Link href="/contact" className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                  Emergency Response
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
                alt="Ransomware Prevention"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Threat Landscape */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Evolving Ransomware Threat Landscape
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Understanding current ransomware tactics, techniques, and procedures to build effective defenses.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {ransomwareThreats.map((threat, index) => (
              <motion.div
                key={threat.threat}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <AlertTriangle className="h-8 w-8 text-[hsl(var(--tecastra-gold))] mr-3" />
                  <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))]">
                    {threat.threat}
                  </h3>
                </div>
                
                <p className="text-[hsl(var(--tecastra-darkgray))] mb-6">{threat.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-red-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-red-600">Frequency</p>
                    <p className="text-sm text-red-800">{threat.frequency}</p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-orange-600">Impact</p>
                    <p className="text-sm text-orange-800">{threat.impact}</p>
                  </div>
                </div>
                
                <div className="bg-[hsl(var(--tecastra-gray))] p-4 rounded-lg">
                  <h4 className="font-semibold text-[hsl(var(--tecastra-teal))] mb-2">TecAstra Prevention:</h4>
                  <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">{threat.prevention}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Defense Strategy */}
      <section className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Multi-Layered Defense Strategy
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Comprehensive ransomware protection through prevention, detection, response, and recovery layers.
            </p>
          </motion.div>

          <div className="space-y-8">
            {defenseStrategy.map((layer, index) => (
              <motion.div
                key={layer.layer}
                className="bg-white rounded-xl shadow-lg p-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-[hsl(var(--tecastra-teal))] text-white rounded-full mr-4 font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))]">
                        {layer.layer}
                      </h3>
                      <p className="text-[hsl(var(--tecastra-darkgray))]">{layer.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="px-4 py-2 bg-[hsl(var(--tecastra-teal))] text-white rounded-full text-sm font-medium">
                      {layer.effectiveness}
                    </span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {layer.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-[hsl(var(--tecastra-gray))] text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Defense Tactics</h4>
                    <ul className="space-y-1">
                      {layer.tactics.slice(0, 3).map((tactic, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                          <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{tactic}</span>
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

      {/* Industry Impact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Industry-Specific Ransomware Protection
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Tailored ransomware defense strategies addressing unique industry vulnerabilities and requirements.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {industryImpacts.map((industry, index) => (
              <motion.div
                key={industry.industry}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))] mb-6">
                  {industry.industry}
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Critical Vulnerabilities</h4>
                    <ul className="space-y-1">
                      {industry.vulnerabilities.map((vuln, i) => (
                        <li key={i} className="text-sm text-[hsl(var(--tecastra-darkgray))]">• {vuln}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Potential Consequences</h4>
                    <ul className="space-y-1">
                      {industry.consequences.map((consequence, i) => (
                        <li key={i} className="text-sm text-[hsl(var(--tecastra-darkgray))]">• {consequence}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-teal))] mb-2">TecAstra Protection</h4>
                    <ul className="space-y-1">
                      {industry.protection.map((protection, i) => (
                        <li key={i} className="flex items-start">
                          <Shield className="mt-1 mr-2 h-3 w-3 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                          <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{protection}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-[hsl(var(--tecastra-gray))] p-4 rounded-lg">
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">Proven Results</h4>
                    <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">{industry.results}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Rapid Implementation Timeline
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Fast-track ransomware protection deployment with immediate risk reduction and long-term resilience.
            </p>
          </motion.div>

          <div className="space-y-6">
            {implementationPhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                className="bg-white rounded-xl shadow-lg p-6"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-10 h-10 bg-[hsl(var(--tecastra-teal))] text-white rounded-full mr-4 font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-[hsl(var(--tecastra-darkblue))]">
                        {phase.phase}
                      </h3>
                      <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">{phase.duration}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    phase.priority === 'Critical' ? 'bg-red-100 text-red-800' :
                    phase.priority === 'High' ? 'bg-orange-100 text-orange-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {phase.priority} Priority
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">Activities</h4>
                    <ul className="space-y-1">
                      {phase.activities.map((activity, i) => (
                        <li key={i} className="text-sm text-[hsl(var(--tecastra-darkgray))]">• {activity}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">Expected Outcomes</h4>
                    <ul className="space-y-1">
                      {phase.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="mt-1 mr-2 h-3 w-3 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
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

      {/* CTA Section */}
      <section className="py-16 bg-[hsl(var(--tecastra-darkblue))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
              Protect Against Ransomware Today
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Don't wait for an attack. Implement comprehensive ransomware protection with proven 
              99.8% detection rates and 4-hour recovery times.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="px-8 py-3 bg-[hsl(var(--tecastra-teal))] text-white rounded-full font-medium hover:bg-[hsl(var(--tecastra-gold))] hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                Free Risk Assessment
              </Link>
              <Link href="/contact" className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                Emergency Response
              </Link>
              <Link href="/solutions" className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                View All Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RansomwarePrevention;