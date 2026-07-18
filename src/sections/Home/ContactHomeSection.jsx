import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { HomeSection, StaggerReveal, StaggerItem } from "@/components/home";
import { easeOut } from "@/lib/motionPresets";

const contactItems = [
  { icon: FaEnvelope, label: "Email", value: "webbuildinfotech@gmail.com", href: "mailto:webbuildinfotech@gmail.com" },
  {
    icon: FaMapMarkerAlt,
    label: "Office",
    value: "2nd Floor, Mox Mall, Mandvi, near Bus Station, Gujarat 394160",
  },
  { icon: FaClock, label: "Business Hours", value: "Mon – Fri: 9:00 AM – 6:00 PM IST" },
];

const ContactHomeSection = () => (
  <HomeSection id="contact" variant="white" eyebrow="Contact" title="Get In Touch">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <StaggerReveal className="space-y-5" stagger={0.08}>
        {contactItems.map(({ icon: Icon, label, value, href }) => (
          <StaggerItem key={label}>
            <motion.div
              className="home-card flex gap-4 !p-4"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3, ease: easeOut }}
            >
              <div className="home-icon-box shrink-0">
                <Icon />
              </div>
              <div>
                <p className="home-text-muted text-xs font-bold uppercase tracking-wide">{label}</p>
                {href ? (
                  <a href={href} className="home-text-title mt-1 block text-sm font-medium hover:text-[var(--home-link)]">
                    {value}
                  </a>
                ) : (
                  <p className="home-text-body mt-1 text-sm">{value}</p>
                )}
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerReveal>

      <motion.div
        className="overflow-hidden rounded-2xl border border-[var(--home-card-border)]"
        initial={{ opacity: 0, x: 32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <iframe
          title="WebBuild Infotech office location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.3552909894042!2d73.29943171130661!3d21.25739938036824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be07157bf6ae843%3A0xeb5269d189faf71!2sWebBuild%20Infotech!5e0!3m2!1sen!2sin!4v1737980094041!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: 360 }}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </motion.div>
    </div>
  </HomeSection>
);

export default ContactHomeSection;
