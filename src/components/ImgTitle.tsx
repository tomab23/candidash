import { FolderClosed } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ImgTitle = () => {
    const navigate = useNavigate();
    
  return (
    <div className="flex items-center gap-1">
      {/* <img src="/logo2.svg" alt="" className="w-11 h-11" /> */}
      <FolderClosed className="h-7 w-7"/>
      <h1
        className="text-primary text-xl font-semibold hover:cursor-pointer"
        onClick={() => navigate("/home")}
      >
        Candidash
      </h1>
    </div>
  );
};

export default ImgTitle;
