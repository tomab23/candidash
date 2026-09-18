import LanguageDropdown from "@/components/LanguageDropdown";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Contenu from "@/helpers/Contenu";
import { useCandidature } from "@/hooks/useCandidature";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import PublicCard from "@/components/profile/PublicCard";
import { Separator } from "@/components/ui/separator";
import DialogDeleteAllNotes from "@/components/dialogs/DialogDeleteAllNotes";

const SettingsPage = () => {
  const { t } = useTranslation();
  const { removeUser } = useCandidature();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [del, setDel] = useState<boolean>(false);

  const deleteUser = () => {
    removeUser();
    logout();
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <Contenu>
        <Header title={t("TITLE.SETTINGS")} />
        <div className="flex gap-4 items-center justify-center mt-2">
          <h2 className="text-xl">{t("LANGUAGE")}</h2>
          <LanguageDropdown />
        </div>

        <div className="mt-10 max-sm:mt-5">
          <PublicCard />
        </div>

        {/* DANGER ZONE */}

        <div className="flex items-center gap-5 max-sm:gap-2.5 mt-20 max-sm:mt-10">
          <p className="text-xl">{t("RISK")}</p>
          <Separator className="flex-1" color="red" />
        </div>

        <div className="mt-5 flex items-center justify-between max-sm:flex-col max-sm:gap-20 max-sm:mb-20">
          <DialogDeleteAllNotes />
          <div className="flex flex-col justify-center items-center gap-5 ">
            <Button variant={"destructive"} onClick={() => setDel(true)}>
              {t("BUTTON.USER.DELETE")}
            </Button>
            {del && (
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">
                      {t("BUTTON.USER.DELETE")} ?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex gap-10">
                    <Button onClick={() => setDel(false)}>
                      {t("BUTTON.CANCEL")}
                    </Button>
                    <Button
                      variant={"destructive"}
                      onClick={() => deleteUser()}
                    >
                      {t("BUTTON.USER.DELETE")}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </Contenu>
    </div>
  );
};

export default SettingsPage;
