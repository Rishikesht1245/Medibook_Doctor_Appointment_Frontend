import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../../components/forms/LoginForm";
import { login } from "../../apiRoutes/hospitalAdmin";
import { saveLocally } from "../../utils/localStorage";
import { currentUserActions } from "../../store/currentUser";
import { ILoginResponse } from "../../interfaces/auth";
import { useAppDispatch } from "../../App";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginHandler = (token: string, data: ILoginResponse): void => {
    saveLocally(token, data, "hospitalAdmin");

    dispatch(
      currentUserActions.login({
        token,
        currentUser: data,
        role: "hospitalAdmin",
      })
    );

    navigate("/hospital-admins/dashboard");
  };

  return (
    <div className="lg:max-w-md sm:w-[75vw] w-[90vw] bg-white p-10 rounded-md shadow-4xl">
      <h2 className="mb-6 text-center text-xl font-bold tracking-wide text-primary">
        HOSPITAL ADMIN LOGIN
      </h2>
      {/* onsubmit login will make a post request to the server  */}
      <LoginForm onSubmit={login} loginHandler={loginHandler} />
      <div className="ml-auto text-sm pt-1 px-2 flex flex-row justify-between items-center">
        <Link to="/hospital-admins/signup"> Register new Hospital 🏥</Link>
        <span> or </span>
        <Link to="/super-admins/login"> Super Admin Login ➡️</Link>
      </div>
    </div>
  );
};
export default Login;
