# Greenwich

TypeScript date and time utility library. Inspired by the proposed [Temporal API](https://tc39.es/proposal-temporal/docs/).

## Install

```console
yarn add greenwich
```

Or

```console
npm i greenwich
```

## Usage

```ts
import { timeNow, timeSpanCreate, timeToISOString } from 'greenwich';

const t0 = timeNow();
const t1 = timeAdd(t0, timeSpanCreate({ days: 10 }));

console.log(timeToISOString(t1));
```
