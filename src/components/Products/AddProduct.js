import React, { useEffect, useRef, useState } from "react";
import AddProductModal from "./AddProductModal";

const AddProduct = () => {
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const addProductRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        addProductRef.current &&
        !addProductRef.current.contains(event.target)
      ) {
        setOpenAddProduct(false);
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
      ref={addProductRef}
    >
      <button
        onClick={() => setOpenAddProduct(!openAddProduct)}
        className="group bg-[#D9F99D] hover:bg-[#171717] text-[#171717] hover:text-white h-[44px] inline-flex items-center gap-[10px] px-[25px] rounded-[4px]"
      >
        <svg
          className="w-[15px] h-[15px] fill-[#171717] group-hover:fill-white"
          viewBox="0 0 426.667 426.667"
        >
          <path
            d="M405.332 192H234.668V21.332C234.668 9.559 225.109 0 213.332 0 201.559 0 192 9.559 192 21.332V192H21.332C9.559 192 0 201.559 0 213.332c0 11.777 9.559 21.336 21.332 21.336H192v170.664c0 11.777 9.559 21.336 21.332 21.336 11.777 0 21.336-9.559 21.336-21.336V234.668h170.664c11.777 0 21.336-9.559 21.336-21.336 0-11.773-9.559-21.332-21.336-21.332zm0 0"
            opacity="1"
          ></path>
        </svg>
        Sell item
      </button>
      {openAddProduct && (
        <AddProductModal setOpenAddProduct={setOpenAddProduct} />
      )}
    </div>
  );
};

export default AddProduct;
