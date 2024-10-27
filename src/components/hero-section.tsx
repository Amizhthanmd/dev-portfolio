"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import BlurIn from "./ui/blur-in";
import WordPullUp from "./ui/word-pull-up";

const Homepage: React.FC = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-cover"
      style={{ backgroundImage: "url('/Bg-loop.png')" }}
    >
      <div className="flex flex-col items-center justify-center mb-52 md:mb-72 h-full space-y-8 md:space-y-16">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <Image
            alt="avatar"
            src="/Avatar.png"
            width={180}
            height={180}
            className="md:w-72 md:h-72"
          />
        </motion.div>
      </div>

      <div className="absolute mt-32 md:bottom-8 left-1/2 transform -translate-x-1/2 p-4 flex flex-col items-center space-y-2 md:space-y-4">
        <div className="animate-bounce">
          <WordPullUp
            className="text-2xl font-bold tracking-[-0.02em] md:text-6xl bg-gradient-to-r from-slate-50 to-violet-600 bg-clip-text text-transparent overflow-hidden"
            words="Hello I'm Amizhthan"
          />
        </div>
        <div className="flex flex-col items-center">
          <BlurIn word="SOFTWARE" className="text-5xl md:text-9xl text-white" />
          <BlurIn word="ENGINEER" className="text-5xl md:text-9xl text-white" />
        </div>
      </div>
    </section>
  );
};

export default Homepage;
