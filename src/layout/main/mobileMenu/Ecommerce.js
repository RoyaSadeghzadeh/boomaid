"use client";
import { ArrowLeft, ArrowNext, ArrowRight } from "@/components/icons";
import React, { useState } from "react";

const Ecommerce = ({ data, setSelectedMenuItem }) => {
  const { mainCategory, categories, subCategory } = data;

  const [selectedCategory, setSelectedCategory] = useState(null);

  const MainCategories = () => {
    return (
      <>
        <div className=" text-black text-xl font-bold border-b-[2px] border-b-black py-2 px-1">
          E-Commerce
        </div>
        <div
          onClick={() => setSelectedMenuItem(null)}
          className="flex items-center gap-3 text-md py-4 px-1 text-Primary/04 font-[600] cursor-pointer">
          <span>E-Commerce Homepage</span>
          <ArrowNext />
        </div>
        {mainCategory.map((item, index) => (
          <div
            className={`flex items-center justify-between cursor-pointer p-3 text-md text-Neutral/03`}
            onClick={() => setSelectedCategory(item)}
            key={index}>
            <span>{item.title}</span>
            <ArrowRight />
          </div>
        ))}
      </>
    );
  };

  const SubCategories = () => {
    return (
      <>
        <div
          className="py-2 px-1 cursor-pointer"
          onClick={() => setSelectedCategory(null)}>
          <ArrowLeft />
        </div>
        {categories
          .filter((item) => item.mainCategoryId === selectedCategory.id)
          .map((item2, index2) => (
            <div key={index2} className="">
              <div className="mt-2 mb-1 mr-1 flex items-center py-1 px-3 border-l-[4px] border-l-Primary/04 text-black text-[14px] font-[500] hover:text-Primary/04 cursor-pointer">
                {item2.title}
              </div>
              {subCategory
                .filter((item3) => item3.categoriesId === item2.id)
                .map((item4, index4) => (
                  <div
                    className="flex mr-1 items-center text-[13px] py-1 text-Neutral/03 hover:text-black cursor-pointer"
                    key={index4}>
                    {item4.title}
                  </div>
                ))}
            </div>
          ))}
      </>
    );
  };

  return (
    <div className="flex-1 flex flex-col flex-wrap gap-2 pt-3 px-6 overflow-auto">
      {!selectedCategory ? <MainCategories /> : <SubCategories />}
    </div>
  );
};

export default Ecommerce;
