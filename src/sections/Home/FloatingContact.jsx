import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import "./home-sections.css";

const FloatingContact = () => (
  <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
    <motion.a
      href="mailto:webbuildinfotech@gmail.com"
      initial={{ opacity: 0, scale: 0, x: 20 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 260 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      className="float-btn-pulse flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg"
      aria-label="Email"
    >
      <FaEnvelope size={18} />
    </motion.a>
  </div>
);

export default FloatingContact;
