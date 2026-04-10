import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Star, ExternalLink, Shield, Clock, Award } from "lucide-react";

const badges = [
  { icon: Shield, label: "Top Rated Seller" },
  { icon: Clock, label: "On-time Delivery" },
  { icon: Award, label: "100% Satisfaction" },
];

const FiverrSection = () => (
  <SectionWrapper id="fiverr">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="card-premium rounded-3xl p-12 md:p-20 text-center max-w-4xl mx-auto relative overflow-hidden noise-overlay"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--gradient-accent)" }} />
      <div className="relative z-10">
        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-medium mb-8 border border-green-500/20"
        >
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available on Fiverr
        </motion.div>
        <h2 className="section-title mb-4">
          Hire Me on <span className="gradient-text">Fiverr</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto text-lg">
          Top-rated seller with 5-star reviews. Get premium quality work delivered on time, every time.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-2 text-sm text-muted-foreground">
              <b.icon size={16} className="text-primary" />
              {b.label}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-1 mb-10">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={22} className="fill-yellow-400 text-yellow-400" />
          ))}
          <span className="ml-3 text-sm text-muted-foreground font-medium">5.0 (50+ reviews)</span>
        </div>
        <a
          href="https://www.fiverr.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gradient px-10 py-4 rounded-2xl inline-flex items-center gap-2 font-heading group"
        >
          Visit Fiverr Profile
          <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </a>
      </div>
    </motion.div>
  </SectionWrapper>
);

export default FiverrSection;
