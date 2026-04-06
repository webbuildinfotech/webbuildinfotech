import React from "react";
import { useNavigate } from "react-router-dom";

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
    <section className="pt-24 pb-16 sm:pt-28 sm:pb-20 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark">
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="mb-5 text-start text-2xl lg:text-3xl font-bold text-grey-900 dark:text-grey-50">
          TECHNOLOGIES WE WORK WITH
        </h1>

        {technologies.map((techCategory, index) => (
          <div key={index} className="mb-5">
            {/* Category Header */}
            <h2 className="mb-8 text-xl lg:text-2xl font-semibold text-grey-800 dark:text-grey-100">
              {techCategory.category}
            </h2>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 cursor-pointer">
              {techCategory.items.map((tech, i) => (
                <div
                  key={i}
                  onClick={() => {
                    window.scrollTo(0, 0); // Scroll to top
                    navigate(tech.link); // Navigate to new page
                  }}
                  className="flex flex-col items-center justify-start rounded-lg bg-white p-6 shadow-md border border-grey-400 transition-transform duration-300 hover:scale-105 hover:shadow-lg dark:bg-background-dark-light dark:border-grey-700"
                >
                  {/* Technology Logo */}
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-16 h-16 object-contain mb-4"
                  />
                  {/* Technology Name */}
                  <h3 className="mb-4 text-xl font-semibold text-grey-900 dark:text-grey-50">
                    {tech.name}
                  </h3>
                  {/* Technology Description */}
                  <p className="font-mooli text-sm text-center text-grey-600 dark:text-grey-300">
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
