import { Check, ChevronsUpDown, List, } from "lucide-react";
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
import { ItemStatusList } from "@/models/ItemStatusList";
import { useState } from "react";
import { useTranslation } from "react-i18next";


type Props = {
  name: string;
  value: string;
  onChange: (value: string) => void;
};

export function StatusBox({ name, value, onChange}: Props) {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false);

  // console.log("status : ", status);

     const getStatusTranslate = (status: string) => {
    switch (status) {
      case "valid":
        return t("STATUS.VALID");
      case "refused":
        return t("STATUS.REFUSED");
      case "wait":
        return t("STATUS.WAITING");
      case "interview":
        return t("STATUS.INTERVIEW");
      case "again":
        return t("STATUS.AGAIN");
      case "abandoned":
        return t("STATUS.ABANDONED");
      default:
        return t("STATUS.SELECT");
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
          {getStatusTranslate(value)}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[340px] p-0">
        <Command>
          {/* <CommandInput placeholder="Search status..." className="h-9" /> */}
          <CommandList>
            <CommandEmpty>{t("STATUS.NONE")}</CommandEmpty>
            <CommandGroup>
              {ItemStatusList.map((item) => (
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
                    <List className={item.classname}/>
                  {t(item.label)}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              )).slice(1)}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
