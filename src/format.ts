import { Time } from "./types";

export const timeToISODateString = (t: Time): string => {
  const year = String(t.year);
  const month = String(t.month).padStart(2, "0");
  const day = String(t.day).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const timeToISOString = (t: Time): string => {
  const hour = String(t.hour).padStart(2, "0");
  const minute = String(t.minute).padStart(2, "0");
  const second = String(t.second).padStart(2, "0");
  const millisecond = String(t.millisecond).padStart(3, "0");
  const dateString = timeToISODateString(t);
  const timeString = `${hour}:${minute}:${second}.${millisecond}`;

  return `${dateString}T${timeString}Z`;
};
