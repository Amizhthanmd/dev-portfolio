import { About } from "@/components/about";
import Homepage from "@/components/hero-section";
import { NavBar } from "@/components/navbar";
import { SkillScroll } from "@/components/skill-scroll";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <Homepage />
      <About />
      <SkillScroll/>
    </div>
  );
}
