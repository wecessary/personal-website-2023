import { useScreenSize } from "@/hooks/useScreenSize";
import { animated, config, useSpring } from "@react-spring/web";
import Image from "next/image";
import { useEffect } from "react";
import { Row } from "../common/ui/grid/Row";
import { RowChildContainer } from "../common/ui/grid/RowContainers";

export const Portfolio = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="text-4xl w-[80vw]">SELECTED WORK</div>
      </div>
      <div className="min-h-screen grid grid-rows-3">
        <Row
          border
          localStyles="border-t-2"
          animation="noAnimation"
          renderRowChild={() => (
            <RowChildContainer
              sideBorders
              sideBorderColour="border-black"
              textSize="xs"
              childPosition="none"
            >
              <div className="grid grid-row-4 h-full">
                <div className="row-span-1 border-b-2 border-black flex flex-col justify-center">
                  <p className="text-sm">{"(1):"}</p>
                  <p>{"Waiz water - E-commerce website"}</p>
                </div>
                <div className="row-span-1 border-b-2 border-black flex flex-col justify-center">
                  <p className="text-base">client:</p>
                  <p>Waiz New Zealand Blue Spring Water</p>
                </div>
                <div className="row-span-1 flex flex-col justify-center">
                  <p className="text-base">role:</p>
                  <p>Design and Dev</p>
                </div>
              </div>
            </RowChildContainer>
          )}
        />
        <Row
          border
          animation="noAnimation"
          renderRowChild={() => (
            <RowChildContainer
              sideBorders
              sideBorderColour="border-black"
              textSize="sm"
              childPosition="none"
            >
              <InfiniteCarousel />
            </RowChildContainer>
          )}
        />
        <Row
          border
          animation="noAnimation"
          renderRowChild={() => (
            <RowChildContainer
              sideBorders
              sideBorderColour="border-black"
              textSize="sm"
              childPosition="none"
            >
              <div className="grid grid-row-2 h-full">
                <div className="row-span-1 border-b-2 border-black flex flex-col justify-center">
                  <p className="text-base">tech stack:</p>
                  <p>
                    NEXT JS, Typescript, Jest, Cypress.io, Shpoify as a headless
                    CMS
                  </p>
                </div>
                <div className="row-span-1  flex flex-col justify-center">
                  <p className="text-base">type:</p>
                  <p>Visit Now</p>
                </div>
              </div>
            </RowChildContainer>
          )}
        />
      </div>
    </>
  );
};

const InfiniteCarousel = () => {
  const screenSize = useScreenSize();
  const pictureWidth = screenSize > 425 ? 30 : 70;
  const gap = screenSize > 425 ? 1 : 3;

  const picturesSrc = [
    "/waiz-hero.jpg",
    "/waiz-product.jpg",
    "/waiz-map.jpg",
    "/waiz-billboard.jpg",
    "/waiz-blue-spring.jpg",
    "/waiz-hero.jpg",
    "/waiz-product.jpg",
    "/waiz-map.jpg",
  ];

  const containerWidth = pictureWidth * (picturesSrc.length + 1);

  const slidingDistance = (
    numberOfPics: number,
    numberOfRepeatingPics: number
  ) => {
    const numberOfOneTimePics = numberOfPics - numberOfRepeatingPics;
    return pictureWidth * numberOfOneTimePics + gap * numberOfOneTimePics;
  };

  const [spring, api] = useSpring(() => ({
    from: { x: "0" },
  }));

  useEffect(() => {
    api.start({
      reset: true,
      to: { x: `-${slidingDistance(picturesSrc.length, 3)}vw` },
      config: { duration: 10000 },
      loop: true,
    });
  }, [pictureWidth]);

  return (
    <>
      <div className="overflow-x-auto w-full">
        <animated.div
          style={{
            width: `${containerWidth}vw`,
            gap: `${gap}vw`,
            ...spring,
          }}
          className="flex"
        >
          {picturesSrc.map((src, index) => (
            <Image
              key={index}
              src={src}
              width={400}
              height={100}
              style={{ width: `${pictureWidth}vw` }}
              className="h-auto"
              alt=""
            />
          ))}
        </animated.div>
      </div>
    </>
  );
};
