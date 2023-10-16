import { timeAdd, timeCreate, timeSpanCreate, timeToISOString } from "..";

test("can add years", () => {
  const t1 = timeAdd(
    timeCreate({ year: 2022, month: 4, day: 12 }),
    timeSpanCreate({ years: 10 })
  );

  expect(timeToISOString(t1)).toEqual("2032-04-12T00:00:00.000Z");
});

test("can add months", () => {
  const t1 = timeAdd(
    timeCreate({ year: 2022, month: 4, day: 12 }),
    timeSpanCreate({ months: 10 })
  );

  expect(timeToISOString(t1)).toEqual("2023-02-12T00:00:00.000Z");

  const t2 = timeAdd(
    timeCreate({ year: 2022, month: 4, day: 29 }),
    timeSpanCreate({ months: 10 })
  );

  expect(timeToISOString(t2)).toEqual("2023-03-01T00:00:00.000Z");
});

test("can add days", () => {
  const t1 = timeAdd(
    timeCreate({ year: 2022, month: 4, day: 12 }),
    timeSpanCreate({ days: 10 })
  );

  expect(timeToISOString(t1)).toEqual("2022-04-22T00:00:00.000Z");

  const t2 = timeAdd(
    timeCreate({ year: 2022, month: 4, day: 24 }),
    timeSpanCreate({ days: 10 })
  );

  expect(timeToISOString(t2)).toEqual("2022-05-04T00:00:00.000Z");
});

test("can add hours", () => {
  const t1 = timeAdd(
    timeCreate({ year: 2022, month: 4, day: 12 }),
    timeSpanCreate({ hours: 10 })
  );

  expect(timeToISOString(t1)).toEqual("2022-04-12T10:00:00.000Z");

  const t2 = timeAdd(
    timeCreate({ year: 2022, month: 4, day: 30, hour: 20 }),
    timeSpanCreate({ hours: 10 })
  );

  expect(timeToISOString(t2)).toEqual("2022-05-01T06:00:00.000Z");
});

test("can add minutes", () => {
  const t1 = timeAdd(
    timeCreate({ year: 2022, month: 4, day: 12 }),
    timeSpanCreate({ minutes: 10 })
  );

  expect(timeToISOString(t1)).toEqual("2022-04-12T00:10:00.000Z");

  const t2 = timeAdd(
    timeCreate({ year: 2022, month: 4, day: 30, hour: 23, minute: 55 }),
    timeSpanCreate({ minutes: 10 })
  );

  expect(timeToISOString(t2)).toEqual("2022-05-01T00:05:00.000Z");
});

test("can add seconds", () => {
  const t1 = timeAdd(
    timeCreate({ year: 2022, month: 4, day: 12 }),
    timeSpanCreate({ seconds: 10 })
  );

  expect(timeToISOString(t1)).toEqual("2022-04-12T00:00:10.000Z");

  const t2 = timeAdd(
    timeCreate({
      year: 2022,
      month: 4,
      day: 30,
      hour: 23,
      minute: 59,
      second: 55,
    }),
    timeSpanCreate({ seconds: 10 })
  );

  expect(timeToISOString(t2)).toEqual("2022-05-01T00:00:05.000Z");
});

test("can add milliseconds", () => {
  const t1 = timeAdd(
    timeCreate({ year: 2022, month: 4, day: 12 }),
    timeSpanCreate({ milliseconds: 10 })
  );

  expect(timeToISOString(t1)).toEqual("2022-04-12T00:00:00.010Z");

  const t2 = timeAdd(
    timeCreate({
      year: 2022,
      month: 4,
      day: 30,
      hour: 23,
      minute: 59,
      second: 59,
      millisecond: 995,
    }),
    timeSpanCreate({ milliseconds: 10 })
  );

  expect(timeToISOString(t2)).toEqual("2022-05-01T00:00:00.005Z");
});
