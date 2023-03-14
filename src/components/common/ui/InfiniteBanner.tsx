import { useScreenSize } from "@/hooks/useScreenSize";
import { useSpring, animated, useInView } from "@react-spring/web";
import { useEffect } from "react";
import Image from "next/image";

interface InfiniteBannerProps {
  itemsSrc: string[];
  numberOfRepeatItems: number;
  itemType: "image" | "text";
}

export const InfiniteBanner = ({
  itemsSrc,
  numberOfRepeatItems,
  itemType,
}: InfiniteBannerProps) => {
  const { isPhone, isTablet } = useScreenSize();
  const itemWidth = isPhone ? 150 : isTablet ? 60 : 45;
  const itemGap = !isPhone ? 1 : 3;
  const containerWidth = itemWidth * (itemsSrc.length + 1);

  const [spring, api] = useSpring(() => ({
    from: { x: "0" },
  }));

  const [ref, inView] = useInView({ amount: 0.5 });

  useEffect(() => {
    const slidingDistance = () => {
      const numberOfOneTimePics = itemsSrc.length - numberOfRepeatItems;
      return (itemWidth + itemGap) * numberOfOneTimePics;
      /* this is the amount of shifting distance that it takes to move the banner to a position
        where repeating items are in view. When they are inView, it looks like the banner has started from the beginning again.
        And this is where the animation will stop and start again, looking like an infinite loop.
        */
    };
    if (inView) {
      api.start({
        reset: true,
        to: { x: `-${slidingDistance()}vw` },
        config: { duration: isPhone ? 35000 : 30000 },
        loop: true,
      });
    } else {
      api.stop();
    }
  }, [itemGap, itemWidth, api, itemsSrc, numberOfRepeatItems, isPhone, inView]);

  return (
    <>
      <div ref={ref} className="overflow-hidden w-full">
        <animated.div
          style={{
            width: `${containerWidth}vw`,
            gap: `${itemGap}vw`,
            ...spring,
          }}
          className="flex"
        >
          {itemsSrc.map((src, index) => {
            if (itemType === "image") {
              return (
                <Image
                  key={index}
                  src={src}
                  width={1000}
                  height={300}
                  style={{ width: `${itemWidth}vw` }}
                  className="h-auto"
                  alt=""
                />
              );
            }
          })}
        </animated.div>
      </div>
    </>
  );
};
