// ### **27. Problem: Throttled Promise Execution**

// You have 10 promises in an array but can only execute 3 at a time. Write a function to handle this throttling.

// **Goal:** Use queues or `Promise` management techniques to limit concurrency.
{
  const API_URL = "https://dummyjson.com";
  async function resolvePromisesInQueue(promiseFuncs: (() => Promise<any>)[], workers: number = 3) {
    for (let i = 0; i < promiseFuncs.length; i = i + workers) {
      const queuedPromiseFuncs = promiseFuncs.slice(i, i + workers);
      const promises = queuedPromiseFuncs.map((promise) => promise());
      const data = await Promise.all(promises);
      console.log(`Resolved promises ${i + 1} to ${i + queuedPromiseFuncs.length}:`, data);
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
  resolvePromisesInQueue(
    [
      getUsers,
      getUser,
      getPosts,
      getUsers,
      getUser,
      getPosts,
      getUsers,
      getUser,
      getPosts,
      getUser,
      getPosts,
    ],
    3
  );
}
