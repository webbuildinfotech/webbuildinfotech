import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { GiSpiderWeb } from "react-icons/gi";
import ContactBanner from "../../components/Contact/ContactBanner";
const ContactUs = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200">
      <ContactBanner />
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-start mb-10">

          <p className="text-gray-600 mt-3 text-xl lg:text-2xl font-bold">How can we assist you today?</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          {/* Contact Details */}
          <div className="w-full lg:w-1/2 bg-white p-8 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:rotate-1 flex flex-col justify-between min-h-[450px]">
            <h1 className="text-xl lg:text-3xl font-bold text-gray-800 mb-6">
              How can we <span className="text-blue-500">help you?</span>
            </h1>
            <p className="text-gray-600 mb-4">
              Fill up the form and our Team will get back to you within 24 hours.
            </p>

            <ul className="space-y-5">
            {/* Address */}
            <li className="flex items-start group">
              <span className="text-blue-500 text-xl lg:text-2xl mr-4 mt-1 group-hover:text-blue-600 group-hover:rotate-45 transition-transform duration-500">
                <FaMapMarkerAlt />
              </span>
              <div>
                <h6 className="text-lg lg:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-500">
                  Address
                </h6>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-500">
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
                <h6 className="text-lg lg:text-xl font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-500">
                  Phone
                </h6>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-500">
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
                <h6 className="text-lg lg:text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-500">
                  Email
                </h6>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-500">
                  <a
                    href="mailto:info@webbuildinfotech.com"
                    className="text-blue-600 hover:underline"
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
                <h6 className="text-lg lg:text-xl font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-500">
                  WhatsApp
                </h6>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-500">
                  +91 75672 19894
                </p>
              </div>
            </li>
          
            {/* Website */}
            <li className="flex items-start group">
              <span className="text-blue-500 text-xl lg:text-2xl mr-4 mt-1 group-hover:text-blue-600 group-hover:rotate-45 transition-transform duration-500">
                <GiSpiderWeb />
              </span>
              <div>
                <h6 className="text-lg lg:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-500">
                  Website
                </h6>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-500">
                  www.webbuildinfotech.com
                </p>
              </div>
            </li>
          </ul>
          
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2 bg-white p-8 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:rotate-1 flex flex-col justify-between min-h-[450px]">
            <h2 className="text-xl lg:text-3xl font-bold text-gray-800 mb-4">
              Send us a <span className="text-blue-500">Message</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Your email address will not be published. Required fields are marked *
            </p>
            <form className="space-y-6 flex-grow">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="col-span-3 sm:col-span-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="col-span-3 sm:col-span-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Mobile No"
                  className="col-span-3 sm:grid-cols-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <textarea
                placeholder="Project Brief"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transform transition-all hover:scale-105"
              >
                Submit Post
              </button>
            </form>
          </div>
        </div>


      </div>
      {/* Map Section */}

      <div className="mt-12">
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
  );
};

export default ContactUs;
