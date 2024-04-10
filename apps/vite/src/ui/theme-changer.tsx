import themesObject from "daisyui/src/theming/themes";
import { Select, SelectProps } from "@/ui/select";
import {
  ChangeEvent,
  ChangeEventHandler,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

interface ThemeContextProps {
  theme: keyof typeof themesObject | null | undefined;
  setTheme: (theme: keyof typeof themesObject | null | undefined) => void;
  handleThemeChange: ChangeEventHandler<HTMLSelectElement>;
}
const ThemeContext = createContext<ThemeContextProps>({
  theme: undefined,
  setTheme: () => {},
  handleThemeChange: () => {},
});

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context.theme) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const initialState = getInitialThemeState();
  const [theme, setTheme] = useState<
    keyof typeof themesObject | null | undefined
  >(initialState);
  const handleThemeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as keyof typeof themesObject);
    localStorage.setItem("theme", e.target.value);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeChanger = (
  props: Omit<SelectProps, "onChange" | "value">,
) => {
  const { theme, handleThemeChange } = useContext(ThemeContext);
  const themes = Object.keys(themesObject);

  if (!theme || !handleThemeChange) {
    throw new Error("ThemeChanger must be used within a ThemeProvider");
  }

  return (
    <Select onChange={handleThemeChange} value={theme} {...props}>
      <>
        <option disabled>Theme</option>
        {themes.map((theme) => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </>
    </Select>
  );
};

function getInitialThemeState(): keyof typeof themesObject {
  const theme = localStorage.getItem("theme");
  const themes = Object.keys(themesObject);
  const isPreferredThemeDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  if (theme && themes.includes(theme)) {
    return theme as keyof typeof themesObject;
  } else if (isPreferredThemeDark) {
    return "dark";
  } else {
    return "light";
  }
}
