import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Palette, Globe, Layout, RefreshCw, ArrowRight } from "lucide-react";

const services = [
  { icon: Palette, title: "UI/UX Design", desc: "Creating intuitive and visually stunning user interfaces with a focus on user experience and delight.", accent: "primary" },
  { icon: Globe, title: "Website Development", desc: "Building responsive, high-performance websites using modern frameworks and cutting-edge technologies.", accent: "accent" },
  { icon: Layout, title: "Landing Page Design", desc: "Designing conversion-optimized landing pages that captivate visitors and drive results.", accent: "violet" },
  { icon: RefreshCw, title: "Redesign Services", desc: "Transforming outdated designs into modern, engaging digital experiences that stand out.", accent: "neon" },
];

const Services = () => (
  <SectionWrapper id="services">
    <div className="section-header">
      <h2 className="section-title">
        My <span className="gradient-text">Services</span>
      </h2>
      <div className="section-line" />
      <p className="section-subtitle">Premium digital solutions tailored to your needs.</p>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -12 }}
          className="card-premium rounded-2xl p-8 text-center group cursor-pointer noise-overlay"
        >
          <div className={`w-16 h-16 rounded-2xl mx-auto mb-7 flex items-center justify-center bg-${s.accent}/10 group-hover:bg-${s.accent}/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
            <s.icon size={28} className={`text-${s.accent}`} />
          </div>
          <h3 className="font-heading font-semibold text-lg mb-3">{s.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
          <div className="flex items-center justify-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            Learn more <ArrowRight size={14} />
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default Services;
