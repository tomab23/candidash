import HomePage from "@/pages/HomePage";
import ProfilePage from "@/pages/ProfilePage";
import { Route, Routes } from "react-router-dom";
import SettingsPage from "@/pages/SettingsPage";
import PrivateRoute from "./PrivatesRoute";
import TestPage from "@/pages/TestPage";
import ForgotPasswordPage from "@/pages/auth/ForgotPasswordPage";
import AuthPage from "@/pages/auth/AuthPage";

const RouterApp = () => {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route path="/" element={<AuthPage />} />
      <Route path="/register" element={<AuthPage register />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      {/* PRIVATE */}
      <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
      <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
      <Route path="/settings" element={<PrivateRoute><SettingsPage /></PrivateRoute>} />
      {/* TEST */}
      <Route path="/test/:id" element={<PrivateRoute><TestPage /></PrivateRoute>} />
    </Routes>
  );
};

export default RouterApp;
