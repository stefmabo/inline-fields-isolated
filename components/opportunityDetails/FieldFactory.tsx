import React from "react";
import { InputProps, FIELD_TYPES } from "./types";
import { TextInput } from "./inputs/TextInput";
import { CurrencyInput, PercentageInput } from "./inputs/CurrencyInput";
import { DateInput } from "./inputs/DateInput";
import { SelectInput } from "./inputs/SelectInput";
import { SearchInput } from "./inputs/SearchInput";

const components: Record<string, React.ComponentType<InputProps>> = {
  [FIELD_TYPES.Text]: TextInput,
  [FIELD_TYPES.Currency]: CurrencyInput,
  [FIELD_TYPES.Percentage]: PercentageInput,
  [FIELD_TYPES.Date]: DateInput,
  [FIELD_TYPES.Select]: SelectInput,
  [FIELD_TYPES.Search]: SearchInput,
};

export const FieldFactory: React.FC<InputProps> = (props) => {
  const Component =
    components[props.type as keyof typeof components] || TextInput;
  return <Component {...props} />;
};
