import { timeToDate } from "./date";
import { Time } from "./types";

export const timeEqual = (t1: Time, t2: Time): boolean => {
  return (
    t1.year === t2.year &&
    t1.month === t2.month &&
    t1.day === t2.day &&
    t1.hour === t2.hour &&
    t1.minute === t2.minute &&
    t1.second === t2.second &&
    t1.millisecond === t2.millisecond
  );
};

export const timeCompare = (t1: Time, t2: Time): number => {
  const t1Milliseconds = timeToDate(t1).getTime();
  const t2Milliseconds = timeToDate(t2).getTime();

  if (t1Milliseconds < t2Milliseconds) {
    return -1;
  }

  if (t1Milliseconds > t2Milliseconds) {
    return 1;
  }

  return 0;
};
