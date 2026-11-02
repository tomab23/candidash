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
    const languageChoose = i18n.language.startsWith("fr") ? "Français" : "English"

  const langueEn = () => {
    i18n.changeLanguage("en-GB");
    (document.activeElement as HTMLElement)?.blur();
  }

  const langueFr = () => {
    i18n.changeLanguage("fr-FR");
    (document.activeElement as HTMLElement)?.blur();
  }
  const [position, setPosition] = useState<string>(languageChoose);

  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="blur-none"><Globe />{languageChoose}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition} className="hover:cursor-pointer">
          <DropdownMenuRadioItem value="Français" onClick={langueFr}>Français</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="English" onClick={langueEn}>English</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageDropdown;
