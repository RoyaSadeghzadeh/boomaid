"use client";
import React, { useState } from "react";
import { Box, Button } from "@/components";
import Ecommerce from "./Ecommerce";

const MobileMenu = ({ ecommerceMenu, open }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const handleClose = () => {
    setSelectedMenuItem(null);
  };

  const menuItems = [
    {
      title: "E-Commerce",
      component: (
        <Ecommerce
          data={ecommerceMenu}
          setSelectedMenuItem={setSelectedMenuItem}
        />
      ),
    },
    {
      title: "Service Marketing",
      component: "",
    },
    {
      title: "Job Marketing",
      component: "",
    },
    {
      title: "ICI",
      component: "",
    },
  ];

  return (
    <Box className={`fixed h-[calc(100vh-5rem)] w-full top-[5rem] overflow-auto delay-150 transition-all bg-white z-[999] !p-4 ${open ? "opacity-100 block" : "opacity-0 hidden"}`}>
      {selectedMenuItem ? (
        <>{selectedMenuItem.component}</>
      ) : (
        <div>
          <ul className="flex flex-col gap-4 text-Neutral/03 text-xl font-[600] cursor-pointer pb-8 mb-10 border-b-[0.5px]">
            {menuItems.map((item, index) => (
              <li
                onClick={() => {
                  selectedMenuItem?.title !== item.title
                    ? setSelectedMenuItem(item)
                    : setSelectedMenuItem(null);
                }}
                key={index}>
                {item.title}
              </li>
            ))}
          </ul>
         <div className="flex flex-col gap-4">
          <Button
            variant="primary-bordered"
            className="!text-white !bg-Secondary/03 !border-Secondary/03 text-sm !px-8 !py-[10px]">
            Log in
          </Button>
         <Button className="!px-8 !py-[10px] text-sm">Sign up</Button>
         </div>
        </div>
      )}
    </Box>
  );
};

export default MobileMenu;
