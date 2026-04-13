import { ModeToggle } from "../mode-toggle";
import AvatarDropdown from "../AvatarDropdown";
import ImgTitle from "../ImgTitle";
import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-muted">
      <nav className="h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <ImgTitle />
            {/* Desktop Menu */}
            {/* <NavMenu className="hidden md:block" /> */}
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" onClick={() => navigate("/search")}><SearchIcon /></Button>
            <ModeToggle />
            <AvatarDropdown />
            {/* Mobile Menu */}
            {/* <div className="md:hidden"><NavigationSheet /></div> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
