import React from "react";
import TechnologyRouteMeta from "../../TechnologyRouteMeta";
import { technologySeo } from "./seo";
import NestJsInfo from "./NestJsInfo";
import NestJsService from "./NestJsService";

const NestJsLayout = () => {
  return (
    <>
      <TechnologyRouteMeta {...technologySeo} />
      <NestJsInfo />
      <NestJsService />
    </>
  );
};

export default NestJsLayout;
