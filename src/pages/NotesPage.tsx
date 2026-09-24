import NoteCard from "@/components/cards/NoteCard";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import Contenu from "@/helpers/Contenu";
import { useNote } from "@/hooks/useNote";
import { Plus, RefreshCcw } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import WaitingPage from "./WaitingPage";

const NotesPage = () => {
  const { t } = useTranslation();
  const { notes } = useNote();
  const navigate = useNavigate();

  const handleReload = () => {
    window.location.reload();
    // fetchCandidatures();
  };

  if (!notes) return <WaitingPage />;

  return (
    <div>
      <Navbar />
      <Contenu>
        <Header title={"Notes"} />

        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center gap-2">
            <p className="text-xl">
              {t("LIST.HAVE")} {notes.length} note{notes.length > 1 && "s"}
            </p>
            <RefreshCcw
              className="w-4 h-4 hover:scale-110 hover:cursor-pointer sm:mt-1"
              onClick={handleReload}
            />
          </div>

          <Button onClick={() => navigate("/note")} className="max-sm:text-xs">
            <Plus /> {t("BUTTON.NOTE")}
          </Button>
        </div>

        <div className="mt-10 max-sm:mt-5 grid grid-cols-4 gap-y-8 max-sm:grid-cols-2 max-sm:gap-4">
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      </Contenu>
    </div>
  );
};

export default NotesPage;
