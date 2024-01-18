"use client";
import { Arrow } from "@/components/icons";
import Image from "next/image";
import { Listbox } from "@headlessui/react";
import React from "react";

const CountrySelect = ({ selectedCountry }) => {
  return (
    <Listbox as="div" value={selectedCountry}>
      <Listbox.Button className="flex items-center justify-between gap-3 h-8 rounded-[4px] py-5 px-4 text-Neutral/05 text-sm">
        <div className="flex items-center gap-2">
          <Image
            width={32}
            height={21}
            alt={selectedCountry.value}
            src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${selectedCountry.value}.svg`}
          />
          <span className="text-sm text-Black/2">
            {selectedCountry.value}
          </span>
        </div>
        <Arrow />
      </Listbox.Button>
    </Listbox>
  );
};

export default CountrySelect;
