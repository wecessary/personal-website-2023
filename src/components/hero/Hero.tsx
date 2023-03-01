import { moveBall } from "@/const/spring";
import { wordToLetters } from "@/lib/string/wordToLetters";
import { useSpring, animated } from "@react-spring/web";
import { ReactNode } from "react";
import { Trail } from "../common/animation/Trail";
import { Ball } from "./Ball";
import { Row } from "./Grid";

export const Hero = () => {
  return (
    <section className="grid grid-rows-6 grid-flow-col min-h-[70vh]">
      <Row animateFromLeft border>
        <h1>
          <Trail>{wordToLetters("WESLEY JESSIE")}</Trail>
        </h1>
      </Row>
      <Row border textDirection="text-end">
        <JobTitle />
      </Row>
      <div className="row-span-3 border-b-[1px] border-black">
        <ContactAndBall />
      </div>
      <Row animateFromLeft border>
        <Trail>{wordToLetters("LONDON, UK")}</Trail>
      </Row>
    </section>
  );
};

const JobTitle = () => (
  <>
    <span className="text-sm xl:text-base">
      <Trail>{wordToLetters("(creative)")}</Trail>
    </span>
    {/* laptop view */}
    <Trail display="hidden xl:inline-block">
      {wordToLetters("FRONT END DEVELOPER")}
    </Trail>
    {/* mobile view */}
    <Trail display="inline-block xl:hidden">{wordToLetters("FRONT END")}</Trail>
    <div className="block xl:hidden">
      <Trail display="inline-block xl:hidden">
        {wordToLetters("DEVELOPER")}
      </Trail>
    </div>
  </>
);

const ContactAndBall = () => {
  return (
    <div className="grid grid-rows-3 grid-flow-col h-full">
      <div className="row-span-1">
        <div className="text-lg lg:text-4xl">wesleymhj@gmail.com</div>
        <div className="text-lg lg:text-4xl">+44 7597296544</div>
      </div>
      <div className="row-span-2 self-end justify-self-end ">
        <Ball />
      </div>
    </div>
  );
};
