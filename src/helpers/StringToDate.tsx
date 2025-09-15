import i18n from "@/i18n/i18n";
import { format } from "date-fns";
import { fr, enGB } from "date-fns/locale";

const StringToDate = (date: string, day: boolean) => {
  const nDate = new Date(date);

  const formatted = format(nDate, day ? "EEEE d MMMM yyyy" : "d MMMM yyyy", {
    locale: i18n.language === "fr" ? fr : enGB,
  });
  return formatted;
};

export default StringToDate;