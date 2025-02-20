import React from "react";
import { FaAward, FaCloud, FaCode, FaGlobe, FaHandshake, FaMobileAlt, FaMoneyBillWave, FaPlug, FaServer, FaSmile, FaTools } from "react-icons/fa";

export const projects = [
    {
      id: 1,
      title: "Studkz Pro",
      description: "An advanced educational platform for online learning and assessments.",
      image: "/web/std.png", // Replace with your image path
    },
    {
      id: 2,
      title: "RG Techno",
      description: "A technology consulting website with a strong focus on innovation.",
      image: "/web/rgg.png",
    },
    {
      id: 3,
      title: "5By5Winner",
      description: "A gamified application for tracking personal achievements and goals.",
      image: "/web/w5.png",
    },
    {
      id: 4,
      title: "Real Estate App",
      description: "A modern real estate platform for property listings and management.",
      image: "https://ripenapps.com/blog/wp-content/uploads/2024/07/How-A-Real-Estate-App-Can-Expand-Your-Real-Estate-Business-scaled.webp",
    },
    {
      id:5,
      title: "Creative Design Agency",
      description: "A portfolio site showcasing design projects and creative work.",
      image: "https://htmlburger.com/blog/wp-content/uploads/2023/05/10-design-agency-websites-setting-that-set-the-industry-standard.jpg",
    },
  
    {
      id: 6,
      title: "Cloud Migration Tool",
      description: "Migrated legacy systems to modern, scalable cloud platforms.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCV_3yRtAFOS0sLfWZQTPwOHNGSuccHejxFw&s",
    },
    {
      id: 7,
      title: "Task Manager Pro",
      description: "A productivity app for managing daily tasks efficiently.",
      image: "https://camo.envatousercontent.com/3f51612a6e8f59a9e9a30eb52a79963b6dcc16a1/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f726f62696e62642f696d6167652f75706c6f61642f76313730393633333533382f636f646563616e796f6e2f746d702f6b616e62616e5f626f6172642e706e67",
    },
    {
      id: 8,
      title: "Ecommerce Platform",
      description: "A seamless online shopping experience for users.",
      image: "https://www.tidio.com/wp-content/uploads/6-woocommerce.png"
    },
   
    {
      id: 9,
      title: "Finance Tracker App",
      description: "A mobile app for tracking expenses and managing budgets.",
      image: "https://assets.gqindia.com/photos/608c05836e6a489a62cd2549/master/w_1600%2Cc_limit/walnut-app.jpg",
    },
  ];

export const services = [
    {
      id: "01",
      title: "Frontend Development",
      description:
        "We specialize in crafting responsive, dynamic, and visually stunning web interfaces using cutting-edge frontend technologies.",
      icon: <FaCode />,
      colors: "text-purple-500 bg-purple-100",
      hoverFrom: "from-purple-500",
      hoverTo: "to-purple-700",
    },
    {
      id: "02",
      title: "Backend Development",
      description:
        "Our backend services ensure robust, scalable, and efficient server-side solutions tailored to your business needs.",
      icon: <FaServer />,
      colors: "text-teal-500 bg-teal-100",
      hoverFrom: "from-teal-500",
      hoverTo: "to-teal-700",
    },
    {
      id: "03",
      title: "JavaScript Technologies",
      description:
        "Expertise in modern JavaScript frameworks like React, Angular, and Vue for building fast and interactive applications.",
      icon: <FaTools />,
      colors: "text-blue-500 bg-blue-100",
      hoverFrom: "from-blue-500",
      hoverTo: "to-blue-700",
    },
    {
      id: "04",
      title: "API Development",
      description:
        "We design and implement secure, high-performance APIs to ensure seamless integration across platforms.",
      icon: <FaPlug />,
      colors: "text-green-500 bg-green-100",
      hoverFrom: "from-green-500",
      hoverTo: "to-green-700",
    },
    {
      id: "05",
      title: "Mobile App Development",
      description:
        "Building cross-platform mobile apps with React Native, Flutter, and more to extend your business to mobile platforms.",
      icon: <FaMobileAlt />,
      colors: "text-orange-500 bg-orange-100",
      hoverFrom: "from-orange-500",
      hoverTo: "to-orange-700",
    },
    {
      id: "06",
      title: "Cloud Solutions",
      description:
        "Providing scalable cloud services with AWS, Azure, and Google Cloud to power your web applications.",
      icon: <FaCloud />,
      colors: "text-blue-400 bg-blue-200",
      hoverFrom: "from-blue-400",
      hoverTo: "to-blue-600",
    },
  ];

  export const stats = [
    {
      icon: <FaAward className="rotate-icon text-blue-500" />,
      value: 7,
      label: "Years of Experience",
      bgColor: "bg-blue-100",
    },
    {
      icon: <FaMobileAlt className="rotate-icon text-green-500" />,
      value: 50,
      label: "Completed Projects",
      bgColor: "bg-green-100",
    },
    {
      icon: <FaSmile className="rotate-icon text-orange-500" />,
      value: 45,
      label: "Happy Clients",
      bgColor: "bg-orange-100",
    },
    {
      icon: <FaGlobe className="rotate-icon text-purple-500" />,
      value: 10,
      label: "Team Members",
      bgColor: "bg-purple-100",
    },
    {
      icon: <FaHandshake className="rotate-icon text-emerald-500" />,
      value: 95,
      label: "Client Retention Rate %",
      bgColor: "bg-emerald-100",
    },
  ];

export const techLogos = [
  { name: "React", src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", category: "Frontend" },
  { name: "Angular", src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg", category: "Frontend" },
  { name: "HTML", src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", category: "Frontend" },
  { name: "Vue.js", src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg", category: "Frontend" },

  { name: "Node.js", src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", category: "Backend" },
  { name: "GraphQL", src: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg", category: "Backend" },
  { name: "NestJS", src: "https://nestjs.com/img/logo-small.svg", category: "Backend" },
  { name: "Socket.io", src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg", category: "Backend" },

  { name: "MongoDB", src: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg", category: "Database" },
  { name: "MySQL", src: "https://www.vectorlogo.zone/logos/mysql/mysql-official.svg", category: "Database" },
  { name: "PostgreSQL", src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg", category: "Database" },
  { name: "Firebase", src: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg", category: "Database" },

];