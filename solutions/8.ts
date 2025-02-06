// **Build a small reactive state management system**
// Create a system to manage and react to state changes without using external libraries.
const createState = <T extends Record<string | symbol, any>>(initialState: T) => {
  const subscribers: Set<(state: T) => void> = new Set();

  const subscribe = (callback: (state: T) => void) => {
    subscribers.add(callback);
    return () => {
      subscribers.delete(callback);
    };
  };

  const reactiveState = new Proxy(initialState, {
    set(target, p: keyof T, value): boolean {
      target[p] = value;
      subscribers.forEach((subscriber) => {
        subscriber({ ...target });
      });
      return true;
    },
  });

  return [reactiveState, subscribe] as const;
};

const [state, subscribe] = createState({
  foo: "baar",
});

const deleteSubscription = subscribe((state) => {
  console.log(state);
});

state.foo = "naar"; // Triggers update
(state as any).todo = "something"; // If you need dynamic properties, use `as any`
