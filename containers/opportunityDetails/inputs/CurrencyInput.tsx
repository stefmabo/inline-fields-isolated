import React from "react";
import { Input } from "@/components/ui/input";
import { InputProps } from "../types";

export const CurrencyInput: React.FC<InputProps> = ({
  value,
  onChange,
  onSave,
}) => (
  <Input
    type="number"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    onBlur={onSave}
    className="w-full"
    step="0.01"
  />
);

export const PercentageInput: React.FC<InputProps> = CurrencyInput;
