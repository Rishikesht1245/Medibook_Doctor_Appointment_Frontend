import { Link } from "react-router-dom";
import { hospitalIcon } from "../../assets/icons/icons";
import { NavLink } from "react-router-dom";
import LoggedOutHeaderButton from "../UI/LoggedOutHeaderButton";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../App";
import LoggedInHeaderButton from "../UI/LoggedInHeaderButton";
import { useState } from "react";
import menu from "../../assets/images/menu.svg";
import close from "../../assets/images/close.svg";

const headerLinks: { name: string; link: string }[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Doctors",
    link: "/patients/doctors",
  },
  {
    name: "Appointments",
    link: "/patients/appointments",
  },
  {
    name: "Notifications",
    link: "/patients/notifications",
  },
  {
    name: "Chats",
    link: "/patients/chats",
  },
];

const PatientHeader = () => {
  const currentUser = useAppSelector((state) => state.currentUser);
  const location = useLocation();
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <header className="header flex items-center h-16  mb-[120px] bg-white shadow-lg">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ============== Logo ============== */}
          <Link to="/">
            <span className="flex items-center gap-1">
              <img
                src={hospitalIcon}
                alt="Hospital Icon"
                className="w-[50px] h-[50px]"
                style={{ mixBlendMode: "multiply", borderRadius: "50%" }}
              />
              <h1 className="text-xl font-bold  text-red-500">Medibook</h1>
            </span>
          </Link>

          {/* ================ Menu =============== */}
          <div className="navigation hidden md:flex">
            <ul className="menu flex items-center gap-[2.7rem]">
              {headerLinks.map((item: { name: string; link: string }) => (
                <li key={item.name}>
                  <NavLink
                    to={item.link}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primary text-[16px] leading-7 font-[600]"
                        : "text-black text-[16px] leading-7 font-[500] hover:text-primary"
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* =================== NAV Right  ================= */}
          <div className="flex items-center gap-4">
            <div>
              {currentUser ? (
                <LoggedInHeaderButton currentUser={currentUser} role="patient">
                  <>
                    {headerLinks.map((item: { name: string; link: string }) => (
                      <li key={item.name}>
                        <NavLink
                          to={item.link}
                          className={(navClass) =>
                            navClass.isActive
                              ? "text-primary text-[16px] leading-7 font-[600]"
                              : "text-black text-[16px] leading-7 font-[500] hover:text-primary"
                          }
                        >
                          {item.name}
                        </NavLink>
                      </li>
                    ))}
                  </>
                </LoggedInHeaderButton>
              ) : location?.pathname === "/patients/login" ? (
                <LoggedOutHeaderButton role="patient" />
              ) : (
                <Link className="text-primary font-bold" to={"/patients/login"}>
                  <button className="bg-primary py-1 px-4 text-white font-[600] flex items-center justify-center rounded-md">
                    Login
                  </button>
                </Link>
              )}
            </div>

            {/* Nav links for small devices */}
            {!currentUser && (
              <div className="sm:hidden flex flex-1 justify-end items-center">
                <img
                  src={toggle ? close : menu}
                  alt="Menu bar"
                  className="w-[20px] h-[20px] object-contain"
                  onClick={() => setToggle((prev) => !prev)}
                />

                <div
                  className={`${
                    toggle ? "flex" : "hidden"
                  } p-6 bg-slate-200 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar shadow-xl`}
                >
                  {/* Nav Links */}
                  <ul className="list-none justify-end items-center">
                    {headerLinks.map((link, index) => {
                      return (
                        <li
                          key={link.name}
                          className={`font-poppins  cursor-pointer text-[16px] text-black flex flex-col flex-1 ${
                            index === headerLinks.length - 1 ? "mb-0" : "mb-2"
                          }
                  }`}
                        >
                          <a href={link.link}>{link.name}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default PatientHeader;
