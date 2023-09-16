import { ErrorMessage } from "formik";
import { ChangeEvent } from "react";
import { Url } from "url";
interface ImageInputProps {
  name: string;
  placeholder: string;
  edit?: boolean;
  className?: string;
  setHospitalImg: (file: string | ArrayBuffer | null) => void;
}

function ImageInput({
  name,
  placeholder,
  edit,
  className,
  setHospitalImg,
}: ImageInputProps) {
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      TransformFileData(file);
    }
  };

  const TransformFileData = (file: File) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setHospitalImg(reader.result);
      };
    } else {
      setHospitalImg("");
    }
  };
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
      <input
        className="rounded-md px-4 py-2 shadow focus:outline-none w-full"
        id={name}
        name={name}
        type="file"
        onChange={handleImageUpload}
      />

      <span className="m-1 text-sm font-semibold text-red-800">
        <ErrorMessage name={name} />
      </span>
    </div>
  );
}

export default ImageInput;
