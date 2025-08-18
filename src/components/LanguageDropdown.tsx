import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Globe } from 'lucide-react';
import { useTranslation } from "react-i18next";

const LanguageDropdown = () => {
    const { i18n } = useTranslation();

  const langueEn = () => {
    i18n.changeLanguage("en");
    (document.activeElement as HTMLElement)?.blur();
  }

  const langueFr = () => {
    i18n.changeLanguage("fr");
    (document.activeElement as HTMLElement)?.blur();
  }
  const [position, setPosition] = useState<string>(i18n.language == 'fr' ? "français" : "english");

  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline"><Globe />{i18n.language == 'fr' ? "Français" : "English"}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition} className="hover:cursor-pointer">
          <DropdownMenuRadioItem value="français" onClick={langueFr}>Français</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="english" onClick={langueEn}>English</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageDropdown;
