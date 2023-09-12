import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../../components/forms/LoginForm";
import { login } from "../../apiRoutes/superAdmin";
import { saveLocally } from "../../utils/localStorage";
import { currentUserActions } from "../../store/currentUser";
import { ILoginResponse } from "../../interfaces/auth";
import { useAppDispatch } from "../../App";

// login page -- Super admin
function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //   login handler will be called after successful login to store the data
  const loginHandler = (token: string, data: ILoginResponse): void => {
    saveLocally(token, data, "superAdmin");
    dispatch(
      currentUserActions.login({
        token,
        currentUser: data,
        role: "superAdmin",
      })
    );
    // after above function navigate to the dashboard
    navigate("/super-admins/dashboard");
  };

  return (
    <div className="parent-container lg:max-w-md sm:w-[75vw] w-[90vw] bg-white p-10 rounded-md shadow-4xl">
      <h2 className="mb-6 text-center text-xl font-bold tracking-wide text-primary">
        SUPER ADMIN LOGIN
      </h2>
      {/* onsubmit login will make a post request to the server  */}
      <LoginForm onSubmit={login} loginHandler={loginHandler} />
      <div className="ml-auto text-sm pt-1 px-2">
        <Link to="/hospital-admins/login">Hospital Login ➡️</Link>
      </div>
    </div>
  );
}

export default Login;
