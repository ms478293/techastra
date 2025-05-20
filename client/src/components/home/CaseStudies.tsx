import { Link } from 'wouter';
import { images } from '@/assets/images';
import { motion } from 'framer-motion';
import { Star, StarHalf, ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  image: string;
  industry: string;
  title: string;
  description: string;
  rating: number;
  index: number;
}

const CaseStudyCard = ({ image, industry, title, description, rating, index }: CaseStudyCardProps) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-4 w-4 fill-[hsl(var(--tecastra-gold))] text-[hsl(var(--tecastra-gold))]" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-4 w-4 fill-[hsl(var(--tecastra-gold))] text-[hsl(var(--tecastra-gold))]" />);
    }
    
    return stars;
  };

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div className="h-48 bg-[hsl(var(--tecastra-darkblue))] relative">
        <img 
          src={image} 
          alt={`${industry} case study`} 
          className="object-cover h-full w-full"
        />
        <div className="absolute top-4 left-4 bg-[hsl(var(--tecastra-teal))] text-white text-xs font-medium px-3 py-1 rounded-full">
          {industry}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-heading font-semibold text-xl text-[hsl(var(--tecastra-darkblue))] mb-3">{title}</h3>
        <p className="text-[hsl(var(--tecastra-darkgray))] mb-4">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-[hsl(var(--tecastra-gold))] flex">
              {renderStars(rating)}
            </div>
            <span className="ml-2 text-sm text-[hsl(var(--tecastra-darkgray))]">{rating.toFixed(1)}</span>
          </div>
          <Link href="#">
            <a className="text-[hsl(var(--tecastra-teal))] font-medium hover:text-[hsl(var(--tecastra-gold))] transition duration-150 flex items-center">
              Read case study <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const CaseStudies = () => {
  const caseStudies = [
    {
      image: images.networkSecurity[1],
      industry: "Financial Services",
      title: "Global Bank Strengthens Security Perimeter",
      description: "How a leading financial institution achieved 99.9% threat prevention and reduced security incidents by 85%.",
      rating: 5.0
    },
    {
      image: images.healthcare[0],
      industry: "Healthcare",
      title: "Hospital Network Secures Patient Data",
      description: "How a regional healthcare provider implemented zero-trust architecture while maintaining HIPAA compliance.",
      rating: 4.7
    },
    {
      image: images.manufacturing[0],
      industry: "Manufacturing",
      title: "Manufacturer Secures IoT Ecosystem",
      description: "How a global manufacturer protected 10,000+ IoT devices while optimizing operational technology security.",
      rating: 5.0
    }
  ];

  return (
    <section className="py-16 bg-[hsl(var(--tecastra-gray))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
            See how organizations across industries strengthen their security posture with TecAstra.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              index={index}
              image={study.image}
              industry={study.industry}
              title={study.title}
              description={study.description}
              rating={study.rating}
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
            View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
