"use client";
import { Listbox, Transition } from "@headlessui/react";
import React from "react";
import { Arrow } from "../../icons";
import { Controller } from "react-hook-form";

const SelectBox = ({
  options = [],
  title,
  className,
  control,
  value = {},
  name,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Listbox
          as="div"
          className="relative flex-1 sm:flex-auto"
          value={value}
          onChange={(data) => field.onChange(data)}>
          {({ open }) => (
            <>
              <Listbox.Button
                className={`w-full flex items-center justify-between bg-white shadow-Gray h-11 rounded-[4px] py-5 px-4  text-sm ${
                  value.name ? "text-Neutral/01" : "text-Neutral/05"
                } ${error ? "border border-Alert/red" : ""} ${className}`}>
                <span>{value?.name || title}</span>
                <Arrow />
              </Listbox.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0">
                <Listbox.Options className="absolute w-full h-56 overflow-auto z-[99999] bg-white shadow-Gray rounded-[4px] mt-2 py-3 cursor-pointer text-sm">
                  {options.map((person) => (
                    <Listbox.Option
                      className="py-2 px-4 hover:bg-neutral-400"
                      key={person.id}
                      value={person}
                      disabled={person.unavailable}>
                      {person.name}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </>
          )}
        </Listbox>
      )}
    />
  );
};

export default SelectBox;
