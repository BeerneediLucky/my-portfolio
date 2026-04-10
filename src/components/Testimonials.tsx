import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Alex Johnson", role: "Startup Founder", text: "Lucky delivered an exceptional website that exceeded all expectations. The attention to detail is remarkable and our conversion rate doubled.", rating: 5, avatar: "AJ" },
  { name: "Sarah Chen", role: "Product Manager", text: "Working with Lucky was a fantastic experience. The designs are modern, clean, and highly functional. Would definitely work again.", rating: 5, avatar: "SC" },
  { name: "Michael Brown", role: "E-commerce Owner", text: "Our conversion rate increased by 40% after the redesign. The ROI was incredible. Highly recommend Lucky's services!", rating: 5, avatar: "MB" },
  { name: "Emily Davis", role: "Creative Director", text: "The UI/UX work was outstanding. Lucky has a keen eye for design and great communication skills. Delivered ahead of schedule.", rating: 5, avatar: "ED" },
];

const Testimonials = () => (
  <SectionWrapper id="testimonials">
    <div className="section-header">
      <h2 className="section-title">
        Client <span className="gradient-text">Reviews</span>
      </h2>
      <div className="section-line" />
      <p className="section-subtitle">What my clients say about working with me.</p>
    </div>
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {testimonials.map((t, i) => (
        <motion.div
          key={t.name}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -6 }}
          className="card-premium rounded-2xl p-8 relative group"
        >
          <Quote size={40} className="text-primary/10 absolute top-6 right-6 group-hover:text-primary/20 transition-colors duration-500" />
          <div className="flex gap-1 mb-5">
            {Array.from({ length: t.rating }).map((_, j) => (
              <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-muted-foreground mb-8 leading-relaxed text-[15px]">"{t.text}"</p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground" style={{ background: "var(--gradient-accent)" }}>
              {t.avatar}
            </div>
            <div>
              <p className="font-heading font-semibold">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default Testimonials;
