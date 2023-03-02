import { appearBottomUp, ballGridLineConfig, gridLineConfig } from "@/const/spring";
import { wordToLetters } from "@/lib/string/wordToLetters";
import { Trail } from "../common/animation/Trail";
import { Ball } from "./Ball";
import { Row } from "./Grid";

export const Hero = () => {
  return (
    <section className="grid grid-rows-6 grid-flow-col overflow-hidden">
      <Row animateFromLeft border>
        <h1>
          <Trail animation={appearBottomUp}>
            {wordToLetters("WESLEY JESSIE")}
          </Trail>
        </h1>
      </Row>
      <Row config={gridLineConfig} border textDirection="text-end">
        <JobTitle />
      </Row>
      <Row config={gridLineConfig} border animateFromLeft>
        <div className="text-lg lg:text-4xl">
          <Trail animation={appearBottomUp}>
            {wordToLetters("wesleymhj@gmail.com")}
          </Trail>
        </div>
        <div className="text-lg lg:text-4xl">
          <Trail animation={appearBottomUp}>
            {wordToLetters("+447597296544")}
          </Trail>
        </div>
      </Row>
      <Row
        config={ballGridLineConfig}
        border
        localStyles="flex justify-end h-32"
      >
        <Ball />
      </Row>
      <Row config={gridLineConfig} animateFromLeft border>
        <Trail animation={appearBottomUp}>{wordToLetters("LONDON, UK")}</Trail>
      </Row>
    </section>
  );
};

const JobTitle = () => (
  <>
    <span className="text-sm lg:text-base">
      <Trail animation={appearBottomUp}>{wordToLetters("(creative)")}</Trail>
    </span>
    {/* laptop view */}
    <Trail animation={appearBottomUp} display="hidden lg:inline-block">
      {wordToLetters("FRONT END DEVELOPER")}
    </Trail>
    {/* mobile view */}
    <Trail animation={appearBottomUp} display="inline-block lg:hidden">
      {wordToLetters("FRONT END")}
    </Trail>
    <div className="block lg:hidden">
      <Trail animation={appearBottomUp} display="inline-block lg:hidden">
        {wordToLetters("DEVELOPER")}
      </Trail>
    </div>
  </>
);
