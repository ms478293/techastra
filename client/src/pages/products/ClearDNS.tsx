import { motion } from 'framer-motion';
import { useState } from 'react';
import { images } from '@/assets/images';
import { Check, Shield, Brain, Globe, Zap, BarChart3, Users, AlertTriangle, Play, Star, Award, Clock, TrendingUp, Eye, Lock, Download, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'wouter';

const ClearDNS = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  const keyFeatures = [
    {
      icon: Brain,
      title: "AI Threat Scoring Engine",
      description: "Machine learning algorithms analyze DNS queries in real-time, scoring threats based on behavioral patterns, reputation data, and contextual analysis to identify malicious domains with 99.8% accuracy.",
      details: [
        "Real-time behavioral analysis",
        "Machine learning classification",
        "Contextual threat scoring",
        "Adaptive learning algorithms",
        "False positive reduction"
      ]
    },
    {
      icon: Shield,
      title: "Phishing-Aware DNS Filtering",
      description: "Advanced phishing detection specifically designed to identify and block sophisticated phishing campaigns, including newly registered domains and homograph attacks.",
      details: [
        "Brand impersonation detection",
        "Homograph attack prevention",
        "Newly registered domain monitoring",
        "Credential harvesting protection",
        "Social engineering detection"
      ]
    },
    {
      icon: Globe,
      title: "Real-Time Domain Reputation",
      description: "Continuous monitoring of millions of domains with instant reputation updates based on global threat intelligence feeds and behavioral analysis from our security network.",
      details: [
        "Global threat intelligence",
        "Real-time reputation updates",
        "Crowdsourced threat data",
        "Historical domain analysis",
        "Predictive threat modeling"
      ]
    },
    {
      icon: Zap,
      title: "Zero-Latency Protection",
      description: "Inline DNS filtering with sub-millisecond response times that doesn't impact network performance while providing comprehensive malware and threat protection.",
      details: [
        "Sub-millisecond response times",
        "Inline DNS processing",
        "No network performance impact",
        "Global edge network",
        "Automatic failover"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$2.99",
      period: "per user/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 100 users",
        "Basic threat protection",
        "Standard support",
        "Web dashboard",
        "Email reports"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$4.99",
      period: "per user/month",
      description: "Ideal for growing organizations",
      features: [
        "Up to 1,000 users",
        "Advanced threat protection",
        "AI-powered filtering",
        "Priority support",
        "API access",
        "Custom policies"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact sales",
      description: "For large enterprises with complex needs",
      features: [
        "Unlimited users",
        "Full feature set",
        "Dedicated support",
        "On-premises deployment",
        "Custom integrations",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const customerTestimonials = [
    {
      name: "Sarah Johnson",
      role: "CISO",
      company: "Global Financial Corp",
      rating: 5,
      testimonial: "ClearDNS has transformed our security posture. We've seen a 95% reduction in phishing attempts and our incident response time has improved dramatically.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "IT Director",
      company: "TechStart Solutions",
      rating: 5,
      testimonial: "The AI-powered threat detection is incredible. It caught sophisticated attacks that our previous solution missed. ROI was achieved within the first quarter.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Security Manager",
      company: "Healthcare Network",
      rating: 5,
      testimonial: "HIPAA compliance was our top priority. ClearDNS not only meets all requirements but provides additional layers of protection we didn't know we needed.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const liveStats = [
    { label: "Threats Blocked Today", value: "2.4M+", icon: Shield, color: "text-red-500" },
    { label: "Active Users", value: "50K+", icon: Users, color: "text-blue-500" },
    { label: "Response Time", value: "<2ms", icon: Zap, color: "text-green-500" },
    { label: "Uptime", value: "99.99%", icon: Clock, color: "text-purple-500" }
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

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'testimonials', label: 'Customers' },
    { id: 'demo', label: 'Live Demo' }
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
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 mr-2" />
                <span className="text-sm font-medium">Gartner Magic Quadrant Leader 2024</span>
              </div>
              <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
                ClearDNS Security Platform
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                AI-powered DNS security with advanced threat scoring and phishing-aware filtering 
                to protect against malicious domains and data exfiltration attempts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/cleardns-platform" className="px-8 py-3 bg-[hsl(var(--tecastra-gold))] text-[hsl(var(--tecastra-darkblue))] rounded-full font-medium hover:bg-[hsl(var(--tecastra-gold))]/90 transition duration-150 flex items-center justify-center">
                  <Play className="h-4 w-4 mr-2" />
                  Launch Platform
                </Link>
                <Link href="/demo" className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                  Get Demo
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

      {/* Live Stats */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {liveStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`flex justify-center mb-2 ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold text-[hsl(var(--tecastra-darkblue))]">{stat.value}</div>
                <div className="text-sm text-[hsl(var(--tecastra-darkgray))]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-6 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full font-medium transition duration-150 ${
                  activeTab === tab.id
                    ? 'bg-[hsl(var(--tecastra-teal))] text-white'
                    : 'bg-white text-[hsl(var(--tecastra-darkgray))] hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
                  Enterprise DNS Security Reimagined
                </h2>
                <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
                  ClearDNS combines artificial intelligence, machine learning, and global threat intelligence 
                  to provide the most advanced DNS security platform available today.
                </p>
              </div>

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
                    <p className="text-[hsl(var(--tecastra-darkgray))] mb-4">
                      {feature.description}
                    </p>
                    <button
                      onClick={() => setExpandedFeature(expandedFeature === feature.title ? null : feature.title)}
                      className="text-[hsl(var(--tecastra-teal))] font-medium flex items-center"
                    >
                      {expandedFeature === feature.title ? (
                        <>
                          <ChevronUp className="h-4 w-4 mr-1" />
                          Show less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="h-4 w-4 mr-1" />
                          Learn more
                        </>
                      )}
                    </button>
                    {expandedFeature === feature.title && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t"
                      >
                        <ul className="space-y-2">
                          {feature.details.map((detail, i) => (
                            <li key={i} className="flex items-start">
                              <Check className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                              <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Features Tab */}
          {activeTab === 'features' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
                  Technical Specifications
                </h2>
                <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
                  Enterprise-grade DNS security infrastructure with global reach and sub-millisecond response times.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

              <div className="text-center mb-16">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
                  Comprehensive Threat Protection
                </h2>
                <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
                  Multi-layered DNS security protecting against the full spectrum of DNS-based threats and attacks.
                </p>
              </div>

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
            </motion.div>
          )}

          {/* Pricing Tab */}
          {activeTab === 'pricing' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
                  Simple, Transparent Pricing
                </h2>
                <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
                  Choose the plan that fits your organization's needs. All plans include our core security features.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    className={`relative bg-white rounded-xl shadow-lg p-8 border-2 ${
                      plan.popular ? 'border-[hsl(var(--tecastra-teal))]' : 'border-gray-100'
                    }`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-[hsl(var(--tecastra-teal))] text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h3 className="font-heading font-bold text-2xl text-[hsl(var(--tecastra-darkblue))] mb-2">
                        {plan.name}
                      </h3>
                      <div className="mb-2">
                        <span className="text-4xl font-bold text-[hsl(var(--tecastra-darkblue))]">{plan.price}</span>
                        <span className="text-[hsl(var(--tecastra-darkgray))]">/{plan.period}</span>
                      </div>
                      <p className="text-[hsl(var(--tecastra-darkgray))]">{plan.description}</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <Check className="mr-3 h-5 w-5 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                          <span className="text-[hsl(var(--tecastra-darkgray))]">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button className={`w-full py-3 px-6 rounded-full font-medium transition duration-150 ${
                      plan.popular
                        ? 'bg-[hsl(var(--tecastra-teal))] text-white hover:bg-[hsl(var(--tecastra-teal))]/90'
                        : 'bg-[hsl(var(--tecastra-darkblue))] text-white hover:bg-[hsl(var(--tecastra-darkblue))]/90'
                    }`}>
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Testimonials Tab */}
          {activeTab === 'testimonials' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
                  Trusted by Industry Leaders
                </h2>
                <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
                  See what our customers say about ClearDNS and how it's transformed their security posture.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {customerTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.name}
                    className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))]">{testimonial.name}</h4>
                        <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">{testimonial.role}</p>
                        <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">{testimonial.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-[hsl(var(--tecastra-gold))] fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-[hsl(var(--tecastra-darkgray))] italic">"{testimonial.testimonial}"</p>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mb-16">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
                  Industry-Specific Benefits
                </h2>
                <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
                  Tailored DNS security solutions addressing unique industry requirements and compliance standards.
                </p>
              </div>

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
            </motion.div>
          )}

          {/* Demo Tab */}
          {activeTab === 'demo' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
                  Experience ClearDNS in Action
                </h2>
                <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
                  See how ClearDNS protects against real threats with our interactive demo environment.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="font-heading font-bold text-2xl text-[hsl(var(--tecastra-darkblue))] mb-6">
                    Live Threat Detection Demo
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))]">Real-time Threat Feed</h4>
                        <div className="flex items-center text-green-500">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                          Live
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                          <div>
                            <div className="font-medium text-red-800">malware.example.com</div>
                            <div className="text-sm text-red-600">Malware distribution domain</div>
                          </div>
                          <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">BLOCKED</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                          <div>
                            <div className="font-medium text-yellow-800">phishing-bank.com</div>
                            <div className="text-sm text-yellow-600">Phishing attempt detected</div>
                          </div>
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">BLOCKED</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                          <div>
                            <div className="font-medium text-green-800">google.com</div>
                            <div className="text-sm text-green-600">Legitimate domain</div>
                          </div>
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">ALLOWED</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                      <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-4">Performance Metrics</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[hsl(var(--tecastra-teal))]">1.2ms</div>
                          <div className="text-sm text-[hsl(var(--tecastra-darkgray))]">Avg Response Time</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[hsl(var(--tecastra-teal))]">99.8%</div>
                          <div className="text-sm text-[hsl(var(--tecastra-darkgray))]">Detection Accuracy</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                  <h3 className="font-heading font-bold text-2xl text-[hsl(var(--tecastra-darkblue))] mb-6">
                    Try ClearDNS Today
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-[hsl(var(--tecastra-gray))] rounded-lg">
                      <Eye className="h-5 w-5 text-[hsl(var(--tecastra-teal))] mr-3" />
                      <div>
                        <div className="font-medium">14-day free trial</div>
                        <div className="text-sm text-[hsl(var(--tecastra-darkgray))]">No credit card required</div>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-[hsl(var(--tecastra-gray))] rounded-lg">
                      <Lock className="h-5 w-5 text-[hsl(var(--tecastra-teal))] mr-3" />
                      <div>
                        <div className="font-medium">Full feature access</div>
                        <div className="text-sm text-[hsl(var(--tecastra-darkgray))]">All security features included</div>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-[hsl(var(--tecastra-gray))] rounded-lg">
                      <Download className="h-5 w-5 text-[hsl(var(--tecastra-teal))] mr-3" />
                      <div>
                        <div className="font-medium">Instant setup</div>
                        <div className="text-sm text-[hsl(var(--tecastra-darkgray))]">Deploy in under 5 minutes</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 space-y-3">
                    <Link href="/cleardns-platform" className="w-full px-6 py-3 bg-[hsl(var(--tecastra-teal))] text-white rounded-full font-medium hover:bg-[hsl(var(--tecastra-teal))]/90 transition duration-150 flex items-center justify-center">
                      <Play className="h-4 w-4 mr-2" />
                      Start Free Trial
                    </Link>
                    <Link href="/demo" className="w-full px-6 py-3 border-2 border-[hsl(var(--tecastra-teal))] text-[hsl(var(--tecastra-teal))] rounded-full font-medium hover:bg-[hsl(var(--tecastra-teal))] hover:text-white transition duration-150 flex items-center justify-center">
                      Schedule Demo
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

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
              <Link href="/cleardns-platform" className="px-8 py-3 bg-[hsl(var(--tecastra-gold))] text-[hsl(var(--tecastra-darkblue))] rounded-full font-medium hover:bg-[hsl(var(--tecastra-gold))]/90 transition duration-150 flex items-center justify-center">
                <Play className="h-4 w-4 mr-2" />
                Try ClearDNS Now
              </Link>
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