import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Calendar, List, ListFilter} from "lucide-react";
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
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-background" align="end">
        {/* My Account */}
        <DropdownMenuSeparator />
        <DropdownMenuItem >
          <List className="h-4 w-4" /> Default
        </DropdownMenuItem>
        <DropdownMenuItem >
          <Calendar className="h-4 w-4" /> By Date
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default FilterTest