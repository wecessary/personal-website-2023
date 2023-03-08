import { animated, AnimationProps, config, useTrail } from "@react-spring/web";
import { Children, ReactNode, useEffect } from "react";

export const Trail = ({
  children,
  display,
  animationStart,
}: {
  children: ReactNode;
  display?: string;
  animationStart: boolean;
}) => {
  const items = Children.toArray(children);
  const [trail, api] = useTrail(items.length, () => ({
    from: { opacity: 0, y: 300 },
  }));

  useEffect(() => {
    if (animationStart) {
      api.start({
        to: { opacity: 1, y: 0 },
        config: config.slow,
      });
    }
  }, [animationStart, api]);

  return (
    <>
      {trail.map((style, index) => {
        return (
          <animated.div
            className={`${display || "inline-block"} mx-1 lg:mx-2`}
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
