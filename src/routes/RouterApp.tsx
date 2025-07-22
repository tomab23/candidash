import HomePage from "@/pages/HomePage"
import LoginPage from "@/pages/LoginPage"
import ProfilePage from "@/pages/ProfilePage"
import RegisterPage from "@/pages/RegisterPage"
import { Route, Routes } from "react-router-dom"


const RouterApp = () => {
  return (
          <Routes>
    {/* PUBLIC */}
    <Route path="/" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/home" element={<HomePage />} />
    <Route path="/profile" element={<ProfilePage />} />
    {/* PRIVATE */}
  </Routes>
  )
}

export default RouterApp