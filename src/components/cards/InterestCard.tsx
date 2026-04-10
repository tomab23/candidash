import type Candidature from "@/models/Candidature";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Edit, NotebookTextIcon, Trash2Icon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

type Props = {
  candidature: Candidature;
};

const InterestCard = ({ candidature }: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Card className="">
      <CardHeader className="truncate">
        <CardTitle className="flex gap-2 max-sm:text-xs" title={candidature.job}>
          {candidature.job}{" "}
          {candidature.note && <NotebookTextIcon className="h-4 w-4" />}
        </CardTitle>
        <CardDescription className="flex flex-col gap-2 max-sm:text-xs">
          <p>{candidature.company}</p>
          <span
            className="line-clamp-2 hover:underline hover: cursor-pointer truncate max-sm:w-80"
            onClick={() => window.open(candidature.link)}
          >
            {candidature.link}
          </span>
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end gap-3 -mt-5 max-sm:-mt-2">
        <Button
          variant="outline"
          size="icon"
          className=""
          title={t("BUTTON.DELETE")}
          disabled
        >
          <Trash2Icon className="text-destructive" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className=""
          title={t("HEADER.EDIT")}
          onClick={() => navigate(`/candidature/${candidature.id}`)}
        >
          <Edit />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className=""
          title={t("BUTTON.VALIDATE")}
          disabled
        >
          <CheckCircle className="dark:text-green-400 text-green-600" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InterestCard;
