import React from "react";
import heroImageRight from "/images/heroImage.svg";
import { GridScan } from "../../components/reactBits/GridScan";
import {
  EnquiriesIcon,
  MicrosoftTeamsIcon,
  PhoneIcon,
  WhatsappIcon,
} from "../../components/icons";

const HERO_CONTACT_EMAIL = "simalchaudhari20496@gmail.com";
const HERO_EMAIL_HREF = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  HERO_CONTACT_EMAIL
)}`;
const HERO_TEAMS_HREF =
  "https://teams.microsoft.com/l/team/19%3A_k3b5xB_3nI0tC8GnC7N3h_kLqYQkN92J05195GZw3Zw1%40thread.tacv2/conversations?groupId=787b23a2-435e-47b6-a024-c7d01b78072d&tenantId=72f988bf-86f1-41af-91ab-2d7cd011db47";

const SecondHeroSection = ({ onToggleSection }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <button
        type="button"
        onClick={onToggleSection}
        className="absolute bottom-6 right-6 z-40 rounded-full border border-white/40 bg-black/50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-md transition hover:bg-white/20"
      >
        Show Image Hero
      </button>
      <div className="pointer-events-none absolute inset-0">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#392e4e"
          gridScale={0.1}
          scanColor="#FF9FFC"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>

      <div className="relative z-10 h-full w-full bg-gradient-to-b from-black/70 via-black/60 to-black/40">
        <div className="container mx-auto flex h-full min-h-0 items-start justify-center px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:items-center lg:justify-center lg:px-8 lg:pb-0 lg:pt-0">
          <div className="grid w-full gap-10 items-center lg:grid-cols-2">
            <div className="max-w-xl space-y-6 rounded-3xl border border-white/15 bg-white/12 p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-10 lg:text-left">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-md">
                Web Build Infotech
              </p>

              <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Building your digital future
              </h1>

              <p className="font-mooli text-sm leading-relaxed text-grey-100/90 sm:text-base lg:text-lg">
                We design and develop high-quality web applications, modern frontends, and
                scalable backends that grow with your business.
              </p>

              <div className="flex flex-col justify-start gap-4">
                <div className="flex flex-col items-center gap-3 sm:flex-row">
                  <a
                    href="#services"
                    className="inline-flex w-full items-center justify-center rounded-full border border-primary-main bg-transparent px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-main hover:text-white/80 sm:w-auto"
                  >
                    View services
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex w-full items-center justify-center rounded-full border border-white/40 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15 sm:w-auto"
                  >
                    Let&apos;s talk
                  </a>
                </div>

                <div className="flex items-center gap-1 md:gap-3">
                  <a
                    href="https://wa.me/919265128409"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-150 hover:animate-[vibrate_0.4s_ease-in-out]"
                  >
                    <WhatsappIcon className="h-11 w-11 text-white" />
                  </a>
                  <a
                    href="tel:+919265128409"
                    className="flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-150 hover:animate-[vibrate_0.4s_ease-in-out]"
                  >
                    <PhoneIcon className="h-10 w-10 text-white" />
                  </a>
                  <a
                    href={HERO_EMAIL_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Email ${HERO_CONTACT_EMAIL}`}
                    className="flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-150 hover:animate-[vibrate_0.4s_ease-in-out]"
                  >
                    <EnquiriesIcon className="h-10 w-10 text-white" />
                  </a>
                  <a
                    href={HERO_TEAMS_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open in Microsoft Teams"
                    className="flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-150 hover:animate-[vibrate_0.4s_ease-in-out]"
                  >
                    <MicrosoftTeamsIcon className="h-10 w-10 text-white" />
                  </a>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 border-t border-white/10 pt-4 lg:justify-start">
                <div className="text-left">
                  <p className="text-xs uppercase tracking-wide text-grey-300">Projects</p>
                  <p className="font-mooli text-lg font-semibold text-white">50+ delivered</p>
                </div>
                <div className="h-10 w-px bg-white/10" />
                <div className="text-left">
                  <p className="text-xs uppercase tracking-wide text-grey-300">Experience</p>
                  <p className="font-mooli text-lg font-semibold text-white">5+ years</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src={heroImageRight}
                alt="Web development illustration"
                className="h-auto w-full max-w-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondHeroSection