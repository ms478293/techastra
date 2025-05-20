import { Link } from 'wouter';
import { images } from '@/assets/images';
import { motion } from 'framer-motion';
import { 
  Worm, 
  Radar, 
  ShieldAlert, 
  FileCode, 
  ArrowRight 
} from 'lucide-react';

const TecAstraLabs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5, 
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const featureItems = [
    {
      icon: <Worm className="text-[hsl(var(--tecastra-gold))] h-6 w-6" />,
      title: "Malware Analysis",
      description: "In-depth investigation of new malware variants and attack techniques."
    },
    {
      icon: <Radar className="text-[hsl(var(--tecastra-gold))] h-6 w-6" />,
      title: "Threat Intelligence",
      description: "Continuous monitoring of global threat landscapes to predict attacks."
    },
    {
      icon: <ShieldAlert className="text-[hsl(var(--tecastra-gold))] h-6 w-6" />,
      title: "Vulnerability Research",
      description: "Discovery and documentation of software and hardware vulnerabilities."
    },
    {
      icon: <FileCode className="text-[hsl(var(--tecastra-gold))] h-6 w-6" />,
      title: "Security Advisories",
      description: "Timely alerts and mitigation guidance for critical security issues."
    }
  ];

  return (
    <section className="py-16 bg-[hsl(var(--tecastra-darkblue))] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <div className="inline-block mb-4">
              <span className="bg-[hsl(var(--tecastra-gold))] bg-opacity-20 text-[hsl(var(--tecastra-gold))] px-4 py-1 rounded-full font-medium text-sm">
                TecAstra Labs
              </span>
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              Stay Ahead of Emerging Threats
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Our dedicated research team analyzes global threat patterns to deliver actionable intelligence and proactive defenses against zero-day vulnerabilities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {featureItems.map((item, i) => (
                <motion.div 
                  key={i}
                  className="bg-white bg-opacity-10 p-5 rounded-lg hover:bg-opacity-15 transition duration-150"
                  variants={itemVariants}
                >
                  <div className="text-[hsl(var(--tecastra-gold))] text-2xl mb-2">
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
            
            <motion.div variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="#" className="inline-flex items-center px-6 py-3 bg-[hsl(var(--tecastra-gold))] text-[hsl(var(--tecastra-darkblue))] font-medium rounded-full hover:bg-white transition duration-150">
                  Visit TecAstra Labs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            {/* A digital threat visualization display with cybersecurity metrics */}
            <img 
              src={images.threatVisualization[1]} 
              alt="TecAstra Labs Threat Intelligence Center" 
              className="rounded-xl shadow-xl w-full"
            />
            
            {/* Recent threats overlay */}
            <motion.div 
              className="absolute -top-6 -right-6 bg-white text-[hsl(var(--tecastra-darkblue))] p-4 rounded-lg shadow-lg max-w-xs"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="font-heading font-semibold mb-2">Latest Threat Advisory</h4>
              <div className="flex items-center mb-3">
                <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                <p className="text-sm font-medium">Critical Severity</p>
              </div>
              <p className="text-sm mb-3">New ransomware variant targeting healthcare sector detected.</p>
              <Link href="#">
                <a className="text-sm text-[hsl(var(--tecastra-teal))] font-medium hover:text-[hsl(var(--tecastra-gold))] flex items-center">
                  Read advisory <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TecAstraLabs;
