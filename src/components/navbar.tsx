"use client";

import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 mt-4">
      <div className="hidden md:block">
        <SlideTabs />
      </div>

      <div className="block md:hidden px-4">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="text-white"
          aria-label="Toggle menu"
        >
          {showMenu ? (
            <HiX size={30} style={{ color: "#fff" }} />
          ) : (
            <HiOutlineMenuAlt3 size={30} />
          )}
        </button>
      </div>

      {showMenu && (
        <div className="top-10 left-0 w-full bg-black flex flex-col">
          <MobileMenu closeMenu={() => setShowMenu(false)} />
        </div>
      )}
    </div>
  );
};

const MobileMenu = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center space-y-6 text-white text-2xl"
    >
      <MobileTab label="Home" targetId="home" onClick={closeMenu} />
      <MobileTab label="About" targetId="about" onClick={closeMenu} />
      <MobileTab label="Skills" targetId="skills" onClick={closeMenu} />
      <MobileTab label="Projects" targetId="projects" onClick={closeMenu} />
      <MobileTab label="Contact" targetId="contact" onClick={closeMenu} />
    </motion.div>
  );
};

const MobileTab = ({
  label,
  targetId,
  onClick,
}: {
  label: string;
  targetId: string;
  onClick: () => void;
}) => (
  <a
    href={`#${targetId}`}
    onClick={onClick}
    className="hover:text-violet-500 transition-colors duration-300"
  >
    {label}
  </a>
);

const SlideTabs = ({ onClick }: { onClick?: () => void }) => {
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
      <Tab setPosition={setPosition} targetId="home" onClick={onClick}>
        Home
      </Tab>
      <Tab setPosition={setPosition} targetId="about" onClick={onClick}>
        About
      </Tab>
      <Tab setPosition={setPosition} targetId="skills" onClick={onClick}>
        Skills
      </Tab>
      <Tab setPosition={setPosition} targetId="projects" onClick={onClick}>
        Projects
      </Tab>
      <Tab setPosition={setPosition} targetId="contact" onClick={onClick}>
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
  onClick,
}: {
  children: string;
  setPosition: Dispatch<SetStateAction<Position>>;
  targetId: string;
  onClick?: () => void;
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
      onClick={onClick}
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
