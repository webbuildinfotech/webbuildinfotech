import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import LogoHeader from '../LogoHeader/LogoHeader';
import { Link, useNavigate } from 'react-router-dom';
import { RoutePaths } from '../../routes/constant/path';

const FooterSection = ({ children, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation every time it enters the viewport
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-in-out ${inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
        }`}
      style={{ transitionDelay: `${index * 200}ms` }} // Stagger effect
    >
      {children}
    </div>
  );
};

const Footer = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigate = () =>{
    navigate(RoutePaths.CONTACT)
    handleClick()
  }

  return (
    <React.Fragment>
      <div className="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-12">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 px-6">
          {/* Company Logo and About */}
          <FooterSection index={0}>
            <div className="flex flex-col items-start">
              <LogoHeader />
              <p className="mt-4 text-gray-700 text-lg font-medium">
                Want to talk about your project?
              </p>
              <button onClick={handleNavigate} className="bg-blue-600 cursor-pointer text-white px-5 py-3 mt-6 rounded-full font-semibold shadow hover:bg-blue-700 hover:shadow-lg transition">
                Schedule A Call
              </button>
            </div>
          </FooterSection>

          {/* Services Section */}
          <FooterSection index={1}>
            <div>
              <h2 className="text-xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2 inline-block">
                Services
              </h2>
              <Link to={RoutePaths.SERVICES} className="block" onClick={handleClick}>
              <ul className="mt-4 space-y-3 text-gray-700 text-lg cursor-pointer">
                <li>Frontend Development</li>
                <li>Backend Development</li>
                <li>JavaScript Technologies</li>
                <li>API Development</li>
                <li>Mobile App Development</li>
                <li>Cloud Solutions</li>
              </ul>
            </Link>
            </div>
          </FooterSection>

          {/* Technologies Section */}
          <FooterSection index={2}>
            <div>
              <h2 className="text-xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2 inline-block">
                Technologies
              </h2>
              <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700 text-lg" onClick={handleClick}>
                {/* Frontend Technologies */}
                <li><Link to={RoutePaths.TECHNOLOGY.FRONTEND.REACT} className="hover:text-blue-600">ReactJS</Link></li>
                <li><Link to={RoutePaths.TECHNOLOGY.FRONTEND.ANGULAR} className="hover:text-blue-600">AngularJS</Link></li>
                <li><Link to={RoutePaths.TECHNOLOGY.FRONTEND.VUE} className="hover:text-blue-600">VueJS</Link></li>
                <li><Link to={RoutePaths.TECHNOLOGY.FRONTEND.HTML5} className="hover:text-blue-600">HTML5</Link></li>

                {/* Backend Technologies */}
                <li><Link to={RoutePaths.TECHNOLOGY.BACKEND.NODE} className="hover:text-blue-600">NodeJS</Link></li>
                <li><Link to={RoutePaths.TECHNOLOGY.BACKEND.GRAPHQL} className="hover:text-blue-600">GraphQL</Link></li>
                <li><Link to={RoutePaths.TECHNOLOGY.BACKEND.EXPRESS} className="hover:text-blue-600">ExpressJS</Link></li>
                <li><Link to={RoutePaths.TECHNOLOGY.BACKEND.NEST} className="hover:text-blue-600">NestJS</Link></li>

            
                {/* Database Technologies */}
                <li><Link to={RoutePaths.TECHNOLOGY.DATABASE.MONGO} className="hover:text-blue-600">MongoDB</Link></li>
                <li><Link to={RoutePaths.TECHNOLOGY.DATABASE.MYSQL} className="hover:text-blue-600">MySQL</Link></li>
                <li><Link to={RoutePaths.TECHNOLOGY.DATABASE.POSTGRES} className="hover:text-blue-600">PostgreSQL</Link></li>
                <li><Link to={RoutePaths.TECHNOLOGY.DATABASE.FIREBASE} className="hover:text-blue-600">Firebase</Link></li>
              </ul>
            </div>
          </FooterSection>

          {/* Contact Section */}
          <FooterSection index={3}>
            <div>
              <h2 className="text-xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2 inline-block">
                Connect with us
              </h2>
              <ul className="mt-4 space-y-3 text-gray-700 text-lg">
                <li>
                  2nd Floor, Mox Mall, Mandvi, near Bus Station, Gujarat 394160
                </li>
                <li>
                  <span className="font-bold">Phone:</span> +91 75672 19894
                </li>
                <li>
                  <span className="font-bold">Website:</span>{' '}
                  <a
                    href="https://webbuildinfotech.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    webbuildinfotech.com
                  </a>
                </li>
              </ul>
              <div className="mt-6 flex space-x-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 text-2xl"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 text-2xl"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 text-2xl"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 text-2xl"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </FooterSection>
        </div>
      </div>
      <FooterSection index={4}>
        <div className="footer-container">
          <p className="footer-text font-bold">
            © 2025 WebBuildInfoTech
              All rights reserved.
          </p>
        </div>
      </FooterSection>
    </React.Fragment>
  );
};

export default Footer;
