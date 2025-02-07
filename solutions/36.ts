// #### **36. Using Currying for API Fetching**

// Create a curried function that fetches data based on dynamic endpoints and query parameters.

// **Example:**

// ```javascript
// const fetchFromAPI = (baseUrl) => (endpoint) => (queryParams) => {
//   // Fetch logic
// };
// ```
{
  type Query = Record<string, string | number | boolean>;
  const fetchFromAPI = (baseUrl: string) => (endpoint: string) => async (queryParams: Query) => {
    function createQuery(queryParams: Query) {
      const params = new URLSearchParams();
      for (const key of Object.entries(queryParams)) {
        params.set(key[0], key[1].toString());
      }
      return params.toString();
    }
    const api = `${baseUrl}/${endpoint}?${createQuery(queryParams)}`;
    console.log(api);
    const resp = await fetch(api);
    if (!resp.ok) throw new Error("Something went wrong " + resp.status);
    return await resp.json();
  };
  fetchFromAPI("https://jsonplaceholder.typicode.com")("todos")({
    _limit: 10,
    _start: 0,
  }).then((data) => console.log(data));
}
