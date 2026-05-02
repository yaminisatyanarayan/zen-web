import { motion } from "motion/react";

export const LogoWall = () => {
  const logos = [
    "AcmeCorp",
    "GlobalBank",
    "VenturePartners",
    "NexusFinance",
    "Phoenix",
    "MarbleOne"
  ];

  return (
    <section className="py-20 border-b border-navy/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-12">
        <span className="text-sm font-bold tracking-[0.2em] text-navy/40 uppercase">
          POWERING MODERN FINANCE TEAMS AT
        </span>
        
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
          {logos.map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-2xl font-bold text-navy opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-default"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
