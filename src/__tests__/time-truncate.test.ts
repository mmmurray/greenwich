import {
  timeCreate,
  timeToISOString,
  timeTruncateToDay,
  timeTruncateToHour,
  timeTruncateToMinute,
  timeTruncateToMonth,
  timeTruncateToSecond,
  timeTruncateToYear,
} from '..';

const t1 = timeCreate({
  year: 1993,
  month: 10,
  day: 22,
  hour: 7,
  minute: 22,
  second: 13,
  millisecond: 123,
});

test('can truncate time to year', () => {
  const t2 = timeTruncateToYear(t1);

  expect(timeToISOString(t2)).toEqual('1993-01-01T00:00:00.000Z');
});

test('can truncate time to month', () => {
  const t2 = timeTruncateToMonth(t1);

  expect(timeToISOString(t2)).toEqual('1993-10-01T00:00:00.000Z');
});

test('can truncate time to day', () => {
  const t2 = timeTruncateToDay(t1);

  expect(timeToISOString(t2)).toEqual('1993-10-22T00:00:00.000Z');
});

test('can truncate time to hour', () => {
  const t2 = timeTruncateToHour(t1);

  expect(timeToISOString(t2)).toEqual('1993-10-22T07:00:00.000Z');
});

test('can truncate time to minute', () => {
  const t2 = timeTruncateToMinute(t1);

  expect(timeToISOString(t2)).toEqual('1993-10-22T07:22:00.000Z');
});

test('can truncate time to second', () => {
  const t2 = timeTruncateToSecond(t1);

  expect(timeToISOString(t2)).toEqual('1993-10-22T07:22:13.000Z');
});
