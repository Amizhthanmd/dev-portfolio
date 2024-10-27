"use client";

import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-white rounded-lg">
      <br></br>
      <TextParallaxContent
        imgUrl="/Hr365.png"
        subheading="HR365 India"
        heading="Developer Trainee"
      >
        <Hr365Content />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/Dotworld.png"
        subheading="Dotworld Technologies"
        heading="Associate Software Engineer"
      >
        <DotworldContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="Goat-robotics.png"
        subheading="Goat Robotics"
        heading="Associate Software Engineer"
      >
        <GTContent />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const Hr365Content = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <div className="col-span-1 md:col-span-4 font-semibold text-lg">
      <p>HR365 - Chennai, IN</p>
      <p>(OCT 2022 - APR 2023)</p>
    </div>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Applied Go, Vue.js, and MongoDB in production while supporting HRMS
        product development through customer support and debugging.
      </p>
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Collaborated with team members to resolve customer issues.
      </p>
      <p className="text-xl text-neutral-600 md:text-2xl">
        Assisted in identifying and troubleshooting software bugs.
      </p>
    </div>
  </div>
);

const DotworldContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <div className="col-span-1 md:col-span-4 font-semibold text-lg">
      <p>Dotworld Technologies - Coimbatore, IN</p>
      <p>(JUL 2023 - FEB 2024)</p>
    </div>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Developed multi-tenant architecture for scalable application management.
      </p>
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Implemented real-time communication and video streaming with WebRTC and
        gRPC.
      </p>
      <p className="text-xl text-neutral-600 md:text-2xl">
        Deployed with CI/CD, Docker, and AWS services (EC2, S3) with PostgreSQL
        for scalability.
      </p>
    </div>
  </div>
);

const GTContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <div className="col-span-1 md:col-span-4 font-semibold text-lg">
      <p>Goat Robotics - Coimbatore, IN</p>
      <p>(MAR 2024 - OCT 2024)</p>
    </div>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Built user interfaces, controlled remote robots, and enabled autonomous
        movement using ROS2.
      </p>
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Streamlined Robotics Middleware Framework (RMF) integration for a
        robotics project.
      </p>
      <p className="text-xl text-neutral-600 md:text-2xl">
        Collaborated on cross-functional teams to design and implement new
        features
      </p>
    </div>
  </div>
);
