import CandidatureCard from "@/components/cards/CandidatureCard";
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {archives
            .map((c) => <CandidatureCard key={c.id} candidature={c} />)
            .reverse()}
        </div>
      </Contenu>
    </div>
  );
};

export default ArchivesPage;
