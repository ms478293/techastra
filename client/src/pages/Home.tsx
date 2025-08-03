import { Helmet } from 'react-helmet';
import ErrorBoundary from '@/components/ErrorBoundary';
import FallbackComponent from '@/components/FallbackComponent';
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
        <ErrorBoundary fallback={({ error }) => <FallbackComponent error={error} componentName="Hero Section" />}>
          <HeroSection />
        </ErrorBoundary>
        <ErrorBoundary fallback={({ error }) => <FallbackComponent error={error} componentName="Product Highlights" />}>
          <ProductHighlights />
        </ErrorBoundary>
        <ErrorBoundary fallback={({ error }) => <FallbackComponent error={error} componentName="Why TecAstra" />}>
          <WhyTecAstra />
        </ErrorBoundary>
        <ErrorBoundary fallback={({ error }) => <FallbackComponent error={error} componentName="TecAstra Labs" />}>
          <TecAstraLabs />
        </ErrorBoundary>
        <ErrorBoundary fallback={({ error }) => <FallbackComponent error={error} componentName="Case Studies" />}>
          <CaseStudies />
        </ErrorBoundary>
        <ErrorBoundary fallback={({ error }) => <FallbackComponent error={error} componentName="Demo Contact CTA" />}>
          <DemoContactCTA />
        </ErrorBoundary>
        <ErrorBoundary fallback={({ error }) => <FallbackComponent error={error} componentName="Resources" />}>
          <Resources />
        </ErrorBoundary>
      </div>
    </>
  );
};

export default Home;
