import React, { useEffect, useRef, useState } from "react";

const CategoriesList = ({
  categoryOption,
  setCategoryOption,
  categoriesListOptions,
}) => {
  const [openCategoriesLis, setOpenCategoriesLis] = useState(false);
  const categoriesLisRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        categoriesLisRef.current &&
        !categoriesLisRef.current.contains(event.target)
      ) {
        setOpenCategoriesLis(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      className="relative inline-flex flex-wrap items-center gap-[13px] w-full"
      ref={categoriesLisRef}
    >
      <button
        type="button"
        className="relative h-[44px] text-[#737373] text-left w-full capitalize border-[1px] border-[#E5E5E5] rounded-[4px] text-[14px] leading-[22px] px-[13px] focus:border-[#D9F99D] hover:border-[#D9F99D] inline-flex items-center justify-between"
        onClick={() => setOpenCategoriesLis(!openCategoriesLis)}
      >
        {categoryOption}
        <svg className="fill-[#171717] h-[16px] w-[16px]" viewBox="0 0 24 24">
          <g>
            <path
              d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
              data-name="16"
              opacity="1"
            ></path>
          </g>
        </svg>
      </button>
      {openCategoriesLis && (
        <ul className="absolute top-[100%] right-0 w-full border-[1px] border-[#E4E4E4] p-[10px] mt-[3px] rounded-[4px] shadow-lg z-20 bg-white">
          {categoriesListOptions.map((category, index) => (
            <li
              key={index}
              className={`text-[14px] leading-[22px] cursor-pointer ${
                categoryOption === category ? "font-[400]" : "font-[300]"
              }`}
              onClick={() => {
                setOpenCategoriesLis(false);
                setCategoryOption(category);
              }}
            >
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoriesList;
