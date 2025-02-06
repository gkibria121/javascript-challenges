### **1. Problem:**

**Filter and sort a list of users based on specific criteria**  
You have a list of users with properties like name, age, and location. Filter the list to find users over a certain age and then sort them alphabetically by name.

**Techniques to Use:**

- `Array.prototype.filter()`
- `Array.prototype.sort()`

---

### **2. Problem:**

**Create a debounce function for search input**  
You want to avoid triggering a search function too frequently as the user types in a search box. Implement a debounce function to limit the number of API calls.

**Techniques to Use:**

- Closures
- `setTimeout` and `clearTimeout`

---

### **3. Problem:**

**Deep clone a nested object**  
Clone a deeply nested object while ensuring there are no references to the original object.

**Techniques to Use:**

- `structuredClone()` (built-in modern API)
- Recursion

---

### **4. Problem:**

**Lazy-load images on a webpage**  
Optimize a webpage's performance by loading images only when they are about to appear in the viewport.

**Techniques to Use:**

- `IntersectionObserver` API

---

### **5. Problem:**

**Implement a promise-based retry mechanism**  
Write a function that retries a failed network request up to 3 times before giving up.

**Techniques to Use:**

- `Promise`
- `async/await`
- Loops or recursion

---

### **6. Problem:**

**Group an array of objects by a specific key**  
Given an array of objects, group them by a specific property, such as category or type.

**Techniques to Use:**

- `Array.prototype.reduce()`

---

### **7. Problem:**

**Implement infinite scrolling**  
Load more data dynamically as the user scrolls down a webpage.

**Techniques to Use:**

- Event listeners (`scroll`)
- API calls
- `IntersectionObserver`

---

### **8. Problem:**

**Build a small reactive state management system**  
Create a system to manage and react to state changes without using external libraries.

**Techniques to Use:**

- Proxy
- Observables (basic implementation)

---

### **9. Problem:**

**Flatten a deeply nested array**  
Flatten a nested array of arbitrary depth into a single-level array.

**Techniques to Use:**

- `Array.prototype.flat()`
- Recursion

---

### **10. Problem:**

**Secure sensitive data in local storage**  
Store and retrieve sensitive data in local storage, ensuring the data is encrypted and secure.

**Techniques to Use:**

- `window.localStorage`
- AES encryption libraries like `crypto.subtle` (Web Crypto API)

---

### **11. Problem:**

**Fetch and cache API data**  
Fetch data from an API and cache it in memory to avoid redundant API calls during a session.

**Techniques to Use:**

- Fetch API
- `Map` or `WeakMap` for caching

---

### **12. Problem:**

**Throttle a button click event**  
Prevent a button from being clicked multiple times in quick succession.

**Techniques to Use:**

- Throttling with `setTimeout`
- Lodash `_.throttle` equivalent implementation

---

### **13. Problem:**

**Parse and display nested JSON data**  
Parse deeply nested JSON data and display it in a tree-like structure on a webpage.

**Techniques to Use:**

- Recursion
- Dynamic DOM creation with `document.createElement()`

---

### **14. Problem:**

**Implement a drag-and-drop file uploader**  
Allow users to drag and drop files into a designated area, then preview the uploaded files.

**Techniques to Use:**

- Drag-and-drop API (`dragenter`, `dragover`, `drop`)
- File API (`FileReader`)

---

### **15. Problem:**

**Create a virtual DOM diffing algorithm**  
Build a simple algorithm to compare two DOM trees and update only the changed parts.

**Techniques to Use:**

- Virtual DOM representation with JavaScript objects
- Diffing algorithms (e.g., pre-order tree traversal)

---

### **16. Problem: Sequential API Calls**

Fetch data from three different APIs in sequence. The second API depends on data from the first, and the third API depends on data from the second.

**Example:**

- API 1: Get user ID
- API 2: Fetch user details using the ID
- API 3: Get user's posts using user details

**Goal:** Write an `async` function that fetches the data step by step in the correct order.

---

### **17. Problem: Parallel API Calls**

Fetch data from three APIs simultaneously and wait for all of them to complete before processing the results.

**Goal:** Use `Promise.all` with `async/await` to handle multiple promises in parallel.

---

### **18. Problem: Race Between Promises**

Given three asynchronous functions (`task1`, `task2`, `task3`), write a function that resolves with the result of the fastest task.

**Goal:** Use `Promise.race` to implement the solution.

---

### **19. Problem: Retry a Failed Promise**

Write a function that retries a failing promise up to 3 times before rejecting.

**Example:**

```javascript
async function fetchWithRetry(apiUrl, retries = 3) {
  // Implement retry logic here
}
```

**Goal:** Implement retries using `async/await` and recursion or loops.

---

### **20. Problem: Timeout for a Promise**

Create a wrapper function for a promise that rejects if the promise doesn’t resolve within a given timeout period.

**Example:**

```javascript
async function fetchWithTimeout(promise, timeout) {
  // Reject the promise if it takes longer than `timeout` ms
}
```

**Goal:** Combine `Promise` and `setTimeout` for the solution.

---

### **21. Problem: Chained Promises with `async/await`**

Convert the following chained promises into an `async/await` implementation:

```javascript
fetchData()
  .then((data) => processData(data))
  .then((result) => saveData(result))
  .catch((err) => console.error(err));
```

---

### **22. Problem: Error Handling in Async/Await**

Write an `async` function that fetches data from an API. If the API call fails, retry twice. If it still fails, log an error message.

**Goal:** Use `try...catch` and loops to implement robust error handling.

---

### **23. Problem: Promise-based Event Listener**

Convert a standard DOM event listener into a promise-based function.

**Example:**

```javascript
function waitForClick(button) {
  // Return a promise that resolves when the button is clicked
}
```

**Goal:** Use the `Promise` constructor to wrap event handling.

---

### **24. Problem: Sequential Delay Execution**

Create a function that executes an array of asynchronous functions sequentially with a delay between each execution.

**Example:**

```javascript
async function executeWithDelay(tasks, delay) {
  // Execute tasks one by one with `delay` ms between each
}
```

**Goal:** Use `await` and `setTimeout` with a delay.

---

### **25. Problem: Fetch Data with Fallback**

Write a function that attempts to fetch data from a primary API. If it fails, it fetches from a fallback API.

**Example:**

```javascript
async function fetchWithFallback(primaryUrl, fallbackUrl) {
  // Attempt primary fetch; if it fails, use fallback
}
```

---

### **26. Problem: Progressively Resolve Promises**

Write a function that resolves a list of promises one by one (not in parallel) and logs each result as it resolves.

**Example:**

```javascript
async function resolvePromisesInSequence(promises) {
  // Resolve and log each promise sequentially
}
```

---

### **27. Problem: Throttled Promise Execution**

You have 10 promises in an array but can only execute 3 at a time. Write a function to handle this throttling.

**Goal:** Use queues or `Promise` management techniques to limit concurrency.

---

### **28. Problem: Chain Promises Dynamically**

Write a function that takes an array of asynchronous functions and chains them dynamically, passing the result of one function to the next.

**Example:**

```javascript
async function chainTasks(tasks) {
  // Chain and execute tasks one after another
}
```

---

### **29. Problem: Cancelable Promise**

Create a cancelable promise wrapper where you can cancel the promise before it resolves or rejects.

**Example:**

```javascript
function makeCancelable(promise) {
  // Implement cancel logic
}
```

**Goal:** Use flags or custom logic to handle promise cancellation.

---

### **30. Problem: Measure Promise Execution Time**

Write a function that wraps a promise and logs its execution time (start to finish).

**Example:**

```javascript
async function timedExecution(promise) {
  // Measure execution time of the promise
}
```

---

### **Functional Composition Problems**

---

#### **31. Compose a String Transformation Pipeline**

Write a function pipeline that takes a string, removes all spaces, converts it to lowercase, and reverses it.

**Techniques to Use:**

- Function composition
- Arrow functions

**Example Input:** `"Functional Composition"`  
**Example Output:** `"noitisopmoclanotcnuf"`

---

#### **32. Data Transformation Pipeline**

Given an array of objects representing products, compose functions to:

1. Filter out products below a certain price.
2. Map the product names to an array.
3. Sort the product names alphabetically.

**Techniques to Use:**

- `Array.prototype.filter()`, `map()`, and `sort()`
- Function composition

---

#### **33. Create a Functional Calculator**

Implement a simple calculator that supports addition, subtraction, multiplication, and division using function composition.

**Example:**

```javascript
const add = (x) => (y) => x + y;
const subtract = (x) => (y) => y - x;
const multiply = (x) => (y) => x * y;
const divide = (x) => (y) => y / x;

const calculate = compose(divide(2), multiply(3), add(5)); // (x + 5) * 3 / 2
```

**Goal:** Use a `compose` function to chain the operations.

---

#### **34. Dynamic Object Transformation**

Compose a series of functions that:

1. Remove specified keys from an object.
2. Rename keys in the object.
3. Add a timestamp to the object.

**Techniques to Use:**

- Higher-order functions
- `Object.keys()`, `reduce()`

---

#### **35. Compose Middleware Functions**

Simulate a middleware pipeline where each function modifies the input before passing it to the next function.

**Example:**

- Middleware 1: Add a property to an object.
- Middleware 2: Log the object.
- Middleware 3: Transform a key's value.

**Techniques to Use:**

- Function composition
- `reduce()`

---

### **Other Modern Techniques**

---

#### **36. Using Currying for API Fetching**

Create a curried function that fetches data based on dynamic endpoints and query parameters.

**Example:**

```javascript
const fetchFromAPI = (baseUrl) => (endpoint) => (queryParams) => {
  // Fetch logic
};
```

**Goal:** Compose functions to dynamically generate the URL and fetch data.

---

#### **37. Memoize a Function**

Implement a memoized version of a function that calculates the factorial of a number.

**Techniques to Use:**

- Closures
- Caching with `Map`

---

#### **38. Create a Fluent API**

Build a chainable API to manipulate arrays, similar to `lodash` or `underscore.js`.

**Example:**

```javascript
const arrayManipulator = (array) => ({
  filter: (fn) => arrayManipulator(array.filter(fn)),
  map: (fn) => arrayManipulator(array.map(fn)),
  value: () => array,
});
```

**Goal:** Use modern techniques like chaining and closures.

---

#### **39. Event Stream Processing**

Compose functions to handle streams of events, such as filtering events by type and throttling them to reduce frequency.

**Techniques to Use:**

- `filter()`, `map()`
- Functional composition
- `setTimeout`

---

#### **40. Reactive State Management**

Write a simple reactive state manager that:

1. Tracks a state object.
2. Triggers listeners when the state changes.
3. Allows chaining of state updates.

**Techniques to Use:**

- Proxy
- Observables

---

#### **41. Functional Validation of Forms**

Compose a series of validation functions that check user input (e.g., required fields, email format, password strength).

**Techniques to Use:**

- Higher-order functions
- Function composition
- Array iteration (`every`, `map`)

---

#### **42. Dynamic Pipeline Creation**

Given an array of functions, create a dynamic pipeline to process an input. The pipeline should allow adding or removing functions dynamically.

**Techniques to Use:**

- Closures
- Functional composition

---

#### **43. Functional Undo/Redo**

Implement an undo/redo system using a functional approach:

1. Each state change is a function.
2. Maintain a stack of previous and future states.

**Techniques to Use:**

- Immutable data structures
- Higher-order functions

---

#### **44. Implement a Lazy Evaluator**

Write a function that composes multiple operations but doesn't execute them until explicitly called.

**Example:**

```javascript
const lazyEvaluator = (x) => ({
  add: (y) => lazyEvaluator(() => x() + y),
  multiply: (y) => lazyEvaluator(() => x() * y),
  evaluate: () => x(),
});
```

---

#### **45. Chain Asynchronous Functions**

Compose a series of asynchronous functions that process input data sequentially.

**Example:**

```javascript
const pipeline = composeAsync(fetchData, processData, saveData);
await pipeline(input);
```

**Techniques to Use:**

- `Promise`
- `async/await`
- Function composition
