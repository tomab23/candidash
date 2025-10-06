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
import { Archive, ArchiveRestore } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCandidature } from "@/hooks/useCandidature";
import { useTranslation } from "react-i18next";

type Props = {
  id: number;
  company: string | undefined;
  job: string | undefined;
  archive: boolean;
  card?: boolean;
};

export default function DialogArchive({
  id,
  company,
  job,
  archive,
  card,
}: Props) {
  const { updateArchive } = useCandidature();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleArchive = () => {
    updateArchive(id, archive);
    if (card) {
      window.location.reload();
    } else {
      navigate("/home");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {!card ? (
          <div>
            {archive ? (
              <Button variant="secondary" className="dark:text-blue-300 text-blue-700">
                <ArchiveRestore className=" dark:stroke-blue-300 stroke-blue-700" /> {t("RESTORE.BUTTON")}
              </Button>
            ) : (
              <Button variant="secondary">
                <Archive /> {t("BUTTON.ARCHIVE")}
              </Button>
            )}
          </div>
        ) : (
          <Button
            variant="ghost"
            size="sm"
            title={archive ? t("RESTORE") : "Archive"}
            aria-label={archive ? t("RESTORE") : "Archive"}
          >
            {archive ? (
              <ArchiveRestore className="w-4 h-4 dark:stroke-blue-300 stroke-blue-700" />
            ) : (
              <Archive className="h-4 w-4" />
            )}
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
            <b className="text-xl">{archive ? t("RESTORE.QUESTION") : t("ARCHIVE.QUESTION")}</b>
            <br />
            {archive ? t("RESTORE.MESSAGE") : t("ARCHIVE.MESSAGE")}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{t("BUTTON.CANCEL")}</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleArchive}
            className="hover:bg-gray-100"
          >
            {archive ? t("RESTORE.BUTTON") : t("BUTTON.ARCHIVE")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
