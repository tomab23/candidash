import LanguageDropdown from "@/components/LanguageDropdown";
import Navbar from "@/components/layout/Navbar";
import Contenu from "@/helpers/Contenu";

const SettingsPage = () => {
  return (
    <div>
      <Navbar />
      <Contenu>
        <h1 className="text-center text-2xl font-bold mt-2 mb-10">Settings</h1>
        <div className="flex gap-4 items-center justify-center">
          <h2 className="text-xl">Langue</h2>
          <LanguageDropdown />
        </div>
        <br /><br /><br /><br /><br />
        <p>profil public : Oui / Non | radio ?</p>
      </Contenu>
    </div>
  );
};

export default SettingsPage;
