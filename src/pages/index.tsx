import { AboutMe } from "@/components/aboutMe/AboutMe";
import { Hero } from "@/components/hero/Hero";
import { TransitionScreen } from "@/components/hero/TransitionScreen";
import { Project } from "@/components/portfolio/Project";
import { muscleImages, waizImages } from "@/const/images";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [transitioned, setTransitioned] = useState(false);
  return (
    <>
      <Head>
        <title>Wesley Jessie | Front End Developer</title>
        <meta
          name="description"
          content="Wesley Jessie is a front end developer based in London."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="font-serif">
        <TransitionScreen onDestroyedCallback={() => setTransitioned(true)} />
        {transitioned && (
          <>
            <Hero />
            <AboutMe />
            <Project
              title="(1)Waiz Water Ecommerce"
              projectImages={waizImages}
              repeatingImages={3}
              client={"Waiz New Zealand Blue Spring Water"}
              role="Design and Dev"
              techStack="NEXT JS, Typescript, Jest, Cypress.io, Shpoify as a headless CMS"
            />
            <Project
              title="(2) Muscle Department"
              projectImages={muscleImages}
              repeatingImages={2}
              client={"myself"}
              role="Design and Dev"
              techStack="React, Typescript, React Router, Jest, Firebase"
            />
          </>
        )}
      </main>
    </>
  );
}
