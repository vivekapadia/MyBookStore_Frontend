import request from "./request";
import Role from "../models/RoleModel";
import BaseList from "../models/BaseList";

class AuthService {
  ENDPOINT = "api/User";

  public async getAllRoles(): Promise<BaseList<Role[]>> {
    const url = `${this.ENDPOINT}/Roles`;
    return request.get<BaseList<Role[]>>(url).then((res) => {
      console.log("Res",res);
      
      return res.data;
    });
  }

}
export default new AuthService();
