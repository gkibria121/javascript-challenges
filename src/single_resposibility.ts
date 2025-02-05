// #### **1. Single Responsibility Principle (SRP)**

// - **Challenge**: Refactor a monolithic `User` class that handles user authentication, profile management, and logging.
// - **Task**: Split the `User` class into smaller classes, each with a single responsibility.

type LogType = "info" | "warning" | "error";
type KeyValuePair = Record<string, string>;

class Logger {
  private static logTypeMap: Record<LogType, "log" | "warn" | "error"> = {
    info: "log",
    warning: "warn",
    error: "error",
  };
  constructor(type: LogType, message: string, data: KeyValuePair = {}) {
    let method = Logger.logTypeMap[type];
    console[method](message, data);
  }
  static info(message: string, data: KeyValuePair = {}) {
    console.log(message, data);
  }
  static warn(message: string, data: KeyValuePair = {}) {
    console.warn(message, data);
  }
  static error(message: string, data: KeyValuePair = {}) {
    console.error(message, data);
  }
}

class AuthenticatedUser {
  constructor(public name: string) {}
}
class UserState {
  static user?: AuthenticatedUser;
}
class AuthenticationService {
  static user?: AuthenticatedUser;
  constructor(private logger: Logger) {}
  static authenticate(email: string, password: string) {
    if (!(email && password)) {
      Logger.error("User Not Found!", { email, password });
      return false;
    }
    UserState.user = new AuthenticatedUser("kibria");
    return true;
  }
  logOut() {
    UserState.user = undefined;
  }
}
class ProfileManager {
  constructor(private user: AuthenticatedUser) {}
  updateName(name: string) {
    this.user.name = name;
    new Logger("info", "Name updated", { name });
  }
}
