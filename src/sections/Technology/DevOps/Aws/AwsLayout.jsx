import React from "react";
import TechnologyRouteMeta from "../../TechnologyRouteMeta";
import { technologySeo } from "./seo";
import AwsInfo from "./AwsInfo";
import AwsService from "./AwsService";

const AwsLayout = () => {
  return (
    <>
      <TechnologyRouteMeta {...technologySeo} />
      <AwsInfo />
      <AwsService />
    </>
  );
};

export default AwsLayout;
