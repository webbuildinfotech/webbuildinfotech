import React from "react";
import TechnologyRouteMeta from "../../TechnologyRouteMeta";
import { technologySeo } from "./seo";
import MySQLInfo from "./MySQLInfo";
import MySQLService from "./MySQLService";

const MySQLLayout = () => {
  return (
    <>
      <TechnologyRouteMeta {...technologySeo} />
      <MySQLInfo />
      <MySQLService />
    </>
  );
};

export default MySQLLayout;
