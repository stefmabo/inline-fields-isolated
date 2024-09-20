import React, { useState, useCallback } from "react";
import cx from "classnames";
import { FinancialFieldProps } from "./types";
import { formatValue, useOutsideClick } from "./utils";
import { Edit2 } from "lucide-react";
import { FieldFactory } from "./inputs/FieldFactory";

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
            <FieldFactory
              type={type}
              value={tempValue}
              onChange={setTempValue}
              onSave={handleSave}
              options={options}
            />
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
