import { motion } from "motion/react";
import { CheckCircle2, AlertTriangle } from "lucide-react";

export const DeterministicAI = () => {
  return (
    <section className="py-32 bg-navy relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Why deterministic AI matters for finance.</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Generic AI */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl bg-white/5 border border-red-500/20 backdrop-blur-sm relative"
          >
            <div className="text-red-400 mb-8">
              <AlertTriangle size={48} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Generic AI</h3>
            <ul className="space-y-4">
              {["Hallucinates numbers", "Can't be audited", "Unsafe for finance"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Zenalyst */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl bg-white/[0.08] border border-emerald-500/30 backdrop-blur-md shadow-[0_0_60px_rgba(74,222,128,0.1)] relative"
          >
            <div className="text-emerald-400 mb-8">
              <CheckCircle2 size={48} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Zenalyst</h3>
            <ul className="space-y-4">
              {["Every number traceable", "Every output reproducible", "Audit-ready by design"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 text-white/50 italic text-xl"
        >
          "Built for finance. Not adapted from chatbots."
        </motion.p>
      </div>
    </section>
  );
};
