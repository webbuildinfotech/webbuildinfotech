import React from "react";
import TechnologyRouteMeta from "../../TechnologyRouteMeta";
import { technologySeo } from "./seo";
import PostgreSQLInfo from "./PostgreSQLInfo";
import PostgreSQLService from "./PostgreSQLService";

const PostgreSQLLayout = () => {
  return (
    <>
      <TechnologyRouteMeta {...technologySeo} />
      <PostgreSQLInfo />
      <PostgreSQLService />
    </>
  );
};

export default PostgreSQLLayout;
