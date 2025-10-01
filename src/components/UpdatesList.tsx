import { useTranslation } from "react-i18next";
import UpdateCard from "./cards/UpdateCard";

const UpdatesList = () => {
  const { i18n } = useTranslation()
  return (
    <div className="mt-10 max-sm:mt-5">
      <UpdateCard update={"add"}  date={"2025-10-01"} version="bêta 0.2">
        {i18n.language === "fr" ? (
          <p>Ajout du choix de contrat pour les candidatures.</p>
        ): (
          <p>Added contract selection for applications.</p>
        )}
      </UpdateCard>
    </div>
  );
};

export default UpdatesList;
