import { Link } from "react-router-dom";
import SignupForm from "../../components/forms/SignupForm";
import { signup } from "../../apiRoutes/patient";
import { patientBgImg } from "../../assets/images/images";

// signup page -- Patient
function Signup() {
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
      <div className="parent-container lg:max-w-md sm:w-[75vw] w-[90vw] bg-white p-10 rounded-md shadow-4xl my-[120px] mx-auto">
        <h2 className="mb-6 text-center text-xl font-bold tracking-wide text-primary">
          WELCOME TO MEDIBOOK !
        </h2>
        {/* onsubmit login will make a post request to the server  */}
        <SignupForm onSubmit={signup} />
        <div className="ml-auto text-sm pt-1 px-2">
          <span className="text-[14px] font-medium">
            Already have an account?{" "}
          </span>
          <Link to="/patients/login"> Login➡️</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
