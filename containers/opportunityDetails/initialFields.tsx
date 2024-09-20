import { FieldData, FieldType } from "./types";
import { Link, Copy } from "lucide-react";

export const initialFields: FieldData[] = [
  {
    label: "Buyer's Agent Commission",
    value: "0.1",
    type: FieldType.Percentage,
    editable: true,
    fullWidth: true,
    isHorizontal: true,
    icon: <Link />,
  },
  {
    label: "Address",
    value: "123 Main St, Anytown, USA",
    type: FieldType.Text,
    editable: true,
    fullWidth: true,
  },
  {
    label: "Sales Price",
    value: "800000",
    type: FieldType.Currency,
    editable: true,
  },
  {
    label: "Contract Price",
    value: "1000000",
    type: FieldType.Currency,
    editable: false,
  },
  {
    label: "Commission Rate",
    value: "3.00",
    type: FieldType.Percentage,
    editable: true,
  },
  {
    label: "Commission Amount",
    value: "30000",
    type: FieldType.Currency,
    editable: false,
  },
  {
    label: "Contract Date",
    value: "2024-05-19",
    type: FieldType.Date,
    editable: true,
  },
  {
    label: "Close Date",
    value: "2024-05-31",
    type: FieldType.Date,
    editable: true,
  },
  {
    label: "Property Type",
    value: "Residential",
    type: FieldType.Select,
    editable: true,
    options: ["Residential", "Commercial", "Industrial"],
    fullWidth: true,
  },
  {
    label: "Address",
    value: "123 Main St, Anytown, USA",
    type: FieldType.Text,
    editable: true,
    fullWidth: true,
    icon: <Link />,
  },
  {
    label: "Notes",
    value: "Additional information here",
    type: FieldType.Text,
    editable: true,
    fullWidth: true,
    icon: <Copy />,
  },
  {
    label: "Search Comparables",
    value: "Assignee Name",
    type: FieldType.Search,
    editable: true,
    fullWidth: true,
  },
];
