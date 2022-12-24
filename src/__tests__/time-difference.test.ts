import { timeCreate, timeDifferenceInDays } from '..';

test('can get difference in days', () => {
  const t1 = timeCreate({ year: 1993, month: 1, day: 22, hour: 2 });
  const t2 = timeCreate({ year: 1993, month: 2, day: 15, hour: 23 });

  expect(timeDifferenceInDays(t1, t2)).toEqual(24);
});
