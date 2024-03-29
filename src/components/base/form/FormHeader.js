"use client";
import { Disclosure, Transition } from "@headlessui/react";
import React from "react";

const FormHeader = ({ children, title, step, status = "" }) => {
  const circleBackground =
    status === "active"
      ? "bg-Boomaid/yellow shadow-Boomaid/yellow"
      : status === "deactive"
      ? "bg-Neutral/07 shadow-Neutral/07"
      : status === "success"
      ? "bg-Green shadow-Green"
      : "bg-Alert/red shadow-Red";

  const lineBackground =
    status === "active"
      ? "before:bg-Boomaid/yellow"
      : status === "deactive"
      ? "before:bg-Neutral/07"
      : status === "success"
      ? "before:bg-Green"
      : "before:bg-Alert/red";

  return (
    <div
      className={`w-full  min-h-20 relative ${
        step !== "3"
          ? `md:before:content-[''] md:before:absolute md:before:h-full md:before:w-[2px] ${lineBackground} md:before:-z-10 md:before:top-5 md:before:left-[22px]`
          : ""
      }`}>
      <Disclosure defaultOpen={status === "active"} className="w-full">
        {({ open }) => (
          <>
            <div className="flex flex-col md:flex-row items-center md:gap-8">
              <div
                className={`flex items-center h-32 md:h-auto relative before:content-[''] before:absolute before:w-[2px] ${step > 1 ? "before:h-full" : " before:h-2/4 before:bottom-0"} ${lineBackground} before:-z-10 before:left-[22px]`}>
                <div
                  className={`flex items-center justify-center font-bold text-white text-xl min-w-[46px] h-[46px] rounded-full ${circleBackground}`}>
                  {step}
                </div>
              </div>
              <Disclosure.Button
                disabled={status === "deactive"}
                className={`flex items-center h-14 p-4 rounded-full w-full text-sm font-bold text-Neutral/01 bg-Boomaid/yellow`}>
                {title}
              </Disclosure.Button>
            </div>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0">
              <Disclosure.Panel className="md:pl-20 md:pb-3 ">
                {children}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default FormHeader;
