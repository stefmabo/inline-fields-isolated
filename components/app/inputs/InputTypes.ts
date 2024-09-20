import { FieldType, FieldData } from "../types";

export interface InputProps extends Partial<FieldData> {
  value: string;
  onChange: (value: string) => void;
  onSave: () => void;
}

export const FIELD_TYPES = FieldType;
