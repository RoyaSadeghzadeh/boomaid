import React from "react";
import { Box, Button } from "@/components";
import { Logo } from "@/components/icons";
import CountrySelect from "@/components/base/input/CountrySelect";
import Menu from "./menu";
import { getEcommerceMenu } from "@/app/api/route";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const Header = async ({}) => {
  
  const ecommerceMenu = await getEcommerceMenu();

  return (
    <Box className="bg-Light h-20 shadow-Header !py-0 flex items-center justify-center relative">
      <Box className="!py-0 container flex items-center justify-between max-w-[1230px]">
        <Logo className="" />
        <Menu ecommerceMenu={ecommerceMenu} />
        <Box className="flex gap-3">
          <CountrySelect
            selectedCountry={{
              name: "United States",
              dial_code: "+1",
              value: "US",
            }}
          />
          <Button className="!px-8 !py-[10px]">Sign up</Button>
          <Button
            variant="primary-bordered"
            className="!text-Secondary/03 !border-Secondary/03 !px-8 !py-[10px]">
            Log in
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
