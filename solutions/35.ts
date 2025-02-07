// #### **35. Compose Middleware Functions**

// Simulate a middleware pipeline where each function modifies the input before passing it to the next function.

// **Example:**

// - Middleware 1: Add a property to an object.
// - Middleware 2: Log the object.
// - Middleware 3: Transform a key's value.

// **Techniques to Use:**

// - Function composition
// - `reduce()`

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

  const middleware1 = (obj: T) => {
    const newObj = { ...obj };
    newObj["newProperty"] = Math.floor(Math.random() * 10);
    return newObj;
  };
  const middleware2 = (obj: T) => {
    console.log(obj);

    return obj;
  };

  const middleware3 = (key: string, value: any) => (obj: T) => {
    const newObj = { ...obj };
    if (key in newObj) {
      newObj[key] = value;
    }
    return newObj;
  };

  const compose =
    (...functions: Function[]) =>
    (obj: T) =>
      functions.reduce((acc, fn) => fn(acc), obj);

  const composedFunction = compose(middleware1, middleware2, middleware3("name", "Book"));
  console.log(composedFunction(product));
}
