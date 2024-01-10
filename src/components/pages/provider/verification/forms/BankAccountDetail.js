import {
  FormHeader,
  Box,
  Radio,
  FormLable,
  TextInput,
  ImageInput,
  Button,
  Paragraph,
} from "@/components";
import React, { useEffect } from "react";

const BankAccountDetail = ({
  watch,
  onSubmit,
  control,
  errors,
  formStepsStatus,
  handleChangeStepStatus,
}) => {
  const accountFormInputs = [
    {
      name: "beneficiaryName",
      label: "Beneficiary Name",
      type: "text",
    },
    {
      name: "bankName",
      label: "Bank name",
      type: "text",
    },
    {
      name: "routingOrBIC",
      label: "Routing Number(ABA)",
      type: "text",
      validationText: "9 days",
    },
    {
      name: "AccountOrIban",
      label: "Account Number",
      type: "text",
      validationText: "max 17digits",
    },
  ];

  const ibanFormInputs = [
    {
      name: "beneficiaryName",
      label: "Beneficiary Name",
      type: "text",
    },
    {
      name: "bankName",
      label: "Bank name",
      type: "text",
    },
    {
      name: "routingOrBIC",
      label: "BIC/SWIFT Code",
      type: "text",
      validationText: "8 or 11 alphanumeric",
    },
  ];

  const handleNextStep = () => {
    onSubmit();
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      handleChangeStepStatus("3", "error");
    }
  }, [errors]);

  const selectedInputs =
    watch("typeBank") === "1" ? accountFormInputs : ibanFormInputs;

  return (
    <div>
      <FormHeader
        title="Your Bank Account Detail"
        step="3"
        status={formStepsStatus["3"]}>
        <Box>
          <FormLable>Provider business bank account</FormLable>
          <Box className="flex items-center gap-4 !py-1">
            <Radio
              name="typeBank"
              formValue={watch("typeBank")}
              value={"1"}
              control={control}
              label="US Bank Account"
            />
            <Radio
              name="typeBank"
              formValue={watch("typeBank")}
              value={"2"}
              control={control}
              label="None-US Bank Account"
            />
          </Box>
        </Box>

        {selectedInputs.map((input, index) => (
          <Box key={index}>
            <FormLable required={false}>{input.label}</FormLable>
            <TextInput
              name={input.name}
              control={control}
              validationText={input.validationText || ""}
            />
          </Box>
        ))}

        {watch("typeBank") === "2" && (
          <Box className="!pt-0 !pb-2 !py-0">
            <FormLable required={false}>IBAN/Account Number</FormLable>
            <Box className="flex gap-1 !py-0">
              <TextInput
                control={control}
                name=""
                className="!w-10 !min-w-[60px]"
              />
              <TextInput
                control={control}
                name="AccountOrIban"
                className="!flex-1 !min-w-auto !w-full"
              />
            </Box>
            <Paragraph className="!py-1 text-Neutral/05 text-xs text-end">
              max 34 alphanumeric
            </Paragraph>
          </Box>
        )}

        <Box className="mt-3">
          <ImageInput
            control={control}
            name="accountImages"
            id="accountImages"
            value={watch("accountImages")}
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

export default BankAccountDetail;
