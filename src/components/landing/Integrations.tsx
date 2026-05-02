import { motion } from "motion/react";

const integrations = [
  "SAP", "Oracle", "Tally", "Zoho", "Salesforce", "HubSpot", "Workday", "NetSuite",
  "Xero", "QuickBooks", "Stripe", "Plaid", "Razorpay", "ICICI Bank", "HDFC Bank", "SBI"
];

export const Integrations = () => {
  return (
    <section className="py-32 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-navy max-w-4xl mx-auto">
            Connects to every system your finance team already uses — in days, not months.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {integrations.map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white aspect-square rounded-2xl border border-navy/5 flex items-center justify-center p-6 shadow-sm hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all group"
            >
              <span className="text-sm font-bold text-navy group-hover:text-primary transition-colors text-center">{logo}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
