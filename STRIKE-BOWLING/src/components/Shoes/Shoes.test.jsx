import React, { useCallback, useState } from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import Shoes from "./Shoes";

function ShoesWrapper() {
  const [shoes, setShoes] = useState([]);
  const addShoe = useCallback((id) => setShoes((s) => [...s, { id }]), []);
  const removeShoe = useCallback(
    (id) =>
      setShoes((s) => {
        const index = s.findIndex((v) => v.id === id);
        s.splice(index, 1);
        return s.slice();
      }),
    []
  );
  return (
    <Shoes
      updateSize={() => {}}
      addShoe={addShoe}
      removeShoe={removeShoe}
      shoes={shoes}
    />
  );
}

// user story 2 : Ange Skostorlek för Varje Spelare //...

describe("shoes", () => {
  test("allows the user to choose shoe size for each player", async () => {
    const { getByText, getByDisplayValue, getAllByLabelText } = render(
      <ShoesWrapper />
    );

    const addShoeButton = getByText("+", { selector: "button" });
    fireEvent.click(addShoeButton);
    fireEvent.click(addShoeButton);

    const inputs = getAllByLabelText(/Shoe size \/ person/i, {
      selector: "input",
    });

    fireEvent.change(inputs[0], { target: { value: "45" } });
    fireEvent.change(inputs[1], { target: { value: "41" } });

    const shoeValueOne = getByDisplayValue("45");
    const shoeValueTwo = getByDisplayValue("41");

    expect(shoeValueOne).toBeInTheDocument();
    expect(shoeValueTwo).toBeInTheDocument();
  });

  test("allows the users to add their shoe size", async () => {
    render(<ShoesWrapper />);

    const sizeInputs = screen.queryAllByTestId("shoe_input");
    expect(sizeInputs).toHaveLength(0);

    const addButton = screen.getByText("+");
    expect(addButton).toBeTruthy();
  });

  //... user story 3 :Som användare vill jag kunna ta bort ett fält för skostorlek om jag råkade klicka i ett för mycket så jag inte boka skor i onödan...//

  test("allows the user to remove an unnecessary shoe size", async () => {
    const { getByText, queryByText } = render(<ShoesWrapper />);

    const addShoeButton = getByText("+", { selector: "button" });
    fireEvent.click(addShoeButton);

    const removeButton = queryByText("-");
    fireEvent.click(removeButton);

    await waitFor(() => {
      expect(removeButton).not.toBeInTheDocument();
      
    });
  });
  
});
