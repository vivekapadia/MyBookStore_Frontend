import React from "react";

import { Typography, Button, TextField } from "@material-ui/core";

import { Formik } from "formik";
import * as Yup from "yup";
import ValidationErrorMessage from "../../components/ValidationErrorMessage/index";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UpdateProfileModel } from "../../models/UserModel";
import { RoutePaths } from "../../utils/enum";
import { updateAccountStyle } from "./style";
import userService from "../../service/user.service";
import { AuthContextModel, useAuthContext } from "../../context/auth";

const UpdateProfile = () => {
	const classes = updateAccountStyle();
	const navigate = useNavigate();
	const authContext: AuthContextModel = useAuthContext();
	let CurrentUser = authContext.user;

	const initialValues: UpdateProfileModel = {
		id: CurrentUser.id,
		email: CurrentUser.email,
		firstName: CurrentUser.firstname,
		lastName: CurrentUser.lastname,
		newPassword: "",
		confirmPassword: "",
	};

	const validationSchema = Yup.object().shape({
		email: Yup.string()
			.email("Invalid email address format")
			.required("Email is required"),
		newPassword: Yup.string()
			.required("Password is required")
			.min(5, "Password must be 5 characters at minimum"),
		confirmPassword: Yup.string()
			.oneOf(
				[Yup.ref("newPassword"), null],
				"Password and Confirm Password must be match."
			)
			.required("Confirm Password is required."),
		firstName: Yup.string().required("First name is required"),
		lastName: Yup.string().required("Last name is required"),
	});

	const onSubmit = (data: UpdateProfileModel) => {
		console.log("Updated UserProfile", data);
		userService.updateProfile(data).then((res) => {
			console.log("Update : ", res);
			navigate(RoutePaths.BookListing);
			toast.success("Successfully Profile Updated");
		});
	};

	return (
		<div className={classes.updateAccountWrapper}>
			<div className="update-account-page-wrapper">
				<div className="container">
					<Typography variant="h1">Update Profile</Typography>
					<div className="update-account-row">
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
											<div className="form-row-wrapper">
												<div className="form-col">
													<TextField
														id="first-name"
														value={values.firstName}
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
														value={values.lastName}
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
														value={values.email}
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
												<div className="form-col">
													<TextField
														onBlur={handleBlur}
														onChange={handleChange}
														id="newPassword"
														type="newPassword"
														name="newPassword"
														label="newPassword *"
														variant="outlined"
														inputProps={{ className: "small" }}
													/>
													<ValidationErrorMessage
														message={errors.newPassword}
														touched={touched.newPassword}
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
											<Button
												className="green-btn btn"
												variant="contained"
												type="submit"
												color="primary"
											>
												Save
											</Button>
											<Button
												className="pink-btn btn"
												variant="contained"
												color="primary"
												onClick={() => navigate(RoutePaths.BookListing)}
											>
												Cancel
											</Button>
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

export default UpdateProfile;
