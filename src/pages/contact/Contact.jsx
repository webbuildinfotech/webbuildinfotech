import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { GiSpiderWeb } from "react-icons/gi";
import ContactBanner from "../../sections/Contact/ContactBanner";
import { PageMeta } from "../../components/pageMeta";

const ContactUs = () => {
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
            <div className="w-full lg:w-1/2 bg-white dark:bg-background-dark/90 p-8 rounded-2xl shadow-xl transform transition duration-500 hover:shadow-2xl dark:border dark:border-grey-700">
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
            <div className="w-full lg:w-1/2 bg-white dark:bg-background-dark/90 p-8 rounded-2xl shadow-xl transform transition duration-500 hover:shadow-2xl dark:border dark:border-grey-700">
              <h2 className="text-2xl lg:text-3xl font-bold text-grey-900 dark:text-grey-50 mb-4">
                Start Your Project <span className="text-primary-main">Today</span>
              </h2>
              <p className="font-mooli text-grey-600 mb-8 dark:text-grey-300">
                Share your project details with us, and we'll get back to you within 24 hours.
              </p>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="fullName" className="text-sm font-medium text-grey-700 mb-1 block dark:text-grey-300">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      className="w-full p-3 border border-grey-300 rounded-lg bg-white dark:bg-background-dark/80 dark:border-grey-700 focus:ring-2 focus:ring-primary-main focus:border-primary-main transition-all text-grey-900 dark:text-grey-50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="email" className="text-sm font-medium text-grey-700 mb-1 block dark:text-grey-300">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full p-3 border border-grey-300 rounded-lg bg-white dark:bg-background-dark/80 dark:border-grey-700 focus:ring-2 focus:ring-primary-main focus:border-primary-main transition-all text-grey-900 dark:text-grey-50"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="relative sm:col-span-2">
                    <label htmlFor="phone" className="text-sm font-medium text-grey-700 mb-1 block dark:text-grey-300">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      className="w-full p-3 border border-grey-300 rounded-lg bg-white dark:bg-background-dark/80 dark:border-grey-700 focus:ring-2 focus:ring-primary-main focus:border-primary-main transition-all text-grey-900 dark:text-grey-50"
                      placeholder="+91 XXXXX XXXXX"
                    />
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
                    className="w-full p-3 border border-grey-300 rounded-lg bg-white dark:bg-background-dark/80 dark:border-grey-700 focus:ring-2 focus:ring-primary-main focus:border-primary-main transition-all text-grey-900 dark:text-grey-50"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-main text-white py-4 rounded-lg font-semibold hover:bg-primary-dark transform transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary-main focus:ring-offset-2"
                >
                  Send Message
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
              allowFullScreen=""
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
