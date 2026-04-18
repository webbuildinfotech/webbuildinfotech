import React from "react";
import TechnologyRouteMeta from "../../TechnologyRouteMeta";
import { technologySeo } from "./seo";
import GraphQLInfo from "./GraphQLInfo";
import GraphQLService from "./GraphQLService";


const GraphQLLayout = () => {
  return (
    <>
      <TechnologyRouteMeta {...technologySeo} />
      <GraphQLInfo />
      <GraphQLService />
    </>
  );
};

export default GraphQLLayout;
