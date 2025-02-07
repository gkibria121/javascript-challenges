// ### **28. Problem: Chain Promises Dynamically**

// Write a function that takes an array of asynchronous functions and chains them dynamically, passing the result of one function to the next.

// **Example:**

// ```javascript
// async function chainTasks(tasks) {
//   // Chain and execute tasks one after another
// }
// ```
{
  const API_URL = "https://dummyjson.com";
  async function chainTasks<T>(promiseFuncs: ((arg: T) => Promise<T>)[]): Promise<T> {
    return await promiseFuncs.reduce(
      async (prevPromise: Promise<T>, currFunc: (arg: T) => Promise<T>): Promise<T> => {
        const data = await prevPromise; // Wait for previous function to resolve
        return currFunc(data); // Pass result to next function
      },
      Promise.resolve(undefined as unknown as T) // Initial undefined value casted to T
    );
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
    return (await getData(`${API_URL}/users`)).users[0].id;
  }

  async function getUser(id: string) {
    console.log("user Id : ", id);
    return (await getData(`${API_URL}/users/${id}`)).id;
  }

  async function getPosts(id: string) {
    console.log("user Id 2 : ", id);
    return (await getData(`${API_URL}/users/1/posts`)).posts;
  }
  chainTasks([getUsers, getUser, getPosts]).then((data) => console.log(data));
}
