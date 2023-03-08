import { Trail } from "../common/animation/Trail";
import { Row } from "./Grid";

export const Hero = () => {
  return (
    <section className="grid grid-rows-5 items-end grid-flow-col overflow-hidden min-h-[90vh] lg:min-h-[98vh] ">
      <Row
        textSize="hero"
        animation="animateFromLeft"
        border
        renderRowChild={(isRowReady) => (
          <Trail animationStart={isRowReady}>{["WESLEY", "JESSIE"]}</Trail>
        )}
      />
      <Row
        textSize="hero"
        border
        animation="animateFromRight"
        renderRowChild={(isRowReady) => (
          <Trail animationStart={isRowReady}>
            {["FRONT", "END", "DEVELOPER"]}
          </Trail>
        )}
      />
      <Row
        textSize="smallHero"
        border
        animation="animateFromLeft"
        renderRowChild={(isRowReady) => (
          <Trail animationStart={isRowReady}>{"+44 7597296544"}</Trail>
        )}
      />
      <Row
        textSize="smallHero"
        animation="animateFromRight"
        border
        renderRowChild={(isRowReady) => (
          <Trail animationStart={isRowReady}>{"wesleymhj@gmail.com"}</Trail>
        )}
      />
      <Row
        textSize="hero"
        animation="animateFromLeft"
        border
        renderRowChild={(isRowReady) => (
          <Trail animationStart={isRowReady}>{["LONDON,", "UK"]}</Trail>
        )}
      />
    </section>
  );
};
