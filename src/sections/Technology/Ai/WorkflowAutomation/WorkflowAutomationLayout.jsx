import React from "react";
import TechnologyRouteMeta from "../../TechnologyRouteMeta";
import { technologySeo } from "./seo";
import WorkflowAutomationInfo from "./WorkflowAutomationInfo";
import WorkflowAutomationService from "./WorkflowAutomationService";

const WorkflowAutomationLayout = () => {
  return (
    <>
      <TechnologyRouteMeta {...technologySeo} />
      <WorkflowAutomationInfo />
      <WorkflowAutomationService />
    </>
  );
};

export default WorkflowAutomationLayout;
