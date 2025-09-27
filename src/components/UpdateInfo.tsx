import { CircleArrowUp, Plus, Trash2, Wrench } from "lucide-react";
import { useTranslation } from "react-i18next";

const UpdateInfo = () => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center items-center gap-10 max-sm:gap-4 max-sm:text-xs">
      <p className="flex items-center gap-1">
        <Plus className="w-5 h-5 dark:stroke-green-400 stroke-green-600" />{" "}
        {t("UPDATE.ADD")}
      </p>
      <p className="flex items-center gap-1">
        {" "}
        <Wrench className="w-5 h-5 dark:stroke-orange-400 stroke-orange-600" />
        Correction
      </p>
      <p className="flex items-center gap-1">
        {" "}
        <CircleArrowUp className="w-5 h-5 dark:stroke-blue-400 stroke-blue-600" />{" "}
        {t("UPDATE.UPDATE")}
      </p>
      <p className="flex items-center gap-1">
        <Trash2 className="w-5 h-5 dark:stroke-red-400 stroke-red-600" />
        {t("UPDATE.DELETE")}
      </p>
    </div>
  );
};

export default UpdateInfo;
