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
import { useTranslation } from "react-i18next";
import { useNote } from "@/hooks/useNote";

type Props = {
  id: string;
  title: string | undefined;
};

export const DialogDeleteNote = ({ id, title } : Props) => {
  const { removeNote } = useNote();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const HandleDelete = () => {
    removeNote(id);
    navigate("/notes")
    // window.location.reload();
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
              <span className="font-bold">{title}</span>
            </p>
          </AlertDialogTitle>
          <AlertDialogDescription>
            <b className="text-xl">{t("DELETE.NOTE.QUESTION")}</b>
            <br />
            {t("DELETE.NOTE.MESSAGE")}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{t("BUTTON.CANCEL")}</AlertDialogCancel>
          <AlertDialogAction
            onClick={HandleDelete}
            className="bg-destructive/70 text-white hover:bg-destructive/60"
          >
            {t("BUTTON.DELETE")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
