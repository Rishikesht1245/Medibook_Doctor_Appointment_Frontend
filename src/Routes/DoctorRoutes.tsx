import { Route, Routes } from "react-router-dom";
import Login from "../pages/doctors/Login";
import Doctor from "../layouts/Doctor";

const DoctorRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Doctor />}>
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};
export default DoctorRoutes;
