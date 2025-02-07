// Fetch data from three different APIs in sequence. The second API depends on data from the first, and the third API depends on data from the second.

// **Example:**

// - API 1: Get user ID
// - API 2: Fetch user details using the ID
// - API 3: Get user's posts using user details

// **Goal:** Write an `async` function that fetches the data step by step in the correct order.

{
  const API_URL = "https://dummyjson.com";

  async function getData(api: string) {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error("Something went wrong! " + response.status);
    }

    return await response.json();
  }
  async function getUsers() {
    const data = await getData(`${API_URL}/users`);

    return data?.users;
  }
  async function getUser(id: string) {
    const user = await getData(`${API_URL}/users/${id}`);
    return user;
  }
  async function getPosts(id: string) {
    const user = await getData(`${API_URL}/users/${id}/posts`);
    return user;
  }

  async function fetchUserPosts() {
    try {
      const users = await getUsers();
      if (!users || users.length === 0) throw new Error("No users found.");

      const user = await getUser(users[0].id);
      const posts = await getPosts(user.id);

      console.log(posts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  fetchUserPosts();
}
