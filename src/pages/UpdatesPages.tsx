import Navbar from "@/components/layout/Navbar";
import Contenu from "@/helpers/Contenu";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ImgTitle from "@/components/ImgTitle";
import { useTranslation } from "react-i18next";
import { Version } from "@/models/Version";
import UpdateInfo from "@/components/UpdateInfo";
import UpdatesList from "@/components/UpdatesList";
import Header from "@/components/layout/Header";

const UpdatesPages = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  // add - correction - update - delete

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
      <Contenu>
        <Header title={t("TITLE.UPDATES")}  />
        <p className=" text-center my-5">
          <i>{t("VERSION")}</i> : <b>{Version}</b>
        </p>
        <UpdateInfo />

        {/* CARD UPDATE */}
        <UpdatesList />
      </Contenu>
    </div>
  );
};

export default UpdatesPages;
