import { timeAdd } from "./add";
import { timeCompare, timeEqual } from "./compare";
import { timeDifferenceInDays } from "./difference";
import { timeSpanCreate } from "./time";
import { timeTruncateToDay, timeTruncateToMonth } from "./truncate";
import { Time } from "./types";

type Aggregation<T> = { time: Time; data: T[] }[];

export const timeAggregateByDay = <T>({
  series,
  getTime,
}: {
  series: T[];
  getTime: (t: T) => Time;
}): Aggregation<T> => {
  const aggregation: Aggregation<T> = [];

  if (series.length === 0) {
    return aggregation;
  }

  const sorted = series
    .map((data) => ({ time: timeTruncateToDay(getTime(data)), data }))
    .sort((a, b) => timeCompare(a.time, b.time));

  const minTime = sorted[0].time;
  const maxTime = sorted[sorted.length - 1].time;
  const daysDifference = timeDifferenceInDays(minTime, maxTime);

  for (let days = 0; days < daysDifference + 1; days++) {
    const time = timeAdd(minTime, timeSpanCreate({ days }));

    const data = sorted
      .filter((s) => timeEqual(s.time, time))
      .map((s) => s.data);

    aggregation.push({ time, data });
  }

  return aggregation;
};

export const timeAggregateByMonth = <T>({
  series,
  getTime,
}: {
  series: T[];
  getTime: (t: T) => Time;
}): Aggregation<T> => {
  const aggregation: Aggregation<T> = [];

  const dayAggregation = timeAggregateByDay({ series, getTime });

  let lastMonthTime: Time | null = null;
  let monthData: T[] = [];

  dayAggregation.forEach((d) => {
    const monthTime = timeTruncateToMonth(d.time);

    if (lastMonthTime && !timeEqual(lastMonthTime, monthTime)) {
      aggregation.push({ time: lastMonthTime, data: monthData });
      monthData = [];
    }

    monthData.push(...d.data);
    lastMonthTime = monthTime;
  });

  if (lastMonthTime) {
    aggregation.push({ time: lastMonthTime, data: monthData });
  }

  return aggregation;
};
