import { animated, config, useTrail } from "@react-spring/web";
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
    from: { y: 300 },
  }));

  useEffect(() => {
    if (animationStart) {
      api.start({
        to: { y: 0 },
        config: config.slow,
      });
    }
  }, [animationStart, api]);

  return (
    <div>
      {trail.map((style, index, array) => {
        return (
          <animated.div
            className={`${display || "inline-block"} ${
              index === 0
                ? "mr-1 lg:mr-2"
                : index === array.length - 1
                ? "ml-1 lg:ml-2"
                : "mx-1 lg:mx-2"
            }`}
            key={index}
            style={style}
          >
            {items[index]}
          </animated.div>
        );
      })}
    </div>
  );
};
