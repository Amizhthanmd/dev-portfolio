"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BlurIn from "./ui/blur-in";

const Homepage: React.FC = () => {
  return (
    <section
      id="home-page"
      className="h-screen flex flex-col justify-center items-center"
    >
      <div className="flex flex-col mb-52 items-center justify-center h-full">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <Image alt="avatar" src="/Avatar.png" width={280} height={280} />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-4 flex flex-col items-center">
        <div className="text-2xl md:text-6xl font-bold animate-bounce bg-gradient-to-r from-slate-50 to-violet-600 bg-clip-text text-transparent overflow-hidden">
          <p>Hello! I&apos;m Amizhthan</p>
        </div>
        <div className="flex flex-col items-center">
          <BlurIn word="SOFTWARE" className="text-4xl md:text-9xl text-white" />
          <BlurIn word="ENGINEER" className="text-4xl md:text-9xl text-white" />
        </div>
      </div>
    </section>
  );
};

export default Homepage;
