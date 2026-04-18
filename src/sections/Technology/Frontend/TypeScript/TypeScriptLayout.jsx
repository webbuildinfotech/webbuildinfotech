import React from "react";
import TechnologyRouteMeta from "../../TechnologyRouteMeta";
import { technologySeo } from "./seo";
import TypeScriptInfo from "./TypeScriptInfo";
import TypeScriptService from "./TypeScriptService";

const TypeScriptLayout = () => {
  return (
    <>
      <TechnologyRouteMeta {...technologySeo} />
      <TypeScriptInfo />
      <TypeScriptService />
    </>
  );
};

export default TypeScriptLayout;
