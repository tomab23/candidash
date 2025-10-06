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
  table?: boolean;
};

export default function DialogDelete({ id, company, job, table }: Props) {
  const { removeCandidature } = useCandidature();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const HandleDelete = () => {
    removeCandidature(id);
    if (!table) {
      navigate("/home");
    } else {
      window.location.reload();
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {table ? (
          <Trash2 className="w-5 h-5 mx-auto stroke-destructive hover:scale-110 hover:cursor-pointer" />
        ) : (
          <Button variant="destructive">
            <Trash2 /> {t("BUTTON.DELETE")}
          </Button>
        )}
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
            {/* <b className="text-xl">{t("DELETE.QUESTION")}</b> */}
            <b className="text-xl">Archiver cette candidature ?</b>
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
