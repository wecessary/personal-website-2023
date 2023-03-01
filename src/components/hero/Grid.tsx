import { animated, useSpring, config } from "@react-spring/web";
import { ReactNode, useState } from "react";

export const Row = ({
  children,
  textDirection,
  border,
  animateFromLeft,
  rowSpan,
  localStyles,
}: {
  children: ReactNode;
  textDirection?: string;
  border?: boolean;
  animateFromLeft?: boolean;
  rowSpan?: string;
  localStyles?: string;
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
        className={`${rowSpan || "row-span-1"} ${localStyles} ${
          border && "border-b-[1px] border-black"
        } self-end text-4xl md:text-5xl lg:text-7xl overflow-hidden ${textDirection}`}
      >
        {finished ? children : null}
      </animated.div>
    </>
  );
};
