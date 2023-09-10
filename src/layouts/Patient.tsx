import PatientFooter from "../components/layouts/PatientFooter";
import { Outlet } from "react-router-dom";
import PatientHeader from "../components/layouts/PatientHeader";

const Patient = () => {
  return (
    <div className="flex flex-col md:bg-center bg-fixed">
      <PatientHeader />
      <div className="flex justify-center items-center grow">
        <Outlet />
      </div>
      <PatientFooter />
    </div>
  );
};
export default Patient;
