import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ICurrentUser } from "../../interfaces/auth";

// props interface
interface HeaderLinkProps {
  currentUser: ICurrentUser;
}

// types to store the links and its name  -- its an array of objects with two properties
type currentLinks =
  | {
      name: string;
      link: string;
    }[]
  | [];

function HeaderLinks({ currentUser }: HeaderLinkProps) {
  const [currentLinks, setCurrentLinks] = useState<currentLinks>([]);

  // setting up the links to be displayed on the navbar based on the role of the user
  useEffect(() => {
    let headerLinks: currentLinks = [];
    switch (currentUser?.role) {
      case "superAdmin": {
        headerLinks = [
          {
            name: "Dashboard",
            link: "/super-admin/dashboard",
          },
          {
            name: "Doctors",
            link: "/super-admin/doctors",
          },
          {
            name: "Patients",
            link: "/super-admin/patients",
          },
          {
            name: "Appointments",
            link: "/super-admin/appointments",
          },
          {
            name: "Chats",
            link: "/super-admin/chats",
          },
        ];
        break;
      }
      case "hospitalAdmin": {
        headerLinks = [
          {
            name: "Dashboard",
            link: "/hospital-admin/dashboard",
          },
          {
            name: "Doctors",
            link: "/hospital-admin/doctors",
          },
          {
            name: "Patients",
            link: "/hospital-admin/patients",
          },
          {
            name: "Appointments",
            link: "/hospital-admin/appointments",
          },
          {
            name: "Chats",
            link: "/hospital-admin/chats",
          },
        ];
        break;
      }
      case "doctor": {
        headerLinks = [
          {
            name: "Dashboard",
            link: "/doctor/dashboard",
          },
          {
            name: "Patients",
            link: "/hospital-admin/patients",
          },
          {
            name: "Appointments",
            link: "/hospital-admin/appointments",
          },
          {
            name: "Chats",
            link: "/hospital-admin/chats",
          },
        ];
        break;
      }
      case "patient": {
        headerLinks = [
          {
            name: "Home",
            link: "/patients/home",
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
        break;
      }
    }

    setCurrentLinks(headerLinks);
  }, []);

  const displayLinks =
    currentLinks &&
    currentLinks.map((item: { name: string; link: string }) => (
      <NavLink
        className={`text-sm text-primary font-black ${
          item?.name === "Chat" && "relative"
        }`}
        style={(isActive) => ({
          textDecoration: isActive ? "underline" : "",
          textUnderlineOffset: isActive ? "0.4rem" : "",
          color: isActive ? "#05419e" : "$00255f",
        })}
        to={item?.link}
        key={item?.name}
      >
        {item?.name}
      </NavLink>
    ));

  return <>{displayLinks}</>;
}

export default HeaderLinks;
