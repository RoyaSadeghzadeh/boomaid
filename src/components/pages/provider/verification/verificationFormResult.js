import Button from "@/components/base/Button";
import Box from "@/components/base/boxes/Box";
import InformationBox from "@/components/base/boxes/InformationBox";
import FormLable from "@/components/base/form/FormLable";
import Image from "next/image";
import React from "react";

const VerificationFormResult = ({ data }) => {
  const {
    informationStreet,
    informationAptSuit,
    informationCity,
    informationStateProvince,
    informationZipCode,
    businessWebsite,
    businessEmail,
    registrationNumber,
    typeTax,
    tax,
    firstName,
    middleName,
    lastName,
    contactStreet,
    contactAptSuit,
    contactCity,
    contactStateProvince,
    contactZipCode,
    identityProof,
    passportOrId,
    typeBank,
    beneficiaryName,
    bankName,
    routingOrBIC,
    serviceMarketing,
    AccountOrIban,
  } = data;

  const handleVerifyData = async () => {
    const formData = {
      informationStreet,
      informationAptSuit,
      informationCity,
      informationStateProvince,
      informationZipCode,
      businessWebsite,
      businessEmail,
      registrationNumber,
      typeTax,
      tax,
      firstName,
      middleName,
      lastName,
      contactStreet,
      contactAptSuit,
      contactCity,
      contactStateProvince,
      contactZipCode,
      identityProof,
      passportOrId,
      typeBank,
      beneficiaryName,
      bankName,
      routingOrBIC,
      serviceMarketing,
      AccountOrIban,
      informationCountry: data["informationCountry"].value,
      businessPhoneNumber:
        data["selectedCountryCode"].dial_code +
        "-" +
        data["businessPhoneNumber"],
      dateOfBirth:
        data["year"].value +
        "-" +
        data["mounth"].value +
        "-" +
        data["day"].value,
      nationalityOfBirth: data["nationalityOfBirth"].value,
      currentNationality: data["currentNationality"].value,
    };

  };

  return (
    <div>
      <Box>
        <FormLable required={false}>Principal Business Address</FormLable>
        <Box className="!py-0 grid grid-cols-2 gap-3">
          <InformationBox>{data["informationStreet"]}</InformationBox>
          <InformationBox>{data["informationAptSuit"]}</InformationBox>
          <InformationBox>{data["informationCity"]}</InformationBox>
          <InformationBox>{data["informationStateProvince"]}</InformationBox>
          <InformationBox>{data["informationZipCode"]}</InformationBox>
          <InformationBox>{data["informationCountry"]?.name}</InformationBox>
        </Box>
      </Box>
      <Box>
        <FormLable required={false}>Business Phone Number</FormLable>
        <InformationBox>
          {data["selectedCountryCode"].dial_code +
            "-" +
            data["businessPhoneNumber"]}
        </InformationBox>
      </Box>
      <Box>
        <FormLable required={false}>Business Website</FormLable>
        <InformationBox>{data["businessWebsite"]}</InformationBox>
      </Box>
      <Box>
        <FormLable required={false}>Business Email Address</FormLable>
        <InformationBox>{data["businessEmail"]}</InformationBox>
      </Box>
      <Box>
        <FormLable required={false}>
          Company/Organization/Permit Registration Number
        </FormLable>
        <InformationBox>{data["registrationNumber"]}</InformationBox>
      </Box>
      <Box>
        <FormLable required={false}>EIN/SSN/ITIN</FormLable>
        <InformationBox>{data["businessPhoneNumber"]}</InformationBox>
      </Box>
      <Box>
        <FormLable required={false}>Tax Identification Number</FormLable>
        <InformationBox>{data["tax"]}</InformationBox>
      </Box>
      <Box>
        <FormLable required={false}>
          Your Company/Organization/Permit Registration Documents
        </FormLable>
        <Box className=" bg-white rounded-md flex gap-3 h-[134px] p-2 items-center w-full overflow-auto">
          {data["informationImages"]?.map((image, index) => (
            <Image
              alt=""
              className="h-full rounded-md"
              key={index}
              width={200}
              height={100}
              src={URL.createObjectURL(image)}
            />
          ))}
        </Box>
      </Box>
      <Box>
        <FormLable required={false}>Authorized Person Information</FormLable>
        <Box className="!py-0 grid grid-cols-3 gap-3">
          <InformationBox>{data["firstName"]}</InformationBox>
          <InformationBox>{data["middleName"]}</InformationBox>
          <InformationBox>{data["lastName"]}</InformationBox>
        </Box>
      </Box>
      <Box>
        <FormLable required={false}>Date of Birth</FormLable>
        <Box className="!py-0 flex gap-3">
          <InformationBox>{data["day"]?.name}</InformationBox>
          <InformationBox>{data["mounth"]?.name}</InformationBox>
          <InformationBox>{data["year"]?.name}</InformationBox>
        </Box>
      </Box>
      <Box>
        <FormLable required={false}>Contact Address</FormLable>
        <Box className="!py-0 grid grid-cols-2 gap-3">
          <InformationBox>{data["contactStreet"]}</InformationBox>
          <InformationBox>{data["contactAptSuit"]}</InformationBox>
          <InformationBox>{data["contactCity"]}</InformationBox>
          <InformationBox>{data["contactStateProvince"]}</InformationBox>
          <InformationBox>{data["contactZipCode"]}</InformationBox>
          <InformationBox>{data["contactCountry"]?.name}</InformationBox>
        </Box>
      </Box>
      <Box>
        <FormLable required={false}>Nationality</FormLable>
        <Box className="!py-0 grid grid-cols-2 gap-3">
          <InformationBox>{data["nationalityOfBirth"]?.name}</InformationBox>
          <InformationBox>{data["currentNationality"]?.name}</InformationBox>
        </Box>
      </Box>
      <Box>
        <FormLable required={false}>Identity Proof </FormLable>
        <Box className="!py-0 grid grid-cols-2 gap-3">
          <InformationBox>
            {data["passportOrId"] == 1 ? "Passport" : "Government ID"}
          </InformationBox>
          <InformationBox>{data["identityProof"]}</InformationBox>
        </Box>
      </Box>
      <Box>
        <FormLable required={false}>Your identity proof documents</FormLable>
        <Box className=" bg-white rounded-md flex gap-3 h-[134px] p-2 items-center w-full overflow-auto">
          {data["contactImages"]?.map((image, index) => (
            <Image
              alt=""
              className="h-full rounded-md"
              key={index}
              width={200}
              height={100}
              src={URL.createObjectURL(image)}
            />
          ))}
        </Box>
      </Box>
      <Box>
        <FormLable required={false}>Beneficiary Name</FormLable>
        <InformationBox>{data["beneficiaryName"]}</InformationBox>
      </Box>
      <Box>
        <FormLable required={false}>Bank name</FormLable>
        <InformationBox>{data["bankName"]}</InformationBox>
      </Box>
      <Box>
        <FormLable required={false}>
          {data.typeBank == 2 ? "BIC/SWIFT Code" : "Routing Number(ABA)"}
        </FormLable>
        <InformationBox>{data["routingOrBIC"]}</InformationBox>
      </Box>
      <Box>
        <FormLable required={false}>
          {data.typeBank == 2 ? "Account Number" : "IBAN/Account Number"}
        </FormLable>
        <InformationBox>{data["AccountOrIban"]}</InformationBox>
      </Box>

      <Box>
        <Box className=" bg-white rounded-md flex gap-3 h-[134px] p-2 items-center w-full overflow-auto">
          {data["accountImages"]?.map((image, index) => (
            <Image
              alt=""
              className="h-full rounded-md"
              key={index}
              width={200}
              height={100}
              src={URL.createObjectURL(image)}
            />
          ))}
        </Box>
      </Box>
      <Button onClick={() => handleVerifyData()}>Verify</Button>
    </div>
  );
};

export default VerificationFormResult;
