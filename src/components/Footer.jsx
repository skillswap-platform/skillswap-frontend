import { ArrowLeftRight } from "lucide-react";
import { Link } from "react-router-dom"; 

export default function Footer() {
  return (
    <footer className="text-white py-16 px-6 md:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <ArrowLeftRight className="text-[#9B4D5E]" size={24} />
            <span className="text-2xl font-bold">SkillSwap</span>
          </div>
          <p className="text-[#94A3B8] text-sm leading-relaxed">
            Exchange skills, grow together. Build your network and learn something new today.
          </p>
        </div>
        
        {/* Links */}
        <div>
          <h4 className="font-bold mb-6 text-[#CBD5E1]">Platform</h4>
          <ul className="space-y-3 text-[#94A3B8] text-sm">
            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link to="/how-it-works" className="hover:text-white transition">How It Works</Link></li>
            <li><Link to="/pricing" className="hover:text-white transition">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-[#CBD5E1]">Support</h4>
          <ul className="space-y-3 text-[#94A3B8] text-sm">
            <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
            <li><Link to="/help" className="hover:text-white transition">Help Center</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-[#CBD5E1]">Legal</h4>
          <ul className="space-y-3 text-[#94A3B8] text-sm">
            <li><Link to="/terms" className="hover:text-white transition">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><Link to="/cookie" className="hover:text-white transition">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center text-[#64748B] text-sm">
        &copy; {new Date().getFullYear()} SkillSwap. All rights reserved.
      </div>
    </footer>
  );
}