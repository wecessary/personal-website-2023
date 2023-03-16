import { animated, config, useTransition } from "@react-spring/web";
import { useState } from "react";

export const TransitionScreen = ({
  onDestroyedCallback,
}: {
  onDestroyedCallback: () => void;
}) => {
  const [items, setItems] = useState(["WESLEY"]);
  const transition = useTransition(items, {
    from: { backgroundColor: "#312E1D", color: "#fbf1ea", x: -80 },
    enter: { x: 0 },
    leave: {
      backgroundColor: "#fbf1ea",
      color: "#312E1D",
    },
    config: config.gentle,
    onRest: () => {
      setItems([]);
    },
    onDestroyed: () => {
      onDestroyedCallback();
    },
  });

  return (
    <>
      {transition(({ backgroundColor, x, ...style }, item) => (
        <animated.div
          style={{ backgroundColor }}
          className={`h-screen flex justify-center items-center`}
        >
          <animated.p style={style} className="text-4xl font-bold">
            {item.split("").map((letter, index) => (
              <animated.span
                key={index}
                className="inline-block"
                style={{ x: x.to((x) => (index % 2 == 0 ? -x : x)) }} //to scramble up the letters
              >
                {letter}
              </animated.span>
            ))}
          </animated.p>
        </animated.div>
      ))}
    </>
  );
};
