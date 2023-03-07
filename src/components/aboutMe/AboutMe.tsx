import { pingPong } from "@/const/spring";
import { animated, config, useSpring, useInView } from "@react-spring/web";
import { Trail } from "../common/animation/Trail";
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
        className="flex gap-4 justify-center items-center min-h-screen"
      >
        <div className="w-[80vw] xl:w-[60vw] flex flex-col gap-10">
          <p className="text-justify text-2xl md:text-4xl">
            Bring your vision to the web with stunning visuals and smooth
            animations.
          </p>
          <div className="flex flex-col md:flex-row gap-10 md:gap-0 md:justify-between">
            <Tetris parentInView={inView} />
            <PingPoing parentInView={inView} />
          </div>
          <p className="text-justify text-2xl md:text-4xl">
            I am a front end developer based in London. I build functional and
            visually appealing websites.
          </p>
        </div>
      </animated.div>
    </>
  );
};
