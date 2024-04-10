import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect, vi, describe } from "vitest";
import { Select } from "@/ui/select";

describe("Select", () => {
  test("renders select element wtesth options", () => {
    render(
      <Select>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>,
    );

    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();

    const optionElements = screen.getAllByRole("option");
    expect(optionElements).toHaveLength(3);
  });

  test("calls onChange callback when an option is selected", () => {
    const handleChange = vi.fn().mockImplementation((e) => {
      console.log(e.target.value);
    });

    vi.spyOn(console, "log");
    render(
      <Select onChange={handleChange}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>,
    );

    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "option2" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith("option2");
  });
});
