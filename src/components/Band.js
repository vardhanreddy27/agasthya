import React from 'react'
import { BsPatchCheckFill } from "react-icons/bs";

function Band() {
  return (
    <div className=" py-4 border-t-[3px] border-b-[3px] border-black">
      <div className="max-w-7xl mx-auto px-10 flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 sm:space-x-1 text-sm sm:text-base font-medium text-gray-900">
        <div className="flex items-center space-x-2">
          <BsPatchCheckFill className="text-black" />
          <span>100% Natural</span>
        </div>
        <div className="flex items-center space-x-2">
          <BsPatchCheckFill className="text-black" />
          <span>No Cholesterol</span>
        </div>
        <div className="flex items-center space-x-2">
          <BsPatchCheckFill className="text-black" />
          <span>No Added Sugar</span>
        </div>
        <div className="flex items-center space-x-2">
          <BsPatchCheckFill className="text-black" />
          <span>No Artificial Flavors</span>
        </div>
      </div>
    </div>
  );
}

export default Band;
