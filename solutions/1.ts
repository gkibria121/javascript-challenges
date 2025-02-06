// **Filter and sort a list of users based on specific criteria**
// You have a list of users with properties like name, age, and location. Filter the list to find users over a certain age and then sort them alphabetically by name.

// **Techniques to Use:**

// - `Array.prototype.filter()`
// - `Array.prototype.sort()`

const users = [
  { name: "Alice Johnson", age: 25, location: "New York, USA" },
  { name: "Charlie Brown", age: 28, location: "Toronto, Canada" },
  { name: "Bob Smith", age: 30, location: "London, UK" },
  { name: "David Kim", age: 35, location: "Seoul, South Korea" },
  { name: "Emma Davis", age: 22, location: "Sydney, Australia" },
];

const filteredUsers = users.filter((user) => user.age >= 25).sort();

console.log(filteredUsers);
