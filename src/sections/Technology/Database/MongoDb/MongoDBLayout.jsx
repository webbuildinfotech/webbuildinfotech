import React from "react";
import TechnologyRouteMeta from "../../TechnologyRouteMeta";
import { technologySeo } from "./seo";
import MongoDBInfo from "./MongoDBInfo";
import MongoDBService from "./MongoDBService";

const MongoDBLayout = () => {
  return (
    <>
      <TechnologyRouteMeta {...technologySeo} />
      <MongoDBInfo />
      <MongoDBService />
    </>
  );
};

export default MongoDBLayout;
