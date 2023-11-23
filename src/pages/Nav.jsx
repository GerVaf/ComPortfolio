import React, { useState } from "react";
import { BsX } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
// import { div } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = ({ active, isActive }) => {
  const links = [
    { path: "/work", text: "Work" },
    { path: "/solutions", text: "Solutions" },
    { path: "/services", text: "Services" },
    { path: "/aboutus", text: "About Us" },
  ];

  const [mouseInside, setMouseInside] = useState(
    Array(links.length).fill(false)
  );

  const handleMouseEnter = (index) => {
    const updatedMouseInside = [...mouseInside];
    updatedMouseInside[index] = true;
    setMouseInside(updatedMouseInside);
  };

  const handleMouseLeave = (index) => {
    const updatedMouseInside = [...mouseInside];
    updatedMouseInside[index] = false;
    setMouseInside(updatedMouseInside);
  };

  return (
    <>
      <div className="text-white flex h-[10vh] items-center px-5 sm:px-10  sm:py-5 sm:items-center justify-between">
        {/* logo don't extract it cuz it's so fucking long */}

        <div className={"flex-1"} to={"/"}>
          <div className=" w-48">Blahh</div>
        </div>
        {/* link cate  for Desktop*/}
        <div className="text-md hidden items-center lg:flex lg:gap-20 h-10 font-mono">
          {links.map((link, index) => (
            <div to={link.path} key={index}>
              <div
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="flex flex-col overflow-hidden"
              >
                {link.text}
                {mouseInside[index] ? (
                  <motion.hr
                    initial={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="border w-11"
                  />
                ) : (
                  <motion.hr
                    animate={{ x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="border w-11"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
        {/* link cate for mobile  */}

        <div
          onClick={() => isActive(true)}
          className="lg:hidden bg-black rounded-full w-10 h-10 flex justify-center items-center cursor-pointer"
        >
          <FaBars />
        </div>

        {active && (
          <>
            <div className="lg:hidden w-full h-full absolute top-0 left-0 overflow-hidden">
              <motion.div
                animate={{ width: "135vw", height: "140vh" }}
                initial={{ width: "135vw", height: "120vh" }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                className="absolute -top-[8rem]  -left-[5rem] bg-[#3C2837]  rounded-bl-[40rem]  z-30 "
              ></motion.div>
            </div>
            <motion.div className="lg:hidden  absolute top-0 right-0 flex flex-col items-center justify-center w-full h-full z-40 gap-8 text-xl font-bold">
              <div className=" cursor-pointer" onClick={() => isActive(false)}>
                Work
              </div>
              <div className=" cursor-pointer" onClick={() => isActive(false)}>
                Solutions
              </div>
              <div className=" cursor-pointer" onClick={() => isActive(false)}>
                Services
              </div>
              <div className=" cursor-pointer" onClick={() => isActive(false)}>
                About Us
              </div>
              <div
                onClick={() => isActive(false)}
                className="absolute top-10 right-10 cursor-pointer"
              >
                <BsX />
              </div>
            </motion.div>
          </>
        )}
      </div>
    </>
  );
};

export default Nav;
