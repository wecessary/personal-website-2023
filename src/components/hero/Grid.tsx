import { textSizeClasses } from "@/const/textSizes";
import { animated, config, useSpring } from "@react-spring/web";
import { ReactNode, useState } from "react";

interface RowProps<T> {
  textDirection?: string;
  textSize: keyof typeof textSizeClasses;
  border?: boolean;
  animateFromLeft?: boolean;
  rowSpan?: string;
  localStyles?: string;
  renderRowChild: (isParentReady: boolean) => ReactNode;
}

export function Row<T>({
  textDirection,
  border,
  animateFromLeft,
  rowSpan,
  localStyles,
  textSize,
  renderRowChild,
}: RowProps<T>) {
  const [finished, setFinished] = useState(false);
  const springs = useSpring({
    from: { x: animateFromLeft ? "-100vw" : "100vw" },
    to: { x: "0" },
    onRest() {
      setFinished(true);
    },
    config: config.slow,
  });

  return (
    <>
      <animated.div
        style={{ ...springs }}
        className={`${rowSpan || "row-span-1"} ${localStyles} ${
          border && "border-b-[1px] border-black"
        }  overflow-hidden ${textDirection} flex justify-center`}
      >
        <div className={`w-[80vw] ${textSizeClasses[textSize]} `}>
          {renderRowChild(finished)}
        </div>
      </animated.div>
    </>
  );
}
