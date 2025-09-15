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

type Props = {
  id: number;
  company: string | undefined;
  job: string | undefined;
};

export default function DeleteTestDIalog({ id, company, job }: Props) {
  const { removeCandidature } = useCandidature();
  const navigate = useNavigate();

  const HandleDelete = () => {
    removeCandidature(id);
    navigate("/home");
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">
          <Trash2 /> Supprimer
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete ?
          </AlertDialogTitle>
          <AlertDialogDescription>
            <b>{job}</b> chez <b>{company}</b><br />
            This action cannot be undone. This will permanently delete your
            account and remove all of your data from our servers. You will not
            be able to recover your account.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={HandleDelete}
            className="bg-destructive text-white hover:bg-destructive/90"
          >
            Supprimer
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
