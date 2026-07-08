import CandidatureCard from "@/components/cards/CandidatureCard";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Contenu from "@/helpers/Contenu";
import { useCandidature } from "@/hooks/useCandidature";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

type Filter = "application" | "interest";

export const FavoritesPage = () => {
  const { t } = useTranslation();
  const { candidatures, interests } = useCandidature();
  const [filter, setFilter] = useState<Filter>(
    "application",
  );

  const favoriteApplication = useMemo(
    () => candidatures.filter((c) => c.favorite),
    [candidatures],
  );

  const favoriteInterest = useMemo(
    () => interests.filter((c) => c.favorite),
    [interests],
  );

  const data = filter === "application" ? favoriteApplication : favoriteInterest;

  const totalFavorite = favoriteApplication.length + favoriteInterest.length

  const fav = totalFavorite > 1 ? t("TITLE.FAVORITES") : t("TITLE.FAVORITES").slice(0, -1)

  const items = [
    { label: t("CANDIDATURE"), value: "application" },
    { label: t("INTEREST.TITLE"), value: "interest" },
  ];

  return (
    <div>
      <Navbar />
      <Contenu>
        <Header title={t("TITLE.FAVORITES")} />

        <div className="flex justify-between mt-5">
          <p className="text-xl">{t("LIST.HAVE")} {totalFavorite}{" "}{fav}</p>
          <Select
            value={filter}
            onValueChange={(value) =>
              setFilter(value as "application" | "interest")
            }
          >
            <SelectTrigger className="w-[180px]">
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
        </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
            {data.map((c) => (
              <CandidatureCard key={c.id} candidature={c} />
            ))}
          </div>

          {data.length < 1 && <p>{t("LIST.FAVORITE")}</p>}
  
      </Contenu>
    </div>
  );
};
