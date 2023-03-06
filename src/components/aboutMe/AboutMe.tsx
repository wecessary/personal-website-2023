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

export const AboutMe = () => {
  const [ref, inView] = useInView({ amount: "all" });
  const springs = useSpring({
    from: { backgroundColor: "#FBF9F9", color: "#000000" },
    to: {
      backgroundColor: inView ? "#000000" : "#FBF9F9",
      color: inView ? "#FBF9F9" : "#000000",
    },
  });

  const [springs1, api] = useSpring(() => ({
    from: { x: 0, rotate: 0 },
    loop: true,
    config: config.slow,
  }));

  const springs2 = useSpring({
    from: { y: 96, scaleX: 1 },
    to: [
      { y: 0, scaleX: 1.2 },
      { y: 96, scaleX: 1 },
    ],
    loop: true,
    config: config.slow,
  });

  useEffect(() => {
    inView
      ? api.start({
          to: [
            { x: 224, rotate: 0 },
            { x: 224, rotate: 180 },
            { x: 0, rotate: 180 },
            { x: 0, rotate: 0 },
          ],
          loop: true,
          config: config.slow,
        })
      : api.stop();
  }, [inView]);

  return (
    <>
      <animated.div
        ref={ref}
        style={{ ...springs }}
        className="flex flex-col gap-4 items-center min-h-screen "
      >
        <div className="text-justify px-8 lg:px-0 w-[80vw] md:text-4xl">
          Bring your vision to the web with stunning visuals and smooth
          animations.
        </div>
        <div className="w-[80vw] flex flex-col md:flex-row justify-between">
          <div>
            <animated.div
              style={{ x: springs1.x }}
              className="w-24 h-24 bg-background"
            ></animated.div>
            <div className="flex gap-4 mt-4">
              {Array(3)
                .fill(0)
                .map((_, index) => (
                  <animated.div
                    key={index}
                    style={{ rotate: springs1.rotate }}
                    className="w-24 h-24 bg-background"
                  />
                ))}
            </div>
          </div>
          <div>
            <div className="flex gap">
              <animated.div
                style={{ scaleX: springs2.scaleX }}
                className="bg-background h-24 w-48 rounded-full"
              />
              <animated.div
                style={{ y: springs2.y }}
                className="bg-background h-24 w-12 ml-10"
              />
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
