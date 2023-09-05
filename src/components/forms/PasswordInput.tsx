import { ErrorMessage, Field } from "formik";
import { useState } from "react";
import { closeEye, openEye } from "../../assets/icons/icons";

interface PasswordInputProps {
  id: string;
  name: string;
  placeholder: string;
  edit?: boolean;
}

function PasswordInput({ id, name, placeholder, edit }: PasswordInputProps) {
  // informing typeScirpt that the state values can be either hide or show
  const [toggle, setToggle] = useState<"show" | "hide">("hide");
  return (
    <div className="flex flex-col w-full">
      {edit && (
        <label
          htmlFor={name}
          className="text-sm font-semibold mb-1 ml-1 tracking-widest text-primary"
        >
          {placeholder}
        </label>
      )}
      <div className="flex justify-between relative items-center rounded-md px-4 py-2 shadow w-full">
        <Field
          className="outline-none w-4/5"
          id={id}
          name={name}
          placeholder={placeholder}
          //   for setting show password
          type={toggle === "hide" ? "password" : "text"}
        />
        <img
          className="w-5 h-5"
          src={toggle === "hide" ? openEye : closeEye}
          alt="showOrHidePassword"
          onClick={(): void => {
            setToggle((prevState) => {
              if (prevState === "hide") return "show";
              else return "hide";
            });
          }}
        />
      </div>
      <span className=" m-1 text-sm font-semibold text-red-800">
        <ErrorMessage name={name} />
      </span>
    </div>
  );
}

export default PasswordInput;
