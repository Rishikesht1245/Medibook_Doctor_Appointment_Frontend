import React from "react";

interface ImageInputProps {
  name: string;
  placeholder: string;
  edit?: boolean;
  className?: string;
  setFieldValue: (field: string, value: any) => void;
}

function ImageInput({
  name,
  placeholder,
  edit,
  className,
  setFieldValue,
}: ImageInputProps) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFieldValue(name, files[0]);
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
        onChange={handleFileChange}
        multiple
      />
    </div>
  );
}

export default ImageInput;
