import * as yup from "yup";

// login form validation schema
export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("*Email is Required")
    .test("isvalidEmail", "Invalid e-Mail", (value) =>
      /[a-z0-9]+@[a-z0-9]+/i.test(value)
    ),
  //test method will return the isValidEmail when the condition is true else it will return error message

  password: yup
    .string()
    .required("*Password is Required")
    .trim()
    .min(8, "Invalid Password")
    .max(16, "Invalid Password"),
});
