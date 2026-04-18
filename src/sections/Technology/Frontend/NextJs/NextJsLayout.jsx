import React from "react";
import TechnologyRouteMeta from "../../TechnologyRouteMeta";
import { technologySeo } from "./seo";
import NextJsInfo from "./NextJsInfo";
import NextJsService from "./NextJsService";

const NextJsLayout = () => {
  return (
    <>
      <TechnologyRouteMeta {...technologySeo} />
      <NextJsInfo />
      <NextJsService />
    </>
  );
};

export default NextJsLayout;
