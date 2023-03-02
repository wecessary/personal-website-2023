import { animated, useScroll } from "@react-spring/web";
import { MutableRefObject, useRef } from "react";

export const AboutMe = () => {
  const ref = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;
  const { scrollYProgress } = useScroll({
    container: ref,
    onChange: (val) => console.log(val.value),
  });
  return (
    <>
      <div className="flex justify-center">
        <div className="relative text-4xl">
          <p>I craft functional and visually appealing websites.</p>
          <div className="flex justify-end">
            <animated.div
              style={{
                width: scrollYProgress.to((val) => `${100 - val * 100}%`),
              }}
              className="absolute z-10 -translate-y-full h-full opacity-70 bg-background"
            ></animated.div>
          </div>
        </div>
      </div>
      <div className="min-h-screen w-screen"></div>
    </>
  );
};
