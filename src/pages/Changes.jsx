import React, { useEffect, useState, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";

const Changes = () => {
  const [startPoint, setStartPoint] = useState(0);
  const controls = useAnimation();

  const handleScroll = useCallback(() => {
    // Calculate the scale factor based on the scroll position
    const scale = 1 + window.scrollY / 20;

    console.log(scale, "scale");
    setStartPoint(window.scrollY);
    console.log(startPoint,'startpoint');

    //     console.log(startPoint, "location");

    if (window.scrollY < 1200) {
      controls.start({
        scale: 1 + window.scrollY / 200,
      });
    } else {
      controls.start({
        scale: 1 + window.scrollY / 10,
      });
    }
  }, [startPoint, controls]);

  useEffect(() => {
    // Update the start point when the component mounts

    // Event listener for scroll
    const scrollHandler = () => {
      handleScroll();
    };

    window.addEventListener("scroll", scrollHandler);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [handleScroll]);

  return (
    <div
      className={`w-full h-[100vh] flex items-center justify-center overflow-hidden ${
        window.scrollY > 1100 ? "fixed top-0" : " static"
      }`}
    >
      <div className="w-[80%] flex justify-center text-white">
        <motion.p
          id="text"
          className="text-4xl"
          animate={controls}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <p>Opaque</p>
          <p>industries</p>
        </motion.p>
      </div>
    </div>
  );
};

export default Changes;
