import { IHospital } from "../../interfaces/hospitalAdmins";
import { useState } from "react";
import { Form, Formik } from "formik";
import { toast } from "react-hot-toast";
import Input from "./Input";
import PasswordInput from "./PasswordInput";
import LoadingButton from "../UI/LoadingButton";
import { useNavigate } from "react-router-dom";
import TextArea from "./TextArea";
import Button from "../UI/Button";
import { hospitalRegistrationSchema } from "../../schema/hospitalAdmin";
import ImageInput from "./ImageInput";

interface HospitalRegisterFormProps {
  onSubmit: (formData: IHospital) => Promise<any>;
}

const HospitalRegisterForm = ({ onSubmit }: HospitalRegisterFormProps) => {
  const [message, setMessage] = useState<string | null>(null);
  const [hospiatalImg, setHospitalImg] = useState<any>("");

  const navigate = useNavigate();
  const initialValues: IHospital = {
    name: "",
    email: "",
    description: "",
    location: "",
    city: "",
    state: "",
    country: "",
    image: "", // Initialize as an empty array for multiple images
    mobile: "",
    website: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={hospitalRegistrationSchema}
        onSubmit={(formData, { setSubmitting }: any) => {
          setMessage(null);
          setSubmitting(true);
          formData.image = hospiatalImg;
          onSubmit(formData)
            .then(({ data }) => {
              if (data?.success) {
                navigate(`/hospital-admins/signup/otp-verification/${data.id}`);
                return toast.success(data.message, {
                  style: { background: "rgba(0,0,0,0.9)", color: "white" },
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
                  style: { background: "rgba(0,0,0,0.9)", color: "white" },
                });
              }
            )
            .finally(() => setSubmitting(false));
        }}
      >
        {/* setFieldValue is used for image binding to the input field <Field/> component doesn't support type file */}
        {({ isSubmitting }) => (
          <Form
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-8 px-1 mb-3"
            encType="multipart/form-data"
          >
            <Input type="text" placeholder="Name" name="name" />
            <Input type="email" placeholder="Email" name="email" />
            <TextArea
              name="description"
              placeholder="Description"
              rows={3}
              cols={45}
            />
            <Input type="text" placeholder="Location" name="location" />
            <Input type="text" placeholder="City" name="city" />
            <Input type="text" placeholder="State" name="state" />
            <Input type="text" placeholder="Country" name="country" />
            <Input type="number" placeholder="Contact number" name="mobile" />
            <Input type="text" placeholder="Website" name="website" />
            <ImageInput
              placeholder="Image"
              name="image"
              setHospitalImg={setHospitalImg}
            />
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

            <div className="col-span-full flex justify-center">
              {isSubmitting ? (
                <LoadingButton className="w-1/2" />
              ) : (
                <Button className=" mx-auto px-10" type="submit">
                  Register
                </Button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default HospitalRegisterForm;
