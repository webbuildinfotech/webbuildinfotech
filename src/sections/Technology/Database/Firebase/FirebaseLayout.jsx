import React from "react";
import TechnologyRouteMeta from "../../TechnologyRouteMeta";
import { technologySeo } from "./seo";
import FirebaseInfo from "./FirebaseInfo";
import FirebaseService from "./FirebaseService";

const FirebaseLayout = () => {
  return (
    <>
      <TechnologyRouteMeta {...technologySeo} />
      <FirebaseInfo />
      <FirebaseService />
    </>
  );
};

export default FirebaseLayout;
