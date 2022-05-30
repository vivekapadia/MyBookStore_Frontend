// React above v17 dont need to import React from "react"

import {
	Breadcrumbs,
	Link,
	Typography,
	Button,
	TextField
} from "@material-ui/core";

// formik form
import { Formik } from "formik";
// yup validation
import * as Yup from "yup";

// custom component for error msg display in the form
import ValidationErrorMessage from "../../components/ValidationErrorMessage/index";

// for routing
import { useNavigate } from "react-router-dom";

// components and styles imports for the toast notification
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// userTemplate
import { CreateUserModel } from "../../models/AuthModel";

// enum for the route paths
import { RoutePaths } from "../../utils/enum";

// mui makeStyles
import { materialCommonStyles } from "../../utils/materialCommonStyles";

//mui default theme
import { createAccountStyle } from "./style";

const Register = () => {
	// styles using mui default theme
	const classes = createAccountStyle();

	// custom common styles using mui makeStyles
	const materialClasses = materialCommonStyles();

	// to navigate to other pages
	const navigate = useNavigate();

	//
	const initialValues: CreateUserModel = new CreateUserModel();

	// validation schema
	const validationSchema = Yup.object().shape({
		email: Yup.string()
			.email("Invalid email address format")
			.required("Email is required"),
		password: Yup.string()
			.min(5, "Password must be 5 characters at minimum")
			.required("Password is required"),
		confirmPassword: Yup.string()
			.oneOf(
				[Yup.ref("password"), null],
				"Password and Confirm Password must be match."
			)
			.required("Confirm Password is required."),
		firstName: Yup.string().required("First name is required"),
		lastName: Yup.string().required("Last name is required"),
		roleId: Yup.number().required("Role is required"),
	});

	// Function to handle submit
	const onSubmit = (data: CreateUserModel) => {
		navigate(RoutePaths.Login);
		toast.success("Successfully registered");
	};

	return (
		<div className={classes.createAccountWrapper}>
			<div className="create-account-page-wrapper">
				<div className="container">
					<Breadcrumbs
						separator="›"
						aria-label="breadcrumb"
						className="breadcrumb-wrapper"
					>
						<Link color="inherit" href="/" title="Home">
							Home
						</Link>
						<Typography color="textPrimary">Create an Account</Typography>
					</Breadcrumbs>

					<Typography variant="h1">Login or Create an Account</Typography>
					<div className="create-account-row">
						<Formik
							initialValues={initialValues}
							validationSchema={validationSchema}
							onSubmit={onSubmit}
						>
							{({
								values,
								errors,
								touched,
								handleBlur,
								handleChange,
								handleSubmit,
							}) => (
								<form onSubmit={handleSubmit}>
									<div className="form-block">
										<div className="personal-information">
											<Typography variant="h2">Personal Information</Typography>
											<p>
												Please enter the following information to create your
												account.
											</p>
											<div className="form-row-wrapper">
												<div className="form-col">
													<TextField
														id="first-name"
														name="firstName"
														label="First Name *"
														variant="outlined"
														inputProps={{ className: "small" }}
														onBlur={handleBlur}
														onChange={handleChange}
													/>
													<ValidationErrorMessage
														message={errors.firstName}
														touched={touched.firstName}
													/>
												</div>
												<div className="form-col">
													<TextField
														onBlur={handleBlur}
														onChange={handleChange}
														id="last-name"
														name="lastName"
														label="Last Name *"
														variant="outlined"
														inputProps={{ className: "small" }}
													/>
													<ValidationErrorMessage
														message={errors.lastName}
														touched={touched.lastName}
													/>
												</div>
												<div className="form-col">
													<TextField
														onBlur={handleBlur}
														onChange={handleChange}
														id="email"
														name="email"
														label="Email Address *"
														variant="outlined"
														inputProps={{ className: "small" }}
													/>
													<ValidationErrorMessage
														message={errors.email}
														touched={touched.email}
													/>
												</div>

												
											</div>
										</div>
										<div className="login-information">
											<Typography variant="h2">Login Information</Typography>

											<div className="form-row-wrapper">
												<div className="form-col">
													<TextField
														onBlur={handleBlur}
														onChange={handleChange}
														id="password"
														type="password"
														name="password"
														label="Password *"
														variant="outlined"
														inputProps={{ className: "small" }}
													/>
													<ValidationErrorMessage
														message={errors.password}
														touched={touched.password}
													/>
												</div>
												<div className="form-col">
													<TextField
														type="password"
														onBlur={handleBlur}
														onChange={handleChange}
														id="confirm-password"
														name="confirmPassword"
														label="Confirm Password *"
														variant="outlined"
														inputProps={{ className: "small" }}
													/>
													<ValidationErrorMessage
														message={errors.confirmPassword}
														touched={touched.confirmPassword}
													/>
												</div>
											</div>
											<div className="btn-wrapper">
												<Button
													className="pink-btn btn"
													variant="contained"
													type="submit"
													color="primary"
													disableElevation
												>
													Register
												</Button>
											</div>
										</div>
									</div>
								</form>
							)}
						</Formik>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
