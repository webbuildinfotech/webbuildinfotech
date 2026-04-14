import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { GiSpiderWeb } from "react-icons/gi";
import ContactBanner from "../../sections/Contact/ContactBanner";
import { PageMeta } from "../../components/pageMeta";
import { cn } from "@/lib/utils";
import { glassCard } from "@/lib/glassCard";

function normalizeScriptEnvUrl(raw) {
  let s = typeof raw === "string" ? raw.trim() : "";
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    s = s.slice(1, -1).trim();
  }
  return s;
}

const SCRIPT_URL = normalizeScriptEnvUrl(import.meta.env.VITE_CONTACT_FORM_SCRIPT_URL ?? "");

/** Published Apps Script web app: https://script.google.com/macros/s/…/exec */
function isAppsScriptWebAppUrl(url) {
  try {
    const u = new URL(url);
    if (u.protocol !== "https:") return false;
    if (u.hostname !== "script.google.com") return false;
    return /\/macros\/s\/[^/]+\/exec\b/.test(u.pathname);
  } catch {
    return false;
  }
}

function looksLikeSheetsOrDriveUrl(url) {
  try {
    const u = new URL(url);
    if (u.hostname === "docs.google.com" && u.pathname.includes("/spreadsheets/")) return true;
    if (u.hostname === "drive.google.com") return true;
    return false;
  } catch {
    return false;
  }
}

const SCRIPT_URL_OK = SCRIPT_URL && isAppsScriptWebAppUrl(SCRIPT_URL);
const SCRIPT_URL_WRONG_KIND =
  SCRIPT_URL && !SCRIPT_URL_OK && looksLikeSheetsOrDriveUrl(SCRIPT_URL);
const SCRIPT_URL_INVALID = SCRIPT_URL && !SCRIPT_URL_OK && !SCRIPT_URL_WRONG_KIND;

const isDev = import.meta.env.DEV;

/** Short line for visitors; full steps live inside <details> in dev. */
function FormEndpointNotice() {
  if (SCRIPT_URL_OK) return null;

  const box =
    "rounded-lg border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-sm text-amber-950 dark:text-amber-50";

  if (!SCRIPT_URL) {
    return (
      <div className={box}>
        <p className="font-mooli leading-relaxed">
          {isDev
            ? "Set VITE_CONTACT_FORM_SCRIPT_URL to your Apps Script Web app URL (…/macros/s/…/exec), then restart the dev server."
            : "The online form is not available right now. Please reach us using phone, email, or WhatsApp in the panel on the left."}
        </p>
        {isDev && (
          <details className="mt-2 border-t border-amber-500/25 pt-2">
            <summary className="cursor-pointer select-none text-xs font-semibold tracking-wide text-amber-900/90 dark:text-amber-100/90">
              Developer setup
            </summary>
            <p className="font-mooli mt-2 text-xs leading-relaxed text-amber-900/95 dark:text-amber-100/90">
              In <code className="rounded bg-black/10 px-1 py-0.5">.env</code> add{" "}
              <code className="break-all rounded bg-black/10 px-1 py-0.5">
                VITE_CONTACT_FORM_SCRIPT_URL=https://script.google.com/macros/s/…/exec
              </code>
              . Do not use the spreadsheet <code className="rounded bg-black/10 px-1">/edit</code> link.
            </p>
          </details>
        )}
      </div>
    );
  }

  if (SCRIPT_URL_WRONG_KIND) {
    return (
      <div className={box}>
        <p className="font-mooli leading-relaxed">
          {isDev
            ? "Your env URL is a Google Sheet page, not an Apps Script endpoint. Sheet URLs return 405 for POST."
            : "The online form is not available right now. Please use the contact options on the left."}
        </p>
        {isDev && (
          <details className="mt-2 border-t border-amber-500/25 pt-2">
            <summary className="cursor-pointer select-none text-xs font-semibold tracking-wide text-amber-900/90 dark:text-amber-100/90">
              Fix: Apps Script Web app URL
            </summary>
            <ol className="font-mooli mt-2 list-decimal space-y-1.5 pl-4 text-xs leading-relaxed text-amber-900/95 dark:text-amber-100/90">
              <li>Open the spreadsheet → Extensions → Apps Script.</li>
              <li>
                In <code className="rounded bg-black/10 px-1">doPost</code>, parse{" "}
                <code className="rounded bg-black/10 px-1">JSON.parse(e.postData.contents)</code> for keys{" "}
                <code className="rounded bg-black/10 px-1">fullName</code>,{" "}
                <code className="rounded bg-black/10 px-1">email</code>,{" "}
                <code className="rounded bg-black/10 px-1">phone</code>,{" "}
                <code className="rounded bg-black/10 px-1">message</code>, or use the template in{" "}
                <code className="rounded bg-black/10 px-1">scripts/google-apps-script-contact-webapp.gs</code>. Append to{" "}
                <code className="rounded bg-black/10 px-1">Sheet1</code> or <code className="rounded bg-black/10 px-1">data</code>.
              </li>
              <li>Deploy → New deployment → Web app → Execute as: Me, Who has access: Anyone.</li>
              <li>
                Copy the URL ending in{" "}
                <code className="break-all rounded bg-black/10 px-1">/macros/s/…/exec</code> into{" "}
                <code className="rounded bg-black/10 px-1">VITE_CONTACT_FORM_SCRIPT_URL</code>.
              </li>
            </ol>
          </details>
        )}
      </div>
    );
  }

  if (SCRIPT_URL_INVALID) {
    return (
      <div className={box}>
        <p className="font-mooli leading-relaxed">
          {isDev
            ? "VITE_CONTACT_FORM_SCRIPT_URL must be https://script.google.com/macros/s/…/exec (Web app deployment)."
            : "The online form is not available right now. Please use the contact options on the left."}
        </p>
        {isDev && (
          <details className="mt-2 border-t border-amber-500/25 pt-2">
            <summary className="cursor-pointer select-none text-xs font-semibold tracking-wide text-amber-900/90 dark:text-amber-100/90">
              URL shape
            </summary>
            <p className="font-mooli mt-2 text-xs leading-relaxed text-amber-900/95 dark:text-amber-100/90">
              Host must be <code className="rounded bg-black/10 px-1">script.google.com</code>, path must match{" "}
              <code className="rounded bg-black/10 px-1">/macros/s/&lt;id&gt;/exec</code>.
            </p>
          </details>
        )}
      </div>
    );
  }

  return null;
}

const ContactUs = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState("idle");
  const [formError, setFormError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [touchedFields, setTouchedFields] = useState({
    fullName: false,
    email: false,
    phone: false,
    message: false,
  });
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const validateFullName = (value) => {
    const trimmed = value.trim();
    if (!trimmed) return "Full name is required.";
    if (trimmed.length < 3) return "Full name must be at least 3 characters.";
    return "";
  };

  const validateEmail = (value) => {
    const trimmed = value.trim();
    if (!trimmed) return "Email address is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return "Please enter a valid email address.";
    return "";
  };

  const validatePhone = (value) => {
    const trimmed = value.trim();
    if (!trimmed) return "Phone number is required.";
    if (!/^\d{10}$/.test(trimmed)) return "Phone number must be exactly 10 digits.";
    return "";
  };

  const validateMessage = (value) => {
    const trimmed = value.trim();
    if (!trimmed) return "Project details are required.";
    if (trimmed.length < 10) return "Project details must be at least 10 characters.";
    return "";
  };

  const validateFields = () => {
    const nextErrors = {
      fullName: validateFullName(fullName),
      email: validateEmail(email),
      phone: validatePhone(phone),
      message: validateMessage(message),
    };

    setFieldErrors(nextErrors);
    return !Object.values(nextErrors).some(Boolean);
  };

  const dismissSuccess = () => {
    if (formStatus === "success") setFormStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setSubmitAttempted(true);
    if (!validateFields()) return;

    if (!SCRIPT_URL) {
      setFormError(
        "Form endpoint is not configured. Add VITE_CONTACT_FORM_SCRIPT_URL to your environment (Google Apps Script web app URL)."
      );
      return;
    }

    if (!isAppsScriptWebAppUrl(SCRIPT_URL)) {
      setFormError(
        looksLikeSheetsOrDriveUrl(SCRIPT_URL)
          ? "That URL is your spreadsheet (or Drive) link. You must deploy Google Apps Script as a Web app and paste the script URL that ends with …/macros/s/…/exec — not the sheet edit URL."
          : "VITE_CONTACT_FORM_SCRIPT_URL must be a published Apps Script URL: https://script.google.com/macros/s/…/exec"
      );
      return;
    }

    setFormStatus("submitting");
    try {
      const now = new Date();
      const date = now.toLocaleDateString("en-CA");
      const time = now.toLocaleTimeString("en-GB", { hour12: false });

      const body = new URLSearchParams({
        FullName: fullName,
        Email: email,
        Phone: phone,
        Message: message,
        Date: date,
        Time: time,
        Status: "Sent",
      }).toString();

      // Post-only flow for Apps Script e.parameter based handler.
      // no-cors avoids browser CORS blocking; response is opaque by design.
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (import.meta.env.DEV) {
        console.log("[ContactForm] Submitted to Apps Script", { scriptUrl: SCRIPT_URL });
      }
      setFormStatus("success");
      setFullName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setFieldErrors({ fullName: "", email: "", phone: "", message: "" });
      setTouchedFields({ fullName: false, email: false, phone: false, message: false });
      setSubmitAttempted(false);
    } catch (err) {
      setFormStatus("idle");
      console.error("[ContactForm] Submit failure", err);
      setFormError(
        err instanceof Error
          ? `${err.message} (check Apps Script deployment and internet connection)`
          : "Something went wrong. Please try again or email us directly."
      );
    }
  };

  return (
    <>
      <PageMeta
        title="Contact WebBuild Infotech | Get in Touch With Our Team"
        description="Contact WebBuild Infotech for professional web development and IT solutions. Reach out to our team in Gujarat for consultations and inquiries."
        keywords="contact webbuild, IT company contact, web development gujarat, technology solutions contact"
      />

      <div className="bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark min-h-screen pt-24 pb-12 sm:pt-28 sm:pb-16">
        <ContactBanner />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-grey-900 dark:text-grey-50 mb-4">
              Get in Touch with Us
            </h1>
            <p className="font-mooli text-xl text-grey-600 max-w-2xl mx-auto dark:text-grey-300">
              Have a project in mind? We'd love to hear from you. Let's work together to create something amazing.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-stretch gap-8 mb-16">
            {/* Contact Details */}
            <div className={cn(glassCard, "w-full p-8 lg:w-1/2")}>
              <h1 className="text-xl lg:text-3xl font-bold text-grey-900 dark:text-grey-50 mb-6">
                How can we <span className="text-primary-main">help you?</span>
              </h1>
              <p className="font-mooli text-grey-600 mb-4 dark:text-grey-300">
                Fill up the form and our Team will get back to you within 24 hours.
              </p>

              <ul className="space-y-5">
                {/* Address */}
                <li className="flex items-start group">
                  <span className="text-primary-main text-xl lg:text-2xl mr-4 mt-1 group-hover:text-primary-dark group-hover:rotate-45 transition-transform duration-500">
                    <FaMapMarkerAlt />
                  </span>
                  <div>
                    <h6 className="text-lg lg:text-xl font-semibold text-grey-800 group-hover:text-primary-main transition-colors duration-500 dark:text-grey-100">
                      Address
                    </h6>
                    <p className="font-mooli text-grey-600 group-hover:text-grey-800 transition-colors duration-500 dark:text-grey-300 dark:group-hover:text-grey-100">
                      2nd Floor, Mox Mall, Mandvi, near Bus Station, Gujarat 394160
                    </p>
                  </div>
                </li>
              
                {/* Phone */}
                <li className="flex items-start group">
                  <span className="text-green-500 text-xl lg:text-2xl mr-4 mt-1 group-hover:text-green-600 group-hover:rotate-45 transition-transform duration-500">
                    <FaPhoneAlt />
                  </span>
                  <div>
                    <h6 className="text-lg lg:text-xl font-semibold text-grey-800 group-hover:text-green-600 transition-colors duration-500 dark:text-grey-100">
                      Phone
                    </h6>
                    <p className="font-mooli text-grey-600 group-hover:text-grey-800 transition-colors duration-500 dark:text-grey-300 dark:group-hover:text-grey-100">
                      +91 75672 19894
                    </p>
                  </div>
                </li>
              
                {/* Email */}
                <li className="flex items-start group">
                  <span className="text-purple-500 text-xl lg:text-2xl mr-4 mt-1 group-hover:text-purple-600 group-hover:rotate-45 transition-transform duration-500">
                    <FaEnvelope />
                  </span>
                  <div>
                    <h6 className="text-lg lg:text-xl font-semibold text-grey-800 group-hover:text-purple-600 transition-colors duration-500 dark:text-grey-100">
                      Email
                    </h6>
                    <p className="font-mooli text-grey-600 group-hover:text-grey-800 transition-colors duration-500 dark:text-grey-300 dark:group-hover:text-grey-100">
                      <a
                        href="mailto:simalchaudhari20496@gmail.com"
                        className="text-primary-main hover:underline"
                      >
                        info@webbuildinfotech.com
                      </a>
                    </p>
                  </div>
                </li>
              
                {/* WhatsApp */}
                <li className="flex items-start group">
                  <span className="text-green-500 text-xl lg:text-2xl mr-4 mt-1 group-hover:text-green-600 group-hover:rotate-45 transition-transform duration-500">
                    <FaWhatsapp />
                  </span>
                  <div>
                    <h6 className="text-lg lg:text-xl font-semibold text-grey-800 group-hover:text-green-600 transition-colors duration-500 dark:text-grey-100">
                      WhatsApp
                    </h6>
                    <p className="font-mooli text-grey-600 group-hover:text-grey-800 transition-colors duration-500 dark:text-grey-300 dark:group-hover:text-grey-100">
                      +91 9265128409
                    </p>
                  </div>
                </li>
              
                {/* Website */}
                <li className="flex items-start group">
                  <span className="text-blue-500 text-xl lg:text-2xl mr-4 mt-1 group-hover:text-blue-600 group-hover:rotate-45 transition-transform duration-500">
                    <GiSpiderWeb />
                  </span>
                  <div>
                    <h6 className="text-lg lg:text-xl font-semibold text-grey-800 group-hover:text-primary-main transition-colors duration-500 dark:text-grey-100">
                      Website
                    </h6>
                    <p className="font-mooli text-grey-600 group-hover:text-grey-800 transition-colors duration-500 dark:text-grey-300 dark:group-hover:text-grey-100">
                      www.webbuildinfotech.com
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className={cn(glassCard, "w-full p-8 lg:w-1/2")}>
              <h2 className="text-2xl lg:text-3xl font-bold text-grey-900 dark:text-grey-50 mb-4">
                Start Your Project <span className="text-primary-main">Today</span>
              </h2>
              <p className="font-mooli text-grey-600 mb-8 dark:text-grey-300">
                Share your project details with us, and we'll get back to you within 24 hours.
              </p>
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <FormEndpointNotice />
                {formError && (
                  <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-800 dark:text-red-100">
                    {formError}
                  </p>
                )}
                {formStatus === "success" && (
                  <p className="rounded-lg border border-green-500/40 bg-green-500/10 px-3 py-2 text-sm text-green-800 dark:text-green-100">
                    Thank you — your message was sent. We will get back to you soon.
                  </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="fullName" className="text-sm font-medium text-grey-700 mb-1 block dark:text-grey-300">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={fullName}
                      onChange={(ev) => {
                        const value = ev.target.value;
                        setFullName(value);
                        setFieldErrors((prev) => ({ ...prev, fullName: validateFullName(value) }));
                      }}
                      onBlur={() => {
                        setTouchedFields((prev) => ({ ...prev, fullName: true }));
                        setFieldErrors((prev) => ({ ...prev, fullName: validateFullName(fullName) }));
                      }}
                      onFocus={dismissSuccess}
                      disabled={formStatus === "submitting"}
                      className={cn(
                        "w-full p-3 border rounded-lg bg-white dark:bg-background-dark/80 focus:ring-2 transition-all text-grey-900 dark:text-grey-50 disabled:opacity-60",
                        (touchedFields.fullName || submitAttempted) && fieldErrors.fullName
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500/30 dark:border-red-500"
                          : "border-grey-300 focus:border-primary-main focus:ring-primary-main dark:border-grey-700"
                      )}
                      placeholder="John Doe"
                    />
                    {(touchedFields.fullName || submitAttempted) && fieldErrors.fullName && (
                      <p className="mt-1 text-xs text-red-500">{fieldErrors.fullName}</p>
                    )}
                  </div>
                  <div className="relative">
                    <label htmlFor="email" className="text-sm font-medium text-grey-700 mb-1 block dark:text-grey-300">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(ev) => {
                        const value = ev.target.value;
                        setEmail(value);
                        setFieldErrors((prev) => ({ ...prev, email: validateEmail(value) }));
                      }}
                      onBlur={() => {
                        setTouchedFields((prev) => ({ ...prev, email: true }));
                        setFieldErrors((prev) => ({ ...prev, email: validateEmail(email) }));
                      }}
                      onFocus={dismissSuccess}
                      disabled={formStatus === "submitting"}
                      className={cn(
                        "w-full p-3 border rounded-lg bg-white dark:bg-background-dark/80 focus:ring-2 transition-all text-grey-900 dark:text-grey-50 disabled:opacity-60",
                        (touchedFields.email || submitAttempted) && fieldErrors.email
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500/30 dark:border-red-500"
                          : "border-grey-300 focus:border-primary-main focus:ring-primary-main dark:border-grey-700"
                      )}
                      placeholder="john@example.com"
                    />
                    {(touchedFields.email || submitAttempted) && fieldErrors.email && (
                      <p className="mt-1 text-xs text-red-500">{fieldErrors.email}</p>
                    )}
                  </div>
                  <div className="relative sm:col-span-2">
                    <label htmlFor="phone" className="text-sm font-medium text-grey-700 mb-1 block dark:text-grey-300">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      required
                      value={phone}
                      onChange={(ev) => {
                        const value = ev.target.value.replace(/\D/g, "");
                        setPhone(value);
                        setFieldErrors((prev) => ({ ...prev, phone: validatePhone(value) }));
                      }}
                      onBlur={() => {
                        setTouchedFields((prev) => ({ ...prev, phone: true }));
                        setFieldErrors((prev) => ({ ...prev, phone: validatePhone(phone) }));
                      }}
                      onFocus={dismissSuccess}
                      disabled={formStatus === "submitting"}
                      className={cn(
                        "w-full p-3 border rounded-lg bg-white dark:bg-background-dark/80 focus:ring-2 transition-all text-grey-900 dark:text-grey-50 disabled:opacity-60",
                        (touchedFields.phone || submitAttempted) && fieldErrors.phone
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500/30 dark:border-red-500"
                          : "border-grey-300 focus:border-primary-main focus:ring-primary-main dark:border-grey-700"
                      )}
                      placeholder="+91 XXXXX XXXXX"
                    />
                    {(touchedFields.phone || submitAttempted) && fieldErrors.phone && (
                      <p className="mt-1 text-xs text-red-500">{fieldErrors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="message" className="text-sm font-medium text-grey-700 mb-1 block dark:text-grey-300">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    value={message}
                    onChange={(ev) => {
                      const value = ev.target.value;
                      setMessage(value);
                      setFieldErrors((prev) => ({ ...prev, message: validateMessage(value) }));
                    }}
                    onBlur={() => {
                      setTouchedFields((prev) => ({ ...prev, message: true }));
                      setFieldErrors((prev) => ({ ...prev, message: validateMessage(message) }));
                    }}
                    onFocus={dismissSuccess}
                    disabled={formStatus === "submitting"}
                    className={cn(
                      "w-full p-3 border rounded-lg bg-white dark:bg-background-dark/80 focus:ring-2 transition-all text-grey-900 dark:text-grey-50 disabled:opacity-60",
                      (touchedFields.message || submitAttempted) && fieldErrors.message
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/30 dark:border-red-500"
                        : "border-grey-300 focus:border-primary-main focus:ring-primary-main dark:border-grey-700"
                    )}
                    placeholder="Tell us about your project..."
                  ></textarea>
                  {(touchedFields.message || submitAttempted) && fieldErrors.message && (
                    <p className="mt-1 text-xs text-red-500">{fieldErrors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting" || !SCRIPT_URL_OK}
                  title={
                    !SCRIPT_URL_OK
                      ? "Waiting for a valid Apps Script Web app URL in VITE_CONTACT_FORM_SCRIPT_URL (must be …/script.google.com/macros/s/…/exec, not the Sheet /edit link)."
                      : undefined
                  }
                  className="w-full cursor-pointer bg-primary-main text-white py-4 rounded-lg font-semibold hover:bg-primary-dark transform transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary-main focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                  {formStatus === "submitting" ? "Sending…" : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.3552909894042!2d73.29943171130661!3d21.25739938036824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be07157bf6ae843%3A0xeb5269d189faf71!2sWebBuild%20Infotech!5e0!3m2!1sen!2sin!4v1737980094041!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              loading="lazy"
              className="rounded-xl shadow-lg"
              title="Map Location"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
