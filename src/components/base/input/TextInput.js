import React from "react";
import Paragraph from "../text/Paragraph";
import { Controller } from "react-hook-form";

const TextInput = ({
  placeholder,
  className,
  validationText = "",
  name = "",
  type = "text",
  staticValue = "",
  control,
}) => {
  return (
    <>
      <Controller
        render={({ field, fieldState: { error } }) => (
          <div
            className={`bg-white shadow-Gray h-11 rounded-[4px] flex items-center py-5 px-4 min-w-[322px] ${className} ${
              error ? "border border-Alert/red" : ""
            }`}>
            <input
              placeholder={placeholder}
              type={type}
              {...field}
              onChange={(event) => {
                event.target.value.includes(staticValue)
                  ? field.onChange(event.target.value)
                  : field.onChange(staticValue + - + event.target.value);
              }}
              className="w-full text-sm flex-1 placeholder:text-Neutral/05 placeholder:text-sm focus:outline-none"
            />
          </div>
        )}
        name={name}
        control={control}
        defaultValue=""
      />
      {validationText && (
        <Paragraph className="!py-1 text-Neutral/05 text-xs text-end">
          {validationText}
        </Paragraph>
      )}
    </>
  );
};

export default TextInput;
