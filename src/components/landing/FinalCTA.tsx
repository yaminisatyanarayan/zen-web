import * as React from "react";
import { motion } from "motion/react";
import { Button } from "@/src/components/ui/Button";

const ShaderGradientCanvas = React.lazy(() => import('@shadergradient/react').then((mod) => ({ default: mod.ShaderGradientCanvas })));
const ShaderGradient = React.lazy(() => import('@shadergradient/react').then((mod) => ({ default: mod.ShaderGradient })));

export const FinalCTA = () => {
  return (
    <section className="py-40 bg-navy relative overflow-hidden text-center">
      <div className="absolute inset-0 z-0">
        <React.Suspense fallback={<div className="w-full h-full bg-navy" />}>
          <ShaderGradientCanvas 
            style={{ position: 'absolute', top: 0 }}
            pointerEvents='none'
          >
            {/* @ts-ignore */}
            <ShaderGradient
                control="props"
                color1='#FF6B5C'
                color2='#7C5CFF'
                color3='#0A1F44'
                uSpeed={0.1}
            />
          </ShaderGradientCanvas>
        </React.Suspense>
        <div className="absolute inset-0 bg-navy/20 mix-blend-multiply" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center gap-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl lg:text-8xl font-bold text-white tracking-tight leading-[0.9]"
        >
          See how Zenalyst can close your books in 2 days.
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <Button size="xl" variant="coral" className="px-12 text-xl py-8">
            Book a 30-minute demo
          </Button>
          <Button size="xl" variant="ghost" className="px-12 text-xl py-8 text-white border-white/20 border hover:bg-white/10 backdrop-blur-xl">
            Talk to sales
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
