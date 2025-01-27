import React from "react";

const technologies = [
  {
    category: "Frontend Technologies",
    items: [
      {
        name: "Vue.js",
        image: "https://vuejs.org/images/logo.png",
        description: "Vue.js is a progressive framework for building user interfaces. It is designed to be incrementally adoptable, focusing on simplicity and flexibility.",
      },
      {
        name: "React",
        image: "https://reactjs.org/logo-og.png",
        description: "React is a JavaScript library for building fast and interactive user interfaces. Developed by Facebook, it's widely used for modern web applications.",
      },
      {
        name: "Angular",
        image: "https://angular.io/assets/images/logos/angular/angular.svg",
        description: "Angular is a platform and framework for building single-page client applications using HTML and TypeScript.",
      },
      {
        name: "Material UI",
        image: "https://mui.com/static/logo.png",
        description: "Material UI is a popular React UI framework that implements Google's Material Design guidelines, offering pre-designed components.",
      },
      {
        name: "HTML5",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        description: "HTML5 is the standard markup language used for creating modern and semantic web pages with multimedia support.",
      },
    ],
  },
  {
    category: "Backend Technologies",
    items: [
      {
        name: "Node.js",
        image: "https://nodejs.org/static/images/logo.svg",
        description: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to use JavaScript for server-side scripting.",
      },
      {
        name: "Express.js",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
        description: "Express.js is a fast, minimal, and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
      },
      {
        name: "GraphQL",
        image: "https://graphql.org/img/logo.svg",
        description: "GraphQL is a query language for APIs, enabling clients to request only the data they need and nothing more.",
      },
      {
        name: "NestJS",
        image: "https://docs.nestjs.com/assets/logo-small.svg",
        description: "NestJS is a framework for building scalable and maintainable server-side applications using TypeScript.",
      },
    ],
  },
  {
    category: "Database Technologies",
    items: [
      {
        name: "Redis",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Redis_Logo.svg",
        description: "Redis is an in-memory data structure store, often used as a distributed, in-memory key-value database, cache, and message broker.",
      },
      {
        name: "MongoDB",
        image: "https://webimages.mongodb.com/_com_assets/cms/kq9rr3o6kt.svg",
        description: "MongoDB is a document-oriented NoSQL database used for high-volume data storage.",
      },
      {
        name: "MySQL",
        image: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
        description: "MySQL is an open-source relational database management system based on SQL (Structured Query Language).",
      },
      {
        name: "PostgreSQL",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
        description: "PostgreSQL is a powerful, open-source object-relational database system with a strong focus on extensibility and SQL compliance.",
      },
      {
        name: "Firebase",
        image: "https://firebase.google.com/images/brand-guidelines/logo-logomark.png",
        description: "Firebase is a platform developed by Google for creating mobile and web applications, offering real-time database and backend services.",
      },
    ],
  },
];

const TechnologiesPage = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="text-4xl font-bold text-blue-700 text-center mb-12">
          TECHNOLOGIES WE WORK WITH
        </h1>

        {technologies.map((techCategory, index) => (
          <div key={index} className="mb-16">
            {/* Category Header */}
            <h2 className="text-2xl font-semibold text-blue-800 mb-8">
              {techCategory.category}
            </h2>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {techCategory.items.map((tech, i) => (
                <div
                  key={i}
                  className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-start transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                >
                  {/* Technology Logo */}
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-16 h-16 object-contain mb-4"
                  />
                  {/* Technology Name */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {tech.name}
                  </h3>
                  {/* Technology Description */}
                  <p className="text-gray-600 text-sm text-center">
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
  