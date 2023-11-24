import React, { useEffect, useState } from "react";
import { BsX } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";

const Nav = () => {
  const links = [
    { path: "/work", text: "Work" },
    { path: "/solutions", text: "Solutions" },
    { path: "/services", text: "Services" },
    { path: "/aboutus", text: "About Us" },
  ];
  const [active, setActive] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 820);
  const [mouseInside, setMouseInside] = useState(
    Array(links.length).fill(false)
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 820);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      {isDesktop ? (
        // for desktop
        <div className="text-white flex h-[10vh] items-center px-5 sm:px-10 sm:py-5 sm:items-center justify-between">
          {/* logo don't extract it cuz it's so long */}
          <div className={"flex-1"} to={"/"}>
            <div className=" w-48">Blahh</div>
          </div>
          {/* link category for Desktop */}
          <div className="text-md  items-center flex gap-10 h-10 font-mono">
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
        </div>
      ) : (
        // for mobile
        <>
          <div
            onClick={() => setActive(true)}
            className=" bg-black text-white absolute right-5 top-5 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer"
          >
            <FaBars />
          </div>

          {active && (
            <>
              <div className=" w-full h-full absolute top-0 right-0 overflow-hidden">
                <motion.div
                  animate={{ width: "135vw", height: "140vh" }}
                  initial={{ width: "135vw", height: "120vh" }}
                  transition={{ ease: "easeInOut", duration: 0.5 }}
                  className="absolute bg-[#272727]  rounded-bl-[40rem]  z-30 "
                ></motion.div>
              </div>
              <motion.div className=" text-white absolute top-0 right-0 flex flex-col items-center justify-center w-full h-full z-40 gap-8 text-xl font-bold">
                {links.map((link, index) => (
                  <div
                    key={index}
                    className=" cursor-pointer"
                    onClick={() => setActive(false)}
                  >
                    {link.text}
                  </div>
                ))}
                {/* cancel btn */}
                <div
                  onClick={() => setActive(false)}
                  className="absolute text-4xl top-5 right-5 cursor-pointer"
                >
                  <BsX />
                </div>
              </motion.div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Nav;
