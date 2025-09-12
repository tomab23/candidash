import { ModeToggle } from "../mode-toggle";
import AvatarDropdown from "../AvatarDropdown";
import ImgTitle from "../ImgTitle";

const Navbar = () => {

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
