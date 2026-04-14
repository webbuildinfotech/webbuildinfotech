// src/data/technologyRoutes.js
import { RoutePaths } from "./constant/path";
import ReactJsLayout from "../sections/Technology/Frontend/ReactJs/ReactLayout";
import VueJsLayout from "../sections/Technology/Frontend/VueJs/VueJsLayout";
import AngularLayout from "../sections/Technology/Frontend/Angular/AngularLayout";
import HTML5Layout from "../sections/Technology/Frontend/HTML5/HTML5Layout";
import NextJsLayout from "../sections/Technology/Frontend/NextJs/NextJsLayout";
import TypeScriptLayout from "../sections/Technology/Frontend/TypeScript/TypeScriptLayout";
import JavaScriptLayout from "../sections/Technology/Frontend/JavaScript/JavaScriptLayout";
import TailwindCssLayout from "../sections/Technology/Frontend/TailwindCss/TailwindCssLayout";
import MaterialUiLayout from "../sections/Technology/Frontend/MaterialUi/MaterialUiLayout";
import NodeJsLayout from "../sections/Technology/Backend/NodeJs/NodeJsLayout";
import ExpressJsLayout from "../sections/Technology/Backend/ExpressJs/ExpressJsLayout";
import GraphQLLayout from "../sections/Technology/Backend/GraphQL/GraphQLLayout";
import NestJsLayout from "../sections/Technology/Backend/NestJs/NestJsLayout";
import RestApiLayout from "../sections/Technology/Backend/RestApi/RestApiLayout";
import MongoDBLayout from "../sections/Technology/Database/MongoDb/MongoDBLayout";
import FirebaseLayout from "../sections/Technology/Database/Firebase/FirebaseLayout";
import PostgreSQLLayout from "../sections/Technology/Database/PostGresQl/PostgreSQLLayout";
import MySQLLayout from "../sections/Technology/Database/MySQL/MySQLLayout";
import AwsLayout from "../sections/Technology/DevOps/Aws/AwsLayout";
import DockerLayout from "../sections/Technology/DevOps/Docker/DockerLayout";
import CiCdLayout from "../sections/Technology/DevOps/CiCd/CiCdLayout";
import NginxLayout from "../sections/Technology/DevOps/Nginx/NginxLayout";
import OpenAiLayout from "../sections/Technology/Ai/OpenAi/OpenAiLayout";
import FlowiseLayout from "../sections/Technology/Ai/Flowise/FlowiseLayout";
import WorkflowAutomationLayout from "../sections/Technology/Ai/WorkflowAutomation/WorkflowAutomationLayout";
import ApiIntegrationsLayout from "../sections/Technology/Ai/ApiIntegrations/ApiIntegrationsLayout";
import GitGithubLayout from "../sections/Technology/Tools/GitGithub/GitGithubLayout";
import PostmanLayout from "../sections/Technology/Tools/Postman/PostmanLayout";
import FigmaLayout from "../sections/Technology/Tools/Figma/FigmaLayout";
import JiraTrelloLayout from "../sections/Technology/Tools/JiraTrello/JiraTrelloLayout";

export const TechnologyRoutes = [
  {
    category: "Frontend",
    routes: [
      { path: RoutePaths.TECHNOLOGY.FRONTEND.REACT, name: "React.js", component: ReactJsLayout },
      { path: RoutePaths.TECHNOLOGY.FRONTEND.VUE, name: "Vue.js", component: VueJsLayout },
      { path: RoutePaths.TECHNOLOGY.FRONTEND.ANGULAR, name: "Angular", component: AngularLayout },
      { path: RoutePaths.TECHNOLOGY.FRONTEND.HTML5, name: "HTML5", component: HTML5Layout },
      { path: RoutePaths.TECHNOLOGY.FRONTEND.NEXT, name: "Next.js", component: NextJsLayout },
      { path: RoutePaths.TECHNOLOGY.FRONTEND.TYPESCRIPT, name: "TypeScript", component: TypeScriptLayout },
      { path: RoutePaths.TECHNOLOGY.FRONTEND.JAVASCRIPT, name: "JavaScript (ES6+)", component: JavaScriptLayout },
      { path: RoutePaths.TECHNOLOGY.FRONTEND.TAILWIND, name: "Tailwind CSS", component: TailwindCssLayout },
      { path: RoutePaths.TECHNOLOGY.FRONTEND.MATERIAL_UI, name: "Material UI", component: MaterialUiLayout },
    ],
  },
  {
    category: "Backend",
    routes: [
      { path: RoutePaths.TECHNOLOGY.BACKEND.NODE, name: "Node.js", component: NodeJsLayout },
      { path: RoutePaths.TECHNOLOGY.BACKEND.EXPRESS, name: "Express.js", component: ExpressJsLayout },
      { path: RoutePaths.TECHNOLOGY.BACKEND.GRAPHQL, name: "GraphQL", component: GraphQLLayout },
      { path: RoutePaths.TECHNOLOGY.BACKEND.NEST, name: "NestJS", component: NestJsLayout },
      { path: RoutePaths.TECHNOLOGY.BACKEND.REST_API, name: "REST API Development", component: RestApiLayout },
    ],
  },
  {
    category: "Database",
    routes: [
      { path: RoutePaths.TECHNOLOGY.DATABASE.MONGO, name: "MongoDB", component: MongoDBLayout },
      { path: RoutePaths.TECHNOLOGY.DATABASE.FIREBASE, name: "Firebase", component: FirebaseLayout },
      { path: RoutePaths.TECHNOLOGY.DATABASE.POSTGRES, name: "PostgreSQL", component: PostgreSQLLayout },
      { path: RoutePaths.TECHNOLOGY.DATABASE.MYSQL, name: "MySQL", component: MySQLLayout },
    ],
  },
  {
    category: "DevOps",
    routes: [
      { path: RoutePaths.TECHNOLOGY.DEVOPS.AWS, name: "AWS", component: AwsLayout },
      { path: RoutePaths.TECHNOLOGY.DEVOPS.DOCKER, name: "Docker", component: DockerLayout },
      { path: RoutePaths.TECHNOLOGY.DEVOPS.CI_CD, name: "CI/CD Pipelines", component: CiCdLayout },
      { path: RoutePaths.TECHNOLOGY.DEVOPS.NGINX, name: "Nginx", component: NginxLayout },
    ],
  },
  {
    category: "AI",
    routes: [
      { path: RoutePaths.TECHNOLOGY.AI.OPENAI, name: "OpenAI", component: OpenAiLayout },
      { path: RoutePaths.TECHNOLOGY.AI.FLOWISE, name: "Flowise AI", component: FlowiseLayout },
      { path: RoutePaths.TECHNOLOGY.AI.WORKFLOW_AUTOMATION, name: "Workflow Automation", component: WorkflowAutomationLayout },
      { path: RoutePaths.TECHNOLOGY.AI.API_INTEGRATIONS, name: "API Integrations", component: ApiIntegrationsLayout },
    ],
  },
  {
    category: "Tools",
    routes: [
      { path: RoutePaths.TECHNOLOGY.TOOLS.GIT_GITHUB, name: "Git & GitHub", component: GitGithubLayout },
      { path: RoutePaths.TECHNOLOGY.TOOLS.POSTMAN, name: "Postman", component: PostmanLayout },
      { path: RoutePaths.TECHNOLOGY.TOOLS.FIGMA, name: "Figma", component: FigmaLayout },
      { path: RoutePaths.TECHNOLOGY.TOOLS.JIRA_TRELLO, name: "Jira / Trello", component: JiraTrelloLayout },
    ],
  },
];
