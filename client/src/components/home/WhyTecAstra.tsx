import { Link } from 'wouter';
import { images } from '@/assets/images';
import { motion } from 'framer-motion';
import { ShieldAlert, Gauge, Puzzle, ArrowRight } from 'lucide-react';

const WhyTecAstra = () => {
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

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Why Choose TecAstra
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] mb-8">
              As cyber threats evolve, organizations need a security partner that stays ahead of emerging risks. TecAstra combines advanced technology, threat intelligence, and expert services to protect your most valuable assets.
            </p>
            
            <div className="space-y-6">
              <motion.div 
                className="flex"
                variants={itemVariants}
              >
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-[hsl(var(--tecastra-teal))] bg-opacity-10 flex items-center justify-center">
                    <ShieldAlert className="text-[hsl(var(--tecastra-teal))] h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-heading font-semibold text-[hsl(var(--tecastra-darkblue))]">Proactive Protection</h3>
                  <p className="text-[hsl(var(--tecastra-darkgray))]">
                    Our predictive AI identifies and stops threats before they impact your business.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex"
                variants={itemVariants}
              >
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-[hsl(var(--tecastra-teal))] bg-opacity-10 flex items-center justify-center">
                    <Gauge className="text-[hsl(var(--tecastra-teal))] h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-heading font-semibold text-[hsl(var(--tecastra-darkblue))]">Industry-Leading Performance</h3>
                  <p className="text-[hsl(var(--tecastra-darkgray))]">
                    Security that works at the speed of your business without performance degradation.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex"
                variants={itemVariants}
              >
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-[hsl(var(--tecastra-teal))] bg-opacity-10 flex items-center justify-center">
                    <Puzzle className="text-[hsl(var(--tecastra-teal))] h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-heading font-semibold text-[hsl(var(--tecastra-darkblue))]">Integrated Platform</h3>
                  <p className="text-[hsl(var(--tecastra-darkgray))]">
                    A unified security architecture that reduces complexity and improves visibility.
                  </p>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-10"
              variants={itemVariants}
            >
              <Link href="#" className="inline-flex items-center text-[hsl(var(--tecastra-teal))] font-medium hover:text-[hsl(var(--tecastra-gold))] transition duration-150">
                Learn more about our approach <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            {/* IT team working on cybersecurity solutions in modern office */}
            <img 
              src={images.cybersecurityProfessionals[1]} 
              alt="TecAstra security experts at work" 
              className="rounded-xl shadow-xl w-full"
            />
            
            {/* Stats overlay */}
            <motion.div 
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg max-w-xs"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="font-heading font-bold text-3xl text-[hsl(var(--tecastra-teal))]">99.9%</p>
                  <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">Threat Detection</p>
                </div>
                <div className="text-center">
                  <p className="font-heading font-bold text-3xl text-[hsl(var(--tecastra-teal))]">24/7</p>
                  <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">Expert Support</p>
                </div>
                <div className="text-center">
                  <p className="font-heading font-bold text-3xl text-[hsl(var(--tecastra-teal))]">30M+</p>
                  <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">Threats Blocked</p>
                </div>
                <div className="text-center">
                  <p className="font-heading font-bold text-3xl text-[hsl(var(--tecastra-teal))]">4000+</p>
                  <p className="text-sm text-[hsl(var(--tecastra-darkgray))]">Customers</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyTecAstra;
