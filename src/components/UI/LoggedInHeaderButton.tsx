import { Link } from "react-router-dom";
import { ICurrentUser } from "../../interfaces/auth";
import { currentUserActions } from "../../store/currentUser";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { defaultProfileImg } from "../../assets/images/images";
import HeaderLinks from "../layouts/HeaderLinks";

// interface for component props
interface LoggedInHeaderButtonProps {
  currentUser: ICurrentUser;
  children?: any;
  role: "superAdmin" | "hospitalAdmin" | "doctor" | "patient";
}

function LoggedInHeaderButton({
  currentUser,
  children,
  role,
}: LoggedInHeaderButtonProps) {
  const dispatch = useDispatch();
  const [dropdown, setDropdown] = useState<boolean>(false);

  const [route, setRoute] = useState<
    "super-admins" | "hospital-admins" | "doctors" | "patients" | ""
  >("");

  // switching to the route based on the role of user
  useEffect(() => {
    switch (role) {
      case "superAdmin":
        setRoute("super-admins");
        break;
      case "hospitalAdmin":
        setRoute("hospital-admins");
        break;
      case "doctor":
        setRoute("doctors");
        break;
      case "patient":
        setRoute("patients");
        break;
    }
  }, []);

  return (
    <div className="group lg:mr-10">
      <div className="hidden lg:block">
        {/* logout button */}
        <Link
          to={`/${route}/login`}
          onClick={() => {
            // making user logout
            dispatch(currentUserActions.logout());
            return toast.success("Logged out", {
              style: { background: "rgb(0,0,0,0.9)", color: "white" },
            });
          }}
          className="invisible px-4 py-2 bg-white rounded-md border-1 text-primary shadow-lg hover:brightness-90 text-sm font-black group-hover:visible absolute z-10 top-12 right-9"
        >
          Logout
        </Link>

        {/* user Profile button */}
        <Link className="relative" to={`/${route}/profile`}>
          <div className="flex gap-6">
            <button className="header-btn w-[125px] flex justify-around">
              <img
                className="h-7 mr-1 rounded-sm"
                src={currentUser?.currentUser?.profilePic || defaultProfileImg}
                alt="Profile"
              />
              <span className="text-xs hidden lg:text-sm lg:block">
                {currentUser?.currentUser?.name.split(" ")[0]}
              </span>
            </button>
          </div>
        </Link>
      </div>

      {/* drop down on smaller screens */}
      <div
        className="lg:hidden relative hover:brightness-100"
        onClick={() => setDropdown((prevState) => !prevState)}
      >
        {/* image will be button on clicking dropdown will show */}
        <img
          className="h-7 mr-1 rounded-sm"
          src={currentUser?.currentUser?.profilePic || defaultProfileImg}
          alt="profile"
        />

        {/* dropdown list container */}
        <div
          className={`${
            !dropdown ? "hidden" : ""
          } flex flex-col gap-2 absolute top-8 right-2 shadow-xl border-1 z-10 bg-white p-3 text-sm text-primary font-black rounded-md`}
        >
          {children}
          <Link to={`/${route}/profile`}>Profile</Link>
          <HeaderLinks currentUser={currentUser} />

          <Link
            to={`/${route}/login`}
            onClick={() => {
              // making user logout
              dispatch(currentUserActions.logout());
              return toast.success("Logged out", {
                style: { background: "rgb(0,0,0,0.9)", color: "white" },
              });
            }}
            className="border-t-2 pt-1 text-red-700"
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoggedInHeaderButton;
