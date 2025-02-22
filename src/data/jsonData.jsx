import React from "react";
import { FaAward, FaCloud,  FaShieldAlt,
  FaDatabase,
  FaNetworkWired,
  FaSearch,
  FaChartLine,
  FaLock,FaCode, FaGlobe, FaHandshake, FaMobileAlt, FaMoneyBillWave, FaPlug, FaServer, FaSmile, FaTools } from "react-icons/fa";

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
      title: "EmployHer",
      description: "Empowering women in the workforce with job opportunities, mentorship programs, and resources to excel in their careers.",
      image: "/web/empher.png",
    },
    {
      id: 4,
      title: "Eminence IT",
      description: "Providing innovative IT solutions, software development, and technical expertise for businesses of all sizes.",
      image: "/web/empower.png",
    },
    {
      id:5,
      title: "HIPAA Mart",
      description: "A marketplace for HIPAA-compliant healthcare products and services, ensuring quality and security.",
      image: "/web/hipp.png",
    },
  
    {
      id: 6,
      title: "Render Health",
      description: "A healthcare platform enabling seamless communication between patients and providers with advanced features.",
      image: "/web/render.png",
    },
    {
      id: 7,
      title: "Webbuild Infotech",
      description: "Transform your digital presence with our expert web development services. We specialize in AI integration, cloud solutions, and custom software development to drive your business forward.",
      image: "/web/webbuild.png",
    },
    {
      id: 8,
      title: "GREENPAD ACADEMY",
      description: "Greenpad Academy offers accredited courses in sustainability leadership and management, empowering individuals and businesses with essential sustainability insights. Their programs are designed to foster environmental responsibility and sustainable business practices.",
      image: "/web/greenpadacadamy.png",
    },
   
    {
      id: 9,
      title: "5by5 Winner",
      description: "5by5 Winner is a hybrid bingo game where you can win prizes easily. Buy tickets and participate in the draw. Winners are guaranteed in every round. The more you play, the more you win!",
      image: "/web/5By5.png",
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
    {
      id: "07",
      title: "Cybersecurity & Data Protection",
      description:
        "Enhancing security through encryption, firewalls, and advanced threat detection to safeguard sensitive data.",
      icon: <FaShieldAlt />,
      colors: "text-red-500 bg-red-100",
      hoverFrom: "from-red-500",
      hoverTo: "to-red-700",
    },
    {
      id: "08",
      title: "Database Management",
      description:
        "Expertise in designing, managing, and optimizing SQL and NoSQL databases for scalability and efficiency.",
      icon: <FaDatabase />,
      colors: "text-yellow-500 bg-yellow-100",
      hoverFrom: "from-yellow-500",
      hoverTo: "to-yellow-700",
    },
    {
      id: "09",
      title: "DevOps & Infrastructure",
      description:
        "Implementing CI/CD pipelines, containerization with Docker & Kubernetes, and automated cloud deployments.",
      icon: <FaNetworkWired />,
      colors: "text-indigo-500 bg-indigo-100",
      hoverFrom: "from-indigo-500",
      hoverTo: "to-indigo-700",
    },
    {
      id: "10",
      title: "SEO & Digital Marketing",
      description:
        "Boosting online presence through SEO optimization, content marketing, and performance analytics.",
      icon: <FaSearch />,
      colors: "text-pink-500 bg-pink-100",
      hoverFrom: "from-pink-500",
      hoverTo: "to-pink-700",
    },
    {
      id: "11",
      title: "Business Intelligence & Analytics",
      description:
        "Helping businesses make data-driven decisions through AI, data visualization, and predictive analytics.",
      icon: <FaChartLine />,
      colors: "text-gray-600 bg-gray-200",
      hoverFrom: "from-gray-600",
      hoverTo: "to-gray-800",
    },
    {
      id: "12",
      title: "IT Security & Compliance",
      description:
        "Ensuring regulatory compliance and protecting IT assets through penetration testing and security audits.",
      icon: <FaLock />,
      colors: "text-emerald-500 bg-emerald-100",
      hoverFrom: "from-emerald-500",
      hoverTo: "to-emerald-700",
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
    // Frontend Technologies (12)
    { name: "React", src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", category: "Frontend" },
    { name: "Angular", src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg", category: "Frontend" },
    { name: "Vue.js", src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg", category: "Frontend" },
    { name: "HTML5", src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", category: "Frontend" },
    { name: "CSS3", src: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg", category: "Frontend" },
    { name: "Svelte", src: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg", category: "Frontend" },
    { name: "Next.js", src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg", category: "Frontend" },
    { name: "Nuxt.js", src: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Nuxt_logo.svg", category: "Frontend" },
    { name: "Tailwind CSS", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", category: "Frontend" },
    { name: "Bootstrap", src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg", category: "Frontend" },
    { name: "Material UI", src: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg", category: "Frontend" },
    { name: "Chakra UI", src: "https://logowik.com/content/uploads/images/chakra-ui2348.logowik.com.webp", category: "Frontend" },
  
    // Backend Technologies (15)
    { name: "Node.js", src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", category: "Backend" },
    { name: "Express.js", src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png", category: "Backend" },
    { name: "GraphQL", src: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg", category: "Backend" },
    { name: "NestJS", src: "https://nestjs.com/img/logo-small.svg", category: "Backend" },
    { name: "Socket.io", src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg", category: "Backend" },
    { name: "PHP", src: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg", category: "Backend" },
    { name: "Laravel", src: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg", category: "Backend" },
    { name: "CodeIgniter", src: "https://cdn.worldvectorlogo.com/logos/codeigniter.svg", category: "Backend" },
    { name: "REST API", src: "https://media.licdn.com/dms/image/v2/D4D12AQEeNNHq05k7MA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1687786979245?e=2147483647&v=beta&t=gatszJ18T6cgUmXRbQWWQhxNGjpH7RLqvLLGnDYJbYE", category: "Backend" },
    
    // Database Technologies (12)
    { name: "MongoDB", src: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg", category: "Database" },
    { name: "MySQL", src: "https://www.vectorlogo.zone/logos/mysql/mysql-official.svg", category: "Database" },
    { name: "PostgreSQL", src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg", category: "Database" },
    { name: "Firebase", src: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg", category: "Database" },
    { name: "Redis", src: "https://cdn.worldvectorlogo.com/logos/redis.svg", category: "Database" },
    { name: "Cassandra", src: "https://www.vectorlogo.zone/logos/apache_cassandra/apache_cassandra-icon.svg", category: "Database" },
    { name: "DynamoDB", src: "https://cdn.worldvectorlogo.com/logos/aws-dynamodb.svg", category: "Database" },
    { name: "MariaDB", src: "https://cdn.worldvectorlogo.com/logos/mariadb.svg", category: "Database" },
    { name: "CockroachDB", src: "https://cdn.worldvectorlogo.com/logos/cockroachdb.svg", category: "Database" },
    { name: "OracleDB", src: "https://cdn.worldvectorlogo.com/logos/oracle-6.svg", category: "Database" },
    { name: "Elasticsearch", src: "https://cdn.worldvectorlogo.com/logos/elasticsearch.svg", category: "Database" },
    // { name: "Neo4j", src: "https://cdn.worldvectorlogo.com/logos/neo4j.svg", category: "Database" },

    // DevOps & Tools (12)
  { name: "Git", src: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg", category: "DevOps & Tools" },
  { name: "GitHub", src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", category: "DevOps & Tools" },
  { name: "Bitbucket", src: "https://cdn.worldvectorlogo.com/logos/bitbucket-icon.svg", category: "DevOps & Tools" },
  { name: "Docker", src: "https://cdn.worldvectorlogo.com/logos/docker.svg", category: "DevOps & Tools" },
  { name: "CI/CD", src: "https://www.testaify.com/hubfs/CI-CD_Pipeline_2-01.webp", category: "DevOps & Tools" },
  { name: "AWS", src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", category: "DevOps & Tools" },
  { name: "S3 Bucket", src: "https://hermes.dio.me/assets/articles/7ec1587b-95f4-45fb-bd7e-ce073d03b8fe.png", category: "DevOps & Tools" },
  { name: "cPanel", src: "https://cdn.worldvectorlogo.com/logos/cpanel.svg", category: "DevOps & Tools" },
  { name: "SSH", src: "https://cdn.worldvectorlogo.com/logos/ssh.svg", category: "DevOps & Tools" },
  { name: "Jira", src: "https://cdn.worldvectorlogo.com/logos/jira-1.svg", category: "DevOps & Tools" },
  { name: "Trello", src: "https://cdn.worldvectorlogo.com/logos/trello.svg", category: "DevOps & Tools" },
  { name: "Agile", src: "https://www.aerospacewalesforum.com/wp-content/uploads/Agile-Logo-2.png", category: "DevOps & Tools" },
  ];
  