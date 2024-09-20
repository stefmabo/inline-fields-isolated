import React from "react";
import { Input } from "@/components/ui/input";
import { InputProps } from "./InputTypes";

export const TextInput: React.FC<InputProps> = ({
  value,
  onChange,
  onSave,
}) => (
  <Input
    type="text"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    onBlur={onSave}
    className="w-full"
  />
);
