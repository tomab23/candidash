import { CircleArrowUp, Info, Plus, Trash2, Wrench } from "lucide-react";
import type { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import StringToDate from "@/helpers/StringToDate";
import type { UpdateIcon } from "@/enums/UpdateIcon";
import { Separator } from "../ui/separator";

type Props = {
  update: UpdateIcon;
  children: ReactNode;
  date: string;
  version: string;
  classname :string;
};

const UpdateCard = ({ update, children, date, version, classname }: Props) => {

  const getUpdateIcon = (status: string) => {
    switch (status) {
      case "add":
        return (
          <Plus className="w-5 h-5 dark:stroke-green-400 stroke-green-600" />
        );
      case "correction":
        return (
          <Wrench className="w-5 h-5 dark:stroke-orange-400 stroke-orange-600" />
        );
      case "update":
        return (
          <CircleArrowUp className="w-5 h-5 dark:stroke-blue-400 stroke-blue-600" />
        );
      case "delete":
        return (
          <Trash2 className="w-5 h-5 dark:stroke-red-400 stroke-red-600" />
        );
      default:
        return <Info />;
    }
  };

  return (
    <Card className={classname}>
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between items-center">
            <div className="flex h-5 items-center space-x-2 text-xs">
              {getUpdateIcon(update)}
              {/* <Separator orientation="vertical"  />
              <p className="text-muted-foreground">{version}</p> */}
            </div>
            {/* <p className="text-xs text-muted-foreground">{StringToDate(date, false)}</p> */}
            <p className="text-xs text-muted-foreground">{version}</p>
          </div>
        </CardTitle>
        {/* <CardDescription>{children}</CardDescription> */}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default UpdateCard;
