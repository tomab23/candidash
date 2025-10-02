import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ContractList } from "@/consts/ContractList";


type Props = {
  name: string;
  value: string;
  onChange: (value: string) => void;
};

const ContractBox = ({ name, value, onChange}: Props) => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);

    const getContractTranslate = (status: string) => {
    switch (status) {
      case "cdi":
        return t("CONTRACT.PERMANENT");
      case "cdd":
        return t("CONTRACT.FIXED");
      case "freelance":
        return t("CONTRACT.FREELANCE");
      case "stage":
        return t("CONTRACT.INTERN");
      case "alternance":
        return t("CONTRACT.APPRENTICE");
      default:
        return t("CONTRACT.SELECT");
    }
  };
  return (
        <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
        id={name}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between w-full font-normal"
          // w-48
        >
          {getContractTranslate(value)}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[340px] p-0">
        <Command>
          {/* <CommandInput placeholder="Search status..." className="h-9" /> */}
          <CommandList>
            <CommandEmpty>{t("STATUS.NONE")}</CommandEmpty>
            <CommandGroup>
              {ContractList.map((item) => (
                <CommandItem
                  className="hover:cursor-pointer"
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    onChange(currentValue);
                    setOpen(false);
                  }}
                  id={name}
                >
                    {/* <List className={item.classname}/> */}
                  {t(item.label)}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default ContractBox