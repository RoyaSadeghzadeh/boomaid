"use client";
import {
  BankAccountDetail,
  BusinessContactPerson,
  BusinessInformation,
} from "@/components/pages/provider/verification/forms";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { COUNTRIES } from "@/lib/countries";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const VerificationForm = ({ setFormData }) => {
  const [formStepsStatus, setFormStepsStatus] = useState({
    1: "active",
    2: "deactive",
    3: "deactive",
  });

  const router = useRouter();

  const handleChangeStepStatus = (key, status) => {
    setFormStepsStatus((prev) => {
      return {
        ...prev,
        [key]: status,
      };
    });
  };

  //business Information validation start
  const businessInformation__resolver = Yup.object().shape({
    informationStreet: Yup.string().required(),
    informationAptSuit: Yup.string().required(),
    informationCity: Yup.string().required(),
    informationStateProvince: Yup.string().required(),
    informationZipCode: Yup.string().required().length(10),
    informationCountry: Yup.object().required(),
    selectedCountryCode: Yup.object().required(),
    businessPhoneNumber: Yup.string()
      .required()
      .matches(phoneRegExp, "Phone number is not valid"),
    businessEmail: Yup.string().required(),
    registrationNumber: Yup.string().required(),
    typeTax: Yup.string().required(),
    tax: Yup.string().required(),
    informationImages: Yup.array().required(),
  });
  const {
    control: businessInformationControl,
    handleSubmit: businessInformationSubmit,
    watch: businessInformationWatch,
    formState: { errors: businessInformationErrors },
  } = useForm({
    resolver: yupResolver(businessInformation__resolver),
    defaultValues: {
      typeTax: "1",
      selectedCountryCode:COUNTRIES[0]
    },
  });

  // business Contact Person validation start
  const businessContactPerson__resolver = Yup.object().shape({
    firstName: Yup.string().required(),
    middleName: Yup.string(),
    lastName: Yup.string().required(),
    day: Yup.object().required(),
    mounth: Yup.object().required(),
    year: Yup.object().required(),
    contactStreet: Yup.string().required(),
    contactAptSuit: Yup.string().required(),
    contactCity: Yup.string().required(),
    contactStateProvince: Yup.string().required(),
    contactZipCode: Yup.string().required().length(10),
    contactCountry: Yup.object().required(),
    nationalityOfBirth: Yup.object().required(),
    currentNationality: Yup.object().required(),
    identityProof: Yup.string().required(),
    passportOrId: Yup.string().required(),
    contactImages: Yup.array().required(),
  });
  const {
    control: businessContactPersonControl,
    handleSubmit: businessContactPersonSubmit,
    watch: businessContactPersonWatch,
    formState: { errors: businessContactPersonErrors },
  } = useForm({
    resolver: yupResolver(businessContactPerson__resolver),
    defaultValues: {
      passportOrId: "1",
      contactImages: [],
    },
  });

  // bank account validation detail start
  const bankAccountDetail__resolver = Yup.object().shape({
    typeBank: Yup.string().required(),
    beneficiaryName: Yup.string(),
    bankName: Yup.string(),
    routingOrBIC: Yup.string(),
    serviceMarketing: Yup.string(),
    AccountOrIban: Yup.string(),
  });
  const {
    control: bankAccountDetailControl,
    handleSubmit: bankAccountDetailSubmit,
    watch: bankAccountDetailWatch,
    formState: { errors: bankAccountDetailErrors },
  } = useForm({
    resolver: yupResolver(bankAccountDetail__resolver),
    defaultValues: {
      typeBank: "1",
    },
  });

  const handleBusinessInformationComplete = (data) => {
    handleChangeStepStatus("1", "success");
    setFormData((prev) => {
      return {
        ...prev,
        ...data,
      };
    });
  };

  const handleBusinessContactPersonComplete = (data) => {
    handleChangeStepStatus("2", "success");
    setFormData((prev) => {
      return {
        ...prev,
        ...data,
      };
    });
  };

  const handleBankAccountDetailComplete = (data) => {
    handleChangeStepStatus("3", "success");
    setFormData((prev) => {
      return {
        ...prev,
        ...data,
      };
    });
    if(Object.keys(businessInformationErrors).length === 0 && Object.keys(businessContactPersonErrors).length === 0) {
      router.push(`${window.location.href}?showFormResult=true`);
    }
  };

  return (
    <>
      <BusinessInformation
        control={businessInformationControl}
        watch={businessInformationWatch}
        errors={businessInformationErrors}
        onSubmit={businessInformationSubmit(handleBusinessInformationComplete)}
        formStepsStatus={formStepsStatus}
        handleChangeStepStatus={handleChangeStepStatus}
      />
      <BusinessContactPerson
        control={businessContactPersonControl}
        watch={businessContactPersonWatch}
        errors={businessContactPersonErrors}
        onSubmit={businessContactPersonSubmit(
          handleBusinessContactPersonComplete
        )}
        formStepsStatus={formStepsStatus}
        handleChangeStepStatus={handleChangeStepStatus}
      />
      <BankAccountDetail
        control={bankAccountDetailControl}
        watch={bankAccountDetailWatch}
        errors={bankAccountDetailErrors}
        onSubmit={bankAccountDetailSubmit(handleBankAccountDetailComplete)}
        formStepsStatus={formStepsStatus}
        handleChangeStepStatus={handleChangeStepStatus}
      />
    </>
  );
};

export default VerificationForm;
