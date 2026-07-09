import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardTitle } from "../ui/card";

// type Props = {
//   note: Note
// }
// const NoteCard = ({ note } : Props) => {
//   const navigate = useNavigate();

//   return (
//     <Card className="max-w-52 max-h-32 px-4 hover:scale-105 hover:cursor-pointer" onClick={() => navigate("note")}>
//       <CardTitle title={note.title}>{note.title}</CardTitle>
//       <CardContent className="px-0 truncate" title={note.note}>
//         {note.note}
//       </CardContent>
//     </Card>
//   );
// };

const NoteCard = () => {
  const navigate = useNavigate();
  return (
    <Card className="max-w-52 max-h-32 px-4 hover:scale-105 hover:cursor-pointer" onClick={() => navigate("/note")}>
      <CardTitle>title</CardTitle>
      <CardContent className="px-0 truncate" title="note">
        Voici un exemple de note on verra bien comment on va l'afficher. Numéro de tel 06 05 02 01 08. et si on va plus loin ? des probleme erreur erreur
      </CardContent>
    </Card>
  );
};

export default NoteCard;
