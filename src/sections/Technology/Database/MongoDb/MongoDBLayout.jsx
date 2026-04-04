import React from "react";
import MongoDBInfo from "./MongoDBInfo";
import MongoDBService from "./MongoDBService";

const MongoDBLayout = () => {
  return (
    <>
      <MongoDBInfo />
      <MongoDBService />
    </>
  );
};

export default MongoDBLayout;
