import { About } from "@/components/about";
import { TextParallaxContentExample } from "@/components/experience";
import Homepage from "@/components/hero-section";
import { NavBar } from "@/components/navbar";
import { RevealLinks } from "@/components/reveal-link";
import { SkillScroll } from "@/components/skill-scroll";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <Homepage />
      <About />
      <SkillScroll vel={1} />
      <SkillScroll vel={-1} />
      <TextParallaxContentExample />
      <SkillScroll vel={1} />
      <SkillScroll vel={-1} />
      <RevealLinks />
    </div>
  );
}
