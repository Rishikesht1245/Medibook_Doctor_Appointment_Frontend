import { Field, ErrorMessage } from "formik";

// defining the type of props, we can also use type
interface TextAreaProps {
  name: string;
  placeholder: string;
  edit?: boolean;
  className?: string;
  rows: number; // Define 'rows' as a property
  cols: number; // Define 'cols' as a property
}

function TextArea({
  name,
  placeholder,
  rows,
  cols,
  edit,
  className,
}: TextAreaProps) {
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
        as="textarea"
        className="rounded-md px-4 py-2 shadow focus:outline-none w-full"
        id={name}
        name={name}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
      />
      <span className="m-1 text-sm font-semibold text-red-800">
        <ErrorMessage name={name} />
      </span>
    </div>
  );
}

export default TextArea;
