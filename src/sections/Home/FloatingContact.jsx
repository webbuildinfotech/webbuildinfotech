import React from "react";
import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import "./home-sections.css";

const floatBtn = {
  hidden: { opacity: 0, scale: 0, x: 20 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { delay: 0.8 + i * 0.1, type: "spring", stiffness: 260 },
  }),
};

const FloatingContact = () => (
  <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
    {[
      { href: "https://wa.me/919265128409", bg: "bg-[#25D366]", icon: FaWhatsapp, size: 22, label: "WhatsApp", external: true },
      { href: "tel:+919265128409", bg: "bg-blue-600 float-btn-pulse", icon: FaPhone, size: 18, label: "Call" },
      { href: "mailto:info@webbuildinfotech.com", bg: "bg-slate-800", icon: FaEnvelope, size: 18, label: "Email" },
    ].map(({ href, bg, icon: Icon, size, label, external }, i) => (
      <motion.a
        key={label}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        custom={i}
        initial="hidden"
        animate="visible"
        variants={floatBtn}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg ${bg}`}
        aria-label={label}
      >
        <Icon size={size} />
      </motion.a>
    ))}
  </div>
);

export default FloatingContact;
