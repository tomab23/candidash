import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { List, ListFilter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const FilterTest = () => {
  const navigate = useNavigate();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          onClick={() => navigate("/profile")}
        >
          <ListFilter className="stroke-primary" />
          {/* <p>Status</p> */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-background" align="end">
        <DropdownMenuItem>
          <List className="h-4 w-4 dark:stroke-white stroke-black" /> Tous les status
        </DropdownMenuItem>
        <DropdownMenuItem>
          <List className="h-4 w-4 dark:stroke-blue-500 stroke-blue-600"  /> En attente
        </DropdownMenuItem>
        <DropdownMenuItem>
          <List className="h-4 w-4 dark:stroke-orange-500 stroke-orange-600"  /> Entretien
        </DropdownMenuItem>
        <DropdownMenuItem>
          <List className="h-4 w-4 dark:stroke-purple-500 stroke-purple-600"  /> Relance
        </DropdownMenuItem>
        <DropdownMenuItem>
          <List className="h-4 w-4 dark:stroke-green-500 stroke-green-600"  /> Validé
        </DropdownMenuItem>
        <DropdownMenuItem>
          <List className="h-4 w-4 dark:stroke-red-500 stroke-red-700"  /> Refusé
        </DropdownMenuItem>
        <DropdownMenuItem>
          <List className="h-4 w-4 dark:stroke-gray-500 stroke-gray-600"  /> Abandonné
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterTest;
