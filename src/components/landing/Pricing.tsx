import { motion } from "motion/react";
import { Button } from "@/src/components/ui/Button";
import { Card } from "@/src/components/ui/Card";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/src/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "$—",
    description: "Essential cash flow tracking, basic anomaly detection.",
    features: ["Cash flow tracking", "Basic anomaly detection", "1 entity connection", "Weekly reports"]
  },
  {
    name: "Growth",
    price: "$—",
    popular: true,
    description: "Multi-entity consolidation, advanced variance analysis, ZenForce workflows.",
    features: ["Multi-entity consolidation", "Advanced variance analysis", "ZenForce workflows", "Premium support", "Real-time alerts"]
  },
  {
    name: "Enterprise",
    price: "$—",
    description: "Custom AI models, dedicated deployment, SLA guarantees.",
    features: ["Custom AI models", "Dedicated deployment", "SLA guarantees", "Custom integrations", "On-site training"]
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-32 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-navy">Simple, transparent pricing.</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch pt-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Card className={cn(
                "p-10 h-full flex flex-col justify-between relative",
                plan.popular ? "bg-navy text-white shadow-2xl scale-105 border-navy z-10" : "bg-white text-navy"
              )}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wider">
                    MOST POPULAR
                  </div>
                )}
                
                <div>
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-navy/50 font-normal">/mo</span>
                  </div>
                  <p className={cn("mb-8", plan.popular ? "text-white/70" : "text-navy/70")}>
                    {plan.description}
                  </p>
                  
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm font-medium">
                        <Check size={18} className={plan.popular ? "text-primary" : "text-primary"} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant={plan.popular ? "coral" : "outline"} 
                  size="xl" 
                  className={cn("w-full rounded-xl", plan.popular ? "" : "border-navy/10 hover:bg-navy/5")}
                >
                  {plan.name === "Enterprise" ? "Talk to sales" : "Get Started"}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
