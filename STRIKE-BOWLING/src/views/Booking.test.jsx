import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  screen,
 
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { expect, it, describe } from "vitest";
import Booking from "./Booking";

describe("Booking Component", () => {
  test("should show error message if trying to book without filling all fields", async () => {
    // Arrange
    render(<Booking />);

    // Act
    const bookingButton = screen.getByText("strIIIIIike!", { selector: "button" });
    fireEvent.click(bookingButton);

    // Assert
    const errorMessage = await screen.findByText(
      "Fill out all the fields and make sure that people and shoes is the same number."
    );
    expect(errorMessage).toBeInTheDocument();
  });


test("show error message", async () => {
  // arrange
  const { container, getByText } = render(<Booking />);
  const bookingButton = getByText("strIIIIIike!", { selector: "button" });
  fireEvent.click(bookingButton);
  // assert
  const errorMessageEls = container.getElementsByClassName("error-message");
  expect(errorMessageEls.length).toBeGreaterThan(0);
});

test("navigate back to homepage", async () => {
  // arrange
  render(<Booking />)
  const currentDate = new Date().toISOString().split("T")[0];
  const date = screen.getByLabelText(/Date/i);

  const time = screen.getByLabelText(/Time/i);
  const bowlers = screen.getByLabelText(/Number of awesome bowlers/i);
  const lanes = screen.getByLabelText(/Number of lanes/i);

  fireEvent.change(date, {
    target: { value: currentDate },
  });
  fireEvent.change(time, { target: { value: "12:00" } });
  fireEvent.change(bowlers, { target: { value: "1" } });
  fireEvent.change(lanes, { target: { value: "1" } });

  // const bookingButton = screen.getAllByTestId("backBtn");
  // fireEvent.click(bookingButton);

  
  const addShoeButton = screen.getByText("+");
  fireEvent.click(addShoeButton);
  

  const inputs = screen.getByRole("textbox");
  expect(inputs).toBeInTheDocument();
  fireEvent.change(inputs, { target: { value: "45" } });
  



  const striiikeBtn = screen.getByTestId("strike_btn");
  expect(striiikeBtn).toBeInTheDocument();
  fireEvent.click(striiikeBtn);

  await waitFor(() => {
    const confirmationTitle = screen.getByText("See you soon!");
    expect(confirmationTitle).toBeInTheDocument();
    const sweetButton = screen.getByTestId("backBtn");
    expect(sweetButton).toBeInTheDocument();
    fireEvent.click(sweetButton);
  });

  await waitFor(() => {
    const dateInput = screen.getByLabelText(/Date/i);
    expect(dateInput.value).toBe("");


    const timeInput = screen.getByLabelText(/Time/i);
    expect(timeInput.value).toBe("");

    const bowlerInput = screen.getByLabelText(/Number of awesome bowlers/i);
    expect(bowlerInput.value).toBe("");

    const laneInput = screen.getByLabelText(/Number of lanes/i);
    expect(laneInput.value).toBe("");

    const addButtons = screen.getByText("+");
    expect(addButtons).toBeInTheDocument();

    const striiikeBtn = screen.getByTestId("strike_btn");
    expect(striiikeBtn).toBeTruthy();
   

    });
});
});
