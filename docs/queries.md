---
sidebar_position: 5
---

# Queries

Queries are used to fetch data from the server and give you the data and all the necessary states like, **Loading state**, **Error state**, and some other information's like **paginationOptions** for you to control or use the pagination values.

## Parameters

Snap-Fetch Queries only need to parameters:-

1. The endpoint
2. Optional parameters which include the following

```ts
type RequestOptions = {
  effect?: "takeLatest" | "takeLeading" | "takeEvery"; // saga effect, default is "takeEvery"
  disableCaching?: boolean; // will disable caching for the current endpoint request
  fetchFunction?: (endpoint: string) => Promise<Response>; // custom fetch function if you don't like the built-in.
  tags?: string; // Tags will be used to invalidate on mutation requests.
  filter?: { [key: string]: number | boolean | string | undefined | null }; // your filters except for pagination.
  pollingInterval?: number; // polling interval for polling requests
  skip?: boolean; // skip request on first mount for the current endpoint
  single?: boolean; // to tell the snap-fetcher query you don't want to use pagination.
  baseUrl?: string; // To override the baseUrl setted by the base api configuration setter
  cacheExpirationTime?: number; // how long the data should be cached.
  transformResponse?: (response: ActualApiRes) => T; // transform the response you get from the api before using it you can write any logic here
};
```

## Usage

As you can see snap-fetch is typescript first and you can specify your actual response and your transformed response type.

In the example below the transformed response is **string** and the actual data coming from the api is **Todo**.

```ts
const response = useSnapQuery<string, Todo>(`todos/4`, {
  tags: "get-4",
  single: true,
  transformResponse: (res) => res.title,
});
```

### Response values

The response values you get from queries are the following

```ts
const {
  data,
  isLoading,
  isError,
  error,
  success,
  refetch,
  paginationOptions,
  pagination,
  queryParams,
  hashKey,
  createdAt,
  endpoint,
} = response;
```
