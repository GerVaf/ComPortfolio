import React, { useEffect, useState, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import Test from "./Test";

const Changes = () => {
  const [startPoint, setStartPoint] = useState(0);
  const controls = useAnimation();

  const handleScroll = useCallback(() => {
    setStartPoint(window.scrollY);

    if (window.scrollY < 1400) {
      controls.start({
        scale: 1 + window.scrollY / 200,
      });
    } else if (window.scrollY > 1400 && window.scrollY < 1800) {
      controls.start({
        scale: 1 + window.scrollY / 5,
      });
    } else {
      controls.start({
        scale: 815,
      });
    }
  }, [controls]);

  useEffect(() => {
    const scrollHandler = () => {
      handleScroll();
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [handleScroll]);

  console.log(startPoint);

  return (
    <div
      className={`w-full h-[100vh] flex items-center justify-center overflow-hidden ${
        window.scrollY > 1100 ? "fixed top-0" : " static"
      }`}
    >
      <div className="w-[80%] flex justify-center text-white relative">
        {/* first is big text and white space content  */}
        {/* it's start from 1800 and end in 4000 and new content will come  */}
        {window.scrollY < 4000 ? (
          <motion.p
            className={`text-4xl select-none`}
            animate={controls}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <p>Opaque</p>
            <p>industries</p>
          </motion.p>
        ) : (
          <div className=" absolute">
            <Test />
          </div>
        )}
      </div>
    </div>
  );
};

export default Changes;
