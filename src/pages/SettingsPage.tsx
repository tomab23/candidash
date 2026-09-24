import LanguageDropdown from "@/components/LanguageDropdown";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Contenu from "@/helpers/Contenu";
import { useTranslation } from "react-i18next";
import PublicCard from "@/components/profile/PublicCard";
import { Separator } from "@/components/ui/separator";
import DialogDeleteAllNotes from "@/components/dialogs/DialogDeleteAllNotes";
import DialogDeleteUser from "@/components/dialogs/DialogDeleteUser";

const SettingsPage = () => {
  const { t } = useTranslation();

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
          <DialogDeleteUser />
        </div>
      </Contenu>
    </div>
  );
};

export default SettingsPage;
