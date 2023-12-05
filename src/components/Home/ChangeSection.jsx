import { useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const ChangeSection = () => {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "1 1"],
  });

  const scaleProgess = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [2, 20, 50, 400, 500, 1300]
  );
  const translateYProgress = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 1],
    [0, 10, 200, 300, -400]
  );
  return (
    <div>
      <div ref={containerRef} className="h-[450vh]  relative overflow-hidden">
        <motion.h1
          style={{ scale: scaleProgess, translateX: translateYProgress }}
          className="text-white font-bold absolute cursor-none top-[10%] left-[35%] lg:left-[50%] -translate-x-[50%]"
        >
          RELEASES
          {/* <br />
          <p className="-mt-[10px]">INDUSTRIES</p> */}
        </motion.h1>
      </div>
    </div>
  );
};

export default ChangeSection;
