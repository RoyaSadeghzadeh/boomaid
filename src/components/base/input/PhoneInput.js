"use client";
import { ArrowLight } from "@/components/icons";
import { COUNTRIES } from "@/lib/countries";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import React from "react";
import TextInput from "./TextInput";
import { Controller } from "react-hook-form";

const PhoneInput = ({ control, name, selectedCountry }) => {
  return (
    <div className="flex items-center gap-2">
      <Controller
        name="selectedCountryCode"
        control={control}
        render={({ field, formState: { error } }) => (
          <Listbox as="div" value={selectedCountry} onChange={field.onChange}>
            {({ open }) => (
              <>
                <Listbox.Button className=" w-36 flex items-center justify-between bg-white shadow-Gray h-11 rounded-[4px] py-5 px-4 text-Neutral/05 text-sm">
                  <div className="flex items-center gap-2">
                    <Image
                      width={32}
                      height={21}
                      alt={selectedCountry.value}
                      src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${selectedCountry.value}.svg`}
                    />
                    <span className="text-sm text-Black/2">
                      {selectedCountry.dial_code}
                    </span>
                  </div>
                  <ArrowLight />
                </Listbox.Button>
                <Transition
                  show={open}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0">
                  <Listbox.Options className="absolute w-60 h-56 overflow-auto bg-white shadow-Gray rounded-[4px] mt-2 py-3 cursor-pointer text-sm">
                    {COUNTRIES.map((person) => (
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

      <TextInput
        control={control}
        name={name}
        className="flex-1 md:flex-auto md:min-w-[322px]"
        placeholder="Enter your business phone number"
      />
    </div>
  );
};

export default PhoneInput;
