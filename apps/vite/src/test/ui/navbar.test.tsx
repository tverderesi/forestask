import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { Navbar, NavbarStart, NavbarEnd, NavbarCenter } from "@/ui/navbar";

describe("Navbar", () => {
  test("renders children", () => {
    render(
      <Navbar data-testid="navbar">
        <NavbarStart>Start</NavbarStart>
        <NavbarCenter>Center</NavbarCenter>
        <NavbarEnd>End</NavbarEnd>
      </Navbar>
    );

    expect(screen.getByText("Start")).toBeInTheDocument();
    expect(screen.getByText("Center")).toBeInTheDocument();
    expect(screen.getByText("End")).toBeInTheDocument();
  });

  test("applies className prop", () => {
    render(
      <Navbar className="custom-navbar" data-testid="navbar">
        <NavbarStart>Start</NavbarStart>
        <NavbarEnd>End</NavbarEnd>
      </Navbar>
    );

    expect(screen.getByTestId("navbar")).toHaveClass("custom-navbar");
  });

  test("applies props", () => {
    render(
      <Navbar id="navbar" data-testid="navbar">
        <NavbarStart>Start</NavbarStart>
        <NavbarEnd>End</NavbarEnd>
      </Navbar>
    );

    expect(screen.getByTestId("navbar")).toHaveAttribute("id", "navbar");
  });
});

describe("NavbarStart", () => {
  test("renders children", () => {
    render(<NavbarStart>Start</NavbarStart>);
    expect(screen.getByText("Start")).toBeInTheDocument();
  });

  test("applies className prop", () => {
    render(<NavbarStart className="custom-start">Start</NavbarStart>);
    expect(screen.getByText("Start")).toHaveClass("custom-start");
  });

  test("applies props", () => {
    render(<NavbarStart id="start">Start</NavbarStart>);
    expect(screen.getByText("Start")).toHaveAttribute("id", "start");
  });
});

describe("NavbarEnd", () => {
  test("renders children", () => {
    render(<NavbarEnd>End</NavbarEnd>);
    expect(screen.getByText("End")).toBeInTheDocument();
  });

  test("applies className prop", () => {
    render(<NavbarEnd className="custom-end">End</NavbarEnd>);
    expect(screen.getByText("End")).toHaveClass("custom-end");
  });

  test("applies props", () => {
    render(<NavbarEnd id="end">End</NavbarEnd>);
    expect(screen.getByText("End")).toHaveAttribute("id", "end");
  });
});

describe("NavbarCenter", () => {
  test("renders children", () => {
    render(<NavbarCenter>Center</NavbarCenter>);
    expect(screen.getByText("Center")).toBeInTheDocument();
  });

  test("applies className prop", () => {
    render(<NavbarCenter className="custom-center">Center</NavbarCenter>);
    expect(screen.getByText("Center")).toHaveClass("custom-center");
  });

  test("applies props", () => {
    render(<NavbarCenter id="center">Center</NavbarCenter>);
    expect(screen.getByText("Center")).toHaveAttribute("id", "center");
  });
});
