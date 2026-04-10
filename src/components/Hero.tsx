import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowDown, Briefcase, Sparkles } from "lucide-react";
import { useRef } from "react";

const FloatingCard = ({ className, children, delay = 0 }: { className?: string; children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay, duration: 1, ease: [0.22, 1, 0.36, 1] }}
    className={`absolute card-premium rounded-2xl p-4 glow-border ${className}`}
  >
    {children}
  </motion.div>
);

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const rotateX = useTransform(springY, [-300, 300], [5, -5]);
  const rotateY = useTransform(springX, [-300, 300], [-5, 5]);

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouse}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
    >
      {/* Background orbs - enhanced */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet/8 rounded-full blur-[180px]"
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--foreground)/0.02)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Floating cards */}
      <div className="hidden lg:block">
        <FloatingCard className="top-[18%] left-[6%] floating" delay={0.6}>
          <div className="flex items-center gap-3 text-sm">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
            <span className="text-muted-foreground font-medium">Available for work</span>
          </div>
        </FloatingCard>
        <FloatingCard className="top-[14%] right-[8%] floating-delayed" delay={0.9}>
          <div className="text-sm font-mono tracking-tight">
            <span className="text-primary">const</span>{" "}
            <span className="text-accent">design</span> ={" "}
            <span className="text-green-400">"pixel-perfect"</span>;
          </div>
        </FloatingCard>
        <FloatingCard className="bottom-[28%] left-[4%] floating-slow" delay={1.2}>
          <div className="flex items-center gap-3 text-sm">
            <span className="text-2xl">⚛️</span>
            <div>
              <span className="text-foreground font-medium">React Specialist</span>
              <div className="flex gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary" />
                ))}
              </div>
            </div>
          </div>
        </FloatingCard>
        <FloatingCard className="bottom-[22%] right-[6%] floating" delay={1.4}>
          <div className="flex items-center gap-3 text-sm">
            <span className="text-2xl">🎨</span>
            <div>
              <span className="text-foreground font-medium">UI Designer</span>
              <p className="text-xs text-muted-foreground">Figma • Adobe</p>
            </div>
          </div>
        </FloatingCard>
      </div>

      <motion.div
        style={{ rotateX, rotateY, perspective: 1000 }}
        className="relative z-10 text-center max-w-5xl mx-auto pt-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass mb-8 text-sm">
            <Sparkles size={14} className="text-primary" />
            <span className="text-muted-foreground font-medium tracking-widest uppercase text-xs">
              Frontend Developer • UI Designer
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] mb-8 tracking-tight"
        >
          I Design Experiences,{" "}
          <br className="hidden sm:block" />
          <span className="gradient-text">Not Just Interfaces</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Frontend Developer | UI Designer | React Specialist — crafting pixel-perfect, high-performance digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <a href="#projects" className="btn-gradient px-10 py-4 rounded-2xl text-base flex items-center justify-center gap-2 font-heading group">
            View My Work
            <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
          </a>
          <a href="#contact" className="glass px-10 py-4 rounded-2xl text-base font-heading font-semibold hover:bg-primary/10 transition-all duration-500 flex items-center justify-center gap-2 group">
            <Briefcase size={18} className="group-hover:scale-110 transition-transform duration-300" />
            Hire Me
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-8 md:gap-16 mt-16"
        >
          {[
            { value: "50+", label: "Projects" },
            { value: "30+", label: "Happy Clients" },
            { value: "3+", label: "Years Exp." },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
