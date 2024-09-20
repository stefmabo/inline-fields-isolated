import React, { useState, useCallback } from "react";
import cx from "classnames";
import { FinancialFieldProps, FieldType } from "./types";
import { formatValue, useOutsideClick } from "./utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Edit2, Search, Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";

export const SwitcherField: React.FC<FinancialFieldProps> = ({
  label,
  value,
  type,
  editable,
  options,
  icon,
  onChange,
  isHorizontal = false,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);

  const handleEdit = useCallback(() => {
    if (editable) {
      setIsEditing(true);
    }
  }, [editable]);

  const handleSave = useCallback(() => {
    onChange(tempValue);
    setIsEditing(false);
  }, [onChange, tempValue]);

  const handleOutsideClick = useCallback(() => {
    if (isEditing) {
      handleSave();
    }
  }, [isEditing, handleSave]);

  const ref = useOutsideClick(handleOutsideClick);

  const renderInput = useCallback(() => {
    switch (type) {
      case FieldType.Date:
        return (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                {tempValue ? (
                  format(new Date(tempValue), "PPP")
                ) : (
                  <span>Pick a date</span>
                )}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={tempValue ? new Date(tempValue) : undefined}
                onSelect={(date) => {
                  setTempValue(date ? date.toISOString() : "");
                  handleSave();
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        );
      case FieldType.Select:
        return (
          <Select
            value={tempValue}
            onValueChange={(value) => {
              setTempValue(value);
              handleSave();
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
      case FieldType.Search:
        return (
          <div className="relative">
            <Input
              type="text"
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
              onBlur={handleSave}
              className="w-full pl-10"
              placeholder="Search..."
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        );
      case FieldType.Currency:
      case FieldType.Percentage:
        return (
          <Input
            type="number"
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            onBlur={handleSave}
            className="w-full"
            step="0.01"
          />
        );
      default:
        return (
          <Input
            type="text"
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            onBlur={handleSave}
            className="w-full"
          />
        );
    }
  }, [type, tempValue, options, handleSave]);

  return (
    <div className="flex justify-between items-center gap-2">
      <div
        className={cx("group w-full", {
          flex: isHorizontal,
          "items-center": isHorizontal,
          "gap-5": isHorizontal,
        })}
        ref={ref}
      >
        <div className="text-sm font-medium">{label}</div>
        <div
          className={cx(
            "p-2 rounded-md transition-colors duration-200 w-full h-10",
            {
              "group-hover:bg-blue-50 cursor-pointer": editable && !isEditing,
            }
          )}
          onClick={handleEdit}
          role={editable ? "button" : undefined}
          tabIndex={editable ? 0 : undefined}
          aria-label={editable ? `Edit ${label}` : undefined}
        >
          {isEditing ? (
            renderInput()
          ) : (
            <div className="text-lg flex items-center justify-between relative">
              <span
                className={cx({
                  "text-blue-400": editable,
                })}
              >
                {formatValue(value, type)}
              </span>
              <div className="absolute inset-y-0 right-2 m-auto">
                {editable && (
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Edit2 />
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      {icon && (
        <div
          className={cx({
            "pt-5": !isHorizontal,
          })}
        >
          {icon}
        </div>
      )}
    </div>
  );
};
