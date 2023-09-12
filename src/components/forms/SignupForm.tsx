import { useState, useMemo } from "react";
import { Form, Formik } from "formik";
import { toast } from "react-hot-toast";
import Input from "./Input";
import PasswordInput from "./PasswordInput";
import LoadingButton from "../UI/LoadingButton";
import { useNavigate } from "react-router-dom";
import { patientRegistrationSchema } from "../../schema/patient";
import SelectInput from "./SelectInput";
import Button from "../UI/Button";

interface FormData {
  name: string;
  email: string;
  gender: string;
  mobile: string;
  age: number;
  password: string;
  confirmPassword: string;
}

interface SignupFormProps {
  onSubmit: (formData: FormData) => Promise<any>;
}

function SignupForm({ onSubmit }: SignupFormProps) {
  const [message, setMessage] = useState<string | null>(null);
  {
    console.log(message);
  }
  const navigate = useNavigate();

  //   initial values for Formik
  const initialValues: FormData = {
    name: "",
    email: "",
    gender: "",
    mobile: "",
    age: 0,
    password: "",
    confirmPassword: "",
  };

  // options for select input (useMemo memoise the result of a function)
  const genderOptions = useMemo(
    () => [
      { text: "Male", value: "male" },
      { text: "Female", value: "female" },
      { text: "Others", value: "others" },
    ],
    []
  );

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={patientRegistrationSchema}
        onSubmit={(formData, { setSubmitting }: any) => {
          setMessage(null);
          setSubmitting(true);
          onSubmit(formData)
            .then(({ data }) => {
              if (data.success) {
                navigate(`/patients/signup/otp-verification/${data.id}`);
                return toast.success(data.message, {
                  style: { background: "rgba(0,0,0,0.9", color: "white" },
                });
              }
            })
            .catch(
              ({
                response: {
                  data: { message },
                },
              }) => {
                setMessage(message);
                return toast.error(message, {
                  style: { background: "rgba(0,0,0,0.9", color: "white" },
                });
              }
            )
            .finally(() => setSubmitting(false));
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col justify-center gap-4 px-1 mb-3">
            <Input type="text" placeholder="Name" name="name" />
            <Input type="email" placeholder="Email" name="email" />
            <SelectInput name="gender" label="Gender" options={genderOptions} />
            <Input type="number" placeholder="Contact number" name="mobile" />
            <Input type="number" placeholder="Age" name="age" />
            <PasswordInput
              placeholder="Password"
              name="password"
              id="password"
            />
            <PasswordInput
              placeholder="Confirm Password"
              name="confirmPassword"
              id="confirmPassword"
            />

            {isSubmitting ? (
              <LoadingButton />
            ) : (
              <Button type="submit">Register</Button>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
}

export default SignupForm;
