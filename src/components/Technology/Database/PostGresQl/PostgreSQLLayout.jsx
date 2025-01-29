import React from "react";
import PostgreSQLInfo from "./PostgreSQLInfo";
import PostgreSQLService from "./PostgreSQLService";

const PostgreSQLLayout = () => {
  return (
    <div>
      <PostgreSQLInfo />
      <PostgreSQLService />
    </div>
  );
};

export default PostgreSQLLayout;
