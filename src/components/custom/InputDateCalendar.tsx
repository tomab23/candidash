import { ChevronDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"
import DateFormat from "@/helpers/DateFormat"

type Props = {
  name: string;
  value: Date;
  onChange: (value: Date| null) => void
  error?: string
};

const InputDateCalendar = ({ name, value, onChange } : Props) => {
    const [open, setOpen] = useState(false)

  return (
        <div className="flex flex-col gap-3 w-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id={name}
            name={name}
            className="w-auto justify-between font-normal"
          >
            {DateFormat(value, false)}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            captionLayout="dropdown"
            onSelect={(date) => {
              onChange(date ?? null)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default InputDateCalendar