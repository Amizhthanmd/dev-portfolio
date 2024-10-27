"use client";

import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { motion } from "framer-motion";

export const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 mt-4">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-white bg-black p-1"
    >
      <Tab setPosition={setPosition} targetId="home">
        Home
      </Tab>
      <Tab setPosition={setPosition} targetId="about">
        About
      </Tab>
      <Tab setPosition={setPosition} targetId="skills">
        Skills
      </Tab>
      <Tab setPosition={setPosition} targetId="projects">
        Projects
      </Tab>
      <Tab setPosition={setPosition} targetId="contact">
        Contact
      </Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({
  children,
  setPosition,
  targetId,
}: {
  children: string;
  setPosition: Dispatch<SetStateAction<Position>>;
  targetId: string;
}) => {
  const ref = useRef<null | HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      <a href={`#${targetId}`} className="block w-full h-full">
        {children}
      </a>
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-white md:h-12"
    />
  );
};

type Position = {
  left: number;
  width: number;
  opacity: number;
};
