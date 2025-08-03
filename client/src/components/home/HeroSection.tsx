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
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="#" className="px-6 py-3 bg-[hsl(var(--tecastra-teal))] hover:bg-[hsl(var(--tecastra-gold))] text-white font-medium rounded-full text-center transition duration-150 inline-block">
                  Request Demo
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="#" className="px-6 py-3 bg-transparent border border-white hover:bg-white hover:text-[hsl(var(--tecastra-darkblue))] text-white font-medium rounded-full text-center transition duration-150 inline-block">
                  Explore Solutions
                </Link>
              </motion.div>
            </div>
          </motion.div>
          <motion.div className="relative" variants={imageVariants}>
            {/* A modern security operations center with cybersecurity professionals monitoring screens */}
            <img 
              src={images.cybersecurityProfessionals[0]} 
              alt="Cybersecurity professionals at work in a security operations center" 
              className="rounded-xl shadow-2xl w-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden rounded-xl shadow-2xl w-full h-64 bg-gradient-to-br from-blue-900 to-teal-600 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-lg font-semibold">Cybersecurity Excellence</p>
              </div>
            </div>
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
