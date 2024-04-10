import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { expect, describe, test, beforeAll, vi } from "vitest";
import { BaseLayout } from "@/components/layout";
import { ThemeProvider } from "@/ui/theme-changer";

describe("BaseLayout", () => {
  beforeAll(() => {
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
  test("renders children", () => {
    const { getByText } = render(
      <ThemeProvider>
        <BaseLayout>
          <div>Child 1</div>
          <div>Child 2</div>
        </BaseLayout>
      </ThemeProvider>,
    );

    expect(getByText("Child 1")).toBeInTheDocument();
    expect(getByText("Child 2")).toBeInTheDocument();
  });

  test("applies custom className", () => {
    const { container } = render(
      <ThemeProvider>
        <BaseLayout className="custom-class">
          <div>Child</div>
        </BaseLayout>
      </ThemeProvider>,
    );

    expect(container.firstChild).toHaveClass("custom-class");
  });
});
