import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchInput() {
  return (
    <div className="flex items-center justify-center text-white p-1 ">
      <form>
        <div className="flex justify-between w-full rounded-r-full rounded-l-full">
          <input type="text" placeholder="Type here" className="input" />
          <button className="p-3 btn hover:bg-green-500 rounded-md ml-1 ">
            <FaSearch color="white" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchInput;
