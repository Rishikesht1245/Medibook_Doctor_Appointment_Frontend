import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../../components/forms/LoginForm";
import { login } from "../../apiRoutes/superAdmin";
import { saveLocally } from "../../utils/localStorage";
import { currentUserActions } from "../../store/currentUser";
import { ILoginResponse } from "../../interfaces/auth";
import { AppDispatch } from "../../config/store";
import { useDispatch } from "react-redux";

// login page -- Super admin
function Login() {
  const dispatch: AppDispatch = useDispatch();
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
    navigate("/chief-wardens/dashboard");
  };

  return (
    <div className="parent-container lg:max-w-md">
      <h2 className="mb-6">Super Admin Login</h2>
      {/* onsubmit login will make a post request to the server  */}
      <LoginForm onSubmit={login} loginHandler={loginHandler} />
      <div className="ml-auto text-sm pt-1 px-2">
        <Link to="/hospitals/login">Hospital Login</Link>
      </div>
    </div>
  );
}

export default Login;
