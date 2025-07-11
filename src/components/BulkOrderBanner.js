'use client';

import Image from 'next/image';
import React from 'react';

const BulkOrderBanner = () => {
  return (
    <div className="w-full">
      <Image
        src="/BulkOrderBanner.png"
        alt="Bulk Order Banner"
        width={1920} // Set real image width
        height={500} // Set real image height
        className="w-full h-auto"
        priority
      />
    </div>
  );
};

export default BulkOrderBanner;
