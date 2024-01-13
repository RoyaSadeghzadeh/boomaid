'use client'
import { Add } from "@/components/icons";
import React from "react";
import Paragraph from "../text/Paragraph";
import { Controller } from "react-hook-form";
import Image from "next/image";

const ImageInput = ({ control, name, id, value = [] }) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <div
            className={`relative w-full h-24 rounded-lg flex items-center justify-center z-50 overflow-hidden ${
              error ? "border border-Alert/red" : ""
            }`}>
            <div
              className={`after:w-full after:h-full after:absolute after:bg-primary-bordered after:z-20 after:content-[''] flex items-center justify-center before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-white before:z-10`}>
              <label className="absolute z-30 cursor-pointer" htmlFor={id}>
                <input
                  onChange={(event) =>
                    field.onChange(Array.from(event.target.files))
                  }
                  multiple
                  className="hidden"
                  type="file"
                  id={id}
                />
                <Add />
              </label>
            </div>
          </div>
        )}
      />
      <Paragraph className="!py-2 text-Neutral/05 text-xs">
        Add up to 5 photos(optional) <br /> Supported formats: JPEG,JPG,PNG,PDF.
        <br /> All documents must be in original version, black & white copies
        are not acceptable.
      </Paragraph>
      <div className="flex gap-4 w-full overflow-auto">
        {value.map((image, index) => (
          <Image
            alt=""
            width={200}
            height={200}
            key={index}
            src={URL.createObjectURL(image)}
          />
        ))}
      </div>
    </>
  );
};

export default ImageInput;
