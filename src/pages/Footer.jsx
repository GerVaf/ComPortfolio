import React from "react";

const Footer = () => {
  return (
    <div className=" w-full flex flex-col bg-black item-center py-5 ">
      <div className="w-full self-center  flex flex-col gap-5 lg:gap-10 justify-center items-center text-white ">
        <div className="flex justify-around w-full text-[8px] lg:text-base">
          <p>FACEBOOK</p>
          <p>INSTAGRAM</p>
          <p>TWITTER</p>
          <p>LINKEDIN</p>
          <p>WHATSAPP</p>
        </div>
        <div className="flex justify-around w-full text-[8px] lg:text-base">
          <p>OMG PORTAL</p>
          <p>LABELS & BRANDS</p>
          <p>AUSPICIOUS MUSIC</p>
          <p>SUBMISSION</p>
        </div>
        <div className="flex justify-around w-full text-[8px] lg:text-base">
          <p>LICENSCING</p>
          <p>REQUEST</p>
          <p>WORK WITH US</p>
          <p>CONTACT US</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
