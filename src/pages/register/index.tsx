import React from "react";

import { Button, Container, Typography } from "@material-ui/core";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
	return (
		<Container>
			<Typography variant="h1">Register</Typography>
			<Button
				variant="contained"
				color="primary"
				onClick={() => {
					toast.success("Register Successfully");
				}}
			>
				Click
			</Button>
		</Container>
	);
};

export default Register;
