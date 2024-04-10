import "@testing-library/jest-dom";
import { describe, test, expect, beforeEach, vi } from "vitest";
import { useTheme, ThemeProvider } from "@/ui/theme-changer";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("useTheme", () => {
  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        addListener: vi.fn(),
        removeListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }),
    });
  });

  test("throws an error when used outside of a ThemeProvider", () => {
    const TestComponent = () => {
      const { theme } = useTheme();
      return <div>theme: {theme}</div>;
    };
    expect(() => render(<TestComponent />)).toThrowError(
      "useTheme must be used within a ThemeProvider",
    );
  });

  test("returns the theme when used within a ThemeProvider", () => {
    const TestComponent = () => {
      const { theme } = useTheme();
      return <div>theme: {theme}</div>;
    };
    const { getByText } = render(<TestComponent />, {
      wrapper: ({ children }) => <ThemeProvider>{children}</ThemeProvider>,
    });
    expect(getByText("theme: light")).toBeInTheDocument();
  });

  test("returns the updated theme when the theme is changed", () => {
    const TestComponent = () => {
      const { theme, setTheme } = useTheme();
      return (
        <div>
          <div>{theme}</div>
          <button onClick={() => setTheme("dark")}>Change theme</button>
        </div>
      );
    };
    const { getByText } = render(<TestComponent />, {
      wrapper: ({ children }) => <ThemeProvider>{children}</ThemeProvider>,
    });
    expect(getByText("light")).toBeInTheDocument();
    act(() => {
      getByText("Change theme").click();
    });
    expect(getByText("dark")).toBeInTheDocument();
  });
});
