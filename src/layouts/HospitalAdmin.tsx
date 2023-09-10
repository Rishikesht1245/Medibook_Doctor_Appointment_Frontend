import AdminFooter from "../components/layouts/AdminFooter";
import { Outlet } from "react-router-dom";
import Header from "../components/layouts/Header";
import { superAdminBgImg } from "../assets/images/images";

const HospitalAdmin = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${superAdminBgImg})`,
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="flex flex-col md:bg-center bg-fixed"
    >
      <Header role="hospitalAdmin" />
      <div className="flex justify-center items-center grow">
        <Outlet />
      </div>
      <AdminFooter />
    </div>
  );
};
export default HospitalAdmin;
