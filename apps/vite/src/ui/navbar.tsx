import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export const Navbar = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <nav
      className={cn(
        "navbar z-10 fixed shadow bg-neutral shadow-gray-900/50",
        className,
      )}
      {...props}
    >
      {children}
    </nav>
  );
};

export const NavbarStart = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("navbar-start", className)} {...props}>
      {children}
    </div>
  );
};

export const NavbarEnd = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("navbar-end", className)} {...props}>
      {children}
    </div>
  );
};

export const NavbarCenter = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("navbar-center", className)} {...props}>
      {children}
    </div>
  );
};
