// #### **34. Dynamic Object Transformation**

// Compose a series of functions that:

// 1. Remove specified keys from an object.
// 2. Rename keys in the object.
// 3. Add a timestamp to the object.

// **Techniques to Use:**

// - Higher-order functions
// - `Object.keys()`, `reduce()`
{
  type T = Record<string, any>;
  const product: T = {
    name: "Pen",
    price: 10,
    brand: "Parker",
    color: "Blue",
    category: "Stationery",
    weight: "15g",
    material: "Plastic",
    stock: 100,
    isAvailable: true,
    rating: 4.5,
  };

  const removeKeys =
    (...keys: any[]) =>
    (obj: T) => {
      const newObj = { ...obj };
      for (const key of keys) {
        delete newObj[key];
      }
      return newObj;
    };
  const renameKeys =
    (...keys: [currKey: string, newKey: string][]) =>
    (obj: T) => {
      const newObj = { ...obj };
      keys.forEach(([oldKey, newKey]) => {
        if (oldKey in newObj) {
          newObj[newKey] = newObj[oldKey]; // Rename key
          delete newObj[oldKey]; // Remove old key
        }
      });
      return newObj;
    };

  const addTimeStamp = (obj: T) => {
    const newObj = { ...obj };
    newObj.timestamp = new Date();
    return newObj;
  };

  const compose =
    (...functions: Function[]) =>
    (obj: T) =>
      functions.reduce((acc, fn) => fn(acc), obj);

  const composedFunction = compose(
    removeKeys("name"),
    renameKeys(["price", "productPrice"]),
    addTimeStamp
  );
  console.log(composedFunction(product));
}
