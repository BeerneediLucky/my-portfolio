import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/?text=Hi%20Lucky%2C%20I%20saw%20your%20portfolio%20and%20I%20want%20to%20work%20with%20you."
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0, rotate: -180 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
    whileHover={{ scale: 1.15, rotate: 10 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-shadow duration-500"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={24} className="text-white" />
  </motion.a>
);

export default WhatsAppButton;
