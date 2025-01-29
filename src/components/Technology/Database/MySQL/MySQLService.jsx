import React from "react";
import { FaDatabase, FaCogs, FaSyncAlt, FaServer, FaRocket, FaShieldAlt, FaTools, FaCloud, FaExchangeAlt } from "react-icons/fa";

const services = [
  {
    title: "Database Design & Architecture",
    description:
      "We create optimized MySQL database schemas to ensure efficient data storage, retrieval, and performance.",
    icon: <FaDatabase className="text-blue-500 text-4xl" />,
  },
  {
    title: "Database Optimization",
    description:
      "We fine-tune MySQL databases by optimizing queries, indexing, and storage strategies to improve speed.",
    icon: <FaCogs className="text-yellow-500 text-4xl" />,
  },
  {
    title: "Replication & High Availability",
    description:
      "We set up MySQL replication and clustering to ensure high availability and disaster recovery.",
    icon: <FaSyncAlt className="text-green-500 text-4xl" />,
  },
  {
    title: "Database Migration",
    description:
      "We seamlessly migrate data from other databases to MySQL, ensuring no data loss or downtime.",
    icon: <FaExchangeAlt className="text-red-500 text-4xl" />,
  },
  {
    title: "Cloud Database Solutions",
    description:
      "We deploy and manage MySQL databases on cloud platforms like AWS RDS, Google Cloud, and Azure.",
    icon: <FaCloud className="text-teal-500 text-4xl" />,
  },
  {
    title: "Performance Optimization",
    description:
      "We enhance database performance through caching, indexing, and query optimization.",
    icon: <FaRocket className="text-purple-500 text-4xl" />,
  },
  {
    title: "Database Security & Backup",
    description:
      "We implement role-based access control, encryption, and automated backup strategies to secure MySQL databases.",
    icon: <FaShieldAlt className="text-gray-600 text-4xl" />,
  },
  {
    title: "MySQL Support & Maintenance",
    description:
      "We provide ongoing support and maintenance for MySQL databases to ensure optimal performance and reliability.",
    icon: <FaTools className="text-orange-500 text-4xl" />,
  },
  {
    title: "Enterprise Solutions",
    description:
      "We build and manage large-scale enterprise-grade MySQL databases with complex data requirements.",
    icon: <FaServer className="text-indigo-500 text-4xl" />,
  },
];

const MySQLService = () => {
  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-10">
          🚀 Our MySQL Development Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 shadow-md rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-800"
            >
              {/* Service Icon */}
              <div className="mb-4">{service.icon}</div>

              {/* Service Title */}
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>

              {/* Service Description */}
              <p className="text-gray-400 text-sm mt-3">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySQLService;
