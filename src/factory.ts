class Button {
  constructor() {
    console.log("Button was created");
  }
}
class Div {
  constructor() {
    console.log("Div was created");
  }
}
class Factory {
  public create(type: "button" | "div"): object {
    switch (type) {
      case "button":
        return new Button();
      case "div":
        return new Div();

      default:
        throw new Error(`${type} is not a valid argument.`);
    }
  }
}

let factory = new Factory();

let button = factory.create("button");
let div = factory.create("div");
