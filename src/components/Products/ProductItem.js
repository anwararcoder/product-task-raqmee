import React from "react";
import ProductImage from "../../assets/images/product.png";

const ProductItem = ({ product }) => {
  return (
    <div className="block relative">
      <div>
        <img
          className="w-full h-full max-h-[325px] object-cover"
          src={product.image || ProductImage}
          alt={product.name}
        />
      </div>
      <div className="mt-[10px]">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-[13px] font-[300]">{product.name}</h2>
            <p className="text-[16px] font-[400]">£{product.price}</p>
            <p className="text-[14px] font-[400]">
              Category: {product.category}
            </p>
          </div>
          <button className="group border-[1px] border-[#E5E5E5] hover:border-[#D9F99D] hover:bg-[#D9F99D] text-[#171717] hover:text-white h-[44px] w-[44px] inline-flex items-center justify-center gap-[10px] rounded-[4px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="15"
              viewBox="0 0 17 15"
              fill="none"
            >
              <path
                d="M2.53487 2.52572C1.07041 3.99018 1.07041 6.36455 2.53487 7.82902L8.93657 14.2307L15.3382 7.82902C16.8026 6.36455 16.8026 3.99018 15.3382 2.52572C13.8737 1.06125 11.4993 1.06125 10.0349 2.52572L8.93657 3.62411L7.83817 2.52572C6.37371 1.06125 3.99934 1.06125 2.53487 2.52572Z"
                stroke="#171717"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <p className="mt-[10px] text-[#9b9b9b] lines-2">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
