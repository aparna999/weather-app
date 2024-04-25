import { DateTimeFormaterPipe } from './date-time-formater.pipe';

describe('DateTimeFormaterPipe', () => {
  it('create an instance', () => {
    const pipe = new DateTimeFormaterPipe();
    expect(pipe).toBeTruthy();
  });
});
