import React from "react";
import TechnologyRouteMeta from "../../TechnologyRouteMeta";
import { technologySeo } from "./seo";
import PostmanInfo from "./PostmanInfo";
import PostmanService from "./PostmanService";

const PostmanLayout = () => {
  return (
    <>
      <TechnologyRouteMeta {...technologySeo} />
      <PostmanInfo />
      <PostmanService />
    </>
  );
};

export default PostmanLayout;
