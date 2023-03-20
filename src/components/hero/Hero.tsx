import { useState } from "react";
import { CD } from "../CD";
import { Trail } from "../common/animation/Trail";
import { Row } from "../common/ui/grid/Row";
import { RowChildContainer } from "../common/ui/grid/RowContainers";

export const Hero = () => {
  return (
    <section className="grid grid-rows-5 grid-flow-col overflow-hidden min-h-[90vh] lg:min-h-[98vh] text-orange">
      <Row
        animation="animateFromLeft"
        border
        renderRowChild={(isRowReady) => (
          <RowChildContainer
            childPosition="touchBtBorder"
            textSize="xl"
            fontBold
          >
            <Trail animationStart={isRowReady}>{["WESLEY", "JESSIE"]}</Trail>
          </RowChildContainer>
        )}
      />
      <Row
        border
        animation="animateFromRight"
        renderRowChild={(isRowReady) => (
          <RowChildContainer
            childPosition="touchBtBorder"
            textSize="xl"
            fontBold
          >
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
          <RowChildContainer
            childPosition="touchBtBorder"
            textSize="md"
            fontBold
            p="lg:pb-1"
          >
            <Trail animationStart={isRowReady}>{"+44 7597296544"}</Trail>
          </RowChildContainer>
        )}
      />
      <Row
        animation="animateFromRight"
        border
        renderRowChild={(isRowReady) => (
          <RowChildContainer
            childPosition="touchBtBorder"
            textSize="md"
            fontBold
            p="lg:pb-1"
          >
            <Trail animationStart={isRowReady}>{"wesleymhj@gmail.com"}</Trail>
          </RowChildContainer>
        )}
      />
      <Row
        animation="animateFromLeft"
        border
        renderRowChild={(isRowReady) => (
          <RowChildContainer
            childPosition="touchBtBorder"
            textSize="xl"
            fontBold
          >
            <Trail animationStart={isRowReady}>{["LONDON,", "UK"]}</Trail>
          </RowChildContainer>
        )}
      />
    </section>
  );
};
