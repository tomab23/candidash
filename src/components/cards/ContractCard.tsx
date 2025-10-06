import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Props = {
    name: string;
    value: string;
}
const ContractCard = ({ name, value } : Props) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/contract", {
            state : {
                value : value,
                name: name
            }
        })
    }

  return (
    <Card className="group hover:outline-1 outline-muted-foreground w-56 max-sm:w-44 hover:cursor-pointer" onClick={handleNavigate}>
      <CardHeader className="px-2 gap-0">
        <div className="flex justify-between items-center">
          <CardTitle className="text-sm max-sm:text-xs">{name}</CardTitle>
          <CardAction>
            <ChevronRight className="w-5 h-5 transform transition-transform duration-200 group-hover:scale-125" />
          </CardAction>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ContractCard;
