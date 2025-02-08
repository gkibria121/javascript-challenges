// #### **41. Functional Validation of Forms**

// Compose a series of validation functions that check user input (e.g., required fields, email format, password strength).

// **Techniques to Use:**

// - Higher-order functions
// - Function composition
// - Array iteration (`every`, `map`)

{
  type ValidatorCallback = (field: string, message: string) => void;

  // Improved email validation
  const isValidEmail = (formData: FormData, callback: ValidatorCallback) => {
    const email = formData.get("email") as string;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Proper email regex

    if (!emailPattern.test(email)) {
      callback("email", "Invalid Email Format");
      return false;
    }
    return true;
  };
  const isValidUserName = (formData: FormData, callback: ValidatorCallback) => {
    if ((formData.get("name") as string).length == 0) {
      callback("name", "name cannot be empty");
      return false;
    }

    return true;
  };
  const isValidPassword = (formData: FormData, callback: ValidatorCallback) => {
    if ((formData.get("password") as string).length == 0) {
      callback("password", "password cannot be empty");
      return false;
    }

    return true;
  };
  const compose =
    (...functions: ((formData: FormData, callback: ValidatorCallback) => boolean)[]) =>
    (formData: FormData, callback: ValidatorCallback) =>
      functions.every((fn: (formData: FormData, callback: ValidatorCallback) => boolean) =>
        fn(formData, callback)
      );

  const setError = (field: string, message: string) => {
    console.error(`Validation Error: ${field} - ${message}`);
    return;
  };
  const validator = compose(isValidEmail, isValidUserName, isValidPassword);

  const formData = new FormData();
  formData.set("email", "gkibria121@gmail.com");
  formData.set("name", "abul");
  formData.set("password", "");

  console.log(validator(formData, setError));
}
