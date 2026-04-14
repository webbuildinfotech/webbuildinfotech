import React from "react";
import { motion } from "framer-motion";

const serviceImage = "https://1000logos.net/wp-content/uploads/2025/03/Amazon-Web-Services-Emblem.png";

const AwsInfo = () => {
  return (
    <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 w-full flex justify-center"
        >
          <img src={serviceImage} alt="AWS Service" className="w-full max-w-md object-contain" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 w-full"
        >
          <h3 className="text-lg font-semibold text-grey-700 dark:text-[#FF9900] uppercase tracking-wider">
            Why Choose AWS?
          </h3>
          <h2 className="text-3xl font-bold text-grey-900 dark:text-grey-50 mt-3 leading-tight">
            Secure and Scalable <span className="text-[#FF9900]">Cloud Infrastructure</span>
          </h2>
          <p className="text-grey-600 dark:text-grey-300 mt-6 text-lg leading-relaxed">
            We architect AWS environments using services like EC2, S3, Lambda, and CloudFront
            to support high-availability web applications and APIs.
          </p>
          <p className="text-grey-600 dark:text-grey-300 mt-4 text-lg leading-relaxed">
            Our cloud setup focuses on performance, security, and cost optimization for startups
            and enterprise products with long-term growth goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AwsInfo;
