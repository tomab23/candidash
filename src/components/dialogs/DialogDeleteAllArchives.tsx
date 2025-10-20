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
} from "@/components/ui/alert-dialog"
import { Button } from "../ui/button"
import { useCandidature } from "@/hooks/useCandidature";
import { useTranslation } from "react-i18next";

const DialogDeleteAllArchives = () => {
    const { removeAllArchives } = useCandidature();
  const { t } = useTranslation();

    const handleDelete = () => {
    removeAllArchives();
    window.location.reload()
  };

  return (
    <AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant={"destructive"}>Supprimer toutes vos archives</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
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
  )
}

export default DialogDeleteAllArchives