import { ErrorMessage, Field } from "formik";

interface SelectInputProps {
  options: { value: string; text: string }[];
  name: string;
  className?: string;
  label: string;
  edit?: boolean;
  defaultValue?: string;
}
const SelectInput = ({
  name,
  options,
  className,
  label,
  edit,
  defaultValue,
}: SelectInputProps) => {
  return (
    <div>
      {edit && label && (
        <label
          htmlFor={name}
          className="text-sm font-semibold mb-1 ml-1 tracking-widest text-slate-900"
        >
          {label}
        </label>
      )}
      <div className={`${className} flex flex-col`}>
        <Field
          as="select"
          name={name}
          id={name}
          className={`${className} text-gray-400 rounded-md px-4 py-2 shadow focus:outline-none w-full`}
        >
          [
          {
            <option key="default" value={defaultValue ? defaultValue : ""}>
              {defaultValue ? defaultValue : label}
            </option>
          }
          , ...
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
          ]
        </Field>
        <span className="m-1 text-sm font-semibold text-red-800">
          <ErrorMessage name={name}></ErrorMessage>
        </span>
      </div>
    </div>
  );
};
export default SelectInput;
