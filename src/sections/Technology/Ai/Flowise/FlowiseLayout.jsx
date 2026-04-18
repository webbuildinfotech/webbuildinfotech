import React from "react";
import TechnologyRouteMeta from "../../TechnologyRouteMeta";
import { technologySeo } from "./seo";
import FlowiseInfo from "./FlowiseInfo";
import FlowiseService from "./FlowiseService";

const FlowiseLayout = () => {
  return (
    <>
      <TechnologyRouteMeta {...technologySeo} />
      <FlowiseInfo />
      <FlowiseService />
    </>
  );
};

export default FlowiseLayout;
