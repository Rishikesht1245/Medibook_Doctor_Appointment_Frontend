import React from "react";
import { Link } from "react-router-dom";
import { hospitalIcon } from "../../assets/icons/icons";
import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

const socialLinks: { path: string; icon: React.ReactNode }[] = [
  {
    path: "https://www.youtube.com",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://github.com/Rishikesht1245",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com/rishi.kesh_t/",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com/in/rishikesh-t-4896a5203/",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLinks01: { path: string; display: string }[] = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/",
    display: "Services",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/",
    display: "Blog",
  },
];

const quickLinks02: { path: string; display: string }[] = [
  {
    path: "/patients/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/patients/doctors",
    display: "Request an Appointment",
  },
  {
    path: "/patients/doctors",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Get Opinion",
  },
];

const quickLinks03: { path: string; display: string }[] = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/",
    display: "Contact",
  },
];

const PatientFooter = () => {
  const year: number = new Date().getFullYear();
  return (
    <footer className="pb-6 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
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
            <span className="text-[16px] leading-7 font-[400] text-slate-700 mt-4">
              All rights reserved © {year} |{" "}
            </span>
            <a
              href="https://rishikesht1245.github.io/Rishikesh_website/"
              target="_blank"
              rel="noreferrer"
              className="text-[16px] leading-7 font-[400] text-slate-700 mt-4"
            >
              Rishikesh T
            </a>

            <div className="flex gap-5 mt-3">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#181a1e] rounded-full flex items-center justify-center group hover:bg-blue-700 hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* quick links 1 */}
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-slate-700">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((link, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={link.path}
                    className="text-[16px] leading-7 font-[400] text-slate-700"
                  >
                    {link.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* quick links 2 */}
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-slate-700">
              I want to:
            </h2>
            <ul>
              {quickLinks02.map((link, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={link.path}
                    className="text-[16px] leading-7 font-[400] text-slate-700"
                  >
                    {link.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* quick links 3 */}
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-slate-700">
              Support
            </h2>
            <ul>
              {quickLinks03.map((link, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={link.path}
                    className="text-[16px] leading-7 font-[400] text-slate-700"
                  >
                    {link.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default PatientFooter;
