import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import SuperAdminRoutes from "./Routes/superAdmin";
import { getLocalData } from "./utils/localStorage";
import { AppDispatch, RootState } from "./config/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import Home from "./pages/patients/Home";
import PatientRoutes from "./Routes/PatientRoutes";
import HospitalAdminRoutes from "./Routes/HospitalAdminRoutes";
import DoctorRoutes from "./Routes/DoctorRoutes";
import "./index.css";

function App() {
  const currentUser = getLocalData();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/super-admins/*" element={<SuperAdminRoutes />} />
          <Route path="/hospital-admins/*" element={<HospitalAdminRoutes />} />
          <Route path="/doctors/*" element={<DoctorRoutes />} />
          <Route path="/patients/*" element={<PatientRoutes />} />
          {/* home page route */}
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

// TS for configuring redux :
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default App;
