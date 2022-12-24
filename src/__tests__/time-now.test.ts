import { timeCompare, timeNow } from '..';

test('can get current time', async () => {
  const t1 = timeNow();
  await new Promise((resolve) => setTimeout(resolve, 10));
  const t2 = timeNow();

  expect(timeCompare(t1, t2)).toEqual(-1);
});
