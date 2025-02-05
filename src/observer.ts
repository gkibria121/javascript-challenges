type Events = "new_message" | "user_logged_in";

abstract class ObserverSubject {
  protected observers: Observer[] = [];
  notify(name: Events, data: Record<string, string>) {
    this.observers.forEach((observer) => observer.update(name, data));
  }
  registerObserver(observer: Observer) {
    this.observers.push(observer);
  }
  removeObserver(observer: Observer) {
    let index = this.observers.indexOf(observer);
    if (index === -1) throw new Error("Observer not found!");
    this.observers.splice(index, 1);
  }
}

interface Observer {
  update(name: Events, data: Record<string, string>): void;
}

class User extends ObserverSubject {
  constructor(public name: string) {
    super();
  }
  addEvent(name: Events, data: Record<string, string> = {}) {
    console.log("Doing something!");

    this.notify(name, data);
  }
}

class NotificationObserver implements Observer {
  update(name: Events, data: Record<string, string>): void {
    if (name !== "new_message") return;
    console.log("Notification will handle by Notification Observer!");
  }
}

class LoginObserver implements Observer {
  update(name: Events, data: Record<string, string>): void {
    if (name !== "user_logged_in") return;
    console.log("Loging time will be observed by Login Observer!");
  }
}

let user = new User("kibria");
let obs1 = new NotificationObserver();
let obs2 = new LoginObserver();

user.registerObserver(obs1);
user.registerObserver(obs2);

user.addEvent("user_logged_in");
user.addEvent("new_message", {
  sender: "user1",
  message: "Hi there how are you!",
});
