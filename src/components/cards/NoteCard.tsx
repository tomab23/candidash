import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardTitle } from "../ui/card";
import type Note from "@/models/Note";

type Props = {
  note: Note
}

const NoteCard = ({ note } : Props) => {
  const navigate = useNavigate();
  return (
    <Card className="max-w-52 max-h-32 px-4 hover:scale-105 hover:cursor-pointer" onClick={() => navigate(`/note/${note.id}`)}>
      <CardTitle>{note.title}</CardTitle>
      <CardContent className="px-0 truncate" title={note.note}>
        {note.note}
      </CardContent>
    </Card>
  );
};

export default NoteCard;
