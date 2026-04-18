import React from "react";
import TechnologyRouteMeta from "../../TechnologyRouteMeta";
import { technologySeo } from "./seo";
import MaterialUiInfo from "./MaterialUiInfo";
import MaterialUiService from "./MaterialUiService";

const MaterialUiLayout = () => {
  return (
    <>
      <TechnologyRouteMeta {...technologySeo} />
      <MaterialUiInfo />
      <MaterialUiService />
    </>
  );
};

export default MaterialUiLayout;
