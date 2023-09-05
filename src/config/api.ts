import axios from "axios";

// ================  Defining axios instances here ============== //

export const superAdminApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/super-admin`,
});
