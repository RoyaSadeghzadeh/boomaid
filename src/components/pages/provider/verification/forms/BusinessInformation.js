import {
  FormHeader,
  FormLable,
  Paragraph,
  Box,
  SelectBox,
  TextInput,
  PhoneInput,
  Radio,
  ImageInput,
  Button,
} from "@/components";
import { COUNTRIES } from "@/lib/countries";
import React, { useEffect, useState } from "react";

const BusinessInformation = ({
  control,
  onSubmit,
  watch,
  errors,
  formStepsStatus,
  handleChangeStepStatus,
}) => {
  const principalBusinessInputs = [
    {
      name: "informationStreet",
      placeholder: "Street address",
      type: "text",
    },
    {
      name: "informationAptSuit",
      placeholder: "Apartment/suit/floor(optional)",
      type: "text",
    },
    {
      name: "informationCity",
      placeholder: "City",
      type: "text",
    },
    {
      name: "informationStateProvince",
      placeholder: "State/Province",
      type: "text",
    },
    {
      name: "informationZipCode",
      placeholder: "Zip/Postal code",
      type: "text",
    },
    {
      name: "informationCountry",
      title: "Country",
      type: "select",
      options: COUNTRIES,
    },
  ];

  const handleNextStep = () => {
    handleChangeStepStatus("2", "active");
    onSubmit();
  };

  useEffect(() => {
    console.log("error",errors)
    if (Object.keys(errors).length > 0) {
      handleChangeStepStatus("1", "error");
    }
  }, [errors]);

  return (
    <div className="flex gap-4">
      {console.log("ddddddd", watch)}
      <FormHeader
        title="Your Business Information"
        step="1"
        status={formStepsStatus["1"]}>
        <Paragraph>
          As a provider you need to be verified. Fill out the form below
          accurately and help us to check the information and documents you
          provide us in order to approve them as soon as possible. You may edit
          or update your profile information later if any changes or updates
          happened to your business.
        </Paragraph>

        <Box>
          <FormLable>Principal Business Address</FormLable>
          <Box className="grid grid-cols-2 gap-4 !py-0">
            {principalBusinessInputs.map((input, index) => (
              <React.Fragment key={index}>
                {input.type === "select" ? (
                  <SelectBox
                    value={watch(input.name)}
                    name={input.name}
                    title={input.title}
                    options={input.options}
                    control={control}
                  />
                ) : (
                  <TextInput
                    name={input.name}
                    control={control}
                    placeholder={input.placeholder}
                  />
                )}
              </React.Fragment>
            ))}
          </Box>
        </Box>

        <Box>
          <FormLable>Business Phone Number</FormLable>
          <Box className="flex gap-4 !py-0">
            <PhoneInput selectedCountry={watch("selectedCountryCode")} control={control} name="businessPhoneNumber" />
            <Paragraph className="text-Neutral/05 !text-sm !py-0">
              Enter your phone number which will be shown in your profile. It
              must be different from your mobile number.
            </Paragraph>
          </Box>
        </Box>

        <Box>
          <FormLable required={false}>Business Website</FormLable>
          <TextInput
            control={control}
            name="businessWebsite"
            placeholder="Enter your business website address(optional)"
          />
        </Box>

        <Box>
          <FormLable>Business Email Address</FormLable>
          <Box className="flex items-center gap-3 !py-0">
            <TextInput
              control={control}
              name="businessEmail"
              placeholder="Enter your business email address"
            />
            <Paragraph className="text-Neutral/05 !text-sm !py-0">
              Enter your email address which will be shown in your profile. It
              must be different from your account email address.
            </Paragraph>
          </Box>
        </Box>

        <Box>
          <FormLable>Company/Organization/Permit Registration Number</FormLable>
          <TextInput
            control={control}
            name="registrationNumber"
            placeholder="Enter your Company/Organization/Permit Registration Number "
          />
        </Box>

        <Box>
          <FormLable>Tax Identification Number</FormLable>
          <Box className="flex items-center gap-6 !py-0">
            <TextInput
              control={control}
              name="tax"
              placeholder={
                watch("typeTax") === "1"
                  ? "Enter your EIN/SSN/ITIN"
                  : "Enter your tax number"
              }
              className="!w-8/12"
            />
            <Box className="flex items-center gap-4 !py-0">
              <Radio
                control={control}
                name="typeTax"
                formValue={watch("typeTax")}
                value={"1"}
                label="USA"
              />
              <Radio
                control={control}
                name="typeTax"
                formValue={watch("typeTax")}
                value={"2"}
                label="Other countries"
              />
            </Box>
          </Box>
        </Box>

        <Box>
          <FormLable>
            Upload your Company/Organization/Permit Registration Documents
          </FormLable>
          <ImageInput
            control={control}
            name="informationImages"
            id="informationImages"
            value={watch("informationImages")}
          />
        </Box>

        <Button onClick={handleNextStep} className="w-48 ml-auto block">
          Next
        </Button>
      </FormHeader>
    </div>
  );
};

export default BusinessInformation;
