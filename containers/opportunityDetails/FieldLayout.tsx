import React from "react";
import cx from "classnames";
import { FieldLayoutProps } from "./types";

export const FieldLayout: React.FC<FieldLayoutProps> = ({
  fullWidth,
  children,
}) => <div className={cx("mb-4", { "col-span-2": fullWidth })}>{children}</div>;
