import { UtcDateFormatterPipe } from './utc-date-formatter.pipe';

describe('UtcDateFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new UtcDateFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});
