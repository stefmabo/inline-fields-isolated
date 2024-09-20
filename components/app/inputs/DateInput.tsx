import React from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import { InputProps } from "./InputTypes";

export const DateInput: React.FC<InputProps> = ({
  value,
  onChange,
  onSave,
}) => (
  <Popover>
    <PopoverTrigger asChild>
      <Button
        variant="outline"
        className="w-full justify-start text-left font-normal"
      >
        {value ? format(new Date(value), "PPP") : <span>Pick a date</span>}
        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-auto p-0" align="start">
      <Calendar
        mode="single"
        selected={value ? new Date(value) : undefined}
        onSelect={(date) => {
          onChange(date ? date.toISOString() : "");
          onSave();
        }}
        initialFocus
      />
    </PopoverContent>
  </Popover>
);
