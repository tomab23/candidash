import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Archive, Calendar, Edit, FileText, MapPin, User2 } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

type Props = {
  n: boolean;
};
const CandidatureCard = ({ n }: Props) => {
    const navigate = useNavigate();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "validée":
        return "bg-green-500 hover:bg-green-600 ";
      case "refus":
        return "bg-red-500 hover:bg-red-600 ";
      case "sans":
        return "bg-gray-500 hover:bg-gray-600 ";
      default:
        return "bg-yellow-500 hover:bg-yellow-600 ";
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{"nomEntreprise"}</CardTitle>
          <Badge className={getStatusColor("sans")}>resultat</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* <div className="space-y-3 bg-green-900"> */}
        <div className="flex items-center text-sm text-muted-foreground">
          <User2 className="h-4 w-4 mr-2" />
          {"candidature.Poste"}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-2" />
          {"candidature.lieu"}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-2" />
          {/* {new Date(candidature.date).toLocaleDateString('fr-FR')} */}
          Date
        </div>

        <div className="flex items-start text-sm text-muted-foreground">
          <FileText className="h-4 w-4 mr-2 mt-0.5" />
          {n && <span className="line-clamp-2">{"candidature.note"}</span>}
        </div>

        {/* </div> */}
        <div className="flex justify-end space-x-2 ">
          <Button variant="ghost" size="sm">
            <Archive className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            // onClick={() => navigate(`/candidature/${candidature.id}`)}
            onClick={() => navigate(`/candidature`)}
          >
            <Edit className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CandidatureCard;
