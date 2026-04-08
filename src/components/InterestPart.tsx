import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";

const InterestPart = () => {
    const navigate = useNavigate();

  return (
    <div className="flex justify-between py-4">
      <h1 className="text-xl max-sm:text-xl font-bold">
        0 offre qui m'interesse
      </h1>
                <Button size={"sm"}
            onClick={() => navigate("/interest")}
            className="max-sm:text-xs"
          >
            <Heart />
            Voir les offres qui m'interessent
          </Button>
    </div>
  );
};

export default InterestPart;
