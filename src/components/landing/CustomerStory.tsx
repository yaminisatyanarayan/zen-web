import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export const CustomerStory = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-12"
          >
            <blockquote className="text-5xl lg:text-7xl font-bold text-navy leading-[1.05] tracking-tight">
              "We used to take 11 days to close. Now we close in 2."
            </blockquote>
            
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center text-navy/40">
                <span className="material-symbols-outlined text-[32px]">person</span>
              </div>
              <div>
                <div className="text-xl font-bold text-navy">Rajesh Mehta</div>
                <div className="text-navy/60 font-medium">CFO, Meridian Development Group</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="lg:col-span-4 flex flex-col gap-6"
          >
            {[
              { val: "11 → 2", label: "days to close", accent: "text-primary" },
              { val: "₹2.4Cr", label: "leakage prevented", accent: "text-violet" },
              { val: "200+", label: "entities consolidated", accent: "text-gold" }
            ].map((stat, i) => (
              <div key={i} className="bg-bg p-8 rounded-2xl border border-navy/5 hover:border-navy/10 transition-colors">
                <div className={`text-4xl font-bold mb-1 ${stat.accent}`}>{stat.val}</div>
                <div className="text-navy/60 font-semibold uppercase tracking-wider text-xs">{stat.label}</div>
              </div>
            ))}
            
            <a href="#" className="flex items-center gap-2 text-navy font-bold hover:text-primary transition-colors group mt-4">
              Read the full case study
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
