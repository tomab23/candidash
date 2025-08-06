import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AvatarDropdown = () => {
    const navigate = useNavigate();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none outline-1 outline-secondary focus:outline-1 focus:outline-secondary rounded-full hover:cursor-pointer">
        <Avatar>
          <AvatarFallback>
            <img
              src="https://api.dicebear.com/9.x/shapes/svg?seed=Toma"
              alt="avatar"
            />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-background">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => navigate('/profile')}>
          <User className="h-4 w-4" /> Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="h-4 w-4" /> Settings
        </DropdownMenuItem>
        <DropdownMenuItem className="text-destructive" onClick={() => navigate('/')}>
          <LogOut className="h-4 w-4 stroke-destructive"/> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarDropdown;
