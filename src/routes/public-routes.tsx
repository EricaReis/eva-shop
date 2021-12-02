import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "../containers/HomePage";


const PublicRoutes: React.FC = () => (
  <Routes>
   <Route path='/' element={<HomePage/>} />
  </Routes>
);

export default PublicRoutes;
