import React from "react";
import PostgreSQLInfo from "./PostgreSQLInfo";
import PostgreSQLService from "./PostgreSQLService";

const PostgreSQLLayout = () => {
  return (
    <>
      <PostgreSQLInfo />
      <PostgreSQLService />
    </>
  );
};

export default PostgreSQLLayout;
