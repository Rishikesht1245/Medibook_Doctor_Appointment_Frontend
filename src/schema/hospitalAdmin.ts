import * as yup from "yup";

export const hospitalRegistrationSchema = yup.object().shape({
  name: yup.string().required("*Name is Required").trim(),
  email: yup
    .string()
    .required("*Email is required")
    .trim()
    .lowercase()
    .test("isvalidEmail", "Invalid e-Mail", (arg) =>
      /[a-z0-9]+@[a-z0-9]+.com/i.test(arg)
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
  website: yup.string().url().trim(),
  images: yup
    .array()
    .of(yup.string())
    .required("*At least one image is required"),
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
