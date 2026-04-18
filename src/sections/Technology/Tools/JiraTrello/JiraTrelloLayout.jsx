import React from "react";
import TechnologyRouteMeta from "../../TechnologyRouteMeta";
import { technologySeo } from "./seo";
import JiraTrelloInfo from "./JiraTrelloInfo";
import JiraTrelloService from "./JiraTrelloService";

const JiraTrelloLayout = () => {
  return (
    <>
      <TechnologyRouteMeta {...technologySeo} />
      <JiraTrelloInfo />
      <JiraTrelloService />
    </>
  );
};

export default JiraTrelloLayout;
