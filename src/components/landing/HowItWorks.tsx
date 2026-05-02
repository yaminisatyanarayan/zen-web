import { motion } from "motion/react";
import { Button } from "@/src/components/ui/Button";
import { Play, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect",
    description: "Securely link your ERP, CRM, banks, and finance systems in under a day."
  },
  {
    number: "02",
    title: "Unify",
    description: "ZenFlow and ZenHelix clean and reconcile your data continuously."
  },
  {
    number: "03",
    title: "Decide",
    description: "ZAxiom and ZenForce agents deliver audit-ready insights, alerts, and reports."
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-bg p-10 rounded-2xl border border-navy/5 space-y-6 group hover:border-primary/20 transition-all shadow-sm hover:shadow-xl"
            >
              <div className="text-5xl font-bold text-navy/10 group-hover:text-primary/20 transition-colors">{step.number}</div>
              <h3 className="text-2xl font-bold text-navy">{step.title}</h3>
              <p className="text-navy/70 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="text-center"
        >
          <Button size="xl" className="bg-navy text-white hover:bg-navy/90 rounded-2xl px-12 group transition-all">
            <Play className="w-5 h-5 fill-white mr-2" />
            Watch a 90-second demo
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
