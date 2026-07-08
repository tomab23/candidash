import NoteCard from "@/components/cards/NoteCard";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import Contenu from "@/helpers/Contenu";
import { useTranslation } from "react-i18next";

const NotesPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Navbar />
      <Contenu>
        <Header title={"Notes"} />

        <div className="flex justify-between items-center mt-2">
          <p className="text-xl">Vous avez 0 note</p>

          <Button>{t("BUTTON.NOTE")}</Button>
        </div>

        <div className="mt-10">
          <NoteCard />
        </div>
      </Contenu>
    </div>
  );
};

export default NotesPage;
