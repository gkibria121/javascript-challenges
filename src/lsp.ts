// Create a robust authentication system that follows LSP where different authentication methods (Email/Password, OAuth, Single Sign-On) can be used interchangeably in your application.

// **Requirements:**

// 1. Create a base authentication interface/class that defines the contract
// 2. Implement different authentication strategies that can be substituted without breaking the application
// 3. Each authentication method should handle:
//    - User registration
//    - User login
//    - Password/token validation
//    - Session management
//    - Logout functionality

// **Additional Constraints:**

// - The application using these authentication methods shouldn't need to know the specific implementation details
// - Each authentication method should maintain its own security requirements
// - The system should be able to handle failed authentication attempts appropriately
// - Consider edge cases like expired tokens, invalid credentials, and account lockouts
// - The system should support switching between authentication methods for the same user
class User {
  constructor(private email: string, private password: string) {}
}

interface IAuthSystem {
  register(email?: string, password?: string): void;
  login(email?: string, password?: string): User;
  validate(): boolean;
  getSession(): Session;
  logout(): void;
}

interface Session {
  user: User;
}

class PasswordAuthentication implements IAuthSystem {
  private email: string | null = null;
  private password: string | null = null;
  private session: Session | undefined;

  register(email: string, password: string): void {
    this.email = email;
    this.password = password;
    if (!this.validate()) {
      throw new Error("Validation failed!");
    }
    console.log("User registered!");
  }

  validate(): boolean {
    return !!(this.email && this.password);
  }

  login(email: string, password: string): User {
    this.email = email;
    this.password = password;
    if (!this.validate()) {
      throw new Error("Validation failed!");
    }
    const user = new User(this.email, this.password);
    this.session = { user };
    return user;
  }

  getSession(): Session {
    if (!this.session) {
      throw new Error("Session not found!");
    }
    return this.session;
  }

  logout(): void {
    this.session = undefined;
    this.email = null;
    this.password = null;
  }
}

class OAuthAuthentication implements IAuthSystem {
  private session: Session | undefined;

  register(email: string, password: string): void {
    console.log("Authenticating with OAuth!");
    if (!this.validate()) {
      throw new Error("Validation failed!");
    }
    console.log("User registered!");
  }

  validate(): boolean {
    return true; // OAuth validation logic can be added here
  }

  login(email: string, password: string): User {
    console.log("Authenticating with OAuth!");
    const user = new User(email, password);
    this.session = { user };
    return user;
  }

  getSession(): Session {
    if (!this.session) {
      throw new Error("Session not found!");
    }
    return this.session;
  }

  logout(): void {
    this.session = undefined;
  }
}

class SingleSignOn implements IAuthSystem {
  private session: Session | undefined;

  register(email: string, password: string): void {
    console.log("Sign up with single sign on method");
    if (!this.validate()) {
      throw new Error("Validation failed!");
    }
    console.log("User registered!");
  }

  validate(): boolean {
    return true; // SSO validation logic can be added here
  }

  login(email: string, password: string): User {
    console.log("Log in with single sign on method");
    if (!this.validate()) {
      throw new Error("Validation failed!");
    }
    const user = new User(email, password);
    this.session = { user };
    return user;
  }

  getSession(): Session {
    if (!this.session) {
      throw new Error("Session not found!");
    }
    return this.session;
  }

  logout(): void {
    this.session = undefined;
  }
}

class UserService implements IAuthSystem {
  constructor(private auth: IAuthSystem) {}

  setAuthSystem(auth: IAuthSystem) {
    this.auth = auth;
  }

  register(email?: string, password?: string): void {
    this.auth.register(email, password);
  }

  login(email: string, password: string): User {
    return this.auth.login(email, password);
  }

  logout(): void {
    this.auth.logout();
  }

  validate(): boolean {
    return this.auth.validate();
  }

  getSession(): Session {
    return this.auth.getSession();
  }
}

// Usage
const passwordAuth = new PasswordAuthentication();
const oauthAuth = new OAuthAuthentication();
const ssoAuth = new SingleSignOn();

const userService = new UserService(passwordAuth);

userService.register("gkibria121@gmail.com", "123456");
const user = userService.login("gkibria121@gmail.com", "123456");
console.log(user);

userService.setAuthSystem(oauthAuth);
userService.register("oauthuser@example.com", "oauthpass");
const oauthUser = userService.login("oauthuser@example.com", "oauthpass");
console.log(oauthUser);
