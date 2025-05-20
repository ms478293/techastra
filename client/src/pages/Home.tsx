import { Helmet } from 'react-helmet';
import HeroSection from '@/components/home/HeroSection';
import ProductHighlights from '@/components/home/ProductHighlights';
import WhyTecAstra from '@/components/home/WhyTecAstra';
import TecAstraLabs from '@/components/home/TecAstraLabs';
import CaseStudies from '@/components/home/CaseStudies';
import DemoContactCTA from '@/components/home/DemoContactCTA';
import Resources from '@/components/home/Resources';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>TecAstra - Cybersecurity Solutions for Modern Enterprises</title>
        <meta name="description" content="TecAstra delivers comprehensive cybersecurity solutions that protect your organization from advanced threats across cloud, network, and endpoints." />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="TecAstra - Cybersecurity Solutions for Modern Enterprises" />
        <meta property="og:description" content="Comprehensive cybersecurity solutions to protect your organization from advanced threats." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tecastra.com" />
        
        {/* Load required fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      
      <div>
        <HeroSection />
        <ProductHighlights />
        <WhyTecAstra />
        <TecAstraLabs />
        <CaseStudies />
        <DemoContactCTA />
        <Resources />
      </div>
    </>
  );
};

export default Home;
