import { Link } from 'wouter';
import { images } from '@/assets/images';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  title: string;
  image: string;
  description: string;
  features: string[];
  index: number;
}

const ProductCard = ({ title, image, description, features, index }: ProductCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div className="h-48 bg-[hsl(var(--tecastra-darkblue))] relative">
        <img 
          src={image}
          alt={`TecAstra ${title}`} 
          className="object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--tecastra-darkblue))/80] to-transparent flex items-end">
          <h3 className="text-white font-heading font-semibold text-xl p-4">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="mb-4 text-[hsl(var(--tecastra-darkgray))]">{description}</p>
        <ul className="mb-6 space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <Check className="mt-1 mr-2 h-4 w-4 text-[hsl(var(--tecastra-teal))]" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <Link href={`/products/${title.toLowerCase()}`} className="text-[hsl(var(--tecastra-teal))] font-medium hover:text-[hsl(var(--tecastra-gold))] transition duration-150 flex items-center">
          Learn more <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

const ProductHighlights = () => {
  const products = [
    {
      title: "FortIQ",
      image: images.networkSecurity[0],
      description: "Next-generation firewall with cloud-native architecture, instant deployment, and intuitive policy builder for comprehensive network protection.",
      features: [
        "Cloud-native instant deployment",
        "Intuitive policy builder interface", 
        "Real-time threat intelligence",
        "Automated response capabilities"
      ]
    },
    {
      title: "ClearDNS",
      image: images.dataCenter[0],
      description: "AI-powered DNS security solution with advanced threat scoring and phishing-aware filtering to protect against malicious domains.",
      features: [
        "AI threat scoring engine",
        "Phishing-aware DNS filtering",
        "Real-time domain reputation",
        "Advanced malware protection"
      ]
    },
    {
      title: "TrustLynk",
      image: images.cybersecurityProfessionals[2],
      description: "Zero Trust Network Access platform with temporary access links, contextual scoring, and seamless user experience for secure remote connectivity.",
      features: [
        "Temporary access links",
        "Contextual risk scoring",
        "Smoother user experience",
        "Identity-based access control"
      ]
    },
    {
      title: "SentraCore",
      image: images.networkSecurity[1],
      description: "Lightweight endpoint detection and response solution with explainable AI detection, optimized for small and medium businesses.",
      features: [
        "Lightweight agent deployment",
        "Explainable AI detection",
        "SMB-ready configuration",
        "Real-time threat response"
      ]
    },
    {
      title: "MailShield 360",
      image: images.dataCenter[1],
      description: "Comprehensive email security platform with brand spoofing audit and integrated phishing training to protect against advanced email threats.",
      features: [
        "Brand spoofing audit",
        "Built-in phishing training",
        "Advanced threat detection",
        "Email flow protection"
      ]
    },
    {
      title: "NebulaWall",
      image: images.cybersecurityProfessionals[0],
      description: "Cloud-native application protection platform with developer-first tools, GitHub integration, and simplified dashboards for modern DevSecOps.",
      features: [
        "Developer-first design",
        "GitHub-native integration",
        "Simplified dashboards",
        "Container security"
      ]
    }
  ];

  return (
    <section className="py-16 bg-[hsl(var(--tecastra-gray))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-4">Comprehensive Security Platform</h2>
          <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
            Our integrated platform provides visibility and control across your entire security ecosystem.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              index={index}
              title={product.title}
              image={product.image}
              description={product.description}
              features={product.features}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="#" className="inline-flex items-center px-6 py-3 border border-[hsl(var(--tecastra-teal))] text-[hsl(var(--tecastra-teal))] bg-white hover:bg-[hsl(var(--tecastra-teal))] hover:text-white font-medium rounded-full transition duration-150">
            View All Products <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductHighlights;
