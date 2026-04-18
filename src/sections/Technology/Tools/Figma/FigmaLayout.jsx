import React from "react";
import TechnologyRouteMeta from "../../TechnologyRouteMeta";
import { technologySeo } from "./seo";
import FigmaInfo from "./FigmaInfo";
import FigmaService from "./FigmaService";

const FigmaLayout = () => {
  return (
    <>
      <TechnologyRouteMeta {...technologySeo} />
      <FigmaInfo />
      <FigmaService />
    </>
  );
};

export default FigmaLayout;
