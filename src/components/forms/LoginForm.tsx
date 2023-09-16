// either we can use formik or useFormik for handling forms
import { Form, Formik } from "formik";
import Input from "./Input";
import Button from "../UI/Button";
import PasswordInput from "./PasswordInput";
import LoadingButton from "../UI/LoadingButton";
import { toast } from "react-hot-toast";
import { useCallback, useState } from "react";
import { loginSchema } from "../../schema/auth";
import { Navigate } from "react-router-dom";
import { getLocalData } from "../../utils/localStorage";

interface LoginFormProps {
  loginHandler: (token: string, data: any) => void;
  //   onsubmit function will returns a promise
  onSubmit: (formData: { email: string; password: string }) => Promise<any>;
}

function LoginForm({ loginHandler, onSubmit }: LoginFormProps) {
  const [message, setMessage] = useState<string | null>(null);

  // identifying the route function based on role
  const routeTo = useCallback((role: string): string | undefined => {
    switch (role) {
      case "superAdmin":
        return "super-admins";
      case "hospitalAdmin":
        return "hospital-admins";
      case "doctor":
        return "doctors";
      case "patient":
        return "patients";
    }
  }, []);

  // retrieving data from local storage
  const currentUser = getLocalData();

  // if current user data is already present in local storage redirect to dashboard page
  if (currentUser)
    return (
      <Navigate
        to={
          currentUser.role === "patient"
            ? "/"
            : `/${routeTo(currentUser.role)}/dashboard`
        }
      />
    );

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        //   formdata and setSubmitting is provided by formik itself
        // on submitting the form the below callback function is used.
        onSubmit={(formData, { setSubmitting }) => {
          setMessage(null);
          setSubmitting(true);
          onSubmit(formData)
            .then(({ data: { success, token, data } }) => {
              if (success) {
                // saving data in local storage, so current user will be there and above navigate function will
                loginHandler(token, data);
                toast.success(`Welcome, ${data.name}`, {
                  style: { background: "rgb(0,0,0,0.9", color: "white" },
                });
              }
            })
            .catch(
              // arrow function with in catch to set message error
              ({
                response: {
                  data: { message },
                },
              }) => {
                setMessage(message);
                toast.error(`${message}`, {
                  style: { background: "rgb(0,0,0,0.9", color: "white" },
                });
              }
            )
            .finally(() => setSubmitting(false));
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col justify-center gap-4 px-1 mb-3">
            <Input type="email" placeholder="Email" name="email" />
            <PasswordInput
              placeholder="Password"
              name="password"
              id="password"
            />
            {isSubmitting ? (
              <LoadingButton />
            ) : (
              <Button type="submit">Login</Button>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
}

export default LoginForm;
