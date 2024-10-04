import React, { useEffect, useRef, useState } from "react";

const SortBy = ({ sortOption, setSortOption }) => {
  const [openSortByBox, setOpenSortByBox] = useState(false);
  const sortByBoxRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        sortByBoxRef.current &&
        !sortByBoxRef.current.contains(event.target)
      ) {
        setOpenSortByBox(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      className="relative inline-flex flex-wrap items-center gap-[13px]"
      ref={sortByBoxRef}
    >
      Sort by
      <button
        className="relative w-[200px] h-[44px] text-[#737373] text-left capitalize border-[1px] border-[#E5E5E5] rounded-[4px] text-[14px] leading-[22px] px-[13px] focus:border-[#D9F99D] hover:border-[#D9F99D] inline-flex items-center justify-between"
        onClick={() => setOpenSortByBox(!openSortByBox)}
      >
        {sortOption}
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
      {openSortByBox && (
        <ul className="bg-white absolute top-[100%] right-0 w-[200px] border-[1px] border-[#E4E4E4] p-[10px] mt-[3px] rounded-[4px] shadow-lg">
          <li
            className={`text-[14px] leading-[22px] cursor-pointer ${
              sortOption === "A-Z" ? "font-[400]" : "font-[300]"
            }`}
            onClick={() => setSortOption("A-Z")}
          >
            A - Z
          </li>
          <li
            className={`text-[14px] leading-[22px] cursor-pointer ${
              sortOption === "Z-A" ? "font-[400]" : "font-[300]"
            }`}
            onClick={() => setSortOption("Z-A")}
          >
            Z - A
          </li>
          <li
            className={`text-[14px] leading-[22px] cursor-pointer ${
              sortOption === "price-low-high" ? "font-[400]" : "font-[300]"
            }`}
            onClick={() => setSortOption("price-low-high")}
          >
            Price: Low to High
          </li>
          <li
            className={`text-[14px] leading-[22px] cursor-pointer ${
              sortOption === "price-high-low" ? "font-[400]" : "font-[300]"
            }`}
            onClick={() => setSortOption("price-high-low")}
          >
            Price: High to Low
          </li>
        </ul>
      )}
    </div>
  );
};

export default SortBy;
