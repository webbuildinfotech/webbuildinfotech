import React, { useState } from "react";
import { FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

const SocialButtons = () => {
  const [hovered, setHovered] = useState(null);

  const socialLinks = [
    {
      id: 1,
      name: "Facebook",
      icon: <BsFacebook className="h-[1.15rem] w-[1.15rem]" aria-hidden />,
      className:
        "bg-gradient-to-br from-[#1877F2] to-[#0d5dbf] shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] hover:from-[#1a7df5] hover:to-[#0c63d4]",
      link: "https://www.facebook.com/webbuildinfotech/",
    },
    {
      id: 2,
      name: "Instagram",
      icon: <FaInstagram className="h-[1.2rem] w-[1.2rem]" aria-hidden />,
      className:
        "bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] hover:brightness-110",
      link: "https://www.instagram.com/webbuildinfotech/",
    },
    {
      id: 3,
      name: "LinkedIn",
      icon: <FaLinkedinIn className="h-[1.1rem] w-[1.1rem]" aria-hidden />,
      className:
        "bg-gradient-to-br from-[#0A66C2] to-[#004182] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] hover:from-[#0b6bcb] hover:to-[#003d7a]",
      link: "https://www.linkedin.com/company/82601929/admin/dashboard/",
    },
    {
      id: 4,
      name: "Email",
      icon: <FaEnvelope className="h-[1.15rem] w-[1.15rem]" aria-hidden />,
      className:
        "bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] hover:from-[#3b82f6] hover:to-[#1e40af]",
      link: "mailto:webbuildinfotech@gmail.com",
    },
  ];

  return (
    <aside
      className="pointer-events-none fixed right-2 top-1/2 z-40 -translate-y-1/2 sm:right-3 lg:right-5"
      aria-label="Connect on social media"
    >
      <div className="pointer-events-auto flex flex-col gap-3">
        {socialLinks.map((social) => {
          const isOpen = hovered === social.id;
          return (
            <div key={social.id} className="relative flex h-11 items-center justify-end sm:h-12 sm:w-[11.5rem]">
              <a
                href={social.link}
                target={social.link.startsWith("mailto:") ? undefined : "_blank"}
                rel={social.link.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={
                  social.link.startsWith("mailto:")
                    ? `${social.name} — webbuildinfotech@gmail.com`
                    : `${social.name} — opens in a new tab`
                }
                onMouseEnter={() => setHovered(social.id)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(social.id)}
                onBlur={() => setHovered(null)}
                className={`group relative flex h-11 items-center overflow-hidden rounded-full text-white shadow-lg ring-1 ring-black/10 transition-[width,box-shadow] duration-300 ease-out hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-main focus-visible:ring-offset-2 focus-visible:ring-offset-transparent dark:ring-white/20 sm:h-12 ${
                  isOpen ? "w-full shadow-md" : "w-11 sm:w-12"
                } ${social.className}`}
                style={{ transitionProperty: "width, box-shadow" }}
              >
                <span
                  className={`pointer-events-none absolute left-3 hidden text-[13px] font-semibold tracking-wide text-white/95 drop-shadow-sm sm:block ${
                    isOpen ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0"
                  } transition-all duration-300 ease-out`}
                  style={{ whiteSpace: "nowrap" }}
                >
                  {social.name}
                </span>
                <span className="absolute right-0 flex h-11 w-11 items-center justify-center sm:h-12 sm:w-12">
                  <span className="flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-110 group-focus-visible:scale-110">
                    {social.icon}
                  </span>
                </span>
              </a>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default SocialButtons;
