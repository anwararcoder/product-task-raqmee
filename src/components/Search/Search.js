import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <div className="relative max-w-[530px] w-full">
      <svg
        className="fill-[#171717] hover:fill-[#D9F99D] w-[15px] h-[15px] absolute top-[50%] translate-y-[-50%] right-[13px] cursor-pointer"
        viewBox="0 0 512.005 512.005"
      >
        <path
          d="m505.749 475.587-145.6-145.6c28.203-34.837 45.184-79.104 45.184-127.317C405.333 90.926 314.41.003 202.666.003S0 90.925 0 202.669s90.923 202.667 202.667 202.667c48.213 0 92.48-16.981 127.317-45.184l145.6 145.6c4.16 4.16 9.621 6.251 15.083 6.251s10.923-2.091 15.083-6.251c8.341-8.341 8.341-21.824-.001-30.165zM202.667 362.669c-88.235 0-160-71.765-160-160s71.765-160 160-160 160 71.765 160 160-71.766 160-160 160z"
          opacity="1"
        ></path>
      </svg>
      <input
        type="text"
        placeholder="Search"
        className="w-full h-[44px] border-[1px] border-[#E5E5E5] rounded-[4px] text-[14px] leading-[22px] px-[13px] focus:border-[#D9F99D] hover:border-[#D9F99D]"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
