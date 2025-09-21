import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Archive,
  Calendar,
  Edit,
  FileText,
  Link,
  MapPin,
  User2,
} from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import type Candidature from "@/models/Candidature";
import { useTranslation } from "react-i18next";
import DateFormat from "@/helpers/DateFormat";

type Props = {
  candidature: Candidature;
};
const CandidatureCard = ({ candidature }: Props) => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "valid":
        return "bg-green-500 hover:bg-green-600 ";
      case "refused":
        return "bg-red-500 hover:bg-red-600 ";
      case "wait":
        return "bg-blue-500 hover:bg-blue-600 ";
      case "interview":
        return "bg-orange-500 hover:bg-orange-600 ";
      case "again":
        return "bg-purple-500 hover:bg-purple-600 ";
      case "abandoned":
        return "bg-gray-500 hover:bg-gray-600 ";
      default:
        return "bg-yellow-500 hover:bg-yellow-600 ";
    }
  };

    const getStatusTranslate = (status: string) => {
    switch (status) {
      case "valid":
        return t("STATUS.VALID");
      case "refused":
        return t("STATUS.REFUSED");
      case "wait":
        return t("STATUS.WAITING");
      case "interview":
        return t("STATUS.INTERVIEW");
      case "again":
        return t("STATUS.AGAIN");
      case "abandoned":
        return t("STATUS.ABANDONED");
      default:
        return "bg-yellow-500 hover:bg-yellow-600 ";
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{candidature.company}</CardTitle>
          <Badge className={getStatusColor(candidature.status)}>
            {getStatusTranslate(candidature.status)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* <div className="space-y-3 bg-green-900"> */}
        <div className="flex items-center text-sm text-muted-foreground">
          <User2 className="h-4 w-4 mr-2" />
          {candidature.job}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-2" />
          {candidature.place}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-2" />
          {DateFormat(candidature.date, false)}
        </div>

        <div className="flex items-start text-sm text-muted-foreground">
          <Link className="h-4 w-4 mr-2 mt-0.5" />
          <span
            className="line-clamp-2 hover:underline hover: cursor-pointer"
            onClick={() => window.open(candidature.link)}
          >
            {candidature.link}
          </span>
        </div>

        <div className="flex items-start text-sm text-muted-foreground">
          <FileText className="h-4 w-4 mr-2 mt-0.5" />
          <span className="line-clamp-2" title={candidature.note}>
            {candidature.note}
          </span>
        </div>

        {/* </div> */}
        <div className="flex justify-end space-x-2 ">
          <Button variant="ghost" size="sm" disabled>
            <Archive className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate(`/candidature/${candidature.id}`)}
          >
            <Edit className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CandidatureCard;
