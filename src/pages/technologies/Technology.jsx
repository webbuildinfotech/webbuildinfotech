import React from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { glassCardLG } from "@/lib/glassCard";

const technologies = [
  {
    category: "Frontend Technologies",
    items: [
      {
        name: "React",
        image: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
        description: "React is a JavaScript library for building fast and interactive user interfaces. Developed by Facebook, it's widely used for modern web applications.",
        link: "/technologies/react-info"

      },
      {
        name: "Angular",
        image: "https://angular.io/assets/images/logos/angular/angular.svg",
        description: "Angular is a platform and framework for building single-page client applications using HTML and TypeScript.",
        link: "/technologies/angular-info"


      },
      {
        name: "Vue.js",
        image: "https://vuejs.org/images/logo.png",
        description: "Vue.js is a progressive framework for building user interfaces. It is designed to be incrementally adoptable, focusing on simplicity and flexibility.",
        link: "/technologies/vue-info"
      },

      {
        name: "HTML5",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        description: "HTML5 is the standard markup language used for creating modern and semantic web pages with multimedia support.",
        link: "/technologies/html5-info"


      },
    ],
  },
  {
    category: "Backend Technologies",
    items: [
      {
        name: "Node.js",
        image: "https://d1uxiwmpc9j4yg.cloudfront.net/images/all/71302-express.js-chrome-javascript-system-node.js-v8-runtime_1687631713.png",
        description: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to use JavaScript for server-side scripting.",
        link: "/technologies/node-info"
     
      },
      {
        name: "Express.js",
        image: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png",
        description: "Express.js is a fast, minimal, and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
        link: "/technologies/express-info"
     
      },
      {
        name: "GraphQL",
        image: "https://graphql.org/img/logo.svg",
        description: "GraphQL is a query language for APIs, enabling clients to request only the data they need and nothing more.",
        link: "/technologies/graphql-info"
   
      },
      {
        name: "NestJS",
        image: "https://docs.nestjs.com/assets/logo-small.svg",
        description: "NestJS is a framework for building scalable and maintainable server-side applications using TypeScript.",
        link: "/technologies/nest-info"
   
      },
    ],
  },
  {
    category: "Database Technologies",
    items: [

      {
        name: "MongoDB",
        image: "https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png",
        description: "MongoDB is a document-oriented NoSQL database used for high-volume data storage.",
        link: "/technologies/mongo-info"
     
      },
      {
        name: "MySQL",
        image: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
        description: "MySQL is an open-source relational database management system based on SQL (Structured Query Language).",
        link: "/technologies/mysql-info"
     
      },
      {
        name: "PostgreSQL",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
        description: "PostgreSQL is a powerful, open-source object-relational database system with a strong focus on extensibility and SQL compliance.",
        link: "/technologies/postgres-info"
     
      },
      {
        name: "Firebase",
        image: "https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png",
        description: "Firebase is a platform developed by Google for creating mobile and web applications, offering real-time database and backend services.",
        link: "/technologies/firebase-info"
   
      },
    ],
  },
];

const TechnologiesPage = () => {
  const navigate = useNavigate(); // Hook for navigation
  return (
    <section className="bg-gradient-to-b from-background-light via-background-light/80 to-background-light pb-16 pt-24 dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark sm:pb-20 sm:pt-28">
      <div className="relative isolate mb-10 w-full overflow-hidden rounded-b-3xl px-6 py-12 text-center shadow-[0_20px_50px_-15px_rgba(15,23,42,0.35)] dark:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.55)] sm:px-8 sm:py-14">
        <div className="absolute inset-0 bg-gradient-to-br from-grey-950 via-primary-darker to-secondary-darker" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-30%,rgba(91,228,155,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_100%,rgba(142,51,255,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black_40%,transparent)]" />
        <div className="relative mx-auto w-full max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-lighter/90">
            Tech Stack
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Technologies{" "}
            <span className="bg-gradient-to-r from-primary-light via-primary-lighter to-secondary-light bg-clip-text text-transparent">
              We Work With
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/75 sm:text-base">
            Explore our modern frontend, backend, and database technologies used to build scalable products.
          </p>
          <div className="mx-auto mt-7 h-1 w-14 rounded-full bg-gradient-to-r from-primary-main via-primary-light to-secondary-main sm:w-16" />
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12">

        {technologies.map((techCategory, index) => (
          <div key={index} className="mb-10">
            {/* Category Header */}
            <h2 className="mb-6 text-xl font-semibold text-grey-800 dark:text-grey-100 lg:text-2xl">
              {techCategory.category}
            </h2>

            {/* Grid Layout */}
            <div className="grid cursor-pointer grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {techCategory.items.map((tech, i) => (
                <div
                  key={i}
                  onClick={() => {
                    window.scrollTo(0, 0); // Scroll to top
                    navigate(tech.link); // Navigate to new page
                  }}
                  className={cn(
                    glassCardLG,
                    "group flex h-full flex-col items-center justify-start !rounded-[0px] !rounded-tl-[15%] !rounded-br-[15%] border border-grey-200/70 p-6 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] dark:border-grey-700/70"
                  )}
                >
                  {/* Technology Logo */}
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="mb-4 h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Technology Name */}
                  <h3 className="mb-3 text-center text-xl font-semibold text-grey-900 dark:text-grey-50">
                    {tech.name}
                  </h3>
                  {/* Technology Description */}
                  <p className="font-mooli text-center text-sm leading-6 text-grey-600 dark:text-grey-300">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesPage;
