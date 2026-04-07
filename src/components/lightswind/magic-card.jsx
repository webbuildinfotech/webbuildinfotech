"use client";

import React, { useRef, useId } from "react";
import { useTheme } from "../../context/ThemeContext";

const cn = (...classes) => classes.filter(Boolean).join(" ");

export const MagicCard = ({
  imageUrl,
  title,
  icon,
  className,
  ...props
}) => {
  const { isDark } = useTheme();
  const cardRef = useRef(null);
  const id = useId();
  const filterId = `magic-card-blur-${id.replace(/:/g, "")}`;

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const relativeX = e.clientX - centerX;
    const relativeY = e.clientY - centerY;

    const x = (relativeX / (rect.width / 2)).toFixed(3);
    const y = (relativeY / (rect.height / 2)).toFixed(3);

    card.style.setProperty("--pointer-x", x);
    card.style.setProperty("--pointer-y", y);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--pointer-x", "-10");
    card.style.setProperty("--pointer-y", "-10");
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative aspect-[4/3] w-[300px] cursor-pointer rounded-xl outline-2 transition-all duration-300 active:scale-[0.99] active:translate-y-px [container-type:size]",
        isDark
          ? "bg-neutral-900 text-neutral-100 outline-neutral-800"
          : "bg-neutral-50 text-neutral-900 outline-neutral-200",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 grid place-items-center gap-2 overflow-hidden rounded-xl [clip-path:inset(0_round_12px)]">
        <div
          className="img-container absolute inset-0 grid place-items-center opacity-25 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            transform: "translateZ(0)",
            filter: `url(#${filterId}) saturate(5) brightness(1.3) contrast(1.4)`,
            translate:
              "calc(var(--pointer-x, -10) * 50cqi) calc(var(--pointer-y, -10) * 50cqh)",
            scale: "3.4",
            willChange: "transform, filter",
          }}
        >
          {imageUrl ? (
            <img src={imageUrl} alt="" className="w-[100px] select-none" />
          ) : (
            <div
              className={cn(
                "text-5xl select-none",
                isDark ? "text-neutral-200" : "text-neutral-700"
              )}
            >
              {icon}
            </div>
          )}
        </div>

        {imageUrl ? (
          <img src={imageUrl} alt="" className="relative z-[2] w-[100px] select-none" />
        ) : (
          <div
            className={cn(
              "relative z-[2] text-5xl select-none",
              isDark ? "text-neutral-200" : "text-neutral-700"
            )}
          >
            {icon}
          </div>
        )}

        <h2
          className={cn(
            "relative z-[4] m-0 text-base font-medium select-none",
            isDark ? "text-neutral-100" : "text-neutral-900"
          )}
        >
          {title}
        </h2>
      </div>

      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-[2] rounded-xl border-[3px] border-transparent [transform:translateZ(0)] [clip-path:inset(0_round_12px)]",
          isDark
            ? "backdrop-blur-sm backdrop-saturate-[4.2] backdrop-brightness-[2.5] backdrop-contrast-[2.5]"
            : "backdrop-blur-0 backdrop-saturate-100 backdrop-brightness-100 backdrop-contrast-100"
        )}
        style={{
          mask: "linear-gradient(#fff 0 100%) border-box, linear-gradient(#fff 0 100%) padding-box",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
        }}
      />

      <svg className="absolute h-0 w-0 overflow-visible opacity-0 pointer-events-none">
        <defs>
          <filter id={filterId} width="500%" height="500%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="28" />
          </filter>
        </defs>
      </svg>
    </article>
  );
};
