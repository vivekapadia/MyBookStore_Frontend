import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { RoutePaths } from "../utils/enum";

//component lazy loading
const Home = lazy(() => import("../pages/login/index"));
const Login = lazy(() => import("../pages/login/index"));
const Register = lazy(() => import("../pages/register"));

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route  path={RoutePaths.Home} element={<Home />} />
      <Route  path={RoutePaths.Login} element={<Login/>} />
      <Route  path={RoutePaths.Register} element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
