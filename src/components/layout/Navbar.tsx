import { UserRound } from "lucide-react"
import { ModeToggle } from "../mode-toggle"
import { Button } from "../ui/button"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className="flex justify-between px-2 h-16 bg-background">
        <div className="flex items-center">
            <img src="/logo2.svg" alt="" className="w-11 h-11" />
            <h1 className="text-primary text-xl font-semibold">Candidash</h1>
        </div>

        <div className="flex justify-center items-center gap-3">
            <ModeToggle />
                    <Button variant="outline" size="icon" onClick={() => navigate("/profile")}>
            <UserRound className="stroke-primary" />
        </Button>
        </div>
    </div>
  )
}

export default Navbar