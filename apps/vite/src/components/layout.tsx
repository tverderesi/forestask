import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";
import { Navbar, NavbarStart, NavbarEnd } from "@/ui/navbar";
import { useTheme, ThemeChanger } from "@/ui/theme-changer";
export const BaseLayout = ({
  children,
  className,
}: {
  children: ReactNode | ReactNode[];
  className?: HTMLAttributes<HTMLDivElement>["className"];
}) => {
  const { theme } = useTheme();
  return (
    <div
      className={cn("w-screen h-screen overflow-y-scroll", className)}
      data-theme={theme}
    >
      <Navbar className="backdrop-blur-lg">
        <NavbarStart>
          <p className="font-semibold text-neutral-content text-xl">
            Forestask
          </p>
        </NavbarStart>
        <NavbarEnd>
          <ThemeChanger dimension="xs" />
        </NavbarEnd>
      </Navbar>
      {children}
    </div>
  );
};
