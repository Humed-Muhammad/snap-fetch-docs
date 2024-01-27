---
sidebar_position: 2
---

# Cache-Behavior


Snap-fetch will use the **endpoint + queryParameters** to generate a unique hashKey that will bes used to store the data into the redux store, this will make sure that subsequent requests to the same **endpoint + queryParameters** will be ignored which eventually avoid unnecessary requests being made, unless the query parameters or pagination parameters are changed.

:::info
  By the way snap-fetch has a built-in pagination for queries, and also you can avoid using the pagination feature by using the **single** flag for specific queries.
:::

Snap-Fetch has a way of handling **Caching** and **Invalidating** data fetched from api, it does so by giving you the option to keep the cached data as long as you want by providing ways to do that,

1. One by providing both global and query specific **cacheExpirationTime** flag, which will automatically expire the cached data and refetch when a component mount again. Default is **2 minutes or 120 seconds**.

:::info
**cacheExpirationTime behaves differently depending on disableCaching option**L

A. If **disableCache** is set to **true**, which tells **snap-fetch** to avoid caching the data fetched from api, then **cacheExpirationTime** will be ignored,

- Under this circumstances even if the **disableCaching** is set to **true** snap-fetch will always avoid calling the same endpoint+queryParams.

B. If **disableCache** is set to **false** then **cachingExpirationTime** will be used to invalidate data to that specific endpoint and query parameters by making a fresh request to update the cache data.
:::

2. Secondly by providing a **polling** functionality to always get fresh data from the server between intervals.
:::info
**pollingInterval** is a query specific flag
:::

## Example

- Take a look at the following example,

```javascript
import { useSnapFetchQuery } from 'snap-fetch';

const ComponentOne = () => {
  ...
  const { data, isLoading, error } = useSnapFetchQuery<Users>('user/1');
  ...
};

const ComponentTwo = () => {
  ...
  const { data, isLoading, error } = useSnapFetchQuery<Users>('user/2');
  ...
};

const ComponentThree = () => {
  ...
  const { data, isLoading, error } = useSnapFetchQuery<Users>('user/1');
  ...
};
```
**ComponentOne** and **ComponentThree** has the same endpoint, and **ComponentTwo** is different. if three of the Component are Mounted, **snap-fetch** will only make **two separate requests only**, because ComponentOne and ComponentThree have the same endpoint.

```javascript

export const App = () => {
  return (
    <>
    <ComponentOne/>
    <ComponentTwo/>
    <ComponentThree/>
    </>
  )
}

```

### What if we change Query Parameters

```javascript
import { useSnapFetchQuery } from 'snap-fetch';

const ComponentOne = () => {
  ...
  const { data, isLoading, error } = useSnapFetchQuery<Users>('user/1', {
    filter: {
      status: 'PENDING'
    }
  });
  ...
};

const ComponentTwo = () => {
  ...
  const { data, isLoading, error } = useSnapFetchQuery<Users>('user/2');
  ...
};

const ComponentThree = () => {
  ...
  const { data, isLoading, error } = useSnapFetchQuery<Users>('user/1');
  ...
};
```

- Now **snap-fetch** detect that the queryParams are changed for the **ComponentOne** and it will make a separate request for the ComponentOne and store it as a new data by generating a new hashKey then return a value fetched from the api. Then if there are any components using the same endpoint and the queryParams like the **ComponentOne** no request will be made to the server, and snap-fetch will return the same value instead, that was fetched for the **ComponentOne**.

:::info
If **disableCaching** is set to **true**, then the caching will be disabled, and when ever a **component is mounted** **snap-fetch** will make a fresh request to the server.
:::