"use client";

import React, { useState, useCallback } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FieldLayout } from "./FieldLayout";
import { SwitcherField } from "./SwitcherField";
import { FieldData } from "./types";

interface DetailSectionProps {
  title: string;
  fields: FieldData[];
  onFieldChange: (index: number, newValue: string) => void;
  onSave?: () => void;
  onCancel?: () => void;
}

export function DetailSectionCard({
  title,
  fields,
  onFieldChange,
}: DetailSectionProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleFieldChange = useCallback(
    (index: number, newValue: string) => {
      onFieldChange(index, newValue);
    },
    [onFieldChange]
  );

  if (!fields.length) {
    return <div>No fields to display</div>;
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <Button
          variant="ghost"
          size="sm"
          className="w-9 p-0"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-label={isExpanded ? `Collapse ${title}` : `Expand ${title}`}
        >
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </Button>
      </CardHeader>
      {isExpanded && (
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {fields.map((field, index) => (
              <FieldLayout key={index} fullWidth={field.fullWidth}>
                <SwitcherField
                  {...field}
                  onChange={(newValue) => handleFieldChange(index, newValue)}
                />
              </FieldLayout>
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
}
