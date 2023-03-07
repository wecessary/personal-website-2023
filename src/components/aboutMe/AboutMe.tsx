import {
  animated,
  config,
  useSpring,
  useChain,
  useTransition,
  useSpringRef,
  useInView,
} from "@react-spring/web";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

export const AboutMe = () => {
  const [squareContainerRef, { width }] = useMeasure();
  const [pingPongRef, foo] = useMeasure();

  const [ref, inView] = useInView({ amount: 0.8 });
  const springs = useSpring({
    from: { backgroundColor: "#FBF9F9", color: "#000000" },
    to: {
      backgroundColor: inView ? "#000000" : "#FBF9F9",
      color: inView ? "#FBF9F9" : "#000000",
    },
    config: config.slow,
  });

  const [springs1, api] = useSpring(() => ({
    from: { x: 0, rotate: 0 },
  }));

  const [springs2, api2] = useSpring(() => ({
    from: { x: -(foo.width / 2 - 35), y: 10 },
  }));

  useEffect(() => {
    if (inView) {
      api.start({
        from: { x: 0, rotate: 0 },
        to: [
          { x: width - 64, rotate: 0 },
          { x: width - 64, rotate: 180 },
          { x: 0, rotate: 180 },
          { x: 0, rotate: 0 },
        ],
        loop: true,
        config: config.slow,
      });
      api2.start({
        from: { x: -(foo.width / 2 - 35), y: 10 },
        to: [
          { x: foo.width / 2 - 35, y: -10 },
          { x: -(foo.width / 2 - 35), y: 10 },
        ],
        loop: true,
        config: config.slow,
      });
    } else {
      api.stop();
      api2.stop();
    }
  }, [inView, width, foo.width]);
  return (
    <>
      <animated.div
        ref={ref}
        style={{ ...springs }}
        className="flex gap-4 justify-center items-center min-h-screen"
      >
        <div className="w-[80vw] xl:w-[60vw]">
          <div className="text-justify  text-2xl md:text-4xl">
            Bring your vision to the web with stunning visuals and smooth
            animations.
          </div>
          <div className="flex flex-col md:flex-row gap-10 lg:gap-0 justify-between mt-10">
            <div ref={squareContainerRef}>
              <animated.div
                style={{ x: springs1.x }}
                className="w-16 h-16 bg-background"
              ></animated.div>
              <div className="flex justify-between gap-4 mt-4">
                {Array(3)
                  .fill(0)
                  .map((_, index) => (
                    <animated.div
                      key={index}
                      style={{ rotate: springs1.rotate }}
                      className="w-16 h-16 bg-background"
                    />
                  ))}
              </div>
            </div>
            <div>
              <div ref={pingPongRef} className="flex justify-between gap-4">
                <animated.div
                  style={{ y: springs2.y }}
                  className="bg-background h-36 w-6 mr-20"
                />
                <animated.div
                  style={{ x: springs2.x }}
                  className="bg-background h-6 w-6 rounded-full mt-12"
                />
                <animated.div
                  style={{ y: springs2.y.to((y) => -y) }}
                  className="bg-background h-36 w-6 ml-20"
                />
              </div>
            </div>
          </div>
        </div>
      </animated.div>
    </>
  );
};

{
  /* <div className="text-justify px-8 lg:px-0 md:w-3xl md:text-4xl">
<p>I am a front end developer based in London.</p>
<p>
  I
  <Trail animation={pingPong}>
    <span className="inline-block px-2">build</span>
    <span className="inline-block px-2"> functional</span>
    <span className="inline-block px-2"> and </span>
    <span className="inline-block px-2">visual</span>
    <span className="inline-block px-2"> websites.</span>
  </Trail>
</p>
</div> */
}

// const springs1 = useSpring({
//   from: { scale: 0.2, backgroundColor: "#715A5A" },
//   to: [{ scale: 4 }, { backgroundColor: "#ffffff" }],
//   config: config.slow,
//   loop: true,
// });

// const springs2 = useSpring({
//   from: { x1: 0, x2: 0, y2: 0, scaleX1: 1, scaleX2: 1, scaleY2: 1 },
//   to: [
//     { x1: 80, x2: 0, y2: 0, scaleX1: 1, scaleX2: 1, scaleY2: 1 },
//     { x1: 160, x2: -120, scaleX1: 0.33, scaleX2: 4 },
//     { scaleY2: 4, y2: -120 },
//   ],
//   loop: true,
// });

{
  /* <animated.div className="w-80 h-80 bg-background flex items-center justify-center ">
<animated.div
  style={{ ...springs1 }}
  className="h-20 w-20 flex items-center justify-center"
>
  <animated.div className="h-5 w-5 bg-background flex items-center justify-center" />
</animated.div>
</animated.div>
<div className="relative h-80 w-80">
<animated.div
  style={{ scaleX: springs2.scaleX1, x: springs2.x1 }}
  className="h-60 w-60 bg-background "
/>
<animated.div
  style={{
    scaleX: springs2.scaleX2,
    scaleY: springs2.scaleY2,
    x: springs2.x2,
    y: springs2.y2,
  }}
  className="h-20 w-20 bg-background absolute right-0"
/> */
}
