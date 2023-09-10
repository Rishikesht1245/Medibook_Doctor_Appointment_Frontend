import { hospitalAdminApi } from "../config/api";
import { ILogin } from "../interfaces/auth";
import { IHospital } from "../interfaces/hospitalAdmins";

export const login = async (formData: ILogin) =>
  await hospitalAdminApi.post("/auth", formData);

export const signup = async (formData: IHospital) => {
  await hospitalAdminApi.post("/signup", formData);
};
