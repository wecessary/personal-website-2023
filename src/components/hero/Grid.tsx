import { animated, useSpring, config } from "@react-spring/web";
import { ReactNode, useState } from "react";

export const Row = ({
  children,
  textDirection,
  border,
  animateFromLeft,
}: {
  children: ReactNode;
  textDirection?: string;
  border?: boolean;
  animateFromLeft?: boolean;
}) => {
  const [finished, setFinished] = useState(false);
  const springs = useSpring({
    from: { x: animateFromLeft ? "-100vw" : "100vw" },
    to: { x: "0" },
    config: config.slow,
    onRest() {
      setFinished(true);
    },
  });
  return (
    <>
      <animated.div
        style={{ ...springs }}
        className={`row-span-1 ${
          border && "border-b-[1px] border-black"
        } self-end text-4xl md:text-5xl lg:text-8xl overflow-y-hidden ${textDirection}`}
      >
        {finished ? children : null}
      </animated.div>
    </>
  );
};
