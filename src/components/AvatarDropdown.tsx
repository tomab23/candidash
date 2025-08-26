import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Archive, Home, List, LogOut, Settings, User, UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useAuth } from "@/context/AuthContext";

const AvatarDropdown = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          onClick={() => navigate("/profile")}
        >
          <UserRound className="stroke-primary" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-background" align="end">
        {/* My Account */}
        <DropdownMenuLabel>{user?.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => navigate("/home")}>
          <Home className="h-4 w-4" /> Home
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => navigate("/profile")}>
          <User className="h-4 w-4" /> Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => navigate("/settings")}>
          <Settings className="h-4 w-4" /> Settings
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => navigate("/archives")}>
          <Archive className="h-4 w-4" /> Archive
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => navigate("/updates")}>
          <List className="h-4 w-4"/> Updates
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem className="text-destructive" onClick={handleLogout}>
          <LogOut className="h-4 w-4 stroke-destructive" /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarDropdown;
