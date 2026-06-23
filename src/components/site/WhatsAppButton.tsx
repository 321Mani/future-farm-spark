import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/914327256256"
      target="_blank"
      rel="noopener"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring" }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 left-6 right-auto z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-glow sm:left-auto sm:right-6"
      aria-label="WhatsApp enquiry"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <MessageCircle className="relative h-6 w-6" />
    </motion.a>
  );
}
