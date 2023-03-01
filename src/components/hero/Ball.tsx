import { moveBall } from "@/const/spring";
import { animated, useSpring } from "@react-spring/web";
import { ReactNode } from "react";

export const Ball = () => {
  const springs = useSpring(moveBall);
  return (
    <animated.div style={{ ...springs }}>
      <OuterBall>
        <animated.div className="bg-[#D9D9D9] rounded-full w-6 h-6 top-6 left-2 absolute"></animated.div>
      </OuterBall>
    </animated.div>
  );
};

export const OuterBall = ({ children }: { children: ReactNode }) => (
  <div className="bg-black rounded-full w-32 h-32  relative">{children}</div>
);
