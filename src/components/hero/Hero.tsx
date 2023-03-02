import { wordToLetters } from "@/lib/string/wordToLetters";
import { Trail } from "../common/animation/Trail";
import { Ball } from "./Ball";
import { Row } from "./Grid";

export const Hero = () => {
  return (
    <section className="grid grid-rows-6 grid-flow-col overflow-hidden">
      <Row animateFromLeft border>
        <h1>
          <Trail>{wordToLetters("WESLEY JESSIE")}</Trail>
        </h1>
      </Row>
      <Row border textDirection="text-end">
        <JobTitle />
      </Row>
      <Row border animateFromLeft>
        <div className="text-lg lg:text-4xl">
          <Trail>{wordToLetters("wesleymhj@gmail.com")}</Trail>
        </div>
        <div className="text-lg lg:text-4xl">
          <Trail>{wordToLetters("+447597296544")}</Trail>
        </div>
      </Row>
      <Row border localStyles="flex justify-end h-32">
        <Ball />
      </Row>
      <Row animateFromLeft border>
        <Trail>{wordToLetters("LONDON, UK")}</Trail>
      </Row>
    </section>
  );
};

const JobTitle = () => (
  <>
    <span className="text-sm lg:text-base">
      <Trail>{wordToLetters("(creative)")}</Trail>
    </span>
    {/* laptop view */}
    <Trail display="hidden lg:inline-block">
      {wordToLetters("FRONT END DEVELOPER")}
    </Trail>
    {/* mobile view */}
    <Trail display="inline-block lg:hidden">{wordToLetters("FRONT END")}</Trail>
    <div className="block lg:hidden">
      <Trail display="inline-block lg:hidden">
        {wordToLetters("DEVELOPER")}
      </Trail>
    </div>
  </>
);
