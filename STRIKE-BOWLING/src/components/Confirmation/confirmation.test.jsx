import { describe, test, expect } from 'vitest';
import Confirmation from './Confirmation';
import { render, screen } from '@testing-library/react';

//... user story 4: Som användare vill jag kunna skicka iväg min reservation och få tillbaka ett ett bokningsnummer och totalsumma så jag vet hur mycket jag ska betala. (120 kr / person + 100 kr / bana)...//

describe('Confirmation', () => {
  const bookingInfo = {
    when: '2024-05-27T12:00',
    lanes: '1',
    people: '2',
    shoes: ['45', '41'],
    price: '340',
    id: 'STR7032TPJH',
    active: true,
  };

  test('should display booking details and reference number', () => {
    render(<Confirmation confirmationDetails={bookingInfo} />);

    expect(screen.getByLabelText(/When/i)).toHaveValue('2024-05-27 12:00');
    expect(screen.getByLabelText(/Who/i)).toHaveValue('2');
    expect(screen.getByLabelText(/Lanes/i)).toHaveValue('1');
    expect(screen.getByLabelText(/Bookingnumber/i)).toHaveValue('STR7032TPJH');
    expect(screen.getByText('Total:')).toBeInTheDocument();
    expect(screen.getByText('340 sek')).toBeInTheDocument();
    expect(screen.getByText("Sweet, let's go!")).toBeInTheDocument();
  });

  test('should calculate the total amount correctly', () => {
    render(<Confirmation confirmationDetails={bookingInfo} />);

    // Total amount calculation: 120 kr / person + 100 kr / lane
    const totalAmount = (parseInt(bookingInfo.people) * 120) + (parseInt(bookingInfo.lanes) * 100);
    expect(screen.getByText('Total:')).toBeInTheDocument();
    expect(screen.getByText(`${totalAmount} sek`)).toBeInTheDocument();
  });

  test('"should get back a booking reference number with detail"', () => {
    render(<Confirmation confirmationDetails={bookingInfo} />);

    expect(screen.getByLabelText(/When/i)).toHaveValue('2024-05-27 12:00');
    expect(screen.getByLabelText(/Who/i)).toHaveValue('2');
    expect(screen.getByLabelText(/Lanes/i)).toHaveValue('1');
    expect(screen.getByLabelText(/Bookingnumber/i)).toHaveValue('STR7032TPJH');
    expect(screen.getByText('Total:')).toBeInTheDocument();
    expect(screen.getByText('340 sek')).toBeInTheDocument();
    expect(screen.getByText("Sweet, let's go!")).toBeInTheDocument();
  });
});
