import Navbar from "@/components/layout/Navbar";
import Contenu from "@/helpers/Contenu";
import { useAuth } from "@/context/AuthContext";
import { CircleArrowUp, Plus, Trash2, Wrench } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ImgTitle from "@/components/ImgTitle";

const UpdatesPages = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      {user ? (
        <Navbar />
      ) : (
        <div className="bg-muted">
          <nav className="h-16 bg-background border-b">
            <div className="h-full flex items-center justify-between max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-8">
                <ImgTitle />
              </div>
              <div className="flex items-center gap-3">
                <Button onClick={() => navigate("/register")} className="">
                  Inscription
                </Button>
                <Button onClick={() => navigate("/")} className="">
                  Connexion
                </Button>
              </div>
            </div>
          </nav>
        </div>
      )}
      <h1 className="text-center text-2xl font-bold mt-2 mb-5">Updates</h1>
      <Contenu>
        <div className="flex justify-center items-center gap-10">
          <p className="flex items-center gap-1">
            <Plus className="w-5 h-5 dark:stroke-green-400 stroke-green-600" />{" "}
            Ajout
          </p>
          <p className="flex items-center gap-1">
            {" "}
            <Wrench className="w-5 h-5 dark:stroke-orange-400 stroke-orange-600" />
            Corection
          </p>
          <p className="flex items-center gap-1">
            {" "}
            <CircleArrowUp className="w-5 h-5 dark:stroke-blue-400 stroke-blue-600" />{" "}
            Mise a jour
          </p>
          <p className="flex items-center gap-1">
            <Trash2 className="w-5 h-5 dark:stroke-red-400 stroke-red-600" />
            Suppression
          </p>
        </div>
      </Contenu>
    </div>
  );
};

export default UpdatesPages;
