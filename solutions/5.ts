// **Implement a promise-based retry mechanism**
// Write a function that retries a failed network request up to 3 times before giving up.
const MAX_TRY = 3;
const useRetry = async (
  callbacke: (...arg: any[]) => any,
  max: number = MAX_TRY,
  ...args: any[]
) => {
  if (max <= 0) throw new Error("Max tried!");
  try {
    return await callbacke(args);
  } catch (error) {
    console.error(`Attempt ${MAX_TRY - max + 1} failed:`, error); // Log attempt number and error
    return await useRetry(callbacke, max - 1, ...args);
  }
};

const fetchJson = async (data: any[]) => {
  const rsp = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  if (!rsp.ok) throw new Error("Something went wrong!");
  return await rsp.json();
};

(async () => {
  const data = await useRetry(fetchJson, 3, { hi: "there" });
  console.log(data);
})();
