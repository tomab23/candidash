import { useTranslation } from "react-i18next";
import ContractCard from "../cards/ContractCard";
import { useCandidature } from "@/hooks/useCandidature";

const ContractPart = () => {
  const { t } = useTranslation();
  const { candidatures } = useCandidature();

  const candidatureCdi = candidatures.filter((c) => c.contract === "cdi");
  const candidatureCdd = candidatures.filter((c) => c.contract === "cdd");
  const candidatureFreelance = candidatures.filter((c) => c.contract === "freenlance");
  const candidatureAlternance = candidatures.filter((c) => c.contract === "alternance");
  const candidatureStage = candidatures.filter((c) => c.contract === "stage");
  const candidatureAutre = candidatures.filter((c) => c.contract === "autre");

  return (
    <div className="mb-5">
      <h2 className="mb-3 text-xl font-semibold">{t("CONTRACT.TITLE")}</h2>
      <div className="grid grid-rows-1 grid-cols-2 sm:grid-cols-4 gap-4">
        <ContractCard name={t("CONTRACT.PERMANENT") + ` (${candidatureCdi.length})`} value={"cdi"} />
        <ContractCard name={t("CONTRACT.FIXED") + ` (${candidatureCdd.length})`} value={"cdd"} />
        <ContractCard name={t("CONTRACT.FREELANCE") + ` (${candidatureFreelance.length})`} value={"freelance"} />
        <ContractCard name={t("CONTRACT.INTERN") + ` (${candidatureStage.length})`} value={"stage"} />
        <ContractCard name={t("CONTRACT.APPRENTICE") + ` (${candidatureAlternance.length})`} value={"alternance"} />
        <ContractCard name={t("CONTRACT.OTHER") + ` (${candidatureAutre.length})`} value={"autre"} />
      </div>
    </div>
  );
};

export default ContractPart;
