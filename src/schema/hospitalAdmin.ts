import * as yup from "yup";

export const hospitalRegistrationSchema = yup.object().shape({
  name: yup.string().required("*Name is Required").trim(),
  email: yup
    .string()
    .required("*Email is required")
    .trim()
    .lowercase()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email address"
    ),
  description: yup.string().required("*Description is required").trim(),
  location: yup.string().required("*Locations is required").trim(),
  city: yup.string().required("*City is required").trim(),
  state: yup.string().required("*State is required").trim(),
  country: yup.string().required("*Country is required").trim(),
  mobile: yup
    .string()
    .required("*Mobile is required")
    .matches(/^[0-9]{10}$/, "Invalid mobile number"),
  website: yup.string().test("isValidUrl", "Invalid website URL", (value) => {
    if (!value) {
      return true; // Allow empty website field
    }
    // Use a regular expression or other validation logic to check for a valid URL
    return /^https?:\/\/\S+$/i.test(value);
  }),
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
