import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { RoutePaths } from "../utils/enum";

import EditBook from "../pages/book/editBook";
import { useAuthContext } from "../context/auth";

//component lazy loading
const Login = lazy(() => import("../pages/login/index"));
const Register = lazy(() => import("../pages/register"));
const BookList = lazy(() => import("../pages/book-listing"));
const Book = lazy(() => import("../pages/book"));
const Cart = lazy(() => import("../pages/cart"));
const UpdateProfile = lazy(() => import("../pages/updateProfile"));

const AppRoutes: React.FC = () => {
	const authContext = useAuthContext();

	return (
		<>
			<Routes>
				<Route path={RoutePaths.Login} element={<Login />} />
				<Route path={RoutePaths.Register} element={<Register />} />
				//Private Routing
				{authContext.user.id && (
					<>
						<Route path={RoutePaths.BookListing} element={<BookList />} />
						<Route path={RoutePaths.Book} element={<Book />} />
						<Route path={RoutePaths.AddBook} element={<EditBook />} />
						<Route path={RoutePaths.EditBook} element={<EditBook />} />
						<Route path={RoutePaths.Cart} element={<Cart />} />
						<Route
							path={RoutePaths.UpdateProfile}
							element={<UpdateProfile />}
						/>
					</>
				)}
			</Routes>
		</>
	);
};

export default AppRoutes;
