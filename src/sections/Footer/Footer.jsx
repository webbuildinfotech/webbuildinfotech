import React from 'react';
import {
  FaFacebook,
  FaWhatsapp,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { FaMobileButton } from 'react-icons/fa6';
import LogoHeader from '../LogoHeader/LogoHeader';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../../routes/constant/path';
import { useTheme } from '../../context/ThemeContext';

const FooterLink = ({ to, children, onClick }) => (
  <li>
    <Link
      to={to}
      onClick={onClick}
      className="text-sm text-slate-500 transition hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
    >
      {children}
    </Link>
  </li>
);

const Footer = () => {
  const { isDark } = useTheme();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const columns = [
    {
      title: 'Company',
      links: [
        { label: 'About', to: RoutePaths.COMPANY },
        { label: 'Contact', to: RoutePaths.CONTACT },
        { label: 'Blog', to: RoutePaths.BLOG },
        { label: 'Portfolio', to: RoutePaths.PROJECTS },
        { label: 'Case Studies', to: RoutePaths.CASE_STUDIES },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Web Development', to: RoutePaths.SERVICES },
        { label: 'Mobile Apps', to: RoutePaths.SERVICES },
        { label: 'AI Solutions', to: RoutePaths.TECHNOLOGY.AI.OPENAI },
        { label: 'Cloud & DevOps', to: RoutePaths.TECHNOLOGY.DEVOPS.AWS },
        { label: 'UI/UX Design', to: RoutePaths.SERVICES },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'FAQs', to: RoutePaths.HOME + '#faq' },
        { label: 'Pricing', to: RoutePaths.PRICING },
        { label: 'Technologies', to: RoutePaths.TECHNOLOGIES },
        { label: 'Industries', to: RoutePaths.INDUSTRIES },
      ],
    },
    {
      title: 'Technologies',
      links: [
        { label: 'React', to: RoutePaths.TECHNOLOGY.FRONTEND.REACT },
        { label: 'Next.js', to: RoutePaths.TECHNOLOGY.FRONTEND.NEXT },
        { label: 'Node.js', to: RoutePaths.TECHNOLOGY.BACKEND.NODE },
        { label: 'AWS', to: RoutePaths.TECHNOLOGY.DEVOPS.AWS },
        { label: 'OpenAI', to: RoutePaths.TECHNOLOGY.AI.OPENAI },
      ],
    },
  ];

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <LogoHeader isLight />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              We build powerful websites, web apps, and AI solutions that help businesses grow worldwide.
            </p>
            <div className="mt-5 space-y-2 text-sm text-slate-400">
              <p className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-indigo-400" />
                2nd Floor, Mox Mall, Mandvi, Gujarat 394160
              </p>
              <p className="flex items-center gap-2">
                <FaMobileButton className="shrink-0 text-indigo-400" />
                <a href="tel:+919265128409" className="hover:text-white">+91 92651 28409</a>
              </p>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <FooterLink key={link.label} to={link.to} onClick={scrollTop}>
                    {link.label}
                  </FooterLink>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} WebBuild InfoTech. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: 'https://linkedin.com/company/webbuildinfotech/', Icon: FaLinkedinIn },
              { href: 'https://github.com/', Icon: FaGithub },
              { href: 'https://facebook.com/webbuildinfotech/', Icon: FaFacebook },
              { href: 'https://instagram.com/', Icon: FaInstagram },
              { href: 'https://twitter.com/ChaudhariSimal', Icon: FaTwitter },
              { href: 'https://wa.me/919265128409', Icon: FaWhatsapp },
              { href: 'https://youtube.com/', Icon: FaYoutube },
            ].map(({ href, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 transition hover:scale-110 hover:text-white"
                aria-label="Social"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
