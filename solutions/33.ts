// #### **33. Create a Functional Calculator**

// Implement a simple calculator that supports addition, subtraction, multiplication, and division using function composition.

// **Example:**

// ```javascript
// const add = (x) => (y) => x + y;
// const subtract = (x) => (y) => y - x;
// const multiply = (x) => (y) => x * y;
// const divide = (x) => (y) => y / x;

// const calculate = compose(divide(2), multiply(3), add(5)); // (x + 5) * 3 / 2
// ```

// **Goal:** Use a `compose` function to chain the operations.
{
  const compose =
    (...functions: Function[]) =>
    (x: number) =>
      functions.reduce((acc, fn) => fn(acc), x);

  const add = (x: number) => (y: number) => x + y;
  const subtract = (x: number) => (y: number) => y - x;
  const multiply = (x: number) => (y: number) => x * y;
  const divide = (x: number) => (y: number) => y / x;
  const calculate = compose(divide(2), multiply(3), add(5)); // (x + 5) * 3 / 2
  console.log(calculate(10));
}
