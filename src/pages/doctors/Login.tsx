import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../../components/forms/LoginForm";
import { login } from "../../apiRoutes/doctor";
import { saveLocally } from "../../utils/localStorage";
import { currentUserActions } from "../../store/currentUser";
import { ILoginResponse } from "../../interfaces/auth";
import { useAppDispatch } from "../../App";

// login page for doctors
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  //   login handler to store data locally
  const loginHandler = (token: string, data: ILoginResponse): void => {
    saveLocally(token, data, "patient");
    dispatch(
      currentUserActions.login({
        token,
        currentUser: data,
        role: "doctor",
      })
    );
    navigate("/doctors/dashboard");
  };
  return (
    <div className="parent-container lg:max-w-md">
      <h2 className="mb-6 text-center text-xl font-bold tracking-wide text-primary">
        WELCOME BACK DOCTOR!
      </h2>
      {/* onsubmit login will make a post request to the server  */}
      <LoginForm onSubmit={login} loginHandler={loginHandler} />
      <div className="ml-auto text-sm pt-1 px-2">
        <span className="text-[14px] font-medium">Hospital </span>
        <Link to="/hospital-admins/login">Login ➡️</Link>
      </div>
    </div>
  );
};
export default Login;
