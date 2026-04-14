import React from "react";
import { FaServer, FaCloudUploadAlt, FaLock, FaChartLine, FaCogs, FaNetworkWired } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { glassCardXL } from "@/lib/glassCard";
import { InteractiveGradientCard } from "../../../../components/card";

const services = [
  {
    title: "Cloud Infrastructure Setup",
    description: "Deploy secure cloud foundations for apps, APIs, and microservices.",
    icon: <FaServer className="text-orange-500 text-5xl" />,
  },
  {
    title: "Storage and Asset Delivery",
    description: "Use S3 and CDN strategies for fast, reliable content and media delivery.",
    icon: <FaCloudUploadAlt className="text-blue-500 text-5xl" />,
  },
  {
    title: "Security and Access Management",
    description: "Implement IAM, environment protection, and secure deployment practices.",
    icon: <FaLock className="text-green-500 text-5xl" />,
  },
  {
    title: "Monitoring and Scaling",
    description: "Set up logs, metrics, and autoscaling to support stable production traffic.",
    icon: <FaChartLine className="text-purple-500 text-5xl" />,
  },
  {
    title: "Serverless Workloads",
    description: "Build Lambda-based automation and backend processes for flexible scaling.",
    icon: <FaCogs className="text-yellow-500 text-5xl" />,
  },
  {
    title: "Network and Deployment Architecture",
    description: "Configure VPC, load balancers, and routing for resilient infrastructure.",
    icon: <FaNetworkWired className="text-cyan-500 text-5xl" />,
  },
];

const AwsService = () => {
  return (
    <section className="pb-16 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-grey-900 dark:text-grey-50 mb-10">
          🚀 Our AWS Cloud Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <InteractiveGradientCard
              key={index}
              className={cn(
                glassCardXL,
                "flex h-full flex-col items-center p-6 transition-all duration-300 hover:scale-105"
              )}
              color="#ff9900"
              glowColor="#ff990080"
              borderRadius="0.75rem"
              width="100%"
              height="100%"
              backgroundColor="transparent"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-grey-900 dark:text-grey-50 text-center">{service.title}</h3>
              <p className="text-grey-600 dark:text-grey-300 text-sm text-center mt-3 font-mooli tracking-wide">
                {service.description}
              </p>
            </InteractiveGradientCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwsService;
