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
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";
import { NotebookPen, Trash2 } from "lucide-react";
import { useNote } from "@/hooks/useNote";

const DialogDeleteAllNotes = () => {
  const { removeAllNotes } = useNote();
  const { t } = useTranslation();
  const handleDelete = () => {
    removeAllNotes()
    // window.location.reload();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={"destructive"}>
          <Trash2 /> {t("DELETE.NOTE.BUTTON")} <NotebookPen />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t("SURE")}</AlertDialogTitle>
          <AlertDialogDescription>
            {t("DELETE.NOTE.ALL")}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{t("BUTTON.CANCEL")}</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            className="bg-destructive/95 dark:bg-destructive/60 text-white hover:bg-destructive/85 hover:dark:bg-destructive/50"
          >
            {t("BUTTON.DELETE")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DialogDeleteAllNotes;
