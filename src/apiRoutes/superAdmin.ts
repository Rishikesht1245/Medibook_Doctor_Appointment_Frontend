import { superAdminApi } from "../config/api";
import { ILogin } from "../interfaces/auth";

// Login superAdmin -- Post request to server with formData
export const login = async (formData: ILogin) =>
  await superAdminApi.post("/auth", formData);
