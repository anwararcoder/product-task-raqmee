import React, { Fragment } from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container px-[15px] mx-auto">
      <div className="flex justify-between items-center gap-[30px]">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="inline-flex items-center gap-[10px] hover:text-[#D9F99D] disabled:text-[#DDD]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            className="fill-current stroke-current"
          >
            <path
              d="M7.33333 12.8333L1.5 6.99996M1.5 6.99996L7.33333 1.16663M1.5 6.99996L16.5 6.99996"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Previous
        </button>
        <div className="inline-flex items-center gap-[10px]">
          {pageNumbers.map((number) => (
            <Fragment key={number}>
              <button
                onClick={() => onPageChange(number)}
                className={`w-[36px] h-[36px] inline-flex items-center justify-center rounded-[4px] border-[1px] hover:border-[#D9F99D] ${
                  number === currentPage
                    ? "border-[#D9F99D]"
                    : "border-transparent"
                }`}
              >
                {number}
              </button>
            </Fragment>
          ))}
        </div>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="inline-flex items-center gap-[10px] hover:text-[#D9F99D] disabled:text-[#DDD]"
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            className="fill-current stroke-current rotate-180"
          >
            <path
              d="M7.33333 12.8333L1.5 6.99996M1.5 6.99996L7.33333 1.16663M1.5 6.99996L16.5 6.99996"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
