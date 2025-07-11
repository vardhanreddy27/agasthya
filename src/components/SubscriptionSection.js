import React from "react";
import ImageSlider from "./ImageSlider";

const SubscriptionSection = () => {
  return (<>     
    {/* <ImageSlider /> */}
    <div className="bg-black text-white py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Exclusive Deals, New Flavors & Healthy Living Tips!

</h2>
        <p className="text-gray-300 mb-6">
        Join our community and be the first to know about new wholesome flavors, special discounts, and expert nutrition tips. Let's make healthy eating easier and tastier!
        </p>
        
        {/* Subscription Form */}
        <div className="flex max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full p-3 rounded-l-md text-gray-700 focus:outline-none"
          />
       <button 
  className="bg-[rgb(157,37,45)] text-white px-6 py-3 rounded-r-md font-semibold hover:bg-[rgb(130,30,37)] transition"
>
  Yes!
</button>

        </div>
      </div>
    </div></>

  );
};

export default SubscriptionSection;
