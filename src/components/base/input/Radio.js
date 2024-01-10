import { Controller } from "react-hook-form";

export default function Radio({
  label,
  className,
  name,
  control,
  formValue,
  value,
}) {
  const checked = value === formValue;
  return (
    <div className="flex items-center justify-start gap-2">
      <Controller
        name={name}
        control={control}
        render={({ field, formState: { error } }) => (
          <div
            onClick={() =>
              formValue === value ? field.onChange("") : field.onChange(value)
            }
            className={`w-4 h-4 rounded-full border-2 relative border-solid flex justify-center items-center cursor-pointer ${className} ${
              checked
                ? "border-Primary/03"
                : error
                ? "border-Alert/red"
                : "border-Neutral/03"
            }`}>
            <div
              className={`bg-Primary/03 w-full h-full rounded-full border-2 border-white transition-all ${
                checked ? "scale-100 duration-300" : "scale-0 duration-100"
              }`}></div>
          </div>
        )}
      />

      <p
        className={`text-sm ${
          checked ? "text-black" : "text-Neutral/03"
        }`}>{`${label}`}</p>
    </div>
  );
}
