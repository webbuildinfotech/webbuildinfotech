// src/data/technologyRoutes.js
import { RoutePaths } from "./constant/path";
import ReactJsLayout from "../sections/Technology/Frontend/ReactJs/ReactLayout";
import VueJsLayout from "../sections/Technology/Frontend/VueJs/VueJsLayout";
import AngularLayout from "../sections/Technology/Frontend/Angular/AngularLayout";
import HTML5Layout from "../sections/Technology/Frontend/HTML5/HTML5Layout";
import NodeJsLayout from "../sections/Technology/Backend/NodeJs/NodeJsLayout";
import ExpressJsLayout from "../sections/Technology/Backend/ExpressJs/ExpressJsLayout";
import GraphQLLayout from "../sections/Technology/Backend/GraphQL/GraphQLLayout";
import NestJsLayout from "../sections/Technology/Backend/NestJs/NestJsLayout";
import MongoDBLayout from "../sections/Technology/Database/MongoDb/MongoDBLayout";
import FirebaseLayout from "../sections/Technology/Database/Firebase/FirebaseLayout";
import PostgreSQLLayout from "../sections/Technology/Database/PostGresQl/PostgreSQLLayout";
import MySQLLayout from "../sections/Technology/Database/MySQL/MySQLLayout";

export const TechnologyRoutes = [
  {
    category: "Frontend",
    routes: [
      { path: RoutePaths.TECHNOLOGY.FRONTEND.REACT, name: "React.js", component: ReactJsLayout },
      { path: RoutePaths.TECHNOLOGY.FRONTEND.VUE, name: "Vue.js", component: VueJsLayout },
      { path: RoutePaths.TECHNOLOGY.FRONTEND.ANGULAR, name: "Angular", component: AngularLayout },
      { path: RoutePaths.TECHNOLOGY.FRONTEND.HTML5, name: "HTML5", component: HTML5Layout },
    ],
  },
  {
    category: "Backend",
    routes: [
      { path: RoutePaths.TECHNOLOGY.BACKEND.NODE, name: "Node.js", component: NodeJsLayout },
      { path: RoutePaths.TECHNOLOGY.BACKEND.EXPRESS, name: "Express.js", component: ExpressJsLayout },
      { path: RoutePaths.TECHNOLOGY.BACKEND.GRAPHQL, name: "GraphQL", component: GraphQLLayout },
      { path: RoutePaths.TECHNOLOGY.BACKEND.NEST, name: "NestJS", component: NestJsLayout },
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
];
