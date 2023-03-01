import { bodoni } from "@/font/bodoni";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${bodoni.variable} font-serif`}>
      <Component {...pageProps} />
    </main>
  );
}
