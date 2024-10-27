import { VelocityScroll } from "./ui/scroll-based-velocity";

export function SkillScroll() {
  return (
    <VelocityScroll
      text="GOLANG • PYTHON • TYPESCRIPT • JAVASCRIPT • REACT • DOCKER •"
      default_velocity={1}
      className="font-display opacity-75 text-center text-4xl font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
  );
}
