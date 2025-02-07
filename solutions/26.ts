// ### **26. Problem: Progressively Resolve Promises**

// Write a function that resolves a list of promises one by one (not in parallel) and logs each result as it resolves.

// **Example:**

// ```javascript
// async function resolvePromisesInSequence(promises) {
//   // Resolve and log each promise sequentially
// }
// ```

{
  const API_URL = "https://dummyjson.com";
  async function resolvePromisesInSequence(promises: (() => Promise<any>)[]) {
    for (let i = 0; i < promises.length; i++) {
      const data = await promises[i](); // Await each promise before moving to the next
      console.log(`Resolved promise ${i + 1}:`, data);
    }
  }

  async function getData(api: string) {
    try {
      const response = await fetch(api);
      if (!response.ok) throw new Error("Something went wrong! " + response.status);
      return await response.json();
    } catch (error: any) {
      throw new Error(`Failed to fetch ${api}: ${error.message}`);
    }
  }
  async function getUsers() {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve("wait");
      }, 3000)
    );
    return (await getData(`${API_URL}/users`)).users;
  }

  async function getUser() {
    return await getData(`${API_URL}/users/1`);
  }

  async function getPosts() {
    return (await getData(`${API_URL}/users/1/posts`)).posts;
  }
  resolvePromisesInSequence([getUsers, getUser, getPosts]);
}
