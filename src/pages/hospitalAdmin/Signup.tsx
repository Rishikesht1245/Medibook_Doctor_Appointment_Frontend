import { Link } from "react-router-dom";
import { signup } from "../../apiRoutes/hospitalAdmin";
import { superAdminBgImg } from "../../assets/images/images";
import HospitalRegisterForm from "../../components/forms/HospitalRegisterForm";

signup;
const Signup = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${superAdminBgImg})`,
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="flex flex-col bg-[top_right_-20rem] md:bg-center bg-fixed w-full"
    >
      <div className=" md:w-[80vw] w-[95vw] flex flex-col shadow-xl bg-white md:p-10 p-3 rounded-md shadow-4xl my-[120px] mx-auto">
        <h2 className="mb-6 text-center text-xl font-bold tracking-wide text-primary">
          WELCOME TO MEDIBOOK !
        </h2>
        {/* onsubmit login will make a post request to the server  */}
        <HospitalRegisterForm onSubmit={signup} />
        <div className="ml-auto text-sm pt-1 px-2">
          <span className="text-[14px] font-medium">Already Registered? </span>
          <Link to="/hospital-admins/login"> Login➡️</Link>
        </div>
      </div>
    </div>
  );
};
export default Signup;
