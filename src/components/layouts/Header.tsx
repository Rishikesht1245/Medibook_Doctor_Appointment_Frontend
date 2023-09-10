import { Link } from "react-router-dom";
import LoggedInHeaderButton from "../UI/LoggedInHeaderButton";
import LoggedOutHeaderButton from "../UI/LoggedOutHeaderButton";
import { ICurrentUser } from "../../interfaces/auth";
import HeaderLinks from "./HeaderLinks";
import { useAppSelector } from "../../App";
import { hospitalIcon } from "../../assets/icons/icons";

interface HeaderProps {
  role: "superAdmin" | "hospitalAdmin" | "doctor" | "patient";
}

function Header({ role }: HeaderProps) {
  // accessing current user from store
  const currentUser = useAppSelector<ICurrentUser | null>(
    (state) => state.currentUser
  );

  return (
    <header className="h-16 bg-white flex shadow-lg">
      <div className="h-16 container flex my-auto justify-between gap-1 items-center ">
        <Link to="/">
          <span className="flex items-center gap-1">
            <img
              src={hospitalIcon}
              alt="Hospital Icon"
              className="w-[40px] h-[40px]"
              style={{ mixBlendMode: "multiply", borderRadius: "50%" }}
            />
            <h1 className="text-xl font-bold  text-red-500">Medibook</h1>
          </span>
        </Link>
      </div>
      <div className="flex gap-7 items-center z-10">
        <div className="hidden lg:flex gap-7">
          {currentUser?.currentUser && (
            <HeaderLinks currentUser={currentUser} />
          )}
        </div>
        {!currentUser ? (
          <LoggedOutHeaderButton role={role} />
        ) : (
          <LoggedInHeaderButton
            role={role}
            // checking if current user is defined or not empty
            currentUser={currentUser && currentUser}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
