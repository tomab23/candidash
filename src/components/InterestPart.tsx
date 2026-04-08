import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import { useCandidature } from "@/hooks/useCandidature";
import { useTranslation } from "react-i18next";

const InterestPart = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { interests } = useCandidature();

    const total = interests.length

  return (
    <div className="flex justify-between py-4">
      <h1 className="text-lg max-sm:text-xl font-bold">
        {total} {total > 1 ? t("INTEREST.OFFERS") : t("INTEREST.OFFER")}
      </h1>
                <Button size={"sm"}
            onClick={() => navigate("/interest")}
            className="max-sm:text-xs"
          >
            <Heart />
            {t("INTEREST.BUTTON")}
          </Button>
    </div>
  );
};

export default InterestPart;
