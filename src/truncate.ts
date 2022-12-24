import { timeCreate } from './time';
import { Time } from './types';

export const timeTruncateToYear = (t: Time): Time => {
  return timeCreate({ year: t.year });
};

export const timeTruncateToMonth = (t: Time): Time => {
  return timeCreate({ year: t.year, month: t.month });
};

export const timeTruncateToDay = (t: Time): Time => {
  return timeCreate({ year: t.year, month: t.month, day: t.day });
};

export const timeTruncateToHour = (t: Time): Time => {
  return timeCreate({ year: t.year, month: t.month, day: t.day, hour: t.hour });
};

export const timeTruncateToMinute = (t: Time): Time => {
  return timeCreate({
    year: t.year,
    month: t.month,
    day: t.day,
    hour: t.hour,
    minute: t.minute,
  });
};

export const timeTruncateToSecond = (t: Time): Time => {
  return timeCreate({
    year: t.year,
    month: t.month,
    day: t.day,
    hour: t.hour,
    minute: t.minute,
    second: t.second,
  });
};
