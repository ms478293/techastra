import { motion } from 'framer-motion';
import { images } from '@/assets/images';
import { Check, Shield, Zap, Network, Settings, BarChart3, Users, Cloud, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

const FortIQ = () => {
  const keyFeatures = [
    {
      icon: Shield,
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms continuously analyze network traffic to identify and block sophisticated threats in real-time, including zero-day attacks and advanced persistent threats."
    },
    {
      icon: Network,
      title: "Application Visibility & Control",
      description: "Granular identification and control of applications, users, and content across your network infrastructure, enabling precise policy enforcement and bandwidth management."
    },
    {
      icon: Zap,
      title: "Automated Response",
      description: "Intelligent automated incident response capabilities that can isolate threats, block malicious traffic, and initiate remediation workflows without human intervention."
    },
    {
      icon: Settings,
      title: "Unified Policy Management",
      description: "Centralized policy creation and management across distributed deployments with consistent rule enforcement and simplified administration."
    }
  ];

  const technicalSpecs = [
    {
      category: "Performance",
      specs: [
        "Firewall throughput: Up to 100 Gbps",
        "Threat prevention throughput: Up to 50 Gbps", 
        "IPsec VPN throughput: Up to 25 Gbps",
        "Concurrent sessions: Up to 64 million",
        "New sessions per second: Up to 2 million"
      ]
    },
    {
      category: "Security Features",
      specs: [
        "Intrusion Prevention System (IPS)",
        "Anti-malware and anti-spyware",
        "URL filtering and web security",
        "DNS security and C2 detection",
        "SSL/TLS decryption and inspection"
      ]
    },
    {
      category: "Networking",
      specs: [
        "Virtual routing and forwarding (VRF)",
        "Quality of Service (QoS)",
        "High availability and clustering", 
        "IPv4 and IPv6 support",
        "SD-WAN integration capabilities"
      ]
    },
    {
      category: "Management",
      specs: [
        "Cloud-based management console",
        "RESTful API for automation",
        "SIEM integration and logging",
        "Role-based administration",
        "Compliance reporting frameworks"
      ]
    }
  ];

  const useCases = [
    {
      title: "Enterprise Perimeter Security",
      description: "Deploy FortIQ as your primary network gateway to protect against external threats while enabling secure business applications.",
      benefits: ["99.9% threat detection accuracy", "50% reduction in false positives", "80% faster incident response"]
    },
    {
      title: "Data Center Protection",
      description: "Secure east-west traffic within data centers and protect critical assets with micro-segmentation capabilities.",
      benefits: ["Zero lateral movement attacks", "40% improvement in compliance posture", "Automated threat containment"]
    },
    {
      title: "Cloud Security Gateway",
      description: "Extend consistent security policies to cloud environments with native integration to major cloud providers.",
      benefits: ["Unified policy management", "60% faster cloud migration", "Seamless hybrid connectivity"]
    },
    {
      title: "Remote Access Security",
      description: "Secure remote worker access with integrated VPN capabilities and zero-trust network access controls.",
      benefits: ["95% user satisfaction", "70% reduction in VPN complexity", "Enhanced remote security posture"]
    }
  ];

  const competitorComparison = [
    {
      feature: "Deployment Speed",
      tecastra: "Cloud-native instant deployment",
      competitor: "Traditional 2-3 week setup process"
    },
    {
      feature: "Policy Management",
      tecastra: "Intuitive visual policy builder",
      competitor: "Complex CLI-based configuration"
    },
    {
      feature: "Threat Intelligence",
      tecastra: "Real-time AI-powered analysis",
      competitor: "Signature-based detection with delays"
    },
    {
      feature: "Total Cost of Ownership",
      tecastra: "40% lower over 3 years",
      competitor: "Higher licensing and maintenance costs"
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
                FortIQ Next-Generation Firewall
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Cloud-native firewall with AI-powered threat detection, instant deployment, 
                and intuitive policy management for comprehensive network protection.
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
                src={images.networkSecurity[0]}
                alt="FortIQ Next-Generation Firewall"
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
              Advanced Security Capabilities
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              FortIQ delivers enterprise-grade security with cloud-native architecture, 
              providing superior protection against modern cyber threats.
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

      {/* Technical Specifications */}
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
              Industry-leading performance and comprehensive security features designed for enterprise environments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSpecs.map((category, index) => (
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

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Real-World Applications
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Discover how organizations deploy FortIQ to address critical security challenges and business requirements.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))] mb-4">
                  {useCase.title}
                </h3>
                <p className="text-[hsl(var(--tecastra-darkgray))] mb-6">
                  {useCase.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))]">Key Benefits:</h4>
                  {useCase.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))]" />
                      <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Why Choose FortIQ
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              See how FortIQ outperforms traditional firewall solutions with modern architecture and advanced capabilities.
            </p>
          </motion.div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[hsl(var(--tecastra-darkblue))] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading font-bold">Feature</th>
                    <th className="px-6 py-4 text-left font-heading font-bold">TecAstra FortIQ</th>
                    <th className="px-6 py-4 text-left font-heading font-bold">Traditional Firewalls</th>
                  </tr>
                </thead>
                <tbody>
                  {competitorComparison.map((item, index) => (
                    <tr key={item.feature} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-semibold text-[hsl(var(--tecastra-darkblue))]">
                        {item.feature}
                      </td>
                      <td className="px-6 py-4 text-[hsl(var(--tecastra-teal))] font-medium">
                        {item.tecastra}
                      </td>
                      <td className="px-6 py-4 text-[hsl(var(--tecastra-darkgray))]">
                        {item.competitor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
              Ready to Transform Your Network Security?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the power of FortIQ's cloud-native architecture and AI-powered threat detection. 
              Schedule a personalized demo to see how it can protect your organization.
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

export default FortIQ;