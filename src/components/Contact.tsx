import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Send, Instagram, Youtube, Github, ExternalLink, Mail, MapPin } from "lucide-react";

const socials = [
  { icon: Instagram, label: "Instagram", href: "#", color: "hover:text-pink-400" },
  { icon: Youtube, label: "YouTube", href: "#", color: "hover:text-red-400" },
  { icon: Github, label: "GitHub", href: "#", color: "hover:text-foreground" },
  { icon: ExternalLink, label: "Fiverr", href: "#", color: "hover:text-green-400" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the WhatsApp message
    const phoneNumber = "917207231018"; // Updated with your actual number
    const message = `*New Contact Form Submission*%0A%0A*Name:* ${form.name}%0A*Email:* ${form.email}%0A*Message:* ${form.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");
    
    // Reset form
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <SectionWrapper id="contact">
      <div className="section-header">
        <h2 className="section-title">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <div className="section-line" />
        <p className="section-subtitle">Have a project in mind? Let's create something amazing together.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="space-y-8 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-heading font-semibold mb-1">Email Me</p>
                <p className="text-muted-foreground text-sm">hello@lucky.dev</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-heading font-semibold mb-1">Location</p>
                <p className="text-muted-foreground text-sm">Available Worldwide</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-5 font-medium uppercase tracking-wider">Follow me</p>
          <div className="flex gap-4">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.1 }}
                className={`w-12 h-12 rounded-xl card-premium flex items-center justify-center text-muted-foreground ${s.color} transition-colors duration-300`}
                aria-label={s.label}
              >
                <s.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="card-premium rounded-3xl p-8 space-y-5 noise-overlay"
        >
          {[
            { key: "name", type: "text", placeholder: "Your Name" },
            { key: "email", type: "email", placeholder: "Your Email" },
          ].map((field) => (
            <div key={field.key} className="relative">
              <input
                type={field.type}
                placeholder={field.placeholder}
                value={form[field.key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                onFocus={() => setFocused(field.key)}
                onBlur={() => setFocused("")}
                required
                className="input-premium"
              />
              {focused === field.key && (
                <motion.div
                  layoutId="focusRing"
                  className="absolute inset-0 rounded-xl border-2 border-primary pointer-events-none"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </div>
          ))}
          <div className="relative">
            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused("")}
              required
              rows={5}
              className="input-premium resize-none"
            />
            {focused === "message" && (
              <motion.div
                layoutId="focusRing"
                className="absolute inset-0 rounded-xl border-2 border-primary pointer-events-none"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-gradient w-full py-4 rounded-2xl flex items-center justify-center gap-2 font-heading text-base"
          >
            <Send size={18} />
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
