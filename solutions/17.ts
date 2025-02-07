// Fetch data from three APIs simultaneously and wait for all of them to complete before processing the results.

// **Goal:** Use `Promise.all` with `async/await` to handle multiple promises in parallel.

{
  const API_URL = "https://dummyjson.com";

  async function fetchData() {
    try {
      const [users, user, posts] = await Promise.all([getUsers(), getUser(), getPosts()]);

      console.log(users.length, user.id, posts.length);
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
