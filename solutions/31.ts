// #### **31. Compose a String Transformation Pipeline**

// Write a function pipeline that takes a string, removes all spaces, converts it to lowercase, and reverses it.

// **Techniques to Use:**

// - Function composition
// - Arrow functions

// **Example Input:** `"Functional Composition"`
// **Example Output:** `"noitisopmoclanotcnuf"`

const text = "1 2 3 4 5";

const spaceRemover = (text: string) => text.replaceAll(" ", "");
const toLoserCase = (text: string) => text.toLowerCase();
const reverse = (text: string) => {
  const textArr = text.split("");
  textArr.reverse();
  return textArr.join("");
};

const compose =
  (...functions: Function[]): Function =>
  (input: any) =>
    functions.reduce((acc, currFun) => currFun(acc), input);

const compositFunction = compose(spaceRemover, toLoserCase, reverse);

console.log(compositFunction(text));
