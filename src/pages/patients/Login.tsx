import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../../components/forms/LoginForm";
import { login } from "../../apiRoutes/patient";
import { saveLocally } from "../../utils/localStorage";
import { currentUserActions } from "../../store/currentUser";
import { ILoginResponse } from "../../interfaces/auth";
import { useAppDispatch } from "../../App";
import { patientBgImg } from "../../assets/images/images";
// login page -- Super admin
function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  //   login handler will be called after successful login to store the data
  const loginHandler = (token: string, data: ILoginResponse): void => {
    saveLocally(token, data, "patient");
    dispatch(
      currentUserActions.login({
        token,
        currentUser: data,
        role: "patient",
      })
    );
    // after above function navigate to the dashboard
    navigate("/");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${patientBgImg})`,
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="flex flex-col bg-[top_right_-20rem] md:bg-center bg-fixed w-full"
    >
      <div className="parent-container lg:max-w-md sm:w-[75vw] w-[90vw] bg-white p-10 rounded-md shadow-4xl mt-[120px] mx-auto">
        <h2 className="mb-6 text-center text-xl font-bold tracking-wide text-primary">
          WELCOME BACK !
        </h2>
        {/* onsubmit login will make a post request to the server  */}
        <LoginForm onSubmit={login} loginHandler={loginHandler} />
        <div className="ml-auto text-sm pt-1 px-2">
          <span className="text-[14px] font-medium">
            Don't have an account?{" "}
          </span>
          <Link to="/patients/signup">Register ➡️</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
