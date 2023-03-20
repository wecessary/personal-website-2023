import { animated, config, useInView, useTrail } from "@react-spring/web";
import { useEffect } from "react";

export const Rainbow = ({}) => {
  const [ref, inView] = useInView({ amount: 1 });
  const text = ["UPGRADE TO", "CUSTOM", "DESGIN AND", "CODE."];
  const colour = [
    "f94144",
    "f3722c",
    "f8961e",
    "f9844a",
    "f9c74f",
    "90be6d",
    "43aa8b",
    "4d908e",
    "577590",
    "4d908e",
  ];

  const [trails, api] = useTrail(text.length, () => ({
    from: { y: 40, opacity: 0 },
  }));

  useEffect(() => {
    if (inView) {
      api.start({
        reset: true,
        to: [{ y: 0 }, { opacity: 1 }],
        config: config.default,
      });
    } else {
      api.stop();
    }
  }, [inView, api]);
  return (
    <>
      <div className="flex flex-col" ref={ref}>
        {trails.map((style, index) => (
          <div key={index} className="relative overflow-y-hidden">
            <div className="text-[#000]">{text[index]}</div>
            <animated.span
              style={{
                ...style,
                color: `#${colour[index % (colour.length + 1)]}`,
              }}
              className="absolute top-0 opacity-70 inline-block"
            >
              {text[index]}
            </animated.span>
          </div>
        ))}
      </div>
    </>
  );
};
