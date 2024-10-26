import TextReveal from "./ui/text-reveal";

export function About() {
  return (
    <section>
      <div className="z-10 flex min-h-64 items-center justify-center rounded-lg bg-black dark:bg-black">
        <TextReveal
          text="I'm Amizhthan, a software developer with 2 years of experience specializing in Golang, Python, React, and databases. 
      I excel in CI/CD, UI/UX, and deploying solutions using Docker and AWS. My focus is on building efficient, scalable applications, 
      streamlining workflows, and enhancing user experiences. With a problem-solving approach, 
      I'm committed to delivering impactful software solutions."
        />
      </div>
    </section>
  );
}
