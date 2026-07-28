import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wisdom from "./pages/Wisdom";
import Login from "./pages/Login";
import SideSelection from "./pages/SideSelection";
import UserType from "./pages/UserType";
import Register from "./pages/Register";
import Application from "./pages/Application";
import WorkPreference from "./pages/WorkPreference";
import RequestSubmitted from "./pages/RequestSubmitted";
import ForgotPassword from "./pages/ForgotPassword";
import OtpVerification from "./pages/OtpVerification";
import ResetPassword from "./pages/ResetPassword";
import PasswordResetSuccess from "./pages/PasswordResetSuccess";
import RoleSelection from "./pages/RoleSelection";
import PaymentVerification from "./pages/PaymentVerification";
import SkillSelection from "./pages/SkillSelection";
import LocationSelection from "./pages/LocationSelection";
import DepartmentSelection from "./pages/DepartmentSelection";
import Home from "./pages/Home";
import Auxiliaries from "./pages/Auxiliaries"
import Services from "./pages/Services";
import Event from "./pages/Eventpage";
import Resource from "./pages/Resource";





  



  


  



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/wisdom" element={<Wisdom />} />
        <Route path="/" element={<Home />} />
        <Route path="/auxiliaries" element={<Auxiliaries />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/side-selection" element={<SideSelection />} />
        <Route path="/event" element={<Event />} />
        <Route path="/resource" element={<Resource />} />

        <Route path="/user-type" element={<UserType />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-details" element={<Application />} />
        <Route path="/work-preference" element={<WorkPreference />} />
        <Route path="/request-submitted" element={<RequestSubmitted />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/password-reset-success" element={<PasswordResetSuccess />} />
        <Route path="/role-selection" element={<RoleSelection />} />
        <Route path="/payment-verification" element={<PaymentVerification />} />
        <Route path="/skill-selection" element={<SkillSelection />} />
        <Route path="/location-selection" element={<LocationSelection />} />
        <Route path="/department-selection" element={<DepartmentSelection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;