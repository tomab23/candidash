import Navbar from "@/components/layout/Navbar"
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
// import { Navigate } from "react-router-dom";


const HomePage = () => {

  const { user, logout } = useAuth()

  console.log("user : ", user?.email);
  

  return (
    <div>
        <Navbar />

        <h1>Bonjour : {user?.email}</h1>
        <Button onClick={logout}>Se déconnecter</Button>
    </div>
  )
}

export default HomePage