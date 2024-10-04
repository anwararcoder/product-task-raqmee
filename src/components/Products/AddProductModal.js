import React from "react";
import AddProductForm from "./AddProductForm";
const AddProductModal = ({ setOpenAddProduct }) => {
  return (
    <div className="bg-white max-w-[800px] w-full fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-[30px] md:p-[50px] border-[1px] border-[#E4E4E4] rounded-[4px] shadow-lg max-h-[90vh] overflow-y-auto">
      <svg
        onClick={() => setOpenAddProduct(false)}
        className="w-[15px] h-[15px] fill-[#171717] hover:fill-red-700 cursor-pointer absolute top-[25px] right-[25px]"
        viewBox="0 0 320.591 320.591"
      >
        <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"></path>
        <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"></path>
      </svg>
      <div>
        <h3 className="font-[500] leading-[34px] text-[30px] mb-[30px]">
          Sell an item
        </h3>
        <AddProductForm setOpenAddProduct={setOpenAddProduct} />
      </div>
    </div>
  );
};

export default AddProductModal;
