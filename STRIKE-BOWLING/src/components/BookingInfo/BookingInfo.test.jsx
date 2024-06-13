import { describe, expect, it } from "vitest";
import BookingInfo from "./BookingInfo";
import { render, screen, fireEvent } from "@testing-library/react";

describe("BookingInfo", () => {
    it("should render my booking information", () =>{
        render(<BookingInfo />);

        const bookingInfo = {
                when: "2024-05-27T12:00",
                lanes: "1",
                people: "2",
                shoes: ["45", "41"],
                price: "340",
                id: "STR7032TPJH",
                active: true,
              };
        
        const date = screen.getByLabelText(/Date/i);
        const time = screen.getByLabelText(/Time/i);
        const bowlers = screen.getByLabelText(/Number of awesome bowlers/i);
        const lanes = screen.getByLabelText(/Number of lanes/i);
      
       
      
        fireEvent.change(date, { target: { value:"2024-05-27" } });
        fireEvent.change(time, { target: { value: '12:00' } });
        fireEvent.change(bowlers, { target: { value: '2' } });
        fireEvent.change(lanes, { target: { value: '1' } });

               
        const dateValue = screen.getByDisplayValue("2024-05-27");
        const timeValue = screen.getByDisplayValue('12:00');
        const bowlersValue = screen.getByDisplayValue('2')
        const lanesValue = screen.getByDisplayValue('1')
        // fireEvent.click(bookingButton);
        
        expect(dateValue.value).toBe("2024-05-27");
        expect(timeValue.value).toBe('12:00');
        expect(bowlersValue.value).toBe('2');
        expect(lanesValue.value).toBe('1');
      
      });
    })