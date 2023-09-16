import { patientApi } from "../config/api";
import { IPatient } from "../interfaces/patient";
import { ILogin } from "../interfaces/auth";

export const signup = async (formData: IPatient) =>
  await patientApi.post("signup", formData);

export const login = async (formData: ILogin) =>
  await patientApi.post("/auth", formData);

//otp verification api call, function is directly defined here
export const verifyOtp_Patient = async (
  otp: string,
  id: string | undefined
): Promise<any> => {
  return await patientApi.post("/verify-otp", { otp: otp, id: id });
};

// resend otp
export const resendOtp_Patient = async (
  id: string | undefined
): Promise<any> => {
  return await patientApi.get(`/resend-otp/${id}`);
};
