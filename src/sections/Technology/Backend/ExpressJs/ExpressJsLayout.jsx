import React from "react";
import TechnologyRouteMeta from "../../TechnologyRouteMeta";
import { technologySeo } from "./seo";

import ExpressJsService from "./ExpressJsService";
import ExpressJsInfo from "./ExpressJsInfo";

const ExpressJsLayout = () => {
  return (
    <>
      <TechnologyRouteMeta {...technologySeo} />
      <ExpressJsInfo />
      <ExpressJsService />
    </>
  );
};

export default ExpressJsLayout;
