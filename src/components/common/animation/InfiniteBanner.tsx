import { useScreenSize } from "@/hooks/useScreenSize";
import { useSpring, animated, useInView } from "@react-spring/web";
import { useEffect } from "react";
import Image from "next/image";

interface InfiniteBannerProps {
  itemsSrc: string[];
  numberOfRepeatItems: number;
  itemType: "image" | "text";
  leftToright?: boolean;
}

export const InfiniteBanner = ({
  itemsSrc,
  numberOfRepeatItems,
  itemType,
  leftToright,
}: InfiniteBannerProps) => {
  const { isPhone, isTablet } = useScreenSize();
  const pictureWidth = isPhone ? 150 : isTablet ? 60 : 45;
  const textWidth = isPhone ? 90 : isTablet ? 75 : 65;
  const itemWidth = itemType === "image" ? pictureWidth : textWidth;
  const itemGap = !isPhone ? 1 : 3;
  const containerWidth = itemWidth * (itemsSrc.length + 1);
  const slidingDistance =
    (itemWidth + itemGap) * (itemsSrc.length - numberOfRepeatItems);
  /* this is the amount of shifting distance that it takes to move the banner to a position
    where repeating items are in view. When they are inView, it looks like the banner has started from the beginning again.
    And this is where the animation will stop and start again, looking like an infinite loop.
    */
  const imageDuration = isPhone ? 35000 : 30000;
  const textDuration = isPhone ? 30000 : 50000;
  const duration = itemType === "image" ? imageDuration : textDuration;

  const [spring, api] = useSpring(() => ({
    from: { x: leftToright ? `-${slidingDistance}vw` : "0" },
  }));

  const [ref, inView] = useInView({ amount: 0.8, once: true });

  useEffect(() => {
    if (inView) {
      api.start({
        reset: true,
        to: {
          x: leftToright ? "0" : `-${slidingDistance}vw`,
        },

        config: { duration: duration },
        loop: true,
      });
    } else {
      api.stop();
    }
  }, [api, itemsSrc, isPhone, inView, leftToright, slidingDistance, duration]);

  return (
    <>
      <div ref={ref} className="overflow-hidden w-full">
        <animated.div
          style={{
            width: `${containerWidth}vw`,
            gap: `${itemGap}vw`,
            ...spring,
          }}
          className={`flex`}
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
                  quality={90}
                />
              );
            }
            if (itemType === "text") {
              return (
                <div
                  key={index}
                  style={{ width: `${itemWidth}vw` }}
                  className="font-bold text-3xl md:text-5xl lg:text-7xl xl:text-8xl"
                >
                  {src}
                </div>
              );
            }
          })}
        </animated.div>
      </div>
    </>
  );
};
