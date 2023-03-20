import { gridLineAnimation } from "@/const/spring";
import { textSizeClasses } from "@/const/textSizes";
import { animated, config, useSpring } from "@react-spring/web";
import { ReactNode, useState } from "react";

interface RowProps<T> {
  textDirection?: string;
  border?: boolean;
  borderColour?: string;
  animation: keyof typeof gridLineAnimation;
  rowSpan?: string;
  localStyles?: string;
  renderRowChild: (isParentReady: boolean) => ReactNode;
}

export function Row<T>({
  textDirection,
  border,
  borderColour,
  animation,
  rowSpan,
  localStyles,
  renderRowChild,
}: RowProps<T>) {
  const [animationFinished, setAnimationFinished] = useState(false);
  const springs = useSpring({
    from: { x: gridLineAnimation[animation] },
    to: { x: "0" },
    onRest() {
      setAnimationFinished(true);
    },
    config: config.slow,
  });

  return (
    <>
      <animated.div
        style={{ ...springs }}
        className={`${rowSpan || "row-span-1"} ${localStyles} ${
          border && "border-b-2"
        } ${
          borderColour || "border-orange"
        } overflow-hidden ${textDirection} flex justify-center`}
      >
        {renderRowChild(animationFinished)}
      </animated.div>
    </>
  );
}
