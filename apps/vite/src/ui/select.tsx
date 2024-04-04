import { VariantProps, cva } from "class-variance-authority";

import { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface SelectProps
  extends VariantProps<typeof selectVariants>,
    SelectHTMLAttributes<HTMLSelectElement> {}

const selectVariants = cva("select", {
  variants: {
    intent: {
      primary: "select-primary",
      secondary: "select-secondary",
      accent: "select-accent",
      info: "select-info",
      success: "select-success",
      warning: "select-warning",
      error: "select-error",
    },
    dimension: {
      xs: "select-xs",
      sm: "select-sm",
      md: "select-md",
      lg: "select-lg",
    },
    border: {
      bordered: "select-bordered",
    },
  },
  defaultVariants: {
    intent: "primary",
    dimension: "md",
    border: "bordered",
  },
});

export const Select = ({
  className,
  intent,
  dimension,
  border,
  children,
  ...props
}: SelectProps) => {
  return (
    <select
      className={cn(selectVariants({ intent, dimension, border }), className)}
      {...props}
    >
      {children}
    </select>
  );
};
