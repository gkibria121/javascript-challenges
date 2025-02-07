// ### **20. Problem: Timeout for a Promise**

// Create a wrapper function for a promise that rejects if the promise doesn’t resolve within a given timeout period.

// **Example:**

// ```javascript
// async function fetchWithTimeout(promise, timeout) {
//   // Reject the promise if it takes longer than `timeout` ms
// }
// ```

{
  const API_URL = "https://dummyjson.com";

  async function getData(api: string) {
    try {
      const response = await fetch(api);
      if (!response.ok) throw new Error("Something went wrong! " + response.status);
      return await response.json();
    } catch (error: any) {
      throw new Error(`Failed to fetch ${api}: ${error.message}`);
    }
  }
  async function fetchWithTimeout(callback: () => Promise<any>, timeout = 30) {
    try {
      const data = await Promise.race([
        callback(),
        new Promise((resolve, reject) =>
          setTimeout(() => {
            reject("Request Timeout");
          }, timeout * 1000)
        ),
      ]);
      return data;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async function fetchData() {
    const callback = async () => getData(`${API_URL}/users`);
    const data = await fetchWithTimeout(callback, 30);
    console.log(data);
  }
  fetchData();
}
