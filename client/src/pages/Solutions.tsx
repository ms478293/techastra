import { motion } from 'framer-motion';
import { images } from '@/assets/images';
import { Check, ArrowRight, Building, Shield, Users, Cloud, Zap, Lock, Eye, Briefcase, Factory, Heart, Landmark, ShoppingCart } from 'lucide-react';
import { Link } from 'wouter';

const Solutions = () => {
  const solutionsByUseCase = [
    {
      title: "Zero Trust Implementation",
      icon: Lock,
      description: "Comprehensive Zero Trust architecture implementation with TecAstra's integrated security platform.",
      image: images.cybersecurityProfessionals[0],
      challenges: [
        "Legacy network perimeters are ineffective",
        "Remote workforce security gaps",
        "Cloud adoption complexity",
        "Identity verification challenges"
      ],
      solution: [
        "TrustLynk Zero Trust Network Access with contextual scoring",
        "IdentaGate IAM with real-time authentication scoring",
        "FortIQ next-gen firewall with micro-segmentation",
        "SentraCore endpoint protection with explainable AI"
      ],
      benefits: [
        "90% reduction in lateral movement attacks",
        "60% faster secure access provisioning",
        "75% improvement in user experience",
        "50% reduction in security incidents"
      ],
      caseStudy: "Fortune 500 financial services company reduced security incidents by 78% after implementing TecAstra Zero Trust architecture across 15,000 endpoints."
    },
    {
      title: "Cloud Security & Compliance",
      icon: Cloud,
      description: "End-to-end cloud security with automated compliance monitoring and developer-friendly tools.",
      image: images.dataCenter[0],
      challenges: [
        "Multi-cloud security complexity",
        "Compliance automation needs",
        "Container and serverless security",
        "Developer security friction"
      ],
      solution: [
        "NebulaWall CNAPP with GitHub-native integration",
        "ClearDNS for cloud DNS security",
        "FlowOps for automated compliance workflows",
        "UnifySec unified console for cloud visibility"
      ],
      benefits: [
        "85% faster compliance reporting",
        "40% reduction in security friction for developers",
        "95% improvement in cloud posture visibility",
        "60% reduction in misconfigurations"
      ],
      caseStudy: "Healthcare organization achieved SOC 2 Type II compliance 6 months faster using TecAstra's automated cloud security platform."
    },
    {
      title: "Ransomware Prevention",
      icon: Shield,
      description: "Multi-layered ransomware defense strategy with AI-powered detection and automated response.",
      image: images.networkSecurity[0],
      challenges: [
        "Sophisticated ransomware variants",
        "Backup system targeting",
        "Lateral movement prevention",
        "Recovery time objectives"
      ],
      solution: [
        "SentraCore EDR with explainable AI detection",
        "MailShield 360 with phishing training",
        "FortIQ firewall with real-time threat intelligence",
        "FlowOps automated incident response"
      ],
      benefits: [
        "99.8% ransomware detection rate",
        "80% faster incident response",
        "90% reduction in false positives",
        "4-hour average recovery time"
      ],
      caseStudy: "Manufacturing company prevented $2.3M ransomware attack using TecAstra's integrated detection and response platform."
    },
    {
      title: "Remote Workforce Security",
      icon: Users,
      description: "Secure remote work enablement with seamless user experience and comprehensive protection.",
      image: images.cybersecurityProfessionals[1],
      challenges: [
        "Home network security risks",
        "Device management complexity",
        "VPN performance issues",
        "Shadow IT proliferation"
      ],
      solution: [
        "TrustLynk Zero Trust access with temporary links",
        "SentraCore lightweight endpoint protection",
        "MailShield 360 email security with training",
        "ClearDNS DNS filtering for home networks"
      ],
      benefits: [
        "70% improvement in remote access speed",
        "85% reduction in IT support tickets",
        "95% user satisfaction rate",
        "60% decrease in security incidents"
      ],
      caseStudy: "Global consulting firm secured 5,000 remote workers with 99.9% uptime and zero security breaches during transition."
    }
  ];

  const solutionsByIndustry = [
    {
      industry: "Financial Services",
      icon: Landmark,
      description: "Comprehensive cybersecurity for banks, credit unions, and financial institutions.",
      regulations: ["SOX", "PCI DSS", "GLBA", "FFIEC"],
      specificChallenges: [
        "Real-time fraud detection",
        "Customer data protection",
        "Regulatory compliance automation",
        "Third-party risk management"
      ],
      tecAstraApproach: [
        "PulseIQ threat intelligence customized for financial threats",
        "IdentaGate with multi-factor authentication for customer access",
        "FlowOps automated compliance reporting",
        "MailShield 360 for business email compromise prevention"
      ],
      results: "Average 95% reduction in false positives, 60% faster compliance reporting, $4.2M average annual savings"
    },
    {
      industry: "Healthcare",
      icon: Heart,
      description: "HIPAA-compliant security solutions protecting patient data and medical devices.",
      regulations: ["HIPAA", "HITECH", "FDA Cybersecurity", "GDPR"],
      specificChallenges: [
        "Medical device security",
        "Patient data privacy",
        "Operational technology protection",
        "24/7 availability requirements"
      ],
      tecAstraApproach: [
        "SentraCore EDR optimized for medical environments",
        "TrustLynk zero trust for clinical applications",
        "NebulaWall for cloud-based health records",
        "UnifySec unified dashboard for multi-facility visibility"
      ],
      results: "Zero patient data breaches, 40% improvement in system uptime, 90% faster incident response"
    },
    {
      industry: "Government",
      icon: Building,
      description: "FedRAMP-ready security solutions for federal, state, and local government agencies.",
      regulations: ["FedRAMP", "FISMA", "NIST", "CJIS"],
      specificChallenges: [
        "Citizen data protection",
        "Critical infrastructure security",
        "Multi-agency collaboration",
        "Budget constraints"
      ],
      tecAstraApproach: [
        "FortIQ NGFW with government-grade threat intelligence",
        "FlowOps SOAR with government workflow templates",
        "ClearDNS with classified domain protection",
        "PulseIQ threat intelligence with government-specific feeds"
      ],
      results: "100% compliance audit success rate, 70% reduction in security management overhead"
    },
    {
      industry: "Retail & E-commerce",
      icon: ShoppingCart,
      description: "Omnichannel security protecting customer transactions and business operations.",
      regulations: ["PCI DSS", "CCPA", "GDPR", "SOX"],
      specificChallenges: [
        "Point-of-sale security",
        "Customer data protection",
        "Supply chain security",
        "Seasonal traffic spikes"
      ],
      tecAstraApproach: [
        "NebulaWall for e-commerce platform protection",
        "TrustLynk for secure customer access",
        "MailShield 360 for brand protection",
        "SentraCore for POS system security"
      ],
      results: "99.9% transaction security, 50% reduction in fraud losses, 80% faster breach detection"
    },
    {
      industry: "Manufacturing",
      icon: Factory,
      description: "Industrial cybersecurity protecting operational technology and intellectual property.",
      regulations: ["NERC CIP", "IEC 62443", "NIST", "ISO 27001"],
      specificChallenges: [
        "OT/IT convergence security",
        "Industrial IoT protection",
        "Intellectual property theft",
        "Production uptime requirements"
      ],
      tecAstraApproach: [
        "FortIQ with industrial protocol inspection",
        "SentraCore for OT endpoint protection",
        "PulseIQ with manufacturing threat intelligence",
        "FlowOps for automated OT incident response"
      ],
      results: "Zero production downtime from security incidents, 85% improvement in threat visibility"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[hsl(var(--tecastra-darkblue))] to-[hsl(var(--tecastra-teal))] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
              TecAstra Security Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Industry-specific cybersecurity solutions tailored to your unique challenges, 
              compliance requirements, and business objectives
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#use-cases" className="px-8 py-3 bg-[hsl(var(--tecastra-gold))] text-[hsl(var(--tecastra-darkblue))] rounded-full font-medium hover:bg-[hsl(var(--tecastra-gold))]/90 transition duration-150">
                Explore Use Cases
              </Link>
              <Link href="#industries" className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                View Industries
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions by Use Case */}
      <section id="use-cases" className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Solutions by Use Case
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Comprehensive security strategies addressing today's most critical cybersecurity challenges
            </p>
          </motion.div>

          <div className="space-y-16">
            {solutionsByUseCase.map((solution, index) => (
              <motion.div
                key={solution.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="lg:flex">
                  <div className="lg:w-1/3">
                    <img 
                      src={solution.image}
                      alt={solution.title}
                      className="h-64 lg:h-full w-full object-cover"
                    />
                  </div>
                  <div className="lg:w-2/3 p-8">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-[hsl(var(--tecastra-teal))] rounded-full mr-4">
                        <solution.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-heading font-bold text-2xl text-[hsl(var(--tecastra-darkblue))]">
                        {solution.title}
                      </h3>
                    </div>
                    
                    <p className="text-[hsl(var(--tecastra-darkgray))] mb-6">
                      {solution.description}
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">Challenges</h4>
                        <ul className="space-y-1">
                          {solution.challenges.slice(0, 2).map((challenge, i) => (
                            <li key={i} className="text-sm text-[hsl(var(--tecastra-darkgray))]">• {challenge}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">TecAstra Solution</h4>
                        <ul className="space-y-1">
                          {solution.solution.slice(0, 2).map((item, i) => (
                            <li key={i} className="text-sm text-[hsl(var(--tecastra-darkgray))]">• {item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">Key Benefits</h4>
                        <ul className="space-y-1">
                          {solution.benefits.slice(0, 2).map((benefit, i) => (
                            <li key={i} className="text-sm text-[hsl(var(--tecastra-teal))] font-medium">• {benefit}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">Case Study</h4>
                        <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">
                          {solution.caseStudy.substring(0, 80)}...
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Link href={`/solutions/${solution.title.toLowerCase().replace(/\s+/g, '-')}`} className="px-6 py-2 bg-[hsl(var(--tecastra-teal))] text-white rounded-full text-sm font-medium hover:bg-[hsl(var(--tecastra-darkblue))] transition duration-150">
                        Learn More
                      </Link>
                      <Link href="/demo" className="px-6 py-2 border border-[hsl(var(--tecastra-teal))] text-[hsl(var(--tecastra-teal))] rounded-full text-sm font-medium hover:bg-[hsl(var(--tecastra-teal))] hover:text-white transition duration-150">
                        Request Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions by Industry */}
      <section id="industries" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Tailored cybersecurity approaches addressing unique industry requirements and compliance standards
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {solutionsByIndustry.map((industry, index) => (
              <motion.div
                key={industry.industry}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-[hsl(var(--tecastra-teal))] rounded-full mr-4">
                    <industry.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))] mb-1">
                      {industry.industry}
                    </h3>
                    <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">
                      {industry.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">Compliance Standards</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.regulations.map((reg, i) => (
                      <span key={i} className="px-3 py-1 bg-[hsl(var(--tecastra-gray))] text-sm rounded-full">
                        {reg}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">Key Challenges</h4>
                    <ul className="space-y-1">
                      {industry.specificChallenges.slice(0, 3).map((challenge, i) => (
                        <li key={i} className="text-sm text-[hsl(var(--tecastra-darkgray))] flex items-start">
                          <span className="mr-2">•</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">TecAstra Approach</h4>
                    <ul className="space-y-1">
                      {industry.tecAstraApproach.slice(0, 3).map((approach, i) => (
                        <li key={i} className="text-sm text-[hsl(var(--tecastra-darkgray))] flex items-start">
                          <Check className="mr-2 h-3 w-3 text-[hsl(var(--tecastra-teal))] mt-0.5 flex-shrink-0" />
                          <span>{approach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-[hsl(var(--tecastra-gray))] p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">Proven Results</h4>
                  <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">
                    {industry.results}
                  </p>
                </div>

                <div className="flex gap-3">
                  <Link href={`/solutions/industry/${industry.industry.toLowerCase().replace(/\s+/g, '-')}`} className="px-4 py-2 bg-[hsl(var(--tecastra-teal))] text-white rounded-full text-sm font-medium hover:bg-[hsl(var(--tecastra-darkblue))] transition duration-150">
                    Industry Details
                  </Link>
                  <Link href="/contact" className="px-4 py-2 border border-[hsl(var(--tecastra-teal))] text-[hsl(var(--tecastra-teal))] rounded-full text-sm font-medium hover:bg-[hsl(var(--tecastra-teal))] hover:text-white transition duration-150">
                    Contact Expert
                  </Link>
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
              Ready to Implement Your Solution?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Our security experts will work with you to design and implement a customized 
              cybersecurity solution that meets your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-3 bg-[hsl(var(--tecastra-teal))] text-white rounded-full font-medium hover:bg-[hsl(var(--tecastra-gold))] hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                Schedule Consultation
              </Link>
              <Link href="/demo" className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;