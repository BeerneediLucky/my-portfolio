import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="relative py-10 px-4">
    {/* Gradient separator */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px" style={{ background: "var(--gradient-accent)" }} />
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <a href="#" className="font-heading font-bold text-lg gradient-text hover:scale-105 transition-transform">Lucky.</a>
      <p className="flex items-center gap-1.5">
        Made with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> by Lucky © {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default Footer;
