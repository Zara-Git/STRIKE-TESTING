import { render, screen, waitFor, fireEvent, getByLabelText } from "@testing-library/react";
import App from "./App";
import { describe, beforeEach, test, expect } from "vitest";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });
  // ....User Story 1: Book a date and time with number of players....//

  test("should book with valid date and time", async () => {
    const date = await screen.getByLabelText(/Date/i);
    const time = await screen.getByLabelText(/Time/i);

    fireEvent.input(date, { target: { value: "2024-05-27" } });
    fireEvent.change(time, { target: { value: "12:00" } });

    const dateValue = screen.getByDisplayValue("2024-05-27");
    const timeValue = screen.getByDisplayValue("12:00");

    expect(dateValue.value).toBe("2024-05-27");
    expect(timeValue.value).toBe("12:00");
  });

  test("should book with valid number of bowlers and lanes", async () => {
    const bowlers = screen.getByLabelText(/Number of awesome bowlers/i);
    const lanes = screen.getByLabelText(/Number of lanes/i);

    fireEvent.change(bowlers, { target: { value: "2" } });
    fireEvent.change(lanes, { target: { value: "1" } });

    const bowlersValue = screen.getByDisplayValue("2");
    const lanesValue = screen.getByDisplayValue("1");

    expect(bowlersValue).toHaveValue(2);
    expect(lanesValue).toHaveValue(1);
  });
  test("should display error message for incomplete fields", async () => {
    const date = screen.getByLabelText(/Date/i);
    const time = screen.getByLabelText(/Time/i);
    const bowlers = screen.getByLabelText(/Number of awesome bowlers/i);
    const lanes = screen.getByLabelText(/Number of lanes/i);
    const strikeButton = screen.getByText(/strIIIIIike!/i);

    // Clear the fields
    fireEvent.change(date, { target: { value: "" } });
    fireEvent.change(time, { target: { value: "" } });
    fireEvent.change(bowlers, { target: { value: "" } });
    fireEvent.change(lanes, { target: { value: "" } });

    // Click the strike button
    fireEvent.click(strikeButton);

    // Wait for the error message to appear
    await waitFor(() => {
      expect(
        screen.getByText(
          "Fill out all the fields and make sure that people and shoes is the same number."
        )
      ).toBeInTheDocument();
    });
  });
});

