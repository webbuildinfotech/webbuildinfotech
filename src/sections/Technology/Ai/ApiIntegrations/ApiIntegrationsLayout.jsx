import React from "react";
import TechnologyRouteMeta from "../../TechnologyRouteMeta";
import { technologySeo } from "./seo";
import ApiIntegrationsInfo from "./ApiIntegrationsInfo";
import ApiIntegrationsService from "./ApiIntegrationsService";

const ApiIntegrationsLayout = () => {
  return (
    <>
      <TechnologyRouteMeta {...technologySeo} />
      <ApiIntegrationsInfo />
      <ApiIntegrationsService />
    </>
  );
};

export default ApiIntegrationsLayout;
