import './BookingInfo.scss';

import Input from '../Input/Input';

function BookingInfo({ updateBookingDetails }) {
  return (
    <section className='booking-info'>
      <header>
        <h2 className='booking-info__heading'>When, WHAT & Who</h2>
      </header>
      <form className='booking-info__details'>
        <section className='booking-info__when'>
          <Input
            label='Date'
            type='date'
             htmlFor="Date"
            testId='selected_date'
            customClass='booking-info__date'
            name='when'
            handleChange={updateBookingDetails}
          />
          <Input
            label='Time'
            testId='selected_time'
            type='time'
            name='time'
            handleChange={updateBookingDetails}
          />
        </section>
        <Input
          label='Number of awesome bowlers'
          testId='no_of_bowlers'
          type='number'
          customClass='booking-info__who'
          name='people'
          handleChange={updateBookingDetails}
        />
        <Input
          label='Number of lanes'
          testId='no_of_lanes'
          type='number'
          customClass='booking-info__lanes'
          name='lanes'
          handleChange={updateBookingDetails}
        />
      </form>
    </section>
  );
}

export default BookingInfo;
