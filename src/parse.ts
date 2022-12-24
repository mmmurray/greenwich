import { timeCreate } from './time';
import { Time } from './types';

type TimeParseResult =
  | {
      ok: true;
      time: Time;
    }
  | {
      ok: false;
    };

export const timeParse = (timeString: string): TimeParseResult => {
  const pattern = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).(\d{3})Z$/;
  const matches = pattern.exec(timeString);

  if (!matches) {
    return { ok: false };
  }

  return {
    ok: true,
    time: timeCreate({
      year: parseInt(matches[1]),
      month: parseInt(matches[2]),
      day: parseInt(matches[3]),
      hour: parseInt(matches[4]),
      minute: parseInt(matches[5]),
      second: parseInt(matches[6]),
      millisecond: parseInt(matches[7]),
    }),
  };
};
