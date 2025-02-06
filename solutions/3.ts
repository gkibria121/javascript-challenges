// **Deep clone a nested object**
// Clone a deeply nested object while ensuring there are no references to the original object.

// function clone<T>(obj: T) {
//   return structuredClone(obj);
// }

// const obj1 = {
//   name: "John Doe",
//   age: 30,
//   isEmployed: true,
//   address: {
//     street: "123 Main St",
//     city: "Anytown",
//     state: "CA",
//     postalCode: "12345",
//   },
//   phoneNumbers: [
//     {
//       type: "home",
//       number: "555-555-5555",
//     },
//     {
//       type: "work",
//       number: "555-555-1234",
//     },
//   ],
//   email: "john.doe@example.com",
//   hobbies: ["reading", "hiking", "coding"],
//   education: {
//     highestDegree: "Master's",
//     institutions: [
//       {
//         name: "University of Anytown",
//         degree: "Bachelor of Science",
//         major: "Computer Science",
//         yearGraduated: 2010,
//       },
//       {
//         name: "State University",
//         degree: "Master of Science",
//         major: "Data Science",
//         yearGraduated: 2012,
//       },
//     ],
//   },
// };

// const clonedObj = clone(obj1);
// console.log(clonedObj);
// if (obj1.education.institutions === clonedObj.education.institutions) {
//   console.log("Object did not changed");
// } else {
//   console.log("Object changed");
// }
