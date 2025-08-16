import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Globe } from 'lucide-react';

const LanguageDropdown = () => {
  const [position, setPosition] = useState<string>("français");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline"><Globe /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start">
        {/* <DropdownMenuLabel>Panel Position</DropdownMenuLabel> */}
        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition} className="hover:cursor-pointer">
          <DropdownMenuRadioItem value="français">Français</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="english">English</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageDropdown;
