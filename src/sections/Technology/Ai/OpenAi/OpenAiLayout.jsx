import React from "react";
import TechnologyRouteMeta from "../../TechnologyRouteMeta";
import { technologySeo } from "./seo";
import OpenAiInfo from "./OpenAiInfo";
import OpenAiService from "./OpenAiService";

const OpenAiLayout = () => {
  return (
    <>
      <TechnologyRouteMeta {...technologySeo} />
      <OpenAiInfo />
      <OpenAiService />
    </>
  );
};

export default OpenAiLayout;
