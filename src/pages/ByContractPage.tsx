import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Contenu from "@/helpers/Contenu";
import { useLocation } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import { useCandidature } from "@/hooks/useCandidature";
import CandidatureCard from "@/components/cards/CandidatureCard";

type LocationState = {
  value: string;
  name: string;
};

const ByContractPage = () => {
  const location = useLocation();
  const state = location.state as LocationState;
  const { candidatures } = useCandidature();

  const number = candidatures.filter((c) => c.contract === state.value).length

  if (!state) return <NotFoundPage />;

  return (
    <div>
      <Navbar />
      <Contenu>
        <Header title={state?.name} />
        <p>Value: {state?.value} - {number}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          {candidatures.filter((c) => c.contract === state.value)
            .map((c) => <CandidatureCard key={c.id} candidature={c} />)
            .reverse()}
        </div>
      </Contenu>
    </div>
  );
};

export default ByContractPage;
