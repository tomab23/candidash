import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { CopyButton } from "../ui/shadcn-io/copy-button";

type Props = {
  open: boolean;
};
const PublicForm = ({ open }: Props) => {
  return (
    <div className="flex flex-col">
      <div>
        <p className={`font-bold mb-1 ${!open && "text-muted-foreground"}`}>
          Pseudo
        </p>
        <Input
          autoComplete="additional-name"
          type="text"
          placeholder="Pseudo"
          required
          id="name"
          name="name"
          className="w-full"
          disabled={!open}
        />
      </div>

      {/* <div className="mt-5 text-sm flex gap-2 items-center">
        <p>Votre lien de partage : </p>
        <p className="italic">Candidash/name</p>
        <CopyButton content="Candidash/name" size="sm" className="ml-1" disabled={!open} />
      </div> */}

      {/* TODO apres validation sonner / alert de reussite ou raté */}
      <Button className="self-end mt-5">Valider</Button>

      <div className="mt-5 text-sm flex gap-2 items-center">
        <p>Votre lien de partage : </p>
        {open && <p className="italic">Candidash/name</p>}
        <CopyButton
          content="Candidash/name"
          size="sm"
          className="ml-1"
          disabled={!open}
        />
      </div>
    </div>
  );
};

export default PublicForm;
