import {
  timeAggregateByDay,
  timeAggregateByMonth,
  timeCreate,
  timeParse,
  timeToISOString,
} from "..";

test("can aggregate data by day", () => {
  const series = [
    { date: "1993-03-02T07:13:13.500Z", value: 1 },
    { date: "1993-03-02T07:22:10.890Z", value: 2 },
    { date: "1993-03-04T07:10:45.010Z", value: 3 },
    { date: "1993-03-04T08:20:00.000Z", value: 4 },
    { date: "1993-03-04T19:23:00.100Z", value: 5 },
    { date: "1993-03-05T20:00:15.010Z", value: 6 },
  ];

  const aggregate = timeAggregateByDay({
    series,
    getTime: ({ date }) => {
      const timeParseResult = timeParse(date);
      if (!timeParseResult.ok) {
        throw new Error("Invalid time");
      }
      return timeParseResult.time;
    },
  });

  const formatted = aggregate.map((a) => ({
    time: timeToISOString(a.time),
    data: a.data.map(({ value }) => value),
  }));

  expect(formatted).toEqual([
    {
      time: "1993-03-02T00:00:00.000Z",
      data: [1, 2],
    },
    {
      time: "1993-03-03T00:00:00.000Z",
      data: [],
    },
    {
      time: "1993-03-04T00:00:00.000Z",
      data: [3, 4, 5],
    },
    {
      time: "1993-03-05T00:00:00.000Z",
      data: [6],
    },
  ]);
});

test("can aggregate empty data by day", () => {
  const aggregate = timeAggregateByDay({
    series: [],
    getTime: () => timeCreate({}),
  });

  expect(aggregate).toEqual([]);
});

test("can aggregate data by month", () => {
  const series = [
    { date: "1993-03-02T07:13:13.500Z", value: 1 },
    { date: "1993-03-02T07:22:10.890Z", value: 2 },
    { date: "1993-05-04T07:10:45.010Z", value: 3 },
    { date: "1993-05-04T08:20:00.000Z", value: 4 },
    { date: "1993-05-04T19:23:00.100Z", value: 5 },
    { date: "1993-06-05T20:00:15.010Z", value: 6 },
  ];

  const aggregate = timeAggregateByMonth({
    series,
    getTime: ({ date }) => {
      const timeParseResult = timeParse(date);
      if (!timeParseResult.ok) {
        throw new Error("Invalid time");
      }
      return timeParseResult.time;
    },
  });

  const formatted = aggregate.map((a) => ({
    time: timeToISOString(a.time),
    data: a.data.map(({ value }) => value),
  }));

  expect(formatted).toEqual([
    {
      time: "1993-03-01T00:00:00.000Z",
      data: [1, 2],
    },
    {
      time: "1993-04-01T00:00:00.000Z",
      data: [],
    },
    {
      time: "1993-05-01T00:00:00.000Z",
      data: [3, 4, 5],
    },
    {
      time: "1993-06-01T00:00:00.000Z",
      data: [6],
    },
  ]);
});

test("can aggregate empty data by month", () => {
  const aggregate = timeAggregateByMonth({
    series: [],
    getTime: () => timeCreate({}),
  });

  expect(aggregate).toEqual([]);
});
