import { ParentInView } from "@/model/model";
import { animated, useSpring, config } from "@react-spring/web";
import { useEffect } from "react";
import useMeasure from "react-use-measure";

export const Tetris = ({ parentInView }: ParentInView) => {
  const [ref, { width }] = useMeasure();
  const slideDistance = width - 64; // 64 is the width of the sliding div
  const rotation = 180;
  const [springs1, api] = useSpring(() => ({
    from: { x: 0, rotate: 0 },
  }));

  useEffect(() => {
    if (parentInView) {
      api.start({
        from: { x: 0, rotate: 0 },
        to: [
          { x: slideDistance, rotate: 0 },
          { x: slideDistance, rotate: rotation },
          { x: 0, rotate: rotation },
          { x: 0, rotate: 0 },
        ],
        loop: true,
        config: config.slow,
      });
    } else {
      api.stop();
    }
  }, [parentInView, slideDistance, api]);
  return (
    <>
      <div ref={ref}>
        <animated.div
          style={{ x: springs1.x }}
          className={`w-16 h-16 ${parentInView ? "bg-[#D6916C]" : "bg-orange"}`}
        />
        <div className="flex justify-between gap-4 mt-4">
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <animated.div
                key={index}
                style={{ rotate: springs1.rotate }}
                className={`w-16 h-16 ${
                  parentInView ? "bg-[#D6916C]" : "bg-orange"
                }`}
              />
            ))}
        </div>
      </div>
    </>
  );
};
