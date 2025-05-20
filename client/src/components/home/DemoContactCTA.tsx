import { Link } from 'wouter';
import { motion } from 'framer-motion';

const DemoContactCTA = () => {
  return (
    <section className="py-16 bg-[hsl(var(--tecastra-teal))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Ready to Transform Your Security Strategy?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Schedule a personalized demo with our security experts to see how TecAstra can protect your organization.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="#">
              <motion.a 
                className="px-8 py-4 bg-white text-[hsl(var(--tecastra-darkblue))] font-heading font-semibold rounded-full hover:bg-[hsl(var(--tecastra-darkblue))] hover:text-white transition duration-150 inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request a Demo
              </motion.a>
            </Link>
            <Link href="#">
              <motion.a 
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-heading font-semibold rounded-full hover:bg-white hover:text-[hsl(var(--tecastra-teal))] transition duration-150 inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Sales
              </motion.a>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoContactCTA;
