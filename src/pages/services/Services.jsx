import React from "react";
import { useInView } from "react-intersection-observer";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "We specialize in crafting responsive, dynamic, and visually stunning web interfaces using cutting-edge frontend technologies.",
    image: "https://media.licdn.com/dms/image/v2/D5612AQFfhTEictqBHA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721174916441?e=2147483647&v=beta&t=IqnGNJxS4J-yaL4rgLBlx-cbNAbFwpEMCRvkkLXsR48", // Online image
    details: `
      Frontend development focuses on creating seamless user experiences and responsive designs. 
      Our expertise ensures your applications are visually stunning and optimized for performance across all devices.
    `,
    keyBenefits: [
      "Highly responsive and mobile-friendly designs.",
      "Seamless user experience with modern frameworks.",
      "SEO-optimized and high-performance websites.",
      "Cross-browser compatibility.",
    ],
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "Our backend services ensure robust, scalable, and efficient server-side solutions tailored to your business needs.",
    image: "https://media.excellentwebworld.com/wp-content/uploads/2024/05/23071450/Backend-Development.webp", // Online image
    details: `
      Backend development powers the core functionality of your applications. 
      We ensure scalability, security, and robust server-side operations for seamless data handling.
    `,
    keyBenefits: [
      "Scalable and secure server-side architecture.",
      "Fast APIs for real-time data management.",
      "Seamless database integration and management.",
      "Custom backend solutions tailored to your needs.",
    ],
  },
  {
    id: 3,
    title: "JavaScript Technologies",
    description:
      "Expertise in modern JavaScript frameworks like React, Angular, and Vue for building fast and interactive applications.",
    image: "https://www.tatvasoft.com/outsourcing/wp-content/uploads/2022/07/Best-JavaScript-Frameworks.jpg", // Online image
    details: `
      JavaScript powers modern web and mobile applications. 
      We use frameworks like React, Vue, and Angular to create feature-rich, scalable, and interactive platforms.
    `,
    keyBenefits: [
      "Fast and interactive user interfaces.",
      "Reusable component-based development.",
      "Cross-platform compatibility.",
      "Rich features with modern frameworks.",
    ],
  },
  {
    id: 4,
    title: "API Development",
    description:
      "We design and implement secure, high-performance APIs to ensure seamless integration across platforms.",
    image: "https://cdn.prod.website-files.com/6448bf6f064020ce1b2ca19d/6448bf6f0640204bbb2ca41c_shawayo%20odd%20pages%20(4).png", // Online image
    details: `
      APIs enable seamless communication between systems. 
      Our team creates secure, fast, and scalable APIs to power your applications and third-party integrations.
    `,
    keyBenefits: [
      "Secure and fast APIs.",
      "Comprehensive API documentation.",
      "Integration with third-party services.",
      "Scalable for future business needs.",
    ],
  },
  {
    id: 5,
    title: "Mobile App Development",
    description:
      "Building cross-platform mobile apps with React Native, Flutter, and more to extend your business to mobile platforms.",
    image: "https://api.reliasoftware.com/uploads/the_complete_guide_to_mobile_app_development_2021_ded2abd1b1.png", // Online image
    details: `
      Mobile app development brings your ideas to life on iOS and Android devices. 
      Our apps are optimized for performance, user experience, and scalability.
    `,
    keyBenefits: [
      "Cross-platform development with React Native and Flutter.",
      "User-friendly designs and smooth performance.",
      "Integration with cloud-based services and APIs.",
      "Scalable apps for future updates.",
    ],
  },
  {
    id: 6,
    title: "Cloud Solutions",
    description:
      "Providing scalable cloud services with AWS, Azure, and Google Cloud to power your web applications.",
    image: "https://letsintern.in/wp-content/uploads/2024/05/What-is-Cloud-Computing-and-How-Can-it-Benefit-Our-Company-1024x512-1.jpeg", // Online image
    details: `
      Cloud solutions provide flexibility, scalability, and cost-efficiency for your applications. 
      We specialize in deploying secure and scalable cloud infrastructure tailored to your needs.
    `,
    keyBenefits: [
      "Secure and scalable cloud infrastructure.",
      "Optimized for cost-efficiency.",
      "Integration with AWS, Azure, and Google Cloud.",
      "Support for serverless applications.",
    ],
  },
];

const ServicePage = () => {
  return (
    <section className="py-8 bg-gradient-to-b from-gray-300 to-gray-100">
      <div className="container mx-auto px-6 lg:px-6 p-2">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-blue-700">Our Services</h1>
          <p className="text-gray-600 mt-4">
            Discover the wide range of professional services we offer to power your business.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col lg:flex-row items-center gap-12 ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } transform transition-all duration-700 ease-in-out ${
        inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={service.image}
          alt={service.title}
          className="rounded-lg shadow-lg object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
    

      {/* Content Section */}
      <div className="lg:w-1/2">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h2>
        <p className="text-gray-600 leading-relaxed mb-6">{service.details}</p>

        {/* Key Benefits */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Key Benefits:
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {service.keyBenefits.map((benefit, i) => (
            <li key={i}>{benefit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServicePage;
