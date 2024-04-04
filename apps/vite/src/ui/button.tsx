import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("btn disabled:btn-disabled", {
  variants: {
    intent: {
      primary: "btn-primary",
      neutral: "btn-neutral",
      secondary: "btn-secondary",
      accent: "btn-accent",
      info: "btn-info",
      success: "btn-success",
      warning: "btn-warning",
      ghost: "btn-ghost",
      outline: "btn-outline",
      glass: "glass",
      link: "btn-link",
    },
    size: {
      md: "btn-md",
      sm: "btn-sm",
      xs: "btn-xs",
      lg: "btn-lg",
    },
    width: {
      block: "btn-block",
      wide: "btn-wide",
    },
    shape: {
      circle: "btn-circle",
      square: "btn-square",
    },
    animation: {
      none: "no-animation",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "md",
  },
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, intent, size, width, shape, animation, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ intent, size, width, shape, animation }), className)} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
