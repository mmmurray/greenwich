import { timeCompare, timeCreate, timeEqual, timeToISOString } from '..';

test('can compare time equality', () => {
  const t1 = timeCreate({
    year: 1993,
    month: 1,
    day: 22,
    hour: 7,
    minute: 22,
    second: 13,
    millisecond: 123,
  });

  const t2 = timeCreate({
    year: 1993,
    month: 1,
    day: 22,
    hour: 7,
    minute: 22,
    second: 13,
    millisecond: 123,
  });

  const t3 = timeCreate({
    year: 1993,
    month: 1,
    day: 22,
    hour: 8,
    minute: 22,
    second: 13,
    millisecond: 123,
  });

  expect(timeEqual(t1, t2)).toEqual(true);
  expect(timeEqual(t1, t3)).toEqual(false);
});

test('can compare times', () => {
  const sorted = [
    timeCreate({ year: 2000 }),
    timeCreate({ year: 1993 }),
    timeCreate({ year: 1997 }),
  ]
    .sort(timeCompare)
    .map(timeToISOString);

  expect(sorted).toEqual([
    '1993-01-01T00:00:00.000Z',
    '1997-01-01T00:00:00.000Z',
    '2000-01-01T00:00:00.000Z',
  ]);
});
