"use client";
import React, { useState } from "react";
import Ecommerce from "./Ecommerce";
import { Box } from "@/components";

const Menu = ({ ecommerceMenu, className }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const handleClose = () => {
    setSelectedMenuItem(null);
  };

  const menuItems = [
    {
      title: "E-Commerce",
      component: <Ecommerce handleClose={handleClose} data={ecommerceMenu} />,
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
    <Box className={`flex flex-col ${className}`}>
      <ul className="flex items-center gap-8 text-Neutral/03 text-sm cursor-pointer">
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
      {selectedMenuItem && selectedMenuItem.component}
    </Box>
  );
};

export default Menu;
