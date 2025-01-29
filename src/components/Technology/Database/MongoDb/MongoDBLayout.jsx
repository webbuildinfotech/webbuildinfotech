import React from "react";
import MongoDBInfo from "./MongoDBInfo";
import MongoDBService from "./MongoDBService";

const MongoDBLayout = () => {
  return (
    <div>
      <MongoDBInfo />
      <MongoDBService />
    </div>
  );
};

export default MongoDBLayout;
