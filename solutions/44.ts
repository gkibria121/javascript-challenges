// #### **44. Implement a Lazy Evaluator**

// Write a function that composes multiple operations but doesn't execute them until explicitly called.

{
  const lazyEvaliator = (x: number) => ({
    add: (y: number) => lazyEvaliator(x + y),
    substract: (y: number) => lazyEvaliator(x - y),
    multiply: (y: number) => lazyEvaliator(x * y),
    devide: (y: number) => lazyEvaliator(x / y),
    execute: () => x,
  });
  console.log(lazyEvaliator(10).add(10).substract(5).devide(5).execute());
}
