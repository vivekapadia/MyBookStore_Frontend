import React, { useEffect } from "react";

import { Button, Container, Typography } from "@material-ui/core";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
	// useEffect(() => {
	// 	toast.success("Login Successful");
	// },[]);

	return (
		<Container>
			<Typography variant="h1">Login</Typography>
			<Button
				variant="contained"
				color="primary"
				onClick={() => {
					toast.success("Login Successfully");
				}}
			>
				Click
			</Button>
		</Container>
	);
};

export default Login;
