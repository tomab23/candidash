import { useTranslation } from "react-i18next";
import ContractCard from "../cards/ContractCard";

const ContractPart = () => {
  const { t } = useTranslation();
  return (
    <div className="mb-5">
      <h2 className="mb-3 text-xl font-semibold">{t("CONTRACT.TITLE")}</h2>
      <div className="grid grid-rows-1 grid-cols-2 sm:grid-cols-4 gap-4">
        <ContractCard name={t("CONTRACT.PERMANENT")} value={"cdi"} />
        <ContractCard name={t("CONTRACT.FIXED")} value={"cdd"} />
        <ContractCard name={t("CONTRACT.FREELANCE")} value={"freelance"} />
        <ContractCard name={t("CONTRACT.INTERN")} value={"stage"} />
        <ContractCard name={t("CONTRACT.APPRENTICE")} value={"alternance"} />
      </div>
    </div>
  );
};

export default ContractPart;
