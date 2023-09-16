import { Route, Routes } from "react-router-dom";
import Login from "../pages/hospitalAdmin/Login";
import HospitalAdmin from "../layouts/HospitalAdmin";
import Signup from "../pages/hospitalAdmin/Signup";
import Otp from "../components/forms/Otp";

const HospitalAdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HospitalAdmin />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route
          path="signup/otp-verification/:id"
          element={<Otp role="hospitalAdmin" />}
        />
      </Route>
    </Routes>
  );
};
export default HospitalAdminRoutes;
