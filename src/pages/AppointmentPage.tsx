import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Contenu from "@/helpers/Contenu";
import { Plus, RefreshCcw } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

type Filter = "upcoming" | "past";

const AppointmentPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [filter, setFilter] = useState<Filter>("upcoming");

  const handleReload = () => {
    window.location.reload();
  };

  const items = [
    { label: "à venir", value: "upcoming" }, //Upcoming
    { label: "passé", value: "past" }, //Past
  ];

  return (
    <div>
      <Navbar />
      <Contenu>
        <Header title={t("TITLE.APPOINTMENT")} />

        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center gap-2">
            <p className="text-xl max-sm:text-sm">
              0 rendez-vous à venir
              {/* Upcoming appointment */}
            </p>
            <RefreshCcw
              className="w-4 h-4 hover:scale-110 hover:cursor-pointer sm:mt-1"
              onClick={handleReload}
            />
          </div>

          <Button
            onClick={() => navigate("/appointment-form")}
            className="max-sm:text-xs"
          >
            <Plus /> Ajouter un rendez-vous
            {/* "BUTTON.NOTE" */}
          </Button>
        </div>

        <Select
          value={filter}
          onValueChange={(value) => setFilter(value as "upcoming" | "past")}
        >
          <SelectTrigger className="w-[180px] max-sm:w-[100%] mt-1 max-sm:mt-5">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  <p className="capitalize">{item.label}</p>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Contenu>
    </div>
  );
};

export default AppointmentPage;
