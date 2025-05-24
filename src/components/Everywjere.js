import React from "react";
import Image from "next/image";

function Everywhere() {
  return (
    <div className="w-full flex justify-center items-center">
      <Image
        src="/everywhere.png"
        alt="Full Width Banner"
        width={2000} // Set exact width for optimization
        height={800} // Adjust height proportionally
        className="w-full h-auto"
        priority // Ensures faster loading
      />
    </div>
  );
}

export default Everywhere;
