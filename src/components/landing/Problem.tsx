import { motion } from "motion/react";

export const Problem = () => {
  return (
    <section className="py-32 bg-bg overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-navy leading-tight">
            Finance teams are drowning in data, starving for insight.
          </h2>
          <p className="text-xl text-navy/70 leading-relaxed max-w-3xl mx-auto">
            Finance teams still spend 60% of their time wrangling data across ERP, CRM, banks, and spreadsheets — chasing errors, reconciling numbers, and answering 'why did this change?' By the time the report is ready, the decision has already been made.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
