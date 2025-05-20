import { Link } from 'wouter';
import { 
  Facebook, 
  Linkedin, 
  Twitter, 
  Youtube 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--tecastra-darkblue))] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="font-heading font-bold text-2xl text-white mb-6 flex items-center">
              <span className="text-white">Tec</span><span className="text-[hsl(var(--tecastra-gold))]">Astra</span>
            </div>
            <p className="text-gray-300 mb-6">
              Securing tomorrow's technology today with advanced cybersecurity solutions for modern enterprises.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-[hsl(var(--tecastra-gold))] transition duration-150">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-[hsl(var(--tecastra-gold))] transition duration-150">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-[hsl(var(--tecastra-gold))] transition duration-150">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-[hsl(var(--tecastra-gold))] transition duration-150">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Products</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-300 hover:text-white transition duration-150">Next-Gen Firewall</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition duration-150">Cloud Security</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition duration-150">Endpoint Protection</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition duration-150">Zero Trust Security</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition duration-150">IoT Security</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-300 hover:text-white transition duration-150">TecAstra Labs</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition duration-150">Resource Library</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition duration-150">Case Studies</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition duration-150">Webinars</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition duration-150">Security Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-300 hover:text-white transition duration-150">About Us</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition duration-150">Careers</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition duration-150">Partners</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition duration-150">Contact</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition duration-150">Media Center</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} TecAstra. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">Cookies</Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
