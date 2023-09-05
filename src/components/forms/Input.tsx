import { Field, ErrorMessage } from "formik";

// defining the type of props, we can also use type
interface inputProps {
  name: string;
  placeholder: string;
  type: string;
  edit?: boolean;
  className?: string;
}

function Input({ name, placeholder, type, edit, className }: inputProps) {
  return (
    <div className={`${className} flex flex-col`}>
      {edit && (
        <label
          htmlFor={name}
          className="text-sm font-semibold mb-1 ml-1 tracking-widest text-primary"
        >
          {placeholder}
        </label>
      )}
      {/* Field is provided by Formik to represent input elements */}
      <Field
        className="rounded-md px-4 py-2 shadow focus:outline-none w-full"
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
      />
      <span className="m-1 text-sm font-medium text-red-800">
        <ErrorMessage name={name} />
      </span>
    </div>
  );
}

export default Input;
