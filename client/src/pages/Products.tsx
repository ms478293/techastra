import { motion } from 'framer-motion';
import { images } from '@/assets/images';
import { Check, Shield, Zap, Users, Cloud, Lock, Eye, Briefcase } from 'lucide-react';
import { Link } from 'wouter';

const Products = () => {
  const productCategories = [
    {
      category: "Network Security",
      icon: Shield,
      description: "Advanced network protection and threat prevention",
      products: [
        {
          name: "FortIQ",
          subtitle: "Next-Gen Firewall (NGFW)",
          description: "Cloud-native firewall with instant deployment and intuitive policy builder for comprehensive network protection.",
          image: images.networkSecurity[0],
          differentiators: [
            "Cloud-native instant deployment",
            "Intuitive policy builder interface",
            "Real-time threat intelligence",
            "Automated response capabilities"
          ],
          comparison: "vs. Traditional Firewalls: 75% faster deployment, 60% easier policy management"
        }
      ]
    },
    {
      category: "DNS & Web Security", 
      icon: Cloud,
      description: "Secure web access and DNS threat protection",
      products: [
        {
          name: "ClearDNS",
          subtitle: "DNS Security",
          description: "AI-powered DNS security with advanced threat scoring and phishing-aware filtering to protect against malicious domains.",
          image: images.dataCenter[0],
          differentiators: [
            "AI threat scoring engine",
            "Phishing-aware DNS filtering", 
            "Real-time domain reputation",
            "Advanced malware protection"
          ],
          comparison: "vs. Standard DNS Security: 40% better threat detection, 85% reduction in false positives"
        }
      ]
    },
    {
      category: "Zero Trust Access",
      icon: Lock,
      description: "Identity-centric secure access solutions",
      products: [
        {
          name: "TrustLynk",
          subtitle: "Zero Trust Network Access (ZTNA)",
          description: "Zero Trust platform with temporary access links, contextual scoring, and seamless user experience for secure connectivity.",
          image: images.cybersecurityProfessionals[2],
          differentiators: [
            "Temporary access links",
            "Contextual risk scoring",
            "Smoother user experience",
            "Identity-based access control"
          ],
          comparison: "vs. Traditional VPN: 90% faster access provisioning, 50% better user satisfaction"
        },
        {
          name: "IdentaGate", 
          subtitle: "Identity & Access Management (IAM)",
          description: "Modern IAM solution with passkey support, social login capabilities, and real-time authentication scoring.",
          image: images.cybersecurityProfessionals[0],
          differentiators: [
            "Passkey-ready authentication",
            "Social login support",
            "Real-time auth scoring",
            "Seamless user onboarding"
          ],
          comparison: "vs. Legacy IAM: 70% faster user provisioning, 95% passwordless adoption rate"
        }
      ]
    },
    {
      category: "Endpoint Protection",
      icon: Eye,
      description: "Advanced endpoint detection and response",
      products: [
        {
          name: "SentraCore",
          subtitle: "Endpoint Detection & Response (EDR)",
          description: "Lightweight EDR solution with explainable AI detection, specifically optimized for small and medium businesses.",
          image: images.networkSecurity[1], 
          differentiators: [
            "Lightweight agent deployment",
            "Explainable AI detection",
            "SMB-ready configuration",
            "Real-time threat response"
          ],
          comparison: "vs. Enterprise EDR: 80% lower resource usage, 60% faster deployment for SMBs"
        }
      ]
    },
    {
      category: "Email Security",
      icon: Users,
      description: "Comprehensive email threat protection",
      products: [
        {
          name: "MailShield 360",
          subtitle: "Email Security",
          description: "Complete email security platform with brand spoofing audit and integrated phishing training for advanced threat protection.",
          image: images.dataCenter[1],
          differentiators: [
            "Brand spoofing audit",
            "Built-in phishing training",
            "Advanced threat detection", 
            "Email flow protection"
          ],
          comparison: "vs. Traditional Email Security: 95% phishing detection rate, 70% reduction in user susceptibility"
        }
      ]
    },
    {
      category: "Cloud Security",
      icon: Cloud,
      description: "Cloud-native application protection",
      products: [
        {
          name: "NebulaWall",
          subtitle: "Cloud-Native App Protection Platform (CNAPP)",
          description: "Developer-first cloud security with GitHub integration and simplified dashboards for modern DevSecOps workflows.",
          image: images.cybersecurityProfessionals[1],
          differentiators: [
            "Developer-first design",
            "GitHub-native integration", 
            "Simplified dashboards",
            "Container security"
          ],
          comparison: "vs. Traditional CNAPP: 50% faster developer adoption, 40% reduction in security friction"
        }
      ]
    },
    {
      category: "Security Operations",
      icon: Zap,
      description: "Unified security management and orchestration",
      products: [
        {
          name: "FlowOps",
          subtitle: "Security Orchestration & XDR", 
          description: "Low-code security orchestration platform with fast setup designed specifically for small security teams.",
          image: images.networkSecurity[2],
          differentiators: [
            "Low-code playbooks",
            "Fast setup for small teams",
            "Automated incident response",
            "Integrated threat hunting"
          ],
          comparison: "vs. Enterprise SOAR: 90% faster setup, 60% lower complexity for small teams"
        },
        {
          name: "PulseIQ",
          subtitle: "Threat Intelligence & Analytics",
          description: "Real-time threat intelligence platform with industry-specific customization and actionable security insights.",
          image: images.dataCenter[2],
          differentiators: [
            "Real-time threat pulse",
            "Customizable by industry",
            "Actionable intelligence",
            "Automated threat correlation"
          ],
          comparison: "vs. Generic Threat Intel: 80% more relevant alerts, 50% faster threat attribution"
        },
        {
          name: "UnifySec",
          subtitle: "Unified Security Console",
          description: "Single pane of glass for all TecAstra security tools with mobile-friendly interface and centralized management.",
          image: images.cybersecurityProfessionals[3],
          differentiators: [
            "One console for all tools",
            "Mobile-friendly design",
            "Centralized policy management",
            "Real-time security dashboard"
          ],
          comparison: "vs. Multiple Consoles: 70% reduction in management overhead, 85% faster incident response"
        }
      ]
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
              TecAstra Security Portfolio
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Comprehensive cybersecurity solutions designed for modern enterprises, 
              delivering superior protection with simplified management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#products" className="px-8 py-3 bg-[hsl(var(--tecastra-gold))] text-[hsl(var(--tecastra-darkblue))] rounded-full font-medium hover:bg-[hsl(var(--tecastra-gold))]/90 transition duration-150">
                Explore Products
              </Link>
              <Link href="/demo" className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {productCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="mb-20"
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
                  <h2 className="font-heading font-bold text-3xl text-[hsl(var(--tecastra-darkblue))] mb-2">
                    {category.category}
                  </h2>
                  <p className="text-lg text-[hsl(var(--tecastra-darkgray))]">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.products.map((product, productIndex) => (
                  <motion.div
                    key={product.name}
                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition duration-300"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: productIndex * 0.1 }}
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src={product.image}
                          alt={product.name}
                          className="h-48 md:h-full w-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="mb-4">
                          <h3 className="font-heading font-bold text-2xl text-[hsl(var(--tecastra-darkblue))] mb-1">
                            {product.name}
                          </h3>
                          <p className="text-[hsl(var(--tecastra-teal))] font-medium mb-3">
                            {product.subtitle}
                          </p>
                          <p className="text-[hsl(var(--tecastra-darkgray))] mb-4">
                            {product.description}
                          </p>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-semibold text-[hsl(var(--tecastra-darkblue))] mb-2">Key Differentiators:</h4>
                          <ul className="space-y-1">
                            {product.differentiators.map((diff, i) => (
                              <li key={i} className="flex items-start">
                                <Check className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))] flex-shrink-0" />
                                <span className="text-sm text-[hsl(var(--tecastra-darkgray))]">{diff}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-[hsl(var(--tecastra-gray))] p-3 rounded-lg mb-4">
                          <p className="text-sm text-[hsl(var(--tecastra-darkgray))] font-medium">
                            {product.comparison}
                          </p>
                        </div>

                        <div className="flex gap-3">
                          <Link href={`/products/${product.name.toLowerCase()}`} className="px-4 py-2 bg-[hsl(var(--tecastra-teal))] text-white rounded-full text-sm font-medium hover:bg-[hsl(var(--tecastra-darkblue))] transition duration-150">
                            Learn More
                          </Link>
                          <Link href="/demo" className="px-4 py-2 border border-[hsl(var(--tecastra-teal))] text-[hsl(var(--tecastra-teal))] rounded-full text-sm font-medium hover:bg-[hsl(var(--tecastra-teal))] hover:text-white transition duration-150">
                            Try Demo
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Ready to Transform Your Security?
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] mb-8 max-w-3xl mx-auto">
              Experience the TecAstra difference with our comprehensive security platform. 
              Get started with a personalized demo today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="px-8 py-3 bg-[hsl(var(--tecastra-teal))] text-white rounded-full font-medium hover:bg-[hsl(var(--tecastra-darkblue))] transition duration-150">
                Schedule Demo
              </Link>
              <Link href="/contact" className="px-8 py-3 border-2 border-[hsl(var(--tecastra-teal))] text-[hsl(var(--tecastra-teal))] rounded-full font-medium hover:bg-[hsl(var(--tecastra-teal))] hover:text-white transition duration-150">
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;