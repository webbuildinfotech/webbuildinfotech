import React from "react";
import TechnologyRouteMeta from "../../TechnologyRouteMeta";
import { technologySeo } from "./seo";
import GitGithubInfo from "./GitGithubInfo";
import GitGithubService from "./GitGithubService";

const GitGithubLayout = () => {
  return (
    <>
      <TechnologyRouteMeta {...technologySeo} />
      <GitGithubInfo />
      <GitGithubService />
    </>
  );
};

export default GitGithubLayout;
