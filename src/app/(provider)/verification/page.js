"use client";
import VerificationForm from "@/components/pages/provider/verification/verificationForm";
import VerificationFormResult from "@/components/pages/provider/verification/verificationFormResult";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

const Verification = () => {
  const [formData, setFormData] = useState({});
  const params = useSearchParams()

  return (
    <div className="container max-w-[1230px] mx-auto py-20 px-6 md:px-10">
      {
        params.get('showFormResult') ? (
          <VerificationFormResult data={formData}/>
        ) : (
          <VerificationForm setFormData={setFormData}/>
        )
      }
    </div>
  );
};

export default Verification;
