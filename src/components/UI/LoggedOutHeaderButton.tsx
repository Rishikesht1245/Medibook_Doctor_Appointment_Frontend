import { Link } from "react-router-dom";
import { BsPersonPlusFill } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";

interface LoggedOutHeaderButtonProps {
  role: "superAdmin" | "hospitalAdmin" | "doctor" | "patient";
}

function LoggedOutHeaderButton({ role }: LoggedOutHeaderButtonProps) {
  return (
    <Link to={role === "doctor" ? "/patients/login" : "/doctors/login"}>
      <div className="flex gap-6">
        <button className="header-btn lg:mr-5">
          {/* <img
            className="h-7 md:ml-2 brightness-0"
            style={{ mixBlendMode: "color" }}
            src={role === "doctor" ? BsPersonPlusFill : FaUserDoctor}
            alt="icon"
          /> */}

          {role === "doctor" ? <BsPersonPlusFill /> : <FaUserDoctor />}
          <span className="font-medium text-xs text-center lg:text-base lg:block md:mr-3 ml-2">
            {role === "doctor" ? "Patient" : "Doctor"}
          </span>
        </button>
      </div>
    </Link>
  );
}

export default LoggedOutHeaderButton;
