// **Group an array of objects by a specific key**
// Given an array of objects, group them by a specific property, such as category or type.
const items = [
  { name: "Apple", category: "Fruit" },
  { name: "Banana", category: "Fruit" },
  { name: "Orange", category: "Fruit" },
  { name: "Grapes", category: "Fruit" },
  { name: "Mango", category: "Fruit" },

  { name: "Carrot", category: "Vegetable" },
  { name: "Broccoli", category: "Vegetable" },
  { name: "Spinach", category: "Vegetable" },
  { name: "Potato", category: "Vegetable" },
  { name: "Tomato", category: "Vegetable" },

  { name: "Laptop", category: "Electronics" },
  { name: "Smartphone", category: "Electronics" },
  { name: "Headphones", category: "Electronics" },
  { name: "Smartwatch", category: "Electronics" },
  { name: "Tablet", category: "Electronics" },

  { name: "Shirt", category: "Clothing" },
  { name: "Jeans", category: "Clothing" },
  { name: "Jacket", category: "Clothing" },
  { name: "Sweater", category: "Clothing" },
  { name: "Shoes", category: "Clothing" },

  { name: "Hammer", category: "Tool" },
  { name: "Screwdriver", category: "Tool" },
  { name: "Wrench", category: "Tool" },
  { name: "Drill", category: "Tool" },
  { name: "Saw", category: "Tool" },

  { name: "Dog", category: "Animal" },
  { name: "Cat", category: "Animal" },
  { name: "Elephant", category: "Animal" },
  { name: "Tiger", category: "Animal" },
  { name: "Dolphin", category: "Animal" },

  { name: "Python", category: "Programming Language" },
  { name: "JavaScript", category: "Programming Language" },
  { name: "C++", category: "Programming Language" },
  { name: "Ruby", category: "Programming Language" },
  { name: "Go", category: "Programming Language" },

  { name: "Basketball", category: "Sport" },
  { name: "Football", category: "Sport" },
  { name: "Tennis", category: "Sport" },
  { name: "Cricket", category: "Sport" },
  { name: "Baseball", category: "Sport" },

  { name: "Guitar", category: "Musical Instrument" },
  { name: "Piano", category: "Musical Instrument" },
  { name: "Violin", category: "Musical Instrument" },
  { name: "Drums", category: "Musical Instrument" },
  { name: "Flute", category: "Musical Instrument" },

  { name: "Chair", category: "Furniture" },
  { name: "Table", category: "Furniture" },
  { name: "Bed", category: "Furniture" },
  { name: "Sofa", category: "Furniture" },
  { name: "Cabinet", category: "Furniture" },
];

type AccumulatorType = {
  category: string;
  items: { name: string; category: string }[];
}[];

const groupedItems = items.reduce<AccumulatorType>((acc, item) => {
  let categoryGroup = acc.find((group) => group.category === item.category);

  if (categoryGroup) {
    categoryGroup.items.push({ ...item }); // Ensure the item is fully spread
  } else {
    acc.push({
      category: item.category,
      items: [{ ...item }], // Ensure the item is fully spread
    });
  }

  return acc;
}, []);

console.log(groupedItems);
