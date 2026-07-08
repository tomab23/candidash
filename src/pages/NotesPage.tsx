import NoteCard from "@/components/cards/NoteCard";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Contenu from "@/helpers/Contenu";

const NotesPage = () => {
  return (
    <div>
      <Navbar />
      <Contenu>
        <Header title={"Notes"} />

        <div>
          <NoteCard />
        </div>
      </Contenu>
    </div>
  );
};

export default NotesPage;
