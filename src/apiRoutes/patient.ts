import { patientApi } from "../config/api";
import { IPatient } from "../interfaces/patient";
import { ILogin } from "../interfaces/auth";

export const signup = async (formData: IPatient) =>
  await patientApi.post("signup", formData);

export const login = async (formData: ILogin) =>
  await patientApi.post("/auth", formData);
