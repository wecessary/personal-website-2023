import { getScrollingPct } from "@/lib/scroll/utlity";
import { animated, useInView, useScroll } from "@react-spring/web";
import { MutableRefObject, useRef } from "react";

export const AboutMe = () => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const text = [
    "I craft functional and visually appealing websites.",
    "I craft functional and visually appealing websites.",
    "I craft functional and visually appealing websites.",
  ];
  const { scrollY } = useScroll();
  return (
    <>
      <div
        ref={ref}
        className="min-h-screen flex flex-col items-center relative"
      >
        {text.map((t, i, array) => (
          <TextFillOnScroll
            key={i}
            text={t}
            x={scrollY.to((_) => {
              console.log(i, getScrollingPct(ref, i, array.length));
              return getScrollingPct(ref, i, array.length);
            })}
          />
        ))}
      </div>

      <div className="min-h-screen w-screen"></div>
    </>
  );
};

const TextFillOnScroll = ({ x, text }: { x: any; text: string }) => {
  return (
    <div className="text-sm lg:text-4xl relative">
      <p>I craft functional and visually appealing websites.</p>
      <div>
        <animated.div
          style={{
            x: x,
          }}
          className="absolute top-0 text-transparent z-10 opacity-70 bg-background"
        >
          {text}
        </animated.div>
      </div>
    </div>
  );
};
