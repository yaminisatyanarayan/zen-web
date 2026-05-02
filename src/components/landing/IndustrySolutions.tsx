import { motion, useMotionValue, useSpring, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";
import { ArrowRight, Building, Home, Factory, Store, Briefcase } from "lucide-react";

const industries = [
  {
    name: "Banks & NBFCs",
    metric: "30 days → minutes",
    description: "Loan origination cycles cut from a month to under an hour.",
    icon: Building,
    val: 30,
    unit: ""
  },
  {
    name: "Real Estate",
    metric: "200+ entities",
    description: "Consolidate cash flow across hundreds of SPVs in minutes.",
    icon: Home,
    val: 200,
    unit: "+"
  },
  {
    name: "Manufacturing",
    metric: "Instant FP&A",
    description: "Variance analysis on demand instead of days.",
    icon: Factory,
    val: 1,
    unit: ""
  },
  {
    name: "Retail",
    metric: "SKU-level clarity",
    description: "Profitability insights down to individual products.",
    icon: Store,
    val: 1,
    unit: ""
  },
  {
    name: "VC & PE",
    metric: "Hours, not weeks",
    description: "Due diligence completed in a single afternoon.",
    icon: Briefcase,
    val: 1,
    unit: ""
  }
];

const Counter = ({ value, unit }: { value: number; unit: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
            animate(count, value, { duration: 1.5, ease: "easeOut" });
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}><motion.span>{rounded}</motion.span>{unit}</span>;
};

export const IndustrySolutions = () => {
  return (
    <section id="solutions" className="py-32 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-navy text-center mb-16"
        >
          Industry Solutions
        </motion.h2>

        <div className="flex flex-col gap-4">
          {industries.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-6 rounded-2xl border border-navy/5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-xl bg-navy/5 flex items-center justify-center text-navy group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy group-hover:text-primary transition-colors">{item.name}</h3>
                  <p className="text-navy/60 font-medium">{item.description}</p>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center gap-8">
                <div className="text-2xl font-bold text-primary tabular-nums">
                   {item.name === "Banks & NBFCs" ? (
                     <span><Counter value={30} unit="" /> days → minutes</span>
                   ) : item.name === "Real Estate" ? (
                     <Counter value={200} unit="+" />
                   ) : (
                     <span>{item.metric}</span>
                   )}
                </div>
                <ArrowRight size={20} className="text-navy/20 group-hover:text-primary group-hover:translate-x-2 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
