import { doctorApi } from "../config/api";
import { ILogin } from "../interfaces/auth";

// login variable contain the entire function we can use it like a promise
export const login = async (formData: ILogin) =>
  await doctorApi.post("/auth", formData);
