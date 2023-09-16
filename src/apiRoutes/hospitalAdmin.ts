import { hospitalAdminApi } from "../config/api";
import { ILogin } from "../interfaces/auth";
import { IHospital } from "../interfaces/hospitalAdmins";

export const login = async (formData: ILogin) =>
  await hospitalAdminApi.post("/auth", formData);

export const signup = async (formData: IHospital) => {
  return await hospitalAdminApi.post("/signup", formData);
};

export const verifyOtp_Admin = async (
  otp: string,
  id: string | undefined
): Promise<any> => {
  return await hospitalAdminApi.post("/verify-otp", { otp: otp, id: id });
};

export const resendOtp_Admin = async (id: string | undefined): Promise<any> => {
  return hospitalAdminApi.get(`/resend-otp/${id}`);
};
