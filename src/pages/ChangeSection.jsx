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
    [0, 0.2, 0.4, 0.6, 1],
    [2, 20, 50, 100, 1000]
  );
  const opacityProgress = useTransform(scrollYProgress, [1], [1]);
  return (
    <div>
      <div ref={containerRef} className="h-[450vh]  relative overflow-hidden">
        <motion.h1
          style={{ scale: scaleProgess, opacity: opacityProgress }}
          className="text-white font-bold absolute top-[10%] left-[35%] lg:left-[50%] -translate-x-[50%]"
        >
          OPAGUE
          <br />
          <p className="-mt-[10px]">INDUSTIRES</p>
        </motion.h1>
      </div>
    </div>
  );
};

export default ChangeSection;
