import { motion } from 'framer-motion';
import { images } from '@/assets/images';
import { Check, Shield, Brain, Globe, Zap, BarChart3, Users, AlertTriangle } from 'lucide-react';
import { Link } from 'wouter';

const ClearDNS = () => {
  const keyFeatures = [
    {
      icon: Brain,
      title: "AI Threat Scoring Engine",
      description: "Machine learning algorithms analyze DNS queries in real-time, scoring threats based on behavioral patterns, reputation data, and contextual analysis to identify malicious domains with 99.8% accuracy."
    },
    {
      icon: Shield,
      title: "Phishing-Aware DNS Filtering",
      description: "Advanced phishing detection specifically designed to identify and block sophisticated phishing campaigns, including newly registered domains and homograph attacks."
    },
    {
      icon: Globe,
      title: "Real-Time Domain Reputation",
      description: "Continuous monitoring of millions of domains with instant reputation updates based on global threat intelligence feeds and behavioral analysis from our security network."
    },
    {
      icon: Zap,
      title: "Zero-Latency Protection",
      description: "Inline DNS filtering with sub-millisecond response times that doesn't impact network performance while providing comprehensive malware and threat protection."
    }
  ];

  const technicalCapabilities = [
    {
      category: "Performance Metrics",
      specs: [
        "DNS query processing: 100M+ queries/second",
        "Global response time: <2ms average",
        "Threat detection accuracy: 99.8%",
        "False positive rate: <0.1%",
        "DNS cache efficiency: 95%+"
      ]
    },
    {
      category: "Security Features",
      specs: [
        "Real-time malware domain blocking",
        "Command & control communication detection",
        "DNS exfiltration prevention",
        "Typosquatting and homograph detection",
        "Cryptocurrency mining domain blocking"
      ]
    },
    {
      category: "Intelligence Sources",
      specs: [
        "50+ threat intelligence feeds",
        "Behavioral analysis engine",
        "Machine learning classification",
        "Global DNS monitoring network",
        "Crowdsourced threat reporting"
      ]
    },
    {
      category: "Deployment Options",
      specs: [
        "Cloud-based DNS service",
        "On-premises appliance",
        "Hybrid deployment model",
        "API integration capabilities",
        "Multi-tenant architecture"
      ]
    }
  ];

  const protectionCategories = [
    {
      title: "Malware & Ransomware",
      description: "Blocks access to domains hosting malware, ransomware, and exploit kits",
      threats: ["Trojan downloaders", "Ransomware C2 servers", "Exploit kit landing pages", "Malicious redirects"],
      effectiveness: "99.9% block rate"
    },
    {
      title: "Phishing & Fraud",
      description: "Prevents access to phishing sites and fraudulent domains targeting credentials",
      threats: ["Brand impersonation sites", "Credential harvesting pages", "Social engineering domains", "Financial fraud sites"],
      effectiveness: "98.7% phishing detection"
    },
    {
      title: "Command & Control",
      description: "Disrupts malware communication with command and control infrastructure",
      threats: ["Botnet C2 domains", "APT communication channels", "Data exfiltration endpoints", "Remote access trojans"],
      effectiveness: "99.5% C2 disruption"
    },
    {
      title: "Unwanted Content",
      description: "Filters inappropriate content and enforces corporate acceptable use policies",
      threats: ["Adult content sites", "Gaming platforms", "Social media abuse", "Productivity drains"],
      effectiveness: "Customizable filtering"
    }
  ];

  const industryBenefits = [
    {
      industry: "Financial Services",
      challenges: ["Brand protection", "Regulatory compliance", "Customer data security"],
      benefits: [
        "95% reduction in phishing attempts",
        "Zero tolerance policy enforcement",
        "Automated compliance reporting"
      ]
    },
    {
      industry: "Healthcare",
      challenges: ["HIPAA compliance", "Medical device security", "Patient data protection"],
      benefits: [
        "HIPAA-compliant DNS filtering",
        "Medical IoT device protection",
        "Zero patient data exposure incidents"
      ]
    },
    {
      industry: "Education",
      challenges: ["Student safety", "CIPA compliance", "Network performance"],
      benefits: [
        "Age-appropriate content filtering",
        "CIPA compliance automation",
        "Minimal impact on learning platforms"
      ]
    },
    {
      industry: "Government",
      challenges: ["National security", "Data sovereignty", "Critical infrastructure"],
      benefits: [
        "Advanced persistent threat protection",
        "Classified network compatibility",
        "99.99% uptime guarantee"
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
                ClearDNS Security Platform
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                AI-powered DNS security with advanced threat scoring and phishing-aware filtering 
                to protect against malicious domains and data exfiltration attempts.
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
                src={images.dataCenter[0]}
                alt="ClearDNS Security Platform"
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
              Advanced DNS Security Capabilities
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              ClearDNS leverages artificial intelligence and machine learning to provide the most accurate 
              and responsive DNS security platform available today.
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

      {/* Technical Capabilities */}
      <section className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Technical Specifications
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Enterprise-grade DNS security infrastructure with global reach and sub-millisecond response times.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalCapabilities.map((category, index) => (
              <motion.div
                key={category.category}
                className="bg-white rounded-xl shadow-lg p-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="font-heading font-bold text-lg text-[hsl(var(--tecastra-darkblue))] mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.specs.map((spec, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                      <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{spec}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Protection Categories */}
      <section className="py-20">
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
              Multi-layered DNS security protecting against the full spectrum of DNS-based threats and attacks.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {protectionCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))]">
                    {category.title}
                  </h3>
                  <span className="px-3 py-1 bg-[hsl(var(--tecastra-teal))] text-white text-sm rounded-full">
                    {category.effectiveness}
                  </span>
                </div>
                <p className="text-[hsl(var(--tecastra-darkgray))] mb-6">
                  {category.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))]">Protected Threats:</h4>
                  {category.threats.map((threat, i) => (
                    <div key={i} className="flex items-center">
                      <AlertTriangle className="mr-2 h-4 w-4 text-[hsl(var(--tecastra-gold))]" />
                      <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{threat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Benefits */}
      <section className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Industry-Specific Benefits
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Tailored DNS security solutions addressing unique industry requirements and compliance standards.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {industryBenefits.map((industry, index) => (
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
                
                <div className="mb-6">
                  <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">Key Challenges:</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.challenges.map((challenge, i) => (
                      <span key={i} className="px-3 py-1 bg-[hsl(var(--tecastra-gray))] text-sm rounded-full">
                        {challenge}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">ClearDNS Benefits:</h4>
                  <div className="space-y-2">
                    {industry.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))]" />
                        <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{benefit}</span>
                      </div>
                    ))}
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
              Secure Your DNS Infrastructure Today
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the power of AI-driven DNS security with ClearDNS. 
              Protect your organization from advanced threats while maintaining optimal network performance.
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

export default ClearDNS;