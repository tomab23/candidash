import Navbar from "@/components/layout/Navbar";
import Contenu from "@/helpers/Contenu";

const ArchivesPage = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center text-2xl font-bold mt-2 mb-10">Archives</h1>
      <Contenu>
        <p>Mettre un tableau</p>
      </Contenu>
    </div>
  );
};

export default ArchivesPage;
