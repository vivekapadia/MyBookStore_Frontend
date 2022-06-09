import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { RoutePaths } from "../utils/enum";

//component lazy loading
const Login = lazy(() => import("../pages/login/index"));
const Register = lazy(() => import("../pages/register"));
const BookList = lazy(() => import("../pages/book-listing"));

const AppRoutes: React.FC = () => {
  return (
		<Routes>
			<Route path={RoutePaths.Login} element={<Login />} />
			<Route path={RoutePaths.Register} element={<Register />} />
			<Route path={RoutePaths.BookListing} element={<BookList/>} />
		</Routes>
	);
};

export default AppRoutes;
