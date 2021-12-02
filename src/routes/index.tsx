import React from "react";
import { BrowserRouter } from "react-router-dom";

import PublicRoutes from "./public-routes";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  );
};

export default Routes;
