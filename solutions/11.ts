// **Fetch and cache API data**
// Fetch data from an API and cache it in memory to avoid redundant API calls during a session.

// **Techniques to Use:**

// - Fetch API
// - `Map` or `WeakMap` for caching

const getData = async () => {
  const query = {
    api: "https://jsonplaceholder.typicode.com/todos/1",
    key: ["data"],
    args: {},
  };
  const data = await cachedFetch(query);
  console.log(data);
  const data2 = await cachedFetch(query);
  console.log(data2);
};

const cache = new Map<any, any>();

const cachedFetch = async (params: { api: string; key: string[]; args?: Record<string, any> }) => {
  const cacheKey = JSON.stringify(params);
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    console.log("data was saved");
    return cachedData;
  }

  console.log("request was made");
  const resp = await fetch(params.api);

  if (!resp.ok) throw new Error("Something went wrong!");

  const data = await resp.json();
  cache.set(cacheKey, data);

  return data;
};
getData();
