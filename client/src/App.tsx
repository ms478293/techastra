import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";
import LoadingSpinner from "@/components/LoadingSpinner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/layout/Chatbot";

// Lazy load pages for better performance
const NotFound = lazy(() => import("@/pages/not-found"));
const Home = lazy(() => import("@/pages/Home"));
const Products = lazy(() => import("@/pages/Products"));
const Solutions = lazy(() => import("@/pages/Solutions"));
const Services = lazy(() => import("@/pages/Services"));
const Resources = lazy(() => import("@/pages/Resources"));
const FortIQ = lazy(() => import("@/pages/products/FortIQ"));
const ClearDNS = lazy(() => import("@/pages/products/ClearDNS"));
const ClearDNSProduct = lazy(() => import("@/pages/ClearDNSProduct"));
const TrustLynk = lazy(() => import("@/pages/products/TrustLynk"));
const SentraCore = lazy(() => import("@/pages/products/SentraCore"));
const ZeroTrustImplementation = lazy(() => import("@/pages/solutions/ZeroTrustImplementation"));
const CloudSecurityCompliance = lazy(() => import("@/pages/solutions/CloudSecurityCompliance"));
const RansomwarePrevention = lazy(() => import("@/pages/solutions/RansomwarePrevention"));
const RemoteWorkforceSecurity = lazy(() => import("@/pages/solutions/RemoteWorkforceSecurity"));
const MailShield360 = lazy(() => import("@/pages/products/MailShield360"));
const NebulaWall = lazy(() => import("@/pages/products/NebulaWall"));
const IdentaGate = lazy(() => import("@/pages/products/IdentaGate"));
const PulseIQ = lazy(() => import("@/pages/products/PulseIQ"));
const FlowOps = lazy(() => import("@/pages/products/FlowOps"));
const UnifySec = lazy(() => import("@/pages/products/UnifySec"));
const TecAstraLab = lazy(() => import("@/pages/TecAstraLab"));
const Company = lazy(() => import("@/pages/Company"));
const CybersecurityRiskAssessment = lazy(() => import("@/pages/services/CybersecurityRiskAssessment"));
const ManagedDetectionResponse = lazy(() => import("@/pages/services/ManagedDetectionResponse"));
const ZeroTrustArchitectureDesign = lazy(() => import("@/pages/services/ZeroTrustArchitectureDesign"));

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/products/fortiq" component={FortIQ} />
      <Route path="/products/cleardns" component={ClearDNS} />
      <Route path="/cleardns-platform" component={ClearDNSProduct} />
      <Route path="/products/trustlynk" component={TrustLynk} />
      <Route path="/products/sentracore" component={SentraCore} />
      <Route path="/products/mailshield-360" component={MailShield360} />
      <Route path="/products/nebulawall" component={NebulaWall} />
      <Route path="/products/identagate" component={IdentaGate} />
      <Route path="/products/pulseiq" component={PulseIQ} />
      <Route path="/products/flowops" component={FlowOps} />
      <Route path="/products/unifysec" component={UnifySec} />
      <Route path="/lab" component={TecAstraLab} />
      <Route path="/company" component={Company} />
      <Route path="/solutions" component={Solutions} />
      <Route path="/solutions/zero-trust-implementation" component={ZeroTrustImplementation} />
      <Route path="/solutions/cloud-security-&-compliance" component={CloudSecurityCompliance} />
      <Route path="/solutions/ransomware-prevention" component={RansomwarePrevention} />
      <Route path="/solutions/remote-workforce-security" component={RemoteWorkforceSecurity} />
      <Route path="/services" component={Services} />
      <Route path="/services/cybersecurity-risk-assessment" component={CybersecurityRiskAssessment} />
      <Route path="/services/managed-detection-response" component={ManagedDetectionResponse} />
      <Route path="/services/zero-trust-architecture-design" component={ZeroTrustArchitectureDesign} />
      <Route path="/resources" component={Resources} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
                  <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<LoadingSpinner size="lg" text="Loading TecAstra..." className="min-h-screen" />}>
              <Router />
            </Suspense>
          </main>
          <Footer />
          <Chatbot />
        </div>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
