import { AboutMe } from "@/components/aboutMe/AboutMe";
import { Logo } from "@/components/common/ui/Logo";
import { Contact } from "@/components/contact/Contact";
import { Cta } from "@/components/cta/Cta";
import { Hero } from "@/components/hero/Hero";
import { TransitionScreen } from "@/components/common/ui/TransitionScreen";
import { Projects } from "@/components/projects/Projects";
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
          content="Wesley Jessie is a front end developer who designs and builds
          beautiful and functional websites with high-quality code."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <main className="font-serif">
        <TransitionScreen onDestroyedCallback={() => setTransitioned(true)} />
        {transitioned && (
          <>
            <Logo />
            <Hero />
            <AboutMe />
            <Projects />
            <Cta />
            <Contact />
          </>
        )}
      </main>
    </>
  );
}
