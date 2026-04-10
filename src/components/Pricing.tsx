import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Check, Star, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$99",
    desc: "Perfect for small projects",
    features: ["Single Page Design", "Responsive Layout", "Basic Animations", "1 Revision Round", "3-Day Delivery"],
    popular: false,
    icon: null,
  },
  {
    name: "Professional",
    price: "$249",
    desc: "Best value for businesses",
    features: ["Multi-Page Website", "Custom UI/UX Design", "Advanced Animations", "3 Revision Rounds", "Source Code Included", "5-Day Delivery"],
    popular: true,
    icon: Zap,
  },
  {
    name: "Premium",
    price: "$499",
    desc: "For large-scale projects",
    features: ["Full Web Application", "Custom Design System", "Complex Animations", "Unlimited Revisions", "Priority Support", "CMS Integration", "10-Day Delivery"],
    popular: false,
    icon: null,
  },
];

const Pricing = () => (
  <SectionWrapper id="pricing">
    <div className="section-header">
      <h2 className="section-title">
        <span className="gradient-text">Pricing</span> Plans
      </h2>
      <div className="section-line" />
      <p className="section-subtitle">Transparent pricing for every budget. No hidden fees.</p>
    </div>
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
      {plans.map((plan, i) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -8 }}
          className={`rounded-3xl p-8 relative transition-all duration-700 ${
            plan.popular
              ? "card-premium border-2 border-primary/50 scale-[1.03]"
              : "card-premium"
          }`}
        >
          {plan.popular && (
            <>
              <div className="absolute -inset-[1px] rounded-3xl opacity-30" style={{ background: "var(--gradient-accent)", filter: "blur(20px)" }} />
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 btn-gradient px-5 py-1.5 rounded-full text-xs flex items-center gap-1.5 whitespace-nowrap z-10">
                <Star size={12} /> Best Value
              </div>
            </>
          )}
          <div className="relative z-10">
            <h3 className="font-heading font-semibold text-xl mb-1">{plan.name}</h3>
            <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>
            <div className="mb-8">
              <span className="text-5xl font-extrabold gradient-text">{plan.price}</span>
              <span className="text-muted-foreground text-sm ml-1"> / project</span>
            </div>
            <ul className="space-y-4 mb-10">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-primary" />
                  </div>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://www.fiverr.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full text-center py-4 rounded-2xl font-semibold transition-all duration-500 ${
                plan.popular
                  ? "btn-gradient"
                  : "glass hover:bg-primary/10 hover:border-primary/20"
              }`}
            >
              Order on Fiverr
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default Pricing;
