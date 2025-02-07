// #### **37. Memoize a Function**

// Implement a memoized version of a function that calculates the factorial of a number.

// **Techniques to Use:**

// - Closures
// - Caching with `Map`

const memoizedFactorial = (() => {
  const cache = new Map<number, number>();
  const factorial = (n: number): number => {
    if (n == 1) return 1;
    if (cache.has(n)) return cache.get(n)!;

    const result = n * factorial(n - 1);
    cache.set(n, result);
    return result;
  };

  return factorial;
})();

console.log(memoizedFactorial(10));
console.log(memoizedFactorial(10));
console.log(memoizedFactorial(10));
