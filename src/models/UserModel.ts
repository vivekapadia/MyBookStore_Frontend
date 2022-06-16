// ? is used for optional parameters 
// ! is used for required parameters
export class AddOrEditUserModel {
	id!: number;
	email!: string;
	firstName!: string;
	lastName!: string;
	roleId!: number;
	name?: string;
	password?: string;
}

export class UpdateProfileModel {
	id!: number;
	email!: string;
	firstName!: string;
	lastName!: string;
	newPassword?: string;
	confirmPassword?: string;
}

export default class UserModel {
  [x: string]: any;
	id!: number;
	email!: string;
	firstName!: string;
	lastName!: string;
	roleid!: number;
	role?: string;
	password?: string;
}
