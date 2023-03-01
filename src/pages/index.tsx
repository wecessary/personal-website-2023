import { Hero } from "@/components/hero/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wesley Jessie | Front End Developer</title>
        <meta
          name="description"
          content="Wesley Jessie is a front end developer based in London."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-serif">
        <Hero />
      </main>
    </>
  );
}
