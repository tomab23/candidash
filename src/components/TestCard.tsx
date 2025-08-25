import DateFormat from "@/helpers/DateFormat";
import type Test from "@/models/Test";
import { Archive, Pen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

type CardProps = {
  test: Test;
};
const TestCard = (props: CardProps) => {
  const navigate = useNavigate();

  return (
    <div className="w-60 max-sm:w-40 p-2 border-1 border-secondary-foreground rounded-lg  flex flex-col max-sm:text-xs">
        <p className="font-bold">{props.test.name}</p>
      <div className="flex gap-2">
        <p>{props.test.age} ans</p>
        <p>{props.test.gender}</p>
              <p>{props.test.place}</p>
      </div>
        <p className="text-sm max-sm:text-xs"> Ajouté le {DateFormat(props.test.created_at)}</p>

        <div className="flex justify-between items-center mt-2">
        <Button variant={"ghost"} title="Archive">
            <Archive className="" />
            </Button>      
      <Button
        onClick={() => navigate(`/test/${props.test.id}`)} variant={"default"}
      >
        <Pen className="h-4 w-4 hover:cursor-pointer hover:scale-110 stroke-1 " />{" "}
        Edit
      </Button>
        </div>
    </div>
  );
};

export default TestCard;
