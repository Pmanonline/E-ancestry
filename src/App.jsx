import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Home from "./pages/Home";
import HomeDashBoard from "./pages/DashBoard_pages/MyDashBoard";
import AddSales from "./pages/DashBoard_pages/AddSales";
import LoginScreen from "./pages/login";
import Register from "./pages/register";
import RegisterBusiness from "./pages/RegisterBusiness";
import Profile from "./pages/profile";
import ForgotPassword from "./pages/forgotPassword";
import ResetPasswordPage from "./pages/DashBoard_pages/resetPassword";
import VerifyOtpPage from "./pages/verifyOTP";

import ProtectedRoute from "./components/routing/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<Register />} />
        <Route path="/RegisterBusiness" element={<RegisterBusiness />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/ForgotPassword" element={<ForgotPassword />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/MyDashBoard" element={<HomeDashBoard />} />
            <Route path="/AddSales" element={<AddSales />} />
          </Route>
        </Route>

        {/* Home route as the default */}
        <Route path="/" element={<Home />} />

        {/* Reset password route */}
        <Route path="/ResetPassword/" element={<ResetPasswordPage />} />
        <Route path="/VerifyOtpPage/" element={<VerifyOtpPage />} />
      </Routes>
    </Router>
  );
}
