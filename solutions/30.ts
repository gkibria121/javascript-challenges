// ### **29. Problem: Cancelable Promise**

// Create a cancelable promise wrapper where you can cancel the promise before it resolves or rejects.

// **Example:**

// ```javascript
// function makeCancelable(promise) {
//   // Implement cancel logic
// }
// ```

function makeCancelable(promise: Promise<any>): [Promise<any>, AbortController] {
  const abortController = new AbortController();
  const signal = abortController.signal;

  return [
    new Promise((resolve, reject) => {
      const abortHandler = () => reject("aborted");
      signal.addEventListener("abort", abortHandler);
      promise
        .then((data) => {
          signal.removeEventListener("abort", abortHandler);
          resolve(data);
        })
        .catch((reason) => {
          signal.removeEventListener("abort", abortHandler);
          reject(reason);
        });
    }),
    abortController,
  ];
}

const uncontrollablePromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("resolved");
  }, 30000);
});

const [controllablePromise, controller] = makeCancelable(uncontrollablePromise);
controllablePromise.then((data) => console.log(data)).catch((error) => console.log(error));
// controller.abort();
