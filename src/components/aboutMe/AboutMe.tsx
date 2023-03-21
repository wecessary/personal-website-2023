import { useScreenSize } from "@/hooks/useScreenSize";
import { animated, config, useSpring, useInView } from "@react-spring/web";
import { Row } from "../common/ui/grid/Row";
import { RowChildContainer } from "../common/ui/grid/RowContainers";
import { PingPoing } from "../common/animation/PingPong";
import { Tetris } from "../common/animation/Tetris";

export const AboutMe = () => {
  const [ref, inView] = useInView({ amount: 0.6, once: true });
  const springs = useSpring({
    from: { backgroundColor: "#FBF1EA", color: "#312E1D" },
    to: {
      backgroundColor: inView ? "#312E1D" : "#FBF1EA",
      color: inView ? "#D6916C" : "#AC521F",
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
          borderColour={`${inView ? "border-[#D6916C]" : "border-orange"}`}
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
          borderColour={`${inView ? "border-[#D6916C]" : "border-orange"}`}
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
                I am a London-based front-end developer. I design and build
                beautiful and functional websites with high-quality code.
              </p>
            </RowChildContainer>
          )}
        />
      </animated.div>
    </>
  );
};
