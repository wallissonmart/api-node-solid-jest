import { Appointment } from './appointment';

describe('create appointment', () => {
  test('should be possible get costumer', () => {
    const appointment = new Appointment({
      customer: 'John',
      startsAt: new Date(),
      endsAt: new Date(),
    });

    expect(appointment.customer).toEqual('John');
  });
});
