import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ItemStatusList } from "@/models/ItemStatusList";
import { ListFilter } from "lucide-react";
import { useTranslation } from "react-i18next";

type Props = {
    status: string
    setStatus: (value: string) => void
}

const FilterCandidature = ({ status, setStatus } : Props) => {
  const { t } = useTranslation()
  return (
          <Select value={status} onValueChange={setStatus}>
        <SelectTrigger className="w-full sm:w-48">
          <SelectValue placeholder="Filtrer par statut" />
        </SelectTrigger>
        <SelectContent>
          {ItemStatusList.map((item) => (
            <SelectItem key={item.value} value={item.value}><ListFilter className={item.classname} /> {t(item.label)}</SelectItem>
          ))}
        </SelectContent>
      </Select>
  )
}

export default FilterCandidature