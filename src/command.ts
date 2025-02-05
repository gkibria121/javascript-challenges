class Light {
  turnOn() {
    console.log("Turning on..");
  }
  turnOff() {
    console.log("Turning off..");
  }
}

class Thermostat {
  private _level: number = 0;

  setLevel(level: number) {
    this._level = level;
    console.log("Thermostat level changed to " + level);
  }
  get level(): number {
    return this._level;
  }
}
interface Command {
  execute(): void;
  undo(): void;
}

class Remote {
  private commandQueue: Command[] = [];
  private exCommand?: Command;
  addCommand(command: Command) {
    this.commandQueue.push(command);
  }
  undoCommand() {
    if (!this.exCommand) throw new Error("No command found to undo!");
    this.exCommand.undo();
    this.exCommand = undefined;
  }
  execute() {
    let command = this.commandQueue.shift();
    if (!command) throw new Error("No command found!");
    command.execute();
    this.exCommand = command;
  }
}

class TurnOnLigth implements Command {
  constructor(private light: Light) {}
  execute(): void {
    this.light.turnOn();
  }
  undo(): void {
    this.light.turnOff();
  }
}

class TurnOffLigth implements Command {
  constructor(private light: Light) {}
  execute(): void {
    this.light.turnOff();
  }
  undo(): void {
    this.light.turnOn();
  }
}

class AdjustThermostatLevel implements Command {
  private prevLevel: number = 0;
  constructor(private thermostat: Thermostat) {}

  execute(): void {
    let level = this.thermostat.level;
    this.prevLevel = level;
    let currentLevel = level + 1;

    this.thermostat.setLevel(currentLevel);
  }
  undo(): void {
    this.thermostat.setLevel(this.prevLevel);
  }
}
let light = new Light();
let thermostat = new Thermostat();
let remote = new Remote();
let thermostatAdjuster = new AdjustThermostatLevel(thermostat);
remote.addCommand(new TurnOnLigth(light));
remote.addCommand(new TurnOffLigth(light));
remote.addCommand(thermostatAdjuster);
remote.addCommand(thermostatAdjuster);
remote.addCommand(thermostatAdjuster);
remote.addCommand(thermostatAdjuster);

remote.execute();
remote.undoCommand();
remote.execute();
remote.execute();
remote.execute();
remote.execute();
remote.execute();
