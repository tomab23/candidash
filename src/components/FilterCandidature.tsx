import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ItemStatusList } from "@/models/ItemStatusList";
import { ListFilter } from "lucide-react";

type Props = {
    status: string
    setStatus: (value: string) => void
}

const FilterCandidature = ({ status, setStatus } : Props) => {
  return (
          <Select value={status} onValueChange={setStatus}>
        <SelectTrigger className="w-full sm:w-48">
          {/* <ListFilter className="stroke-primary" /> */}
          <SelectValue placeholder="Filtrer par statut" />
        </SelectTrigger>
        <SelectContent>
          {/* <SelectItem value="all">Tous les statuts</SelectItem>
          <SelectItem value="attente">En attente</SelectItem>
          <SelectItem value="entretien">Entretien</SelectItem>
          <SelectItem value="relance">Relance</SelectItem>
          <SelectItem value="validé">Validé</SelectItem>
          <SelectItem value="refusé">Refusé</SelectItem>
          <SelectItem value="abandoné">Abandonné</SelectItem> */}
          {ItemStatusList.map((item) => (
            <SelectItem key={item.value} value={item.value}><ListFilter className={item.classname} /> {item.label}</SelectItem>
          ))}
        </SelectContent>
      </Select>
  )
}

export default FilterCandidature