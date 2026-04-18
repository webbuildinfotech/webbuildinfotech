import React from "react";
import TechnologyRouteMeta from "../../TechnologyRouteMeta";
import { technologySeo } from "./seo";
import TailwindCssInfo from "./TailwindCssInfo";
import TailwindCssService from "./TailwindCssService";

const TailwindCssLayout = () => {
  return (
    <>
      <TechnologyRouteMeta {...technologySeo} />
      <TailwindCssInfo />
      <TailwindCssService />
    </>
  );
};

export default TailwindCssLayout;
