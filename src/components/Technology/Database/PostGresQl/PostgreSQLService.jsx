import React from "react";
import { FaDatabase, FaCogs, FaSyncAlt, FaServer, FaRocket, FaShieldAlt, FaTools, FaCloud, FaChartBar } from "react-icons/fa";

const services = [
  {
    title: "Database Design & Optimization",
    description:
      "We create efficient and scalable PostgreSQL database schemas tailored to your application’s needs.",
    icon: <FaDatabase className="text-indigo-500 text-4xl" />,
  },
  {
    title: "Query Optimization",
    description:
      "We enhance query performance using advanced indexing, partitioning, and optimization techniques.",
    icon: <FaCogs className="text-blue-500 text-4xl" />,
  },
  {
    title: "Replication & High Availability",
    description:
      "We configure PostgreSQL replication and clustering to ensure high availability and data consistency.",
    icon: <FaSyncAlt className="text-green-500 text-4xl" />,
  },
  {
    title: "Database Migration",
    description:
      "We help migrate data from other databases to PostgreSQL with minimal downtime and no data loss.",
    icon: <FaServer className="text-red-500 text-4xl" />,
  },
  {
    title: "Cloud Database Solutions",
    description:
      "We deploy and manage PostgreSQL databases on AWS RDS, Google Cloud, and Azure for maximum scalability.",
    icon: <FaCloud className="text-teal-500 text-4xl" />,
  },
  {
    title: "Performance Optimization",
    description:
      "We improve database performance using caching, connection pooling, and query tuning.",
    icon: <FaRocket className="text-purple-500 text-4xl" />,
  },
  {
    title: "Database Security & Encryption",
    description:
      "We implement advanced security features, role-based access, and encryption to secure PostgreSQL databases.",
    icon: <FaShieldAlt className="text-gray-600 text-4xl" />,
  },
  {
    title: "PostgreSQL Support & Maintenance",
    description:
      "We provide ongoing support and maintenance to ensure your PostgreSQL database runs smoothly.",
    icon: <FaTools className="text-orange-500 text-4xl" />,
  },
  {
    title: "Analytics & Business Intelligence",
    description:
      "We integrate PostgreSQL with BI tools to provide real-time analytics and actionable insights.",
    icon: <FaChartBar className="text-yellow-500 text-4xl" />,
  },
];

const PostgreSQLService = () => {
  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-10">
          🚀 Our PostgreSQL Development Services
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

export default PostgreSQLService;
