import React from "react";

import ExpressJsService from "./ExpressJsService";
import ExpressJsInfo from "./ExpressJsInfo";

const ExpressJsLayout = () => {
  return (
    <div>
      <ExpressJsInfo />
      <ExpressJsService />
    </div>
  );
};

export default ExpressJsLayout;
