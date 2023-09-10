import * as yup from "yup";

// patient registration schema.
export const patientRegistrationSchema = yup.object().shape({
  name: yup
    .string()
    .required("*Name is required")
    .trim()
    .min(4, "Invalid Name"),
  email: yup
    .string()
    .required("*Email is required")
    .trim()
    .lowercase()
    .test("isvalidEmail", "Invalid e-Mail", (arg) =>
      /[a-z0-9]+@[a-z0-9]+.com/i.test(arg)
    ),
  gender: yup
    .string()
    .required("*Gender is required")
    .oneOf(["female", "male"], "Invalid gender"),
  mobile: yup
    .string()
    .required("*Mobile is required")
    .trim()
    .matches(/^[0-9]{10}$/, "Invalid mobile number"),
  age: yup.number().required("*Age is required"),
  password: yup
    .string()
    .required("*Password is required")
    .trim()
    .min(8, "Invalid Password")
    .max(16, "Invalid Password"),
  confirmPassword: yup
    .string()
    .trim()
    .required("*Confirm Password is Required")
    .oneOf([yup.ref("password")], "Password must match"),
});
