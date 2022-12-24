import { Time, TimeSpan } from './types';

export const timeCreate = (overrides: Partial<Time>): Time => {
  return {
    year: 1970,
    month: 1,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
    ...overrides,
  };
};

export const timeSpanCreate = (overrides: Partial<TimeSpan>): TimeSpan => {
  return {
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
    ...overrides,
  };
};

export const timeYear = (time: Time): number => {
  return time.year;
};

export const timeMonth = (time: Time): number => {
  return time.month;
};

export const timeDay = (time: Time): number => {
  return time.day;
};

export const timeHour = (time: Time): number => {
  return time.hour;
};

export const timeMinute = (time: Time): number => {
  return time.minute;
};

export const timeSecond = (time: Time): number => {
  return time.second;
};

export const timeMillisecond = (time: Time): number => {
  return time.millisecond;
};
