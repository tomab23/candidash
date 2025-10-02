import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

type Props = {
    name: string;
}
const ContractCard = ({ name } : Props) => {
  return (
    <Card className="group hover:outline-1 outline-muted-foreground w-56 hover:cursor-pointer">
      <CardHeader className="px-2 gap-0">
        <div className="flex justify-between items-center">
          <CardTitle className="text-sm">{name}</CardTitle>
          <CardAction>
            <ChevronRight className="w-5 h-5 transform transition-transform duration-200 group-hover:scale-125" />
          </CardAction>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ContractCard;
