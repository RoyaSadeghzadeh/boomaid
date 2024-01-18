"use client";
import React, { useEffect, useState } from "react";
import { Box, Button } from "@/components";
import { Close, MenuIcon } from "@/components/icons";
import CountrySelect from "@/components/base/input/CountrySelect";
import Menu from "./menu";
import MobileMenu from "./mobileMenu";
import Logo from "../../../public/images/logo.png"
import Image from "next/image";

// export const dynamic = "force-dynamic";
// export const fetchCache = "force-no-store";

const Header = ({ ecommerceMenu }) => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(()=>{
     if(openMenu){
      document.body.style.overflow = "hidden"
     }else{
      document.body.style.overflow = "auto"
     }
  },[openMenu])

  return (
    <>
      <Box className="bg-Light h-20 shadow-Header !py-0 flex items-center justify-center fixed w-full bg-white lg:relative z-[999]">
        <Box className="!py-0 container px-6 md:px-10 flex items-center justify-between max-w-[1230px]">
          <Image alt="logo" src={Logo} className=" w-48" />
          <Menu className="hidden lg:flex" ecommerceMenu={ecommerceMenu} />
          <Box className="flex items-center gap-3">
            <CountrySelect
              selectedCountry={{
                name: "United States",
                dial_code: "+1",
                value: "US",
              }}
            />
            <Button className="!px-8 !py-[10px] hidden lg:block">
              Sign up
            </Button>
            <Button
              variant="primary-bordered"
              className="!text-Secondary/03 !border-Secondary/03 !px-8 !py-[10px] hidden lg:block">
              Log in
            </Button>

            <div className="lg:hidden" onClick={() => setOpenMenu(!openMenu)}>
              {
                openMenu ? <Close/> : <MenuIcon/>
              }
            </div>
          </Box>
        </Box>
      </Box>
      <MobileMenu open={openMenu} ecommerceMenu={ecommerceMenu} />
    </>
  );
};

export default Header;
