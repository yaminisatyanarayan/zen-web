import { motion } from "motion/react";
import { Card } from "@/src/components/ui/Card";
import { Building2, BookOpen, UserCheck, ShieldAlert, ArrowRight } from "lucide-react";
import { cn } from "@/src/lib/utils";

const products = [
  {
    title: "ZenBank",
    description: "Real-time cash and treasury intelligence. See every rupee across every account, every bank, every entity. Auto-detect anomalies. Forecast cash with AI.",
    accent: "navy",
    icon: Building2,
    colorClass: "text-[#0A1F44] bg-[#0A1F44]/5",
    borderClass: "hover:border-[#0A1F44]/30"
  },
  {
    title: "ZenBook",
    description: "Financial analysis and anomaly detection that never sleeps. Continuous variance analysis. Audit-ready explanations. Instant answers to 'what changed and why.'",
    accent: "coral",
    icon: BookOpen,
    colorClass: "text-[#FF6B5C] bg-[#FF6B5C]/5",
    borderClass: "hover:border-[#FF6B5C]/30"
  },
  {
    title: "ZenForce",
    description: "Your AI finance workforce. Agentic workflows that monitor, reconcile, and report 24/7. Replaces 80% of repetitive analyst work.",
    accent: "violet",
    icon: UserCheck,
    colorClass: "text-[#7C5CFF] bg-[#7C5CFF]/5",
    borderClass: "hover:border-[#7C5CFF]/30"
  },
  {
    title: "ZenPay",
    description: "Payables intelligence that prevents leakage. Catches duplicate invoices, fraud signals, and policy violations before they hit your bank account.",
    accent: "gold",
    icon: ShieldAlert,
    colorClass: "text-[#FFB547] bg-[#FFB547]/5",
    borderClass: "hover:border-[#FFB547]/30"
  }
];

export const ProductSuite = () => {
  return (
    <section id="products" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-navy">One platform. Four AI workforces.</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className={cn(
                "p-10 transition-all duration-300 transform group border border-navy/5 h-full flex flex-col justify-between",
                product.borderClass
              )}>
                <div>
                  <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-8", product.colorClass)}>
                    <product.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-4">{product.title}</h3>
                  <p className="text-navy/70 leading-relaxed mb-10">{product.description}</p>
                </div>

                <a 
                  href="#" 
                  className={cn(
                    "inline-flex items-center gap-2 font-bold transition-all",
                    product.accent === 'navy' && "text-navy",
                    product.accent === 'coral' && "text-primary",
                    product.accent === 'violet' && "text-violet",
                    product.accent === 'gold' && "text-gold"
                  )}
                >
                  Learn more
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
