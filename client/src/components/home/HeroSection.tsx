import { Link } from 'wouter';
import { images } from '@/assets/images';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  // Animation variants
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
  
  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.7 } }
  };

  return (
    <section className="bg-[hsl(var(--tecastra-darkblue))] overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div className="text-white" variants={itemVariants}>
            <h1 className="font-heading font-bold text-4xl md:text-5xl leading-tight mb-6">
              Secure Your Digital <span className="text-[hsl(var(--tecastra-gold))]">Transformation</span>
            </h1>
            <p className="text-lg mb-8 text-gray-300">
              TecAstra delivers comprehensive cybersecurity solutions that protect your organization from advanced threats across cloud, network, and endpoints.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="#">
                <motion.a 
                  className="px-6 py-3 bg-[hsl(var(--tecastra-teal))] hover:bg-[hsl(var(--tecastra-gold))] text-white font-medium rounded-full text-center transition duration-150 inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request Demo
                </motion.a>
              </Link>
              <Link href="#">
                <motion.a 
                  className="px-6 py-3 bg-transparent border border-white hover:bg-white hover:text-[hsl(var(--tecastra-darkblue))] text-white font-medium rounded-full text-center transition duration-150 inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Solutions
                </motion.a>
              </Link>
            </div>
          </motion.div>
          <motion.div className="relative" variants={imageVariants}>
            {/* A modern security operations center with cybersecurity professionals monitoring screens */}
            <img 
              src={images.cybersecurityProfessionals[0]} 
              alt="Cybersecurity professionals at work in a security operations center" 
              className="rounded-xl shadow-2xl w-full object-cover"
            />
            <motion.div 
              className="absolute -bottom-4 -right-4 bg-[hsl(var(--tecastra-teal))] text-white p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <p className="font-heading font-semibold">Trusted by 1000+ enterprises</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Logos section */}
      <div className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[hsl(var(--tecastra-darkgray))] font-medium mb-8">Trusted by leading organizations worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex justify-center">
                <div className="h-12 w-24 bg-gray-200 skeleton rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
