import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const NoList = () => {
  const navigate = useNavigate();
  const { t } = useTranslation()

  return (
    <div className="text-center py-12">
      <div className="text-6xl mb-4">📄</div>
      <h3 className="text-lg font-semibold mb-2">
        {t("NONE.NONE")}
      </h3>
      <p className="text-muted-foreground mb-4">
          {t("NONE.FIRST")}
      </p>

        <Button onClick={() => navigate("/candidature")}>
          {t("FORM.TITLE")}
        </Button>

    </div>

    //     <div className="text-center py-12">
    //   <div className="text-6xl mb-4">📄</div>
    //   <h3 className="text-lg font-semibold mb-2">
    //     {candidatures.length === 0 ? "Aucune candidature" : "Aucun résultat"}
    //   </h3>
    //   <p className="text-muted-foreground mb-4">
    //     {candidatures.length === 0
    //       ? "Commencez par ajouter votre première candidature !"
    //       : "Essayez de modifier vos filtres de recherche."}
    //   </p>
    //   {candidatures.length === 0 && (
    //     <Button onClick={() => navigate("/add")}>
    //       Ajouter une candidature
    //     </Button>
    //   )}
    // </div>
  );
};

export default NoList;
