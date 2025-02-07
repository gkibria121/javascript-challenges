// #### **32. Data Transformation Pipeline**

// Given an array of objects representing products, compose functions to:

// 1. Filter out products below a certain price.
// 2. Map the product names to an array.
// 3. Sort the product names alphabetically.

// **Techniques to Use:**

// - `Array.prototype.filter()`, `map()`, and `sort()`
// - Function composition

{
  const products = [
    { name: "Wireless Mouse", price: 25.99 },
    { name: "Mechanical Keyboard", price: 79.99 },
    { name: "Gaming Headset", price: 59.99 },
    { name: "USB-C Hub", price: 34.99 },
    { name: "Smartphone Stand", price: 15.99 },
    { name: "Portable SSD 1TB", price: 129.99 },
    { name: "Bluetooth Speaker", price: 49.99 },
    { name: "Laptop Cooling Pad", price: 29.99 },
    { name: "LED Desk Lamp", price: 39.99 },
    { name: "Noise Cancelling Earbuds", price: 89.99 },
  ];

  type Product = { name: string; price: number };
  const filterByPrice = (min: number) => (data: Product[]) =>
    data.filter((product) => product.price > min);

  const getProductNames = (products: Product[]) => products.map((product) => product.name);

  const sortNames = (productNames: string[]) => productNames.sort();

  const composedFunction = (min: number) => compose(filterByPrice(min), getProductNames, sortNames);

  // Usage example:
  console.log(composedFunction(30)(products));
}
