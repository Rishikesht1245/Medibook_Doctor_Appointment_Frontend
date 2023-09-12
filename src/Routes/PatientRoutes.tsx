import { Route, Routes } from "react-router-dom";
import Patient from "../layouts/Patient";
import Login from "../pages/patients/Login";
import Signup from "../pages/patients/Signup";
import Otp from "../pages/patients/Otp";

const PatientRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Patient />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route
          path="signup/otp-verification/:id"
          element={<Otp role="patient" />}
        />
      </Route>
    </Routes>
  );
};
export default PatientRoutes;
