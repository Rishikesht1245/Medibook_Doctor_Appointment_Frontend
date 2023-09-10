import axios from "axios";

// ================  Defining axios instances here ============== //

export const superAdminApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/super-admins`,
});

export const patientApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/patients`,
});

export const doctorApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/doctors`,
});

export const hospitalAdminApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/hospital-admins`,
});
