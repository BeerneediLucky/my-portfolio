import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const filters = ["All", "React", "UI Design", "Web Apps"];

const projects = [
  { title: "E-Commerce Dashboard", desc: "Modern admin panel with real-time analytics and data visualization", tags: ["React", "Tailwind"], category: "React", color: "from-primary/20 to-accent/20" },
  { title: "SaaS Landing Page", desc: "Conversion-optimized landing page with premium design", tags: ["UI Design", "Figma"], category: "UI Design", color: "from-violet/20 to-primary/20" },
  { title: "Task Management App", desc: "Drag & drop productivity tool with real-time sync", tags: ["React", "TypeScript"], category: "Web Apps", color: "from-accent/20 to-neon/20" },
  { title: "Portfolio Template", desc: "Creative developer portfolio with 3D effects", tags: ["React", "Framer Motion"], category: "React", color: "from-neon/20 to-violet/20" },
  { title: "Finance Tracker", desc: "Personal finance management with smart insights", tags: ["React", "Chart.js"], category: "Web Apps", color: "from-primary/20 to-neon/20" },
  { title: "Brand Identity Kit", desc: "Complete branding & design system", tags: ["Figma", "Design System"], category: "UI Design", color: "from-violet/20 to-accent/20" },
];

const Projects = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <SectionWrapper id="projects">
      <div className="section-header">
        <h2 className="section-title">
          My <span className="gradient-text">Projects</span>
        </h2>
        <div className="section-line" />
        <p className="section-subtitle">A showcase of my recent work and creative experiments.</p>
      </div>

      <div className="flex flex-wrap gap-3 justify-center mb-14">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-500 ${
              active === f ? "text-primary-foreground" : "glass hover:bg-primary/10 text-foreground"
            }`}
          >
            {active === f && (
              <motion.div
                layoutId="projectFilter"
                className="absolute inset-0 rounded-full btn-gradient"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{f}</span>
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="card-premium rounded-2xl overflow-hidden group"
            >
              <div className={`h-52 bg-gradient-to-br ${p.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/0 transition-colors duration-500" />
                {/* Shimmer on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/5 to-transparent" style={{ animation: "shimmer 1.5s infinite" }} />
                </div>
                <span className="text-5xl opacity-40 group-hover:scale-110 transition-transform duration-700">🖥️</span>
                {/* Overlay arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight size={16} className="text-primary" />
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-heading font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium border border-primary/20">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button className="flex items-center gap-1.5 text-sm text-primary hover:gap-2.5 transition-all font-medium group/btn">
                    <ExternalLink size={14} /> Live Demo
                  </button>
                  <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
                    <Github size={14} /> Code
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
