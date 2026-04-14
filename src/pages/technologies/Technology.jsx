import React from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { glassCardLG } from "@/lib/glassCard";

const technologies = [
  {
    category: "Frontend Technologies",
    items: [
      {
        name: "React.js",
        image: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
        description: "React is a JavaScript library for building fast and interactive user interfaces. Developed by Facebook, it's widely used for modern web applications.",
        link: "/technologies/react-info"
      },
      {
        name: "Next.js",
        image: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png",
        description: "SEO-friendly and performant React framework for production web apps.",
        link: "/technologies/next-info"
      },
      {
        name: "TypeScript",
        image: "https://cdn.simpleicons.org/typescript",
        description: "Type-safe JavaScript development for maintainable codebases.",
        link: "/technologies/typescript-info"
      },
      {
        name: "JavaScript (ES6+)",
        image: "https://cdn.simpleicons.org/javascript",
        description: "Modern JavaScript patterns and syntax for robust web engineering.",
        link: "/technologies/javascript-info"
      },
      {
        name: "Tailwind CSS",
        image: "https://cdn.simpleicons.org/tailwindcss",
        description: "Utility-first CSS framework for rapid and consistent UI styling.",
        link: "/technologies/tailwind-info"
      },
      {
        name: "Material UI",
        image: "https://cdn.simpleicons.org/mui",
        description: "Production-ready React components for polished enterprise interfaces.",
        link: "/technologies/material-ui-info"
      },
      {
        name: "HTML5, CSS3",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        description: "Semantic markup and styling foundation for all web experiences.",
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
        description: "High-performance backend runtime for scalable JavaScript services.",
        link: "/technologies/node-info"
      },
      {
        name: "Express.js",
        image: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png",
        description: "Minimal and flexible web framework for API and backend development.",
        link: "/technologies/express-info"
      },
      {
        name: "Nest.js",
        image: "https://cdn.simpleicons.org/nestjs",
        description: "Structured Node.js framework for scalable and maintainable backend systems.",
        link: "/technologies/nest-info"
      },
      {
        name: "REST API Development",
        image: "https://cdn.simpleicons.org/postman",
        description: "Contract-driven RESTful API architecture and implementation.",
        link: "/technologies/rest-api-info"
      },
      {
        name: "GraphQL",
        image: "https://graphql.org/img/logo.svg",
        description: "Flexible API query layer for efficient client-server data exchange.",
        link: "/technologies/graphql-info"
      },
    ],
  },
  {
    category: "Database Technologies",
    items: [
      {
        name: "MongoDB",
        image: "https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png",
        description: "Document-based NoSQL database for flexible, scalable data models.",
        link: "/technologies/mongo-info"
      },
      {
        name: "PostgreSQL",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
        description: "Powerful relational database with strong consistency and SQL features.",
        link: "/technologies/postgres-info"
      },
      {
        name: "MySQL",
        image: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
        description: "Reliable relational database for high-availability web applications.",
        link: "/technologies/mysql-info"
      },
      {
        name: "Firebase",
        image: "https://cdn.simpleicons.org/firebase",
        description: "Realtime backend services for authentication, hosting, and cloud data.",
        link: "/technologies/firebase-info"
      },
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      {
        name: "AWS (EC2, S3, Lambda)",
        image: "https://1000logos.net/wp-content/uploads/2025/03/Amazon-Web-Services-Emblem.png",
        description: "Scalable cloud infrastructure and serverless architecture on AWS.",
        link: "/technologies/aws-info"
      },
      {
        name: "Docker",
        image: "https://cdn.simpleicons.org/docker",
        description: "Containerized application delivery for consistent environments.",
        link: "/technologies/docker-info"
      },
      {
        name: "CI/CD Pipelines",
        image: "https://cdn.simpleicons.org/githubactions",
        description: "Automated build, test, and deployment workflows.",
        link: "/technologies/ci-cd-info"
      },
      {
        name: "Nginx",
        image: "https://cdn.simpleicons.org/nginx",
        description: "High-performance reverse proxy and web server configuration.",
        link: "/technologies/nginx-info"
      },
    ],
  },
  {
    category: "AI & Automation",
    items: [
      {
        name: "OpenAI (ChatGPT API)",
        image: "/images/gpt.png",
        description: "LLM integrations for chat, summarization, and AI-powered features.",
        link: "/technologies/openai-info"
      },
      {
        name: "Flowise AI",
        image: "https://cdn.simpleicons.org/n8n",
        description: "Visual AI workflow orchestration for rapid automation systems.",
        link: "/technologies/flowise-info"
      },
      {
        name: "Workflow Automation",
        image: "https://cdn.simpleicons.org/zapier",
        description: "Automating repetitive tasks and business process pipelines.",
        link: "/technologies/workflow-automation-info"
      },
      {
        name: "API Integrations",
        image: "/images/api.png",
        description: "Connecting internal and external systems through reliable integrations.",
        link: null
      },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      {
        name: "Git & GitHub",
        image: "/images/gitHub.png",
        description: "Version control and collaboration workflows for quality delivery.",
        link: "/technologies/git-github-info"
      },
      {
        name: "Postman",
        image: "https://cdn.simpleicons.org/postman",
        description: "API testing, mocking, and documentation workflows.",
        link: "/technologies/postman-info"
      },
      {
        name: "Figma (UI Collaboration)",
        image: "/images/figma.png",
        description: "Design collaboration and handoff for pixel-perfect implementation.",
        link: "/technologies/figma-info"
      },
      {
        name: "Jira / Trello",
        image: "https://cdn.simpleicons.org/jira",
        description: "Task planning, sprint tracking, and delivery management.",
        link: "/technologies/jira-trello-info"
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

        {technologies.map((techCategory) => (
          <div key={techCategory.category} className="mb-10">
            {/* Category Header */}
            <h2 className="mb-6 text-xl font-semibold text-grey-800 dark:text-grey-100 lg:text-2xl">
              {techCategory.category}
            </h2>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {techCategory.items.map((tech) => (
                <div
                  key={tech.name}
                  onClick={() => {
                    if (!tech.link) return;
                    window.scrollTo(0, 0); // Scroll to top
                    navigate(tech.link); // Navigate to new page
                  }}
                  className={cn(
                    glassCardLG,
                    "group flex h-full flex-col items-center justify-start !rounded-[0px] !rounded-tl-[15%] !rounded-br-[15%] border border-grey-200/70 p-6 transition-transform duration-300 dark:border-grey-700/70",
                    tech.link
                      ? "cursor-pointer hover:-translate-y-1 hover:scale-[1.02]"
                      : "cursor-default opacity-95"
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
