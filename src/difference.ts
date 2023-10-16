import { timeToDate } from "./date";
import { timeTruncateToDay } from "./truncate";
import { Time } from "./types";

const convertMillisecondsToDays = (milliseconds: number): number => {
  return Math.floor(milliseconds / 1000 / 60 / 60 / 24);
};

export const timeDifferenceInDays = (t1: Time, t2: Time): number => {
  const t1Milliseconds = timeToDate(timeTruncateToDay(t1)).getTime();
  const t2Milliseconds = timeToDate(timeTruncateToDay(t2)).getTime();
  const deltaMilliseconds = Math.abs(t1Milliseconds - t2Milliseconds);

  return convertMillisecondsToDays(deltaMilliseconds);
};
