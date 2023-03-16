import { bodoni } from "@/font/bodoni";
import { hvAnalogue } from "@/font/hvAnalogue";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${bodoni.variable} ${hvAnalogue.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
