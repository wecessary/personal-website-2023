import { ParentInView } from "@/model/model";
import { animated, config, useSpring } from "@react-spring/web";
import { useEffect } from "react";
import useMeasure from "react-use-measure";

export const PingPoing = ({ parentInView }: ParentInView) => {
  const [ref, { width }] = useMeasure();
  const travelDistance = width / 2 - 35; // the ball should travel half of the parent div minus the width of a slider and some buffer
  const [springs2, api] = useSpring(() => ({
    from: { x: -travelDistance, y: 10 },
  }));

  useEffect(() => {
    if (parentInView) {
      api.start({
        from: { x: -travelDistance, y: 10 },
        to: [
          { x: travelDistance, y: -10 },
          { x: -travelDistance, y: 10 },
        ],
        loop: true,
        config: config.slow,
      });
    } else {
      api.stop();
    }
  }, [parentInView, travelDistance, api]);

  return (
    <>
      <div ref={ref} className="flex justify-between gap-4">
        <animated.div
          style={{ y: springs2.y }}
          className="bg-[#D6916C] h-36 w-6 mr-20"
        />
        <animated.div
          style={{ x: springs2.x }}
          className="bg-[#D6916C] h-6 w-6 rounded-full mt-12"
        />
        <animated.div
          style={{ y: springs2.y.to((y) => -y) }}
          className="bg-[#D6916C] h-36 w-6 ml-20"
        />
      </div>
    </>
  );
};
