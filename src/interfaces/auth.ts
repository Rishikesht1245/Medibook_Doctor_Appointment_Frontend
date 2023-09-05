// interfaces are placed here

// interface for login data
export interface ILogin {
  email: string;
  password: string;
}

// login response
export interface ILoginResponse {
  status?: string;
  data: {
    _id: string;
    email: string;
    name: string;
    mobile: string;
  };
  token: string;
  role: "superAdmin" | "hospitalAdmin" | "patient" | "doctor";
}

// interface for user data
export interface ICurrentUser {
  currentUser: ICurrentUserDetails;
  token: string;
  role: "superAdmin" | "hospitalAdmin" | "patient" | "doctor";
}

export interface ICurrentUserDetails {
  _id: string;
  email: string;
  name: string;
  mobile: string;
  profilePic?: string;
}

export type IRole = "superAdmin" | "hospitalAdmin" | "patient" | "doctor";
