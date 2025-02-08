// #### **45. Chain Asynchronous Functions**

// Compose a series of asynchronous functions that process input data sequentially.

// **Example:**

// ```javascript
// const pipeline = composeAsync(fetchData, processData, saveData);
// await pipeline(input);
// ```

// **Techniques to Use:**

// - `Promise`
// - `async/await`
// - Function composition

{
  const fetchData = async (api: string) => {
    const rsp = await fetch(api);
    if (!rsp.ok) throw new Error("Something went wrong!");
    return await rsp.json();
  };
  const processData = async (data: Record<string, any>) => {
    return data;
  };
  const saveData = async (data: Record<string, any>) => {
    return data;
  };

  const composeAsync =
    (...functions: ((...args: any[]) => Promise<any>)[]) =>
    async (api: string): Promise<any> =>
      functions.reduce(async (acc, fn) => fn(await acc), Promise.resolve(api));

  const pipeline = composeAsync(fetchData, processData, saveData);
  pipeline("https://jsonplaceholder.typicode.com/todos").then((data) => console.log(data.length));
}
