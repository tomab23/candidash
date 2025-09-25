import HomePage from "@/pages/HomePage";
import ProfilePage from "@/pages/ProfilePage";
import { Route, Routes } from "react-router-dom";
import SettingsPage from "@/pages/SettingsPage";
import PrivateRoute from "./PrivatesRoute";
import ForgotPasswordPage from "@/pages/auth/ForgotPasswordPage";
import AuthPage from "@/pages/auth/AuthPage";
import CandidaturePage from "@/pages/CandidaturePage";
import ArchivesPage from "@/pages/ArchivesPage";
import UpdatesPages from "@/pages/UpdatesPages";
import NotFoundPage from "@/pages/NotFoundPage";
import ContactPage from "@/pages/ContactPage";

const RouterApp = () => {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route path="/" element={<AuthPage />} />
      <Route path="/register" element={<AuthPage register />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/updates" element={<UpdatesPages />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/*" element={<NotFoundPage />} />
      {/* PRIVATE */}
      <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
      <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
      <Route path="/settings" element={<PrivateRoute><SettingsPage /></PrivateRoute>} />
      <Route path="/archives" element={<PrivateRoute><ArchivesPage /></PrivateRoute>} />
      <Route path="/candidature" element={<PrivateRoute><CandidaturePage edit={false} /></PrivateRoute>} />
      <Route path="/candidature/:id" element={<PrivateRoute><CandidaturePage edit={true} /></PrivateRoute>} />
      {/* TEST */}
    </Routes>
  );
};

export default RouterApp;
