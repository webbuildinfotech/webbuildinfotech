// src/pages/technologies/TechnologyLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";

const TechnologyLayout = () => {
    return (
        <React.Fragment>
            <Outlet />
        </React.Fragment>
    );
};

export default TechnologyLayout;
