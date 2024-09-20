import React from "react";
import { InputProps, FIELD_TYPES } from "./InputTypes";
import { TextInput } from "./TextInput";
import { CurrencyInput, PercentageInput } from "./CurrencyInput";
import { DateInput } from "./DateInput";
import { SelectInput } from "./SelectInput";
import { SearchInput } from "./SearchInput";

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
