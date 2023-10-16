import { timeParse, timeToISOString } from "..";

test("can parse time", () => {
  const timeString = "1993-01-22T07:22:13.123Z";
  const time = timeParse(timeString);

  expect(time.ok ? timeToISOString(time.time) : "Invalid").toEqual(timeString);
});

test("returns error for invalid time string", () => {
  const timeString = "invalid";
  const time = timeParse(timeString);

  expect(time.ok).toEqual(false);
});
