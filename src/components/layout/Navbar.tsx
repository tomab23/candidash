import { ModeToggle } from "../mode-toggle";
import AvatarDropdown from "../AvatarDropdown";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-muted">
      <nav className="h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <div className="flex items-center">
              <img src="/logo2.svg" alt="" className="w-11 h-11" />
              <h1 className="text-primary text-xl font-semibold hover:cursor-pointer" onClick={() => navigate("/home")}>Candidash</h1>
            </div>
            {/* Desktop Menu */}
            {/* <NavMenu className="hidden md:block" /> */}
          </div>
          <div className="flex items-center gap-3">
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
