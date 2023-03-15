import { AboutMe } from "@/components/aboutMe/AboutMe";
import { InfiniteBanner } from "@/components/common/animation/InfiniteBanner";
import { Hero } from "@/components/hero/Hero";
import { TransitionScreen } from "@/components/hero/TransitionScreen";
import { Portfolio } from "@/components/portfolio/Portfolio";
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
            <Portfolio />
          </>
        )}
      </main>
    </>
  );
}
