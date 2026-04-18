import React from "react";
import TechnologyRouteMeta from "../../TechnologyRouteMeta";
import { technologySeo } from "./seo";
import HTML5Info from "./HTML5Info";
import HTML5Services from "./HTML5Services";

const HTML5Layout = () => {
  return (
    <>
      <TechnologyRouteMeta {...technologySeo} />
      <HTML5Info />
      <HTML5Services />
    </>
  );
};

export default HTML5Layout;
