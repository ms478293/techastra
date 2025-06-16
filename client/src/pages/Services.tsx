import { motion } from 'framer-motion';
import { images } from '@/assets/images';
import { Check, ArrowRight, Shield, Users, Zap, Eye, Settings, BookOpen, Phone, Clock, Award, Target } from 'lucide-react';
import { Link } from 'wouter';

const Services = () => {
  const professionalServices = [
    {
      category: "Security Assessment & Consulting",
      icon: Eye,
      description: "Comprehensive security posture evaluation and strategic planning services",
      image: images.cybersecurityProfessionals[0],
      services: [
        {
          name: "Cybersecurity Risk Assessment",
          description: "Comprehensive evaluation of your security posture, vulnerabilities, and compliance gaps with actionable remediation roadmap.",
          deliverables: [
            "Executive risk summary and dashboard",
            "Detailed vulnerability assessment report",
            "Compliance gap analysis",
            "90-day remediation roadmap",
            "ROI analysis for security investments"
          ],
          duration: "2-4 weeks",
          pricing: "Starting at $25,000"
        },
        {
          name: "Zero Trust Architecture Design",
          description: "Strategic planning and architecture design for Zero Trust implementation tailored to your organization's unique requirements.",
          deliverables: [
            "Zero Trust maturity assessment",
            "Custom architecture blueprint",
            "Implementation phasing plan",
            "Technology selection guidance",
            "Change management strategy"
          ],
          duration: "4-6 weeks",
          pricing: "Starting at $40,000"
        },
        {
          name: "Compliance Readiness Assessment",
          description: "Industry-specific compliance evaluation for SOC 2, PCI DSS, HIPAA, FedRAMP, and other regulatory frameworks.",
          deliverables: [
            "Compliance gap analysis",
            "Control mapping documentation",
            "Remediation priority matrix",
            "Audit preparation checklist",
            "Ongoing compliance monitoring plan"
          ],
          duration: "3-5 weeks",
          pricing: "Starting at $30,000"
        }
      ]
    },
    {
      category: "Managed Detection & Response",
      icon: Shield,
      description: "24/7 security monitoring and incident response with expert security analysts",
      image: images.networkSecurity[0],
      services: [
        {
          name: "24/7 Security Operations Center (SOC)",
          description: "Round-the-clock monitoring, detection, and response with dedicated security analysts and advanced threat hunting.",
          deliverables: [
            "24/7/365 security monitoring",
            "Mean detection time under 3 minutes",
            "Incident response within 15 minutes",
            "Monthly security briefings",
            "Quarterly threat intelligence reports"
          ],
          duration: "Ongoing service",
          pricing: "$15,000/month (up to 500 endpoints)"
        },
        {
          name: "Threat Hunting Services",
          description: "Proactive threat hunting using advanced analytics and threat intelligence to identify hidden threats in your environment.",
          deliverables: [
            "Weekly proactive threat hunts",
            "Custom hunting playbooks",
            "Threat actor profiling",
            "IoC development and sharing",
            "Monthly hunt summary reports"
          ],
          duration: "Ongoing service",
          pricing: "$8,000/month"
        },
        {
          name: "Incident Response Retainer",
          description: "Pre-paid incident response services ensuring immediate expert assistance during security emergencies.",
          deliverables: [
            "4-hour response guarantee",
            "Forensic investigation",
            "Containment and eradication",
            "Recovery planning",
            "Post-incident analysis report"
          ],
          duration: "Annual retainer",
          pricing: "$50,000/year (40 hours included)"
        }
      ]
    },
    {
      category: "Implementation & Integration",
      icon: Settings,
      description: "Expert deployment and integration services for TecAstra security solutions",
      image: images.dataCenter[0],
      services: [
        {
          name: "TecAstra Platform Deployment",
          description: "End-to-end implementation of TecAstra security solutions with custom configuration and integration.",
          deliverables: [
            "Solution architecture design",
            "Custom configuration deployment",
            "Integration with existing systems",
            "User training and documentation",
            "30-day post-deployment support"
          ],
          duration: "6-12 weeks",
          pricing: "15% of software license cost"
        },
        {
          name: "Cloud Security Implementation",
          description: "Comprehensive cloud security deployment including CNAPP, ZTNA, and cloud compliance automation.",
          deliverables: [
            "Multi-cloud security architecture",
            "DevSecOps pipeline integration",
            "Compliance automation setup",
            "Cloud security training",
            "Ongoing optimization recommendations"
          ],
          duration: "8-16 weeks",
          pricing: "Starting at $75,000"
        },
        {
          name: "Legacy System Migration",
          description: "Secure migration from legacy security tools to modern TecAstra platform with zero downtime.",
          deliverables: [
            "Migration planning and timeline",
            "Phased deployment approach",
            "Data migration and validation",
            "Parallel operation period",
            "Cutover and validation testing"
          ],
          duration: "12-24 weeks",
          pricing: "Starting at $100,000"
        }
      ]
    },
    {
      category: "Training & Education",
      icon: BookOpen,
      description: "Comprehensive cybersecurity training programs for technical teams and end users",
      image: images.cybersecurityProfessionals[1],
      services: [
        {
          name: "Security Awareness Training",
          description: "Interactive cybersecurity awareness training programs with simulated phishing campaigns and compliance tracking.",
          deliverables: [
            "Monthly interactive training modules",
            "Simulated phishing campaigns",
            "Compliance tracking dashboard",
            "Customized content by role",
            "Annual security culture assessment"
          ],
          duration: "Annual program",
          pricing: "$25/user/year"
        },
        {
          name: "Technical Security Training",
          description: "Advanced technical training for IT and security teams on TecAstra platform administration and threat response.",
          deliverables: [
            "Platform administration certification",
            "Incident response procedures",
            "Threat hunting techniques",
            "Hands-on lab exercises",
            "Certification exam and badge"
          ],
          duration: "5-day intensive program",
          pricing: "$2,500/person"
        },
        {
          name: "Executive Security Briefings",
          description: "Strategic cybersecurity briefings for C-level executives and board members covering risk, compliance, and industry trends.",
          deliverables: [
            "Quarterly executive briefings",
            "Industry-specific threat landscape",
            "Risk dashboard and metrics",
            "Regulatory update summaries",
            "Strategic recommendation reports"
          ],
          duration: "Quarterly sessions",
          pricing: "$10,000/quarter"
        }
      ]
    }
  ];

  const supportTiers = [
    {
      tier: "Essential Support",
      price: "Included with all licenses",
      description: "Basic support for standard business needs",
      features: [
        "Business hours support (8x5)",
        "Email and web portal access",
        "Knowledge base and documentation",
        "Community forum access",
        "Software updates and patches",
        "Initial response within 24 hours"
      ],
      recommended: false
    },
    {
      tier: "Professional Support", 
      price: "$5,000/month",
      description: "Enhanced support with faster response times",
      features: [
        "Extended hours support (12x5)",
        "Phone, email, and web portal",
        "Priority case handling",
        "Remote diagnostic sessions",
        "Quarterly health checks",
        "Initial response within 4 hours",
        "Dedicated support engineer"
      ],
      recommended: true
    },
    {
      tier: "Enterprise Support",
      price: "$15,000/month", 
      description: "Premium support with 24/7 availability",
      features: [
        "24/7/365 critical support",
        "All communication channels",
        "Escalation management",
        "On-site support available",
        "Monthly strategic reviews",
        "Initial response within 1 hour",
        "Named Technical Account Manager",
        "Emergency hotline access"
      ],
      recommended: false
    }
  ];

  const successMetrics = [
    {
      metric: "99.9%",
      description: "Customer Satisfaction Rate",
      icon: Award
    },
    {
      metric: "4.8/5",
      description: "Average Service Rating", 
      icon: Target
    },
    {
      metric: "15 min",
      description: "Average Response Time",
      icon: Clock
    },
    {
      metric: "500+",
      description: "Successful Deployments",
      icon: Check
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
              TecAstra Professional Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Expert cybersecurity services to maximize your security investment, 
              accelerate deployment, and ensure ongoing protection excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#services" className="px-8 py-3 bg-[hsl(var(--tecastra-gold))] text-[hsl(var(--tecastra-darkblue))] rounded-full font-medium hover:bg-[hsl(var(--tecastra-gold))]/90 transition duration-150">
                Explore Services
              </Link>
              <Link href="#support" className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                View Support Options
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((item, index) => (
              <motion.div
                key={item.description}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <item.icon className="h-8 w-8 text-[hsl(var(--tecastra-teal))]" />
                </div>
                <div className="text-3xl font-bold text-[hsl(var(--tecastra-darkblue))] mb-2">
                  {item.metric}
                </div>
                <div className="text-sm text-[hsl(var(--tecastra-darkgray))]">
                  {item.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Services */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Professional Services Portfolio
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Comprehensive cybersecurity services delivered by certified experts with proven methodologies
            </p>
          </motion.div>

          <div className="space-y-20">
            {professionalServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-12">
                  <div className="flex items-center justify-center w-16 h-16 bg-[hsl(var(--tecastra-teal))] rounded-full mr-6">
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-[hsl(var(--tecastra-darkblue))] mb-2">
                      {category.category}
                    </h3>
                    <p className="text-lg text-[hsl(var(--tecastra-darkgray))]">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Services Grid */}
                <div className="grid lg:grid-cols-1 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                    >
                      <div className="p-8">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                          <div className="lg:w-2/3">
                            <h4 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))] mb-3">
                              {service.name}
                            </h4>
                            <p className="text-[hsl(var(--tecastra-darkgray))] mb-4">
                              {service.description}
                            </p>
                          </div>
                          
                          <div className="lg:w-1/3 lg:pl-8">
                            <div className="bg-[hsl(var(--tecastra-gray))] p-4 rounded-lg">
                              <div className="text-sm text-[hsl(var(--tecastra-darkgray))] mb-2">Duration: {service.duration}</div>
                              <div className="text-lg font-semibold text-[hsl(var(--tecastra-teal))]">{service.pricing}</div>
                            </div>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h5 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-3">Key Deliverables:</h5>
                          <div className="grid md:grid-cols-2 gap-2">
                            {service.deliverables.map((deliverable, i) => (
                              <div key={i} className="flex items-start">
                                <Check className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                                <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{deliverable}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Link href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`} className="px-6 py-2 bg-[hsl(var(--tecastra-teal))] text-white rounded-full text-sm font-medium hover:bg-[hsl(var(--tecastra-darkblue))] transition duration-150">
                            Learn More
                          </Link>
                          <Link href="/contact" className="px-6 py-2 border border-[hsl(var(--tecastra-teal))] text-[hsl(var(--tecastra-teal))] rounded-full text-sm font-medium hover:bg-[hsl(var(--tecastra-teal))] hover:text-white transition duration-150">
                            Get Quote
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section id="support" className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Support & Maintenance Plans
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Comprehensive support options ensuring your TecAstra security platform operates at peak performance
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {supportTiers.map((tier, index) => (
              <motion.div
                key={tier.tier}
                className={`bg-white rounded-xl shadow-lg p-8 border-2 ${
                  tier.recommended 
                    ? 'border-[hsl(var(--tecastra-teal))] relative' 
                    : 'border-gray-100'
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {tier.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[hsl(var(--tecastra-teal))] text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))] mb-2">
                    {tier.tier}
                  </h3>
                  <div className="text-2xl font-bold text-[hsl(var(--tecastra-teal))] mb-2">
                    {tier.price}
                  </div>
                  <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">
                    {tier.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="mt-1 mr-3 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                      <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/contact"
                  className={`block w-full text-center px-6 py-3 rounded-full font-medium transition duration-150 ${
                    tier.recommended
                      ? 'bg-[hsl(var(--tecastra-teal))] text-white hover:bg-[hsl(var(--tecastra-darkblue))]'
                      : 'border-2 border-[hsl(var(--tecastra-teal))] text-[hsl(var(--tecastra-teal))] hover:bg-[hsl(var(--tecastra-teal))] hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Connect with our cybersecurity experts to discuss your specific requirements 
              and design a customized service engagement that delivers measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-3 bg-[hsl(var(--tecastra-teal))] text-white rounded-full font-medium hover:bg-[hsl(var(--tecastra-gold))] hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                Contact Expert
              </Link>
              <Link href="/demo" className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;