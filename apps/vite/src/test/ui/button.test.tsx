import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect, vi, describe } from "vitest";
import { Button, buttonVariants } from "@/ui/button";

describe("Button", () => {
  test("renders button with default intent", () => {
    render(<Button>Hello</Button>);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(buttonVariants());
  });

  test("renders button with custom intent", () => {
    render(<Button intent="secondary">Hello</Button>);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass(buttonVariants({ intent: "secondary" }));
  });

  test("renders button with custom class", () => {
    render(<Button className="custom-class">Hello</Button>);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass("custom-class");
  });

  test("renders button with size variant", () => {
    render(<Button size="sm">Hello</Button>);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass(buttonVariants({ size: "sm" }));
  });

  test("renders button with shape variant", () => {
    render(<Button shape="circle">Hello</Button>);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass(buttonVariants({ shape: "circle" }));
  });

  test("renders button with width variant", () => {
    render(<Button width="block">Hello</Button>);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass(buttonVariants({ width: "block" }));
  });

  test("renders button with animation variant", () => {
    render(<Button animation="none">Hello</Button>);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass(buttonVariants({ animation: "none" }));
  });

  test("renders button as child element", () => {
    render(
      <Button asChild>
        <a href="">Hello</a>
      </Button>
    );
    const buttonElement = screen.getByRole("link");
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClick handler when clicked", () => {
    const onClickMock = vi.fn();
    render(<Button onClick={onClickMock}>Click me</Button>);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
