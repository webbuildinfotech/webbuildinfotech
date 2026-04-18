import React from "react";
import TechnologyRouteMeta from "../../TechnologyRouteMeta";
import { technologySeo } from "./seo";
import DockerInfo from "./DockerInfo";
import DockerService from "./DockerService";

const DockerLayout = () => {
  return (
    <>
      <TechnologyRouteMeta {...technologySeo} />
      <DockerInfo />
      <DockerService />
    </>
  );
};

export default DockerLayout;
