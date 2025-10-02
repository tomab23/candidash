import { useTranslation } from "react-i18next";
import ContractCard from "../cards/ContractCard";

const ContractPart = () => {
  const { t } = useTranslation();
  return (
    <div className="mb-5">
      <h2 className="mb-3 text-xl">{t("CONTRACT.TITLE")}</h2>
      <div className="grid grid-rows-1 grid-cols-2 sm:grid-cols-4 gap-4">
        <ContractCard name={t("CONTRACT.PERMANENT")} />
        <ContractCard name={t("CONTRACT.FIXED")} />
        <ContractCard name={t("CONTRACT.FREELANCE")} />
        <ContractCard name={t("CONTRACT.INTERN")} />
        <ContractCard name={t("CONTRACT.APPRENTICE")} />
      </div>
    </div>
  );
};

export default ContractPart;
