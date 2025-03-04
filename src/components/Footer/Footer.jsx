import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import LogoHeader from '../LogoHeader/LogoHeader';
import { Link, useNavigate } from 'react-router-dom';
import { RoutePaths } from '../../routes/constant/path';
import { FaMapMarkerAlt, FaPhone, FaGlobe } from 'react-icons/fa';
import { FaFacebook, FaMobileButton } from 'react-icons/fa6';

const FooterSection = ({ children, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Changed to true to make animation happen only once
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-in-out ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {children}
    </div>
  );
};

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigate = () => {
    navigate(RoutePaths.CONTACT);
    handleClick();
  };

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info Section */}
          <FooterSection index={0}>
            <div className="flex flex-col space-y-6">
              <LogoHeader />
              <p className="text-gray-600 leading-relaxed">
                Transforming ideas into powerful digital solutions. Your trusted partner in web and mobile development.
              </p>
              <button 
                onClick={handleNavigate} 
                className="inline-flex items-center justify-center w-fit bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                Let's Talk
              </button>
            </div>
          </FooterSection>

          {/* Services Section */}
          <FooterSection index={1} >
            <div className="space-y-6 ml:0 lg:ml-15">
              <h3 className="text-lg font-semibold text-gray-900 border-b-2 border-blue-600 pb-2 w-fit">
                Our Services
              </h3>
              <nav>
                <Link to={RoutePaths.SERVICES} onClick={handleClick}>
                  <ul className="space-y-4 text-gray-600">
                    <li className="hover:text-blue-600 transition-colors duration-200">Frontend Development</li>
                    <li className="hover:text-blue-600 transition-colors duration-200">Backend Development</li>
                    <li className="hover:text-blue-600 transition-colors duration-200">Mobile App Development</li>
                    <li className="hover:text-blue-600 transition-colors duration-200">API Integration</li>
                    <li className="hover:text-blue-600 transition-colors duration-200">Cloud Solutions</li>
                  </ul>
                </Link>
              </nav>
            </div>
          </FooterSection>

          {/* Technologies Section */}
          <FooterSection index={2}>
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 border-b-2 border-blue-600 pb-2 w-fit">
                Technologies
              </h3>
              <div className="grid grid-cols-2 gap-4 text-gray-600">
                <Link to={RoutePaths.TECHNOLOGY.FRONTEND.REACT} onClick={handleClick} className="hover:text-blue-600 transition-colors duration-200">React.js</Link>
                <Link to={RoutePaths.TECHNOLOGY.FRONTEND.ANGULAR} onClick={handleClick} className="hover:text-blue-600 transition-colors duration-200">Angular</Link>
                <Link to={RoutePaths.TECHNOLOGY.BACKEND.NODE} onClick={handleClick} className="hover:text-blue-600 transition-colors duration-200">Node.js</Link>
                <Link to={RoutePaths.TECHNOLOGY.BACKEND.NEST} onClick={handleClick} className="hover:text-blue-600 transition-colors duration-200">Nest.js</Link>
                <Link to={RoutePaths.TECHNOLOGY.DATABASE.MONGO} onClick={handleClick} className="hover:text-blue-600 transition-colors duration-200">MongoDB</Link>
                <Link to={RoutePaths.TECHNOLOGY.DATABASE.POSTGRES} onClick={handleClick} className="hover:text-blue-600 transition-colors duration-200">PostgreSQL</Link>
              </div>
            </div>
          </FooterSection>

          {/* Contact Section */}
          <FooterSection index={3}>
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 border-b-2 border-blue-600 pb-2 w-fit">
                Get in Touch
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="mt-1 text-[#FF4B4B] hover:scale-110 transition-all duration-200" />
                  <span>2nd Floor, Mox Mall, Mandvi, near Bus Station, Gujarat 394160</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaMobileButton className="text-[#4CAF50] hover:scale-110 transition-all duration-200" />
                  <span>+91 9265128409</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaGlobe className="text-[#2196F3] hover:scale-110 transition-all duration-200" />
                  <a href="https://webbuildinfotech.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors duration-200">
                    <span className="font-semibold typing-text">webbuildinfotech.com</span>
                  </a>
                </li>
              </ul>
              <div className="flex space-x-10 pt-2">
                <a href="https://facebook.com/webbuildinfotech/" target="_blank" rel="noopener noreferrer" className="text-[#1877F2] hover:scale-110 transition-all duration-200">
                  <FaFacebook size={26} />
                </a>
             
                <a href="https://wa.me/919265128409" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:scale-110 transition-all duration-200">
                  <FaWhatsapp size={26} />
                </a>
                <a href="https://linkedin.com/company/webbuildinfotech/" target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] hover:scale-110 transition-all duration-200">
                  <FaLinkedinIn size={26} />
                </a>

                <a href="https://twitter.com/ChaudhariSimal" target="_blank" rel="noopener noreferrer" className="text-[#1DA1F2] twitter-fly">
                  <FaTwitter size={26} />
                </a>
                
              </div>
            </div>
          </FooterSection>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <FooterSection index={4}>
            <p className="text-center text-gray-600 text-sm">
              © {new Date().getFullYear()} Web Build InfoTech. All rights reserved.
            </p>
          </FooterSection>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
