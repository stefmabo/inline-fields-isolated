"use client";

import React, { useState, useCallback } from "react";
import { DetailSectionCard } from "./DetailSectionCard";
import { initialFields } from "./initialFields";
import { FieldData } from "./types";

export function FinancialInformationCard() {
  const [fields, setFields] = useState<FieldData[]>(initialFields);

  const handleFieldChange = useCallback((index: number, newValue: string) => {
    setFields((prevFields) =>
      prevFields.map((field, i) =>
        i === index ? { ...field, value: newValue } : field
      )
    );
  }, []);

  return (
    <DetailSectionCard
      title="Financial Information"
      fields={fields}
      onFieldChange={handleFieldChange}
    />
  );
}
