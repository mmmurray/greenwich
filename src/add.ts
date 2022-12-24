import { dateToTime, timeToDate } from './date';
import { Time, TimeSpan } from './types';

export const timeAdd = (time: Time, timeSpan: TimeSpan): Time => {
  const date = timeToDate(time);

  date.setUTCFullYear(date.getUTCFullYear() + timeSpan.years);
  date.setUTCMonth(date.getUTCMonth() + timeSpan.months);
  date.setUTCDate(date.getUTCDate() + timeSpan.days);
  date.setUTCHours(date.getUTCHours() + timeSpan.hours);
  date.setUTCMinutes(date.getUTCMinutes() + timeSpan.minutes);
  date.setUTCSeconds(date.getUTCSeconds() + timeSpan.seconds);
  date.setUTCMilliseconds(date.getUTCMilliseconds() + timeSpan.milliseconds);

  return dateToTime(date);
};
