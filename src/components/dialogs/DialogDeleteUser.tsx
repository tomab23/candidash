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
import { Trash2, UserRound } from "lucide-react";
import { useCandidature } from "@/hooks/useCandidature";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

const DialogDeleteUser = () => {
  const { t } = useTranslation();
  const { removeUser } = useCandidature();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const deleteUser = () => {
    removeUser();
    logout();
    navigate("/");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={"destructive"}>
          <Trash2 /> {t("BUTTON.USER.DELETE")} <UserRound />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t("SURE")}</AlertDialogTitle>
          <AlertDialogDescription>
            {t("DELETE.ACCOUNT.MESSAGE")}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{t("BUTTON.CANCEL")}</AlertDialogCancel>
          <AlertDialogAction
            onClick={deleteUser}
            className="bg-destructive/70 text-white hover:bg-destructive/60"
          >
            {t("DELETE.ACCOUNT.BUTTON")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DialogDeleteUser;
