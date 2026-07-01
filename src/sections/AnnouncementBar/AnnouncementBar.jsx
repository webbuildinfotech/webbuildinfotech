import React from "react";
import { Link } from "react-router-dom";
import { Rocket } from "lucide-react";
import { announcement } from "@/data/homePageData";

const AnnouncementBar = () => (
  <div className="relative z-[60] bg-gradient-to-r from-blue-700 via-blue-600 to-teal-600 text-white">
    <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-center text-xs sm:text-sm">
      <span className="inline-flex items-center gap-1.5 font-medium">
        <Rocket className="h-3.5 w-3.5 shrink-0" aria-hidden />
        {announcement.text}
      </span>
      <span className="hidden text-blue-200 sm:inline" aria-hidden>
        |
      </span>
      {announcement.links.map((link, i) => (
        <React.Fragment key={link.label}>
          {i > 0 && (
            <span className="hidden text-blue-200 sm:inline" aria-hidden>
              |
            </span>
          )}
          {link.href.startsWith("tel:") ? (
            <a href={link.href} className="font-semibold underline-offset-2 transition hover:underline">
              {link.label}
            </a>
          ) : (
            <Link to={link.href} className="font-semibold underline-offset-2 transition hover:underline">
              {link.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default AnnouncementBar;
