import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import Solutions from "@/pages/Solutions";
import Services from "@/pages/Services";
import Resources from "@/pages/Resources";
import FortIQ from "@/pages/products/FortIQ";
import ClearDNS from "@/pages/products/ClearDNS";
import TrustLynk from "@/pages/products/TrustLynk";
import SentraCore from "@/pages/products/SentraCore";
import ZeroTrustImplementation from "@/pages/solutions/ZeroTrustImplementation";
import CloudSecurityCompliance from "@/pages/solutions/CloudSecurityCompliance";
import RansomwarePrevention from "@/pages/solutions/RansomwarePrevention";
import RemoteWorkforceSecurity from "@/pages/solutions/RemoteWorkforceSecurity";
import MailShield360 from "@/pages/products/MailShield360";
import NebulaWall from "@/pages/products/NebulaWall";
import IdentaGate from "@/pages/products/IdentaGate";
import PulseIQ from "@/pages/products/PulseIQ";
import FlowOps from "@/pages/products/FlowOps";
import UnifySec from "@/pages/products/UnifySec";
import TecAstraLab from "@/pages/TecAstraLab";
import CybersecurityRiskAssessment from "@/pages/services/CybersecurityRiskAssessment";
import ManagedDetectionResponse from "@/pages/services/ManagedDetectionResponse";
import ZeroTrustArchitectureDesign from "@/pages/services/ZeroTrustArchitectureDesign";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/layout/Chatbot";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/products/fortiq" component={FortIQ} />
      <Route path="/products/cleardns" component={ClearDNS} />
      <Route path="/products/trustlynk" component={TrustLynk} />
      <Route path="/products/sentracore" component={SentraCore} />
      <Route path="/products/mailshield-360" component={MailShield360} />
      <Route path="/products/nebulawall" component={NebulaWall} />
      <Route path="/products/identagate" component={IdentaGate} />
      <Route path="/products/pulseiq" component={PulseIQ} />
      <Route path="/products/flowops" component={FlowOps} />
      <Route path="/products/unifysec" component={UnifySec} />
      <Route path="/lab" component={TecAstraLab} />
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
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
          <Chatbot />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
