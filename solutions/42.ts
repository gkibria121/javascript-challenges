// #### **42. Dynamic Pipeline Creation**

// Given an array of functions, create a dynamic pipeline to process an input. The pipeline should allow adding or removing functions dynamically.

// **Techniques to Use:**

// - Closures
// - Functional composition

{
  type InputProcessor = (input: string) => string;

  const compose = (...functions: InputProcessor[]) => ({
    execute: (input: string) => functions.reduce((acc, fn) => fn(acc), input),
    add: (processor: InputProcessor) => {
      return compose(...functions, processor);
    },
    remove: (processor: InputProcessor) =>
      compose(...functions.filter((func) => func !== processor)),
    getFunctions: () => functions,
  });

  const toLowercase = (input: string) => input.toLowerCase();
  const toUppercase = (input: string) => input.toUpperCase();

  const inputProcessorPipline = compose(toLowercase);

  console.log(inputProcessorPipline.add(toUppercase).execute("Some text"));
}
