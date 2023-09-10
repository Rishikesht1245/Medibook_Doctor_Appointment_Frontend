import { Routes, Route } from "react-router-dom";
import Login from "../pages/superAdmin/Login";
import SuperAdmin from "../layouts/SuperAdmin";

function SuperAdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SuperAdmin />}>
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default SuperAdminRoutes;
