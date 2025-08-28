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


type Props = {
  name: string;
  value: string;
  onChange: (value: string) => void;
  edit: boolean
};

export function StatusBox({ name, value, onChange, edit}: Props) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("Select status")

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
          {value}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[340px] p-0">
        <Command>
          {/* <CommandInput placeholder="Search status..." className="h-9" /> */}
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {ItemStatusList.map((item) => (
                <CommandItem
                  className="hover:cursor-pointer"
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    onChange(currentValue);
                    setOpen(false);
                    setStatus(item.label)
                  }}
                  id={name}
                >
                    <List className={item.classname}/>
                  {item.label}
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
