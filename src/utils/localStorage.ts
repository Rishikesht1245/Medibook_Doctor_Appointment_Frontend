import { ICurrentUser, ILoginResponse, IRole } from "../interfaces/auth";

// saving login data in local storage
export const saveLocally = (
  token: string,
  data: ILoginResponse,
  role: IRole
): void => {
  const saveData = {
    token: token,
    currentUser: data,
    role,
  };

  // saving data to local storage after converting to JSON
  localStorage.setItem("medibook", JSON.stringify(saveData));
};

// Fetching data from Local storage
export const getLocalData = (): ICurrentUser | null => {
  const localData: string | null = localStorage.getItem("medibook");
  if (!localData) return null;
  //Parsing JSON data stored in local storage to Object
  return JSON.parse(localData);
};
