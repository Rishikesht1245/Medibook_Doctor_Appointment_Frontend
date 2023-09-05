import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import SuperAdminRoutes from "./Routes/superAdmin";
import { Toaster } from "react-hot-toast";
import { getLocalData } from "./utils/localStorage";

function App() {
  const currentUser = getLocalData();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/super-admin/*" element={<SuperAdminRoutes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
