import { useTranslation } from "react-i18next";
import UpdateCard from "../cards/UpdateCard";
import { UpdateInfoList } from "@/consts/UpdateInfoList";

const UpdatesList = () => {
  const { i18n } = useTranslation();
  return (
    <div className="mt-10 max-sm:mt-5 flex flex-col gap-3">
      {UpdateInfoList.map((update) => (
        <UpdateCard key={update.id} update={update.update} date={update.date} version={update.version} classname={update.classname}>
          {i18n.language === "fr" ? (
            <p>{update.fr}.</p>
          ) : (
            <p>{update.en}.</p>
          )}
        </UpdateCard>
      )).reverse()}
    </div>
  );
};

export default UpdatesList;
