import { useRef, useEffect } from "react";
import { format } from "date-fns";
import { FieldType } from "./types";

export const formatValue = (val: string, fieldType: FieldType): string => {
  switch (fieldType) {
    case FieldType.Currency:
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(Number(val));
    case FieldType.Percentage:
      return `${val}%`;
    case FieldType.Date:
      return format(new Date(val), "MMM dd, yyyy");
    default:
      return val;
  }
};

export const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback]);

  return ref;
};
