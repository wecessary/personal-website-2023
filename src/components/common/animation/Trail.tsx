import { animated, AnimationProps, useTrail } from "@react-spring/web";
import { Children, ReactNode } from "react";

export const Trail = ({
  children,
  display,
  animation,
}: {
  children: ReactNode;
  display?: string;
  animation: AnimationProps;
}) => {
  const items = Children.toArray(children);
  const trail = useTrail(items.length, animation);

  return (
    <>
      {trail.map((style, index) => {
        return (
          <animated.div
            className={`${display || "inline-block"}`}
            key={index}
            style={style}
          >
            {items[index]}
          </animated.div>
        );
      })}
    </>
  );
};
