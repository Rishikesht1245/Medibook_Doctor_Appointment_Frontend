import { Routes, Route } from "react-router-dom";
import Login from "../pages/superAdmin/Login";

function SuperAdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default SuperAdminRoutes;
