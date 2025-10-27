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

      <Button className="self-end mt-10">Valider</Button>
    </div>
  );
};

export default PublicForm;
