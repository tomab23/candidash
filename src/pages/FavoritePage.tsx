import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar"
import Contenu from "@/helpers/Contenu"
import { useTranslation } from "react-i18next"

export const FavoritesPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Navbar />
      <Contenu>
        <Header title={t("TITLE.FAVORITES")} />
      </Contenu>
    </div>
  )
}
