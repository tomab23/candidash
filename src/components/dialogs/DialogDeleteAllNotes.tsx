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

const DialogDeleteAllNotes = () => {
//   const { removeAllArchives } = useCandidature();
  const { t } = useTranslation();
  const handleDelete = () => {
    // removeAllArchives();
    window.location.reload();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={"destructive"}>
          {t("DELETE.NOTE.BUTTON")}
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
            className="bg-destructive/70 text-white hover:bg-destructive/60"
          >
            {t("BUTTON.DELETE")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DialogDeleteAllNotes;
