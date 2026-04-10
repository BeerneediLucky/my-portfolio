import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Code, Palette, Zap } from "lucide-react";

// 👉 If using import method (recommended)
// import profileImg from "../assets/profile.jpg";

const skills = [
  { name: "React / Next.js", level: 95, color: "from-primary to-accent" },
  { name: "JavaScript / TypeScript", level: 90, color: "from-accent to-violet" },
  { name: "HTML / CSS / Tailwind", level: 95, color: "from-primary to-neon" },
  { name: "Python", level: 75, color: "from-violet to-primary" },
  { name: "SQL / Databases", level: 70, color: "from-neon to-accent" },
  { name: "UI/UX Design", level: 88, color: "from-accent to-primary" },
];

const highlights = [
  { icon: Code, label: "Clean Code", desc: "Maintainable & scalable" },
  { icon: Palette, label: "Design Eye", desc: "Pixel-perfect UIs" },
  { icon: Zap, label: "Performance", desc: "Optimized & fast" },
];

const About = () => (
  <SectionWrapper id="about">
    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT SIDE (IMAGE SECTION) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative aspect-square max-w-md mx-auto">

          {/* Glow Background */}
          <div
            className="absolute -inset-4 rounded-3xl opacity-50"
            style={{
              background: "var(--gradient-accent)",
              filter: "blur(40px)",
            }}
          />

          {/* IMAGE CARD */}
          <div className="relative card-premium rounded-3xl h-full flex items-center justify-center noise-overlay overflow-hidden group">

            {/* 👉 OPTION 1: PUBLIC FOLDER */}
            <img
              src="/lucky.JPG" // 🔥 Updated path for deployment
              alt="Lucky"
              className="w-full h-full object-cover rounded-3xl transition-transform duration-500 group-hover:scale-105"
            />

            {/* 👉 OPTION 2 (uncomment if using import) */}
            {/*
            <img
              src={profileImg}
              alt="Lucky"
              className="w-full h-full object-cover rounded-3xl transition-transform duration-500 group-hover:scale-105"
            />
            */}

            {/* Glow Border */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(0,255,255,0.2)]" />

            {/* TEXT OVERLAY */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background/90 to-transparent rounded-b-3xl">
              <p className="font-heading font-bold text-2xl">Lucky</p>
              <p className="text-sm text-muted-foreground">
                UI/Frontend Developer
              </p>
            </div>
          </div>

          {/* HIGHLIGHT CARDS */}
          <div className="absolute -right-4 top-1/4 flex flex-col gap-3">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                className="glass rounded-xl px-4 py-2.5 flex items-center gap-3 text-sm shadow-lg"
              >
                <h.icon size={16} className="text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-xs">{h.label}</p>
                  <p className="text-xs text-muted-foreground">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* RIGHT SIDE (CONTENT) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="section-title text-left">
          About <span className="gradient-text">Me</span>
        </h2>

        <div
          className="w-20 h-1 rounded-full mb-8"
          style={{ background: "var(--gradient-accent)" }}
        />

        <p className="text-muted-foreground mb-10 leading-relaxed text-lg">
          I'm a passionate frontend developer and UI designer with a keen eye
          for detail. I specialize in building modern, responsive, and
          high-performance web applications using React and cutting-edge
          technologies. My goal is to transform ideas into stunning digital
          experiences that users love.
        </p>

        {/* SKILLS */}
        <div className="space-y-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className="flex justify-between mb-2 text-sm font-medium">
                <span className="font-heading">{skill.name}</span>
                <span className="text-primary font-semibold">
                  {skill.level}%
                </span>
              </div>

              <div className="h-2.5 rounded-full bg-secondary/80 overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
                >
                  <div
                    className="absolute inset-0 rounded-full opacity-50"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, hsl(var(--primary-foreground) / 0.2), transparent)",
                      animation: "shimmer 2s infinite",
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default About;