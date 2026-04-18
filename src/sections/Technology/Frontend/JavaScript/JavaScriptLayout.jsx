import React from "react";
import TechnologyRouteMeta from "../../TechnologyRouteMeta";
import { technologySeo } from "./seo";
import JavaScriptInfo from "./JavaScriptInfo";
import JavaScriptService from "./JavaScriptService";

const JavaScriptLayout = () => {
  return (
    <>
      <TechnologyRouteMeta {...technologySeo} />
      <JavaScriptInfo />
      <JavaScriptService />
    </>
  );
};

export default JavaScriptLayout;
