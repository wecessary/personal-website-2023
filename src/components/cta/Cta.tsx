import { textSizeClasses } from "@/const/textSizes";
import {
  animated,
  config,
  useInView,
  useSpring,
  useSprings,
} from "@react-spring/web";
import { useEffect, useState } from "react";
import { HackerEffect } from "../common/animation/HackerEffect";

export const Cta = () => {
  const [ref, inView] = useInView({ amount: 0.5 });
  const [springs, api] = useSprings(3, (i) => ({
    from: { x: "40%", y: 0 },
    config: config.gentle,
  }));

  useEffect(() => {
    if (inView) {
      api.start((i) => ({
        to: async (next) => {
          await next({ y: -4, delay: 1000 });
          await next({ x: "0%", delay: 1000 });
          await next({ y: 0, delay: 1000 });
          await next({ x: "40%", delay: 1000 });
        },
        loop: true,
      }));
    } else {
      api.stop();
    }
  }, [inView, api]);
  return (
    <>
      <div ref={ref} className="min-h-[90vh] flex justify-center">
        <div className="w-[90vw] md:w-[80vw] border-r-2 border-l-2 border-black flex flex-col justify-center">
          <div
            className={`${textSizeClasses.sm} flex flex-col items-center gap-4`}
          >
            <div className="w-[88vw] md:w-[50vw] flex justify-between items-center">
              <span className="basis-1/3">YOUR</span>
              <div className="basis-1/3 text-center ">WORDPRESS</div>
              <span className="basis-1/3 text-end">TEMPLATE</span>
            </div>
            <div className="w-[88vw] md:w-[50vw] flex justify-between ">
              <span className="basis-1/3 ">NOT</span>
              <div className="basis-1/3 flex justify-center relative overflow-y-hidden ">
                <div className="opacity-0">CUTTING</div>
                <animated.div
                  className="absolute top-0"
                  style={{ y: springs[0].y, clipPath: "inset(0 0 50% 0)" }}
                >
                  CUTTING
                </animated.div>
                <animated.div
                  className="absolute top-0"
                  style={{
                    y: springs[0].y.to((y) => -y),
                    clipPath: "inset(50% 0 0 0)",
                  }}
                >
                  CUTTING
                </animated.div>
              </div>
              <span className="basis-1/3 text-end">IT?</span>
            </div>
            <div className="w-[88vw] md:w-[50vw] flex justify-between ">
              <animated.div className="basis-1/3" style={{ x: springs[1].x }}>
                SIT BACK
              </animated.div>
              <span className="basis-1/3 text-center">AND</span>
              <span className="basis-1/3 text-end">RELAX</span>
            </div>
            <div className="w-[88vw] md:w-[50vw] flex justify-between ">
              <span className="basis-1/3 text-start">{"LET"}</span>
              <span className="bais-1/3 text-center">US</span>
              <span className="basis-1/3 text-end">CHAT</span>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

{
  /* <span className="overflow-y-hidden basis-1/6 text-center">
{"CODE".split("").map((char, index) => (
  <animated.span
    style={{ y: springs[2].y }}
    className="inline-block"
    key={index}
  >
    {char}
  </animated.span>
))}
</span> */
}
