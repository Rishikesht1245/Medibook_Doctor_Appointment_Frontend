import { Outlet } from "react-router-dom";
import { superAdminBgImg } from "../assets/images/images";
import Header from "../components/layouts/Header";
import AdminFooter from "../components/layouts/AdminFooter";

const SuperAdmin = () => {
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
      <Header role="superAdmin" />
      <div className="flex justify-center items-center grow">
        <Outlet />
      </div>
      <AdminFooter />
    </div>
  );
};
export default SuperAdmin;
