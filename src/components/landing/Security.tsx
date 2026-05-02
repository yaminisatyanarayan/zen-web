import { motion } from "motion/react";
import { BadgeCheck, Shield, Lock, Globe, Database, ArrowRight } from "lucide-react";

const badges = [
  { icon: Shield, label: "SOC 2 Type II" },
  { icon: BadgeCheck, label: "ISO 27001" },
  { icon: Lock, label: "GDPR Ready" },
  { icon: Database, label: "AES-256 Encryption" },
  { icon: Globe, label: "India Data Residency" }
];

export const Security = () => {
  return (
    <section className="py-32 bg-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold mb-16"
        >
          Enterprise-grade security by design.
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full backdrop-blur-sm"
            >
              <badge.icon size={20} className="text-emerald-400" />
              <span className="font-semibold text-sm">{badge.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-white/60 text-xl">
            "Your data never trains our models. Your data is yours, period."
          </p>
          <a href="#" className="inline-flex items-center gap-2 text-white font-bold hover:text-emerald-400 transition-colors group">
            Read our security overview
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
