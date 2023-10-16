import { timeCreate, timeToISODateString, timeToISOString } from "..";

test("can format time", () => {
  const t1 = timeCreate({
    year: 1993,
    month: 1,
    day: 22,
    hour: 7,
    minute: 22,
    second: 13,
    millisecond: 123,
  });

  expect(timeToISOString(t1)).toEqual("1993-01-22T07:22:13.123Z");
});

test("can format time to date string", () => {
  const t1 = timeCreate({
    year: 1993,
    month: 1,
    day: 22,
    hour: 7,
    minute: 22,
    second: 13,
    millisecond: 123,
  });

  expect(timeToISODateString(t1)).toEqual("1993-01-22");
});
