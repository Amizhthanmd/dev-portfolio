import { About } from "@/components/about";
import Homepage from "@/components/hero-section";
import { NavBar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <Homepage />
      <About />
    </div>
  );
}
