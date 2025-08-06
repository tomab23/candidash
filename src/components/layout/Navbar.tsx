import { ModeToggle } from "../mode-toggle";
import { useNavigate } from "react-router-dom";
import AvatarDropdown from "../AvatarDropdown";

type Props = {
  modeToggle: boolean;
};

const Navbar = ( props : Props ) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between px-2 h-16 bg-background">
      <div className="flex items-center">
        <img src="/logo2.svg" alt="" className="w-11 h-11" />
        <h1 className="text-primary text-xl font-semibold hover:cursor-pointer" onClick={() => navigate('/home')}>Candidash</h1>
      </div>

      <div className="flex justify-center items-center gap-3">
        {props.modeToggle && <ModeToggle />}
        <AvatarDropdown />
      </div>
    </div>
  );
};

export default Navbar;
