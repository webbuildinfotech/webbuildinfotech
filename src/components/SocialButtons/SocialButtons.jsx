import React, { useState } from "react";
import {FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

const SocialButtons = () => {
  const [hovered, setHovered] = useState(null);

  const socialLinks = [
    {
      id: 1,
      name: "Facebook",
      icon: <BsFacebook    />,
      color: "bg-blue-600",
      link: "https://www.facebook.com",
    },
    {
      id: 2,
      name: "Instagram",
      icon: <FaInstagram />,
      color: "bg-gradient-to-r from-pink-500 to-purple-600",
      link: "https://www.instagram.com",
    },
    {
      id: 3,
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      color: "bg-blue-700",
      link: "https://www.linkedin.com",
    },
    {
      id: 4,
      name: "YouTube",
      icon: <FaYoutube />,
      color: "bg-red-600",
      link: "https://www.youtube.com",
    },
    {
      id: 5,
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      color: "bg-green-500",
      link: "https://www.whatsapp.com",
    },
  ];

  return (
    <>
      {/* Inline Keyframes */}
      <style>
        {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>

      <div className="fixed top-1/3 right-0 flex flex-col space-y-4 z-50">
        {socialLinks.map((social) => (
          <div
            key={social.id}
            className="flex items-center justify-end w-44 h-12 relative"
          >
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(social.id)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative flex items-center h-12 rounded-full ${
                hovered === social.id ? "w-full" : "w-12"
              } ${social.color} transition-all duration-300 shadow-lg overflow-hidden`}
              style={{
                transitionProperty: "width",
              }}
            >
              {/* Name (Visible on Hover, Positioned to the Left) */}
              <span
                className={`absolute right-16 text-white text-sm font-medium ${
                  hovered === social.id ? "opacity-100" : "opacity-0"
                } transition-all duration-300`}
                style={{ whiteSpace: "nowrap" }}
              >
                {social.name}
              </span>

              {/* Icon */}
              <div
                className="flex items-center justify-center w-12 h-12 text-white"
                style={{
                  animation:
                    hovered === social.id ? "none" : "spin 2s linear infinite", // Stop rotation on hover
                }}
              >
                {social.icon}
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default SocialButtons;
