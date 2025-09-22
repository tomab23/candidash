import LanguageDropdown from "@/components/LanguageDropdown";
import Navbar from "@/components/layout/Navbar";
import Contenu from "@/helpers/Contenu";
import { useTranslation } from "react-i18next";

const SettingsPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <Contenu>
        <h1 className="text-center text-2xl font-bold mt-2 mb-10">{t("TITLE.SETTINGS")}</h1>
        <div className="flex gap-4 items-center justify-center">
          <h2 className="text-xl">{t("LANGUAGE")}</h2>
          <LanguageDropdown />
        </div>
        {/* <p>profil public : Oui / Non | radio ?</p> */}
      </Contenu>
    </div>
  );
};

export default SettingsPage;
