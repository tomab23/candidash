import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

const ButtonBack = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Button onClick={() => navigate(-1)} className="w-fit">
      {t("BUTTON.BACK")}
    </Button>
  );
};

export default ButtonBack;
