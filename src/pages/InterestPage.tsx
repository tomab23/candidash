import InterestCard from "@/components/cards/InterestCard";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Contenu from "@/helpers/Contenu";
import { useCandidature } from "@/hooks/useCandidature";
import { useTranslation } from "react-i18next";

export const InterestPage = () => {
  const { interests } = useCandidature();
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <Contenu>
        <Header title={t("INTEREST.TITLE")} />

        <div className="mt-5">
          {interests.map((i) => (
            <InterestCard key={i.id} candidature={i} />
          ))}
        </div>
      </Contenu>
    </div>
  );
};
