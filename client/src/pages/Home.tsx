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
  );
};

export default Home;
