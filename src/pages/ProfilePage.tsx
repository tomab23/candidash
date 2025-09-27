import Navbar from "@/components/layout/Navbar";
import StatCard from "@/components/cards/StatCard";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import Contenu from "@/helpers/Contenu";
import StringToDate from "@/helpers/StringToDate";
import { useCandidature } from "@/hooks/useCandidature";
import i18n from "@/i18n/i18n";
import { intervalToDuration } from "date-fns";
import { List, SquareUserRound } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";

const ProfilePage = () => {
  const { user } = useAuth();
  const { candidatures, removeUser } = useCandidature();
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [del, setDel] = useState<boolean>(false);

  const dateRegister = new Date(String(user?.created_at)).setHours(0, 0, 0, 0);
  const today = new Date().setHours(0, 0, 0, 0);

  const interval = intervalToDuration({
    start: new Date(dateRegister),
    end: new Date(today),
  });

  const day = interval.days && interval.days > 1 ? " days" : " day";
  const jour = interval.days && interval.days > 1 ? " jours" : " jour";
  const month = interval.months && interval.months > 1 ? " months " : " month ";

  const deleteUser = () => {
    removeUser();
    navigate("/")
  }

  return (
    <div>
      <Navbar />
      <Contenu>
        {/* <h1 className="text-center text-2xl font-bold mt-2">{t("TITLE.PROFILE")}</h1> */}
        <Header title={t("TITLE.PROFILE")} />
        {/*  */}
        <div className="flex flex-col gap-5 mt-5 max-sm:mt-3">
          {/* USER INFO AUTH */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <SquareUserRound className="w-20 h-20 max-sm:w-16 max-sm:h-16" />
              <div>
                <p className="text-lg max-sm:text-lg font-semibold">{user?.email}</p>
                <p className="italic text-sm max-sm:text-xs">
                  {t("PROFILE.SINCE")} :{" "}
                  {StringToDate(String(user?.created_at), true)}{" "}
                  {interval.months && interval.months && (
                    <span>
                      {i18n.language === "fr"
                        ? `| Il y a ${interval.months} mois ${
                            interval.days && " et"
                          } ${interval.days + jour}`
                        : `| ${interval.months + month} ${
                            interval.days && " and"
                          } ${interval.days + day} ago`}
                    </span>
                  )}
                </p>
              </div>
            </div>
            <Button variant="outline" className="max-sm:text-xs" disabled>
              {t("BUTTON.PROFILE")}
            </Button>
          </div>
          {/* MORE */}
          <div className="grid grid-rows-1 grid-cols-4 sm:grid-cols-6 gap-4">
            <StatCard
              title={t("CANDIDATURE") + "s"}
              value={candidatures.length}
              icon={<List className="h-4 w-4" />}
            />
          </div>
        </div>
        
        <div className="flex flex-col justify-center items-center gap-10 mt-20">
          <Button variant={"destructive"} onClick={() => setDel(true)}>{t("BUTTON.USER.DELETE")}</Button>
          {del && 
           <div className="flex flex-col items-center gap-5">
            <p>{t("BUTTON.USER.DELETE")}</p>
            <div className="flex gap-10">
              <Button onClick={() => setDel(false)}>{t("BUTTON.CANCEL")}</Button>
              <Button variant={"destructive"} onClick={() => deleteUser()}>{t("BUTTON.USER.DELETE")}</Button>
            </div>
           </div>
          }
        </div>
      </Contenu>
    </div>
  );
};

export default ProfilePage;
