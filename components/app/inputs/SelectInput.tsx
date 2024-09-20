import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InputProps } from "./InputTypes";

export const SelectInput: React.FC<InputProps> = ({
  value,
  onChange,
  onSave,
  options,
}) => (
  <Select
    value={value}
    onValueChange={(value) => {
      onChange(value);
      onSave();
    }}
  >
    <SelectTrigger className="w-full">
      <SelectValue placeholder="Select an option" />
    </SelectTrigger>
    <SelectContent>
      {options?.map((option) => (
        <SelectItem key={option} value={option}>
          {option}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);
