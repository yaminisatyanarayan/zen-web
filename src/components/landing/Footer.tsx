import { Activity, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-navy py-20 text-white/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-16 mb-20">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-2 text-white">
              <Activity size={28} />
              <span className="text-2xl font-bold tracking-tight">Zenalyst</span>
            </div>
            <p className="max-w-xs leading-relaxed">
              © 2026 Zenalyst AI, Bangalore, India. SOC 2 & ISO 27001 Certified. Engineered for clarity.
            </p>
            <div className="flex gap-4">
               <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
               <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">Products</h4>
            <ul className="space-y-3">
              {["ZenBank", "ZenBook", "ZenForce", "ZenPay"].map((item) => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">Solutions</h4>
            <ul className="space-y-3">
              {["Banks", "Real Estate", "Manufacturing", "Retail", "VC/PE"].map((item) => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">Legal</h4>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 text-center text-xs">
          Made with precision for CFOs worldwide.
        </div>
      </div>
    </footer>
  );
};
