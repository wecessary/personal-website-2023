import { appearBottomUp } from "@/const/spring";
import { animated, useTrail } from "@react-spring/web";
import { Children, ReactNode } from "react";

export const Trail = ({ children }: { children: ReactNode }) => {
  const items = Children.toArray(children);
  const trail = useTrail(items.length, appearBottomUp);

  return (
    <>
      {trail.map((style, index) => {
        return (
          <animated.div className="inline-block" key={index} style={style}>
            {items[index]}
          </animated.div>
        );
      })}
    </>
  );
};
