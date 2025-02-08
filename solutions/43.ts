// #### **43. Functional Undo/Redo**

// Implement an undo/redo system using a functional approach:

// 1. Each state change is a function.
// 2. Maintain a stack of previous and future states.

// **Techniques to Use:**

// - Immutable data structures
// - Higher-order functions

{
  interface Light {
    turnOn: () => void;
    turnOff: () => void;
  }
  type CommandOptions = {
    execute: () => void;
    undo: () => void;
  };
  type Command = (ligth: Light) => CommandOptions;
  const light: Light = {
    turnOn: () => {
      console.log("Turn on");
    },
    turnOff: () => {
      console.log("Turn off");
    },
  };
  const turnOnLight: Command = (light: Light) => ({
    execute() {
      light.turnOn();
    },
    undo() {
      light.turnOff();
    },
  });
  const turnOffLight: Command = (light: Light) => ({
    execute() {
      light.turnOff();
    },
    undo() {
      light.turnOn();
    },
  });

  const remote = (ligth: Light) => {
    let futureCommands: CommandOptions[] = [];
    let previousCommands: CommandOptions[] = [];
    let undoneCommands: CommandOptions[] = [];
    return {
      addCommand: (...commands: Command[]) => {
        futureCommands = [...futureCommands, ...commands.map((command) => command(light))];
      },
      execute: () => {
        const command = futureCommands.shift();
        if (!command) throw new Error("No Command Found!");
        previousCommands.push(command);
        command?.execute();
      },
      undo: () => {
        const command = previousCommands.pop();
        if (!command) throw new Error("Command Not found!");
        command.undo();
        undoneCommands = [...undoneCommands, command];
      },
      redo: () => {
        const command = undoneCommands.pop();
        if (!command) throw new Error("Command Not found!");
        command.execute();
      },
      getCommands: () => [futureCommands, previousCommands],
    };
  };
  const lightsRemote = remote(light);
  lightsRemote.addCommand(turnOnLight, turnOnLight, turnOnLight);
  lightsRemote.addCommand(turnOffLight, turnOffLight, turnOffLight);
  lightsRemote.execute();
  lightsRemote.execute();
  lightsRemote.execute();
  lightsRemote.execute();
  lightsRemote.execute();
  lightsRemote.execute();
  lightsRemote.undo();
  lightsRemote.undo();
  lightsRemote.undo();
  console.log(lightsRemote.getCommands());
}
