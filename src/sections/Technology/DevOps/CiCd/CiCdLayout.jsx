import React from "react";
import TechnologyRouteMeta from "../../TechnologyRouteMeta";
import { technologySeo } from "./seo";
import CiCdInfo from "./CiCdInfo";
import CiCdService from "./CiCdService";

const CiCdLayout = () => {
  return (
    <>
      <TechnologyRouteMeta {...technologySeo} />
      <CiCdInfo />
      <CiCdService />
    </>
  );
};

export default CiCdLayout;
