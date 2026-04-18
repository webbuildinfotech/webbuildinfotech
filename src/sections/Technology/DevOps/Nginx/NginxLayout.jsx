import React from "react";
import TechnologyRouteMeta from "../../TechnologyRouteMeta";
import { technologySeo } from "./seo";
import NginxInfo from "./NginxInfo";
import NginxService from "./NginxService";

const NginxLayout = () => {
  return (
    <>
      <TechnologyRouteMeta {...technologySeo} />
      <NginxInfo />
      <NginxService />
    </>
  );
};

export default NginxLayout;
