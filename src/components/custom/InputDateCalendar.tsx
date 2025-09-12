import { ChevronDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
// import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"

type Props = {
  name: string;
  value: Date;
  onChange: (value: Date| null) => void
  error?: string
  placeholder: string
};

const InputDateCalendar = ({ name, value, onChange, placeholder } : Props) => {
    const [open, setOpen] = useState(false)
    // const [date, setDate] = useState<Date | undefined>()
    

  return (
        <div className="flex flex-col gap-3 w-full">
      {/* <Label htmlFor="date" className="px-1">
        Date of birth
      </Label> */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id={name}
            name={name}
            className="w-auto justify-between font-normal"
          >
            {value ? value.toLocaleDateString() : placeholder}
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