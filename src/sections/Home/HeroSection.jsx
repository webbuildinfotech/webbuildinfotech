import React from "react";
import heroImage from "/images/hero.png";
import heroImageRight from "/images/heroImage.svg";
import { WhatsappIcon, PhoneIcon } from "../../components/icons";

function HeroSection() {
  return (
    <section
      className="h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="h-full w-full bg-gradient-to-b from-black/70 via-black/60 to-black/40">
        <div className="container mx-auto flex h-full min-h-0 items-start justify-center px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:items-center lg:justify-center lg:px-8 lg:pb-0 lg:pt-0">
          <div className="grid w-full gap-10 lg:grid-cols-2 items-center">
            <div className="max-w-xl rounded-3xl bg-white/12 p-8 sm:p-10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.55)] border border-white/15 text-center lg:text-left space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-md">
                {/* <span className="h-1.5 w-1.5 rounded-full bg-success-main animate-pulse" /> */}
                Web Build Infotech
              </p>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                Building your digital future
              </h1>

              <p className="font-mooli text-sm sm:text-base lg:text-lg text-grey-100/90 leading-relaxed">
                We design and develop high‑quality web applications, modern frontends, and
                scalable backends that grow with your business.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-start">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-primary-main bg-transparent px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-main hover:text-white/80"
                >
                  View services
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
                >
                  Let&apos;s talk
                </a>
                <a
                  href="https://wa.me/919265128409"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-full transition-transform duration-150 hover:animate-[vibrate_0.4s_ease-in-out]"
                >
                  <WhatsappIcon className="w-11 h-11 text-white" />
                </a>
                <a
                  href="tel:+919265128409"
                  className="w-11 h-11 flex items-center justify-center rounded-full transition-transform duration-150 hover:animate-[vibrate_0.4s_ease-in-out]"
                >
                  <PhoneIcon className="w-10 h-10 text-white" />
                </a>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 border-t border-white/10 pt-4 lg:justify-start">
                <div className="text-left">
                  <p className="text-xs uppercase tracking-wide text-grey-300">Projects</p>
                  <p className="text-lg font-semibold text-white font-mooli">50+ delivered</p>
                </div>
                <div className="h-10 w-px bg-white/10" />
                <div className="text-left">
                  <p className="text-xs uppercase tracking-wide text-grey-300">Experience</p>
                  <p className="text-lg font-semibold text-white font-mooli">5+ years</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src={heroImageRight}
                alt="Web development illustration"
                className="w-full max-w-xl h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Local keyframes for hover vibration on icons */}
      <style>
        {`
          @keyframes vibrate {
            0% { transform: translateX(0) rotate(0deg); }
            20% { transform: translateX(-1px) rotate(-4deg); }
            40% { transform: translateX(1px) rotate(4deg); }
            60% { transform: translateX(-1px) rotate(-3deg); }
            80% { transform: translateX(1px) rotate(3deg); }
            100% { transform: translateX(0) rotate(0deg); }
          }
        `}
      </style>
    </section>
  );
}

export default HeroSection;