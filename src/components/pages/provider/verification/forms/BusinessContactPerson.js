import {
  Box,
  Button,
  FormHeader,
  FormLable,
  ImageInput,
  Radio,
  SelectBox,
  TextInput,
} from "@/components";
import { COUNTRIES } from "@/lib/countries";
import { MOUNTHS } from "@/lib/date";
import { NATIONALITIES } from "@/lib/nationalities";
import React, { useEffect } from "react";

const BusinessContactPerson = ({
  control,
  watch,
  onSubmit,
  errors,
  formStepsStatus,
  handleChangeStepStatus,
}) => {
  const currentYear = new Date().getFullYear();

  const personInformationInputs = [
    {
      name: "firstName",
      placeholder: "First Name",
      type: "text",
    },
    {
      name: "middleName",
      placeholder: "Middle Name(optional)",
      type: "text",
    },
    {
      name: "lastName",
      placeholder: "Last Name",
      type: "text",
    },
  ];

  const birthdayInputs = [
    {
      name: "mounth",
      title: "Mounth",
      options: MOUNTHS,
    },
    {
      name: "day",
      title: "Day",
      options: Array.from({ length: 30 }, (_, index) => ({
        name: index + 1,
        value: index + 1,
      })),
    },
    {
      name: "year",
      title: "Year",

      options: Array.from({ length: 10 }, (_, index) => ({
        name: currentYear - index,
        value: currentYear - index,
      })),
    },
  ];

  const contactAddressInputs = [
    {
      name: "contactStreet",
      placeholder: "Street address",
      type: "text",
    },
    {
      name: "contactAptSuit",
      placeholder: "Apartment/suit/floor(optional)",
      type: "text",
    },
    {
      name: "contactCity",
      placeholder: "City",
      type: "text",
    },
    {
      name: "contactStateProvince",
      placeholder: "State/Province",
      type: "text",
    },
    {
      name: "contactZipCode",
      placeholder: "Zip/Postal code",
      type: "text",
    },
    {
      name: "contactCountry",
      title: "Country",
      type: "select",
      options: COUNTRIES,
    },
  ];

  const nationalityInputs = [
    {
      name: "nationalityOfBirth",
      title: "Nationality Of Birth",
      options: NATIONALITIES,
    },
    {
      name: "currentNationality",
      title: "Current Nationality",
      options: NATIONALITIES,
    },
  ];

  const handleNextStep = () => {
    handleChangeStepStatus("3", "active");
    onSubmit();
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      handleChangeStepStatus("2", "error");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  return (
    <div>
      <FormHeader
        title="Your Business Contact Person"
        step="2"
        status={formStepsStatus["2"]}>
        <Box>
          <FormLable>Authorized Person Information</FormLable>
          <Box className="grid grid-cols-3 gap-4 !py-0">
            {personInformationInputs.map((input, index) => (
              <React.Fragment key={index}>
                <TextInput
                  control={control}
                  name={input.name}
                  className="!min-w-[auto]"
                  placeholder={input.placeholder}
                />
              </React.Fragment>
            ))}
          </Box>
        </Box>

        <Box>
          <FormLable>Date of Birth</FormLable>
          <Box className="flex items-center gap-4 !py-0">
            {birthdayInputs.map((input, index) => (
              <React.Fragment key={index}>
                <SelectBox
                  control={control}
                  name={input.name}
                  options={input.options}
                  className="!w-28"
                  title={input.title}
                  value={watch(input.name)}
                />
              </React.Fragment>
            ))}
          </Box>
        </Box>

        <Box>
          <FormLable>Principal Business Address</FormLable>
          <Box className="grid grid-cols-2 gap-4 !py-0">
            {contactAddressInputs.map((input, index) => (
              <React.Fragment key={index}>
                {input.type === "select" ? (
                  <SelectBox
                    control={control}
                    name={input.name}
                    title={input.title}
                    options={input.options}
                    value={watch(input.name)}
                  />
                ) : (
                  <TextInput
                    control={control}
                    name={input.name}
                    placeholder={input.placeholder}
                  />
                )}
              </React.Fragment>
            ))}
          </Box>
        </Box>

        <Box>
          <FormLable>Nationality</FormLable>
          <Box className="grid grid-cols-2 gap-4 !py-0">
            {nationalityInputs.map((input, index) => (
              <React.Fragment key={index}>
                <SelectBox
                  control={control}
                  name={input.name}
                  title={input.title}
                  options={input.options}
                />
              </React.Fragment>
            ))}
          </Box>
        </Box>

        <Box>
          <FormLable>Identity Proof</FormLable>
          <Box className="grid grid-cols-2 gap-4 !py-0">
            <TextInput
              control={control}
              name="identityProof"
              placeholder={
                watch("passportOrId") === "1" ? "Passport number" : "ID number"
              }
            />
            <Box className="flex items-center gap-4 !py-0 px-2">
              <Radio
                name="passportOrId"
                value={"1"}
                formValue={watch("passportOrId")}
                control={control}
                label="Passport"
              />
              <Radio
                name="passportOrId"
                value={"2"}
                formValue={watch("passportOrId")}
                control={control}
                label="Government issued ID"
              />
            </Box>
          </Box>
        </Box>

        <Box>
          <FormLable>Upload your identity proof documents</FormLable>
          <ImageInput
            control={control}
            name="contactImages"
            id="contactImages"
            value={watch("contactImages")}
          />
        </Box>

        <Box className="flex justify-end gap-2">
          <Button className="!w-24 block" variant="primary-bordered">
            Back
          </Button>
          <Button onClick={handleNextStep} className="!w-24 block">
            Next
          </Button>
        </Box>
      </FormHeader>
    </div>
  );
};

export default BusinessContactPerson;
