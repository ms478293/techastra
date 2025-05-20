import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { useMobile } from '@/hooks/use-mobile';
import { 
  Sheet,
  SheetContent,
  SheetTrigger 
} from '@/components/ui/sheet';
import MegaMenu from './MegaMenu';
import { Menu, Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const isMobile = useMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoSize, setLogoSize] = useState('h-32');
  
  useEffect(() => {
    if (isMobile) {
      setLogoSize('h-12 w-12 my-2');
    } else {
      setLogoSize('h-32');
    }
  }, [isMobile]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Navigation Bar - Hidden on Mobile */}
        <div className={`${isMobile ? 'hidden' : 'flex'} justify-between items-center py-2 border-b border-gray-200`}>
          <div className="flex items-center">
            <Link href="#" className="text-sm text-[hsl(var(--tecastra-darkgray))] hover:text-[hsl(var(--tecastra-teal))]">TecAstra Labs</Link>
            <span className="mx-2 text-[hsl(var(--tecastra-darkgray))]">|</span>
            <Link href="#" className="text-sm text-[hsl(var(--tecastra-darkgray))] hover:text-[hsl(var(--tecastra-teal))]">Partners</Link>
            <span className="mx-2 text-[hsl(var(--tecastra-darkgray))]">|</span>
            <Link href="#" className="text-sm text-[hsl(var(--tecastra-darkgray))] hover:text-[hsl(var(--tecastra-teal))]">Company</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-sm text-[hsl(var(--tecastra-darkgray))] hover:text-[hsl(var(--tecastra-teal))]">Contact Sales</Link>
            <Link href="#" className="text-sm text-[hsl(var(--tecastra-teal))] font-medium">Customer Support</Link>
            <div className="relative">
              <button className="text-sm text-[hsl(var(--tecastra-darkgray))] hover:text-[hsl(var(--tecastra-teal))] flex items-center">
                <span>Global</span>
                <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Main Navigation */}
        <div className="flex justify-between items-center py-8">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <div className="flex items-center justify-center">
                <img 
                  src="/src/assets/images/tecastra-logo.jpeg" 
                  alt="TecAstra" 
                  className={`${logoSize} object-contain`} 
                />
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            {!isMobile && (
              <nav className="ml-8 flex space-x-6">
                <div className="nav-item relative group">
                  <button className="text-[hsl(var(--tecastra-darkblue))] hover:text-[hsl(var(--tecastra-teal))] font-medium flex items-center">
                    Products
                    <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <MegaMenu type="products" />
                </div>
                
                <div className="nav-item relative group">
                  <button className="text-[hsl(var(--tecastra-darkblue))] hover:text-[hsl(var(--tecastra-teal))] font-medium flex items-center">
                    Solutions
                    <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <MegaMenu type="solutions" />
                </div>
                
                <div className="nav-item relative group">
                  <button className="text-[hsl(var(--tecastra-darkblue))] hover:text-[hsl(var(--tecastra-teal))] font-medium flex items-center">
                    Services
                    <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <MegaMenu type="services" />
                </div>
                
                <Link href="#" className="text-[hsl(var(--tecastra-darkblue))] hover:text-[hsl(var(--tecastra-teal))] font-medium">Resources</Link>
                <Link href="#" className="text-[hsl(var(--tecastra-darkblue))] hover:text-[hsl(var(--tecastra-teal))] font-medium">Partners</Link>
              </nav>
            )}
          </div>
          
          <div className="flex items-center">
            {!isMobile && (
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--tecastra-teal))] focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            )}
            <Link 
              href="#" 
              className="ml-4 px-4 py-2 rounded-full bg-[hsl(var(--tecastra-teal))] text-white text-sm font-medium hover:bg-[hsl(var(--tecastra-darkblue))] transition duration-150"
            >
              Get Demo
            </Link>
            
            {/* Mobile menu button */}
            {isMobile && (
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <button 
                    type="button" 
                    className="ml-2 p-2 rounded-md text-[hsl(var(--tecastra-darkblue))] hover:text-[hsl(var(--tecastra-teal))]"
                    onClick={() => setMobileMenuOpen(true)}
                  >
                    <Menu className="h-6 w-6" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center mb-8">
                      <div className="font-heading font-bold text-2xl flex items-center">
                        <span className="text-[hsl(var(--tecastra-teal))]">Tec</span>
                        <span className="text-[hsl(var(--tecastra-gold))]">Astra</span>
                      </div>
                      <button onClick={() => setMobileMenuOpen(false)}>
                        <X className="h-6 w-6" />
                      </button>
                    </div>
                    
                    <div className="flex-1 overflow-auto">
                      <nav className="flex flex-col space-y-6">
                        <div className="space-y-3">
                          <h3 className="font-heading font-semibold text-[hsl(var(--tecastra-teal))]">Products</h3>
                          <Link href="#" className="block hover:text-[hsl(var(--tecastra-teal))]">Next-Gen Firewall</Link>
                          <Link href="#" className="block hover:text-[hsl(var(--tecastra-teal))]">Cloud Security</Link>
                          <Link href="#" className="block hover:text-[hsl(var(--tecastra-teal))]">Endpoint Protection</Link>
                        </div>
                        
                        <div className="space-y-3">
                          <h3 className="font-heading font-semibold text-[hsl(var(--tecastra-teal))]">Solutions</h3>
                          <Link href="#" className="block hover:text-[hsl(var(--tecastra-teal))]">Zero Trust Implementation</Link>
                          <Link href="#" className="block hover:text-[hsl(var(--tecastra-teal))]">Cloud Security & Compliance</Link>
                          <Link href="#" className="block hover:text-[hsl(var(--tecastra-teal))]">Ransomware Prevention</Link>
                        </div>
                        
                        <div className="space-y-3">
                          <h3 className="font-heading font-semibold text-[hsl(var(--tecastra-teal))]">Services</h3>
                          <Link href="#" className="block hover:text-[hsl(var(--tecastra-teal))]">Security Assessment</Link>
                          <Link href="#" className="block hover:text-[hsl(var(--tecastra-teal))]">Managed Detection & Response</Link>
                          <Link href="#" className="block hover:text-[hsl(var(--tecastra-teal))]">Security Training</Link>
                        </div>
                        
                        <Link href="#" className="font-medium hover:text-[hsl(var(--tecastra-teal))]">Resources</Link>
                        <Link href="#" className="font-medium hover:text-[hsl(var(--tecastra-teal))]">Partners</Link>
                        <Link href="#" className="font-medium hover:text-[hsl(var(--tecastra-teal))]">TecAstra Labs</Link>
                        <Link href="#" className="font-medium hover:text-[hsl(var(--tecastra-teal))]">Company</Link>
                      </nav>
                    </div>
                    
                    <div className="mt-auto space-y-4 pt-6 border-t">
                      <div className="relative">
                        <input 
                          type="text" 
                          placeholder="Search..." 
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--tecastra-teal))] focus:border-transparent"
                        />
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                      </div>
                      <Link 
                        href="#" 
                        className="block w-full px-4 py-2 rounded-full bg-[hsl(var(--tecastra-teal))] text-white text-sm font-medium hover:bg-[hsl(var(--tecastra-darkblue))] text-center transition duration-150"
                      >
                        Get Demo
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
