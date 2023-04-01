import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Component/Dashboard";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Register from "./Component/Register";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./Component/Admin";
import AllUser from "./Component/AllUser";
import Approveidentity from "./Component/Approveidentity/Approveidentity";
import CompanySicreat from "./Component/CompanySicreat";
import Dispute from "./Component/Dispute/Dispute";
import General from "./Component/Genarel";
import Marketing from "./Component/MarketingAnalysis/Marketing";
import Moderator from "./Component/Moderator";
import Navbar from "./Component/Navbar/Navbar";
import PaymentVerifyMainPage from "./Component/PaymentVerification/PaymentVerifyMainPage";
import Permission from "./Component/Permission/Permission";
import Test from "./Component/Test";
import TotalUser from "./Component/TotalUser";
import RequireAuth from "./require/RequireAuth";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route
          path="/"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<Home />} />
          <Route path="/paymentVerify" element={<PaymentVerifyMainPage />} />
          <Route path="/approveidentity" element={<Approveidentity />} />
          <Route path="/userpermission" element={<Permission />} />
          <Route path="/dispute" element={<Dispute />} />
          <Route path="/analysis" element={<Marketing />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/sickertAdmin" element={<CompanySicreat />} />
          <Route path="/moderator" element={<Moderator />} />
          <Route path="/publicUser" element={<AllUser />} />
          <Route path="/test" element={<Test />} />
          <Route path="/totalUser" element={<TotalUser />} />
          <Route path="/general" element={<General />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
