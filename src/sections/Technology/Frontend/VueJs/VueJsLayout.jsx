import React from "react";
import TechnologyRouteMeta from "../../TechnologyRouteMeta";
import { technologySeo } from "./seo";
import VueService from "./VueService";
import VueInfo from "./VueInfo";

const VueJsLayout = () => {
  return (
    <>
      <TechnologyRouteMeta {...technologySeo} />
      <VueService />
      <VueInfo />
    </>
  );
};

export default VueJsLayout;
