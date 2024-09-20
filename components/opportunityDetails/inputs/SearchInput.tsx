import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { InputProps } from "../types";

export const SearchInput: React.FC<InputProps> = ({
  value,
  onChange,
  onSave,
}) => (
  <div className="relative">
    <Input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onSave}
      className="w-full pl-10"
      placeholder="Search..."
    />
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
  </div>
);
