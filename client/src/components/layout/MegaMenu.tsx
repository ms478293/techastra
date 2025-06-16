import { Link } from 'wouter';
import { cn } from '@/lib/utils';
import { 
  ShieldAlert, 
  Users, 
  ShieldCheck, 
  Cloud, 
  Network, 
  Lock, 
  Laptop, 
  Bug, 
  FileCode, 
  ArrowRight,
  Worm,
  Puzzle
} from 'lucide-react';

interface MegaMenuProps {
  type: 'products' | 'solutions' | 'services';
}

const MegaMenu = ({ type }: MegaMenuProps) => {
  if (type === 'products') {
    return (
      <div className="mega-menu absolute left-0 w-screen max-w-5xl bg-white shadow-xl rounded-b-lg p-8 mt-2 grid grid-cols-4 gap-x-6 gap-y-4 border-t-2 border-[hsl(var(--tecastra-teal))] z-50">
        <div>
          <h3 className="font-heading font-semibold text-[hsl(var(--tecastra-teal))] mb-4">Network Security</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/products#fortiq" className="text-sm hover:text-[hsl(var(--tecastra-teal))] flex items-center">
                <ShieldAlert className="mr-2 h-4 w-4 text-[hsl(var(--tecastra-gold))]" /> 
                FortIQ - Next-Gen Firewall
              </Link>
            </li>
            <li>
              <Link href="/products#cleardns" className="text-sm hover:text-[hsl(var(--tecastra-teal))] flex items-center">
                <Network className="mr-2 h-4 w-4 text-[hsl(var(--tecastra-gold))]" /> 
                ClearDNS - DNS Security
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-heading font-semibold text-[hsl(var(--tecastra-teal))] mb-4">Zero Trust & Identity</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/products#trustlynk" className="text-sm hover:text-[hsl(var(--tecastra-teal))] flex items-center">
                <Lock className="mr-2 h-4 w-4 text-[hsl(var(--tecastra-gold))]" /> 
                TrustLynk - Zero Trust Access
              </Link>
            </li>
            <li>
              <Link href="/products#identagate" className="text-sm hover:text-[hsl(var(--tecastra-teal))] flex items-center">
                <Users className="mr-2 h-4 w-4 text-[hsl(var(--tecastra-gold))]" /> 
                IdentaGate - IAM Platform
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-heading font-semibold text-[hsl(var(--tecastra-teal))] mb-4">Endpoint & Email Security</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/products#sentracore" className="text-sm hover:text-[hsl(var(--tecastra-teal))] flex items-center">
                <Laptop className="mr-2 h-4 w-4 text-[hsl(var(--tecastra-gold))]" /> 
                SentraCore - Endpoint EDR
              </Link>
            </li>
            <li>
              <Link href="/products#mailshield360" className="text-sm hover:text-[hsl(var(--tecastra-teal))] flex items-center">
                <ShieldCheck className="mr-2 h-4 w-4 text-[hsl(var(--tecastra-gold))]" /> 
                MailShield 360 - Email Security
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-heading font-semibold text-[hsl(var(--tecastra-teal))] mb-4">Cloud & Operations</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/products#nebulawall" className="text-sm hover:text-[hsl(var(--tecastra-teal))] flex items-center">
                <Cloud className="mr-2 h-4 w-4 text-[hsl(var(--tecastra-gold))]" /> 
                NebulaWall - Cloud CNAPP
              </Link>
            </li>
            <li>
              <Link href="/products#flowops" className="text-sm hover:text-[hsl(var(--tecastra-teal))] flex items-center">
                <Puzzle className="mr-2 h-4 w-4 text-[hsl(var(--tecastra-gold))]" /> 
                FlowOps - Security Orchestration
              </Link>
            </li>
            <li>
              <Link href="/products#pulseiq" className="text-sm hover:text-[hsl(var(--tecastra-teal))] flex items-center">
                <Bug className="mr-2 h-4 w-4 text-[hsl(var(--tecastra-gold))]" /> 
                PulseIQ - Threat Intelligence
              </Link>
            </li>
            <li>
              <Link href="/products#unifysec" className="text-sm hover:text-[hsl(var(--tecastra-teal))] flex items-center">
                <FileCode className="mr-2 h-4 w-4 text-[hsl(var(--tecastra-gold))]" /> 
                UnifySec - Unified Console
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-4 mt-6 bg-[hsl(var(--tecastra-gray))] p-4 rounded-lg">
          <h4 className="font-heading font-medium text-[hsl(var(--tecastra-darkblue))] mb-2">Discover the Complete TecAstra Security Portfolio</h4>
          <p className="text-sm text-[hsl(var(--tecastra-darkgray))] mb-3">10 integrated cybersecurity solutions designed for modern enterprises. Superior protection with simplified management.</p>
          <Link href="/products" className="text-sm text-[hsl(var(--tecastra-teal))] font-medium hover:underline flex items-center">
            View All Products <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </div>
    );
  }
  
  if (type === 'solutions') {
    return (
      <div className="mega-menu absolute left-0 w-screen max-w-4xl bg-white shadow-xl rounded-b-lg p-8 mt-2 grid grid-cols-2 gap-x-8 gap-y-4 border-t-2 border-[hsl(var(--tecastra-teal))] z-50">
        <div>
          <h3 className="font-heading font-semibold text-[hsl(var(--tecastra-teal))] mb-4">By Use Case</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-sm hover:text-[hsl(var(--tecastra-teal))]">Zero Trust Implementation</Link></li>
            <li><Link href="#" className="text-sm hover:text-[hsl(var(--tecastra-teal))]">Cloud Security & Compliance</Link></li>
            <li><Link href="#" className="text-sm hover:text-[hsl(var(--tecastra-teal))]">Ransomware Prevention</Link></li>
            <li><Link href="#" className="text-sm hover:text-[hsl(var(--tecastra-teal))]">IoT Security</Link></li>
            <li><Link href="#" className="text-sm hover:text-[hsl(var(--tecastra-teal))]">Remote Workforce Security</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-heading font-semibold text-[hsl(var(--tecastra-teal))] mb-4">By Industry</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-sm hover:text-[hsl(var(--tecastra-teal))]">Financial Services</Link></li>
            <li><Link href="#" className="text-sm hover:text-[hsl(var(--tecastra-teal))]">Healthcare</Link></li>
            <li><Link href="#" className="text-sm hover:text-[hsl(var(--tecastra-teal))]">Government</Link></li>
            <li><Link href="#" className="text-sm hover:text-[hsl(var(--tecastra-teal))]">Retail</Link></li>
            <li><Link href="#" className="text-sm hover:text-[hsl(var(--tecastra-teal))]">Manufacturing</Link></li>
          </ul>
        </div>
        <div className="col-span-2 mt-6 bg-[hsl(var(--tecastra-gray))] p-4 rounded-lg">
          <h4 className="font-heading font-medium text-[hsl(var(--tecastra-darkblue))] mb-2">Not sure where to start?</h4>
          <p className="text-sm text-[hsl(var(--tecastra-darkgray))] mb-3">Talk to our security experts to find the right solution for your organization.</p>
          <Link href="#" className="text-sm text-[hsl(var(--tecastra-teal))] font-medium hover:underline flex items-center">
            Contact an expert <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </div>
    );
  }
  
  // Services mega menu
  return (
    <div className="mega-menu absolute left-0 w-screen max-w-2xl bg-white shadow-xl rounded-b-lg p-8 mt-2 grid grid-cols-1 gap-y-4 border-t-2 border-[hsl(var(--tecastra-teal))] z-50">
      <div>
        <h3 className="font-heading font-semibold text-[hsl(var(--tecastra-teal))] mb-4">Professional Services</h3>
        <ul className="space-y-2">
          <li><Link href="#" className="text-sm hover:text-[hsl(var(--tecastra-teal))]">Security Assessment</Link></li>
          <li><Link href="#" className="text-sm hover:text-[hsl(var(--tecastra-teal))]">Deployment Services</Link></li>
          <li><Link href="#" className="text-sm hover:text-[hsl(var(--tecastra-teal))]">Managed Detection & Response</Link></li>
          <li><Link href="#" className="text-sm hover:text-[hsl(var(--tecastra-teal))]">Incident Response</Link></li>
          <li><Link href="#" className="text-sm hover:text-[hsl(var(--tecastra-teal))]">Security Training</Link></li>
        </ul>
      </div>
      <div className="bg-[hsl(var(--tecastra-gray))] p-4 rounded-lg">
        <h4 className="font-heading font-medium text-[hsl(var(--tecastra-darkblue))] mb-2">TecAstra Security Operations</h4>
        <p className="text-sm text-[hsl(var(--tecastra-darkgray))] mb-3">Let our security experts manage your security operations 24/7.</p>
        <Link href="#" className="text-sm text-[hsl(var(--tecastra-teal))] font-medium hover:underline flex items-center">
          Learn more <ArrowRight className="ml-1 h-3 w-3" />
        </Link>
      </div>
    </div>
  );
};

export default MegaMenu;
