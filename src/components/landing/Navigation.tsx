import * as React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "@/src/components/ui/Button";
import { Activity, Menu, X } from "lucide-react";
import { cn } from "@/src/lib/utils";

export const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(250, 247, 240, 0)", "rgba(250, 247, 240, 0.8)"]
  );
  
  const backdropFilter = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"]
  );

  const borderOpacity = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 31, 68, 0)", "rgba(10, 31, 68, 0.05)"]
  );

  return (
    <motion.nav
      style={({ 
        backgroundColor, 
        backdropFilter, 
        borderBottomColor: borderOpacity 
      } as any)}
      className="fixed top-0 w-full z-50 border-b transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="text-navy w-6 h-6" />
          <span className="text-xl font-bold tracking-tight text-navy">Zenalyst</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Products", "Solutions", "Resources", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-navy/70 hover:text-navy transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-navy/70">Sign in</Button>
          <Button variant="coral">Book a demo</Button>
        </div>

        <button 
          className="md:hidden text-navy"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-bg border-b px-6 py-8 flex flex-col gap-6"
        >
          {["Products", "Solutions", "Resources", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium text-navy"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="flex flex-col gap-4">
            <Button variant="outline" className="w-full">Sign in</Button>
            <Button variant="coral" className="w-full">Book a demo</Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};
