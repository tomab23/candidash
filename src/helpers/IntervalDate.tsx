import { intervalToDuration, formatDuration } from "date-fns";
import { fr, enGB } from "date-fns/locale";
import i18n from "@/i18n/i18n";

const IntervalDate = (date: string) => {
  const date1 = new Date(date);
  const date2 = new Date();

  const duration = intervalToDuration({ start: date1, end: date2 });
  const formatted = formatDuration(duration, {
    format: ["days", "minutes"],
    locale: i18n.language == "fr" ? fr : enGB,
  });

  return <span>{formatted}</span>;
};

export default IntervalDate;
