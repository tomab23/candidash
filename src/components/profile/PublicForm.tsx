import { Button } from "../ui/button";
import { Input } from "../ui/input";

type Props = {
    open: boolean
}
const PublicForm = ({ open } : Props) => {
  return (
    <div className="flex flex-col">
      <div>
        <p className={`font-bold mb-1 ${!open && "text-muted-foreground"}`}>Pseudo</p>
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

      <div className="mt-5 text-sm flex gap-2">
        <p>Votre lien de partage : </p>
        <p className="italic">Candidash/name</p>
      </div>

{/* TODO apres validation sonner / alert de reussite ou raté */}
      <Button className="self-end mt-5">Valider</Button>
    </div>
  );
};

export default PublicForm;
