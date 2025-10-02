import LanguageDropdown from "@/components/LanguageDropdown";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Contenu from "@/helpers/Contenu";
import { useCandidature } from "@/hooks/useCandidature";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SettingsPage = () => {
  const { t } = useTranslation();
  const { removeUser } = useCandidature();
  const navigate = useNavigate();
  const [del, setDel] = useState<boolean>(false);

    const deleteUser = () => {
    removeUser();
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
        {/* <p>profil public : Oui / Non | radio ?</p> */}


                <div className="flex flex-col justify-center items-center gap-5 mt-20">
          <Button variant={"destructive"} onClick={() => setDel(true)}>
            {t("BUTTON.USER.DELETE")}
          </Button>
          {del && (
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">{t("BUTTON.USER.DELETE")} ?</CardTitle>
                </CardHeader>
                <CardContent className="flex gap-10">
                  <Button onClick={() => setDel(false)}>
                    {t("BUTTON.CANCEL")}
                  </Button>
                  <Button variant={"destructive"} onClick={() => deleteUser()}>
                    {t("BUTTON.USER.DELETE")}
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </Contenu>
    </div>
  );
};

export default SettingsPage;
