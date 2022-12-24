import {
  timeCreate,
  timeDay,
  timeHour,
  timeMillisecond,
  timeMinute,
  timeMonth,
  timeSecond,
  timeYear,
} from '..';

const time = timeCreate({
  year: 2022,
  month: 4,
  day: 12,
  hour: 3,
  minute: 22,
  second: 55,
  millisecond: 123,
});

test('can get year', () => {
  expect(timeYear(time)).toEqual(2022);
});

test('can get month', () => {
  expect(timeMonth(time)).toEqual(4);
});

test('can get day', () => {
  expect(timeDay(time)).toEqual(12);
});

test('can get hour', () => {
  expect(timeHour(time)).toEqual(3);
});

test('can get minute', () => {
  expect(timeMinute(time)).toEqual(22);
});

test('can get second', () => {
  expect(timeSecond(time)).toEqual(55);
});

test('can get milisecond', () => {
  expect(timeMillisecond(time)).toEqual(123);
});
