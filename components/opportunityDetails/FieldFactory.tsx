import React from "react";
import { InputProps, FIELD_TYPES } from "./types";
import { TextInput } from "./inputs/TextInput";
import { CurrencyInput, PercentageInput } from "./inputs/CurrencyInput";
import { DateInput } from "./inputs/DateInput";
import { SelectInput } from "./inputs/SelectInput";
import { SearchInput } from "./inputs/SearchInput";

export const FieldFactory: React.FC<InputProps> = (props) => {
  switch (props.type) {
    case FIELD_TYPES.Text:
      return <TextInput {...props} />;
    case FIELD_TYPES.Currency:
      return <CurrencyInput {...props} />;
    case FIELD_TYPES.Percentage:
      return <PercentageInput {...props} />;
    case FIELD_TYPES.Date:
      return <DateInput {...props} />;
    case FIELD_TYPES.Select:
      return <SelectInput {...props} />;
    case FIELD_TYPES.Search:
      return <SearchInput {...props} />;
    default:
      return <TextInput {...props} />;
  }
};
