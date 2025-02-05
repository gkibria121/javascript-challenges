### **Challenges for Gang of Four (GoF) Design Patterns**

#### **1. Singleton Pattern**

- **Challenge**: Create a configuration manager for an application that ensures only one instance of the configuration object exists throughout the application's lifecycle.
- **Task**: Implement the Singleton pattern to manage the configuration object. Ensure that the configuration is loaded only once and can be accessed globally.

#### **2. Factory Pattern**

- **Challenge**: Build a simple UI component library (e.g., buttons, inputs, modals) where each component is created using a factory.
- **Task**: Use the Factory pattern to create different UI components based on the type passed to the factory.

#### **3. Observer Pattern**

- **Challenge**: Implement a notification system where multiple subscribers can listen to events (e.g., "newMessage", "userLoggedIn") and react accordingly.
- **Task**: Use the Observer pattern to allow components to subscribe to events and notify them when an event occurs.

#### **4. Decorator Pattern**

- **Challenge**: Create a text processing system where you can dynamically add formatting options (e.g., bold, italic, underline) to a text string.
- **Task**: Use the Decorator pattern to add formatting features to the text without modifying the core text class.

#### **5. Strategy Pattern**

- **Challenge**: Build a text analysis system that can process text documents using different analysis strategies (e.g., sentiment analysis, keyword extraction, readability scoring, plagiarism detection).
- **Task**: Use the Strategy pattern to implement different analysis algorithms that can be swapped at runtime based on user requirements.

#### **6. Adapter Pattern**

- **Challenge**: Integrate a third-party analytics library that has a different interface than what your application expects.
- **Task**: Use the Adapter pattern to create a wrapper that makes the third-party library compatible with your application.

#### **7. Command Pattern**

- **Challenge**: Implement a remote control for a smart home system that can execute commands like turning lights on/off, adjusting thermostat settings, etc.
- **Task**: Use the Command pattern to encapsulate each action as an object and allow the remote control to execute and undo commands.

#### **8. Template Method Pattern**

#### Problem Statement:

You are tasked with designing a document generation system for a content management application. The system should support generating different types of documents (e.g., PDF, HTML, and plain text) while following a common workflow. The workflow consists of the following steps:

1. **Prepare Content**: Gather and format the content for the document.
2. **Add Header**: Add a header specific to the document type.
3. **Add Footer**: Add a footer specific to the document type.
4. **Generate Document**: Finalize and generate the document in the desired format.

#### Requirements:

- Use the **Template Method Pattern** to define the skeleton of the document generation workflow.
- Allow subclasses to override specific steps (e.g., adding headers or footers) based on the document type.
- Ensure the core workflow (sequence of steps) remains consistent across all document types.

#### Your Task:

1. Design the abstract class that defines the template method for the document generation workflow.
2. Create concrete subclasses for generating PDF, HTML, and plain text documents.
3. Ensure that the workflow is flexible enough to allow customization of individual steps (e.g., headers and footers) without changing the overall structure.

### **Challenges for SOLID Principles**

#### **1. Single Responsibility Principle (SRP)**

- **Challenge**: Refactor a monolithic `User` class that handles user authentication, profile management, and logging.
- **Task**: Split the `User` class into smaller classes, each with a single responsibility.

#### **2. Open/Closed Principle (OCP)**

- **Challenge**: Build a discount system for an e-commerce application that can easily support new types of discounts (e.g., percentage-based, fixed-amount, seasonal).
- **Task**: Design the system so that it is open for extension (adding new discount types) but closed for modification.

#### **3. Liskov Substitution Principle (LSP)**

Create a robust authentication system that follows LSP where different authentication methods (Email/Password, OAuth, Single Sign-On) can be used interchangeably in your application.

**Requirements:**

1. Create a base authentication interface/class that defines the contract
2. Implement different authentication strategies that can be substituted without breaking the application
3. Each authentication method should handle:
   - User registration
   - User login
   - Password/token validation
   - Session management
   - Logout functionality

**Additional Constraints:**

- The application using these authentication methods shouldn't need to know the specific implementation details
- Each authentication method should maintain its own security requirements
- The system should be able to handle failed authentication attempts appropriately
- Consider edge cases like expired tokens, invalid credentials, and account lockouts
- The system should support switching between authentication methods for the same user

#### **4. Interface Segregation Principle (ISP)**

- **Challenge**: Design a media player system that supports playing audio, video, and streaming content.
- **Task**: Create separate interfaces for each media type so that clients only depend on the interfaces relevant to their needs.

#### **5. Dependency Inversion Principle (DIP)**

- **Challenge**: Build a notification system that can send notifications via email, SMS, or push notifications.
- **Task**: Use dependency injection to decouple the notification logic from the specific notification channels.

---

### **Combined Challenges**

1. **E-Commerce System**:

   - Use the **Factory Pattern** to create different types of products.
   - Use the **Observer Pattern** to notify customers about product availability.
   - Apply the **Single Responsibility Principle** to separate product management, order processing, and payment handling.

2. **Game Development**:

   - Use the **Strategy Pattern** to implement different AI behaviors for game characters.
   - Use the **Decorator Pattern** to add power-ups or abilities to characters dynamically.
   - Apply the **Open/Closed Principle** to allow adding new character types without modifying existing code.

3. **Task Scheduler**:
   - Use the **Command Pattern** to encapsulate tasks as objects.
   - Use the **Template Method Pattern** to define a common workflow for task execution.
   - Apply the **Dependency Inversion Principle** to decouple task scheduling from task execution.

---

### **Tips for Success**

- Start with simple implementations and gradually add complexity.
- Write unit tests to ensure your design patterns and principles are correctly applied.
- Refactor your code to improve adherence to SOLID principles and design patterns.
