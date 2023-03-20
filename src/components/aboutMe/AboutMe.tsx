import { useScreenSize } from "@/hooks/useScreenSize";
import { animated, config, useSpring, useInView } from "@react-spring/web";
import { Row } from "../common/ui/grid/Row";
import { RowChildContainer } from "../common/ui/grid/RowContainers";
import { PingPoing } from "../common/animation/PingPong";
import { Tetris } from "../common/animation/Tetris";

export const AboutMe = () => {
  const [ref, inView] = useInView({ amount: 0.8, once: true });
  const springs = useSpring({
    from: { backgroundColor: "#FBF1EA", color: "#312E1D", opacity: 1 },
    to: {
      opacity: inView ? 1 : 0,
      backgroundColor: inView ? "#312E1D" : "#FBF1EA",
      color: inView ? "#D6916C" : "#312E1D",
    },
    config: config.slow,
  });
  const { isPhone } = useScreenSize();

  return (
    <>
      <animated.div
        ref={ref}
        style={{ ...springs }}
        className="grid grid-rows-3 md:grid-rows-4 min-h-screen"
      >
        <Row
          animation="noAnimation"
          border
          borderColour="border-[#D6916C]"
          renderRowChild={() => (
            <RowChildContainer textSize="sm" childPosition="flexColCenter">
              <p className="text-justify">
                Bring your vision to the web with stunning visuals and smooth
                animations.
              </p>
            </RowChildContainer>
          )}
        />
        <Row
          animation="noAnimation"
          border
          borderColour="border-[#D6916C]"
          rowSpan="row-span-1 md:row-span-2"
          renderRowChild={() => (
            <RowChildContainer textSize="sm" childPosition="flexColCenter">
              <div className="flex flex-col md:flex-row md:justify-between">
                <Tetris parentInView={inView} />
                {!isPhone && <PingPoing parentInView={inView} />}
              </div>
            </RowChildContainer>
          )}
        />
        <Row
          animation="noAnimation"
          renderRowChild={() => (
            <RowChildContainer textSize="sm" childPosition="flexColCenter">
              <p className="text-justify">
                As a London-based front-end developer, I make beautiful and
                functional websites with high-quality code.
              </p>
            </RowChildContainer>
          )}
        />
      </animated.div>
    </>
  );
};
