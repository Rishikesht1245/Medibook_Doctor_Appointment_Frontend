import { Routes, Route } from "react-router-dom";
import Login from "../pages/superAdmin/Login";
import SuperAdmin from "../layouts/SuperAdmin";
import Dashboard from "../pages/superAdmin/Dashboard";

function SuperAdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SuperAdmin />}>
        <Route path="login" element={<Login />} />

        {/* protected routes need to be implemented */}
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default SuperAdminRoutes;
