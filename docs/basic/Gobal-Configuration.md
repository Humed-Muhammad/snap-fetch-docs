---
sidebar_position: 1
---

# Global configuration

- Snap-Fetch provides a hook called **useSetBaseConfiguration** to configure the common api calls configuration values.
- Called one time in the root of your project directory.

## Usage

```javascript
useSetBaseConfiguration(options);
```

## Parameters

- `options` (object): The configuration options.

#### Options

The `options` object accepts the following properties:

- `baseUrl` (string, required): The base URL for the API. (**Required**), baseUrl can be overridden by individual queries.
- `disableCaching` (boolean): If set to `true`, caching will be disabled globally, but also can be overridden by individual query options.
- `customFetchFunction` ((endpoint: string) => **Promise(Response)**): A custom fetch function to use for making API requests. If you don't want to use the built in fetcher.
- `headers` (Headers): Additional headers to be included in each request.
- Fetch API RequestInitiator...

```javascript

// To root of you project like App.tsx main.tsx

import { useSetBaseConfiguration } from "snap-fetch"
const baseUrl = "https://jsonplaceholder.typicode.com";

  useSetBaseConfiguration({
    baseUrl, // Required
    disableCaching: boolean, // if true caching will be disabled, // this is global, can be overridden by individual disableCaching properties
    // Below has no effect if you are using your own fetch function
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  });

```