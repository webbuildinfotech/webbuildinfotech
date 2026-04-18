import React from "react";
import TechnologyRouteMeta from "../../TechnologyRouteMeta";
import { technologySeo } from "./seo";
import RestApiInfo from "./RestApiInfo";
import RestApiService from "./RestApiService";

const RestApiLayout = () => {
  return (
    <>
      <TechnologyRouteMeta {...technologySeo} />
      <RestApiInfo />
      <RestApiService />
    </>
  );
};

export default RestApiLayout;
