import React from "react";
import AdCard from "./AdCard";

const Ads = () => {
  return (
    <div className="bg-bgColor p-3 lg:p-10 my-10">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-6 md:col-span-3 lg:col-span-3">
          <AdCard />
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-3">
          <AdCard />
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-3">
          <AdCard />
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-3">
          <AdCard />
        </div>
      </div>
    </div>
  );
};

export default Ads;
