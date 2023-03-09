import { Trail } from "../common/animation/Trail";
import { Row } from "../common/ui/grid/Row";
import { RowChildContainer } from "../common/ui/grid/RowContainers";

export const Hero = () => {
  return (
    <section className="grid grid-rows-5 grid-flow-col overflow-hidden min-h-[90vh] lg:min-h-[98vh]">
      <Row
        animation="animateFromLeft"
        border
        renderRowChild={(isRowReady) => (
          <RowChildContainer childPosition="touchBtBorder" textSize="xl">
            <Trail animationStart={isRowReady}>{["WESLEY", "JESSIE"]}</Trail>
          </RowChildContainer>
        )}
      />
      <Row
        border
        animation="animateFromRight"
        renderRowChild={(isRowReady) => (
          <RowChildContainer childPosition="touchBtBorder" textSize="xl">
            <Trail animationStart={isRowReady}>
              {["FRONT", "END", "DEVELOPER"]}
            </Trail>
          </RowChildContainer>
        )}
      />
      <Row
        border
        animation="animateFromLeft"
        renderRowChild={(isRowReady) => (
          <RowChildContainer childPosition="touchBtBorder" textSize="md">
            <Trail animationStart={isRowReady}>{"+44 7597296544"}</Trail>
          </RowChildContainer>
        )}
      />
      <Row
        animation="animateFromRight"
        border
        renderRowChild={(isRowReady) => (
          <RowChildContainer childPosition="touchBtBorder" textSize="md">
            <Trail animationStart={isRowReady}>{"wesleymhj@gmail.com"}</Trail>
          </RowChildContainer>
        )}
      />
      <Row
        animation="animateFromLeft"
        border
        renderRowChild={(isRowReady) => (
          <RowChildContainer childPosition="touchBtBorder" textSize="xl">
            <Trail animationStart={isRowReady}>{["LONDON,", "UK"]}</Trail>
          </RowChildContainer>
        )}
      />
    </section>
  );
};
