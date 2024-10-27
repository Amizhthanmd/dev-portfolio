"use client";

import { motion } from "framer-motion";

const ScrollDownText = () => {
  return (
    <div className="bottom-4 right-4 flex flex-col gap-4 items-center justify-center text-center z-50">
      <div className="">
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 8, ease: "linear", repeat: Infinity }}
          viewBox="0 0 300 300"
          className="w-64 h-64 md:w-[500px] md:h-[500px]"
        >
          <defs>
            <path
              id="circlePath"
              d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
            />
          </defs>
          <text fill="#000">
            <textPath xlinkHref="#circlePath" className="text-xl">
              Scroll Down
            </textPath>
          </text>
        </motion.svg>
        <div className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center">
          {/* Center dot or arrow can go here */}
        </div>
      </div>
    </div>
  );
};

export default ScrollDownText;
