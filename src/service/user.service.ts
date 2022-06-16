import request from "./request";
import Role from "../models/RoleModel";
import BaseList from "../models/BaseList";
import UserModel, { UpdateProfileModel } from "../models/UserModel";

class UserService {
	ENDPOINT = "api";

	public async getAllRoles(): Promise<BaseList<Role[]>> {
		const url = `${this.ENDPOINT}/role/list`;
		return request.get<BaseList<Role[]>>(url).then((res) => {
			console.log("Res", res.data);

			return res.data;
		});
	}
	public async updateProfile(data: UpdateProfileModel): Promise<UserModel> {
		const url = `${this.ENDPOINT}/user/update`;
		return request.put<UserModel>(url, data).then((res) => {
			return res.data;
		});
	}
}
export default new UserService();
