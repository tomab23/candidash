import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  // Archive,
  ArchiveIcon,
  // ArchiveRestore,
  BriefcaseBusiness,
  Calendar,
  Edit,
  FileText,
  Link,
  MapPin,
  User2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import type Candidature from "@/models/Candidature";
import { useTranslation } from "react-i18next";
import DateFormat from "@/helpers/DateFormat";
import { Button } from "@/components/ui/button";
import { Separator } from "../ui/separator";
// import { useCandidature } from "@/hooks/useCandidature";

type Props = {
  candidature: Candidature;
};
const CandidatureCard = ({ candidature }: Props) => {
  const navigate = useNavigate();
  // const { updateArchive } = useCandidature();
  const { t } = useTranslation();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "valid":
        return "bg-green-500 hover:bg-green-600 ";
      case "refused":
        return "bg-destructive hover:bg-red-500 ";
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
        return "";
    }
  };

  const getContractTranslate = (status: string) => {
    switch (status) {
      case "cdi":
        return t("CONTRACT.PERMANENT");
      case "cdd":
        return t("CONTRACT.FIXED");
      case "freelance":
        return t("CONTRACT.FREELANCE");
      case "stage":
        return t("CONTRACT.INTERN");
      case "alternance":
        return t("CONTRACT.APPRENTICE");
      default:
        return "";
    }
  };

    //   const handleArchive = () => {
    //   updateArchive(candidature.id, candidature.archive);
    //   window.location.reload();
    // }

  return (
    <Card className={`hover:shadow-lg transition-shadow duration-200`}>
      <CardHeader className="">
        <div className="flex justify-between items-start">
          <div className="flex gap-1 items-center">
            {candidature.archive && (
              <ArchiveIcon className="w-4 h-4 stroke-muted-foreground" />
            )}
            <CardTitle
              className={`text-lg ${
                candidature.archive && "text-muted-foreground"
              }`}
            >
              {candidature.company}
            </CardTitle>
          </div>
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
          <BriefcaseBusiness className="h-4 w-4 mr-2" />
          {getContractTranslate(candidature.contract)}
        </div>

        <div className="flex h-5 items-center space-x-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2" />
            {DateFormat(candidature.date, false)}
          </div>
          <Separator orientation="vertical" />
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            <p
              className="truncate w-16 [&::first-letter]:uppercase"
              title={candidature.place}
            >
              {candidature.place}
            </p>
          </div>
        </div>
        {/* <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-2" />
          {DateFormat(candidature.date, false)}
        </div> */}

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
          {/* ARCHIVE */}
          {/* <Button
          onClick={handleArchive}
            variant="ghost"
            size="sm"
            title={candidature.archive ? t("RESTORE") : "Archive"}
            aria-label={candidature.archive ? t("RESTORE") : "Archive"}
          >
            {candidature.archive ? (
              <ArchiveRestore className="w-4 h-4 dark:stroke-blue-300 stroke-blue-700" />
            ) : (
              <Archive className="h-4 w-4" />
            )}
          </Button> */}
          {/* EDIT */}
          <Button
            title="edit"
            aria-label="edit"
            role="button"
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
