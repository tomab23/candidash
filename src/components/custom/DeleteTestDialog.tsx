import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCandidature } from "@/hooks/useCandidature";
import { useTranslation } from "react-i18next";

type Props = {
  id: number;
  company: string | undefined;
  job: string | undefined;
};

export default function DeleteTestDIalog({ id, company, job }: Props) {
  const { removeCandidature } = useCandidature();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const HandleDelete = () => {
    removeCandidature(id);
    navigate("/home");
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">
          <Trash2 /> {t("BUTTON.DELETE")}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <p>
              <span className="font-bold">{job}</span> {t("DELETE.TITLE")}{" "}
              <span className="font-bold">{company}</span>
            </p>
          </AlertDialogTitle>
          <AlertDialogDescription>
            <b className="text-xl">{t("DELETE.QUESTION")}</b>
            <br />
            {t("DELETE.MESSAGE")}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{t("BUTTON.CANCEL")}</AlertDialogCancel>
          <AlertDialogAction
            onClick={HandleDelete}
            className="bg-destructive text-white hover:bg-destructive/90"
          >
            {t("BUTTON.DELETE")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
