import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { expect, describe, test } from "vitest";
import { BaseLayout } from "@/components/layout";

describe("BaseLayout", () => {
  test("renders children", () => {
    const { getByText } = render(
      <BaseLayout>
        <div>Child 1</div>
        <div>Child 2</div>
      </BaseLayout>
    );

    expect(getByText("Child 1")).toBeInTheDocument();
    expect(getByText("Child 2")).toBeInTheDocument();
  });

  test("applies custom className", () => {
    const { container } = render(
      <BaseLayout className="custom-class">
        <div>Child</div>
      </BaseLayout>
    );

    expect(container.firstChild).toHaveClass("custom-class");
  });
});
