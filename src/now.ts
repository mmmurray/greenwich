import { timeCreate } from "./time";
import { Time } from "./types";

export const timeNow = (): Time => {
  const date = new Date();

  return timeCreate({
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate(),
    hour: date.getUTCHours(),
    minute: date.getUTCMinutes(),
    second: date.getUTCSeconds(),
    millisecond: date.getUTCMilliseconds(),
  });
};
