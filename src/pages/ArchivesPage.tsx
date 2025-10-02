import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Contenu from "@/helpers/Contenu";
import { useCandidature } from "@/hooks/useCandidature";

const ArchivesPage = () => {
  const { archives } = useCandidature();

  // console.log(archives);
  
  return (
    <div>
      <Navbar />
      <Contenu>
        <Header title={"Archives"}  />

        <p>Candidatures archivées : {archives.length}</p>
      </Contenu>
    </div>
  );
};

export default ArchivesPage;
