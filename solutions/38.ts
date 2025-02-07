// #### **38. Create a Fluent API**

// Build a chainable API to manipulate arrays, similar to `lodash` or `underscore.js`.

// **Example:**

// ```javascript
// const arrayManipulator = (array) => ({
//   filter: (fn) => arrayManipulator(array.filter(fn)),
//   map: (fn) => arrayManipulator(array.map(fn)),
//   value: () => array,
// });
// ```

// **Goal:** Use modern techniques like chaining and closures.

const lodash = <T>(array: T[]) => ({
  filter: (fn: (value: T, index?: number, array?: T[]) => T[]) => lodash(array.filter(fn)),
  map: (fn: (value: T, index?: number, array?: T[]) => any) => lodash(array.map(fn)),
  reverse: () => {
    array.reverse();
    return array;
  },
  value: () => array,
});

const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 25,
    brand: "Logitech",
    category: "Electronics",
    stock: 50,
    rating: 4.6,
    isAvailable: true,
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 80,
    brand: "Corsair",
    category: "Electronics",
    stock: 20,
    rating: 4.8,
    isAvailable: true,
  },
  {
    id: 3,
    name: "Gaming Headset",
    price: 60,
    brand: "Razer",
    category: "Accessories",
    stock: 30,
    rating: 4.4,
    isAvailable: true,
  },
  {
    id: 4,
    name: "Office Chair",
    price: 150,
    brand: "ErgoTech",
    category: "Furniture",
    stock: 15,
    rating: 4.7,
    isAvailable: false,
  },
  {
    id: 5,
    name: "USB-C Docking Station",
    price: 100,
    brand: "Anker",
    category: "Accessories",
    stock: 10,
    rating: 4.5,
    isAvailable: true,
  },
  {
    id: 6,
    name: "Smartphone Stand",
    price: 15,
    brand: "Ugreen",
    category: "Accessories",
    stock: 100,
    rating: 4.3,
    isAvailable: true,
  },
];

console.log(
  lodash(products)
    .map((product) => {
      return product.name;
    })
    .value()
);
