import { Time } from './types';

export const timeToDate = (time: Time): Date => {
  const timestamp = Date.UTC(
    time.year,
    time.month - 1,
    time.day,
    time.hour,
    time.minute,
    time.second,
    time.millisecond,
  );

  return new Date(timestamp);
};

export const dateToTime = (date: Date): Time => {
  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate(),
    hour: date.getUTCHours(),
    minute: date.getUTCMinutes(),
    second: date.getUTCSeconds(),
    millisecond: date.getUTCMilliseconds(),
  };
};
