import { animated, config, useSpring, useInView } from "@react-spring/web";
import { Row } from "../hero/Grid";
import { PingPoing } from "./PingPong";
import { Tetris } from "./Tetris";

export const AboutMe = () => {
  const [ref, inView] = useInView({ amount: 0.8 });
  const springs = useSpring({
    from: { backgroundColor: "#FBF9F9", color: "#000000" },
    to: {
      backgroundColor: inView ? "#000000" : "#FBF9F9",
      color: inView ? "#FBF9F9" : "#000000",
    },
    config: config.slow,
  });

  return (
    <>
      <animated.div
        ref={ref}
        style={{ ...springs }}
        className="grid grid-rows-3 md:grid-rows-4 min-h-screen"
      >
        <Row
          animation="noAnimation"
          border
          borderColour="border-background"
          textSize="smallHero"
          renderRowChild={() => (
            <p className="text-justify text-2xl md:text-4xl">
              Bring your vision to the web with stunning visuals and smooth
              animations.
            </p>
          )}
        />
        <Row
          animation="noAnimation"
          border
          borderColour="border-background"
          rowSpan="row-span-1 md:row-span-2"
          textSize="smallHero"
          renderRowChild={() => (
            <div className="flex flex-col md:flex-row md:justify-between">
              <Tetris parentInView={inView} />
              <PingPoing parentInView={inView} />
            </div>
          )}
        />
        <Row
          animation="noAnimation"
          textSize="smallHero"
          renderRowChild={() => (
            <p className="text-justify text-2xl md:text-4xl">
              I am a front end developer based in London. I build functional and
              visually appealing websites.
            </p>
          )}
        />
      </animated.div>
    </>
  );
};
