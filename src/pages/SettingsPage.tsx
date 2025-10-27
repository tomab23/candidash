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
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import PublicForm from "@/components/profile/PublicForm";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Status,
  StatusIndicator,
  StatusLabel,
} from "@/components/ui/shadcn-io/status";

const SettingsPage = () => {
  const { t } = useTranslation();
  const { removeUser } = useCandidature();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [del, setDel] = useState<boolean>(false);

  const [open, setOpen] = useState<boolean>(false);

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

        {/* PUBLIC & DELETE */}
        <div className="mt-10 flex flex-col gap-60 max-sm:gap-20">
          <div>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle className="flex gap-2 items-center">
                  <p className="max-sm:text-xs">Gestion de votre profil public</p>
                  <Status status={open ? "public" : "private"}>
                    <StatusIndicator />
                    <StatusLabel />
                  </Status>
                </CardTitle>
                <CardAction>
                  <div className="flex items-center gap-1.5">
                    <Label htmlFor="terms" className="max-sm:text-xs">Public</Label>
                    <Checkbox id="terms" onClick={() => setOpen(!open)} />
                  </div>
                </CardAction>
              </CardHeader>
              <CardContent className="">
                <PublicForm open={open} />
              </CardContent>
            </Card>
          </div>

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
