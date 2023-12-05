import { useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const BlackOut = () => {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  const overScroll = useRef();
  const { scrollYProgress } = useScroll({
    target: overScroll,
    offset: ["start center", "1 1"],
  });

  const backgroundColorProgress = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.5, 0.6, 0.9, 1],
    [
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#333333",
      "#000",
      "#000",
    ]
  );

  return (
    <div className="flex flex-col justify-center items-center">
      <motion.div
        ref={overScroll}
        className="h-[150vh] w-full"
        style={{ backgroundColor: backgroundColorProgress }}
      >
        {/* Your content goes here */}
      </motion.div>
    </div>
  );
};

export default BlackOut;
