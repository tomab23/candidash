import NoteCard from "@/components/cards/NoteCard";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import Contenu from "@/helpers/Contenu";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const NotesPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <Contenu>
        <Header title={"Notes"} />

        <div className="flex justify-between items-center mt-5">
          <p className="text-xl">{t("LIST.HAVE")} 0 note</p>

          <Button onClick={() => navigate("/note")} className="max-sm:text-xs"><Plus/> {t("BUTTON.NOTE")}</Button>
        </div>

        <div className="mt-10">
          <NoteCard />
        </div>
      </Contenu>
    </div>
  );
};

export default NotesPage;
