import { ReactNode } from "react";

export enum FieldType {
  Text = "text",
  Currency = "currency",
  Percentage = "percentage",
  Date = "date",
  Select = "select",
  Search = "search",
}

export interface FieldData {
  label: string;
  value: string;
  type: FieldType;
  editable: boolean;
  fullWidth?: boolean;
  options?: string[];
  icon?: ReactNode;
  isHorizontal?: boolean;
}

export interface FieldLayoutProps {
  fullWidth?: boolean;
  children: ReactNode;
}

export interface FinancialFieldProps extends FieldData {
  onChange: (value: string) => void;
}
