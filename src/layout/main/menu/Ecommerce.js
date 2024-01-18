"use client";
import { ArrowNext, RoundedClose } from "@/components/icons";
import { useOutsideAlerter } from "@/hocs";
import React, { useState } from "react";

const Ecommerce = ({ data, handleClose }) => {
  const { mainCategory, categories, subCategory } = data;

  const [selectedMenu, setSelectedMenu] = useState(mainCategory[0]);

  const wrapperRef = React.useRef(null);
  useOutsideAlerter(wrapperRef, () => {
    handleClose()
  });

  return (
    <div ref={wrapperRef} className="flex bg-white shadow-Menu w-11/12 absolute z-50 left-0 right-0 mx-auto top-20 h-[750px] 3xl:h-[850px]">
      <div className="shadow-Menu overflow-auto">
        {mainCategory.map((item, index) => (
          <div
            className={`cursor-pointer py-2 px-3 text-[13px] hover:bg-[#E6F1FC] hover:text-Primary/01 hover:font-[700] hover:border-l-Secondary/02 hover:border-l-[5px] ${
              selectedMenu.id === item.id
                ? " border-l-Secondary/02 border-l-[5px] bg-[#E6F1FC] font-bold text-Primary/01"
                : "text-Neutral/03"
            }`}
            onClick={() => setSelectedMenu(item)}
            key={index}>
            {item.title}
          </div>
        ))}
      </div>
      <div className="flex-1 flex flex-col h-full">
        <div className="flex items-center justify-between py-2 mx-6 border-b border-Neutral/03 text-Primary/04 font-[500] cursor-pointer">
          <div className="flex items-center gap-3 text-[12px]">
            <span>Go to {selectedMenu.title} Page</span>
            <ArrowNext />
          </div>
        </div>
        <div className="flex-1 flex flex-col flex-wrap gap-2 pt-3 px-6 overflow-auto">
          {categories
            .filter((item) => item.mainCategoryId === selectedMenu.id)
            .map((item2, index2) => (
              <div key={index2} className="">
                <div className="mt-2 mb-1 mr-1 flex items-center py-1 px-3 border-l-[4px] border-l-Primary/04 text-black text-[11px] font-[500] hover:text-Primary/04 cursor-pointer">
                  {item2.title}
                </div>
                {subCategory
                  .filter((item3) => item3.categoriesId === item2.id)
                  .map((item4, index4) => (
                    <div
                      className="flex mr-1 items-center text-[10px] py-1 text-Neutral/03 hover:text-black cursor-pointer"
                      key={index4}>
                      {item4.title}
                    </div>
                  ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
