import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight, Download, PlayCircle } from 'lucide-react';

interface ResourceCardProps {
  type: 'Whitepaper' | 'Webinar' | 'Report';
  title: string;
  description: string;
  actionText: string;
  actionIcon: React.ReactNode;
  index: number;
}

const ResourceCard = ({ type, title, description, actionText, actionIcon, index }: ResourceCardProps) => {
  const getTypeStyles = () => {
    switch (type) {
      case 'Whitepaper':
        return 'bg-[hsl(var(--tecastra-teal))/10] text-[hsl(var(--tecastra-teal))]';
      case 'Webinar':
        return 'bg-[hsl(var(--tecastra-gold))/10] text-[hsl(var(--tecastra-gold))]';
      case 'Report':
        return 'bg-[hsl(var(--tecastra-teal))/10] text-[hsl(var(--tecastra-teal))]';
      default:
        return 'bg-[hsl(var(--tecastra-teal))/10] text-[hsl(var(--tecastra-teal))]';
    }
  };

  return (
    <motion.div 
      className="bg-[hsl(var(--tecastra-gray))] rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="p-6">
        <div className="mb-4">
          <span className={`${getTypeStyles()} px-3 py-1 rounded-full text-xs font-medium`}>
            {type}
          </span>
        </div>
        <h3 className="font-heading font-semibold text-xl text-[hsl(var(--tecastra-darkblue))] mb-3">
          {title}
        </h3>
        <p className="text-[hsl(var(--tecastra-darkgray))] mb-6">
          {description}
        </p>
        <Link href="#">
          <a className="text-[hsl(var(--tecastra-teal))] font-medium hover:text-[hsl(var(--tecastra-gold))] transition duration-150 flex items-center">
            {actionText} {actionIcon}
          </a>
        </Link>
      </div>
    </motion.div>
  );
};

const Resources = () => {
  const resources = [
    {
      type: 'Whitepaper' as const,
      title: 'The Future of Zero Trust Security',
      description: 'A comprehensive guide to implementing zero trust architecture in complex enterprise environments.',
      actionText: 'Download',
      actionIcon: <Download className="ml-2 h-4 w-4" />
    },
    {
      type: 'Webinar' as const,
      title: 'Responding to Ransomware: Best Practices',
      description: 'Join our security experts as they discuss effective strategies for ransomware prevention and response.',
      actionText: 'Watch on-demand',
      actionIcon: <PlayCircle className="ml-2 h-4 w-4" />
    },
    {
      type: 'Report' as const,
      title: '2023 Cyber Threat Landscape Report',
      description: 'An in-depth analysis of emerging threats, attack patterns, and security trends observed over the past year.',
      actionText: 'Read report',
      actionIcon: <ArrowRight className="ml-2 h-4 w-4" />
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-4">
            Resources & Insights
          </h2>
          <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
            Stay informed with the latest cybersecurity research, guides, and best practices.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <ResourceCard
              key={index}
              index={index}
              type={resource.type}
              title={resource.title}
              description={resource.description}
              actionText={resource.actionText}
              actionIcon={resource.actionIcon}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href="#" className="inline-flex items-center px-6 py-3 border border-[hsl(var(--tecastra-teal))] text-[hsl(var(--tecastra-teal))] bg-white hover:bg-[hsl(var(--tecastra-teal))] hover:text-white font-medium rounded-full transition duration-150">
            Browse Resource Library <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Resources;
