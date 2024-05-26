---
sidebar_position: 6
---

# Mutations

Mutation are used to alter data on the server and give you the response and all the necessary states like, **Loading state**, **Error state**, and some other information's like **mutate** function to trigger the mutation action.

## Parameters

Snap-Fetch Mutations only need to parameters:-

1. The endpoint
2. Optional parameters which include the following

```ts
type RequestOptions = {
  effect?: "takeLatest" | "takeLeading" | "takeEvery"; // saga effect, default is "takeLeading"
  method?: Method;
  baseUrl?: string; // To override the baseUrl setted by the base api configuration setter
  fetchFunction?: (endpoint: string) => Promise<Response>; // custom fetch function if you don't like the built-in.
  invalidateTags?: string[]; // Tags will be used to invalidate queries on mutation requests.
  body?: any; // Request body, will automatically remove the body if you accidentally use methods like "GET" or "HEAD"
  transformResponse?: (response: ActualApiRes) => T; // transform the response you get from the api before using it you can write any logic here
};
```

## Usage

As you can see snap-fetch is typescript first and you can specify your actual response and your transformed response type.

In the example below the transformed response is **number** and the actual data coming from the api is **Todo**.

```ts
const response = useSnapMutation<number, Todo>(`todos`, {
  invalidateTags: ["get-4"],
  method: "GET",
  transformResponse: (res) => res.id,
  body: {
    title: "Cook dinner for my mom",
  },
});
```

### Response values

The response values you get from mutations are the following

```ts
const { mutate, data, isLoading, clear, error, isError, success } = response;
```

:::info

### Some explaining

**mutate**: function for triggering request,

**clear**: function used to clear mutation states after request is finished, this is optional as snap-fetch will automatically clear the **mutation** state if the component using the mutation hook is unmounted.
:::
