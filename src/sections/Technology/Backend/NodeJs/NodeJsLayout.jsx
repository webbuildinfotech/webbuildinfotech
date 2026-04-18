import React from "react";
import TechnologyRouteMeta from "../../TechnologyRouteMeta";
import { technologySeo } from "./seo";
import NodeJsInfo from "./NodeJsInfo";
import NodeJsService from "./NodeJsService";

const NodeJsLayout = () => {
  return (
    <>
      <TechnologyRouteMeta {...technologySeo} />
      <NodeJsInfo />
      <NodeJsService />
    </>
  );
};

export default NodeJsLayout;
