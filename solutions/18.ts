// Given three asynchronous functions (`task1`, `task2`, `task3`), write a function that resolves with the result of the fastest task.

// **Goal:** Use `Promise.race` to implement the solution.

// ---

{
  const API_URL = "https://dummyjson.com";

  async function fetchData() {
    try {
      const data = await Promise.race([getUsers(), getUser(), getPosts()]);

      console.log(data);
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
    }
  }

  async function getUsers() {
    return (await getData(`${API_URL}/users`)).users;
  }

  async function getUser() {
    return await getData(`${API_URL}/users/1`);
  }

  async function getPosts() {
    return (await getData(`${API_URL}/users/1/posts`)).posts;
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

  fetchData();
}
