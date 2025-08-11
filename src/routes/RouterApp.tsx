import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/auth/LoginPage";
import ProfilePage from "@/pages/ProfilePage";
import RegisterPage from "@/pages/auth/RegisterPage";
import { Route, Routes } from "react-router-dom";
import SettingsPage from "@/pages/SettingsPage";
import PrivateRoute from "./PrivatesRoute";

const RouterApp = () => {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* PRIVATE */}
      <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
      <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
};

export default RouterApp;
